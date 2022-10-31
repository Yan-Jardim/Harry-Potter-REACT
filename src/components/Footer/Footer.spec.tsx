import { render } from "@testing-library/react";
import Footer from ".";

describe(":: Footer", () => {
  it("Render component Footer", () => {
    const { getByTestId } = render(<Footer></Footer>);
    expect(getByTestId("test-footer")).toBeTruthy();
  });
});
