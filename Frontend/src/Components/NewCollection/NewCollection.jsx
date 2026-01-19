import { useEffect, useState } from 'react';
import Item from '../Items/Item';

const NewCollection = () => {

  const [new_collection, setNew_collection] = useState([]);


  useEffect(() => {
    fetch('http://localhost:5000/newcollections')
      .then((response) => response.json())
      .then((data) => setNew_collection(data));
  }, [])


  return (
    <div className="flex flex-col items-center gap-[10px] mb-[100px]">
      <h1
        className="text-[#171717] text-[40px] font-bold
               max-[800px]:text-[35px]
               max-[500px]:text-[30px]"
      >
        NEW COLLECTIONS
      </h1>

      <hr
        className="w-[100px] h-[6px] rounded-[10px] bg-[#252525]
               max-[800px]:w-[90px] max-[800px]:h-[5px]
               max-[500px]:w-[80px]"
      />

      <div
        className="mt-[50px] grid grid-cols-4 gap-[30px]
               max-[800px]:grid-cols-3
               max-[500px]:grid-cols-2"
      >
        {new_collection.map((p, i) => (
          <Item
            key={i}
            id={p.id}
            img={p.image}
            name={p.name}
            new_price={p.new_price}
            old_price={p.old_price}
          />
        ))}
      </div>
    </div>
  )
}

export default NewCollection
