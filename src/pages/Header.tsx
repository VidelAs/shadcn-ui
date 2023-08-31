import logo from "/src/assets/patitos.png"
import { Link } from "react-router-dom";
interface MenuItem {
  label: string;
  link: string;
}

const menuItems: MenuItem[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Learn",
    link: "/learn",
  },
  {
    label: "About",
    link: "/about",
  },
  
];

const Header = () => {
  return (
    <div className="bg-[#001489] flex items-center md:w-full md:h-36 font-black md:text-2xl sm:w-full sm:h-28">
      <div className="flex flex-1 md:h-32 md:w-24 md:ms-8 sm:h-24 sm:w-20">
        <img src={logo} alt="Logo" />
      </div>
      <div className="ml-4 mr-10">
        <nav className="flex space-x-7 ">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="text-white hover:text-[#DA291C] transition duration-300 ease-in-out "
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;