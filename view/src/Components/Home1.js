import React,{useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {Tooltip} from 'react-tooltip';
import Tables from "./Tables"
import Footer from "./Footer";
const Home=()=>{
    const [Post, setPost] = useState([]);
    const [Post1, setPost1] = useState([]);
    const [ Input, setInput] = useState('')

    

    axios.get('http://localhost:8900/users')
      .then((res) => {
        setTimeout(()=>{
        setPost(res.data.userList);
        setPost1(res.data.userList);
      },1000)
      })
      .catch((err) => console.log(err));
  

var handler=(event)=>{setInput(event.target.value)}

  var submit=()=>{ 
    let arr;
        //  if(Input != ''){
        //      arr=Post1.filter(e=>e.id==Input)
        // }else{
        //     arr=Post1;
        // }
       arr= Post.filter(item=>
          item==''?item:item.name.toLowerCase().includes(Input.toLowerCase())
        )
        setPost(arr)
  }

//console.log(Post);

//console.log(Post);
    return(
    <>
    
    <div className="container mt-4">
  <div className="row">
  <div className="col-sm-12 col-12">
 
 <div>
<div className=" d-flex justify-content-between">
  <h5  className="col-sm-3">Customer Details</h5>

 
  <div className="input-group mb-3  col-sm-4" style={{width:"50%"}}>
    <input type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" onChange={handler}/>
    <div className="input-group-append">
      <button className="btn btn-primary"onSubmit={submit}  type="button">Search</button>
    </div>
  </div>
</div>
    
    <Link to="/add"><button data-tooltip-id="create" data-tooltip-content="Create" type="button" className="btn btn-success"><i className="bi bi-person-fill-add"></i>  AddUser</button></Link>
    <br/>
    {Post.filter(item=>
          item==''?item:item.name.toLowerCase().includes(Input.toLowerCase()))
          .map(item=>{
    return <Tables postData={item}/>
  } )}
    <Footer/>
    </div>
  
    </div>
    </div>
    </div>
 

    <Tooltip id="create" style={{backgroundColor:"lightgreen",color:"black",fontWeight:"bolder",padding:"3px",borderRadius:"20px"}}/>
    </>
    )

}
export default Home;