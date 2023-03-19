import React from "react";

/**
 *
 * @param {Item object} props
 */
function Item(props) {
  return <li onClick={() => props.onCheck(props.id)}>{props.toDo}</li>;
}

export default Item;
