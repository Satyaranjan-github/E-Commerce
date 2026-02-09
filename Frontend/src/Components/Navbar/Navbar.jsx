import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import cart_icon from '../../Assets/cart_icon.png'
import logo from '../../Assets/logo.png'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

  const { getTotalcartitems } = useContext(ShopContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#0b0b0b]/80 backdrop-blur-md px-6 py-4 lg:px-20">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">

        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform">
            <img src={logo} alt="logo" className="-rotate-45 group-hover:rotate-0 transition-transform w-5" />
          </div>
          <p className="text-xl font-black tracking-tighter text-white uppercase italic">
            Shopper<span className="text-red-600">.</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10">
          {["Shop", "Men", "Women", "Kids"].map((item) => (
            <li key={item} className="relative group">
              <Link
                to={item === "Shop" ? "/" : `/${item.toLowerCase()}`}
                className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 group-hover:text-white transition-colors"
              >
                {item}
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600 transition-all group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* Right Actions: Auth & Cart */}
        <div className="flex items-center gap-6 text-gray-400 text-xs">
          {localStorage.getItem("auth-token") ? (
            <button
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}
              className="hidden sm:block uppercase tracking-widest font-bold border-b border-white/20 pb-1 hover:border-red-600 transition-colors"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="hidden sm:block">
              <button className="uppercase tracking-widest font-bold border-b border-white/20 pb-1 hover:border-red-600 transition-colors">
                Login
              </button>
            </Link>
          )}

          {/* Cart Icon */}
          <Link to="/cart" className="relative hover:scale-110 transition-transform">
            <img src={cart_icon} alt="cart" className="w-6 invert" />
            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-red-600 text-[10px] font-bold flex items-center justify-center text-white">
              {getTotalcartitems()}
            </div>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5"
          >
            <div className={`w-6 h-[2px] bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-[2px] bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-[2px] bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#0b0b0b] border-b border-white/10 transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-64' : 'max-h-0'}`}>
        <ul className="flex flex-col items-center py-8 gap-6">
          {["Shop", "Men", "Women", "Kids"].map((item) => (
            <li key={item} onClick={() => setMenuOpen(false)}>
              <Link
                to={item === "Shop" ? "/" : `/${item.toLowerCase()}`}
                className="text-sm uppercase tracking-widest font-bold text-gray-300 hover:text-red-500"
              >
                {item}
              </Link>
            </li>
          ))}
          <li className="sm:hidden">
            <Link to="/login" className="text-xs text-red-500 font-bold uppercase tracking-[0.3em]">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
