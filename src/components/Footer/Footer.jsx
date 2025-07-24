import React from 'react';
import logo from '/src/assets/ath_logo.png'; // check if the image path is correct
import athFooter from '/src/assets/ath_footer.png'; // check this image exists

const footerSections = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '#' },
      { name: 'Watch Demo', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Partners', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  },
];

const socialIcons = [
  {
    name: 'X',
    href: '#',
    icon: (
      <svg className="w-6 h-6 mt-3" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-6 h-6 mt-3" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.161 0-3.523.012-4.75.07-2.73.124-3.958 1.348-4.082 4.082-.058 1.226-.069 1.588-.069 4.75s.011 3.524.069 4.75c.124 2.734 1.352 3.958 4.082 4.082 1.227.058 1.589.069 4.75.069s3.523-.011 4.75-.069c2.73-.124 3.958-1.348 4.082-4.082.058-1.226.069-1.588.069-4.75s-.011-3.524-.069-4.75c-.124-2.734-1.352-3.958-4.082-4.082-1.227-.058-1.589-.069-4.75-.069zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 1.441a2.31 2.31 0 110 4.62 2.31 2.31 0 010-4.62zM18.336 4.99a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="w-6 h-6 mt-3" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.125 2.062 2.062 0 010 4.125zm1.777 13.019H3.56V9h3.554z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg className="w-6 h-6 mt-3" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21.582 7.373c-.227-.84-.883-1.497-1.723-1.724C18.39 5.25 12 5.25 12 5.25s-6.39 0-7.859.399c-.84.227-1.496.884-1.723 1.724C2.021 8.84 2 12 2 12s.021 3.16.418 4.627c.227.84.883 1.497 1.723 1.724C5.61 18.75 12 18.75 12 18.75s6.39 0 7.859-.399c.84-.227 1.496.884 1.723-1.724C21.979 15.16 22 12 22 12s-.021-3.16-.418-4.627zM9.75 14.85V9.15l5.19 2.85z" />
      </svg>
    ),
  },
];

function Footer() {
  return (
    <footer className="bg-[#252525] text-gray-300 overflow-x-hidden">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">

          {/* Logo and description */}
          <div className="lg:col-span-2 flex flex-col mt-10 -ml-25 items-start text-left">
            <a href="#" className="flex items-center space-x-2">
              <img src={logo} alt="ATH Logo" className="h-11 w-auto" />
              <span className="text-4xl font-bold -ml-2" style={{ color: '#d00505' }}>thlyn</span>
            </a>
            <p className="mt-5 text-sm  max-w-xs">
              Empowering athletes to reach their full potential through AI-driven insights and community support.
            </p>
            <div className="mt-7 flex space-x-6">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer navigation links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-base text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer background image */}
      <div className="relative -mt-7 h-72 w-full ml-68 overflow-hidden">
        <img
          src={athFooter}
          alt="Athlyn Footer Logo"
          className="absolute bottom-0 right-0 opacity-10 w-full h-full object-contain"
        />
      </div>

      {/* Copyright */}
      <div className="py-6 px-4 text-left ml-8">
        <p className="text-md text-gray-400">
          © 2025 <span className="text-grey">Athlyn</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
