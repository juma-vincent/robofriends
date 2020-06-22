import React, { Component } from "react";
import Card from "./Card";

const Cardlist = ({ robots }) => {
  // if (true) {
  //   throw new Error("Nooooooo");
  // }
  return (
    <div className="tc">
      {robots.map((robot) => (
        <Card key={robot.id} name={robot.name} email={robot.email} />
      ))}
    </div>
  );
};

export default Cardlist;
