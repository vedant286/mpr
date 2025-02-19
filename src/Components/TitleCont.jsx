const TitleCont = () => {
    return (
        <div className="w-full h-[70vh] relative rounded-[40px] mt-[5vh] flex flex-col justify-center items-center bg-[#FFE7BF]/45 ">
            <h1 className="mt-[3vh] text-[5vw] text-black font-light text-center leading-20">
                <span className="font-bold">One </span>
                Platform<span>, </span><br />
                <span className="font-bold">Infinite </span>
                Connects
            </h1>
            <p className="text-center mt-[4vh]">
                Lorem ipsum odor amet, consectetuer adipiscing elit.<br />
                Natoque nascetur duis dignissim tellus quisque laoreet.
            </p>
            <a
                className="w-fit m-auto relative inline-block rounded-sm border border-[#FFC768] bg-[#FFC768] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black"
                href="/signup"
            >
                SignUp
            </a>
            <img src="./assets/robo.png" className="absolute right-[-11vw] top-[20vh] object-contain w-[50%] h-[95%]"/>
            
        </div>
    );
}

export { TitleCont }
