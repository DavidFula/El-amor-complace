export default ({text}) => {
    return (

        <a href="#" className="relative py-8 group">
            <span className="group-hover:text-rose-500 transition-all duration-300">{text}</span>
            <span className="absolute mt-4 block w-full h-1 group-hover:bg-rose-500 "></span> 

        </a>

    );

};

