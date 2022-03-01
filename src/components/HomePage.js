import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "./NavBar";
import ToDoList from "./TodoList";
import ToDoForm from "./Todo_Form";

const HomePage = () => {
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div>
        <NavBar />
        <div className="main_container">
          <ToDoList />
          <ToDoForm />
        </div>
      </div>
    )
  );
};

export default HomePage;
