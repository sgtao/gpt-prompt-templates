// CodingSupport.test.js
import React from "react";
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import CodingSupport from "../components/CodingSupport";
import axios from 'axios';

// axiosをモック化
jest.mock('axios');

describe("CodingSupport", () => {
    test("renders the component", () => {
        render(<CodingSupport title="Test Title" />);
        expect(screen.getByText(/CodingSupportでは既存のコードに対して補助するプロンプトを生成します。/i)).toBeInTheDocument();
    });

    test("selects language and instruction, clicks Convert button, and displays prompt", async () => {

        // axiosモックの振る舞いを設定
        const mockPrompt = { prompt: "This is a test prompt." };
        axios.post.mockResolvedValue({
            "status": 200,
            "data": mockPrompt,
        });
        // axiosモックの期待引数の設定
        const test_URL = 'https://sgtaowebapi-1-b9620003.deta.app/api/gpttemplate/prompt';
        const language = "";
        const instruction = "";
        const code = "";
        const todo = {
            type: "022_codingSupport",
            data01: language,
            data02: instruction,
            data03: code,
        }

        const { getByLabelText, getByText } = render(<CodingSupport title="Test Title" />);

        await act(async () => {
            // Fill in the form
            // const languageSelect = getByLabelText("Language"); // Get the select element
            // Open the select menu
            // fireEvent.mouseDown(languageSelect);
            // fireEvent.click(languageSelect, getByLabelText("JavaScript"));

            // const instructionSelect = getByLabelText("Instruction"); // Get the select element
            // Open the select menu
            // fireEvent.mouseDown(instructionSelect);
            // fireEvent.click(instructionSelect, getByLabelText("コード解説"));

            // fireEvent .change(getByLabelText("Context"), { target: { value: "Test context" } });

            // Trigger the conversion
            fireEvent.click(getByText("Convert"));
        });

        // Wait for the API call to resolve
        await waitFor(() => {
            expect(axios.post).toHaveBeenCalledTimes(1);
            // axios.postメソッドが正しく呼び出されたかどうかを確認
            expect(axios.post).toHaveBeenCalledWith(
                test_URL,
                todo
            );
            // Assert that the prompt modal is displayed
            // expect(screen.getByText(mockPrompt)).toBeInTheDocument();
        });
    });
});

