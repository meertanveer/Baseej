import Image from 'next/image';
import React from 'react';
import ico from '../../public/images/ico.jpg';

function Header() {
  return (
    <div className="bg-slate-900 h-10 gap-24 flex items-center pl-6">
      <div>
        <Image
          src={ico}
          alt="ico"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <div className="text-green-400">
        <h2 className="text-2xl font-bold font-serif">Baseej</h2>
      </div>
    </div>
  );
}

export default Header;
