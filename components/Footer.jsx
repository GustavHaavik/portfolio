import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[#0a0a0a] w-full h-auto flex justify-center items-center py-4 mt-10">
      <p className="text-sm text-white font-bold">
        ©{year} Portfolio, af Gustav Haavik.
      </p>
    </div>
  );
}

export default Footer;
