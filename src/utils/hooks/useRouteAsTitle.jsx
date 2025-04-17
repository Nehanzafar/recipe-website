import React from "react";
import { useLocation } from "react-router-dom";

const useRouteAsTitle = () => {
  const name = "The Ohio Sigma";
  var curLoc = useLocation().pathname;
  const title = document.querySelector("head title");
  React.useEffect(() => {
    if (curLoc != "/") {
      if (curLoc.charAt(0) == "/") {
        var temp3 = curLoc.slice(1);
        console.log(curLoc, temp, temp2);

        var temp = temp3.charAt(0).toUpperCase();
        var temp2 = temp3.slice(1);
        curLoc = temp + temp2;
        console.log(curLoc, temp, temp2);
      }
      title.innerHTML = curLoc;
    } else {
      title.innerHTML = name;
    }
  }, [curLoc]);
};

export default useRouteAsTitle;
