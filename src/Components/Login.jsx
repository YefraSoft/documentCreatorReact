import React from "react";
import { ButtonAnimate, ButtonAnimateGlass } from "../Elements/Button";
import { Image } from "../Elements/Image";
import img from "../assets/login.jpg";
import "./Components.css";
import { Label, LabelTittle } from "../Elements/Label";
import { motion } from "framer-motion";
import TextBox from "../Elements/TextBox";

const actions = () => {
  console.log("Iam a function");
};

export function Login() {
  return (
    <motion.div
      className="container d-flex justify-content-center h-100 aling-items-center"
      initial={{
        y: "-100vh",
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
    >
      <div className="containerglass h-75 loginForm container text-center">
        <div className="row justify-content-md-center">
          <div className="col-md-auto">
            <Image img={img} />
          </div>
          <div className="row justify-content-md-center mt-2">
            <LabelTittle
              text={"Welcome to sistem of generate word documents"}
            />
          </div>
          <div className="row justify-content-md-center">
            <div className="col col-md-auto mt-3">
              <Label text={"Institutional email:"} />
            </div>
            <div className="col col-md-auto mt-3 w-50">
              <TextBox
                propertys={{
                  type: "email",
                  hold: "",
                }}
              />
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col col-md-auto mt-3">
              <Label text={"Password:"} />
            </div>
            <div className="col col-md-auto mt-3">
              <TextBox
                propertys={{
                  type: "password",
                  hold: "",
                }}
              />
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col col-md-auto mt-3">
              <ButtonAnimate
                propertys={{
                  text: "Log-in",
                  action: actions,
                  style: {
                    background: "rgba(0, 6, 118, 0.27)",
                    width: "10.2rem",
                    border: "1px solid rgba(0, 6, 118, 0.3)",
                  },
                }}
              />
            </div>
            <div className="col col-md-auto mt-3">
              <ButtonAnimateGlass
                propertys={{
                  text: "Recover Password",
                  action: actions,
                  style: {
                    width: "10.2rem",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
