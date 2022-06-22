import { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";


function SearchBar() {
    const [val, setVal] = useState("");
    const navigate = useNavigate();

    const searchItemID = (event) => {
        event.preventDefault();

        let searchItem = val.toLowerCase();
        navigate(`/search/${searchItem}`);
    };

    return (
        <form onSubmit={searchItemID}>
            <TextField
                id="search"
                type="search"
                placeholder="Pee pee poo poo"
                fullWidth
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                autoComplete="off"
                onChange={(e) => setVal(e.target.value)}
            />
        </form>
    );
}

export default SearchBar;