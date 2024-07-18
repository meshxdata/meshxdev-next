export default function Footer() {
    return (
      <footer className="bg-slate-100" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="border-t-2 border-gray-200 -mt-10 mb-10"></div>
          <div className="xl:grid xl:grid-cols-3 xl:gap-8 ">
            <div className="space-y-2">
              <img
                onClick={() => {
                  window.location.href = "/";
                }}
                src="/meshx_logo.svg"
                alt="Logo"
                className="flex w-24 h-4 md:w-24 md:h-4 justify-items-center md:justify-start cursor-pointer"
              />
              <p className="text-sm leading-6 text-[#171819] text-opacity-60	">
                © 2024 MeshX Saudi Arabia Co.
              </p>
              <p className="text-sm leading-6 text-[#171819] text-opacity-60	">
                All rights reserved
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0 font-inter">
              <div className="md:grid md:grid-cols-2 md:gap-16">
                <div>
                  <ul role="list" className="space-y-1">
                    <li>
                      <a
                        href="/about"
                        className="text-xs leading-6  text-[#FF6000] hover:text-white underline"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/careers"
                        className="text-xs  leading-6  text-[#FF6000] hover:text-white underline"
                      >
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contact"
                        className="text-xs  leading-6  text-[#FF6000] hover:text-white underline"
                      >
                        Contact us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <ul role="list" className="space-y-1">
                    <li>
                      <a
                        href="/cookies"
                        className="text-xs leading-6  text-[#FF6000] hover:text-white underline"
                      >
                        Cookies Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/privacy"
                        className="text-xs leading-6  text-[#FF6000] hover:text-white underline"
                      >
                        Privacy Notice
                      </a>
                    </li>
                    <li>
                      <a
                        href="/terms"
                        className="text-xs leading-6  text-[#FF6000] hover:text-white underline"
                      >
                        Terms of Use
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-40"></div>
        </div>
      </footer>
    );
  }
  