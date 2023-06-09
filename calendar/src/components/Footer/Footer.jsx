import styled from "styled-components";
import Button from "../UI/Button";
const StyledFooter = styled.footer`
    padding: 0.825rem;
    background: ${(props) => props.background || props.theme.calendarFooterBg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: red;
    @media (min-width: 30em) {
        padding: 1.3rem;
    }
`;

const Footer = (props) => {
    return (
        <StyledFooter {...props}>
            <Button color="red" weight="700" size="1.2rem" sizeMd="1.5rem" onClick={props.currentDateHandler}>
                Today
            </Button>
            {props.deletedDate ? (
                <Button color="red" weight="700" size="1.2rem" sizeMd="1.5rem" onClick={props.deletedHandler}>
                    Deleted
                </Button>
            ) : null}
        </StyledFooter>
    );
};
export default Footer;
