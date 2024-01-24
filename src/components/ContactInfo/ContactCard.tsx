import { Link } from "react-router-dom";
const ContactCard = ({
  source,
  contactTitle,
  contactSource,
  Icon,
}: {
  source: string;
  contactTitle: string;
  contactSource: string;
  Icon: React.ElementType;
}) => {
  return (
    <div className="flex items-center gap-3 bg-white py-4 px-5 shadow-sm rounded-sm border-gray-200 border dark:bg-gray-800 dark:border-gray-600 ">
      <Link to={source}>
        <Icon className="text-4xl  text-[#1abc9c]" />
      </Link>
      <div>
        <h1 className="text-xl font-bold  text-gray-700 dark:text-gray-300">
          {contactTitle}
        </h1>
        <Link
          to={source}
          className="hover:text-[#1abc9c] dark:hover:text-[#1abc9c] dark:text-gray-300 duration-100"
        >
          {contactSource}
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;
