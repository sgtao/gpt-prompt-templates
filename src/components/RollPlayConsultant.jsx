// RollPlayConsultant.jsx
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
import { SelectorComponent, ModalBoard } from "./index";

export default function RollPlayConsultant(props) {
  // eslint-disable-next-line react/prop-types
  const titleContents = String(props.title);
  const [chatRoll, setChatRoll] = useState("");
  const changeChatRoll = (e) => {
    const result = e.target.value;
    if (result === "") {
      setChatRoll("");
    } else {
      setChatRoll(e.target.value);
    }
  };
  const [yourState, setYourState] = useState("");
  const changeYourState = (e) => {
    const result = e.target.value;
    if (result === "") {
      setYourState("");
    } else {
      setYourState(e.target.value);
    }
  };
  const [yourWant, setYourWant] = useState("");
  const changeYourWant = (e) => {
    const result = e.target.value;
    if (result === "") {
      setYourWant("");
    } else {
      setYourWant(e.target.value);
    }
  };
  const [convtext, setConvtext] = useState("");
  const onClickConvert = async () => {

    const todo = {
      "type": "031_rollplay_consulting",
      "data01": chatRoll,
      "data02": (yourWant !== "") ?
        `${yourState}感情で、${yourWant}をしたい` :
        `${yourState}`,
      "data03": "ここ１週間の調子はどうですか？"
    }
    const resPrompt = await converPrompt.post(todo);
    // console.log(resPrompt);
    setConvtext(resPrompt.prompt);
    setOpen(true);
  };
  const [open, setOpen] = React.useState(false);

  const chatRollOptions = [
    { label: "カウンセラー", value: "カウンセラー" },
    { label: "学校の先生", value: "学校の先生" },
    { label: "デザイナー", value: "デザイナー" },
    { label: "旅行ガイド", value: "旅行ガイド" },
    { label: "スポーツコーチ", value: "スポーツコーチ" },
    { label: "エンジニア", value: "エンジニア" },
    { label: "経営コンサルタント", value: "経営コンサルタント" },
    // 他の選択肢を追加できます
  ];

  const yourStateOptions = [
    { label: '喜び、感謝している。', value: '喜び、感謝している。' },
    { label: '情熱がある。', value: '情熱がある。' },
    { label: 'やる気あり、幸福を感じてる。', value: 'やる気あり、幸福を感じてる。' },
    { label: 'ポジティブな期待、信念ある。', value: 'ポジティブな期待、信念ある。' },
    { label: '楽観してる。', value: '楽観してる。' },
    { label: '希望がある。', value: '希望がある。' },
    { label: '満足、納得している。', value: '満足、納得している。' },
    { label: '退屈している。', value: '退屈している。' },
    { label: '悲観している。', value: '悲観している。' },
    { label: '欲求不満、ストレスがある。', value: '欲求不満、ストレスがある。' },
    { label: '戸惑い、圧迫感がある。', value: '戸惑い、圧迫感がある。' },
    { label: '落胆している。', value: '落胆している。' },
    { label: '疑い、不安がある。', value: '疑い、不安がある。' },
    { label: '心配している。', value: '心配している。' },
    { label: '非難、自責している。', value: '非難、自責している。' },
    { label: '挫折感、失望がある。', value: '挫折感、失望がある。' },
    { label: '怒りを感じる。', value: '怒りを感じる。' },
    { label: '復讐心がある。', value: '復讐心がある。' },
    { label: '憎しみ、敵意がある。', value: '憎しみ、敵意がある。' },
    { label: '嫉妬している。', value: '嫉妬している。' },
    { label: '自信喪失、罪悪感がある。', value: '自信喪失、罪悪感がある。' },
    { label: '恐れ、苦悩、憂鬱である。', value: '恐れ、苦悩、憂鬱である。' },
    // 他の選択肢を追加できます
  ];

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
                RollPlayConsultantでは役割に応じた会話相手を要望するプロンプトを生成します（
                <Link
                  href="https://github.com/yukinaga/prompt_engineering"
                  target="_blank"
                >
                  参考：我妻さんプロンプト
                </Link>
                ）
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                会話相手の役割(ChatRoll)とあなたなの状態(YourState)を入力して『Convert』ボタンをクリックしてください。
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
              </Container>
              <Container sx={{ margin: "10px" }}>
                <SelectorComponent
                  label="ChatRoll"
                  value={chatRoll}
                  onChange={changeChatRoll}
                  options={chatRollOptions}
                />
              </Container>
              <Container sx={{ margin: "5px", marginLeft: "10px" }}>
                <SelectorComponent
                  label="YourState"
                  value={yourState}
                  onChange={changeYourState}
                  options={yourStateOptions}
                />
              </Container>
              <Container sx={{ margin: "10px" }}>
                <TextField
                  sx={{ width: "90%", minWidth: "90%", maxWidth: "90%" }}
                  label="YourWant"
                  value={yourWant}
                  onChange={changeYourWant}
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
