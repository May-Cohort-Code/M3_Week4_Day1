import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddApartmentPage() {
    const [title,setTitle] = useState('')
    const [price,setPrice] = useState(0)

    const navigate = useNavigate()

    

    function handleSubmit(e){
        e.preventDefault();

        const newApartment = {title:title,pricePerDay: price}
        axios.post(`https://ironbnb-m3.herokuapp.com/apartments`,newApartment)
        .then((response)=>{
            setTitle("")
            setPrice(0)
            alert("New Apartment Created")
            navigate('/')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
      <div className="AddApartmentPage">
        <h3>Add New Apartment</h3>
        <form onSubmit={handleSubmit}>
            <label>
                Title of Apartment:
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
            </label>

            <label>
                Price Per Day:
                <input type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
            </label>
            <button>Submit</button>
        </form>
      </div>
    );
  }
   
  export default AddApartmentPage;


  //Forms in react:

  //for every input we need a state to store the value in