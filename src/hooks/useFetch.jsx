import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading,] = useState(true)
    const [error, setError] = useState(null)
    const [attempt, setAttempt] = useState(0)

    const retry = () => setAttempt(a => a + 1)

    useEffect(() => {
        (async () => {
            setLoading(true)
            setError(null)
            try {
                const response = await fetch(url)
                if (!response.ok) throw new Error('Failed to fetch data')
                const json = await response.json()
            setData(json)
                
            }
            catch (err) {
                setError(err.message)
            }
            finally {
                setLoading(false)
            }
        })()
    }, [ url, attempt ])

    return { data, loading, error, retry }
}

export default useFetch