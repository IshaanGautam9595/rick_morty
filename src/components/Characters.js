import React from 'react'

const Characters = ({characters = [] }) => {
  return (
    <div className="row">
        {characters.map((item, index) => (
            <div key={index} className="col">
                <div className="card" style={{minWidth: "200px"}}>
                    <img src={item.image} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Name: {item.name}</h5>
                        <hr />
                        <h6 className="card-species">species: {item.species}</h6>
                        <p className="card-gender">Gender: {item.gender}</p>
                        <p>Location: {item.location.name}</p>
                        <p>Origin: {item.origin.name}</p>
                        <p>Created: {item.created}</p>
                    </div>
                </div>
            </div>
        ))}
        </div>
  )
}

export default Characters