

const Card = ({src , name , desc}) => {
    return(
        <>
            <div className="w-[20vw] h-[45vh] bg-[#F9F9F9]/34 shadow-xl p-8 z-1 ">
                <img src={src}/>
                <h2 className="font-bold text-[1.6vw] mb-5">{name}</h2>
                <p className="font-[400]">{desc}</p>
            </div>
        
        </>
    );
}

export {Card};