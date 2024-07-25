const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => setIsModalOpen(true);
const closeModal = () => setIsModalOpen(false);

return (
  <div className="App">
    <button onClick={openModal} className="py-2 px-4 bg-blue-600 text-white rounded-md">
      +
    </button>
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <TodoForm />
    </Modal>
  </div>
);