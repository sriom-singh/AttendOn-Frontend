import React from "react";

const Footer = () => {
  return (
    <div className="pt-16 pb-12 px-12 border-top-[1px solid rgba(255,255,255,0.06)] bg-primary/10">
      <footer className="w-full">
        <div className="grid  lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-12">
          <div className="flex flex-col w-2/3 gap-4 justify-start items-start">
            <div>
              <h1 className="flex items-center leading-4  font-medium font-sans-serif text-xl  gap-x-0.5 text-foreground no-underline">
                Attend<span className="text-primary font-medium">ON</span>
              </h1>
            </div>
            <p className="text-xs text-muted-foreground ">
              Modern attendance management built for India's growing workforce.
              Reliable, simple, secure.
            </p>
            <div className="flex items-center gap-4 ">
              <div className="f-soc">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 13 13"
                  fill="none"
                  stroke="#5B5BD6"
                  strokeWidth="1.3"
                >
                  <path d="M1 1l11 11M1 12h4V8L1 4" />
                  <path d="M12 1H8l4 4" />
                </svg>
              </div>
              <div className="cursor-pointer">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 13 13"
                  fill="none"
                  stroke="#5B5BD6"
                  strokeWidth="1.3"
                >
                  <rect x="2" y="2" width="9" height="9" rx="2.5" />
                  <circle cx="6.5" cy="6.5" r="2" />
                  <circle cx="9.5" cy="3.5" r="0.6" fill="#565970" />
                </svg>
              </div>
              <div className="f-soc">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 13 13"
                  fill="none"
                  stroke="#5B5BD6"
                  strokeWidth="1.3"
                >
                  <path d="M1 3.5h11L6.5 8 1 3.5z" />
                  <path d="M1 3.5v7h11v-7" />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 justify-center items-center text-xs ">
            <div className="font-sans-serif text-sm">Product</div>
            <a className="text-muted-foreground">Features</a>
            <a className="text-muted-foreground">Pricing</a>
            <a className="text-muted-foreground">Changelog</a>
            <a className="text-muted-foreground">API docs</a>
            <a className="text-muted-foreground">Roadmap</a>
          </div>
          <div className="grid grid-cols-1 gap-2 text-xs">
            <div className="font-sans-serif text-sm">Company</div>
            <a className="text-muted-foreground">About</a>
            <a className="text-muted-foreground">Careers</a>
            <a className="text-muted-foreground">Blog</a>
            <a className="text-muted-foreground">Press</a>
            <a className="text-muted-foreground">Contact</a>
          </div>
          <div className="grid grid-cols-1 gap-2 text-xs">
            <div className="font-sans-serif text-sm">Support</div>
            <a className="text-muted-foreground">Help centre</a>
            <a className="text-muted-foreground">Documentation</a>
            <a className="text-muted-foreground">Community</a>
            <a className="text-muted-foreground">Status</a>
            <a className="text-muted-foreground">Security</a>
          </div>
        </div>
        <div className="border-t-[0.7px] border-muted-foreground/20 mt-10 pt-10 flex justify-between items-center text-xs text-muted-foreground/40">
          <div className="f-copy">
            © 2026 AttendIQ Technologies Pvt. Ltd. All rights reserved.
          </div>
          <div className=" flex items-center gap-4">
            <span className="f-btm-lnk">Privacy</span>
            <span className="f-btm-lnk">Terms</span>
            <span className="f-btm-lnk">Cookies</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
