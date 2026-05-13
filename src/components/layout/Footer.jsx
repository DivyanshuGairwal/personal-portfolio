import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-dark-text text-sm">
          © {new Date().getFullYear()} Divyanshu Gairwal. All rights reserved.
        </p>
        <div className="flex items-center gap-2 text-sm text-dark-text">
          <span>Built with</span>
          <span className="text-white font-medium">React</span>
          <span>&</span>
          <span className="text-primary-500 font-medium">Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
