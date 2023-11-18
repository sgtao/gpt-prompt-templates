// SelectorComponent.jsx
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

function SelectorComponent(props) {
    // eslint-disable-next-line react/prop-types
    const { label, value, onChange, options } = props;
    return (
        <TextField
            sx={{ width: "90%", minWidth: "12em" }}
            select
            label={label}
            variant="outlined"
            value={value}
            onChange={onChange}
        >
            {
                // eslint-disable-next-line react/prop-types
                options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))
            }
        </TextField>
    );
}

export default SelectorComponent;

