import React, {useState} from "react";

const AddContact = (props) => {
    const [nameIp, setNameIp] = useState('');
    const [emailIp, setEmailIp] = useState('');

    const formSubmit = (e) => {
        e.preventDefault();
        if(nameIp === '' || emailIp === ''){
            alert('All fields are mandatory');
            return
        }
        props.addContactHandler({nameIp, emailIp});
        setNameIp('');
        setEmailIp('');
    }

  return (
    <form onSubmit={formSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          value={nameIp}
          onChange={(e) => setNameIp(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          className="form-control"
          value={emailIp}
          onChange={(e) => setEmailIp(e.target.value)}
        />
      </div>
      <button className="btn btn-primary mb-4">
        Add
      </button>
    </form>
  );
};

export default AddContact;
