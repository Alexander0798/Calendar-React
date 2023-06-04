import styled from "styled-components";
import moment from "moment/moment";
import Quantity from "./Quantity";
import Flex from "../UI/Flex";
import Button from "../UI/Button";
import imgArrow from "../../image/svg/arrow.svg";
import SubTitle from "../UI/SubTitle";
const StyledNav = styled.nav`
    background: ${(props) => props.background || props.theme.calendarNavBg};
    min-height: 6, 25rem;
    display: flex;
    gap: 0.6rem;
    flex-direction: column;
    align-items: flex-end;
    padding: 0.6rem 1rem 0.6rem 6rem;

    @media (max-width: 600px) {
        padding: 0.6rem 0.6rem 0.6rem 4.5rem;
    }

    @media (max-width: 400px) {
        padding: 0.6rem 0.6rem 0.6rem 3.5rem;
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
                <Flex justify="center" align="center" margin="0 0 .62rem">
                    {day.format("dd")[0]}
                </Flex>
                <Quantity
                    active={moment().isSame(day, "day")}
                    green={Boolean(props.date.format("DD-YY-MM") === day.format("DD-YY-MM"))}
                    onClick={props.changeDay}
                    data-date={day.toISOString()}
                >
                    {day.date()}
                </Quantity>
            </Flex>
        );

        day = day.clone().add(1, "day");
    }

    return (
        <StyledNav {...props}>
            <Flex direction="column">
                <Flex>{days}</Flex>
                <Flex justify="space-between" align="center" padding="1rem 1.6rem 0 1.6rem;">
                    <Button img={imgArrow} rotate="180" onClick={props.prevWeek} />
                    <SubTitle>{props.date.format("MMMM YYYY")}</SubTitle>
                    <Button img={imgArrow} onClick={props.nextWeek} />
                </Flex>
            </Flex>
        </StyledNav>
    );
};
export default Nav;
