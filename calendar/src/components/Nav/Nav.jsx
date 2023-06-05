import styled from "styled-components";
import moment from "moment/moment";
import Date from "./Date";
import Flex from "../UI/Flex";
import Button from "../UI/Button";
import imgArrow from "../../image/svg/arrow.svg";
import SubTitle from "../UI/SubTitle";
import DateOfWeek from "./DateOfWeek";
const StyledNav = styled.nav`
    background: ${(props) => props.background || props.theme.calendarNavBg};
    display: flex;
    gap: 0.6rem;
    flex-direction: column;
    align-items: flex-end;

    padding: 0.6rem 0.6rem 0.6rem 3.2rem;
    @media (min-width: 24.375em) {
        padding: 0.6rem 0.6rem 0.6rem 3.4rem;
    }
    @media (min-width: 37.5em) {
        padding: 0.6rem 1rem 0.6rem 5.5rem;
    }
`;

const Nav = (props) => {
    const startOfWeek = moment(props.date).startOf("isoWeek");
    const endOfWeek = moment(props.date).endOf("isoWeek");

    const days = [];
    let day = startOfWeek;

    while (day <= endOfWeek) {
        days.push(
            <Flex direction="column" justify="start" align="center" key={day}>
                <DateOfWeek justify="center" align="center" margin="0 0 .62rem">
                    {day.format("dd")[0]}
                </DateOfWeek>
                <Date
                    active={moment().isSame(day, "day")}
                    green={Boolean(props.date.format("DD-YY-MM") === day.format("DD-YY-MM"))}
                    onClick={props.changeDay}
                    data-date={day.toISOString()}
                >
                    {day.date()}
                </Date>
            </Flex>
        );

        day = day.clone().add(1, "day");
    }

    return (
        <StyledNav {...props}>
            <Flex direction="column">
                <Flex>{days}</Flex>
                <Flex justify="space-between" align="center" padding=".625rem 1.6rem 0 1.6rem;" paddingMd="1rem 1.6rem 0 1.6rem;">
                    <Button img={imgArrow} rotate="180" onClick={props.prevWeek} width="1.5rem;" height="1.5rem;" />
                    <SubTitle>{props.date.format("MMMM YYYY")}</SubTitle>
                    <Button img={imgArrow} onClick={props.nextWeek} width="1.5rem;" height="1.5rem;" />
                </Flex>
            </Flex>
        </StyledNav>
    );
};
export default Nav;
