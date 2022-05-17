import React from "react";
import "./App.css";
import { CssBaseline } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import Search from "./components/Search/Search";
import Results from "./components/Search/Results";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header/Header";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function App() {
    const [didSearch, setSearch] = useState(false);
    const [itemID, setItemID] = useState("");
    const [val, setVal] = useState("");

    const searchItemID = (event) => {
        event.preventDefault();
        let item = val.toLowerCase();

        axios.get(`https://xivapi.com/search?string=` + item)
            .then(res => {
                const keys = Object.keys(res.data.Results)
                keys.map(result => {
                    let item = res.data.Results[result];
                    if (item.Name.toLowerCase() == item) {
                        setItemID(item.ID);
                    }
                }); 
                setSearch(true);
            })
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Header />
            {didSearch ? <Results itemID={itemID} /> : <Search submitFunc={searchItemID} val={val} setVal={setVal} />}
        </ThemeProvider>
    );
}

export default App;
