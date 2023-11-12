// HomeAbstract.jsx
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
    AbstractInfo,
} from "../components/index";

export default function HomeAbstract() {
    return (
        <>
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
        </>
    );
}
// EOF
