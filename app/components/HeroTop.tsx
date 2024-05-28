import Image from "next/image";
import soccerhero from "../../public/assets/soccer-hero.jpeg";
import soccerhero2 from "../../public/assets/soccerhero2.jpeg";

function HeroTop() {
  return (
    <div className="container ">
      {/* Top left div */}
      <div className="lg:grid lg:grid-cols-2">
        <div className="px-20 py-8 flex justify-center lg:items-center">
          <div className="">
            <div className=" text-soccershot-orange">
              <h1 className="font-semibold text-3xl leading-normal">
                WELCOME TO SOCCER SHOTS
              </h1>
              <h2 className="font-bold text-5xl leading-tight">
                Philadelphia, PA
              </h2>
            </div>

            <div className="text-gray-500 my-6">
              <p className="py-1">philly@soccershots.com</p>
              <p>267.630.1557</p>
            </div>
          </div>
        </div>

        <div className="relative h-full w-full">
          <Image
            src={soccerhero}
            alt="soccer shot"
            layout="responsive"
            objectFit="contain"
            className="lg:rounded-l-full"
          />
        </div>
      </div>

      {/* Bottom Right div */}
      <div className="lg:grid lg:grid-cols-2 bg-soccershot-blue">
        <div className="relative h-full w-full">
          <Image
            src={soccerhero2}
            alt="soccer shot"
            layout="fill"
            objectFit="cover"
            className="lg:rounded-r-full"
          />
        </div>

        <div className=" bottom right px-6 py-10 lg:p-20 bg-soccershot-blue">
          <div className=" text-white">
            <h1 className="font-semibold text-3xl leading-normal">
              Soccer Shots Programs
            </h1>
            <p className=" leading-relaxed py-4">
              Soccer Shots offers three core programs to meet the developmental
              needs of children ages 2 to 8. It’s way more than just learning
              the game of soccer. We aim to build character, skills and
              confidence while also having a whole lot of FUN. We’re committed
              to providing safe, positive experiences through the game of
              soccer. It’s the reason parents trust Soccer Shots. Each of our
              three core programs teaches the right skills at the right age.
              Explore our programs to find the perfect fit.
            </p>
          </div>

          <button className="border border-white rounded-full px-4 py-2 font-semibold text-white">
            EXPLORE OUR PROGRAMS
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroTop;
