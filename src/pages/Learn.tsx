import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import key from "/src/assets/key.png";
import tailwind from "/src/assets/tailwind.png";
import terminal from "/src/assets/terminal.png";
import visual from "/src/assets/visual.png";
import sql from "/src/assets/sql.png";
import branch from "/src/assets/branch.png";
const Learn = () => {
  return (
    <div>
      <h1 className="text-4xl text-center font-black text-[#DA291C] mb-10 mt-10">
        Learn
      </h1>
      <div className="grid grid-cols-3 gap-3 place-items-center mt-8">
        <Card className="w-56 h-56 text-center">
          <CardHeader>
            <CardTitle>Generating a new SSH key</CardTitle>
          </CardHeader>
          <CardContent className="w-full">
            <img src={key} alt="" />
          </CardContent>
          <CardFooter>
            <Button size={"lg"} variant={"primary"}>
              View
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-56 h-56 text-center">
          <CardHeader>
            <CardTitle>Git Bash configuration</CardTitle>
          </CardHeader>
          <CardContent className="w-full">
            <img src={terminal} alt="" />
          </CardContent>
          <CardFooter>
            <Button size={"lg"} variant={"primary"}>
              View
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-56 h-56 text-center">
          <CardHeader>
            <CardTitle>Install Tailwind CSS</CardTitle>
          </CardHeader>
          <CardContent className="w-full">
            <img src={tailwind} alt="" className="h-6 w-6" />
          </CardContent>
          <CardFooter>
            <Button size={"lg"} variant={"primary"}>
              View
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-56 h-56 text-center">
          <CardHeader>
            <CardTitle>Extensions for Visual Studio Code</CardTitle>{" "}
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="w-full">
            <img   className="h-6 w-6"src={visual} alt="" />
          </CardContent>
          <CardFooter>
            <Button size={"lg"} variant={"primary"}>
              View
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-56 h-56 text-center">
          <CardHeader>
            <CardTitle>SQL SERVER</CardTitle>{" "}
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="w-full">
            <img className="h-6 w-6"src={sql} alt="" />
          </CardContent>
          <CardFooter>
            <Button size={"lg"} variant={"primary"}>
              View
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-56 h-56 text-center">
          <CardHeader>
            <CardTitle>Pull requests</CardTitle>{" "}
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="w-full">
            <img className="h-6 w-6"src={branch} alt="" />
          </CardContent>
          <CardFooter>
            <Button size={"lg"} variant={"primary"}>
              View
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Learn;
