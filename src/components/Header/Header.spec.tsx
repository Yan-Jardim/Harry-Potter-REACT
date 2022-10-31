import { render } from "@testing-library/react";
import Header from ".";

describe(":: Header", () => {
  it("Render component Header", () => {
    const { getByTestId } = render(<Header></Header>);
    expect(getByTestId("test-header")).toBeTruthy();
  });
});
