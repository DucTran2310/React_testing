import { logRoles, render, screen } from "@testing-library/react"
import Skills from "./skills";


describe("Skills", () => {
  const skills = ['HTML', 'CSS', 'JS'];

  test("Render Skills correctly", () => {
    render(<Skills skills={skills}/>)

    const listElements = screen.getByRole('list');
    expect(listElements).toBeInTheDocument()
  })

  test("renders a list of skills", () => {
    render(<Skills skills={skills}/>)

    const listElements = screen.getAllByRole('listitem');
    expect(listElements).toHaveLength(skills.length)
  })

  test("renders login button", () => {
    render(<Skills skills={skills}/>)

    const loginButton = screen.getByRole('button', {
      name: 'Login'
    });
    expect(loginButton).toBeInTheDocument()
  })

  test("Start learning button is not rerender", () => {
    render(<Skills skills={skills}/>)

    const startLearningButton = screen.queryByRole('button', {
      name: 'Start learning'
    });
    expect(startLearningButton).not.toBeInTheDocument()
  })

  test("Start learning button is eventually displayed",async () => {
    const view = render(<Skills skills={skills}/>)
    // logRoles(view.container)

    const startLearningButton = await screen.findByRole('button', {
      name: 'Start learning'
    }, {
      timeout: 2000
    });
    expect(startLearningButton).toBeInTheDocument()
  })
})