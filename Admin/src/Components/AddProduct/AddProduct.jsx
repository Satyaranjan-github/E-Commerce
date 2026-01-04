import React from 'react';
import upload_area from '../../assets/upload_area.svg';

const AddProduct = () => {

  const [image, setImage] = React.useState(false);
  const [productDetails, setProductDetails] = React.useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: " "
  });
  const imagehandler = (e) => {
    setImage(e.target.files[0]);
  }

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
  }

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formdata = new FormData();
    formdata.append('product', image);

    await fetch('http://localhost:5000/upload', {
      method: "POST",
      headers: {
        Accept: 'application/json',
      },
      body: formdata
    }).then((resp) => resp.json()).then((data) => { responseData = data })

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch('http://localhost:5000/addproduct', {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      }).then((resp) => resp.json()).then((data) => {
        data.success ? alert("Product added Successfully") : alert("failed")
      })
    }
  }


  return (
    <div
      className="
    mx-8
    my-5
    w-full
    max-w-[800px]
    rounded-md
    bg-white
    px-12
    py-8

    max-[800px]:mx-5
    max-[800px]:px-6
  "
    >
      <div className="mb-5 w-full text-[#7b7b7b]">
        <p className="mb-1 text-lg">Product Title</p>
        <input
          type="text"
          name="name"
          value={productDetails.name}
          onChange={changeHandler}
          placeholder="Product Title"
          className="
        h-[50px]
        w-full
        rounded
        border
        border-[#c3c3c3]
        px-4
        text-sm
        text-[#7b7b7b]
        outline-none
        focus:border-blue-500
      "
        />
      </div>
      <div className="mb-5 flex w-full gap-10 max-[800px]:flex-col max-[800px]:gap-5">
        <div className="w-full text-[#7b7b7b]">
          <p className="mb-1 text-lg">Product Price</p>
          <input
            type="text"
            name="old_price"
            value={productDetails.old_price}
            onChange={changeHandler}
            placeholder="Old Price"
            className="h-[50px] w-full rounded border border-[#c3c3c3] px-4 text-sm outline-none focus:border-blue-500"
          />
        </div>

        <div className="w-full text-[#7b7b7b]">
          <p className="mb-1 text-lg">Offer Price</p>
          <input
            type="text"
            name="new_price"
            value={productDetails.new_price}
            onChange={changeHandler}
            placeholder="New Price"
            className="h-[50px] w-full rounded border border-[#c3c3c3] px-4 text-sm outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="mb-5 w-full text-[#7b7b7b]">
        <p className="mb-1 text-lg">Product Category</p>
        <select
          name="category"
          value={productDetails.category}
          onChange={changeHandler}
          className="
        h-[50px]
        w-[120px]
        rounded
        border
        border-[#7b7b7b8b]
        px-3
        text-sm
        outline-none
        focus:border-blue-500
      "
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>

      <div className="mb-5 w-full text-[#7b7b7b]">
        <label htmlFor="file-input" className="inline-block cursor-pointer">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            alt="Upload"
            className="
          h-[120px]
          w-[120px]
          rounded-lg
          object-contain
          transition
          hover:scale-105
        "
          />
        </label>
        <input onChange={imagehandler} type="file" name='image' id='file-input' hidden />
      </div>
      <button onClick={() => Add_Product()} className="
      mt-5
      h-[50px]
      w-[160px]
      rounded-md
      bg-[#6079ff]
      text-white
      text-base
      font-medium
      transition
      hover:bg-[#4f67e6]
      active:scale-95
    ">Add Product</button>
    </div>
  )
}


export default AddProduct
