import { Link } from 'react-router-dom'
import addproduct from '../../assets/Product_Cart.svg'
import listproduct from '../../assets/Product_list_icon.svg'

const Sidebar = () => {
  return (
    <div className="flex h-screen w-full max-w-[250px] flex-col gap-5 bg-white pt-8 max-[800px]:h-auto max-[800px]:max-w-none max-[800px]:flex-row max-[800px]:justify-center max-[800px]:pt-8">
      <Link to='/addproduct' style={{ textDecoration: 'none' }}>
        <div className="mx-5 flex cursor-pointer items-center justify-center gap-5 rounded-md
        px-3 py-2 transition hover:bg-gray-200   active:scale-95 max-[800px]:mx-0">
          <img src={addproduct} alt="" className="h-5 w-5" />
          <p className="text-sm font-medium text-gray-700">Add Product</p>
        </div>
      </Link>
      <Link to='/listproduct' style={{ textDecoration: 'none' }}>
        <div
          className="mx-5 flex cursor-pointer  items-center justify-center gap-5   rounded-md px-3 py-2 transition  hover:bg-gray-200 active:scale-95 max-[800px]:mx-0"
        >
          <img src={listproduct} alt="" className="h-5 w-5" />
          <p className="text-sm font-medium text-gray-700">Product List</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar
