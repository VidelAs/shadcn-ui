import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import avatarAngel from "/public/assets/angel-image.png";
import avatarBleer from "/public/assets/bleer-image.png";
import avatarJonathan from "/public/assets/jonathan-image.png";
import avatarVidel from "/public/assets/videl-image.png";
import logoGitHub from "/public/assets/github.png";
const About = () => {
  return (
    <div className="md:mb-36">
      <h1 className="md:text-4xl text-center font-black text-[#DA291C] mb-10 mt-10  sm:text-2xl xxs:text-3xl xxs:mb-4 xxs:mt-4">
        About
      </h1>
      <div className="text-justify mb-24">
        <p className="md:mr-40 md:ml-40 sm:mr-28 sm:ml-28 xs:mr-16 xs:ml-16 xxs:mr-14 xxs:ml-14">
          At Patitos CR, we are a team of passionate Full Stack developers
          dedicated to driving the success of our own company through innovative
          technological solutions. We specialize in developing custom
          applications and software to meet the unique needs of our company and
          enhance our internal processes.
        </p>
        <p className="md:mr-40 md:ml-40 sm:mr-28 sm:ml-28 xs:mr-16 xs:ml-16 xxs:mr-14 xxs:ml-14">
          As experts in cutting-edge technologies and programming languages, we
          have the ability to create tailored, targeted solutions that address
          the specific challenges we face. From building efficient and secure
          web platforms to designing automated internal tools, we use our
          expertise to improve the efficiency, productivity, and overall
          performance of our own company.
        </p>
        <p className="md:mr-40 md:ml-40 sm:mr-28 sm:ml-28 xs:mr-16 xs:ml-16 xxs:mr-14 xxs:ml-14">
          What sets us apart from other development companies is our focus on
          our own needs and objectives. As an integral part of our company, we
          understand the unique demands and requirements we face on a daily
          basis. We work closely with our internal teams to identify
          opportunities and deliver customized solutions that drive innovation
          and sustainable growth.
        </p>
        <p className=" md:mr-40 md:ml-40 sm:mr-28 sm:ml-28 xs:mr-16 xs:ml-16 xxs:mr-14 xxs:ml-14">
          We take pride in our ability to quickly adapt to the changing needs of
          the market and stay at the forefront of technological trends. We
          constantly stay up-to-date with the latest techniques and tools in
          Full Stack development, enabling us to deliver efficient and
          high-quality solutions.
        </p>
        
      </div>
      <div className="grid grid-cols-3 place-items-center sm:m-4 items-center">
          <img className="md:w-60 md:h-28  sm:w-48 sm:h-24 xs:w-40 xs:h-20 xxs:w-32 xxs:h-16" src="https://www.adslzone.net/app/uploads-adslzone.net/2021/10/lenguaje-de-programacion.jpg" />
          <img className="md:w-60 md:h-28  sm:w-48 sm:h-24 xs:w-40 xs:h-20 xxs:w-32 xxs:h-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxV98Pm46Hh76dOCTj3gNdirprYqTvfmXC-Q&usqp=CAU" />
          <img className="md:w-60 md:h-28  sm:w-48 sm:h-24 xs:w-40 xs:h-20 xxs:w-32 xxs:h-16" src="https://cecytebcs.edu.mx/wp-content/uploads/2022/02/programacion.jpeg" />
        </div>
      
      <hr className="w-full" />
      <h1 className="mt-8 md:text-3xl text-center font-black text-[#DA291C] sm:text-2xl xs:text-xl xxs:text-2xl">
        The team
      </h1>
      <h3 className="text-center mx-8">
        The group is composed of the following persons:
      </h3>
      <div className="grid md:grid-cols-3 gap-3 place-items-center mt-8  sm:grid-cols-2 sm:m-6 xs:grid-cols-1 xxs:grid-cols-1">
        <Card className="md:w-80 md:h-72 text-center  sm:w-64 sm:h-72 xs:w-60 xs:h-64 xxs:w-56 xxs:h-60">
          <CardHeader>
            <CardTitle>Fabiola Blanco</CardTitle>
            <CardDescription>Developer</CardDescription>
          </CardHeader>
          <CardContent>
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/60586774?v=4" />
            </Avatar>
          </CardContent>
          <CardFooter>
            <a href="https://github.com/ItsFaby">
              <img
                src={logoGitHub}
                alt="github profile"
                className="md:w-10 md:h-10 sm:w-9 sm:h-9 xs:w-8 xs:h-8 xxs:w-8 xxs:8"
              />
            </a>
          </CardFooter>
        </Card>
        <Card className="md:w-80 md:h-72 text-center  sm:w-64 sm:h-72 xs:w-60 xs:h-64 xxs:w-56 xxs:h-60">
          <CardHeader>
            <CardTitle>Angel Torres</CardTitle>
            <CardDescription>Developer</CardDescription>
          </CardHeader>
          <CardContent>
            <Avatar>
              <AvatarImage src={avatarAngel} />
            </Avatar>
          </CardContent>
          <CardFooter>
            <a href="https://github.com/DavidTorres09">
              <img
                src={logoGitHub}
                alt="github profile"
                className="md:w-10 md:h-10 sm:w-9 sm:h-9 xs:w-8 xs:h-8 xxs:w-8 xxs:8"
              />
            </a>
          </CardFooter>
        </Card>
        <Card className="md:w-80 md:h-72 text-center  sm:w-64 sm:h-72 xs:w-60 xs:h-64 xxs:w-56 xxs:h-60">
          <CardHeader>
            <CardTitle>Bleer Rodriguez</CardTitle>
            <CardDescription>Developer</CardDescription>
          </CardHeader>
          <CardContent>
            <Avatar>
              <AvatarImage src={avatarBleer} />
            </Avatar>
          </CardContent>
          <CardFooter>
            <a href="https://github.com/Bleer30">
              <img
                src={logoGitHub}
                alt="github profile"
                className="md:w-10 md:h-10 sm:w-9 sm:h-9 xs:w-8 xs:h-8 xxs:w-8 xxs:8"
              />
            </a>
          </CardFooter>
        </Card>
        <Card className="md:w-80 md:h-72 text-center  sm:w-64 sm:h-72 xs:w-60 xs:h-64 xxs:w-56 xxs:h-60">
          <CardHeader>
            <CardTitle>Allan Calvo</CardTitle>
            <CardDescription>Manager</CardDescription>
          </CardHeader>
          <CardContent>
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/137963700?v=4" />
            </Avatar>
          </CardContent>
          <CardFooter>
            <a href="https://github.com/acalvocr">
              <img
                src={logoGitHub}
                alt="github profile"
                className="md:w-10 md:h-10 sm:w-9 sm:h-9 xs:w-8 xs:h-8 xxs:w-8 xxs:8"
              />
            </a>
          </CardFooter>
        </Card>
        <Card className="md:w-80 md:h-72 text-center  sm:w-64 sm:h-72 xs:w-60 xs:h-64 xxs:w-56 xxs:h-72">
          <CardHeader>
            <CardTitle>Jonathan Hernandez</CardTitle>
            <CardDescription>Developer</CardDescription>
          </CardHeader>
          <CardContent>
            <Avatar>
              <AvatarImage src={avatarJonathan} />
            </Avatar>
          </CardContent>
          <CardFooter>
            <a href="https://github.com/jahcoto">
              <img
                src={logoGitHub}
                alt="github profile"
                className="md:w-10 md:h-10 sm:w-9 sm:h-9 xs:w-8 xs:h-8 xxs:w-8 xxs:8"
              />
            </a>
          </CardFooter>
        </Card>
        <Card className="md:w-80 md:h-72 text-center  sm:w-64 sm:h-72 xs:w-60 xs:h-64 xxs:w-56 xxs:h-60 xxs:mb-4">
          <CardHeader>
            <CardTitle>Videl Araya</CardTitle>
            <CardDescription>Developer</CardDescription>
          </CardHeader>
          <CardContent>
            <Avatar>
              <AvatarImage src={avatarVidel} />
            </Avatar>
          </CardContent>
          <CardFooter>
            <a href="https://github.com/VidelAs">
              <img
                src={logoGitHub}
                alt="github profile"
                className="md:w-10 md:h-10 sm:w-9 sm:h-9 xs:w-8 xs:h-8 xxs:w-8 xxs:8"
              />
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default About;
