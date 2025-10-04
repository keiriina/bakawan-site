import Image from "next/image";
import { AiFillMail, AiFillPhone, AiFillFacebook } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="footer bg-background text-primary p-6">
      <div className="flex flex-col items-center gap-4 max-w-lg mx-auto">
        <Image src="/images/logo.png" alt="Project Bakawan" width={100} height={100} />
        <p className="font-chikara text-primary text-2xl">Project Bakawan</p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        <div className="flex gap-6">
          <a href="mailto:info@greencrusade.org" className="hover:text-primary">
            <AiFillMail className="w-6 h-6" />
          </a>
          <a href="tel:+63961523785" className="hover:text-primary">
            <AiFillPhone className="w-6 h-6" />
          </a>
          <a href="https://www.facebook.com/dgreencrusader" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <AiFillFacebook className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
