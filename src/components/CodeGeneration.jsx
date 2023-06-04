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
import Modal from "@mui/material/Modal";
import Link from "@mui/material/Link";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Classification(props) {
  const titleContents = String(props.title);
  const [context, setContext] = useState("");
  const [language, setLanguage] = useState("JavaScript");
  const changeContext = (e) => {
    const result = e.target.value;
    if (result === "") {
      setContext("");
    } else {
      setContext(e.target.value);
    }
  };
  const selectChange = (event) => {
    setLanguage(event.target.value);
  };
  const onClickConvert = () => {
    setOpen(true);
  };
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

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
                gutterBottom
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <Typography id="modal-modal-title" variant="h6" component="h3">
            プロンプト例：
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: "2rem" }}>
            やりたい事を実現するコードを生成してください。実現性が難しい場合、代替方法を提示してください。
            <br />
            ## やりたい事：
            <br />- {context}
            <br />
            ## 条件：
            <br />
            - 生成する言語：{language}
            <br />
            ## コード：
            <br />
          </Typography>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
