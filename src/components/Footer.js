import React from 'react';

const Footer = () => {

  return (
    <footer className="bg-[#0f172a] pb-5 text-white">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Abhishek Shivade. <br></br> All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;