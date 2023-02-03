// import styled from "./DispTemps.module.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function DispTemps(props) {
  const { estado, actual } = props;

  const [temps, setTemps] = useState();
  useEffect(() => {
    axios.get("http://localhost:3001/temperaments").then((res) => {
      setTemps(res.data);
    });
  }, []);

  const valorSelector = (event) => {
    const temp = event.target.value;
    if (temp != "NONE" && actual) {
      if (!actual.includes(temp)) estado([...actual, temp]);
    }
  };

  return (
    <select onChange={(event) => valorSelector(event)}>
      <option>NONE</option>
      {temps?.map((element) => {
        return <option>{element.Nombre}</option>;
      })}
    </select>
  );
}
