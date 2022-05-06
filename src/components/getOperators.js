export const GetOperators = ({setOperator, setOldNum, setNum, e}) => {

  let operatorInput = e.target.value;
  setOperator(operatorInput);
  setOldNum(num);
  setNum(0);

}