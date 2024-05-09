import { render, screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("SHould load contact component",()=>{
    render(<Contact/>)
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();

});

test("should load button inside the component", () => {
    render(<Contact/>)
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
});

it("should load 2 input box", ()=>{
    render(<Contact/>)
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).not.toBe(3);
})