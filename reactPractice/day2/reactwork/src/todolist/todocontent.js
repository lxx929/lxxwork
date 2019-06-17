import React, { Component } from "react";
import List from "./list";
import bus from "../utils/bus";
export default class TodoContent extends Component {
  state = {
    todolist: [],
    donelist: []
  };
  render() {
    console.log(this.state.todolist);
    let { todolist, donelist } = this.state;
    return (
      <div>
        <div className="list">
          <p>正在进行{todolist.length}</p>
          {todolist.map((item, index) => {
            return (
              <List
                key={index}
                obj={item}
                ind={index}
                ChangeDone={this.handleChangeDone.bind(this)}
                deleteDone={this.handleDelete.bind(this)}
              />
            );
          })}
          <hr />
        </div>
        <div className="list">
          <p>已经完成{donelist.length}</p>
          {donelist.map((item, index) => {
            return (
              <List
                key={index}
                obj={item}
                ind={index}
                ChangeDone={this.handleChangeDone.bind(this)}
                deleteDone={this.handleDelete.bind(this)}
              />
            );
          })}
          <hr />
        </div>
      </div>
    );
  }

  componentDidMount() {
    //回车之后
    bus.on("inputAdd", obj => {
      console.log(obj);
      let { todolist } = this.state;
      this.setState({
        todolist: [...todolist, obj]
      });
    });
  }
  handleChangeDone(ind, status) {
    console.log(ind, status);
    let { todolist, donelist } = this.state;
    if (status === "todo") {
      //正在进行
      todolist[ind].isChecked = true;
      todolist[ind].status = "done";
      donelist.push(todolist[ind]);
      todolist.splice(ind, 1);
    } else {
      donelist[ind].isChecked = false;
      donelist[ind].status = "todo";
      todolist.push(donelist[ind]);
      donelist.splice(ind, 1);
    }

    //更新状态
    this.setState({
      todolist
    });
  }

  handleDelete(ind, status) {
    //删除
    console.log(ind, status);
    // if(status == 'todo'){
    //     todolist.splice(ind,1)
    // }
    let { todolist, donelist } = this.state;
    let list = status === "todo" ? todolist : donelist;
    let key = status === "todo" ? "todolist" : "donelist";
    list.splice(ind, 1);
    this.setState({
      [key]: list
    });
  }
}
