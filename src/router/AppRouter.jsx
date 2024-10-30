import {Navigate, Route, Routes} from "react-router-dom";
import {LoginPage} from "../auth/index.js";
import {CalendarPage} from "../calendar/index";




export const AppRouter = () => {

    const authStatus = 'authenticated'

    return (
        <div>
                <Routes>
                    {
                        authStatus === 'not-authenticated'
                        ?  <Route path="/auth/*"  element={  <LoginPage/>    }/>
                        :  <Route path="/*"  element={  <CalendarPage/>    }/>
                    }
                    <Route path="/*"  element={ <Navigate to="/auth/login" />}/>
                </Routes>
        </div>
    );
};

