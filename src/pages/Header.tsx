import logo from "/src/assets/patitos.png"
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
    label: "Blog",
    link: "/blog",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Learn",
    link: "/learn",
  },
];

const Header = () => {
  return (
    <div className="bg-[#001489] flex items-center w-full h-36 font-black text-2xl">
      <div className="flex lg:flex-1 h-32 w-24 ms-8">
        <img src={logo} alt="Logo" />
      </div>
      <div className="ml-4 mr-10">
        <nav className="flex space-x-7 ">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-white hover:text-[#DA291C] transition duration-300 ease-in-out "
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;