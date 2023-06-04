import Flex from "./components/UI/Flex";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Week from "./components/Week/Week";
import Footer from "./components/Footer/Footer";
import PopupAdd from "./components/Popup/PopupAdd";
import styled from "styled-components";
import { useState } from "react";
import moment from "moment";
const StyledApp = styled.div`
    max-width: 46.25rem;
    width: 100%;
`;
function App() {
    const [state, setState] = useState({
        date: moment(),
    });
    const [selected, setSelected] = useState(false);

    const getCurrentDate = () => {
        return setState({
            date: moment(),
        });
    };
    const changeDay = (evt) => {
        return setState({
            date: moment(evt.target.getAttribute("data-date")),
        });
    };

    const prevWeek = () => {
        return setState({
            date: state.date.subtract(1, "weeks"),
        });
    };

    const nextWeek = () => {
        return setState({
            date: state.date.add(1, "weeks"),
        });
    };
    const handleTimeClick = (evt) => {
        console.log(evt.target.getAttribute("data-value"));
    };
    const togglePopup = () => {
        setSelected(!selected);
    };

    return (
        <Flex direction="column" align="center">
            <StyledApp>
                <Header togglePopup={togglePopup} />
                <Nav date={state.date} changeDay={changeDay} prevWeek={prevWeek} nextWeek={nextWeek} />
                <Week date={state.date} handleTimeClick={handleTimeClick} />
                <Footer handleClick={getCurrentDate}></Footer>
                <PopupAdd selected={selected} togglePopup={togglePopup}></PopupAdd>
            </StyledApp>
        </Flex>
    );
}

export default App;
