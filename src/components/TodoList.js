import axios from "axios";
import Task from "./Task";

import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { FETCH_SUCCESS } from "../actions";

const ToDoList = (props) => {
  const { user } = useAuth0();
  const [state, setState] = useState();


  const getData = async () => {
    const { data } = await axios.get(
      `http://localhost:9000/api/todo/${user.email}`
    );
    props.setData(data);
  };

  useEffect(async () => {
    await getData();
    setState(props.todoArr);
  }, []);

  useEffect(() => {
    setState(props.todoArr);
  }, [props.todoArr]);

  return (
    <div className="list_container">
      {state
        ? state.map((task) => {
            return <Task task={task} key={task.todo_id} />;
          })
        : ""}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todoArr: state.todoArr,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setData: (todoArr) => {
      dispatch({ type: FETCH_SUCCESS, payload: todoArr });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
