// ModalBoard.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ModalBoard from "../components/ModalBoard";

// window.alertをモック化する
const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

describe("test ModalBoard Component", () => {
    afterEach(() => {
        // テストごとにモックをリセットする
        jest.clearAllMocks();
    });

    it("renders with the provided text message", () => {
        const textMessage = "This is a test message.\nWith multiple lines.";
        render(
            <ModalBoard open={true} textMessage={textMessage} setOpen={() => { }} />
        );

        // モーダル内のテキストが表示されていることを確認
        expect(screen.getByText(/This is a test message./i)).toBeInTheDocument();
        expect(screen.getByText(/With multiple lines./i)).toBeInTheDocument();
    });
    it("When click copy button, copied to the clipboard.", async () => {
        // テスト用のプロンプトメッセージ
        const testMessage = "This is test message.";

        // モック関数を作成してnavigator.clipboard.writeTextを置き換える
        const clipboardWriteTextMock = jest.fn();
        Object.defineProperty(navigator, "clipboard", {
            value: { writeText: clipboardWriteTextMock },
        });

        render(<ModalBoard open={true} textMessage={testMessage} />);

        // "テキストをコピー"ボタンを取得し、クリックする
        const copyButton = screen.getByText("テキストをコピー");
        fireEvent.click(copyButton);

        // clipboard.writeTextが1回呼び出されたことを確認
        expect(clipboardWriteTextMock).toHaveBeenCalledTimes(1);

        // clipboard.writeTextが正しいテキストで呼び出されたことを確認
        expect(clipboardWriteTextMock).toHaveBeenCalledWith(testMessage);

    });
});
