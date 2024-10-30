import {AppRouter} from "./router/index";
import {BrowserRouter} from "react-router-dom";


export const CalendarApp = () => {
    return (
        <BrowserRouter>
        <AppRouter/>
        </BrowserRouter>
    );
};



