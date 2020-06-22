import React from "react";
const Card = (props) => {
  return (
    <div className="  bg-light-green tc br2 dib pa3 ma2 grow bw3 shadow-5">
      
      <img src={`https://robohash.org/${props.name}?200x200`} alt="Robot" />
      <div className="">
        <h3>{props.name}</h3>
        <p>
          <small>{props.email}</small>
        </p>
      </div>
    </div>
  );
};

export default Card;
