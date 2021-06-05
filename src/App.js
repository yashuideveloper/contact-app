import React, {useState ,useEffect} from 'react';
import {uuid} from 'uuidv4';
import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

const App = () => {
  const LOCAL_STORAGE_CONTACTS_KEY = 'contacts';
  const [contacts, setContact] = useState([]);
  const addContactHandler = (contact) => {
    setContact([...contacts, {id: uuid(), ...contact}])
  }

  const removeContacts = (id) => {
    const newContacts = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setContact(newContacts);
  }

  useEffect(() => {
    const localStorageContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CONTACTS_KEY));
    if(localStorageContacts) setContact(localStorageContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="container w-50">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContacts} />
    </div>
  );
}

export default App;
