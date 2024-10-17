import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/signIn/intex";
import SignUp from "../pages/signUp/intex";
import Home from "../pages/home/intex";

export default function Router() {
    return(
        <Routes>
            <Route path="/" Component={SignIn}/>
            <Route path="/sign-up" Component={SignUp}/>
            <Route path="/home" Component={Home} />
        </Routes> 
    );
}