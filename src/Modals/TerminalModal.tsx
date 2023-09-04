const TerminalModal = () => {
  return (
    <div className="items-center">
      <h1 className="text-center font-bold  text-[#DA291C] mt-8 mb-8 md:text-2xl xs:text-xl">
        Git Bash Configuration
      </h1>
      <div className="md:text-base xs:text-sm text-center">
        <p className="mb-2 mx-3 ">
          1. It must be specified that the configuration is to be made{" "}
          <p className="text-[#DA291C] italic text-center md:text-sm font-bold xs:text-xs">
            git config
          </p>{" "}
        </p>
        <p className="mb-2 mx-3">
          2. Type the following command to continue with the configuration:{" "}
          <p className="text-[#DA291C] italic text-center text-sm font-bold">
            $ git config --global user.name "your username"
          </p>{" "}
        </p>
        <p className="mb-2 mx-3">
          3. Finally, type the following command:{" "}
          <p className="text-[#DA291C] italic text-center text-sm font-bold">
            $ git config --global user.email your_email@example.com
          </p>{" "}
        </p>
        <div>
          <p className="mb-2 mx-3">
            <p className="text-center md:text-base xs:text-xs mb-2 mx-3 text-[#F1C40F] font-bold">
            Important:
            </p>
            To be able to manage a repository from git bash you must do the
            configuration with the previous steps, but you must generate an SSH
            Key.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TerminalModal;
