const htmlForm = () => {
  return (
    <section className="pb-[50px]">
      <div className="container">
        <form className="max-w-[840px] mx-auto flex flex-col">
          <div className="flex flex-row gap-[14px] justify-between">
            <label
              htmlFor="firstName"
              className="flex flex-col text-black-50 font-medium basis-1/2"
            >
              First Name
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="mt-[10px] mb-[20px] border-[1px] border-solid border-black-10 py-[18px] px-[32px] focus:outline-none focus:border-primary-50 transition-all placeholder:text-[16px] placeholder:font-normal placeholder:text-black-10"
              />
            </label>

            <label
              htmlFor="lastName"
              className="flex flex-col text-black-50 font-medium basis-1/2"
            >
              Last Name
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="mt-[10px] mb-[20px] border-[1px] border-solid border-black-10 py-[18px] px-[32px] focus:outline-none focus:border-primary-50 transition-all placeholder:text-[16px] placeholder:font-normal placeholder:text-black-10"
              />
            </label>
          </div>

          <label
            htmlFor="email"
            className="text-black-50 font-medium mb-[10px]"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="mb-[20px] border-[1px] border-solid border-black-10 py-[18px] px-[32px] focus:outline-none focus:border-primary-50 transition-all placeholder:text-[16px] placeholder:font-normal placeholder:text-black-10"
          />

          <label
            htmlFor="phone"
            className="text-black-50 font-medium mb-[10px]"
          >
            Phone Number
          </label>
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            className="mb-[20px] border-[1px] border-solid border-black-10 py-[18px] px-[32px] focus:outline-none focus:border-primary-50 transition-all placeholder:text-[16px] placeholder:font-normal placeholder:text-black-10"
          />

          <label className="text-black-50 font-medium mb-[10px]">Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            className="h-[178px] mb-[40px] border-[1px] border-solid border-black-10 py-[18px] px-[32px] focus:outline-none focus:border-primary-50 transition-all placeholder:text-[16px] placeholder:font-normal placeholder:text-black-10 resize-none"
          />

          <button
            type="submit"
            className="inline-block mx-auto text-white text-[14px] font-medium bg-primary-100 py-[14px] px-[32px]"
          >
            Send Massage
          </button>
        </form>
      </div>
    </section>
  );
};

export default htmlForm;
