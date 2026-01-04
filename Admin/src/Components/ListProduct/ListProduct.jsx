import React, { useEffect } from 'react'
import cross_icon from '../../assets/cross_icon.png'

const ListProduct = () => {
  const [allproduct, setAllproduct] = React.useState([])

  const fetchInfo = async () => {
    await fetch('http://localhost:5000/allproducts').then((resp) =>
      resp.json()).then((data) => {
        setAllproduct(data)
      })
  }

  useEffect(() => {
    fetchInfo();
  }, [])

  const remove_product = async (id) => {
    await fetch('http://localhost:5000/removeproduct', {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id })
    })
    await fetchInfo();
  }

  return (
    <div
      className="m-8 flex h-screen w-full flex-col  items-center rounded-md bg-white px-12 py-3 max-[800px]:m-5 max-[800px]:w-[95%] max-[800px]:px-8">
      <h1 className="mb-4 text-xl font-semibold">All Products List</h1>
      <div
        className="grid w-full grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] gap-2 py-5 text-[15px] font-semibold text-[#454545] max-[800px]:py-4 max-[800px]:text-[12px]">
        <p>Products</p>
        <p>Tittle</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p className="text-center">Remove</p>
      </div>
      <div className="w-full overflow-y-auto">
        <hr />
        {allproduct.map((product, index) => {
          return <>
            <div key={index} className="grid w-full grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr items-center gap-2 py-4 text-[14px] font-medium text-[#454545] max-[800px]:text-[12px]">
              <img src={product.image} alt="" className="h-[80px] object-contain max-[800px]:h-[60px]" />
              <p className="line-clamp-2">{product.name}</p>
              <p>${product.old_price}</p>
              <p className="font-semibold">${product.new_price}</p>
              <p className="capitalize">{product.category}</p>
              <img onClick={() => { remove_product(product.id) }}
                src={cross_icon} alt="" className="mx-auto w-4 cursor-pointer transition hover:scale-110" />
            </div>
            <hr />
          </>
        })}
      </div>
    </div>
  )
}

export default ListProduct
