import { Card } from "./Card";

const Features = () => {

    return(
        <>
            <div className="mt-[45vh]">
                <h2 className="font-bold text-[3.5vw] text-center">Features</h2>
                <div className="flex flex-row justify-between mt-20">
                    <Card src="./assets/f1.png" name="Combine Core" desc="Lorem ipsum odor amet, consectetuer adipiscing elit."/>
                    <Card src="./assets/f2.png" name="Monetize & Ads" desc="Lorem ipsum odor amet, consectetuer adipiscing elit."/>
                    <Card src="./assets/f3.png" name="Analytics" desc="Lorem ipsum odor amet, consectetuer adipiscing elit."/>
                </div>
                <img src="./assets/blobb.svg" className="absolute right-0 top-280 z-0 object-contain w-70"/>
            </div>
        </>
    );
}

export {Features};