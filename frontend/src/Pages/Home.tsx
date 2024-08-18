import { useEffect } from "react";
import { HeroSetion } from "../components/HeroSetion";
import PropertyList from "../components/PropertyList";
import { getProperties } from "../services/WebService";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../redux/slices/PropertiesSlice";
import { RootState } from "../redux/store";
const Home = () => {
  const dispatch = useDispatch();
  const {value,filtered} = useSelector(
    (state: RootState) => state.PropertiesSlice
  );
  console.log(value)
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data: any = await getProperties();
        dispatch(addData(data));
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    fetchProperties();
  }, []);

  return (
    <div className="">
      <HeroSetion />
      <PropertyList properties={filtered.length > 0 ? filtered : value} />
    </div>
  );
};

export default Home;
