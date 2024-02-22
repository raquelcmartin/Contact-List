import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact';

function App() {
 const [count, setCount] = useState(0)
 const [selectedContactId, setselectedContactId] = useState(null)

  return (
    <>
    {selectedContactId ? (<div>Selected Contact View</div>) : (<ContactList setselectedContactId={setselectedContactId}
    )}
    

    </>
  );
}


export default App