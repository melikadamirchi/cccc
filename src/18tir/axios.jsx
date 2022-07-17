import React from 'react'
import Axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

function axioss() {
    const [url,setUrl]=useState('');
    useEffect(() => { 

        Axios.get('https://axios-http.com/').then((url)=>{
        setUrl(url.data)
        })
    },[])

  return (
    <div><img src={url} alt="" /></div>
  )
}

export default axioss