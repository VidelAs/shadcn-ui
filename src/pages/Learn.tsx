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
import terminal from "/src/assets/terminal.png";
import tailwind from "/src/assets/tailwind.png";
import visual from "/src/assets/visual.png";
import sql from "/src/assets/sql.png";
import branch from "/src/assets/branch.png";
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
      <h1 className="md:text-4xl md:text-center md:font-black md:text-[#DA291C] md:mb-10 md:mt-10  sm:text-2xl sm:text-center sm:font-black sm:text-[#DA291C]">
        Learn
      </h1>
      <div className="grid md:grid-cols-3 gap-3 place-items-center mt-8 sm:grid-cols-2">
        <Card className="md:w-56 md:h-56 text-center sm:w-60 sm:h-60">
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
              className="md:w-28 md:h-10 sm:w-24 sm:h-9"
            >
              View
            </Button>
          </CardFooter>
        </Card>
        <Card className="md:w-56 md:h-56 text-center sm:w-60 sm:h-60">
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
              className="md:w-28 md:h-10 sm:w-24 sm:h-9"
            >
              View
            </Button>
          </CardFooter>
        </Card>
        <Card className="md:w-56 md:h-56 text-center sm:w-60 sm:h-60">
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
              className="md:w-28 md:h-10 sm:w-24 sm:h-9"
            >
              View
            </Button>
          </CardFooter>
        </Card>
        <Card className="md:w-56 md:h-56 text-center sm:w-60 sm:h-60">
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
              className="md:w-28 md:h-10 sm:w-24 sm:h-9"
            >
              View
            </Button>
          </CardFooter>
        </Card>
        <Card className="md:w-56 md:h-56 text-center sm:w-60 sm:h-60">
          <CardHeader>
            <CardTitle>SQL SERVER</CardTitle>{" "}
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="w-full">
            <img className="h-6 w-6" src={sql} alt="" />
          </CardContent>
          <CardFooter>
            <Button
              className="md:w-28 md:h-10 sm:w-24 sm:h-9"
              variant={"primary"}
              onClick={() => setSqlModalOpen(true)}
            >
              View
            </Button>
          </CardFooter>
        </Card>
        <Card className="md:w-56 md:h-56 text-center sm:w-60 sm:h-60">
          <CardHeader>
            <CardTitle>Pull requests</CardTitle>{" "}
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="w-full">
            <img className="h-6 w-6" src={branch} alt="" />
          </CardContent>
          <CardFooter>
            <Button
              className="md:w-28 md:h-10 sm:w-24 sm:h-9"
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
          className="w-97 h-85 rounded-2xl mx-auto items-center mt-40 bg-[#001489] border-2 border-[#001489] text-white "
        >
          <KeyModal />
        </Modal>
        <Modal
          isOpen={terminalModalOpen}
          onRequestClose={() => setTerminalModalOpen(false)}
          className="w-97 h-85 rounded-2xl mx-auto items-center mt-40 bg-[#001489] border-2 border-[#001489] text-white "
        >
          <TerminalModal />
        </Modal>
        <Modal
          isOpen={tailwindModalOpen}
          onRequestClose={() => setTailwindModalOpen(false)}
          className="w-97 h-85 rounded-2xl mx-auto items-center mt-40 bg-[#001489] border-2 border-[#001489] text-white "
        >
          <TailwindModal />
        </Modal>
        <Modal
          isOpen={visualModalOpen}
          onRequestClose={() => setVisualModalOpen(false)}
          className="w-97 h-90 rounded-2xl mx-auto items-center mt-40 bg-[#001489] border-2 border-[#001489] text-white "
        >
          <VisualModal />
        </Modal>
        <Modal
          isOpen={sqlModalOpen}
          onRequestClose={() => setSqlModalOpen(false)}
          className="w-97 h-98 rounded-2xl mx-auto items-center mt-40 bg-[#001489] border-2 border-[#001489] text-white "
        >
          <SqlModal />
        </Modal>
        <Modal
          isOpen={branchModalOpen}
          onRequestClose={() => setBranchModalOpen(false)}
          className="w-97 h-97 rounded-2xl mx-auto items-center mt-40 bg-[#001489] border-2 border-[#001489] text-white "
        >
          <BranchModal />
        </Modal>
      </div>
    </div>
  );
};

export default Learn;
