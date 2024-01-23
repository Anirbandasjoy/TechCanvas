import { FiSend } from "react-icons/fi";
import PageHeading from "../../components/PageHeading/PageHeading";
import ContactCards from "../../components/ContactInfo/ContactCards";

const Contact = () => {
  const handleMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message Sent Successfully");
  };
  return (
    <div className="mt-10 mb-10">
      <PageHeading
        title="Contact Me"
        subTitile="To contact me, fill the form below and click the send message button. Or you can email or call me directly. Below you will find my email and phone number"
      />

      <div className="mt-10">
        <form className="space-y-4" onSubmit={handleMessage}>
          <div className="flex items-center flex-col sm:flex-row gap-5">
            <div className="flex flex-col gap-1 w-full">
              {/* <label
                className="text-sm text-gray-400 dark:text-gray-300 font-bold"
                htmlFor="fullName"
              >
                Full Name
              </label> */}
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Full Name "
                className="py-3 bg-gray-200 px-3  border-gray-300 border dark:text-white dark:bg-gray-800  dark:border-gray-600  outline-none text-sm rounded-md"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              {/* <label
                className="text-sm text-gray-400 dark:text-gray-300 font-bold"
                htmlFor="email"
              >
                Email
              </label> */}
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                className="py-3 bg-gray-200 px-3  border-gray-300 border dark:text-white dark:bg-gray-800  dark:border-gray-600  outline-none text-sm rounded-md"
              />
            </div>
          </div>
          <div>
            <textarea
              className="py-5 bg-gray-200 px-5  border-gray-300 border  dark:text-white dark:bg-gray-800 dark:border-gray-600  outline-none text-sm rounded-md w-full h-52"
              name="message"
              id="message"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="py-2 px-3 w-full rounded-md bg-[#1abc9c] text-white  flex items-center justify-center gap-1 cursor-pointer">
            <button className=" font-bold">Send Message</button>
            <FiSend />
          </div>
        </form>
      </div>

      <div className="mt-24">
        <ContactCards />
      </div>
    </div>
  );
};

export default Contact;
