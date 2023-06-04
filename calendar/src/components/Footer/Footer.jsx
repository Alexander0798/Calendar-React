import styled from "styled-components";
import Button from "../UI/Button";
const StyledFooter = styled.footer`
min-height: 2rem;
padding: 1.3rem;
background: ${(props) => props.background || props.theme.calendarFooterBg};
display: flex;
justify-content: start;
align-items: center;
color: red;
`;

const Footer = (props) => {
    return (
        <StyledFooter {...props}>
            <Button color="red" weight="700" size="1.5rem" onClick={props.handleClick}>
                Today
            </Button>
        </StyledFooter>
    );
};
export default Footer;
