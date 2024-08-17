import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-600 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="font-bold text-xl">CoWorks</h2>
          <p className="text-sm">© 2024 CoWorks. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
