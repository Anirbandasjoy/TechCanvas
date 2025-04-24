import { useState } from "react";
import { Switch } from "@headlessui/react";
import useTheme from "../../hooks/useTheme";
import { BiSolidColor } from "react-icons/bi";
const ToggoleBtn = () => {
  const [enabled, setEnabled] = useState(false);
  const { handleModeChnage } = useTheme();
  return (
    <div className="flex items-center gap-1">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        onClick={handleModeChnage}
        className={`${
          enabled ? "bg-[#1abc9c]" : "bg-gray-400"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
      <div className=" rounded-lg p-2 dark:text-gray-300 text-gray-600  cursor-pointer">
        <BiSolidColor className="animate-spin text-2xl" />
      </div>
    </div>
  );
};

export default ToggoleBtn;
