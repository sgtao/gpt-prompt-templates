// Insertion.jsx
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
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import converPrompt from "../api/convertPrompt";
import { ModalBoard } from "./index";

export default function Insertion(props) {
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
  const [convtext, setConvtext] = useState("");
  const onClickConvert = async () => {
    const todo = {
      "type": "014_insertion",
      "data01": context,
    }
    const resPrompt = await converPrompt.post(todo);
    // cconsole.log(resPrompt);
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
                Insertionではサフィックスプロンプトとプレフィックスプロンプトの間にテキストを挿入します
                <Link
                  href="https://livesend.microsoft.com/i/DApm8A9vtIqNC8R2nfGBLxxaZbjPLUSSIGN2czkp7916hlPvmcknYPLMerjx4VxZ8___vtW3cAKxQqqwwK8r6BkPLUSSIGNaJLSguMDdWHWcewGTZ9iWvKmUb5WcbVgu6aSfdfiSwQyz8bBy?page=31"
                  target="_blank"
                >
                  解説(page.31)
                </Link>
                ）
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                関心のあるテーマ・カテゴリをテキスト入力して『Convert』ボタンをクリックしてください。
              </Typography>
              <Container sx={{ margin: "10px" }}>
                <Button variant="outlined" onClick={() => onClickConvert()}>
                  Convert
                </Button>
              </Container>
              <Container sx={{ margin: "10px" }}>
                <TextField
                  sx={{ m: 1, width: "90%" }}
                  label="Contents"
                  multiline
                  rows={3}
                  value={context}
                  onChange={changeContext}
                />
              </Container>
              <Container>
                プロンプト例：<br />
                <List>
                  <ListItem disablePadding>今日のセミナーの目次です。</ListItem>
                  <ListItem disablePadding>## 目次：</ListItem>
                  <ListItem disablePadding>
                    01．AIプロンプト　←テーマ
                  </ListItem>
                  <ListItem disablePadding>[ここに挿入してください]</ListItem>
                  <ListItem disablePadding>10．まとめ </ListItem>
                </List>
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
