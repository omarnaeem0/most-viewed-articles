import renderer from "react-test-renderer";
import Loader from ".";

test("Loader component", () => {
  const tree = renderer.create(<Loader />).toJSON();
  expect(tree).toMatchSnapshot();
});
