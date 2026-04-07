import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'

// Scene setup
const canvas = document.querySelector('#hero-canvas')
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setSize(canvas.clientWidth, canvas.clientHeight)
renderer.setPixelRatio(window.devicePixelRatio)

// Environment map for metallic reflections
const pmremGenerator = new THREE.PMREMGenerator(renderer)
scene.environment = pmremGenerator.fromScene(new RoomEnvironment()).texture

camera.position.z = 5

// Gradient background using a large sphere
const bgGeometry = new THREE.SphereGeometry(50, 32, 32)
const bgMaterial = new THREE.ShaderMaterial({
    uniforms: {
        colorCenter: { value: new THREE.Color(0x0d1b4b) },
        colorEdge: { value: new THREE.Color(0x050a1a) }
    },
    vertexShader: `
        varying vec3 vPosition;
        void main() {
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform vec3 colorCenter;
        uniform vec3 colorEdge;
        varying vec3 vPosition;
        void main() {
            float dist = length(vPosition.xy) / 50.0;
            vec3 color = mix(colorCenter, colorEdge, dist);
            gl_FragColor = vec4(color, 1.0);
        }
    `,
    side: THREE.BackSide
})
const bgMesh = new THREE.Mesh(bgGeometry, bgMaterial)
scene.add(bgMesh)

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const keyLight = new THREE.DirectionalLight(0xffffff, 2)
keyLight.position.set(5, 5, 5)
scene.add(keyLight)

const fillLight = new THREE.DirectionalLight(0xffffff, 0.8)
fillLight.position.set(-5, 3, -5)
scene.add(fillLight)

const rimLight = new THREE.DirectionalLight(0xffffff, 1.2)
rimLight.position.set(0, -5, -5)
scene.add(rimLight)

// OrbitControls
const controls = new OrbitControls(camera, renderer.domElement)
controls.enablePan = false
controls.enableZoom = false
controls.enableRotate = true
controls.autoRotate = false

// Bloom post-processing
const composer = new EffectComposer(renderer)
composer.addPass(new RenderPass(scene, camera))

const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.13,  // strength
    0.1,   // radius
    0.5    // threshold
)
composer.addPass(bloomPass)

// Load GLB
const loader = new GLTFLoader()
let mixer = null
const fps = 24
const loopStartTime = 400 / fps  // 16.67s
const endTime = 800 / fps        // 33.33s
const actions = []

loader.load('../assets/Website_Logo.glb', (gltf) => {
    const model = gltf.scene

    model.traverse((child) => {
        if (child.isMesh && child.name.toLowerCase().includes('infinity')) {
            child.material = new THREE.MeshStandardMaterial({
                color: 0x4cc658,
                emissive: 0x4cc658,
                emissiveIntensity: 1.3,
                roughness: 0.7,
                metalness: 1
            })
        }
        if (child.isMesh && child.name.toLowerCase().includes('gear')) {
            child.material = new THREE.MeshStandardMaterial({
                color: 0x3a5dc4,
                roughness: 0.678,
                metalness: 1
            })
        }
    })

    scene.add(model)

    if (gltf.animations.length > 0) {
        mixer = new THREE.AnimationMixer(model)

        gltf.animations.forEach((clip) => {
            const action = mixer.clipAction(clip)
            action.loop = THREE.LoopRepeat  // keep looping
            action.play()
            actions.push(action)
        })
    }
})

// Pause/resume animation on mouse hold
renderer.domElement.addEventListener('mousedown', () => {
    if (mixer) mixer.timeScale = 0
})

window.addEventListener('mouseup', () => {
    if (mixer) mixer.timeScale = 1
})

// Animation loop
const clock = new THREE.Clock()
function animate() {
    requestAnimationFrame(animate)
    const delta = clock.getDelta()

    if (mixer) {
        mixer.update(delta)

        // Manually check time and jump back to frame 400 when frame 800 is hit
        actions.forEach((action) => {
            if (action.time >= endTime) {
                action.time = loopStartTime
            }
        })
    }

    controls.update()
    composer.render()
}
animate()

// Handle resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    composer.setSize(window.innerWidth, window.innerHeight)
})