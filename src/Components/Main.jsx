import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faMagnifyingGlass,faMessage,faUser,faGear } from "@fortawesome/free-solid-svg-icons";
const Main = () => {

    return (
        <>
            <div className="w-full h-[100vh]">
                <div className="bg-black w-20 h-full flex flex-col justify-evenly">
                    <h1 className="font-bold text-[#FEC461] text-4xl mx-auto mt-0"><Link to="/">N</Link></h1>
                    <FontAwesomeIcon icon={faHouse} color="#FEC461" size="2x"/>
                    <FontAwesomeIcon icon={faMagnifyingGlass} color="#FEC461" size="2x"/>
                    <FontAwesomeIcon icon={faMessage} color="#FEC461" size="2x"/>
                    <FontAwesomeIcon icon={faUser} color="#FEC461" size="2x"/>
                    <FontAwesomeIcon icon={faGear} color="#FEC461" size="2x"/>
                </div>
                    
            </div>
        
        </>
    );
}


export {Main};