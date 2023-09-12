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
import MenuItem from "@mui/material/MenuItem";
import converPrompt from "../api/convertPrompt";
import { ModalBoard } from "./index";

function SelectorComponent(props) {
    const { label, value, onChange, options } = props;
    return (
      <TextField
        sx={{ width: "90%" }}
        select
        label={label}
        variant="outlined"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    );
  }

export default function RollPlayConsultant(props) {
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
  const [convtext, setConvtext] = useState("");
  const onClickConvert = async () => {

    const todo = {
      "type": "031_rollplay_consulting",
      "data01": chatRoll,
      "data02": yourState,
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
    // 他の選択肢を追加できます
  ];

  const yourStateOptions = [
    { label: "喜んでいる", value: "喜んでいる" },
    { label: "退屈している", value: "退屈している" },
    { label: "悲しんでいる", value: "悲しんでいる" },
    { label: "疲れている", value: "疲れている" },
    { label: "不安定な気分である", value: "不安定な気分である" },
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
            </CardContent>
          </Card>
        </Box>
      </Container>

      {/* 変換結果（プロンプト）を表示 */}
      <ModalBoard open={open} setOpen={setOpen} textMessage={convtext} />
    </React.Fragment>
  );
}
