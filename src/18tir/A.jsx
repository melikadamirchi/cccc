
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color:pink;
  font-size: 32px;
  color: ${(props) => props.color};
  width: ${(props) => (props.large ? '500px' : '200px')}

&:hover{
    color: ${(props) => props.darkColor};
    background-color:green;
}

`;
export default StyledButton




