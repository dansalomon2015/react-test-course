import React from "react";
import logo from "./logo.svg";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
    const a = 2;
    const b = 4;

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    data-testid="learn-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cy="test"
                >
                    Learn testing
                </a>

                <ul>
                    <li>todo</li>
                    <li>todo</li>
                    <li>todo</li> Not
                </ul>

                <h1 data-testid="mytestid">Hello</h1>
                <span title="sum">{a + b}</span>
            </header>
            <Outlet></Outlet>
        </div>
    );
}

export default App;
