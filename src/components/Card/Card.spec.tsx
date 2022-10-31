import { render } from "@testing-library/react";
import Link from "next/link";

describe(":: Card", () => {
  it("Render component Card", () => {
    const { getByTestId } = render(<Link href="test" />);
    expect(getByTestId("test-card")).toBeTruthy();
  });
});
