import React,{useState} from "react";
import { Link,useNavigate, useParams} from "react-router-dom";
import { toast } from "react-toastify";
import {Tooltip} from 'react-tooltip';
import axios from "axios";
import "./Table.css"

const Tables=(props)=>{
    let [users,setUsers]=useState([])
    let [fill,setFill]=useState([])

   // console.log(postData);
   let {id}=useParams();

    let navigate=useNavigate()
    axios.get('http://localhost:8900/users')
    .then(res=>setUsers(res.data.userList))
    .catch(err=>console.log(err))

    //console.log(users)
   
        let handleEdit=(id)=>{
        axios.get(`http://localhost:8900/user/${id}`)
         .then(res=>{
            setUsers(res.data.userList )
            console.log(res.data.userList);
        })
        navigate(`/edit/${id}`)
        }
        
        


    let handleView=(id)=>{
       let filterData= users.filter(a=>a._id==id);
       setFill(filterData)
       navigate(`/view/${id}`)
    }

    let handleDelete=(id)=>{
        if(window.confirm("Are you sure")){
         axios.delete(`http://localhost:8900/user/${id}`)
         .then(res=>{
            console.log(res.data);
            toast.success(res.data.message)
        })
         .catch(err=>console.log(err))
        
        }
         
    }
    //console.log(props.postData);
   // let newObj=Object.entries(props.postData).map(e=>({[e[0]]:[e[1]]}))
   let  newObj=[{...props.postData}]
   // console.log(newObj);
    //const {name,email,address,city,pincode,country}=props.postData

    return(
        <>
        <div className="table-respnsive">
{/* <marquee width="80%" style={{marginLeft:"100px",color:"green",fontSize:"14px"}} Scrollamount="10">I done CRUD operations (View,Delete,Create,Update).Thank you Aagnia giving me this Opportunity to prove myself....</marquee> */}
       
        <table className=" justify-content-between container table table-bordered  table-hover">
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>City</th>
                <th>Pincode</th>
                <th>Country</th>
                <th className="t1">Actions</th>
            </tr>
            </thead>
           
           <tbody>
           {newObj.map((a,i)=>(
            <tr key={a._id}>
                <td>{++i}</td>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <td>{a.address}</td>
                <td>{a.city}</td>
                <td>{a.pincode}</td>
                <td>{a.country}</td>
                <td className="t1" >
                    <div class="btn-group" role="group" >
                    <Link to={`/edit/${a._id}`}><button data-tooltip-id="edit" data-tooltip-content="Edit" type="button" className="btn btn-primary" onClick={()=>handleEdit(a._id)}><i className="bi bi-pen-fill"></i></button></Link>
                    <Link to={`/view/${a._id}`}><button data-tooltip-id="view" data-tooltip-content="View" type="button" className="btn btn-warning" onClick={()=>handleView(a._id)}><i className="fa-solid fa-eye"></i></button></Link>
                    <button type="button" data-tooltip-id="delete" data-tooltip-content="Delete" className="btn btn-danger" onClick={()=>handleDelete(a._id)}><i className="bi bi-trash"></i></button>
                    </div>
                </td>
            </tr>
           ))}
       
            </tbody>
           

        </table>
        </div>

        <Tooltip id="edit" style={{padding:"2px",borderRadius:"20px"}}/>
        <Tooltip id="view" style={{backgroundColor:"yellow",color:"black",padding:"2px",borderRadius:"20px"}}/>
        <Tooltip id="delete" style={{backgroundColor:"red",color:"white",padding:"2px",borderRadius:"20px"}}/>
    </>
    )
}
export default Tables;