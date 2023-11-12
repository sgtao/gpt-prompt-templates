// PromptDashboard.jsx
import * as React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArticleIcon from "@mui/icons-material/Article";
import HomeIcon from "@mui/icons-material/Home";
import {
  Navbar,
} from "../components/index";
import {
  HomeAbstract,
  BasicPrompts,
  CodePrompts,
  ConversationPrompts,
} from "./index";
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
  const menuItems = [
    {
      name: "BasicPrompts",
      url: "/gpt-prompt-templates/basic/"
    },
    {
      name: "CodePrompts",
      url: "/gpt-prompt-templates/code/"
    },
    {
      name: "ConversationPrompts",
      url: "/gpt-prompt-templates/conversation/"
    },
  ];
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
          <ListItem key="Top" disablePadding>
            <Link to="/gpt-prompt-templates/" >
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Top" />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          {menuItems.map((menu, index) => (
            <ListItem key={index} disablePadding>
              <Link to={menu.url} >
                <ListItemButton>
                  <ListItemIcon>
                    <ArticleIcon />
                  </ListItemIcon>
                  <ListItemText primary={`${(index + 1)}.${menu.name}`} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <MainBox open={open}>
        <Routes>
          <Route path="/gpt-prompt-templates/" element={<HomeAbstract />} />
          <Route path="/gpt-prompt-templates/basic/" element={<BasicPrompts />} />
          <Route path="/gpt-prompt-templates/code/" element={<CodePrompts />} />
          <Route path="/gpt-prompt-templates/conversation/" element={<ConversationPrompts />} />
        </Routes>
      </MainBox>
    </Box>
  );
}
// EOF
