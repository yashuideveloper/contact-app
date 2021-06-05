import React from 'react'

const ContactCard = (props) => {
    const {id, nameIp, emailIp} = props.contact;
    return (
        <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">{nameIp}</h5>
          <p className="card-text">{emailIp}</p>
          <a href="#" className="btn btn-danger" onClick={() => props.clickHandler(id)}>
            Delete
          </a>
        </div>
      </div>
    )
}

export default ContactCard
