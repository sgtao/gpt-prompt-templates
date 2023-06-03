// BlankTemplate.jsx
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function BlankTemplate(props) {
  const titleContents = String(props.title);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box sx={{ bgcolor: "#cfe8fc", height: "80vh" }}>
          <h3>{titleContents}</h3>
        </Box>
      </Container>
    </React.Fragment>
  );
}
