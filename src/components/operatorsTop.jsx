import { ButtonTeste, Operators } from "../styles/operatorsTopStyle";


function OperatorsTop({num, setNum, oldNum, setOldNum, operator, setOperator}) {

  function Clear(){
    setNum(0)
  }

  function ChangeSing (){
    setNum(num * -1)
  }

  function Porcentage (){
    let old = num;
    if (old != 0){
      if(operator == "-"){
        setNum(old - (num /100))
      }
      console.log("tenho numero antes: " + old)
      console.log(operator)
    } else {
      (console.log("ZERO"));
    }
    setNum(num / 100);
  }

  function OperatorHandler(e) {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  return(
    <Operators>
      <ButtonTeste onClick={Clear}>C</ButtonTeste>
      <ButtonTeste onClick={ChangeSing}>+/-</ButtonTeste>
      <ButtonTeste onClick={Porcentage}>%</ButtonTeste>
      <ButtonTeste value={"/"} onClick={OperatorHandler}>/</ButtonTeste>
    </Operators>
  )
}

export default OperatorsTop;