import React,{useState} from 'react'
import {data,model} from '../data2'
const Sidebar = () => {
    const [items,setItems]=useState(data);
    const [models,setModel]=useState(model);
    console.log(items);
  return (
    <div>
        <div>Category</div>
      <select>
        <option>fhbj</option>
        <option>fhbj</option>
      </select>


      <div>Brand</div>
      
   
      <select>
      {items.map((item) => (
        <>
        <option>{item.name}</option>
        </>
        ))}
        </select>
  
      
     
      <div>Model</div>
      <select>
      {models.map((model) => (
        <>
        <option>{model.model_name}</option>
       
        </>
        ))}
      </select>

</div>
   
  )
}

export default Sidebar
