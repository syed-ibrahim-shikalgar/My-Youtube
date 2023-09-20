import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Live",
    "Gaming",
    "Cricket",
    "News",
    "Songs",
    "Cooking",
    "Soccer",
    "TMKOC",
  ];
  return (
    <div className="flex flex-wrap">
      {list.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
