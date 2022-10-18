import { NextPage } from "next/types";
import Topnav from "../components/Topnav";
import TextInput from "../components/TextInput";
import Dropdown from "../components/Dropdown";

const Lookup: NextPage = () => {
  const dropDownItems = ["Strict", "Wildcard"];
  return (
    <>
      <Topnav />
      <div className="w-full">
        <div className="text-center">
          <TextInput placeholderText="Search for anything" />
          <Dropdown dropdownText="Mode" dropdownItems={dropDownItems} />
        </div>
      </div>
    </>
  );
};

export default Lookup;
