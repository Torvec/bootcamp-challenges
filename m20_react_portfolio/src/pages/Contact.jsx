// The contact me page component

function Contact() {
  const handleSubmit = () => {
    alert("This form doesn't work yet. Please email me at ");
  };

  return (
    <section className="container m-auto px-5 pb-20 pt-32 text-black xl:px-0">
      <h1 className="mb-10 text-center text-5xl font-semibold uppercase md:text-8xl md:font-normal">
        Contact Me
      </h1>
      <form
        onSubmit={handleSubmit}
        className="m-auto flex w-full flex-col rounded-lg bg-lightbluegray p-5 shadow-lg md:w-3/4 lg:w-7/12"
      >
        <label htmlFor="name" className="mb-2 text-3xl">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Dio Brando"
          required
          className="mb-5 rounded-md p-5 font-mono transition duration-500 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange"
        />
        <label htmlFor="email" className="mb-2 text-3xl">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="diobrando@jojo.com"
          required
          className="mb-5 rounded-md p-5 font-mono transition duration-500 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange"
        />
        <label htmlFor="message" className="mb-2 text-3xl">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Za Warudo! Wrrrrrrryyyyyyy!"
          required
          className="mb-5 h-40 resize-none rounded-md p-5 font-mono transition duration-500 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange"
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-max rounded-xl bg-orange px-8 py-2 text-xl uppercase transition duration-500 ease-in-out hover:bg-black hover:text-white"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
