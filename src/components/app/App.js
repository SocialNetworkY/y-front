import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Изменили Switch на Routes
import Welcome from "../welcome/welcome";
import Feed from "../feed/feed";
import './App.css';
import {AuthProvider} from "../../context/authContext";


class App extends Component {
    render() {
        return (
            <Router>
                <AuthProvider>
                    <div className="App">
                        <Routes>
                            <Route path="/login" element={<Welcome />} />
                            <Route path="/feed" element={<Feed />} />
                        </Routes>
                    </div>
                </AuthProvider>
            </Router>
        );
    }
}

export default App;
