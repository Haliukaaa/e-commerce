import React from 'react';

import { Heart, Menu, ShoppingBag, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-3 py-[4px] lg:px-4 lg:py-[5px] bg-white shadow-sm">
      {/* Left side - Menu Button */}
      <div className="flex-1">
        <button
          type="button"
          className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          <Menu size={24} className="stroke-1" />
        </button>
      </div>
      {/* Centered Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="/">
          <Image
            src="https://cdn.suitsupply.com/image/upload/suitsupply/assets/ss23/svg-icons/suitsupply-logo.svg"
            alt="Suitsupply"
            width={0}
            height={0}
            priority
            className="w-[120px] h-[40px]"
          />
        </Link>
      </div>

      {/* Right side - Header Actions */}
      <div className="flex items-center space-x-1 md:space-x-2 lg:space-x-4 pr-1">
        {/* Account */}
        <Link
          href="/account"
          className="text-gray-600 hover:text-gray-900"
          aria-label="Account"
        >
          <User size={24} className="stroke-1 w-5 h-5 md:h-6 md:w-6" />
        </Link>

        {/* Wishlist */}
        <Link
          href="/en-us/wishlist"
          className="text-gray-600 hover:text-gray-900"
          aria-label="Wishlist"
        >
          <Heart size={24} className="stroke-1 w-5 h-5 md:h-6 md:w-6" />
        </Link>

        {/* Shopping Bag */}
        <Link
          href="/en-us/cart"
          className="text-gray-600 hover:text-gray-900"
          aria-label="View bag"
        >
          <ShoppingBag size={24} className="stroke-1 w-5 h-5 md:h-6 md:w-6" />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
