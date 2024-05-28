import Image from "next/image";
import soccershot1 from "../../public/assets/soccershot1.jpeg";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function About() {
  return (
    <div className="text-white flex justify-center">
      <div className="lg:grid lg:grid-cols-2 ">
        <div className="px-5 py-8 bg-[#4899D2] 2xl:grid 2xl:grid-cols-2">
          <div></div>
          <div className="">
            <div className=" ">
              <h1 className="font-bold text-2xl leading-normal">
                About Soccer Shots
              </h1>
              <h2 className="font-bold text-2xl leading-tight">
                Philadelphia, PA
              </h2>

              <p className="py-7">
                Soccer Shots is the most trusted and engaging children’s soccer
                program for ages 2 to 8. Join the best coaches in the business,
                on Soccer Island for age-appropriate soccer skills,
                character-building, and FUN!
              </p>
            </div>

            <div className="space-y-3">
              <p>
                <LocalPhoneIcon /> 267.630.1557
              </p>
              <p className="">
                <EmailIcon /> philly@soccershots.com
              </p>
            </div>

            <div className="my-6 space-x-4">
              <FacebookIcon />
              <LinkedInIcon />
              <InstagramIcon />
            </div>
          </div>
        </div>

        <div className="relative w-full h-64 lg:h-auto">
          <div className="absolute inset-0">
            <Image
              src={soccershot1}
              alt="soccer shot"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
