import Flex from './Flex';
import Title from './Title';
import Button from './Button';
import imgAdd from '../image/svg/plus.svg'
import styled from "styled-components";

const StyledHeader = styled.header`
    height: ${({ height }) => height || "5rem"};
    background: ${({ background }) => background || "white"};
`;

const Header = (props) => {
    return <StyledHeader {...props} >
        <Flex justify="space-between" align="center" padding="0 1.5rem 0">
            <Title>Interview Calendar</Title>
            <Button img={imgAdd}/>
        </Flex>
    </StyledHeader>;
};
export default Header