// CodingSupport.jsx
import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import converPrompt from "../api/convertPrompt";
import { SelectorComponent, FormWith2Sel1MultiText, ModalBoard } from "./index";

export default function CodingSupport(props) {
  const [language, setLanguage] = useState("");
  const languageOptions = [
    { label: "JavaScript", value: "JavaScript" },
    { label: "Python", value: "Python" },
    { label: "Go", value: "Go" },
    { label: "Rust", value: "Rust" },
    { label: "C, C++", value: "C, C++" },
    { label: "BashScript", value: "Bash" },
    { label: "PowerShell", value: "PowerShell" },
    // 他の選択肢を追加できます
  ];
  const selectLanguage = (e) => {
    setLanguage(e.target.value);
  };
  const [instruction, setInstruction] = useState("");
  const instructionOptions = [
    { label: "コード解説", value: "コードの解説をしてください。" },
    { label: "コメント挿入", value: "コードにコメントを追加してください。" },
    { label: "コード可読性向上", value: "コードを読みやすいように改善してください。" },
    { label: "コードの検査", value: "コードの問題点を教えてください。" },
    { label: "コードの問題点修正", value: "コードの問題点を修正したコードを教えてください。" },
    { label: "テストコード作成", value: "コードに対するテストコードを作成してください。" },
    // 他の選択肢を追加できます
  ];
  const changeInstruction = (e) => {
    setInstruction(e.target.value);
  };
  const headDescriptionn = () => {
    return (
      <>
        <Typography
          sx={{ fontSize: "1.2rem" }}
          color="text.secondary"
          gutterBottom
        >
          CodingSupportでは既存のコードに対して補助するプロンプトを生成します。
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          言語指定(Language)を行い、指示(Instruction)とコード(Contents)を入力して『Convert』ボタンをクリックしてください。
        </Typography>
      </>
    );
  };

  const [context, setContext] = useState("");
  const [prompt, setPrompt] = useState("");
  const [modalOpen, setModalOpen] = React.useState(false);

  const onClickConvert = async () => {
    const todo = {
      type: "022_codingSupport",
      data01: language,
      data02: instruction,
      data03: context,
    };
    const resPrompt = await converPrompt.post(todo);
    setPrompt(resPrompt.prompt);
    setModalOpen(true);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box sx={{ bgcolor: "#cfe8fc", height: "80vh" }}>
          {/* タイトル表示 */}
          <h3>{String(props.title)}</h3>
          {/* Formコンポーネントを呼び出し */}
          <FormWith2Sel1MultiText
            headDescriptionn={headDescriptionn()}
            language={language}
            setLanguage={setLanguage}
            languageOptions={languageOptions}
            selectLanguage={selectLanguage}
            instruction={instruction}
            setInstruction={setInstruction}
            instructionOptions={instructionOptions}
            changeInstruction={changeInstruction}
            context={context}
            changeContext={(e) => setContext(e.target.value)}
            onClickConvert={onClickConvert}
          />
        </Box>
      </Container>

      {/* 変換結果（プロンプト）を表示 */}
      <ModalBoard open={modalOpen} setOpen={setModalOpen} textMessage={prompt} />
    </React.Fragment>
  );
}
