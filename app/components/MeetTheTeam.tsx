import Carousal from "./Carousal";

function MeetTheTeam() {
  return (
    <div className="mt-6 lg:flex lg:justify-center">
      <div className="max-w-screen-lg">
        <div className="px-3 lg:px-0 my-3 space-y-3">
          <h1 className="text-2xl font-bold text-soccershot-orange">
            Meet the Team
          </h1>
          <p className="text-gray-500">
            We’re committed to providing safe, positive experiences through the
            game of soccer. It’s the reason parents trust Soccer Shots. Each of
            our three core programs teaches the right skills at the right age.
            Explore our programs to find the perfect fit. Each Soccer Shots
            franchise is individually owned and operated.
          </p>
        </div>

        <Carousal />

        <div className="grid grid-cols-1 lg:grid-cols-2 my-8 mx-4 text-white space-y-8 lg:space-x-8 lg:space-y-0">
          <div className="bg-[#6AA04F] px-8 py-12 flex items-start justify-center flex-col">
            <h1 className="text-3xl font-bold">Soccer Shots Careers</h1>
            <p className="py-4">
              Whether you're looking for a part-time, flexible job, or a
              full-time career - if you have a passion for positively impacting
              children, we'd love to talk to you.
            </p>
            <button className="border border-white rounded-full px-4 py-2 mt-8 font-semibold ">
              OPEN POSITIONS
            </button>
          </div>

          <div className="bg-[#6AA04F] px-8 py-12 flex items-start justify-center flex-col">
            <h1 className="text-3xl font-bold">Frequently Asked Question</h1>
            <p className="py-4">
              Find answers to our most asked questions including what you should
              wear on Soccer Island, information about inclement weather and
              more.
            </p>
            <button className="border border-white rounded-full px-4 py-2 mt-8 font-semibold ">
              VISIT FAQS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetTheTeam;
