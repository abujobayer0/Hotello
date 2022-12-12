import React, { useEffect } from "react";

const Filter = ({ setPopular, setStudio, filtered, studio }) => {
  const searchHandleChilden = (e) => {
    if (e === 0) {
      setPopular(filtered);
      setStudio(filtered);
    } else if (e === 1) {
      const newfiltered = studio.filter((r) => r.childern === e);
      setPopular(newfiltered);
    } else if (e === 2) {
      const newfiltered = studio.filter((r) => r.childern === e);
      setPopular(newfiltered);
    } else if (e === 3) {
      const newfiltered = studio.filter((r) => r.childern === e);
      setPopular(newfiltered);
    } else if (e === 4) {
      const newfiltered = studio.filter((r) => r.childern === e);
      setPopular(newfiltered);
    } else {
      setPopular(filtered);
    }
  };
  return <div></div>;
};

export default Filter;
