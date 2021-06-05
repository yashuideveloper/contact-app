import React from "react";
import ContactCard from './ContactCard';

const ContactList = (props) => {
  console.log("list", props.contacts);
  const removeContactId = (id) => {
        props.getContactId(id);
  }
  const list = props.contacts.map((contact, i) => (
    <ContactCard key={i} contact={contact} clickHandler={removeContactId} />
  ));
  return (
      <>{list}</>
  )
};

export default ContactList;
