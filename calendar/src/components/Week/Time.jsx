import styled from "styled-components";
import moment from "moment";
const StyledTime = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: ${({ rows }) => rows || "3.5rem;"};
`;
const StyledTimeOfDay = styled.div`
    border-right: ${({ borderRight }) => borderRight || "2px solid #cccc"};
    border-bottom: ${({ borderBottom }) => borderBottom || "2px solid #cccc"}; 
    height: 100%;
    width: 100%;
    cursor: pointer;
`;
const TimeValue = styled.div`
    align-self: start;
    justify-self: end;
    margin: -0.8rem 0.5rem 0 0;
    font-size: 1.5rem;
    color: #cccc;
`;
const Time = (props) => {
    const startOfWeek = moment(props.date).startOf("isoWeek");
    let day = startOfWeek;

    const getDateTime = (dateTime, nextDay = 1) => {
        if (!dateTime) {
            dateTime = "08";
        } else {
            dateTime = dateTime.slice(0, 2);
        }
        if (nextDay) {
            day = day.clone().add(nextDay, "day");
        }
        const dateValue = moment(day.toISOString()).set({ hour: dateTime, minute: 0 }).toISOString();
        return dateValue;
    };

    return (
        <StyledTime {...props}>
            <TimeValue>{props.timeValue}</TimeValue>
            <StyledTimeOfDay borderBottom={props.borderBottom} data-value={getDateTime(props.timeValue, 0)} onClick={props.handleTimeClick} />
            <StyledTimeOfDay borderBottom={props.borderBottom} data-value={getDateTime(props.timeValue)} onClick={props.handleTimeClick} />
            <StyledTimeOfDay borderBottom={props.borderBottom} data-value={getDateTime(props.timeValue)} onClick={props.handleTimeClick} />
            <StyledTimeOfDay borderBottom={props.borderBottom} data-value={getDateTime(props.timeValue)} onClick={props.handleTimeClick} />
            <StyledTimeOfDay borderBottom={props.borderBottom} data-value={getDateTime(props.timeValue)} onClick={props.handleTimeClick} />
            <StyledTimeOfDay borderBottom={props.borderBottom} data-value={getDateTime(props.timeValue)} onClick={props.handleTimeClick} />
            <StyledTimeOfDay onClick={props.handleTimeClick} borderRight="none;" borderBottom={props.borderBottom} data-value={getDateTime(props.timeValue)} />
        </StyledTime>
    );
};
export default Time;
