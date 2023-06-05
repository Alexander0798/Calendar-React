import styled from "styled-components";

const StyledDate = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    line-height: 2;
    font-weight: 700;
    font-size: 1.6rem;
    cursor: pointer;

    ${({ green }) =>
        green &&
        `
    border-radius: 50%;
    background-color: green;
    color: #fff;

`}
    ${({ active }) =>
        active &&
        `
    border-radius: 50%;
    background-color: red;
    color: #fff;
  
`}
 
    @media (max-width: 37.5em) {
        width: 2rem;
        height: 2rem;
        line-height: 1;
        font-size: 1.2rem;
    }
`;
const Date = (props) => {
    return <StyledDate {...props} />;
};
export default Date;
