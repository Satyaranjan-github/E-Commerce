import insta from '../../Assets/instagram_icon.png'
import footer_logo from '../../Assets/logo_big.png'
import pintesterest from '../../Assets/pintester_icon.png'
import wp from '../../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className="
  w-[65%] h-[40vh] mx-auto mb-[150px]
  flex flex-col items-center justify-center gap-[50px]
  px-[140px]
  bg-[linear-gradient(180deg,#fde1ff,#e1ffea22_60%)]
  max-[800px]:px-[45px]
  max-[500px]:px-[45px]
">

      {/* Logo */}
      <div className="flex items-center gap-5">
        <img
          src={footer_logo}
          alt=""
          className="
        max-[800px]:w-[70px]
        max-[500px]:w-[60px]
      "
        />
        <p className="
      text-[#383838] font-bold
      text-[46px]
      max-[800px]:mt-[10px] max-[800px]:text-[35px]
      max-[500px]:mt-[10px] max-[500px]:text-[30px]
    ">
          Shoppers
        </p>
      </div>

      {/* Menu */}
      <ul className="
    flex list-none text-[#252525]
    gap-[50px] text-[20px]
    max-[800px]:gap-[15px] max-[800px]:text-[20px] max-[800px]:font-semibold
    max-[500px]:gap-[10px] max-[500px]:text-[18px] max-[500px]:font-semibold
  ">
        {["Company", "Products", "Offices", "About", "Contacts"].map((item) => (
          <li key={item} className="cursor-pointer">
            <a href="#" className="no-underline text-[#252525]">
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className="
    flex gap-5
    max-[800px]:gap-[15px]
    max-[500px]:gap-[10px]
  ">
        {[insta, pintesterest, wp].map((icon, idx) => (
          <div
            key={idx}
            className="
          p-[10px] pb-[6px]
          bg-[#fbfbfb] border border-[#ebebeb]
          max-[800px]:p-[5px] max-[800px]:border-0
          max-[500px]:w-[20px] max-[500px]:h-[20px] max-[500px]:p-[5px] max-[500px]:pb-[3px] max-[500px]:border-0
        "
          >
            <img src={icon} alt="" />
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="
    w-full mb-[30px]
    flex flex-col items-center gap-[30px]
    text-[#1a1a1a] text-[20px]
    max-[800px]:gap-[20px] max-[800px]:font-semibold max-[800px]:text-[20px]
    max-[500px]:gap-[20px] max-[500px]:font-semibold max-[500px]:text-[18px]
  ">
        <hr className="
      w-[80%] h-[3px] rounded-[10px] border-0 bg-[#c7c7c7]
    " />
        <p>Copyright © 2023 - All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
