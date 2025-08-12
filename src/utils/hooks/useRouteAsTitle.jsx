import { useDebugValue, useEffect } from "react";
import { useLocation } from "react-router-dom";

function removeSpecialChars(str) {
  return str.replace(/[^a-zA-Z0-9\s]/g, "");
}

function capitalize(str) {
  const temp = str.slice(0, 1);
  return temp.toUpperCase() + str.slice(1);
}

const usePathAsTitle = (title = "") => {
  const name = "The Ohio Sigma";
  const curLoc = useLocation().pathname;
  const titleElement = document.querySelector("head title");
  if (!titleElement) {
    const titleElement = document.createElement(title);
    const head = document.querySelector("head");
    head?.appendChild(titleElement);
  }
  useEffect(() => {
    if (title === "") {
      titleElement.innerText =
        curLoc === "/" ? name : capitalize(removeSpecialChars(curLoc));
    } else {
      titleElement.innerText = title;
    }
  }, [curLoc, name, title, titleElement]);
  useDebugValue(title);
  return title;
};

export default usePathAsTitle;
