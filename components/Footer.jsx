import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { socialLinks } from "@/data/socialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="p-2 lg:p-4 bg-center bg-cover"
      style={{ backgroundImage: "url('/footer/wave.svg')" }}
    >
      <section className="w-full lg:p-4 p-2 flex flex-col lg:flex-row gap-4 lg:gap-0">
        {/* Credit Section */}
        <section className="p-2 w-full flex flex-col items-center">
          <span className="font-semibold">Hometown</span>
          <section className="p-2 flex flex-col items-center w-fit gap-2 text-gray-800">
            <span className="flex gap-1 items-center">
              <FaLocationDot />
              <address>Banswara, Rajasthan, India</address>
            </span>
            <span className="flex gap-2 items-center">
              <IoIosMail className="text-xl" />
              <Link href="mailto:taher.chabra2303@gmail.com">
                taher.chabra2303@gmail.com
              </Link>
            </span>
          </section>
        </section>

        {/* Social Media */}
        <section className="p-2 w-full flex flex-col items-center">
          <span className="font-semibold">Social Links</span>
          <section className="p-2 flex flex-wrap w-4/5 justify-center gap-3 text-gray-800">
            {socialLinks.map((e) => (
              <span key={e.id}>
                <Link
                  href={e.link}
                  className="flex gap-1 justify-center"
                  target="_blank"
                >
                  {e.name}&nbsp;{e.icon}
                </Link>
              </span>
            ))}
          </section>
        </section>
      </section>

      <section className="px-2 text-center">
        <p>
          &copy; {currentYear}{" "}
          <span className="text-black font-semibold underline">
            Taher Chabra
          </span>
          . All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
