import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

  const price = [
    
    {
      "id": 1,
      "name": "Basic Membership",
      "price": "$29.99/month",
      "features": [
        "Access to gym facilities",
        "Cardio equipment usage",
        "Locker room access",
        "Free Wi-Fi",
        "Fitness assessment"
      ]
    },
    {
      "id": 2,
      "name": "Premium Membership",
      "price": "$49.99/month",
      "features": [
        "Access to gym facilities",
        "Cardio equipment usage",
        "Locker room access",
        "Free Wi-Fi",
        "Fitness assessment",
        "Group fitness classes",
        "Personal trainer consultation"
      ]
    },
    {
      "id": 3,
      "name": "Family Membership",
      "price": "$79.99/month",
      "features": [
        "Access to gym facilities for the whole family",
        "Cardio equipment usage",
        "Locker room access",
        "Free Wi-Fi",
        "Fitness assessment",
        "Group fitness classes",
        "Childcare services",
        "Nutritional counseling"
      ]
    }
  
  ]
  return (
    <div className="mt-4">
      <div className="grid md:grid-cols-3 gap-6">
      {
        price.map(option => <PriceOption key={price.id} option={option}> </PriceOption>)
      }
      
    </div>
    </div>
  );
};

export default PriceOptions;