// ModalBoard.jsx
import * as React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const ModalBoard = (props) => {
    const handleClose = () => props.setOpen(false);
    // const convertedText = props.textMessage.replace(/\n/g, '<br />');
    // 改行を含むテキストを改行要素で表示
    const textWithLineBreaks = props.textMessage.split("\n").map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));
    return (
        <Modal
            open={props.open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={styleModal}>
                <Typography id="modal-modal-title" variant="h6" component="h3">
                    プロンプト例：
                </Typography>
                <Typography id="modal-modal-description" sx={{
                    mt: "2rem",
                    maxHeight: "20em", // 最大表示行数（20行）に制限
                    overflowY: "auto", // 縦方向のスクロールバーを表示
                }}>
                    {textWithLineBreaks}
                </Typography>
            </Box>
        </Modal>
    );
}

export default ModalBoard;