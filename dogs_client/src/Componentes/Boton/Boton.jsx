import styled from "./Boton.module.css";

export default function Boton(props) {
  const string = props.string;
  return <button className={styled.btn}>{string}</button>;
}
