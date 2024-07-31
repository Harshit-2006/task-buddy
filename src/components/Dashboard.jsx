import useDashboardContext from "../contexts/dashboardContext";
import { useEffect, useState } from "react";
import Modal from "./ModalWindow/Modal";
import TodoForm from "./ModalWindow/TodoForm";
import TodoCard from "./TodoCard";
import authService from "../appwrite/auth";
import service from "../appwrite/config";
import useUserDataContext from "../contexts/userDataContext";
import { useParams } from "react-router-dom";

function Dashboard() {
  // to get the user id from the parameter of the url.
  const { userId } = useParams();

  // state to update the todos
  const [todos, setTodos] = useState(null);

  // state to redirect the user to the dashboard or not , its main purpose it to bring back the user to the dashboard screen as soon as it creates his todo from the pop up modal window

  const { updateSessionCookie } = useUserDataContext();
  const { dashboard } = useDashboardContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // to get the todos form the database
  async function getTodosFromDatabase() {
    try {
      const res = await service.getTodos(userId);
      if (res.err) {
        // error fetching from the database service unavailable and update the error and bring the error modal on the screen,
      } else {
        setTodos(res);
        console.log("The database response is ::", res);
      }
    } catch (error) {
      console.log("error fetching the todos from the database :: ", error);
      setTodos([]);
    }
  }

  // update the session cookie
  async function fetchSessionData() {
    try {
      const res = await authService.getCurrentUser();
      if (res.err) {
        updateSessionCookie("");
      } else {
        updateSessionCookie(res);
      }
    } catch (error) {
      console.log("error fetching the session :: ", error);
      updateSessionCookie("");
    }
  }

  useEffect(() => {
    // calling dashboard to prevent sign out, sign in, about, contact from showing in the dashboard when dashboard is on
    dashboard();
    fetchSessionData();
    getTodosFromDatabase();
  }, [isModalOpen]);

  function deleteTodo(id){
    setTodos(todos.filter((todo)=>todo.$id!=id))
  }

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <TodoForm onClose={closeModal} />
      </Modal>

      {/* Display todos in a horizontal layout */}
      <div className="flex flex-wrap gap-4 p-4">
        {todos &&
          todos.map((item) => (
            <TodoCard
              key={item.$id}
              title={item.title}
              description={item.description}
              status={item.status}
              id={item.$id}
              onDelete={deleteTodo}
            />
          ))}
      </div>
      <button
        type="button"
        onClick={openModal}
        className="fixed bottom-4 right-4 flex items-center gap-1.5 bg-orange-500 text-white px-3 py-2 rounded hover:bg-orange-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 24 24">
          <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M16,13h-3v3c0,0.6-0.4,1-1,1s-1-0.4-1-1v-3H8	c-0.6,0-1-0.4-1-1s0.4-1,1-1h3V8c0-0.6,0.4-1,1-1s1,0.4,1,1v3h3c0.6,0,1,0.4,1,1S16.6,13,16,13z"></path>
        </svg>
      </button>
    </>
  );
}

export default Dashboard;
