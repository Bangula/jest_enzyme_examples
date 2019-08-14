import React from "react";
import Item from "./Item";

const Items = ({ items }) => {
  const [state, setState] = React.useState("");
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div>
      <p className="test">Hello Jest</p>
      <div>
        <Item />
      </div>
      {items.length ? (
        <ul className="list">
          {items.map((item, i) => {
            <li ley={i}>{item}</li>;
          })}
        </ul>
      ) : (
        "no items list"
      )}
      <div>
        <form onSubmit={e => handleSubmit(e)}>
          <input type="text" onChange={e => setState(e.target.value)} />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Items;
