import styled from "styled-components";

const StyledButton = styled.button`
background:  ${({background}) => background ||"transparent"};
padding: ${({padding}) => padding || "0"};
width: ${({width}) => width || "1.5rem"};
height: ${({height}) => height || "1.5rem"};
background-image: url(${({img}) => img});
cursor: pointer;
border: none;
&:focus {
    outline: none;
}
`
const Button = (props) => {
    return <StyledButton {...props}/>
}
export default Button