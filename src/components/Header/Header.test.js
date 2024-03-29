import renderer from "react-test-renderer";
import Header from ".";

test("Header component snapshot test", () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
