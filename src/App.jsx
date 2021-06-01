import logo from './logo.svg';
import './App.css';
import {AppBar, Tab, Tabs} from "@material-ui/core";
import {useState} from "react";
import RawJson from "./components/RawJson";
import FileJson from "./components/FileJson";

function App() {
    const [view, setView] = useState('rawJson');

    const handleTabChange = (event, view) => {
        setView(view);
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p className="welcome-top"> JSON Tool </p>
            </header>
            <div className="App-body">
                <AppBar position="static" className="tab-view">
                    <Tabs value={view} centered="true" onChange={handleTabChange}>
                        <Tab label="Raw Json" title="Raw Json Tab" value="rawJson"/>
                        <Tab label="Json File" title="Json File Tab" value="file"/>
                    </Tabs>
                </AppBar>
                {view && view === "rawJson" && <RawJson/>}
                {view && view === "file" && <FileJson/>}
            </div>
        </div>
    );
}

export default App;
