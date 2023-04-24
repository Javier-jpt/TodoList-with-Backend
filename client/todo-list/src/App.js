import './App.scss';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [itemText, setItemText] = useState('');
  const [listItems, setListItems] = useState([]);
  const [isUpdating, setIsUpdating] = useState('')
  const [updateItemText, setUpdateItemText] = useState('');

  // Here we add new todo item on database
  const addItem = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post('http://localhost:5500/items', {item: itemText})
      setListItems(prev => [...prev, res.data]);
      setItemText('');
    }catch(err){
      console.log(err);
    }
  }

  //Here we create a function to fetch all todo items from database -- we will use useEffect hook.

  useEffect(() =>{
    const getItemsList = async () => {
      try{
        const res = await axios.get('http://localhost:5500/items')
        setListItems(res.data)
      }catch(err){
        console.log(err);
      }
    }
    getItemsList();
  },[])

// Here we delete the item from todolist.

const deleteItem = async (id) => {
  try{
    const res = await axios.delete(`http://localhost:5500/items/${id}`)
    const newListItems = listItems.filter(item => item._id !== id)
    setListItems(newListItems);
    console.log(res.data)
  }catch(err){
    console.log(err);
  }
}

// Here we update the item

const updateItem = async (e) => {
  e.preventDefault()
  try{
    const res = await axios.patch(`http://localhost:5500/items/${isUpdating}`, {item: updateItemText})
    console.log(res.data);
    const updatedItemIndex = listItems.findIndex(item => item._id === isUpdating);
    const updatedItem = listItems[updatedItemIndex].item = updateItemText;
    console.log(updatedItem);
    setUpdateItemText('');
    setIsUpdating('')
  }catch(err){
    console.log(err);
  }
}

// Before updating item we need to show input field where we will create pur update item.

const renderUpdateForm = () => (
  <form className='update-form' onSubmit={(e)=>{updateItem(e)}}>
    <input className="update-form__input" autoFocus type="text" placeholder="Update Item" onChange={e => {setUpdateItemText(e.target.value)}} value={updateItemText} />
    <button className="update-form__btn" type="submit"> Update </button>
  </form>
)


  return (
    <div className="todo">
      <h1> Wish List </h1>
      <form className="todo__form" onSubmit={e => addItem(e)}>
        <input type="text" placeholder="ADD NEW WISH" onChange={e => {setItemText(e.target.value)}} value={itemText}/>
        <button type="submit">ADD</button>
      </form>
        <div className="todo__listitems">
          {
            listItems.map(item => (
              <div className="todo__listitems--item" key={uuidv4()}>
              {
                isUpdating === item._id
                ? renderUpdateForm()
                : <>
                    <p className="todo__listitems--item__content">{item.item}</p>
                    <button className="todo__listitems--item__update" onClick={()=>{setIsUpdating(item._id)}}>Edit</button>
                    <button className="todo__listitems--item__delete" onClick={() => {deleteItem(item._id)}}>Delete</button>
                  </>
              }
              </div>
            ))
            }
        </div> 
    </div>
  );
}

export default App;
