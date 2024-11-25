import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Изменили Switch на Routes
import './App.css';
import {AuthProvider} from "../../context/authContext";

import Profile from '../profile/profile'
import Feed from "../feed/feed";
import Welcome from "../welcome/welcome";


class App extends Component {
    render() {
        return (
            <Router>
                <AuthProvider>
                    <div className="App">
                        <Routes>
                            <Route path="/login" element={<Welcome />} />
                            <Route path="/feed" element={<Feed />} />
                            <Route path="/profile" element={<Profile/>} />
                        </Routes>
                    </div>
                </AuthProvider>
            </Router>
        );
    }
}

export default App;
