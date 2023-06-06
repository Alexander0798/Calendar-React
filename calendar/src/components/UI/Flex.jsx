import styled from "styled-components";

const StyledFlex = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction || "row"};
    justify-content: ${({ justify }) => justify || "stretch"};
    align-items: ${({ align }) => align || "stretch"};
    margin: ${({ margin }) => margin || "0"};
    padding: ${({ padding }) => padding || "0"};
    gap: ${({ gap }) => gap || "0"};
    height: ${({ height }) => height || "100%"};
    width: ${({ height }) => height || "100%"};

    @media (min-width: 30em) {
        ${({ paddingMd }) => `padding: ${paddingMd}`}
    }
`;
const Flex = (props) => {
    return <StyledFlex {...props} />;
};
export default Flex;
