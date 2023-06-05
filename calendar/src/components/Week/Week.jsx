import styled from "styled-components";
import Time from "./Time";
const StyledWeek = styled.main`
    overflow-y: scroll;
    background: ${(props) => props.background || props.theme.calendarTimeColor};
    &::-webkit-scrollbar {
        width: 0.1rem;
    }
`;
const Week = (props) => {
    const hours = Array.from(Array(13), (_, index) => index + 8);
    const templateTable = hours.map((hour, index, array) => {
        if (hour < 10) {
            hour = "0" + hour + ":00";
        } else {
            hour = hour + ":00";
        }
        if (index === 0) {
            hour = "";
            return <Time date={props.date} key={index} timeValue={hour} rows="2.5rem;" handleTimeClick={props.handleTimeClick}></Time>;
        }
        if (index === array.length - 1) {
            return <Time key={index} date={props.date} timeValue={hour} borderBottom="none;" rows="2.5rem;" handleTimeClick={props.handleTimeClick}></Time>;
        } else {
            return <Time key={index} date={props.date} timeValue={hour} handleTimeClick={props.handleTimeClick}></Time>;
        }
    });

    return <StyledWeek>{templateTable}</StyledWeek>;
};
export default Week;
