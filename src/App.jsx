import { Route, Routes } from "react-router-dom";
import WelcomePage from "./component/WelcomePage";
import GraduationDetails from "./component/GraduationDetails";

function App() {
    return (
        <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/details" element={<GraduationDetails />} />
        </Routes>
    );
}

export default App;
