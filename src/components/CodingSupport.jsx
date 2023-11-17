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
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import converPrompt from "../api/convertPrompt";
import { ModalBoard } from "./index";

// コンポーネントを分割
function SelectorComponent(props) {
  // eslint-disable-next-line react/prop-types
  const { label, value, onChange, options } = props;
  return (
    <TextField
      sx={{ width: "90%", minWidth: "12em"  }}
      select
      label={label}
      variant="outlined"
      value={value}
      onChange={onChange}
    >
      {
        // eslint-disable-next-line react/prop-types
        options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))
      }
    </TextField>
  );
}

function CodingSupportForm({
  titleContents,
  language,
  setLanguage,
  languageOptions,
  selectLanguage,
  instruction,
  setInstruction,
  instructionOptions,
  changeInstruction,
  context,
  changeContext,
  onClickConvert,
}) {
  // スタイルオブジェクトの切り分け
  const cardStyles = {
    margin: "0 auto",
    maxWidth: "90%",
    minWidth: 275,
    height: "90%",
  };

  const containerStyles = {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px",
  };
  return (
    <Card
      sx={cardStyles}
    >
      <CardContent>
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
        <Container sx={containerStyles}>
          <Button
            sx={{ margin: "10px" }}
            variant="outlined"
            onClick={onClickConvert}
          >
            Convert
          </Button>
          <div sx={{ marginLeft: "10px"}}>
            {/* コンポーネントを再利用 */}
            <SelectorComponent
              label="Language"
              value={language}
              onChange={selectLanguage}
              options={languageOptions}
            />
          </div>
        </Container>
        <Container sx={containerStyles}>
          {/* コンポーネントを再利用 */}
          <SelectorComponent
            label="Instruction"
            value={instruction}
            onChange={changeInstruction}
            options={instructionOptions}
          />
        </Container>
        <Container sx={containerStyles}>
          <TextField
            sx={{ m: 1, width: "90%" }}
            label="Code"
            multiline
            rows={4}
            value={context}
            onChange={changeContext}
          />
        </Container>
      </CardContent>
    </Card>
  );
}

export default function CodingSupport(props) {
  const [language, setLanguage] = useState("JavaScript");
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
  const selectLanguage = (event) => {
    setLanguage(event.target.value);
  };
  const [instruction, setInstruction] = useState("コード解説");
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
    const result = e.target.value;
    if (result === "") {
      setInstruction("");
    } else {
      setInstruction(e.target.value);
    }
  };

  const [context, setContext] = useState("");
  const [convtext, setConvtext] = useState("");
  const [open, setOpen] = React.useState(false);

  const onClickConvert = async () => {
    const todo = {
      type: "022_codingSupport",
      data01: language,
      data02: instruction,
      data03: context,
    };
    const resPrompt = await converPrompt.post(todo);
    setConvtext(resPrompt.prompt);
    setOpen(true);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box sx={{ bgcolor: "#cfe8fc", height: "80vh" }}>
          {/* タイトル表示 */}
          <h3>{String(props.title)}</h3>
          {/* Formコンポーネントを呼び出し */}
          <CodingSupportForm
            titleContents={props.title}
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
      <ModalBoard open={open} setOpen={setOpen} textMessage={convtext} />
    </React.Fragment>
  );
}
