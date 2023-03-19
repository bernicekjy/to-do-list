import React from "react";
import Item from "./Item";

function App() {
  const [newTD, setNewTD] = React.useState("");
  const [list, setList] = React.useState([]);

  function updateNewTD(event) {
    const str = event.target.value;
    setNewTD(str);
  }

  function addItem() {
    setList((prevValue) => {
      return [...prevValue, newTD];
    });

    setNewTD(""); //reset newTD
  }

  function deleteItem(id) {
    setList(function (prevValue) {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={updateNewTD} type="text" value={newTD} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((item, index) => {
            return (
              <Item key={index} id={index} toDo={item} onCheck={deleteItem} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
