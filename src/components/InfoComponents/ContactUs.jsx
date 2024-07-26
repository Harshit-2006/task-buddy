function ContactUs() {
    return (
      <>
        <div className="flex flex-col space-y-6 pb-8 pt-8 md:pt-10 bg-[#121212] text-white">
          <div className="mx-auto max-w-max rounded-full border bg-gray-800 p-1 px-3">
            <p className="text-center text-xs font-semibold leading-normal md:text-sm text-gray-200">
              Share your thoughts
            </p>
          </div>
          <p className="text-center text-3xl font-bold md:text-5xl md:leading-10 text-gray-100">
          We&apos;d love to hear from you
          </p>
          <p className="mx-auto max-w-4xl text-center text-base md:text-xl text-gray-400">
            Have any questions or feedback about Task Buddy? Feel free to reach out to us.
          </p>
        </div>
        <div className="mx-auto max-w-7xl py-8 md:py-16 bg-[#121212] text-white">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-8 lg:grid-cols-2">
            {/* Contact form */}
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-8">
                <p className="text-2xl font-bold md:text-4xl text-gray-100">
                  Get in touch
                </p>
                <p className="mt-4 text-lg text-gray-400">
                  Our friendly team would love to assist you.
                </p>
                <form action="" className="mt-8 space-y-4">
                  <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className="grid w-full items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="first_name">
                        First Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        id="first_name"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="last_name">
                        Last Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        id="last_name"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email">
                      Email
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="phone_number">
                      Phone number
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="tel"
                      id="phone_number"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="flex w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      id="message"
                      placeholder="Leave us a message"
                      rows={4}
                    />
                  </div>
                  <button
                    type="button"
                    className="w-full rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <img
              alt="Contact us"
              className="hidden max-h-full w-full rounded-lg object-cover lg:block"
              src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=500&q=80"
            />
          </div>
        </div>
      </>
    );
  }
  
  export default ContactUs;
  