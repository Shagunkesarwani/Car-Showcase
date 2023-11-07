
import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

const Footer = () => (
  <footer className='flex flex-col text-black-100   bg-black border-t border-gray-100'>
    <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
      <div className='flex flex-col justify-start items-start gap-6'>
        <Image src='/logo.svg' alt='logo' width={118} height={18} className='object-contain' />
        <p className='text-base text-white'>
          Carhub 2023 <br />
          All Rights Reserved &copy;
        </p>
      </div>

      <div className="footer__links">
        {footerLinks.map((link) => (
          <div key={link.title} className="footer__link">
            <h3 className="font-bold text-white">
              {link.title}
            </h3>
            <div className="flex flex-col gap-5">
              {link.links.map((item) => (
                <Link 
                
                  href={item.url}
                  key={item.title}
                  className="text-grey"
                >{item.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div> 
    </div>

    <div className='flex justify-between items-center flex-wrap mt-10 border-t text-white border-gray-100 sm:px-16 px-6 py-10'>
      <p>@2023 CarHub. All rights reserved</p>

      <div className="footer__copyrights-link">
        <Link href="/" className="text-grey">
          Privacy & Policy
        </Link>
        <Link href="/" className= "text-grey">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;