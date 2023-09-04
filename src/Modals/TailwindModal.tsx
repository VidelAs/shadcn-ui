const TailwindModal = () => {
  return (
    <div className="items-center">
      <h1 className="text-center font-bold  text-[#DA291C] mt-8 mb-8 md:text-2xl xs:text-xl">
        Install Tailwind CSS
      </h1>
      <div className="text-center text-base">
        <p className="mb-2 mx-3">
          1. Install Tailwind via npm{" "}
          <p className="text-[#DA291C] italic text-center text-sm font-bold">
            npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
          </p>{" "}
        </p>
        <p className="mb-2 mx-3">
          2. Initialise tailwind with the following command:{" "}
          <p className="text-[#DA291C] italic text-center text-sm font-bold">
            npx tailwindcss init
          </p>{" "}
        </p>
        <p className="mb-2 mx-3">
          3. Configure your template paths
          <p>
            Add the paths to all of your template files in your
            tailwind.config.js file.
          </p>
          <p className="text-white italic text-center text-sm font-bold">content: [ "./src/**/*.{}", ],</p>
        </p>
        <p className="text-center text-base mb-2 mx-3">
          4. Include Tailwind in your CSS:{" "}
          <p className="text-white italic text-center text-sm font-bold">
            @tailwind base;
          </p>
          <p className="text-white italic text-center text-sm font-bold">
            @tailwind components;
          </p>
          <p className="text-white italic text-center text-sm font-bold">
            @tailwind utilities;
          </p>
        </p>
      </div>
    </div>
  );
};

export default TailwindModal;
