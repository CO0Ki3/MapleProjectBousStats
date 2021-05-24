import styled from 'styled-components';

const SelectOptionStyle = styled.select`
  width: 200px;
`;

const SelectBoxStyle = styled.div`
  border: 1px solid black;
  background-color: #424242;
  margin: 10px;
  padding: 10px;
  border-radius: 0.3em;
  border-color: #424242;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

const Main = styled.main`
  display: flex;
  justify-content: space-around;
`

export { SelectOptionStyle, SelectBoxStyle, Main };