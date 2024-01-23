import { MdAlternateEmail, MdLocalPhone } from "react-icons/md";
import ContactCard from "./ContactCard";
import { IoLocationOutline } from "react-icons/io5";

const ContactCards = () => {
  return (
    <div className="mt-10 space-y-2">
      <ContactCard
        Icon={MdAlternateEmail}
        source="mailto:joy600508@gmail.com"
        contactTitle="Email"
        contactSource="joy600508@gmail.com"
      />
      <ContactCard
        Icon={MdLocalPhone}
        source="tel:+8801772838734"
        contactTitle="Phone"
        contactSource="+8801772838734"
      />
      <ContactCard
        Icon={IoLocationOutline}
        source="mailto:joy600508@gmail.com"
        contactTitle="Address"
        contactSource="Derai, Sylhet, Bangladesh"
      />
    </div>
  );
};

export default ContactCards;
