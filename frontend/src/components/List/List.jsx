import React from 'react';
import './index.css';

const List = props => {
  const items = props.items.map((item, i) => <li key={`${i}_item`}>{item}</li>);
  return (
    <ul className="myList">
      {items}
    </ul>
  );
};

export default List;