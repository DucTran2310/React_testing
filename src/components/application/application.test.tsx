import { render, screen } from "@testing-library/react";
import Application from "./application"

describe('Application', () => {
  test("render heading correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole('heading', {
      level: 1
    });
    expect(pageHeading).toBeInTheDocument()

    const pageHeading2 = screen.getByRole('heading', {
      level: 2
    });
    expect(pageHeading2).toBeInTheDocument()
  })

  test("render heading  by getByLabelText correctly", () => {
    render(<Application />);

    const pageHeadingLabel = screen.getByLabelText('Name');
    expect(pageHeadingLabel).toBeInTheDocument()
  })

  test("render Placeholder correctly", () => {
    render(<Application />);

    const placeHolder = screen.getByPlaceholderText('FullName');
    expect(placeHolder).toBeInTheDocument()
  })

  test("render getByDisplayValue correctly", () => {
    render(<Application />);

    const placeHolder = screen.getByDisplayValue('AdStar');
    expect(placeHolder).toBeInTheDocument()
  })

  test("render getByAltText correctly", () => {
    render(<Application />);

    const placeHolder = screen.getByAltText('User Avatar');
    expect(placeHolder).toBeInTheDocument()
  })

  test("render getByTitle correctly", () => {
    render(<Application />);

    const placeHolder = screen.getByTitle('Click me');
    expect(placeHolder).toBeInTheDocument()
  })

  test("render getByTestId correctly", () => {
    render(<Application />);

    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).toBeInTheDocument()
  })

  test("render correctly", () => {
    render(<Application />);
    const nameElement = screen.getByRole('textbox', {
      name: 'Name',
    });
    expect(nameElement).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    });
    expect(bioElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument()
  })

  test("render checkbox correctly", () => {
    render(<Application />);

    const termElement = screen.getByRole('checkbox');
    expect(termElement).toBeInTheDocument()

    const termElement2 = screen.getByLabelText('I agree to the term and conditions');
    expect(termElement2).toBeInTheDocument()
  })

  // test("render submit button correctly", () => {
  //   render(<Application />);

  //   const submitButtonElement = screen.getByRole('button');
  //   expect(submitButtonElement).toBeInTheDocument()
  // })
})