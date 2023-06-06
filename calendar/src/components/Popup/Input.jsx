import styled from "styled-components";
const StyledPopupInput = styled.input`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "1rem"};
    color: ${({ color }) => color || "black"};
    padding: ${({ padding }) => padding || "0"};
    font-size: ${({ size }) => size || "1rem"};
    &:focus {
        outline: none;
    }
`;
const Input = (props) => {
    return <StyledPopupInput {...props}></StyledPopupInput>;
};
export default Input;
