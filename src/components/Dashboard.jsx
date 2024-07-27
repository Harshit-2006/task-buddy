import useDashboardContext from "../contexts/dashboardContext";
import { useEffect, useState } from "react";
import Modal from "./ModalWindow/Modal";
import TodoForm from "./ModalWindow/TodoForm";
import TodoCard from "./TodoCard";

function Dashboard() {
  const { dashboard } = useDashboardContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    dashboard();
  }, []);

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <TodoForm />
      </Modal>

      <TodoCard />
      <div className="relative h-full min-h-[100vh] bg-[#121212]">
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
      </div>
    </>
  );
}

export default Dashboard;
