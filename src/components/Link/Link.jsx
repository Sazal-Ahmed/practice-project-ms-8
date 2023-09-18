/* eslint-disable react/prop-types */


const Link = ({route}) => {
    return (
        
            <li  className="mr-12 hover:bg-rose-500 px-4"><a href={route.path}>{route.name}</a></li>
        
    );
};

export default Link;