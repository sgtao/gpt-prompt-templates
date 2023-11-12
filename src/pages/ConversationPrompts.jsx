// ConversationPrompts.jsx
import {
    Container,
    List,
    ListItem,
    ListItemIcon,
    ListItemButton,
    ListItemText,
} from "@mui/material/";
import ArticleIcon from "@mui/icons-material/Article";
import {
    RollPlayConsultant,
} from "../components/index";

export default function ConversationPrompts() {
    const menuList = [
        "rollPlayConsultant",
    ];
    const onClickItem = (textId) => {
        //指定位置までスクロールする
        document
            .getElementById(textId)
            .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    };
    return (
        <>
            <header>
                CodePrompts
                <Container id="summarization">
                    <List>
                        {menuList.map((text, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton onClick={() => onClickItem(text)}>
                                    <ListItemIcon>
                                        <ArticleIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={`${(index + 1)}.${text}`} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Container>
            </header>
            <Container id="rollPlayConsultant">
                <RollPlayConsultant title="RollPlayConsultant" />
            </Container>
        </>
    );
}
// EOF
