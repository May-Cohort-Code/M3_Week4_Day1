import { useState, useEffect } from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'
 
function ApartmentsPage() {
  const [apartments, setApartments] = useState([]);
  const [isLoading,setIsLoading] = useState(true)
  
    useEffect(()=>{
        axios.get('https://ironbnb-m3.herokuapp.com/apartments')
        .then((response)=>{
            console.log(response.data)
            const reversedAaparments= [...response.data].reverse()
            setApartments(reversedAaparments)
            setIsLoading(false)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

  return (
    <div>
      <h3>List of apartments</h3>
      {isLoading && <h2>...Loading</h2>}
        {apartments.map((oneApartment)=>{
            return(
                <div key={oneApartment._id} className="card">
                    <img src={oneApartment.img} alt="apartment Image" />
                    <h3>{oneApartment.title}</h3>
                    <p>{oneApartment.pricePerDay}</p>
                    <Link to={oneApartment._id}>See Apartment Details</Link>
                </div>
            )
        })}
    </div>
  );
}
 
export default ApartmentsPage;



//page that displays ALL my resources:

// 1. create a state and initialize it to an empty array

// 2. in my useEffect make an axios call to the endpoint for all apartments

// 3. set the state to the response.data

// 4. map through that state and show the information we want to display from the API


