"use client";
import Image from "next/image";


export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between lg:h-24 h-16 border-b-2 lg:p-8 p-4 border-slate-100">
      <div className="relative aspect-[254/45] lg:min-w-48 min-w-28">
        <Image 
          src="/logo.png" 
          alt="logo" 
          fill 
          className="absolute object-contain"
        />
      </div>
      
      <button className="flex items-center gap-2.5 bg-white rounded-sm pl-2 pr-4 py-1.5 shadow-md hover:shadow-md transition-shadow">
        {/* Profile Image */}
        <div className="relative w-8 h-8 rounded-full overflow-hidden">
          <Image
            src="/profile.jpeg"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Name */}
        <span className="text-gray-900 text-sm font-bold">
          Rahil Siddique
        </span>
      </button>
    </header>
  );
};

export default Header;
