// QuestionAnswering.jsx
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
import converPrompt from "../api/convertPrompt";
import { ModalBoard } from "./index";

export default function QuestionAnswering(props) {
  const titleContents = String(props.title);
  const [question, setQuestion] = useState("");
  const changeQuestion = (e) => {
    const result = e.target.value;
    if (result === "") {
      setQuestion("");
    } else {
      setQuestion(e.target.value);
    }
  };
  const [context, setContext] = useState("");
  const changeContext = (e) => {
    const result = e.target.value;
    if (result === "") {
      setContext("");
    } else {
      setContext(e.target.value);
    }
  };
  const [convtext, setConvtext] = useState("");
  const onClickConvert = async () => {

    const todo = {
      "type": "012_questionanswering",
      "data01": question,
      "data02": context,
    }
    const resPrompt = await converPrompt.post(todo);
    console.log(resPrompt);
    // setConvtext(convertedText);
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
                QuestionAnsweringでは前提となるコンテンツに対する質問プロンプトを生成します（
                <Link
                  href="https://www.promptingguide.ai/jp/introduction/examples#%E8%B3%AA%E5%95%8F%E5%BF%9C%E7%AD%94"
                  target="_blank"
                >
                  解説
                </Link>
                ）
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                質問文(Question)と前提(Contents)を入力して『Convert』ボタンをクリックしてください。
              </Typography>
              <Container
                sx={{
                  margin: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button variant="outlined" onClick={() => onClickConvert()}>
                  Convert
                </Button>
                <TextField
                  sx={{ width: "90%" }}
                  label="Question"
                  variant="outlined"
                  value={question}
                  onChange={changeQuestion}
                />
              </Container>
              <Container sx={{ margin: "10px" }}>
                <TextField
                  sx={{ m: 1, width: "90%" }}
                  label="Contents"
                  multiline
                  rows={4}
                  value={context}
                  onChange={changeContext}
                />
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
