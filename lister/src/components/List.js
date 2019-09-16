import React, { Component } from 'react';
import { ListItem } from './ListItems';
import axios from 'axios';
import AddListItem from './addListItem';
console.log('ListItem: ', ListItem);

export default class List extends Component {
  state = {
    ListItems: []
  }

  async componentDidMount() {
    await this.getAndSetListItems()
  }

  getAndSetListItems = async () => {
    let baseUrl = 'http://localhost:3020/';
    let end = 'getTasks';
    let url = `${baseUrl}${end}`;
    console.log('url: ', url);
    let data = await axios.post(url);
    console.log('data: ', data);
    if (data.code === -1) {
      console.log('some error');
    } else {
      await this.setState({ ListItems: data.data.result.data });
    }
  }

  removeFromListItems = async (item) => {
    let baseUrl = 'http://localhost:3020/';
    let end = 'deleteTask';
    let id = item;
    let url = `${baseUrl}${end}/${id}`;
    let deletedData = await axios.delete(url);
    if (deletedData.data.code === 0) {
      window.location.reload()
    }
  }
  render() {
    console.log(this.state);
    console.log('theprops', this.props);
    return (
      <div>
        <AddListItem />
        <ListItem
          item={this.state.ListItems}
          removeFromListItems={(e) =>
            (this.removeFromListItems(e))
          }
        />
      </div>
    )
  }
}
