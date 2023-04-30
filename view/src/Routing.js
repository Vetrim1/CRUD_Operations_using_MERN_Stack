import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../node_modules/react-tooltip/dist/react-tooltip.css";
import Home from "./Components/Home";
import View from "./Components/Buttons/View";
import Add from "./Components/Buttons/Add";
import Edit from "./Components/Buttons/Edit";
import Delete from "./Components/Buttons/Delete";

const Routing=()=>{
    return(<>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/view/:id" element={<View/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/delete/:id" element={<Delete/>}/>
        <Route path="*" element={<Home/>}/>
    </Routes>
            
        <ToastContainer/>
     </BrowserRouter>
        </>
    )

}
export default Routing;