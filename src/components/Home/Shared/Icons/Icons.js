import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icons = ({ icon, name }) => {
  return (
    <div>
      <div>
        <h1 className="flex px-4 w-32 h-32 justify-center hover:text-orange-400 active items-center transition delay-50 py-8 flex-col">
          <FontAwesomeIcon icon={icon} />
        </h1>
      </div>
    </div>
  );
};

export default Icons;
