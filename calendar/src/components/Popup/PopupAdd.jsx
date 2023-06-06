import styled from "styled-components";
import BackDrop from "../UI/BackDrop";
import Form from "./Form";
const StyledPopupAdd = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.25rem;
    background: ${(props) => props.background || props.theme.formBg};
    box-shadow: 0rem 0rem 1.5rem rgba(0, 0, 0, 0.15);
    border-radius: 0.625rem;
    z-index: 100;
`;
const PopupAdd = (props) => {
    if (props.selected) {
        return (
            <>
                <StyledPopupAdd {...props}>
                    <Form {...props}></Form>
                </StyledPopupAdd>
                <BackDrop onClick={props.popupHandler} />
            </>
        );
    }
};
export default PopupAdd;
