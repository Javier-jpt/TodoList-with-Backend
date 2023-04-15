import './App.css';

function App() {
  return (
    <div className="App">
    <h1> ToDo List </h1>
      <form className="form">
        <input type="text" placeholder="Add Item"/>
        <button type="submit">ADD</button>
      </form>
      <div className="todo-listitems">
      <div className="todo-item">
        <p className="item-content">Item number 1</p>
        <button className="update-item">Edit</button>
        <button className="delete-item">Delete</button>
      </div>
      <div className="todo-item">
        <p className="item-content">Item number 2</p>
        <button className="update-item">Edit</button>
        <button className="delete-item">Delete</button>
      </div>
      <div className="todo-item">
        <p className="item-content">Item number 3</p>
        <button className="update-item">Edit</button>
        <button className="delete-item">Delete</button>
      </div>
      </div> 
    </div>
  );
}

export default App;
