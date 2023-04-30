import React ,{useState,useEffect} from "react";
import {Link,useNavigate,useParams} from "react-router-dom"
import axios from "axios";
import {toast } from 'react-toastify';

const Edit=()=>{
    
    const [adata1,addData1]=useState({name:"",address:"",city:"",pincode:"",country:""})   
    const navigate=useNavigate()

    const {id}=useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8900/user/${id}`)
         .then(res=>{
            console.log(res.data.userList[0]);
            addData1({...res.data.userList[0]})
            //console.log(adata1);
        })   
    },[])

    const handleInput=(e)=>{
        const {name,value}=e.target;
        addData1({...adata1,[name] : value})
        //sefi({...fi,[name] : value})
        //console.log(fi);
    }
  
    const addSubmitHandler=(e)=>{
        e.preventDefault();
      //let datas={}
      const config={headers: {'Content-Type':"application/json"}};
      let url=`http://localhost:8900/user/${id}`
        axios.put(url,JSON.stringify(adata1),config)
        .then(res=>{toast.success(res.data.message)})
        navigate('/')
    
    }
   //console.log(fi);

    return(
        <>
        <form id="form" className="justify-content-center" onSubmit={addSubmitHandler}>
        <h4>Edit Your Details</h4>
        <fieldset>
            <label>Name :</label>
            <input className="in" type="text" name="name" value={adata1.name} htmlFor="name"  spellCheck="true" required onChange={handleInput}/><br/>
            <label>Address : </label>
            <input className="in" type="text" name="address" value={adata1.address} htmlFor="address"  spellCheck="true" required onChange={handleInput}/><br/>
            <label>City : </label>
            <input className="in" type="text" name="city" value={adata1.city} htmlFor="city"  required onChange={handleInput}/><br/>
            <label>Pincode : </label>
            <input  className="in"type="text" name="pincode" value={adata1.pincode} htmlFor="pincode"  maxLength="6" required onChange={handleInput}/><br/>
            <label>Country : </label>
            <input className="in" type="text" name="country" value={adata1.country} htmlFor="country"  spellCheck="true" required onChange={handleInput}/><br/>
            
            <div className="d-flex justify-content-evenly">
            <Link to="/"><input className="submit"  type="button" value="Back"/></Link>
            <input className="submit"  type="submit" value={id ? "Update":"Submit"}/>
            </div>
            </fieldset> 
        </form>
     
        </>
    )
}
export default Edit;