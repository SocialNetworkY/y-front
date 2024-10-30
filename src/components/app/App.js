import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Изменили Switch на Routes
import Welcome from "../welcome/welcome";
import Feed from "../feed/feed";
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Welcome />} />
                        <Route path="/feed" element={<Feed />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;
