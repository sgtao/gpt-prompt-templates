// BasicPrompt.jsx
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
    Summarization,
    QuestionAnswering,
    Classification,
    Insertion,
    Reasoning,
} from "../components/index";

export default function BasicPrompt() {
    const menuList = [
        "summarization",
        "questionAnswering",
        "classification",
        "insertion",
        "reasoning",
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
                BasicPrompts
                <Container>
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
            <Container id="reasoning">
                <Reasoning title="Reasoning" />
            </Container>
        </>
    );
}
// EOF
