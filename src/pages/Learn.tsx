import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import key from "/public/assets/key.png";
import terminal from "/public/assets/terminal.png";
import tailwind from "/public/assets/tailwind.png";
import visual from "/public/assets/visual.png";
import sql from "/public/assets/sql.png";
import branch from "/public/assets/branch.png";
import { useState } from "react";
import Modal from "react-modal";
import KeyModal from "@/Modals/KeyModal";
import TerminalModal from "@/Modals/TerminalModal";
import TailwindModal from "@/Modals/TailwindModal";
import VisualModal from "@/Modals/VisualModal";
import SqlModal from "@/Modals/SqlModal";
import BranchModal from "@/Modals/BranchModal";
const Learn = () => {
  const [keyModalOpen, setKeyModalOpen] = useState(false);
  const [terminalModalOpen, setTerminalModalOpen] = useState(false);
  const [tailwindModalOpen, setTailwindModalOpen] = useState(false);
  const [visualModalOpen, setVisualModalOpen] = useState(false);
  const [sqlModalOpen, setSqlModalOpen] = useState(false);
  const [branchModalOpen, setBranchModalOpen] = useState(false);

  return (
    <div className="mb-36">
      <h1 className="text-center font-black text-[#DA291C] md:text-4xl  md:mb-10 md:mt-10  sm:text-3xl xs:text-2xl xxs:text-3xl">
        Learn
      </h1>
      <div className="grid  gap-3 place-items-center mt-8 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1">
        <Card className="text-center md:w-56 md:h-56  sm:w-56 sm:h-56 xs:w-64 xs:h-64 xxs:w-52 xxs:h-56">
          <CardHeader>
            <CardTitle>Generating a new SSH key</CardTitle>
          </CardHeader>
          <CardContent className="w-full">
            <img src={key} alt="" />
          </CardContent>
          <CardFooter>
            <Button
              variant={"primary"}
              onClick={() => setKeyModalOpen(true)}
              className="md:w-28 md:h-10 sm:w-24 sm:h-9 xs:w-32 xs:h-9 xxs:w-28 xxs:h-8"
            >
              View
            </Button>
          </CardFooter>
        </Card>
        <Card className="text-center md:w-56 md:h-56  sm:w-56 sm:h-56 xs:w-64 xs:h-64 xxs:w-52 xxs:h-56">
          <CardHeader>
            <CardTitle>Git Bash configuration</CardTitle>
          </CardHeader>
          <CardContent className="w-full">
            <img src={terminal} alt="" />
          </CardContent>
          <CardFooter>
            <Button
              variant={"primary"}
              onClick={() => setTerminalModalOpen(true)}
              className="md:w-28 md:h-10 sm:w-24 sm:h-9 xs:w-32 xs:h-9 xxs:w-28 xxs:h-8"
            >
              View
            </Button>
          </CardFooter>
        </Card>
        <Card className="text-center md:w-56 md:h-56  sm:w-56 sm:h-56 xs:w-64 xs:h-64 xxs:w-52 xxs:h-56">
          <CardHeader>
            <CardTitle>Install Tailwind CSS</CardTitle>
          </CardHeader>
          <CardContent className="w-full">
            <img src={tailwind} alt="" className="h-6 w-6" />
          </CardContent>
          <CardFooter>
            <Button
              variant={"primary"}
              onClick={() => setTailwindModalOpen(true)}
              className="md:w-28 md:h-10 sm:w-24 sm:h-9 xs:w-32 xs:h-9 xxs:w-28 xxs:h-8"
            >
              View
            </Button>
          </CardFooter>
        </Card>
        <Card className="text-center md:w-56 md:h-56  sm:w-56 sm:h-56 xs:w-64 xs:h-64 xxs:w-52 xxs:h-56">
          <CardHeader>
            <CardTitle>Extensions for Visual Studio Code</CardTitle>{" "}
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="w-full">
            <img className="h-6 w-6" src={visual} alt="" />
          </CardContent>
          <CardFooter>
            <Button
              variant={"primary"}
              onClick={() => setVisualModalOpen(true)}
              className="md:w-28 md:h-10 sm:w-24 sm:h-9 xs:w-32 xs:h-9 xxs:w-28 xxs:h-8"
            >
              View
            </Button>
          </CardFooter>
        </Card>
        <Card className="text-center md:w-56 md:h-56  sm:w-56 sm:h-56 xs:w-64 xs:h-64 xxs:w-52 xxs:h-56">
          <CardHeader>
            <CardTitle>SQL SERVER</CardTitle>{" "}
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="w-full">
            <img className="h-6 w-6" src={sql} alt="" />
          </CardContent>
          <CardFooter>
            <Button
              className="md:w-28 md:h-10 sm:w-24 sm:h-9 xs:w-32 xs:h-9 xxs:w-28 xxs:h-8"
              variant={"primary"}
              onClick={() => setSqlModalOpen(true)}
            >
              View
            </Button>
          </CardFooter>
        </Card>
        <Card className="text-center md:w-56 md:h-56  sm:w-56 sm:h-56 xs:w-64 xs:h-64 xxs:w-52 xxs:h-56">
          <CardHeader>
            <CardTitle>Pull requests</CardTitle>{" "}
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="w-full">
            <img className="h-6 w-6" src={branch} alt="" />
          </CardContent>
          <CardFooter>
            <Button
              className="md:w-28 md:h-10 sm:w-24 sm:h-9 xs:w-32 xs:h-9 xxs:w-28 xxs:h-8"
              variant={"primary"}
              onClick={() => setBranchModalOpen(true)}
            >
              View
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div id="modals" className="">
        <Modal
          isOpen={keyModalOpen}
          onRequestClose={() => setKeyModalOpen(false)}
          className="rounded-2xl mx-auto items-center mt-40 bg-[#001489] border-2 border-[#001489] text-white md:w-97 md:h-85 xs:w-84 xs:h-93 xxs:h-99 xxs:w-64"
        >
          <KeyModal />
        </Modal>
        <Modal
          isOpen={terminalModalOpen}
          onRequestClose={() => setTerminalModalOpen(false)}
          className="rounded-2xl mx-auto items-center mt-40 bg-[#001489] border-2 border-[#001489] text-white md:w-97 md:h-85 xs:w-84 xs:h-84 xxs:w-64 xxs:h-97 "
        >
          <TerminalModal />
        </Modal>
        <Modal
          isOpen={tailwindModalOpen}
          onRequestClose={() => setTailwindModalOpen(false)}
          className="rounded-2xl mx-auto items-center mt-40 bg-[#001489] border-2 border-[#001489] text-white md:w-97 md:h-85 xs:w-84 xs:h-93 xxs:w-64 xxs:h-97"
        >
          <TailwindModal />
        </Modal>
        <Modal
          isOpen={visualModalOpen}
          onRequestClose={() => setVisualModalOpen(false)}
          className="md:w-97 md:h-90 rounded-2xl mx-auto items-center mt-40 bg-[#001489] border-2 border-[#001489] text-white xs:w-84 xs:h-95 xxs:w-72 xxs:h-97"
        >
          <VisualModal />
        </Modal>
        <Modal
          isOpen={sqlModalOpen}
          onRequestClose={() => setSqlModalOpen(false)}
          className="md:w-97 md:h-98  xs:w-84 xs:h-99 rounded-2xl mx-auto items-center mt-40 bg-[#001489] border-2 border-[#001489] text-white xxs:w-72 xxs:h-100 xxs:overflow-scroll xxs:mt-4"
        >
          <SqlModal />
        </Modal>
        <Modal
          isOpen={branchModalOpen}
          onRequestClose={() => setBranchModalOpen(false)}
          className="rounded-2xl mx-auto items-center mt-40 bg-[#001489] border-2 border-[#001489] text-white md:w-97 md:h-97 xs:w-84 xs:h-99 xxs:w-72 xxs:h-99 xxs:overflow-scroll xxs:mt-4"
        >
          <BranchModal />
        </Modal>
      </div>
    </div>
  );
};

export default Learn;
