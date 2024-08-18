import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { PropertywithId } from "../Interface/interface";
import { setFilteredProperties } from "../redux/slices/PropertiesSlice";
const Header = () => {
  const dispatch = useDispatch();
  const properties = useSelector(
    (state: RootState) => state.PropertiesSlice.value
  );
  const [searchValue, setSearchVlaue] = useState<string>("");
  // const handleSearchsubmit=(e:any)=>{
  //   e.preventDefault();
  //   if (searchValue.length > 0) {
  //     const data = properties.filter((item: PropertywithId) => {
  //       return item.location.toLowerCase().includes(searchValue.toLowerCase()) ||
  //              item.title.toLowerCase().includes(searchValue.toLowerCase());
  //     });
  //     dispatch(setFilteredProperties(data))
  //   }
  //   else{
  //     dispatch(setFilteredProperties([]))
  //   }
  // }
  const handleSearch = (e: any) => {
    e.preventDefault();
    setSearchVlaue(e.target.value);
    if (e.target.value.length > 3) {
      const data = properties.filter((item: PropertywithId) => {
        return (
          item.location.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.title.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
      dispatch(setFilteredProperties(data));
    } else {
      dispatch(setFilteredProperties([]));
    }
  };

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
                value={searchValue}
                onChange={handleSearch}
              />
            </form>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="cursor-pointer">Share Requirment</div>
          <Link
            to="/add"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600"
          >
            Add Property
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
