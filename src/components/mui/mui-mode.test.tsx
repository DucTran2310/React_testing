import { render, screen } from "@testing-library/react"
import MuiMode from "./mui-mode";

describe("MuiMode", () => {

  test("Render Mui correctly", () => {
    render(<MuiMode />)

    const headingElements = screen.getByRole('heading');
    expect(headingElements).toHaveTextContent('light mode')
  })
})