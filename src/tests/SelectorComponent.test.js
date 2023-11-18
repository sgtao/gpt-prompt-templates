// SelectorComponent.test.jsx
import React, { useState } from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import SelectorComponent from "../components/SelectorComponent";

describe("SelectorComponent", () => {
    it("renders correctly", () => {
        const options = [
            { label: "Option1", value: "option1" },
            { label: "Option2", value: "option2" },
            { label: "Option3", value: "option3" },
        ];

        const { getByLabelText } = render(
            <SelectorComponent
                label="Test Label"
                value="option1"
                onChange={() => { }}
                options={options}
            />
        );

        expect(getByLabelText("Test Label")).toBeInTheDocument();
    });

    it("calls onChange when an option is selected", async () => {
        const TestComponent = () => {
            const [value, setValue] = useState("option1");

            return (
                <SelectorComponent
                    label="Test Label"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    options={[
                        { label: "Option1", value: "option1" },
                        { label: "Option2", value: "option2" },
                        { label: "Option3", value: "option3" },
                    ]}
                />
            );
        };

        const { getByRole, getByLabelText } = render(<TestComponent />);
        const selectElement = getByRole("combobox"); // Get the select element

        // Open the select menu
        fireEvent.mouseDown(selectElement);

        // Select an option (replace 'Option2' with the label of the option you want to select)
        fireEvent.click(getByRole("option", { name: "Option2" }));

        // Wait for the state to update
        await waitFor(() => {
            const selectedOptionLabel = getByLabelText("Test Label").textContent;
            expect(selectedOptionLabel).toBe("Option2");
        });
    });
});
