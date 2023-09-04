import logo from "/public/assets/patitos.png";
import { Link } from "react-router-dom";
interface MenuItem {
  label: string;
  link: string;
}

const menuItems: MenuItem[] = [
  {
    label: "Learn",
    link: "/learn",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Patitos",
    link: "/patitos",
  },
];

const Header = () => {
  return (
    <div className="bg-[#001489] flex items-center w-full font-black  md:h-36 md:text-2xl sm:h-28 xs:h-24 xs:text-xl xxs:h-20 xxs:text-base ">
      <div className="flex flex-1">
        <Link to={"/"}>
          <img src={logo} alt="Logo" className="md:h-32 md:w-28 md:ms-8 sm:h-24 sm:w-20 xs:h-20 xs:w-16 xxs:w-14 xxs:h-16"/>
        </Link>
      </div>
      <div className="ml-4 mr-10 xxs:mr-3">
        <nav className="flex space-x-7">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="text-white hover:text-[#DA291C] transition duration-300 ease-in-out text-left "
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
