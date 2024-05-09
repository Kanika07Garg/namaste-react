import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Navbar";
import { Provider } from "react-redux";
import appStore from "../../Store/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render my header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", {name:"Login"});
  expect(loginButton).toBeInTheDocument();
});

it("should change login button to logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const loginButton = screen.getByRole("button", {name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name:"logout"});

    expect(logoutButton).toBeInTheDocument();
});
