import { Box, TextField, Typography, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";

function Search() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "60vw" }}>
      <Typography variant="h1">Female Au Ra {">>>>"}</Typography>
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
        />
      </form>
    </Box>
  );
}

export default Search;
