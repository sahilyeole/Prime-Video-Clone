import { NavLink } from "react-router-dom";
import LogoWhite from "../../../assets/logos/primevideowhite.png";

import {MdArrowDropDown} from "react-icons/md"
import {AiOutlineSearch} from "react-icons/ai"
import {IoPersonOutline} from "react-icons/io5"
import {IoIosGlobe} from "react-icons/io"


const Navbar: React.FC = () => {
  return (
    <div className="bg-[#1B242F] text-[#DDE0E3] h-[4.5rem] w-[100%] flex items-center fixed z-50">
      <img
        src={LogoWhite}
        className={" w-[7.2rem] h-[39px] mb-[0.009px]  ml-[46.4px]"}
      />
          <NavLink
            to={"/"}
            className={"font-[300] text-[1.05rem] ml-[1.4rem] mr-[0.49rem]"}
          >
            Home
          </NavLink>
          <NavLink
            to={"/"}
            className={"font-[300] text-[1.05rem] mx-[0.485rem]"}
          >
            Store
          </NavLink>
          <NavLink
            to={"/"}
            className={"font-[300] text-[1.05rem] mx-[0.47rem]"}
          >
            Channels
          </NavLink>
          <button className="mt-[0.1rem] font-semibold font-sans  text-[1.07rem] ml-[0.47rem]">
            Categories
          </button>
          <MdArrowDropDown size={"19px"} color={"#8197A4"} className=" ml-[0.1rem] mb-[0.1rem] mr-[0.47rem] "/>
          <NavLink
            to={"/"}
            className={"font-[300] text-[1.05rem] ml-[0.6rem]"}
          >
            My Stuff
          </NavLink>
      <button className="text-white font-[350] text-[1.05rem] ml-[26.55rem] w-[7.7rem] h-[36px] rounded-[0.15rem] bg-[#0F79AF]">
        Try for free
      </button>
      <AiOutlineSearch color={"#BBBEC1"} size={"26px"} className={"ml-5"}/>
      <div className="flex items-end ml-[1.18rem]">
      <IoIosGlobe color={"#CCCCCC"} size={"24px"}/>
      <h1 className="ml-[0.3rem]  font-[600] text-[15.3px] text-[#CCCCCC] ">EN</h1>
          <MdArrowDropDown size={"19px"} color={"#8197A4"} className=" ml-[0.1rem] mb-[0.1rem] mr-[0.47rem] "/>
      </div>
      <div className="flex items-end ml-3">
      <IoPersonOutline color={"#BBBEC1"} size={"24px"}/>
          <MdArrowDropDown size={"19px"} color={"#8197A4"} className=" ml-[0.1rem] mb-[0.1rem] mr-[0.47rem] "/>
      </div>
    </div>
  );
};

export default Navbar;