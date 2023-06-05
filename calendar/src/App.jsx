import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Week from "./components/Week/Week";
import Footer from "./components/Footer/Footer";
import PopupAdd from "./components/Popup/PopupAdd";
import styled from "styled-components";
import { useState, useEffect } from "react";

import moment from "moment";
const StyledApp = styled.div`
    display: grid;
    justify-content: center;
    margin: 0 auto;
    grid-template-columns: minmax(20rem, 42.25rem);
    grid-template-rows: auto auto 1fr auto;
    width: 100%;
    height: 100vh;
`;
function App() {
    const [state, setState] = useState({
        date: moment(),
    });
    const [selected, setSelected] = useState(false);
    const [date, setDate] = useState("");
    const [dateDirty, setDateDirty] = useState(false);
    const [dateError, setDateError] = useState("The date cannot be empty");
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (dateError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [dateError]);

    const dateHandler = (evt) => {
        setDate(evt.target.value);
        if (!moment(evt.target.value, "YYYY-MM-DD HH:mm", true).isValid()) {
            setDateError("the date is not valid");
        } else {
            setDateError("");
        }
    };
    const blurHandler = (evt) => {
        if (evt.target.name === "inputDate") {
            setDateDirty(true);
        }
    };
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
        <StyledApp>
            <Header togglePopup={togglePopup} />
            <Nav date={state.date} changeDay={changeDay} prevWeek={prevWeek} nextWeek={nextWeek} />
            <Week date={state.date} handleTimeClick={handleTimeClick} />
            <Footer handleClick={getCurrentDate}></Footer>
            <PopupAdd
                formValid={formValid}
                dateHandler={dateHandler}
                date={date}
                dateError={dateError}
                dateDirty={dateDirty}
                blurHandler={blurHandler}
                selected={selected}
                togglePopup={togglePopup}
            ></PopupAdd>
        </StyledApp>
    );
}

export default App;
