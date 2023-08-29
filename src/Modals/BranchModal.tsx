import React from "react";

const BranchModal = () => {
  return (
    <div className="items-center">
      <h1 className="text-center text-2xl font-bold  text-[#DA291C] mt-8 mb-8">
        Pull requests
      </h1>
      <div>
        <p className="text-center text-base mb-2 mx-3">
          1. A branch should be created with a name that indicates what was done
          but is not explanatory, that's what the commentary is for{" "}
          <p className="text-[#DA291C] italic text-center text-sm font-bold">
            git checkout -b branch-name
          </p>{" "}
        </p>
        <p className="text-center text-base mb-2 mx-3">
          2. When you make the necessary changes you must check what you have
          changed, for that we use the following command:{" "}
          <p className="text-[#DA291C] italic text-center text-sm font-bold">
            git status
          </p>{" "}
        </p>
        <p className="text-center text-base mb-2 mx-3">
          3. If everything is correct, all changes are added with the following
          command:{" "}
          <p className="text-[#DA291C] italic text-center text-sm font-bold">
            git add .
          </p>{" "}
        </p>
        <p className="text-center text-base mb-2 mx-3">
          4. A commit must be made to be able to upload those changes into the
          branch, the commit already specifies that it was made but briefly. The
          following command is used:{" "}
          <p className="text-[#DA291C] italic text-center text-sm font-bold">
            git commit -am "your commit"
          </p>{" "}
        </p>
        <p className="text-center text-base mb-2 mx-3">
          5. To upload the changes and the branch, the command is used:{" "}
          <p className="text-[#DA291C] italic text-center text-sm font-bold">
            git push origin branch-name
          </p>{" "}
        </p>
        <p className="text-center text-base mb-2 mx-3">
          6. We go to GitHub, to the repository and create the pull request and
          make a more explanatory comment about what the branch contains. And we
          put a person to review our changes.{" "}
        </p>
        <p className="text-center text-base mb-2 mx-3">
          7. When the changes are approved, we can merge the changes to the main branch.{" "}
        </p>
      </div>
    </div>
  );
};

export default BranchModal;
