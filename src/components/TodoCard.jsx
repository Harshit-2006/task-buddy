import service from "../appwrite/config";

function TodoCard({ title, description, status, id, onDelete, onUpdate }) {

  async function handleDeleteClick() {
      try {
        await service.deleteTodo(id);
        onDelete(id);
      } catch (error) {
          console.log(`Error deleting the todo ::`,error);
      }
  }

   function handleUpdateClick(){
    onUpdate(id);
  }

  return (
    <div className="relative overflow-hidden mt-5 py-8 w-full md:w-1/3 lg:w-1/4 ">
      <div className="relative mx-4 max-w-sm rounded-lg bg-black px-5 pb-5">
        <div className="absolute left-1/2 top-0 inline-flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-orange-500 p-0.5">
          <div className="flex-shrink-0 rounded-full bg-black px-4 py-4 text-sm font-semibold uppercase text-white">
            {status}
          </div>
        </div>
        <span className="flex items-end text-white pt-8">
          <span className="text-3xl font-extrabold leading-none py-2 px-2">
            {title}
          </span>
        </span>
        <div className="mt-2 border-t border-orange-500 pt-5">
          <ul>
            <li className="mb-6 flex items-center">
              <span className="ml-2 text-lg text-white">{description}</span>
            </li>
          </ul>
        </div>
        <div className="flex justify-center space-x-5 mt-7 border-t border-orange-500 pt-5">
          {/* update button */}
          <button
            type="button"
            onClick={handleUpdateClick}
            className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 24 24">
              <path d="M 18.400391 2 C 18.100391 2 17.899219 2.1007812 17.699219 2.3007812 L 15.707031 4.2929688 L 14.292969 5.7070312 L 3 17 L 3 21 L 7 21 L 21.699219 6.3007812 C 22.099219 5.9007812 22.099219 5.3003906 21.699219 4.9003906 L 19.099609 2.3007812 C 18.899609 2.1007812 18.700391 2 18.400391 2 z M 18.400391 4.4003906 L 19.599609 5.5996094 L 18.306641 6.8925781 L 17.107422 5.6933594 L 18.400391 4.4003906 z M 15.693359 7.1074219 L 16.892578 8.3066406 L 6.1992188 19 L 5 19 L 5 17.800781 L 15.693359 7.1074219 z"></path>
            </svg>
          </button>
          {/* delete button */}
          <button
            type="button"
            onClick={handleDeleteClick}
            className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 24 24">
              <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
