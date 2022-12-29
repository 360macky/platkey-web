import React from "react";

type KeyProps = {
  children: React.ReactNode;
};

const Key = ({ children }: KeyProps) => {
  return (
    <>
      &nbsp;
      <span className="inline bg-blue border border-b-2 border-black py-1 px-2 rounded-md font-mono cursor-pointer">
        {children}
      </span>
      &nbsp;
    </>
  );
};

export default Key;
