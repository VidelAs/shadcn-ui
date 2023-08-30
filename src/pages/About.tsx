import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import avatarAngel from "/src/assets/angel-image.png";
import avatarBleer from "/src/assets/bleer-image.png";
import avatarJonathan from "/src/assets/jonathan-image.png";
import avatarVidel from "/src/assets/videl-image.png";
import logoGitHub from "/src/assets/github.png";
const About = () => {
  return (
    <div className="mb-36">
      <h1 className="text-4xl text-center font-black text-[#DA291C] mb-10 mt-10">
        About
      </h1>
      <div className=" text-justify mb-8">
        <p className="mr-40 ml-40">
          At Patitos CR, we are a team of passionate Full Stack developers
          dedicated to driving the success of our own company through innovative
          technological solutions. We specialize in developing custom
          applications and software to meet the unique needs of our company and
          enhance our internal processes.
        </p>
        <p className="mr-40 ml-40">
          As experts in cutting-edge technologies and programming languages, we
          have the ability to create tailored, targeted solutions that address
          the specific challenges we face. From building efficient and secure
          web platforms to designing automated internal tools, we use our
          expertise to improve the efficiency, productivity, and overall
          performance of our own company.
        </p>
        <p className="mr-40 ml-40">
          What sets us apart from other development companies is our focus on
          our own needs and objectives. As an integral part of our company, we
          understand the unique demands and requirements we face on a daily
          basis. We work closely with our internal teams to identify
          opportunities and deliver customized solutions that drive innovation
          and sustainable growth.
        </p>
        <p className="mr-40 ml-40 mb-8">
          We take pride in our ability to quickly adapt to the changing needs of
          the market and stay at the forefront of technological trends. We
          constantly stay up-to-date with the latest techniques and tools in
          Full Stack development, enabling us to deliver efficient and
          high-quality solutions.
        </p>
        <div className="grid grid-cols-3 place-items-center">
          <img className="w-60 h-28" src="https://www.adslzone.net/app/uploads-adslzone.net/2021/10/lenguaje-de-programacion.jpg" />
          <img className="w-60 h-28" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxV98Pm46Hh76dOCTj3gNdirprYqTvfmXC-Q&usqp=CAU" />
          <img className="w-60 h-28" src="https://cecytebcs.edu.mx/wp-content/uploads/2022/02/programacion.jpeg" />
        </div>
      </div>
      
      <hr />
      <h1 className="text-3xl text-center font-black text-[#DA291C]">
        The team
      </h1>
      <h3 className="text-center">
        The group is composed of the following persons:
      </h3>
      <div className="grid grid-cols-3 gap-3 place-items-center mt-8">
        <Card className="w-80 h-72 text-center">
          <CardHeader>
            <CardTitle>Fabiola Blanco</CardTitle>
            <CardDescription>Developer</CardDescription>
          </CardHeader>
          <CardContent className="w-full">
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/60586774?v=4" />
            </Avatar>
          </CardContent>
          <CardFooter>
            <a href="https://github.com/ItsFaby">
              <img
                src={logoGitHub}
                alt="github profile"
                className="w-10 h-10"
              />
            </a>
          </CardFooter>
        </Card>
        <Card className="w-80 h-72 text-center">
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
                className="w-10 h-10"
              />
            </a>
          </CardFooter>
        </Card>
        <Card className="w-80 h-72 text-center">
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
                className="w-10 h-10"
              />
            </a>
          </CardFooter>
        </Card>
        <Card className="w-80 h-72 text-center">
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
                className="w-10 h-10"
              />
            </a>
          </CardFooter>
        </Card>
        <Card className="w-80 h-72 text-center">
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
                className="w-10 h-10"
              />
            </a>
          </CardFooter>
        </Card>
        <Card className="w-80 h-72 text-center">
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
                className="w-10 h-10"
              />
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default About;
