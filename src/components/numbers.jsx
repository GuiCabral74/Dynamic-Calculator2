import { Button, DivNumber } from "../styles/numbersStyle";
import NumbersCalc from "./numbersCalc"

function Numbers ({num, setNum}){

  function HandleClick(e) {
    let input = e.target.value;
    if(num == 0){
      setNum(input);
    } else {
      setNum(num + input)
    }
  }

  return(
    <DivNumber>
    {NumbersCalc.map((i) => {
      return(
        <Button onClick={HandleClick} key={i.name} value={i.value}>{i.symbol}</Button>
      )
    })}
    </DivNumber>
  )
}

export default Numbers;