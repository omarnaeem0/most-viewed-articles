import ListItem from "../ListItem";

export default function List({ results }) {
  return (
    <ul>
      {results.map((item) => (
        <ListItem item={item} />
      ))}
    </ul>
  );
}
