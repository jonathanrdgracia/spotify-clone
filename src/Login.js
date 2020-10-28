import React, { useEffect,useState } from 'react'
import './Login.css'
import { getTokenFromUrl , loginUrl } from './spotify'

const Login = () => {
    const [ token, setToken ] = useState(null)

    useEffect(()=>{
        const hash = getTokenFromUrl()
        //window.location.hash = ''
        const _token = hash.access_token
        if(_token){
            setToken(_token)
        }

        console.log(`This is the token ${hash}`);

    },[])

    return (
        <div className='login'>
            <img src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' />
            <a href={loginUrl} >LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
