/* eslint-disable react/prop-types */

import Feature from "../Feature/Feature";


const PriceOption = ({option}) => {

    const {features, name, price} = option;

    return (
        <div className="bg-rose-600 rounded-lg text-white p-4 text-center flex flex-col">
            <h2 className="mb-5">
                <span className="text-2xl">{price}</span>
            </h2>
            <h4 className="text-3xl mb-7">{name}</h4>
           <div className="pl-6 flex-grow">
           {
                features.map((feature ,idx) => <Feature key={idx} feature={feature}></Feature>)
            }
           </div>
           <button className="my-4 bg-rose-800 w-full py-3 rounded-lg">Buy now</button>
        </div>
    );
};

export default PriceOption;