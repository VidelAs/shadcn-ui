import Github from "/public/assets/github.png";
import Youtube from "/public/assets/youtube.png";
const Footer = () => {
  return (
   <footer className="w-full h-16 text-center">
    <hr className="mb-8"/>
      <p className="align-bottom">Copyright 2023©</p>
      <div className="flex justify-center">
        <img src={Github} alt="github" className="w-10 h-10" />
        <img src={Youtube} alt="youtube" className="w-10 h-10" />
      </div>
   </footer>
  );
};

export default Footer;
