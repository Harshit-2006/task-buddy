import { useState } from "react";
import service from "../../appwrite/config";
import useUserDataContext from "../../contexts/userDataContext";
import Modal from "./Modal";
import Error from "./Error";
import useErrorContext from "../../contexts/errorContext";
import { useNavigate } from "react-router-dom";

function TodoForm({ onClose }) {
  // to navigate the user
  const navigate = useNavigate();

  // state to open and close modal window
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    errorNotExists();
    errorMessage("");
  };

  const { error, errorText, errorExists, errorNotExists, errorMessage } =
    useErrorContext();

  const { sessionCookie } = useUserDataContext();

  const [todo, setTodo] = useState({
    title: "",
    description: "",
    status: "",
    userId: sessionCookie.$id,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setTodo((prev) => {
      const date = new Date().toString();
      return { ...prev, status: date.slice(0, 15), [name]: value };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(todo);
    const response = await service.createTodo(todo);
    if (response.err) {
      errorExists();
      errorMessage("Error Creating Todo....");
      openModal();
    } else {
      onClose();
      navigate(`/dashboard/${sessionCookie["$id"]}`);
    }
  }

  return (
    <>
      {error && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <Error errorMessageText={errorText} />
        </Modal>
      )}

      <section>
        <form onSubmit={handleSubmit} method="POST">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2 flex justify-center"></div>
            <h2 className="pb-1 text-center text-3xl font-bold leading-tight text-orange-500">
              Task
            </h2>
            <div className="mt-8 space-y-4">
              <div>
                <label
                  htmlFor="title"
                  className="text-base font-medium text-white">
                  Title
                </label>
                <div className="mt-2">
                  <input
                    className="text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Title"
                    id="title"
                    name="title"
                    value={todo.title}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="text-base font-medium text-white">
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    className="text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    name="description"
                    placeholder="Description"
                    id="description"
                    value={todo.description}
                    onChange={handleChange}
                    required></textarea>
                </div>
              </div>
            </div>
            <div className="mt-3 space-y-3">
              <button
                type="submit"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 px-28 py-2.5 font-semibold text-orange-500 bg-black transition-all duration-200 hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white focus:outline-none">
                Create Todo
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default TodoForm;
