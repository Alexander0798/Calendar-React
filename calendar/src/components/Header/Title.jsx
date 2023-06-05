import styled from "styled-components";
const StyledTitle = styled.h1`
font-size: 1.3rem;
color: rgb(0 0 0 );
margin: 0;
font-weight:  500;
@media (min-width: 30em) {
    font-size: 1.5rem;
}
`

const Title = (props) => {
    return <StyledTitle {...props} />;
};
export default Title;
