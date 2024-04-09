import { render, screen } from "@testing-library/react"
import Greet from "../components/greet/greet"

function add(a: number,b: number) {
  return a+b;
}

function subtract(a: number,b: number) {
  return a-b;
}

describe('Calculator', () => {
  it('should add two numbers correctly', () => {
    const result = add(2, 3);
    expect(result).toEqual(5);
  });

  it('should subtract two numbers correctly', () => {
    const result = subtract(5, 3);
    expect(result).toEqual(2);
  });
});
