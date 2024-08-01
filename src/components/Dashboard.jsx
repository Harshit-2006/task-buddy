import { useEffect, useState } from "react";
import Modal from "./ModalWindow/Modal";
import TodoForm from "./ModalWindow/TodoForm";
import TodoCard from "./TodoCard";
import service from "../appwrite/config";
import { useParams } from "react-router-dom";
import useDashboardContext from "../contexts/dashboardContext";
import useModalContext from "../contexts/modalContext";

function Dashboard() {
  const { isModalOpen, openModal, closeModal } = useModalContext();
  const [data, setData] = useState({
    title: "",
    description: "",
    option: "",
    updateTodoId: null,
  });
  const [update, setUpdate] = useState(false);
  const { userId } = useParams();
  const [todos, setTodos] = useState([]);
  const { dashboard } = useDashboardContext();

  const openModalCreateTodo = () => {
    setData({
      title: "",
      description: "",
      option: "Create Todo",
      updateTodoId: null,
    });
    setUpdate(false);
    openModal();
  };

  async function getTodosFromDatabase() {
    try {
      const res = await service.getTodos(userId);
      if (res.err) {
        console.log(res.err); // handle the error later
      } else {
        setTodos(res);
      }
    } catch (error) {
      console.log("error fetching the todos from the database :: ", error);
      setTodos([]);
    }
  }

  useEffect(() => {
    dashboard();
    getTodosFromDatabase();
  }, [userId]);

  function deleteTodo(todoId) {
    setTodos(todos.filter((todo) => todo.$id !== todoId));
  }

  function findTodoToBeUpdated(todoId) {
    const todo = todos.find((todo) => todo.$id === todoId);
    if (todo) {
      setData({
        title: todo.title,
        description: todo.description,
        option: "Update Todo",
        updateTodoId: todoId,
      });
      openModal();
      setUpdate(true);
    }
  }

  useEffect(() => {
    console.log("Data updated:", data);
  }, [data]);

  function updateTodos(updatedTodo) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.$id === updatedTodo.$id ? updatedTodo : todo
      )
    );
  }

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <TodoForm
          onClose={closeModal}
          title={data.title}
          description={data.description}
          buttonText={data.option}
          todoId={data.updateTodoId}
          isUpdate={update}
          onUpdate={updateTodos}
          todos={setTodos}
        />
      </Modal>

      <div className="flex justify-center flex-wrap">
        {todos.map((item) => (
          <TodoCard
            key={item.$id}
            title={item.title}
            description={item.description}
            status={item.status}
            id={item.$id}
            onDelete={deleteTodo}
            onUpdate={findTodoToBeUpdated}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={openModalCreateTodo}
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
