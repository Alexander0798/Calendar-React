import styled from "styled-components";

const StyledBackDrop = styled.div`
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
`;
const BackDrop = (props) => {
    return <StyledBackDrop {...props} />;
};
export default BackDrop;
