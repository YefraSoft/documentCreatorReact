import React from "react";
import { ButtonAnimate } from "../Elements/Button";
import { Image } from '../Elements/Image';
import "./Components.css";

const actions = () => {
  console.log("Iam a function");
};

export function Login() {
  return (
    <div className="container d-flex justify-content-center h-100 aling-items-center">
      <div className="containerglass h-75 loginForm">
        <div className="row">

          <Image
            property={{
              src: "../assets/Splash.jpg"
            }}
          />
          <ButtonAnimate
            propertys={{
              text: "Log-in",
              action: actions,
              style: {
                background: "#DD2BBF",
              },
            }}
          />
          <ButtonAnimate
            propertys={{
              text: "Log-in",
              action: actions,
              style: {
                background: "#DD2BBF",
              },
            }}
          />
          
        </div>
      </div>
    </div>
  );
}
