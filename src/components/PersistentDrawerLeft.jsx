// PersistentDrawerLeft.jsx
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Link as Scroll } from "react-scroll";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
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
  RollPlay,
  CodeGeneration,
  BlankTemplate,
} from "./index";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const title = "gpt-prompt-templates";
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const menuList = [
    "summarization",
    "questionAnswering",
    "classification",
    "insertion",
    "rollPlay",
    "codeGeneration",
    "reasoning",
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
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
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
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
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
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <header title="gpt-prompt-templates" id="top">
          プロンプトテンプレート
        </header>
        <Typography variant="h5" gutterBottom>
          プロンプト生成を補助するアプリです：
        </Typography>
        <Typography paragraph>
          左メニューのテンプレートを選び独自の入力をすることで、プロンプトに貼り付け可能な文章を表示します。
          テンプレートの解説を読んで、ご利用ください。
        </Typography>
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
        <Container id="rollPlay">
          <RollPlay title="RollPlay" />
        </Container>
        <Container id="codeGeneration">
          <CodeGeneration title="CodeGeneration" />
        </Container>
        <Container id="reasoning">
          <BlankTemplate title="Reasoning" />
        </Container>
      </Main>
    </Box>
  );
}
// EOF
