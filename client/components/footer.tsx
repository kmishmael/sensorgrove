import { FaWhatsapp } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col gap-2 bg-primary text-white">
        <div className="flex flex-row gap-8 px-20 py-10 justify-between">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-2xl">MegaMart</h2>
            <div>
              <p className="font-semibold">Contact Us</p>
              <br />
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-3 items-center">
                  <IoLocationOutline className="h-6 w-6" />
                  <div className="flex text-sm flex-col">
                    <p>3rd Floor Crown House</p>
                    <p>Kimathi Street, Nairobi</p>
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <FaWhatsapp className="h-6 w-6" />
                  <div className="flex text-sm flex-col">
                    <p>Whats App</p>
                    <p>+254 708-357-271</p>
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <MdAddCall className="h-6 w-6" />
                  <div className="flex text-sm flex-col">
                    <p>Whats App</p>
                    <p>+254 708-357-271</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="underline underline-offset-8 decoration-2">
              Popular Categories
            </h3>
            <div>
              <ul className="pl-6 list-disc flex flex-col gap-2">
                <li>
                  <a>Staples</a>
                </li>
                <li>Beverages</li>
                <li>Personal Care</li>
                <li>Home care</li>
                <li>Baby care</li>
                <li>Smartphones</li>
                <li>Laptops</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="underline underline-offset-8 decoration-2">
              Company
            </h3>
            <div>
              <ul className="pl-6 list-disc flex flex-col gap-2">
                <li>
                  <a>About Us</a>
                </li>
                <li>Return Policy</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="">Follow us on socials</h3>
            <div className="flex gap-3">
              <FaXTwitter className="h-6 w-6" />
              <FaFacebookSquare className="h-6 w-6" />
              <FaTiktok className="h-6 w-6" />
            </div>
          </div>
        </div>
        <hr className="border-sky-200" />
        <div className="flex justify-center py-4">
          <p>&copy; 2024 MegaMart</p>
        </div>
      </div>
    </>
  );
}
