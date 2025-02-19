import { Link } from "react-router";



const Header = () => {

    return (
        <>
            <header className="flex flex-row mt-3">
                <div className="w-20">
                    <h1 className="font-bold text-3xl"><Link to="/">Noon</Link></h1>
                </div>
                <div className="flex flex-row w-full">
                    <ul className="flex flex-row list-none m-auto w-full justify-evenly">
                        <li>Home</li>
                        <li>Features</li>
                        <li>Contact</li>
                        <li>Blogs</li>
                    </ul>



                    <a
                        className="inline-flex items-center gap-2 rounded-sm border border-black bg-black px-8 py-3 text-white hover:bg-transparent hover:text-black focus:ring-3 focus:outline-hidden"
                        href="/login"
                    >
                        <span className="text-sm font-bold"> Signin </span>

                        <svg
                            className="size-5 rtl:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </div>
            </header>
        </>
    );
}

export { Header };