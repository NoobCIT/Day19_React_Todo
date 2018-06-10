import React, { Component } from 'react';

function ShowTasks(props) {
  let keyNumber = 0;
  return (
    <div>
      {props.list.map((task) => {
        keyNumber += 1;
        return (
          <div className='task-group' id={keyNumber} key={keyNumber}>
            <div className='taskNumber'>Task #{keyNumber}</div>
            <div className='task'>{task}</div>
            <div className='removeTask' onClick={props.handleDeleteTask}>X</div>
          </div>
        )
      }
    )}
  </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [
        'learn more', 'review algorithms',
        'build more react projects',
        'pray for a job',
        'wish for a miracle'
      ],
      originalTasks: [
        'learn more', 'review algorithms',
        'build more react projects',
        'pray for a job',
        'wish for a miracle'
      ]
    }

    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleClearAllTasks = this.handleClearAllTasks.bind(this);
    this.handleResetAllTasks = this.handleResetAllTasks.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
  }

  handleAddTask(event) {
    const task = document.getElementById('description');
    event.preventDefault();
    this.setState((currentState) => {
      return {tasks: currentState.tasks.concat([task.value])}
    })
  }

  handleClearAllTasks(event) {
    event.preventDefault();
    this.setState({
      tasks: []
    })
  }

  handleResetAllTasks(event) {
    event.preventDefault();
    this.setState({
      tasks: this.state.originalTasks
    })
  }

  handleDeleteTask(event) {
    let index = event.target.parentElement.id - 1;
    this.setState({
      tasks: this.state.tasks.slice(0, index).concat(this.state.tasks.slice(index + 1))
    })
  }

  render() {
    return (
      <div className='container'>
        <div className='title'>
          <h1>React Todo App</h1>
          <h3>Track Yours Tasks</h3>
        </div>
        <div className='main'>
          <div className='form-group'>
            <form>
              <input id='description' placeholder='Todo Item Description' /><br />
              <button onClick={this.handleAddTask}>Add Todo Item</button>
            </form>
          </div>
          <div>
            <h3>Task List</h3>
            <ShowTasks list={this.state.tasks} handleDeleteTask={this.handleDeleteTask}/>
            <div className='task-buttons'>
              <button onClick={this.handleClearAllTasks}>Clear All Tasks</button>
              <button onClick={this.handleResetAllTasks}>Reset All Tasks</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
