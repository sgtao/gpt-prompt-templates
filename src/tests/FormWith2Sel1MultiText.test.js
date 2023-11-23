// FormWith2Sel1MultiText.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FormWith2Sel1MultiText from "../components/FormWith2Sel1MultiText";

describe("FormWith2Sel1MultiText", () => {
    const languageOptions = [
        { label: "JavaScript", value: "JavaScript" },
        { label: "Python", value: "Python" },
        { label: "Go", value: "Go" },
        { label: "Rust", value: "Rust" },
        { label: "C, C++", value: "C, C++" },
        { label: "BashScript", value: "Bash" },
        { label: "PowerShell", value: "PowerShell" },
        // 他の選択肢を追加できます
    ];
    const instructionOptions = [
        { label: "コード解説", value: "コードの解説をしてください。" },
        { label: "コメント挿入", value: "コードにコメントを追加してください。" },
        { label: "コード可読性向上", value: "コードを読みやすいように改善してください。" },
        { label: "コードの検査", value: "コードの問題点を教えてください。" },
        { label: "コードの問題点修正", value: "コードの問題点を修正したコードを教えてください。" },
        { label: "テストコード作成", value: "コードに対するテストコードを作成してください。" },
        // 他の選択肢を追加できます
    ];

    test("renders the component", () => {
        render(
            <FormWith2Sel1MultiText
                headDescriptionn="Description"
                language="JavaScript"
                languageOptions={languageOptions}
                selectLanguage={() => { }}
                instruction="コードの解説をしてください。"
                instructionOptions={instructionOptions}
                changeInstruction={() => { }}
                context=""
                changeContext={() => { }}
                onClickConvert={() => { }}
            />
        );

        // Check if the component renders without crashing
        expect(screen.getByText(/Description/i)).toBeInTheDocument();
        expect(screen.getByText(/JavaScript/i)).toBeInTheDocument();
    });

    test("clicking Convert button calls onClickConvert handler", () => {
        const onClickConvertMock = jest.fn();
        render(
            <FormWith2Sel1MultiText
                language=""
                languageOptions={languageOptions}
                selectLanguage={() => { }}
                instruction=""
                instructionOptions={instructionOptions}
                changeInstruction={() => { }}
                context=""
                changeContext={() => { }}
                onClickConvert={onClickConvertMock}
            />
        );

        // Click the Convert button
        fireEvent.click(screen.getByText("Convert"));

        // Check if the onClickConvert handler was called
        expect(onClickConvertMock).toHaveBeenCalled();
    });

    // Add more tests as needed for other functionalities
});