import React, { Component } from 'react';
import axios from 'axios';
import './list.css';


class AddListItem extends Component {
  constructor(props) {
    super();
    this.state = {
      title: '',
      task: '',
      deadline: '',
    }
    this.submitAddItem = this.submitAddItem.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  async submitAddItem() {
    let { task, title, deadline } = this.state;
    console.log('deadline: ', deadline);
    console.log('title: ', title);
    console.log('task: ', task);
    let baseUrl = 'http://localhost:3020/';
    let end = 'addTask';
    let url = `${baseUrl}${end}`;
    console.log('url1: ', url);

    let data = { title, task, deadline }
    console.log('data: ', data);
    let form = await axios.post(url, data);
    console.log('data: ', form);
    if (form.code === -1) {
      console.log('some error');
    } else {
      window.location.reload()
    }
  }
  render() {
    const { title, task, deadline } = this.state;
    return (
      <div className='add-task_container'>
        <div className='add-task_form'>
          <h3>Add a Task:</h3>
          <input
            placeholder='title'
            value={title}
            name={'title'}
            onChange={this.handleChange}
          />
          <input
            placeholder='task'
            value={task}
            name={'task'}
            onChange={this.handleChange}
          />
          <input
            placeholder='deadline'
            value={deadline}
            name={'deadline'}
            onChange={this.handleChange}
          />
        </div>
        <button className="card-btn card-btn_add" onClick={this.submitAddItem}>Add Item</button>
      </div>
    )
  }
}

export default AddListItem;