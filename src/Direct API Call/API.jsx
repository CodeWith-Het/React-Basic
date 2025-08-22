import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const API = () => {

    const [data, setData] = useState([])

const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setData(res.data);
}

useEffect(() => {
    getData()
}, [])


  return (
    <div className='p-10'>
        <div className='p-5 mt-5 bg-white text-black rounded font-medium'>
            {data.map(function(elem, idx) {
                return (
                    <div key={idx}>
                         <h3>id={elem.id}, userId={elem.userId}, Date={elem.date}</h3>
                    </div>
                );
            })}
        </div>
    </div>
    )
}

export default API