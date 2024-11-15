
import { IconType } from "react-icons";
import { AiOutlineFilter, AiOutlinePlus } from "react-icons/ai";
import { BiSolidLock } from "react-icons/bi";
import { FaDeleteLeft } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { GoSignOut } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward, IoIosSearch, IoMdAddCircleOutline, IoMdClose } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { LuBuilding2 } from "react-icons/lu";
import { PiSuitcase } from "react-icons/pi";
import { RiCarLine, RiDeleteBinLine } from "react-icons/ri";
import { SiMicrosoftexcel } from "react-icons/si";


interface Iicons {
  vacant: IconType;
  company: IconType;
  edit: IconType;
  delete: IconType;
  add: IconType;
  search: IconType;
  arrowBack: IconType;
  arrowForward: IconType;
  close: IconType,
  car: IconType,
  lock:IconType,
  eye:IconType,
  out:IconType,
  plus:IconType,
  filter: IconType,
  deleteLeft:IconType,
  excel: IconType,
}


export const icons: Iicons = {
  vacant: PiSuitcase,
  company: LuBuilding2,
  edit: FiEdit,
  delete: RiDeleteBinLine,
  add: IoMdAddCircleOutline,
  search: IoIosSearch,
  arrowBack: IoIosArrowBack,
  arrowForward: IoIosArrowForward,
  close: IoMdClose,
  car:RiCarLine,
  lock: BiSolidLock,
  eye:IoEyeSharp,
  out: GoSignOut,
  plus:AiOutlinePlus,
  filter:AiOutlineFilter,
  deleteLeft: FaDeleteLeft,
  excel:SiMicrosoftexcel,
}