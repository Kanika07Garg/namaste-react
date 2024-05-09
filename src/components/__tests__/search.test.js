import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockJsonBody.json";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

// beforeAll(()=>console.log("before all"));
// beforeEach(()=>console.log("before each"));
// afterAll(()=>console.log("after all"));
// afterEach(()=>console.log("after each"));


it("should SEARCH the cards with burger input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBefore = screen.getAllByTestId("resCard");
  expect(cardsBefore.length).toBe(20)
  const search  = screen.getByRole("button",{name:"Search"});
  const input = screen.getByTestId("searchInput");
  fireEvent.change(input,{target:{value:"burger"}});
  fireEvent.click(search);
  const cards = screen.getAllByTestId("resCard")
  expect(cards.length).toBe(2);
});

it("should filter top rated res", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  
    const cardsBefore = screen.getAllByTestId("resCard");
    expect(cardsBefore.length).toBe(20)
    const filter  = screen.getByRole("button",{name:"Top rated resturants"});
    fireEvent.click(filter);
    const cards = screen.getAllByTestId("resCard")
    expect(cards.length).toBe(20    );
});
