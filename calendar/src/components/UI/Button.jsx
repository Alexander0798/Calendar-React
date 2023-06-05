import styled from "styled-components";

const StyledButton = styled.button`
    background: ${({ background }) => background || "transparent"};
    padding: ${({ padding }) => padding || "0"};
    margin: ${({ margin }) => margin || "0"};
    width: ${({ width }) => width || "none"};
    min-height: ${({ height }) => height || "1.5rem"};
    transform: ${({ rotate }) => "rotate(" + rotate + "deg)" || "none"};
    background-image: ${({ img }) => (img ? "url(" + img + ")" : "none")};
    color: ${({ color }) => color || "black;"};
    font-size: ${({ size }) => size || "1rem;"};
    font-weight: ${({ weight }) => weight || "400"};
    border-top: ${({ borderTop }) => borderTop || "none"};
    border-bottom: ${({ borderBottom }) => borderBottom || "none"};
    border-right: ${({ borderRight }) => borderRight || "none"};
    border-left: ${({ borderLeft }) => borderLeft || "none"};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    &:focus {
        outline: none;
    }
    @media (min-width: 30em) {
        font-size: ${({ sizeMd }) => sizeMd || "1rem"};
    }
    ${({ disabled }) =>
        disabled &&
        `
    color: #ccc;
    cursor: not-allowed;
`}
`;
const Button = (props) => {
    return <StyledButton {...props} />;
};
export default Button;
