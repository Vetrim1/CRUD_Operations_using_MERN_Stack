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
    }
    //console.log(adata);
    const addSubmitHandler=(e)=>{
        axios.post("http://localhost:8900/user",adata)
       .then(res=>{
        //addData(res.data);
        toast.success(res.data)
    })
       .catch(err=>console.log(err))
       navigate('/')
    }

    return(
        <>
      
        <form id="form" className="justify-content-center" onSubmit={addSubmitHandler}>
        <h4>Add Your Details</h4>
            <fieldset>
            <label>Name :</label>
            <input className="in" type="text" name="name"  htmlFor="name"  spellCheck="true" required onChange={handleInput}/><br/>
            <label>Address : </label>
            <input className="in" type="text" name="address" htmlFor="address"  spellCheck="true" required onChange={handleInput}/><br/>
            <label>City : </label>
            <input className="in" type="text" name="city"  htmlFor="city"  required onChange={handleInput}/><br/>
            <label>Pincode : </label>
            <input  className="in"type="text" name="pincode"  htmlFor="pincode"  maxLength="6" required onChange={handleInput}/><br/>
            <label>Country : </label>
            <input className="in" type="text" name="country"  htmlFor="country"  spellCheck="true" required onChange={handleInput}/><br/>
            <input className="submit"  type="submit" value="Submit" htmlFor="submit"/>
            
            <Link to="/"><button style={{marginLeft:"80px",padding:"8px"}} type="button" className="btn btn-secondary">Back</button></Link>
            
            </fieldset>
            
        </form>
     
        </>
    )
}
export default Add;