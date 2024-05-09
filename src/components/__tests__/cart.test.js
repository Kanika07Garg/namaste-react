import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../../components/RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../Store/appStore";
import "@testing-library/jest-dom";
import Header from "../Navbar";
import ItemCards from "../ItemCards";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should render res menu card", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const resMenu = screen.getByText("Recommended (20)");
  fireEvent.click(resMenu);
  expect(screen.getAllByTestId("foodItems").length).toBe(20);
  expect(resMenu).toBeInTheDocument();
});
it("should update header on click of add button", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header></Header>
            <ItemCards/>
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>
      );
    });
  
    const addBtn = screen.getAllByRole("button", {name:"Add+"})
    fireEvent.click(addBtn[0]);
    expect(screen.getByText("🛒-1")).toBeInTheDocument();
    // console.log(addBtn[1])
    // expect(addBtn[1]).toBe(20);
});
