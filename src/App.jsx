import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import StarRating from './components/StarRating'
import { FaStar, FaRegStar } from 'react-icons/fa'

/* const michaelsHobbies = [
  "Drawing",
  "Swimming",
  "3D modeling",
  "Reading",
  "Gaming (esp. Nintendo and Minecraft)",
  "Dungeons & Dragons",
  "Worldbuilding"
] */

const michaelsHobbies = [
  {
    hobby: 'Drawing',
    initialRating: '4',
  },
  {
    hobby: 'Swimming',
    initialRating: '2',
  },
  {
    hobby: '3D modeling',
    initialRating: '3',
  },
  {
    hobby: 'Reading',
    initialRating: '2',
  },
  {
    hobby: 'Gaming (esp. Nintendo and Minecraft)',
    initialRating: '4',
  },
  {
    hobby: 'Dungeons & Dragons',
    initialRating: '4',
  },
  {
    hobby: 'Worldbuilding',
    initialRating: '5',
  }
]

const sectionStyle = {
  paddingLeft: '50px',
  paddingRight: '50px',
  paddingTop: '25px',
  paddingBottom: '25px',
  backgroundColor: '#ffe7a0',
  fontSize: '1.1rem',
  width:'60%',
  marginRight:'auto',
  marginLeft:'auto',
  borderRadius: '25px'
}

const App = () => {

  return (
    <div className="app" >
      <Header name="Michael Frascona" tagline="Web Designer with artistic flair!">
        <Nav />
      </Header>
      <main>
        <section style={sectionStyle}>
          <h2>About Me</h2>
          <p>I'm a web and UI/UX designer who first entered the field through animation and 3D art. That background shapes how I work: I build websites that actually feel alive, and I spot details most people skim past. As an autistic designer, I'm wired to notice if something isn't quite right, even if it's tiny. I'd rather fix it than just ship it. I specifically love working with small businesses and nonprofits, where one well-built site can genuinely change how an organization shows up in the world.</p>
        </section>
        <section style={sectionStyle}>
          <h2>Hobbies</h2>
          <ul className="personal-favorites">
            {michaelsHobbies.map(({ hobby, initialRating }, index) => (
              <li key={index}>
                {hobby}
                <StarRating initialRating={initialRating} onClick />
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
