import React, { useEffect, useState } from 'react'
import './NewCollection.css'
import Item from '../Items/Item'


const NewCollection = () => {

  const [new_collection,setNew_collection] = useState([]);

  
  useEffect(()=>{
  fetch('http://localhost:5000/newcollections')
  .then((response)=>response.json())
  .then((data)=>setNew_collection(data));
  },[])


  return (
    <div className='newCollection'>
    <h1>NEW COLLECTIONS</h1>
    <hr />
    <div className="collections">
      {new_collection.map((p, i) => {
        return (
          <Item
            key={i}
            id={p.id}
            img={p.image}
            name={p.name}
            new_price={p.new_price}
            old_price={p.old_price}
          />
        );
      })}
    </div>
    </div>
  )
}

export default NewCollection
