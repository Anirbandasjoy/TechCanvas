import Heading from "../Heading/Heading";
import ContactCards from "./ContactCards";

const ContactInfo = () => {
  return (
    <div className="mt-10 sm:mt-28 mb-16">
      <Heading
        title="Contact Me"
        subTitile="you can email or call me directly. Below you will find my email and phone number"
      />

      <ContactCards />
    </div>
  );
};

export default ContactInfo;
