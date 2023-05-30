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
import Modal from "@mui/material/Modal";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

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
              <Container sx={{ margin: "10px" }}>
                <Grid container spacing={2} sx={{ margin: "10px" }}>
                  <Grid item xs={2}>
                    <Button variant="outlined" onClick={() => onClickConvert()}>
                      Convert
                    </Button>
                  </Grid>
                  <Grid item xs={10}>
                    <TextField
                      sx={{ width: "90%" }}
                      label="Question"
                      variant="outlined"
                      value={question}
                      onChange={changeQuestion}
                    />
                  </Grid>
                </Grid>
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
            テキストに基づいて下記質問に答えてください。もし答えがない場合には、「私は知らない」と答えてください。
            <br />
            ## テキスト：
            <br />
            {context}
            <br />
            ## 質問：
            <br />
            {question}
          </Typography>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
