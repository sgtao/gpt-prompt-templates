// FormWith2Sel1MultiText.jsx
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { SelectorComponent } from "./index";

function FormWith2Sel1MultiText({
  headDescriptionn,
  language,
  languageOptions,
  selectLanguage,
  instruction,
  instructionOptions,
  changeInstruction,
  context,
  changeContext,
  onClickConvert,
}) {
  // スタイルオブジェクトの切り分け
  const cardStyles = {
    margin: "0 auto",
    maxWidth: "90%",
    minWidth: 275,
    height: "90%",
  };

  const containerStyles = {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px",
  };
  return (
    <Card
      sx={cardStyles}
    >
      <CssBaseline />
      <CardContent>
        {headDescriptionn}
        <Container sx={containerStyles}>
          <Button
            sx={{ margin: "10px" }}
            variant="outlined"
            onClick={onClickConvert}
          >
            Convert
          </Button>
          <div sx={{ marginLeft: "10px" }}>
            {/* コンポーネントを再利用 */}
            <SelectorComponent
              label="Language"
              value={language}
              onChange={selectLanguage}
              options={languageOptions}
            />
          </div>
        </Container>
        <Container sx={containerStyles}>
          {/* コンポーネントを再利用 */}
          <SelectorComponent
            label="Instruction"
            value={instruction}
            onChange={changeInstruction}
            options={instructionOptions}
          />
        </Container>
        <Container sx={containerStyles}>
          <TextField
            sx={{ m: 1, width: "90%" }}
            label="Code"
            multiline
            rows={4}
            value={context}
            onChange={changeContext}
          />
        </Container>
      </CardContent>
    </Card>
  );
}

export default FormWith2Sel1MultiText;
