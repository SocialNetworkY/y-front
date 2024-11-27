import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import {AuthProvider} from "../../context/authContext";

import Profile from '../profile/profile'
import Feed from "../feed/feed";
import Welcome from "../welcome/welcome";
import AdminPanel from "../admin-panel/admin-panel";


class App extends Component {
    render() {
        return (
            <Router>
                <AuthProvider>
                    <div className="App">
                        <Routes>
                            <Route path="/login" element={<Welcome />} />
                            <Route path="/" element={<Feed />} />
                            <Route path="/profile" element={<Profile/>} />
                            <Route path="/admin" element={<AdminPanel/>} />
                        </Routes>
                    </div>
                </AuthProvider>
            </Router>
        );
    }
}

export default App;
