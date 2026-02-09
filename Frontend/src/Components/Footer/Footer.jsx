import { Link } from 'react-router-dom'
import insta from '../../Assets/instagram_icon.png'
import footer_logo from '../../Assets/logo_big.png'
import pintesterest from '../../Assets/pintester_icon.png'
import wp from '../../Assets/whatsapp_icon.png'

const Footer = () => {
  const getYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0b0b0b] pt-20 pb-10 px-6 lg:px-20 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">

        {/* Logo Section */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <Link to="/" className="flex items-center gap-2 group ">
            <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform">
              <img src={footer_logo} alt="logo" className="-rotate-45 group-hover:rotate-0 transition-transform w-5" />
            </div>
            <p className="text-4xl font-black tracking-tighter text-white uppercase italic">
              Shopper<span className="text-red-600">.</span>
            </p>
          </Link>
          <p className="text-gray-500 text-[10px] uppercase tracking-[0.5em] font-medium">
            Elevating the Everyday
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-12 list-none">
          {["Company", "Products", "Offices", "About", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-red-500 transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex gap-6 mb-16">
          {[insta, pintesterest, wp].map((icon, idx) => (
            <div
              key={idx}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center cursor-pointer group hover:border-red-600 transition-all duration-300"
            >
              <img
                src={icon}
                alt="social"
                className="w-5 h-5 opacity-60 group-hover:opacity-100 invert group-hover:brightness-100 transition-all"
              />
            </div>
          ))}
        </div>

        {/* Bottom Section: Copyright */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[10px] uppercase tracking-widest">
            © {getYear} Shopper Global. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-gray-600 text-[10px] uppercase tracking-widest cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span className="text-gray-600 text-[10px] uppercase tracking-widest cursor-pointer hover:text-white transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
