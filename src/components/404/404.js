import React from "react";
import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <div>
      <img
        src="https://f0.pngfuel.com/png/426/164/crying-michael-jordan-png-clip-art.png"
        alt="cry"
      />
      <Link
        to={{
          pathname: "/"
        }}
      >
        {" "}
        Go Back
      </Link>
    </div>
  );
};

export default NotFound404;
