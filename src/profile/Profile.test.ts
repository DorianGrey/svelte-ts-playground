import { render } from "@testing-library/svelte";
import Profile from "./Profile.svelte";

describe("Profile screen", () => {
  it("should render profile for user with id 47", () => {
    // given
    const { getByText, container } = render(Profile, {
      props: {
        id: 47,
      },
    });

    // when
    const linkElement: HTMLElement = getByText(/The profile page of user 47/i);

    // then
    expect(linkElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("should render profile for no specific user", () => {
    // given
    const { getByText, container } = render(Profile);

    // when
    const linkElement: HTMLElement = getByText(
      /The profile page of user <unknown>/i
    );

    // then
    expect(linkElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
