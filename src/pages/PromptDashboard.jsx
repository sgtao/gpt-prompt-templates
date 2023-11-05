// PromptDashboard.jsx
import * as React from "react";
import { styled } from "@mui/material/styles";
import { Link as Scroll } from "react-scroll";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArticleIcon from "@mui/icons-material/Article";
import HomeIcon from "@mui/icons-material/Home";
import Container from "@mui/material/Container";
import {
  Summarization,
  QuestionAnswering,
  Classification,
  Insertion,
  CodeGeneration,
  Reasoning,
  AbstractInfo,
  RollPlayConsultant,
  Navbar,
} from "../components/index";

const drawerWidth = 280;

const MainBox = styled("main", {
  shouldForwardProp: (prop) => prop !== "open"
})(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PromptDashboard() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const menuList = [
    "summarization",
    "questionAnswering",
    "classification",
    "insertion",
    "codeGeneration",
    "reasoning",
    "rollPlayConsultant",
  ];
  const onClickItem = (textId) => {
    //指定位置までスクロールする
    document
      .getElementById(textId)
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    setOpen(false);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar
        open={open} setOpen={setOpen} drawerWidth={drawerWidth}
      />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Scroll to={"top"} smooth>
            <ListItem key="Top" disablePadding>
              <ListItemButton onClick={() => onClickItem("top")}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Top" />
              </ListItemButton>
            </ListItem>
          </Scroll>
        </List>
        <Divider />
        <List>
          {menuList.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => onClickItem(text)}>
                <ListItemIcon>
                  <ArticleIcon />
                </ListItemIcon>
                <ListItemText primary={`${(index + 1)}.${text}`} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <MainBox open={open}>
        <DrawerHeader />
        <header title="gpt-prompt-templates" id="top">
          プロンプトテンプレート
        </header>
        <Typography
          variant="h5"
          gutterbottom="true"
        >
          プロンプト生成を補助するアプリです：
        </Typography>
        <Typography paragraph>
          左メニューのテンプレートを選び独自の入力をすることで、プロンプトに貼り付け可能な文章を表示します。
          テンプレートの解説を読んで、ご利用ください。
        </Typography>
        <Container>
          <AbstractInfo title="Abstract" />
        </Container>
        <Container id="summarization">
          <Summarization title="Summarization" />
        </Container>
        <Container id="questionAnswering">
          <QuestionAnswering title="QuestionAnswering" />
        </Container>
        <Container id="classification">
          <Classification title="Classification" />
        </Container>
        <Container id="insertion">
          <Insertion title="Insertion" />
        </Container>
        <Container id="codeGeneration">
          <CodeGeneration title="CodeGeneration" />
        </Container>
        <Container id="reasoning">
          <Reasoning title="Reasoning" />
        </Container>
        <Container id="rollPlayConsultant">
          <RollPlayConsultant title="RollPlayConsultant" />
        </Container>
      </MainBox>
    </Box>
  );
}
// EOF
