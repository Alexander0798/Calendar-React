import styled from "styled-components";
import SubTitle from "../UI/SubTitle";
import Description from "../UI/Description";
import Flex from "../UI/Flex";
import Input from "./Input";
import Button from "../UI/Button";
const StyledForm = styled.form`
    width: 100%;
    text-align: center;
   
`;
const Form = (props) => {
    return (
        <StyledForm {...props}>
            <Flex direction="column" align="center" justify="center" gap=".62rem 0">
                <SubTitle>https://caledar.com</SubTitle>
                <Description>
                    Enter event time: <br /> YYYY-MM-DD HH:mm
                </Description>
                <Input type="text" width="90%" height="2rem"/>
                <Flex><Button type="submit" height="2.5rem" width="9rem" borderTop="0.062rem solid #000" borderRight="0.062rem solid #000">Cancel</Button> <Button type="submit" height="2.5rem" width="9rem" borderTop="0.062rem solid #000">OK</Button></Flex>
            </Flex>
        </StyledForm>
    );
};
export default Form;
