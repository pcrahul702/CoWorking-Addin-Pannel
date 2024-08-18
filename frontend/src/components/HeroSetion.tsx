
import FilterComponent from './FilterComponent'

export const HeroSetion = () => {
    const priceOptions = [
        { label: 'Low', value: 'low' },
        { label: 'Medium', value: 'medium' },
        { label: 'High', value: 'high' },
      ];
    
      const locationOptions = [
        { label: 'Pune', value: 'Pune' },
        { label: 'Noida', value: 'Noida' },
        { label: 'Bengaluru', value: 'Bengaluru' },
      ];
    
      const propertyTypeOptions = [
        { label: 'Apartment', value: 'apartment' },
        { label: 'House', value: 'house' },
        { label: 'Studio', value: 'studio' },
      ];
  return (

    <div className="bg-blue-600 ">
        <div className="container mx-auto  py-5 ">
          <div className="text-2xl font-semibold tracking-tighter mb-5 text-white">
            Coworking Space In Pune
          </div>
          <p className="text-xs font-normal text-white">Quick Filter</p>
           <FilterComponent
           priceOptions={priceOptions}
           locationOptions={locationOptions}
           propertyTypeOptions={propertyTypeOptions}/>
        </div>
      </div>
  )
}
