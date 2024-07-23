import React from "react";

const CodeBlock: React.FC = () => {
  return (
    <pre className="justify-left items-start self-end p-2.5 mt-16 max-w-full text-base font-light tracking-normal leading-7 bg-black bg-opacity-5 text-black text-opacity-70 w-[981px] max-md:mt-10">
      {`{
  "config": {},
  "inputs": {},
  "transformations": [],
  "finalisers": {},
  "preview": false
}`}
    </pre>
  );
};

export default CodeBlock;
