import Flex from "./components/Flex";
import Header from "./components/Header";
import NavigationDate from "./components/NavigationDate";
import styled from "styled-components";
import { useState } from "react";
import moment from "moment";
const StyledApp = styled.div`
    max-width: 46.25rem;
    width: 100%;
`;
function App() {
    const date = moment()

    const [state, setState] = useState({
        date: date,
        event_dates: {},
        selected_start_date: null,
        selected_active: false,
    });
    return (
        <Flex direction="column" align="center">
            <StyledApp>
                <Header/>
                <NavigationDate date={state.date} useState={useState} background="rgba(204, 204, 204, .3);"/>
            </StyledApp>
        </Flex>
    );
}

export default App;
