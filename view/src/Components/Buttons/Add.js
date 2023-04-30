import React ,{useState} from "react";
import {useNavigate,Link} from "react-router-dom";
import axios from "axios";
import {toast } from 'react-toastify';
let initialValue={name:"",address:"",city:"",pincode:"",country:""}

const Add=()=>{
    
    const [adata,addData]=useState(initialValue)

    const navigate=useNavigate()

    const handleInput=(e)=>{
        const {name,value}=e.target;
        addData({...adata,[name] : value})
        console.log(adata);
    }
    //console.log(adata);
    const addSubmitHandler=(event)=>{
        event.preventDefault();
        axios.post("http://localhost:8900/user",adata,{header:{"Content-Type" : "application/json"}})
       .then(res=>{
        console.log(res);
        toast.success(res.data.message)
    })
       .catch(err=>console.log(err))

       setTimeout(()=>{
       navigate('/')
    },1000)
    }

    return(
        <>
      
        <form id="form" className="justify-content-center" onSubmit={addSubmitHandler}>
        <h4>Add Your Details</h4>
            <fieldset>
            <label>Name :</label>
            <input className="in" type="text" name="name"  htmlFor="name"  required onChange={handleInput}/><br/>
            <label>Email :</label>
            <input className="in" type="email" name="email"  htmlFor="email"  required onChange={handleInput}/><br/>
            <label>Address : </label>
            <input className="in" type="text" name="address" htmlFor="address"  required onChange={handleInput}/><br/>
            <label>City : </label>
            <input className="in" type="text" name="city"  htmlFor="city"  required onChange={handleInput}/><br/>
            <label>Pincode : </label>
            <input  className="in"type="text" name="pincode"  htmlFor="pincode"  maxLength="6" required onChange={handleInput}/><br/>
            <label>Country : </label>
            <input className="in" type="text" name="country"  htmlFor="country"  required onChange={handleInput}/><br/>
            <input className="submit"  type="submit" value="Submit" />
            
            
            <Link to="/"><button style={{marginLeft:"80px",padding:"8px"}} type="button" className="btn btn-secondary">Back</button></Link>
            
            </fieldset>
            
        </form>
     
        </>
    )
}
export default Add;