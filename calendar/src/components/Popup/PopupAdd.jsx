import styled from "styled-components";
import BackDrop from "../UI/BackDrop";
import Form from "./Form";
const StyledPopupAdd = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    background: ${(props) => props.background || props.theme.popupBg};
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    max-width: 282px;
    color: black;
    box-sizing: border-box;
    z-index: 100;
    transition: all 0.22s ease-in;

    @media (min-width: 500px) {
        max-width: 430px;
        margin: 0;
    }
`;
const PopupAdd = (props) => {
    if (props.selected) {
        return (
            <>
                <StyledPopupAdd {...props}>
                    <Form></Form>
                </StyledPopupAdd>
                <BackDrop onClick={props.togglePopup} />
            </>
        );
    }
};
export default PopupAdd;
