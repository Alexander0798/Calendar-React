import styled from "styled-components";
const StyledPopupInput = styled.input`
width: ${({width}) => width || '100%'};
height: ${({height}) => height || '1rem'};
`
const Input = (props) => {
    return <StyledPopupInput {...props}></StyledPopupInput>
}
export default Input