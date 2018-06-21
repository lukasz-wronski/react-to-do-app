import React from 'react';
import Task from './Task';

const Tasks = (props) => (
  <div>
    <div className="widget__header">
      <h3 className="widget__header--heading">Your today's tasks</h3>
      <button className="button button--link" onClick={props.handleDeleteTasks}>
        Clear list
      </button>
    </div>
    {props.tasks.length === 0 && <p>Please add a task to get started!</p>}
    {
      props.tasks.map(task => (
        <Task
          key={task} 
          taskText={task}
          handleDeleteTask={props.handleDeleteTask}
        />
      ))
    }
  </div>
);

export default Tasks;