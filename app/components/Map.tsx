function Map() {
  const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  return (
    <div className="mx-3 my-10 lg:mx-8 lg:my-10 lg:flex lg:justify-center">
      <div className="bg-soccershot-blue  text-white lg:flex lg:flex-row-reverse max-w-screen-lg">
        {/* Enrollment */}

        <div className="flex items-center justify-center p-7 lg:max-w-[60%]">
          <div className="text-left">
            <h1 className="text-3xl font-bold leading-relaxed">
              Enroll in a Program Near You
            </h1>
            <h2 className="my-5 leading-relaxed">
              Soccer Shots is an engaging children's soccer program taught by
              fully-trained coaches. Join us on Soccer Island for soccer skills,
              character building curriculum designed specifically for kids and a
              whole lot of FUN!
            </h2>
            <button className="border-2 border-white py-2 px-4 text-base font-semibold rounded-full text-white">
              FIND A LOCATION!
            </button>
          </div>
        </div>

        {/* Map */}
        <div className="w-full">
          <iframe
            className="w-full h-64 lg:h-96"
            src={`https://www.google.com/maps/embed/v1/place?key=${googleApiKey}&q=Philadelphia,PA`}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Map;
