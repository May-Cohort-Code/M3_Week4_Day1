import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ApartmentDetails() {
    const [apartment,setApartment] = useState(null)
    const {id} = useParams()


    useEffect(()=>{
        axios.get(`https://ironbnb-m3.herokuapp.com/apartments/${id}`)
        .then((response)=>{
            setApartment(response.data)
        })
    

    },[])

  return (
    <div><h1>Apartment Details</h1>
        {!apartment && <h2>...Loading</h2>}

        {apartment && (
            <div className='card'>
            <h2>{apartment.title}</h2>
            <p>{apartment.price}</p>
            </div>
        )}

    </div>
  )
}

export default ApartmentDetails