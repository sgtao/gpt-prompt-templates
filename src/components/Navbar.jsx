// import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Link,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

// eslint-disable-next-line react/prop-types
function Navbar({ open, setOpen, drawerWidth }) {
    // const classes = useStyles();
    const title = "gpt-prompt-templates";
    const toggleDrawer = () => {
        setOpen(!open);
    };
    const StyledAppBar = styled(AppBar, {
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
    const StyledLink = styled(Link)(() => ({
        textDecoration: "none",
        color: "white",
        fontSize: "12px",
        marginLeft: "0.5em",
        "&:hover": {
            color: "lightgray",
            borderBottom: "1px solid white",
        },
    }));
    const linkItems = [
        {
            label: "Chat-GPT",
            url: "https://chat.openai.com/chat"
        },
        {
            label: "Bard",
            url: "https://bard.google.com/"
        },
        {
            label: "Bing AI",
            url: "https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx"
        },
    ];
    return (
        <StyledAppBar position="fixed" open={open}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6" noWrap component="div">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        edge="start"
                        sx={{ mr: 2, /* ...(open && { display: "none" })*/ }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {title}
                </Typography>
                <Typography noWrap component="div"
                    sx={{ display: "flex", justifyContent: "space-around" }}
                >
                    {linkItems.map((item, index) => (
                        <StyledLink key={index} href={item.url} target="_blank">
                            {item.label}
                        </StyledLink>
                    ))}
                </Typography>
            </Toolbar>
        </StyledAppBar>
    );
}
export default Navbar;
