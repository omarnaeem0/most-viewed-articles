import App from "./App";
import renderer from "react-test-renderer";

jest.doMock("./components/Header", () => {
  return () => <div>header</div>;
});
jest.doMock("./components/Articles", () => {
  return () => <div>articles</div>;
});

test("App component with mocked child components snapshot", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
