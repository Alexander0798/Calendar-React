import styled from "styled-components";

const StyledButton = styled.button`
    background: ${({ background }) => background || "transparent"};
    padding: ${({ padding }) => padding || "0"};
    margin: ${({ margin }) => margin || "0"};
    width: ${({ width }) => width || "1.5rem"};
    height: ${({ height }) => height || "1.5rem"};
    transform: ${({ rotate }) => "rotate(" + rotate + "deg)" || "none"};
    background-image: ${({ img }) => (img ? "url(" + img + ")" : "none")};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    border: none;
    &:focus {
        outline: none;
    }
`;
const Button = (props) => {
    return <StyledButton {...props} />;
};
export default Button;
