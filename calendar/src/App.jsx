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
    const [savedDates, setSavedDates] = useState([]);
    const [deletedDate, setDeletedDate] = useState("");
    useEffect(() => {
        if (dateError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [dateError]);
    useEffect(() => {
        console.log(savedDates);
    }, [savedDates]);

    const dateHandler = (evt) => {
        setDate(evt.target.value);
        if (!moment(evt.target.value, "YYYY-MM-DD HH:mm", true).isValid()) {
            setDateDirty(true);
            setDateError("the date is not valid");
        } else {
            setDateError("");
        }
    };
    const blurHandler = (evt) => {
        if (evt.target.name === "inputDate") {
            return setDateDirty(true);
        }
    };
    const currentDateHandler = () => {
        return setState({
            date: moment(),
        });
    };
    const changeDayHandler = (evt) => {
        return setState({
            date: moment(evt.target.getAttribute("data-date")),
        });
    };

    const prevWeekHandler = () => {
        return setState({
            date: state.date.subtract(1, "weeks"),
        });
    };

    const nextWeekHandler = () => {
        return setState({
            date: state.date.add(1, "weeks"),
        });
    };
    const timeWeekHandler = (evt) => {
        const result = savedDates.find((date) => date === evt.target.getAttribute("data-value"));
        console.log(result);
        if (result) {
            return setDeletedDate(evt.target.getAttribute("data-value"));
        } else {
            setDeletedDate("");
        }
    };

    const popupHandler = () => {
        setSelected(!selected);
        setDate("");
        setDateError("The date cannot be empty");
        setDateDirty(false);
    };
    const deletedHandler = () => {
        setSavedDates(savedDates.filter((date) => date !== deletedDate));
        return setDeletedDate("");
    };
    const submitHandler = (evt) => {
        evt.preventDefault();
        const convertDate = moment(date.slice(0, date.length - 2) + "00").toISOString();
        setSavedDates([...savedDates, convertDate]);
        popupHandler();
    };
    return (
        <StyledApp>
            <Header popupHandler={popupHandler} />
            <Nav date={state.date} changeDayHandler={changeDayHandler} prevWeekHandler={prevWeekHandler} nextWeekHandler={nextWeekHandler} />
            <Week date={state.date} savedDates={savedDates} timeWeekHandler={timeWeekHandler} deletedDate={deletedDate} />
            <Footer currentDateHandler={currentDateHandler} deletedDate={deletedDate} deletedHandler={deletedHandler}></Footer>
            <PopupAdd
                submitHandler={submitHandler}
                formValid={formValid}
                dateHandler={dateHandler}
                date={date}
                dateError={dateError}
                dateDirty={dateDirty}
                blurHandler={blurHandler}
                selected={selected}
                popupHandler={popupHandler}
            ></PopupAdd>
        </StyledApp>
    );
}

export default App;
