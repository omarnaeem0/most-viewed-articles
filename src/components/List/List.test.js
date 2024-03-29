import renderer from "react-test-renderer";
import List from ".";

test("List component", () => {
  const tree = renderer
    .create(
      <List>
        <li>listitem1</li>
        <li>listitem2</li>
      </List>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
