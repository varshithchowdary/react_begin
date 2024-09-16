import { Fragment } from "react/jsx-runtime";
function ListGroup() {
  const items = ["New York", "Los Angeles", "Chicago", "Tokyo", "Paris"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
