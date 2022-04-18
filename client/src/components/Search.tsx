import { Box, TextField, Typography, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React, { ChangeEvent, useState } from "react";

function Search() {
  const [val, setVal] = useState("");
  
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "60vw" }}>
      <Typography variant="h1">Female Au Ra {">>>"}</Typography>
      <form>
        <TextField
          id="search"
          type="search"
          placeholder="Pee pee poo poo"
          fullWidth
          InputProps={{
            endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>),
          }}
          autoComplete="off"
          onChange={(e:ChangeEvent<HTMLInputElement>) => setVal(e.target.value)}
        />
      </form>
    </Box>
  );
}

export default Search;
