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
  const linkItems = [
    {
      label: "Open-AI, Chat-GPT",
      url: "https://chat.openai.com/chat"
    },
    {
      label: "Google, Bard",
      url: "https://bard.google.com/"
    },
    {
      label: "Bing AI Chat",
      url: "https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx"
    },
  ];
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
                  {
                    linkItems.map((item, index) => {
                      return (
                      <ListItem key={index} disablePadding>
                        <Link href={item.url} target="_blank">
                          {item.label}
                        </Link>
                      </ListItem>
                      );
                    })
                  }
                </List>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </React.Fragment>
  );
}
