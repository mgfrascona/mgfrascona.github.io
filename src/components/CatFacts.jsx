import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext.jsx'
import useFetch from '../hooks/useFetch.jsx'



const CatFacts = () => {
    const { theme } = useContext(ThemeContext)
    const { data, loading, error, retry } = useFetch('https://catfact.ninja/facts?limit=5')

    const retryButtonStyle = {
        padding: '10px 20px',
        marginLeft: '5px',
        marginRight: '5px',
        fontSize: '1rem',
        cursor: 'pointer',
        backgroundColor: theme === 'dark' ? '#3d3d3d' : '#4a48ab',
        color: theme === 'dark' ? '#fff6a4' : 'white',
        border: 'none',
        borderRadius: '30px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s, color 0.3s, transform 0.3s'
    }
    
    if (loading) return <div>Loading data, please wait...</div>
    if (error) return (
        <div>
            <p>Error: {error}</p>
            <button style={retryButtonStyle} onClick={retry}>Retry</button>
        </div>
    )

    console.log(data)

    return (
        <div>
            <h2>Cat Facts!</h2>
            <ul>
                {data.data.map(({fact}, index) => (
                    <li key={index}>{fact}</li>
                ))}
            </ul>
        </div>
        
    )
}

export default CatFacts