import { Facebook, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import Image from "next/image";
import logo from "../../public/assets/logo.png";

function ConnectUs() {
  return (
    <div className=" bg-soccershot-orange flex justify-center ">
      <div className="max-w-screen-lg grid grid-cols-2 lg:grid-cols-4 text-white justify-start space-y-8 space-x-8 py-8 px-2">
        <div>
          <Image src={logo} alt="logo" className="w-48" />
        </div>
        <div>
          <h2 className="text-lg font-semibold">Connect with us</h2>
          <Instagram />
          <Facebook />
          <LinkedIn />
          <YouTube />
        </div>
        <div>
          <p className="underline text-xs">Find A Location</p>
          <p className="underline text-xs">Franchise Opportunities</p>
          <p className="underline text-xs">Policies</p>
        </div>
        <div>
          <p className="underline text-xs">In The News</p>
          <p className="underline text-xs">Sitemap</p>
        </div>
      </div>
    </div>
  );
}

export default ConnectUs;
