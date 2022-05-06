import { Button, ContainerOperatorsRight } from "../styles/operatorsRightStyle";

function OperatorsRight({
  num,
  setNum,
  oldNum,
  setOldNum,
  operator,
  setOperator,
}) {
  function OperatorHandler(e) {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function Calculate() {
    if (operator === "+") {
      setNum(parseFloat(oldNum) + parseFloat(num));
    } else if (operator === "-") {
      setNum(oldNum - num);
    } else if (operator === "X") {
      setNum(oldNum * num);
    } else if (operator === "/") {
      setNum(oldNum / num);
    }
  }

  return (
    <ContainerOperatorsRight>
      <Button onClick={OperatorHandler} value={"X"}>
        X
      </Button>
      <Button onClick={OperatorHandler} value={"-"}>
        -
      </Button>
      <Button onClick={OperatorHandler} value={"+"}>
        +
      </Button>
      <Button onClick={Calculate} value={"="}>
        =
      </Button>
    </ContainerOperatorsRight>
  );
}

export default OperatorsRight;
