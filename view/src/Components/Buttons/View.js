import React,{useState,useEffect} from "react";
import { Link,useParams } from "react-router-dom";
import axios from "axios";
const View=()=>{

    const [view,setView]=useState([]);

    let {id}=useParams();
   setTimeout(()=>{
    axios.get(`http://localhost:8900/user/${id}`)
    .then(res=> setView(res.data.userList))
   },1000)
   
const styles={
    width: "400px",
    marginLeft: "30%",
    marginTop:"5%",
    fontSize: "medium",
    border: "1px solid salmon",
    backgroundColor: "orange",
    padding:"30px" ,
    borderRadius:"10px"
}


    return(
        <>
        {view.map((e)=>{
      
       return <form style={styles} className="justify-content-center">
             <h4>Your Details</h4>
            <fieldset className="flex-column" >
            <label>Name :</label> <span style={{fontWeight:"bolder"}}>{e.name}</span><br/>
            <label>Email :</label> <span style={{fontWeight:"bolder"}}>{e.email}</span><br/>
            <label>Address :</label> <span style={{fontWeight:"bolder"}}>{e.address}</span><br/>
            <label>City :</label> <span style={{fontWeight:"bolder"}}>{e.city}</span><br/>
            <label>Pincode :</label>  <span style={{fontWeight:"bolder"}}>{e.pincode}</span><br/>
            <label>Userid :</label>  <span style={{fontWeight:"bolder"}}>{e._id}</span><br/><br/>
            <div className="d-flex justify-content-evenly">
            <Link to="/"><button type="button" className="btn btn-primary">Back</button></Link>
            <Link to="/add"><button type="button" className="btn btn-primary"><i className="bi bi-person-fill-add"></i> AddUser</button></Link>
            </div>
            </fieldset>
            
        </form>
        })}
     
        </>
    )
}
export default View;