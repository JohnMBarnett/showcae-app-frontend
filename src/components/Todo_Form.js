import { useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { connect } from "react-redux";
import { ADD_TODO } from "../actions";

const ToDoForm = (props) => {
  const { user } = useAuth0();

  const [state, setState] = useState({
    todo_name: "",
    todo_description: "",
    profile_id: user.email,
    todo_status: false
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/todo", state)
      .then((res) => {
        console.log(res.data);
        props.addToDo(res.data[0])
      })
      .catch((err) => {
        console.log(err);
      });

    setState({
      ...state,
      todo_name: "",
      todo_description: "",
    });
  };

  return (
    <div className="form_container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo_name"
          placeholder="ToDo Name"
          value={state.todo_name || ""}
          onChange={handleChange}
        ></input>

        <input
          type="text"
          name="todo_description"
          placeholder="ToDo Description"
          value={state.todo_description || ""}
          onChange={handleChange}
        ></input>

        <button>Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todoArr: state.todoArr
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (newToDo) => {
      dispatch({ type: ADD_TODO, payload: newToDo });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm);
