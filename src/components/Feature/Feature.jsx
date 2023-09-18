/* eslint-disable react/prop-types */

import { AiFillCheckCircle } from 'react-icons/ai';
const Feature = ({feature}) => {

    return (
        <div>
            <p className='flex items-center my-2s'><AiFillCheckCircle className='mr-3'/>{feature}</p>
        </div>
    );
};

export default Feature;