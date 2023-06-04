// Summarization.jsx
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
import Link from '@mui/material/Link';

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

export default function Summarization(props) {
  const titleContents = String(props.title);
  const [text, setText] = useState("");
  const [convtext, setConvtext] = useState("");
  const handleChange = (e) => {
    const result = e.target.value;
    if (result === "") {
      setText("");
    } else {
      setText(e.target.value);
    }
  };
  const onClickConvert = (originalText) => {
    const convertedText = originalText;
    console.log(convertedText);
    setConvtext(convertedText);
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
                Summarizationでは要約指示のプロンプトを生成します（
                <Link
                  href="https://www.promptingguide.ai/jp/introduction/examples#%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E8%A6%81%E7%B4%84"
                  target="_blank"
                >
                  解説
                </Link>
                ）
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                入力欄に要約したい文書を貼り付けて『Convert』ボタンをクリックしてください。
              </Typography>
              <Container sx={{ margin: "10px" }}>
                <Button variant="outlined" onClick={() => onClickConvert(text)}>
                  Convert
                </Button>
              </Container>
              <Container>
                <TextField
                  sx={{ m: 1, width: "90%" }}
                  label="Original Contents"
                  multiline
                  rows={8}
                  value={text}
                  onChange={handleChange}
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
            次のテキストを一文もしくは200文字以内で説明してください。<br />
            一文で示す場合は、下のフォーマットでまとめてください<br />
            - 『いつ、どこで、だれが、何をした。（理由、どうなる／どうやる）』を具体的に記してください<br />
            ## テキスト：
            <br />
            {convtext}
          </Typography>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
