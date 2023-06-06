import Flex from "../UI/Flex";
import Title from "./Title";
import Button from "../UI/Button";
import imgAdd from "../../image/svg/plus.svg";
import styled from "styled-components";

const StyledHeader = styled.header`
    background: ${({ background }) => background || "white"};
    padding: 1rem 0;
    @media (min-width: 30em) {
        padding: 1.4rem 0;
    }
`;

const Header = (props) => {
    return (
        <StyledHeader {...props}>
            <Flex justify="space-between" align="center" padding="0 1.5rem 0">
                <Title>Interview Calendar</Title>
                <Button img={imgAdd} onClick={props.popupHandler} width="1.5rem;" height="1.5rem;" />
            </Flex>
        </StyledHeader>
    );
};
export default Header;
