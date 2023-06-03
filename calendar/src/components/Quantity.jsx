import styled from "styled-components";

const StyledQuantity = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    line-height: 2;
    font-weight: 700;
    font-size: 1.6rem;


    ${({ active }) =>
        active &&
        `
  border-radius: 50%;
  background-color: red;
  color: #fff;
`}

    @media (max-width: 600px) {
        width: 2.3rem;
        height: 2.3rem;
        line-height: 1;
        font-size: 1.2rem;
    }
`;
const Quantity = (props) => {
    return <StyledQuantity {...props} />;
};
export default Quantity;
