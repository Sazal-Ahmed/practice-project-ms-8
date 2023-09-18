/* eslint-disable react/prop-types */


const Link = ({route}) => {
    return (
        
            <li  className="mr-12 hover:bg-rose-500 p-2 rounded-md"><a href={route.path}>{route.name}</a></li>
        
    );
};

export default Link;