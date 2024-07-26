function TodoForm() {
  return (
    <section>
      <div>
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center"></div>
          <h2 className="pb-1 text-center text-3xl font-bold leading-tight text-orange-500">
            Task
          </h2>
          <form action="#" method="POST" className="mt-8">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-white">
                  Title
                </label>
                <div className="mt-2">
                  <input
                    className="text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Title"
                    id="name"></input>
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-white">
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    className="text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    name="Description"
                    placeholder="Description"
                    id="Description"></textarea>
                </div>
              </div>
              <div></div>
            </div>
          </form>
          <div className="mt-3 space-y-3">
            <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 px-28 py-2.5 font-semibold text-orange-500 bg-black transition-all duration-200 hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white focus:outline-none   ">
              Create Todo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TodoForm;
