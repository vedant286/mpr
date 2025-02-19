import { Header } from "./Header"
import { TitleCont } from "./TitleCont"
import { Features } from "./Features"
import { Footer } from "./Footer"


const Home = () => { 

  return (
    <>
      <div className="px-40 flex flex-col ">

        <Header/>
        <TitleCont/>
        <img src="./assets/wave.png" className="absolute bottom-0 w-[100%] h-[30%] left-0 bottom-0"/>
        <img src="./assets/wave2.png" className="absolute top-160.5 w-[100%] h-[30%] left-0 "/>
        <img src="./assets/des.png" className="absolute left-0 top-80 h-[30%] object-contain"/>

        <Features/>

        <Footer/>
      </div>
    </>
  )
}

export {Home};
