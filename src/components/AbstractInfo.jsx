// AbstractInfo.jsx
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function AbstractInfo(props) {
  const titleContents = String(props.title);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box sx={{ bgcolor: "#d8fccf", height: "80vh" }}>
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
              <Box
                sx={{ fontSize: "1.2rem" }}
                color="text.secondary"
                gutterbottom="true"
              >
                <Typography>
                  ChatAI向けのアプリです。基本的なプロンプト例の作成を補助します。<br />
                  対象とするサービスは下を想定しています。
                </Typography>
                <List>
                <ListItem disablePadding>
                    <Link href="https://chat.openai.com/chat" target="_blank">
                      Open-AI, Chat-GPT
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                    <Link href="https://bard.google.com/" target="_blank">
                      Google, Bard
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                    <Link href="https://web.skype.com/" target="_blank">
                      Microsoft, Web Skype
                    </Link>（Bingにアクセスしてください）
                  </ListItem>
                </List>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </React.Fragment>
  );
}
