import styled from "styled-components";
import moment from "moment/moment";
import Button from "./Button";
import Flex from "./Flex";
const StyledNavigationDate = styled.div`
background: ${({ background }) => background || "white"}
height: 100px;

`;
const NavigationDate = (props) => {
    const daysInMonth = moment(props.date).daysInMonth();
    const endOfWeek = moment(props.date).endOf("isoWeek");
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const currentDay = moment(props.date).format("DD");
    console.log(currentDay);
    const template = days.map((day, index) => {
        if (+day === +currentDay || (+day < +currentDay + 4 && +day > +currentDay - 4)) {
            const dayOfWeek = moment(moment(props.date).format("YYYY") + "-" + moment(props.date).format("MM") + "-" + day).format("dd")[0];
            return (
                <Flex direction="column" key={index}>
                    <Flex justify="center" align="center">
                        {dayOfWeek}
                    </Flex>
                    <Flex justify="center" align="center">
                        {day}
                    </Flex>
                </Flex>
            );
        }
    });

    //  console.log(endOfWeek);
    return (
        <StyledNavigationDate {...props}>
            <Flex direction="column">
                <Flex gap="1rem 1rem">{template}</Flex>
                {props.date.format("MMMM YYYY")}
            </Flex>
        </StyledNavigationDate>
    );
};
export default NavigationDate;
