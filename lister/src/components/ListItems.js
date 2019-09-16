import React from 'react';
import './list.css';

export const ListItem = (props) => {
  let mapProps = (props) => {
    return props.item.map((item, index) => {
      return (<div key={`li${index}${item._id}`} className="card-container" role="contentinfo" >
        <div className="card-content">
          <h4 tabIndex={index} aria-label={item.title} className="task-title">{item.title}</h4>
          <p className="task-info">{item.task}</p>
          <p className="task-deadline">{item.deadline}</p>
          <div className="card-btn_row">
            <button onClick={() => props.removeFromListItems(item._id)} className="card-btn card-btn_delete">Delete</button>
          </div>
        </div>
      </div>)
    })
  }

  return <div className="list-container" role="contentinfo" aria-label="info-card">
    {mapProps(props)}
  </div>
}

