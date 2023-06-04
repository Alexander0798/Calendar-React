import styled from "styled-components";
const StyledTitle = styled.h1`
font-size: ${({size}) => size || "1.5rem"};
color: ${({color}) => color || "rgb(0 0 0 )"};
margin: ${({margin}) => margin || "0"};
font-weight: ${({weight}) => weight || "400"};`

const Title = (props) => {
    return <StyledTitle {...props}/>
}
export default Title