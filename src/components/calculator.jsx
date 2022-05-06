import { useState } from "react";
import { Container, ContainerCalculator } from "../styles/calculatorStyle";
import Numbers from "./numbers";
import OperatorsRight from "./operatorsRight";
import OperatorsTop from "./operatorsTop";
import Result from "./result";

function Calculator (){

  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  return(
    <Container id="ContainerBodyCalculator">
      <ContainerCalculator>
        <Result  num={num} setNum={setNum} />
        <OperatorsTop  num={num} setNum={setNum} operator={operator} setOperator={setOperator} oldNum={oldNum} setOldNum={setOldNum} />
        <Numbers num={num} setNum={setNum} />
        <OperatorsRight num={num} setNum={setNum} operator={operator} setOperator={setOperator} oldNum={oldNum} setOldNum={setOldNum} />
      </ContainerCalculator>
    </Container>
  )
}

export default Calculator;