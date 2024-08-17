
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-600 text-white">
      <div className="container mx-auto py-3 flex justify-between">
        <div className="flex gap-10 flex-1">
          <div className="font-bold text-xl cursor-pointer">CoWorks</div>
          <div className="flex-1">
            <form>
              <input
                className="text-black placeholder:text-black rounded-xl bg-white px-3 py-1 w-1/2 outline-none"
                placeholder="Search..."
              />
            </form>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="cursor-pointer">Share Requirment</div>
          <Link to="/add"   className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600" >Add Property</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
