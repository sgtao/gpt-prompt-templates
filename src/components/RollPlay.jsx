// RollPlay.jsx
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
  const [thema, setThema] = useState("");
  const [rollAsan, setRollasan] = useState("");
  const [rollBsan, setRollbsan] = useState("");
  const [headConversation, setHeadConversation] = useState("");
  const changeThema = (eventThema) => {
    const result = eventThema.target.value;
    if (result === "") {
      setThema("");
    } else {
      setThema(result);
    }
  };
  const changeHeadConversation = (eventHead) => {
    const result = eventHead.target.value;
    if (result === "") {
      setHeadConversation("");
    } else {
      setHeadConversation(result);
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
                gutterbottom="true"
              >
                RollPlayは、AI に役割を与えて会話を進めさせるテクニックです（
                <Link
                  href="https://www.promptingguide.ai/jp/introduction/examples#%E4%BC%9A%E8%A9%B1"
                  target="_blank"
                >
                  解説
                </Link>
                ）
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                会話のテーマ、登場人物などを入力して『Convert』ボタンをクリックしてください。
              </Typography>
              <Container sx={{ margin: "10px" }}>
                <Button variant="outlined" onClick={() => onClickConvert()}>
                  Convert
                </Button>
              </Container>
              <Container sx={{ margin: "10px" }}>
                <TextField
                  sx={{ m: 1, width: "90%" }}
                  label="テーマ"
                  multiline
                  rows={3}
                  value={thema}
                  onChange={changeThema}
                />
              </Container>
              <Container sx={{ margin: "10px", display: "flex", justifyContent: 'space-between',}} >
                <TextField label="Role-A" value={rollAsan}
                  onChange={(eAsan) => setRollasan(eAsan.target.value)} />
                <TextField label="Role-A" value={rollBsan}
                  onChange={(eBsan) => setRollbsan(eBsan.target.value)} />
              </Container>
              <Container sx={{ margin: "10px" }}>
                <TextField
                  sx={{ m: 1, width: "100%" }}
                  label="会話冒頭（Roll-A）"
                  multiline
                  rows={4}
                  value={headConversation}
                  onChange={changeHeadConversation}
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
            {thema}をテーマに、{rollAsan}と{rollBsan}の会話を続けてください。<br />
            ## 会話：<br />
            - {rollAsan}：{headConversation}
            <br />
            - {rollBsan}：
            <br />
          </Typography>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
