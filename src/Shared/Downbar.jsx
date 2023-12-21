import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Downbar = () => {
  return (
    <Footer container className="bg-slate-100">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <span className="self-center whitespace-nowrap text-2xl font-extrabold text-[#ff0000]">
              TaskMinder
            </span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#nav" className="hover:text-[#ff0000]">
                  Home
                </Footer.Link>
                <Footer.Link href="#benefit" className="hover:text-[#ff0000]">
                  Discover Benefits
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/Showrov-CoU"
                  className="hover:text-[#ff0000]"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="https://github.com/Showrov-CoU"
                  className="hover:text-[#ff0000]"
                >
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="hover:text-[#ff0000]">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#" className="hover:text-[#ff0000]">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Md. Ashikur Rahman™" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/profile.php?id=100008285349391"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://github.com/Showrov-CoU"
              icon={BsGithub}
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/ashikur-rahman-showrov/"
              icon={BsLinkedin}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Downbar;
