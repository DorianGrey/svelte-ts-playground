import { render } from "@testing-library/svelte";
import Home from "./Home.svelte";

describe("Home screen", () => {
  it("should render learn svelte link", () => {
    // given
    const { getByText, container } = render(Home);

    // when
    const linkElement: HTMLElement = getByText(/learn svelte with typescript/i);

    // then
    expect(linkElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
