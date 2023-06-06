import styled from "styled-components";
import SubTitle from "../UI/SubTitle";
import Description from "../UI/Description";
import Flex from "../UI/Flex";
import Input from "./Input";
import Button from "../UI/Button";
import Error from "../UI/Error";
const StyledForm = styled.form`
    width: 100%;
    text-align: center;
    padding: 1rem 0 0;
`;
const Form = (props) => {
    return (
        <StyledForm {...props} onSubmit={props.submitHandler}>
            <Flex direction="column" align="center" justify="center" gap=".62rem 0">
                <SubTitle>https://calendar.com</SubTitle>
                <Description>
                    Enter event time: <br /> YYYY-MM-DD HH:mm
                </Description>
                {props.dateDirty && props.dateError && <Error>{props.dateError}</Error>}
                <Input
                    value={props.date}
                    onChange={props.dateHandler}
                    onBlur={props.blurHandler}
                    type="text"
                    width="90%"
                    height="2rem"
                    padding="0.3rem"
                    color="blue"
                    name="inputDate"
                />
                <Flex>
                    <Button
                        type="button"
                        color="blue"
                        weight="600"
                        height="2.5rem"
                        width="9rem"
                        borderTop="0.062rem solid #000"
                        borderRight="0.062rem solid #000"
                        onClick={props.popupHandler}
                    >
                        Cancel
                    </Button>
                    <Button disabled={!props.formValid} type="submit" height="2.5rem" width="9rem" borderTop="0.062rem solid #000" color="blue" weight="600">
                        OK
                    </Button>
                </Flex>
            </Flex>
        </StyledForm>
    );
};
export default Form;
