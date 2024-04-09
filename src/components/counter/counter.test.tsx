import { logRoles, render, screen } from "@testing-library/react";
import Counter from "./counter";
import userEvent from "@testing-library/user-event"; // Update import statement

describe("Test Counter", () => {
  const skills = ['HTML', 'CSS', 'JS'];

  test("Render Skills correctly", () => {
    render(<Counter />)

    const countElement = screen.getByRole('heading');
    expect(countElement).toBeInTheDocument()

    const incrementButton = screen.getByRole('button', {
      name: 'Increment'
    });

    expect(incrementButton).toBeInTheDocument()
  })

  test("Render count of 0", () => {
    render(<Counter />)

    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('0')
  })

  test('render a count of 1 after clicking the increment button', async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', {
      name: 'Increment'
    });

    await userEvent.click(incrementButton); // Replace user.click with userEvent.click
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('1');
  })

  test('render a count of 10 after clicking the set button', async () => {
    render(<Counter />);

    //Một "spin button" là một phần tử giao diện người dùng cho phép người dùng chọn 
    //một giá trị từ một tập hợp các giá trị bằng cách nhấp hoặc kéo thanh trượt hoặc sử dụng các nút tăng/giảm.
    const amountInput = screen.getByRole('spinbutton');
    await userEvent.type(amountInput, '10');
    expect(amountInput).toHaveValue(10);

    const setButton = screen.getByRole('button', {
      name: 'Set'
    })
    await userEvent.click(setButton);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('10')
  })

  test('elements are focused in the right order',async () => {
    const view = render(<Counter />);

    // logRoles(view.container)

    const amountInput = screen.getByRole('spinbutton');
    const setButton = screen.getByRole('button', {
      name: 'Set'
    })
    const incrementButton = screen.getByRole('button', {name: 'Increment'})

    await userEvent.tab()
    expect(incrementButton).toHaveFocus()
    await userEvent.tab()
    expect(amountInput).toHaveFocus()
    await userEvent.tab()
    expect(setButton).toHaveFocus()
  })

})
