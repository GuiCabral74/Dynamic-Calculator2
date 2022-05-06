import { Container, ResultStyle } from "../styles/resultStyle";

function Result({num}) {
  return(
    <Container>
      <ResultStyle>{num}</ResultStyle>
    </Container>
  )
}

export default Result;