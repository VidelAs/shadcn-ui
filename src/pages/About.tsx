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
    <div>
      <div>patitos</div>
      <hr />
      <h1 className="text-3xl text-center font-black text-[#DA291C]">The team</h1>
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
              <AvatarImage src="https://github.com/shadcn.png" />
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
              <AvatarImage src="https://github.com/shadcn.png" />
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
