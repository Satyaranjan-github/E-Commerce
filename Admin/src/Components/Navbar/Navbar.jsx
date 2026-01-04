import navlogo from '../../assets/nav-logo.svg'
import navprofile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div
      className="flex items-center justify-between bg-white px-8 py-4 shadow-[0_1px_3px_-2px_#000] mb-px max-[800px]:px-4">
      <img className="w-[200px] max-[800px]:w-[150px]" src={navlogo} alt="" />
      <img src={navprofile} className="w-[75px] max-[800px]:w-[50px]" alt="" />
    </div>
  )
}

export default Navbar
