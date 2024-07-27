function Error({errorMessageText}) {
  return (
    <section>
      <div>
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center"></div>
          <h2 className="pb-1 text-center text-3xl font-bold leading-tight text-orange-500">
           {errorMessageText}
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Error;
