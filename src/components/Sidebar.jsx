import React,{useState} from 'react'
import {data,model,product} from '../data2'
const Sidebar = () => {
    const [items,setItems]=useState(data);
    const [models,setModel]=useState(model);
    const [products,setProduct]=useState(product);

    
    const filterResult=(catItem)=>{
      console.log("catItem");
       const result =products.filter((curData=>{
        return curData.product_category_name===catItem;
       }))
       console.log(result);
       setProduct(result)
   
    }

  return (
    <div>
        <div className=''>Category</div>
        <button onClick={()=>filterResult("Boys")}>boys</button>
        <button onClick={()=>filterResult("Ladies")}>Ladies</button>
        <button onClick={()=>filterResult("Gents")}>Gents</button>
        <button onClick={()=>filterResult("Gents Giant")}>Gents Giant</button>
        <button onClick={()=>filterResult("Ladies Giant")}>Ladies Giant</button>
      


      <div>Brand</div>
      
   
      
      {items.map((item) => (
        <>
        <button className='flex' onClick={()=>filterResult('Nike')}>{item.name}</button>
        </>
        ))}
       
  
      
     
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
