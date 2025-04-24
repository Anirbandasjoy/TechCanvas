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
  Icon: React.ElementType | any;
}) => {
  return (
    <div
      className="flex items-center gap-3 
      bg-gradient-to-br from-[#ffffff] to-[#f0fdfa] 
      dark:from-[#1f2937] dark:to-[#111827] 
      py-4 px-5  rounded-sm border border-gray-200 dark:border-gray-600 transition-colors duration-300"
    >
      <Link to={source}>
        <Icon className="text-4xl text-[#1abc9c]" />
      </Link>
      <div>
        <h1 className="text-xl font-bold text-gray-700 dark:text-gray-300">
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
