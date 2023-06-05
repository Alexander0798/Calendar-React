import styled from "styled-components";

const StyledError = styled.div`
color: red;
`
const Error = (props) => {
    return <StyledError {...props}/>
}
export default Error