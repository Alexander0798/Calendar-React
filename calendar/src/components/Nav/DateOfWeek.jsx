import styled from "styled-components";

const StyledDateOfWeek = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 0.8rem;
    margin: 0 0 0.25rem;

    @media (min-width: 37.5em) {
        font-size: 1rem;
    }
`;
const DateOfWeek = (props) => {
    return <StyledDateOfWeek {...props} />;
};
export default DateOfWeek;
