// CodeGeneration.jsx
import * as React from "react";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import converPrompt from "../api/convertPrompt";
import { ModalBoard } from "./index";

export default function Classification(props) {
  const titleContents = String(props.title);
  const [context, setContext] = useState("");
  const changeContext = (e) => {
    const result = e.target.value;
    if (result === "") {
      setContext("");
    } else {
      setContext(e.target.value);
    }
  };
  const [language, setLanguage] = useState("JavaScript");
  const selectChange = (event) => {
    setLanguage(event.target.value);
  };
  const [convtext, setConvtext] = useState("");
  const onClickConvert = async () => {

    const todo = {
      "type": "021_codegeneration",
      "data01": context,
      "data02": language,
    }
    const resPrompt = await converPrompt.post(todo);
    // console.log(resPrompt);
    setConvtext(resPrompt.prompt);
    setOpen(true);
  };
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box sx={{ bgcolor: "#cfe8fc", height: "80vh" }}>
          <h3>{titleContents}</h3>
          <Card
            sx={{
              margin: "0 auto",
              maxWidth: "90%",
              minWidth: 275,
              height: "90%",
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: "1.2rem" }}
                color="text.secondary"
                gutterbottom="true"
              >
                CodeGenerationではコード生成のプロンプトを生成します（
                <Link
                  href="https://www.promptingguide.ai/jp/introduction/examples#%E3%82%B3%E3%83%BC%E3%83%89%E7%94%9F%E6%88%90"
                  target="_blank"
                >
                  解説
                </Link>
                ）
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                実現したい事・やりたい事と利用言語を入力して『Convert』ボタンをクリックしてください。
              </Typography>
              <Container sx={{ display: "flex", justifyContent: 'space-between',}} >
                <Button sx={{ margin: "10px",}}
                variant="outlined" onClick={() => onClickConvert()}>
                  Convert
                </Button>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={language}
                  label="Language"
                  onChange={selectChange}
                >
                  <MenuItem value={"JavaScript"}>JavaScript</MenuItem>
                  <MenuItem value={"Python"}>Python</MenuItem>
                  <MenuItem value={"Go"}>Go</MenuItem>
                  <MenuItem value={"PostgreSQL"}>PostgreSQL</MenuItem>
                  <MenuItem value={"MySQL"}>MySQL</MenuItem>
                  <MenuItem value={"MongoDB Query Language"}>MongoDB</MenuItem>
                  <MenuItem value={"レポート生成"}>レポート生成</MenuItem>
                </Select>
              </Container>
              <Container sx={{ margin: "10px" }}>
                <TextField
                  sx={{ m: 1, width: "90%" }}
                  label="やりたい事"
                  multiline
                  rows={3}
                  value={context}
                  onChange={changeContext}
                />
              </Container>
              <Container>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Convert例：
                  <br />
                  やりたい事を実現するコードを生成してください。
                  <br />
                  ## やりたい事：
                  <br />
                  - 1から100までの素数を抽出したい
                  <br />
                  ## 条件：
                  <br />
                  - 生成する言語：JavaScript
                  <br />
                  ## コード：
                  <br />
                </Typography>
              </Container>
            </CardContent>
          </Card>
        </Box>
      </Container>

      {/* 変換結果（プロンプト）を表示 */}
      <ModalBoard open={open} setOpen={setOpen} textMessage={convtext} />
    </React.Fragment>
  );
}
