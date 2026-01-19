import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import cart_icon from '../../Assets/cart_icon.png'
import logo from '../../Assets/logo.png'
import menu_icon from '../../Assets/menu.png'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

  const { getTotalcartitems } = useContext(ShopContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="flex items-center justify-around bg-[#f5f5f5]
                 shadow-[0_2px_4px_rgba(0,0,0,0.1)]
                 px-[5px] py-[5px]
                 max-[1280px]:px-[50px] max-[1280px]:py-[12px]
                 max-[1024px]:px-[20px]
                 max-[800px]:px-0 max-[800px]:py-[10px]
                 max-[500px]:py-[8px]"
    >
      {/* Logo */}
      <div className="flex items-center gap-[10px] text-[30px] font-semibold text-black
                      max-[500px]:scale-[0.8]">
        <img src={logo} alt="logo" className="max-[1280px]:w-[40px]" />
        <p className="max-[1280px]:text-[25px]">SHOPPER</p>
      </div>

      {/* Menu Icon (Mobile) */}
      <img
        src={menu_icon}
        alt="menu"
        onClick={() => setMenuOpen(!menuOpen)}
        className={`hidden max-[800px]:block w-[30px] cursor-pointer ml-[20px]
                    transition-transform duration-300
                    ${menuOpen ? "rotate-90" : ""}`}
      />

      {/* Navigation Menu */}
      <ul
        className={`flex items-center gap-[50px] list-none
                    text-[#626262] text-[20px] font-medium
                    max-[1280px]:gap-[30px]
                    max-[1024px]:gap-[25px]
                    max-[800px]:absolute max-[800px]:top-[50px]
                    max-[800px]:w-full max-[800px]:h-[80px]
                    max-[800px]:justify-center max-[800px]:bg-white
                    max-[800px]:hidden
                    ${menuOpen ? "max-[800px]:flex z-10" : ""}`}
      >
        {["Shop", "Men", "Women", "Kids"].map((item) => (
          <li
            key={item}
            className="cursor-pointer font-bold text-[20px]
                       max-[1280px]:text-[17px]
                       hover:text-[#001ee1] hover:p-[10px]"
          >
            <Link
              to={item === "Shop" ? "/" : `/${item.toLowerCase()}`}
              className="no-underline text-inherit"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Login & Cart */}
      <div className="flex items-center gap-[45px] max-[1280px]:gap-[20px]">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
            className="w-[157px] h-[58px] rounded-full
                       border border-[#7a7a7a]
                       bg-[aliceblue] text-black
                       text-[20px] font-medium cursor-pointer
                       active:bg-[#7a7a7a] active:text-[#f5f5f5]
                       max-[1280px]:w-[100px] max-[1280px]:text-[17px]
                       max-[1024px]:w-[80px] max-[1024px]:h-[30px]
                       max-[1024px]:text-[15px]"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button
              className="w-[157px] h-[58px] rounded-full
                         border border-[#7a7a7a]
                         bg-[aliceblue] text-black
                         text-[20px] font-medium cursor-pointer
                         active:bg-[#7a7a7a] active:text-[#f5f5f5]
                         max-[1280px]:w-[100px] max-[1280px]:text-[17px]
                         max-[1024px]:w-[80px] max-[1024px]:h-[30px]
                         max-[1024px]:text-[15px]"
            >
              Login
            </button>
          </Link>
        )}

        {/* Cart */}
        <div className="relative">
          <Link to="/cart">
            <img src={cart_icon} alt="cart" className="max-[1280px]:w-[30px]" />
          </Link>

          <div
            className="absolute left-[30px] -top-[10px]
                      w-[15px] sm:w-[22px] h-[18px] sm:h-[22px] rounded-full
                       bg-[#e10000] text-white
                       text-[14px] font-medium
                       flex items-center justify-center"
          >
            {getTotalcartitems()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
