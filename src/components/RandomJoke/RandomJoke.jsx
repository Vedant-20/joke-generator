import React, { useEffect, useState } from 'react'
import './index.css'

const RandomJoke = () => {
    const url="https://api.chucknorris.io/jokes/random"
    const [isLoading, setIsLoading]=useState(true)
    const [joke, setJoke]=useState({})

    async function getJoke(){
        setIsLoading(true)
        const response=await fetch(url)
        const data=await response.json()
        console.log(data)
        setJoke(data)
        setIsLoading(false)
    }

    useEffect(()=>{
        setTimeout(() => {
            getJoke()
        }, 3000);
    },[])
    
  return (
    <div className='container'>
        <div >
            <img src='https://logos.textgiraffe.com/logos/logo-name/Joke-designstyle-summer-m.png' alt='joke'/>
            {isLoading ? (
                <h3>Loading...</h3>
            ) : (
                <p>{joke.value}</p>
            )}
            
            <button onClick={getJoke}>Generate New Joke</button>
        </div>

    </div>
  )
}

export default RandomJoke