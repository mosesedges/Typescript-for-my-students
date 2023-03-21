"use strict";
exports.__esModule = true;
var timer = document.getElementById("timer");
var greeting = "Hello world!";
var d = new Date();
timer.innerHTML = greeting;
1/8


type AppProps = {
    message: string;
    count: number;
    disabled: boolean;
    /** array of a type! */
    names: string[];
    /** string literals to specify exact string values, with a union type to join them together */
    status: "waiting" | "success";
    /** an object with known properties (but could have more at runtime) */
    obj: {
      id: string;
      title: string;
    };