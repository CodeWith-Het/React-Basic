import React,{useState} from 'react'
// import React from 'react'
import './style.css'
import axios from 'axios'

const IntegratingAPI = () => {

    const [data, setData] = useState([])

const getData =async () =>{
   const res=await axios.get("https://fakestoreapi.com/carts")
   console.log(res)

setData(res.data)
console.log(data[0].id)


    //const data = res.data
    // console.log(res)
    // console.log(data)
}

  return (
    <div>
        <button onClick={getData}  className='bg-green-400 text-white text-2xl font-semibold p-6 m-4 rounded active:scale-90'>Get DATA</button>
        <div className='p-5 mt-5 bg-amber-400 h-100 w-100 text-black font-medium'>
            {data.map(function(elem, idx) {
                return (
                    <div key={elem.id || idx} className='text-black bg-slate-200 rounded px-5 py-5 m-2 flex items-center justify-between'>
                        <h3>id={elem.id}, userId={elem.userId}, Date={elem.date}</h3>
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default IntegratingAPI