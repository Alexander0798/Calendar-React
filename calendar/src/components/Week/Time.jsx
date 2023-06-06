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

    ${({ reserve }) =>
        reserve &&
        `
   background: rgba(179, 183, 255, .5);
`}
    ${({ selected }) =>
        selected &&
        `
background: rgba(179, 183, 255, 1); 
`}
`;
const TimeValue = styled.div`
    align-self: start;
    justify-self: end;
    margin: -0.5rem 0.2rem 0 0;
    font-size: 0.8rem;
    color: #cccc;
    font-weight: 700;

    @media (min-width: 390px) {
        margin: -0.6rem 0.3rem 0 0;
        font-size: 1rem;
    }
    @media (min-width: 600px) {
        font-size: 1.5rem;
        margin: -0.8rem 0.5rem 0 0;
    }
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
console.log(props.savedDates)
    return (
        <StyledTime {...props}>
            <TimeValue>{props.timeValue}</TimeValue>
            <StyledTimeOfDay
                borderBottom={props.borderBottom}
                data-value={getDateTime(props.timeValue, 0)}
                selected={Boolean(props.deletedDate === getDateTime(props.timeValue, 0))}
                reserve={Boolean(props.savedDates?.find((savedDate) => savedDate === getDateTime(props.timeValue, 0)))}
                onClick={props.timeWeekHandler}
            />
            <StyledTimeOfDay
                borderBottom={props.borderBottom}
                data-value={getDateTime(props.timeValue)}
                selected={Boolean(props.deletedDate === getDateTime(props.timeValue, 0))}
                reserve={Boolean(props.savedDates?.find((savedDate) => savedDate === getDateTime(props.timeValue, 0)))}
                onClick={props.timeWeekHandler}
            />
            <StyledTimeOfDay
                borderBottom={props.borderBottom}
                data-value={getDateTime(props.timeValue)}
                selected={Boolean(props.deletedDate === getDateTime(props.timeValue, 0))}
                reserve={Boolean(props.savedDates?.find((savedDate) => savedDate === getDateTime(props.timeValue, 0)))}
                onClick={props.timeWeekHandler}
            />
            <StyledTimeOfDay
                borderBottom={props.borderBottom}
                data-value={getDateTime(props.timeValue)}
                selected={Boolean(props.deletedDate === getDateTime(props.timeValue, 0))}
                reserve={Boolean(props.savedDates?.find((savedDate) => savedDate === getDateTime(props.timeValue, 0)))}
                onClick={props.timeWeekHandler}
            />
            <StyledTimeOfDay
                borderBottom={props.borderBottom}
                data-value={getDateTime(props.timeValue)}
                selected={Boolean(props.deletedDate === getDateTime(props.timeValue, 0))}
                reserve={Boolean(props.savedDates?.find((savedDate) => savedDate === getDateTime(props.timeValue, 0)))}
                onClick={props.timeWeekHandler}
            />
            <StyledTimeOfDay
                borderBottom={props.borderBottom}
                data-value={getDateTime(props.timeValue)}
                selected={Boolean(props.deletedDate === getDateTime(props.timeValue, 0))}
                reserve={Boolean(props.savedDates?.find((savedDate) => savedDate === getDateTime(props.timeValue, 0)))}
                onClick={props.timeWeekHandler}
            />
            <StyledTimeOfDay
                onClick={props.timeWeekHandler}
                borderRight="none;"
                borderBottom={props.borderBottom}
                data-value={getDateTime(props.timeValue)}
                selected={Boolean(props.deletedDate === getDateTime(props.timeValue, 0))}
                reserve={Boolean(props.savedDates?.find((savedDate) => savedDate === getDateTime(props.timeValue, 0)))}
            />
        </StyledTime>
    );
};
export default Time;
