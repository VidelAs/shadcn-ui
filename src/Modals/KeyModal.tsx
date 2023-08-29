const KeyModal = () => {
  return (
    <div className=" items-center">
      <h1 className="text-center text-2xl font-bold  text-[#DA291C] mt-8 mb-8">
        Generating a new SSH Key
      </h1>
      <div>
        <p className="text-centertext-base mb-2 mx-3">
          1. Paste the text below, substituting in your GitHub email address{" "}
          <p className="text-[#DA291C] italic text-center text-sm font-bold">
            ssh-keygen -t ed25519 -C "your_email@example.com"
          </p>{" "}
        </p>
        <p className="text-center text-base mb-3 mx-3">
          2. When you’re prompted to “Enter a file in which to save the key”,
          press Enter. Save files to the default location
        </p>
        <p className="text-center text-base mb-3 mx-3">
          3. At the prompt to “Enter a passphrase”, type a secure passphrase.
          You can skip this step if you don’t plan to use the keys anywhere but
          in Targetprocess.
        </p>
        <p className="text-center text-base mb-3 mx-3">
          4. Login to your Github account. Go to Settings / SSH and GPG keys.
        </p>
        <p className="text-centertext-base mb-3 mx-3">
          5. Click button ‘New SSH key’, add Title to it and paste there content
          of your public key. Click ‘Add SSH key’. Saved!
        </p>
      </div>
    </div>
  );
};

export default KeyModal;
