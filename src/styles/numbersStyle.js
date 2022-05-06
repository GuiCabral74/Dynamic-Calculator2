import styled from "styled-components";

export const DivNumber = styled.div`
  width: 251px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`

export const Button = styled.button`
  width: 4.5rem;
  height: 4.5rem;
  padding: 0.75rem;
  margin-top: 1rem;
  border: none;
  border-radius: 1.5rem;
  font-size: 2rem;
  background: #2e2f38;
  color: #fff;
  cursor: pointer;
  :hover {
    background: #4e505f;
  }
  :last-child{
    width: 10.125rem;
  }
`;
