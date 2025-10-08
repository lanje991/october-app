import { Fragment } from "react";
function Greetings(props) {
  return  <>
  <h1>Hello, {props.name} {props.surname} {props.lastname}!</h1>;
  <h2>this text wasn`t there</h2>
  </>
}

export default Greetings;
