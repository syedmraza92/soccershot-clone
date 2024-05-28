import Image from "next/image";
import usa from "../../public/assets/us logo.png";
import nike from "../../public/assets/logo nike.png";
import augusta from "../../public/assets/augusta.svg";

function OurPartner() {
  return (
    <div className="flex justify-center mx-3">
      <div className="mx-5 max-w-screen-lg w-full lg:mx-0">
        <div className="">
          <h1 className="text-2xl text-soccershot-orange font-bold my-9">
            Our Partners
          </h1>
          <div className="flex flex-row justify-between items-center my-9">
            <Image src={usa} alt="" className="w-12 lg:w-20" />
            <Image src={nike} alt="" className="w-12 lg:w-20" />
            <Image src={augusta} alt="" className="w-12 lg:w-20" />
          </div>
        </div>
        <div>
          <p className="text-gray-500 italic text-[10px] text-center">
            Each Soccer Shots® franchise is independently owned and operated.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurPartner;
