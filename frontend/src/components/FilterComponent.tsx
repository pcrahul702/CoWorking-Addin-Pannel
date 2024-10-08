import React, { useEffect, useState } from 'react';
import Dropdown from './DropDown';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../redux/store";
import { setFilteredProperties } from "../redux/slices/PropertiesSlice";
import { PropertywithId } from '../Interface/interface';

interface FilterOption {
  label: string;
  value: string;
}

interface FilterComponentProps {
  priceOptions: FilterOption[];
  locationOptions: FilterOption[];
  propertyTypeOptions: FilterOption[];
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  priceOptions,
  locationOptions,
  propertyTypeOptions,
}) => {
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const dispatch = useDispatch();
  const properties = useSelector(
    (state: RootState) => state.PropertiesSlice.value
  );

  const resetFilters = () => {
    setPrice('');
    setLocation('');
    setPropertyType('');
  };

  useEffect(() => {
    const handleFilter = () => {
      if (price || propertyType || location) {
        const data = properties.filter((item: PropertywithId) => {
          return (
            item.location.toLowerCase().includes(location.toLowerCase()) 
            
          );
        });
        dispatch(setFilteredProperties(data));
      } else {
        dispatch(setFilteredProperties([]));
      }
    };

    handleFilter();
  }, [price, propertyType, location, dispatch, properties]);

  return (
    <div className="flex justify-between items-center text-white">
      <div className="flex gap-5">
        <Dropdown
          id="price"
          selectedValue={price}
          label="Price"
          options={priceOptions}
          onChange={setPrice}
        />
        <Dropdown
          id="location"
          selectedValue={location}
          label="Location"
          options={locationOptions}
          onChange={setLocation}
        />
        <Dropdown
          id="propertyType"
          selectedValue={propertyType}
          label="Property Type"
          options={propertyTypeOptions}
          onChange={setPropertyType}
        />
      </div>
      <div>
        <button
          onClick={resetFilters}
          className="mt-5 md:mt-0 bg-white text-blue-600 py-2 px-4 rounded-md hover:bg-blue-600 hover:text-white hover:border"
        >
          Reset Filter
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
