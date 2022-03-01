import axios from "axios";

const Task = (task) => {
    console.log(task)
  let newTask = {}
  const handleClick = () => {
    axios.put("http://localhost:9000/api/todo/update-todo", {
      ...todo,
      todo_status: !task.task.todo_status,
    })
    .then(res => {
        newTask = {
            ...task.task,
            todo_status: !task.task.todo_status
        }
    })
  };

  return (
    <div className="task">
      <h3>{task.task.todo_name}</h3>
      <p>{task.task.todo_description}</p>
      <button handleClick={handleClick}>test</button>
    </div>
  );
};

export default Task;
