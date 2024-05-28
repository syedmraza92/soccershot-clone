import HeroTop from "../components/HeroTop";
import Navbar from "../components/Navbar";
import Map from "../components/Map";
import About from "../components/About";
import MeetTheTeam from "../components/MeetTheTeam";
import Reviews from "../components/Reviews";
import OurPartner from "../components/OurPartner";
import ConnectUs from "../components/ConnectUs";

function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-52">
        <HeroTop />
      </div>
      <Map />
      <About />
      <MeetTheTeam />
      <Reviews />
      <OurPartner />
      <ConnectUs />
    </div>
  );
}

export default Homepage;
