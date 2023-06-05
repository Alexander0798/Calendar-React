import styled from "styled-components";
const StyledSubTitle = styled.h2`
    font-size: ${({ size }) => size || "1.5rem"};
    font-weight: ${({ weight }) => weight || "500"};
`;
const SubTitle = (props) => {
    return <StyledSubTitle {...props} />;
};
export default SubTitle;
