import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import logo from "../../public/assets/logo.png";

function Navbar() {
  return (
    <div className="lg:shadow-lg fixed top-0 w-full bg-white z-50">
    <div className="lg:shadow-lg">
      <div className="max-w-screen-xl w-full mx-auto">
        <div className="flex mx-4 items-end justify-between">
          <button className="border-2 border-soccershot-orange py-2 px-4 text-[10px] font-semibold rounded-full text-soccershot-orange lg:hidden">
            ENROLL NOW
          </button>
          <Image
            src={logo}
            alt="main logo"
            height={70}
            className="lg:w-48 lg:mt-6"
          />

          <div className="flex flex-col">
            <div className="hidden lg:flex items-center gap-2 text-soccershot-blue justify-end ">
              <p>OWN A FRANCHISE</p>
              <p>|</p>
              <p>STORE</p>
              <p>|</p>
              <p>FAQS</p>
              <p>|</p>
              <p>EMPLOYMENT</p>
              <button className="border-2 border-soccershot-blue py-2 px-4 text-base font-semibold rounded-full text-soccershot-blue">
                ENROLL NOW
              </button>
            </div>
            <MenuIcon
              style={{ color: "#FF600A", fontSize: "2.5rem" }}
              className="lg:hidden"
            />

            <div className="hidden lg:flex items-center gap-2 text-soccershot-orange my-3">
              <p>PROGRAMS</p>
              <p>|</p>
              <p>RESOURCES</p>
              <p>|</p>
              <p>STRONGER YOUTH.BEYOND THE GAME.</p>
              <p>|</p>
              <p>ABOUT</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end lg:p-2">
          <button className="hidden bg-[#FCAA6C] rounded-full py-2 px-4 lg:block">
            <p className="text-xs text-soccershot-blue">YOUR LOCATION</p>
            <p className="font-bold text-xs text-soccershot-blue">
              PHILADELPHIA
            </p>
          </button>
        </div>

        <div className="bg-gray-100 shadow-lg flex flex-col text-center py-2 my-3 lg:hidden">
          <p className="font-light text-soccershot-blue">YOUR LOCATION</p>
          <p className="font-bold text-lg text-soccershot-blue">PHILADELPHIA</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
