//test basic
// import { render, screen } from "@testing-library/react"
// import Greet from "./greet"

// test('Greet renders correctly', () => {
//   render(<Greet />)
//   const textElement = screen.getByText('Hello')
//   expect(textElement).toBeInTheDocument()
// })

// Đoạn code trong hàm test là nơi thực hiện các bước kiểm thử.
// Sử dụng hàm render để render component Greet vào trong DOM ảo.
// Sử dụng screen.getByText để tìm kiếm một phần tử chứa nội dung 'Hello' trong DOM ảo.
// Sử dụng expect để kiểm tra xem phần tử chứa nội dung 'Hello' có tồn tại trong DOM không, thông qua hàm toBeInTheDocument().

//test tdd
import { render, screen } from "@testing-library/react"
import Greet from "./greet"

test('Greet renders correctly', () => {
  render(<Greet />)
  const textElement = screen.getByText('Hello')
  expect(textElement).toBeInTheDocument()
})

test('Greet renders with a name', () => {
  render(<Greet name='AdStar'/>)
  const textElement = screen.getByText('Hello AdStar')
  expect(textElement).toBeInTheDocument()
})
