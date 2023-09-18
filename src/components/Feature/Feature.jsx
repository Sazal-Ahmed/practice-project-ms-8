
import { AiFillCheckCircle } from 'react-icons/ai';
const Feature = ({feature}) => {

    return (
        <div>
            <p className='flex items-center my-2'><AiFillCheckCircle className='mr-3'/>{feature}</p>
        </div>
    );
};

export default Feature;