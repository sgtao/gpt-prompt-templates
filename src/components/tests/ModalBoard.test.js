// ModalBoard.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import ModalBoard from "../ModalBoard";

describe("test ModalBoard Component", () => {
    it("renders with the provided text message", () => {
        const textMessage = "This is a test message.\nWith multiple lines.";
        render(
            <ModalBoard open={true} textMessage={textMessage} setOpen={() => { }} />
        );

        // モーダル内のテキストが表示されていることを確認
        expect(screen.getByText(/This is a test message./i)).toBeInTheDocument();
        expect(screen.getByText(/With multiple lines./i)).toBeInTheDocument();
    });

});
