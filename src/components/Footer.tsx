export const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-transparent">
      <div className="w-full flex justify-between items-start pb-20 flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <span className="text-xl font-bold tracking-wide text-white uppercase">
              Mohit Saini
            </span>
          </a>
          <div className="mt-4 lg:max-w-sm">
            <p className="text-sm text-white/54" style={{fontSize: '14px'}}>
              Passionate full-stack developer specializing in creating innovative web solutions that drive business growth. I transform complex ideas into user-friendly applications using cutting-edge technologies.
            </p>
            <p className="mt-4 text-sm text-white/54" style={{fontSize: '14px'}}>
              Ready to bring your vision to life? Let's collaborate and build something extraordinary together.
            </p>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
          <div>
            <p className="font-semibold tracking-wide text-white" style={{fontSize: '14px'}}>
              Navigation
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className="text-white/54 transition-colors duration-300 hover:text-white"
                  style={{fontSize: '14px'}}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-white/54 transition-colors duration-300 hover:text-white"
                  style={{fontSize: '14px'}}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/work"
                  className="text-white/54 transition-colors duration-300 hover:text-white"
                  style={{fontSize: '14px'}}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-white/54 transition-colors duration-300 hover:text-white"
                  style={{fontSize: '14px'}}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <p className="font-semibold tracking-wide text-white" style={{fontSize: '14px'}}>Social</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/mohitsainidev/"
                  className="text-white/54 transition-colors duration-300 hover:text-white"
                  style={{fontSize: '14px'}}
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/mohit.saini.dev/"
                  className="text-white/54 transition-colors duration-300 hover:text-white"
                  style={{fontSize: '14px'}}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://leetcode.com/u/MohitSainiDev/"
                  className="text-white/54 transition-colors duration-300 hover:text-white"
                  style={{fontSize: '14px'}}
                >
                  Leetcode
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/MSaini-Dev"
                  className="text-white/54 transition-colors duration-300 hover:text-white"
                  style={{fontSize: '14px'}}
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
          
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-semibold tracking-wide text-white" style={{fontSize: '14px'}}>Connect</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="tel:+919982230201"
                  className="text-white/54 transition-colors duration-300 hover:text-white"
                  style={{fontSize: '14px'}}
                >
                  (+91) 9982230201
                </a>
              </li>
              <li>
                <a
                  href="mailto:m.saini.dev@gmail.com"
                  className="text-white/54 transition-colors duration-300 hover:text-white break-all"
                  style={{fontSize: '14px'}}
                >
                  m.saini.dev@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between items-center pt-5 pb-10 border-t border-white/20 gap-4">
        <p className="text-white/56 text-center sm:text-left" style={{fontSize: '14px'}}>
          © Copyright 2020 Lorem Inc. All rights reserved.
        </p>
        <p className="text-white/56 flex items-center text-center sm:text-right" style={{fontSize: '14px'}}>
          Designed and Developed with ❤️ by Mohit Saini
        </p>
      </div>
    </div>
  );
};

export default Footer;