import Flex from "./components/Flex";
import Header from "./components/Header";
import Nav from "./components/Nav";
import styled from "styled-components";
import { useState} from "react";
import moment from "moment";
const StyledApp = styled.div`
    max-width: 46.25rem;
    width: 100%;
`;
function App() {
    const date = moment();

    const [state, setState] = useState({
        date: date,
        event_dates: {},
        selected_start_date: null,
        selected_active: false,
    });
    const changeDay = (evt) => {
        setState({
            date: moment(evt.target.getAttribute("data-date")),
        });
      
    };

    const prevWeek = () => {
        
        setState({
            date: state.date.subtract(1, "weeks"),
        });
    };

    const nextWeek = () => {
      
        
        setState({
            date: state.date.add(1, "weeks"),
        });
    };
    return (
        <Flex direction="column" align="center">
            <StyledApp>
                <Header />
                <Nav date={state.date} background="rgba(204, 204, 204, .3);" changeDay={changeDay} prevWeek={prevWeek} nextWeek={nextWeek} />
            </StyledApp>
        </Flex>
    );
}

export default App;
