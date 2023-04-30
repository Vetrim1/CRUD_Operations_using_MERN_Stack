import React from "react";
import {toast } from 'react-toastify';

let Footer=()=>{
    const notify = () => toast("Wow you clicked 2nd button!");
    return(
        <>
        <div
        className=" d-flex justify-content-between container " >
        <div >Showing 5 out of 25 entries</div>
    <div>
        <button className="btn btn-light">Prev</button>
        <button className="btn btn-light">1</button>
        <button className="btn btn-primary active" onClick={notify}>2</button>
        <button className="btn btn-light">3</button>
        <button className="btn btn-light">4</button>
        <button className="btn btn-light">5</button>
        <button className="btn btn-light">Next</button>
    </div>
    
    </div>
        </>
    )
}
export default Footer;