import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms, FaWindowMaximize } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const links = [
  { id: 1, text: "stats", path: "/", icon: <IoBarChartSharp /> },
  { id: 2, text: "all jobs", path: "all-jobs", icon: <FaWindowMaximize /> },
  { id: 3, text: "your jobs", path: "created-jobs", icon: <MdQueryStats /> },
  { id: 4, text: "add job", path: "add-job", icon: <FaWpforms /> },
  { id: 5, text: "profile", path: "profile", icon: <ImProfile /> },
];

export default links;
