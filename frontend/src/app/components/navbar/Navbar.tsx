import React from 'react';

import { Heart, Menu, ShoppingBag, User } from 'lucide-react'; // Using Lucide for icons
import Image from 'next/image';
import Link from 'next/link';

export const Navbar: React.FC = () => {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between 
                 px-4 py-[5px] bg-white shadow-sm md:px-6 lg:px-8"
      data-testid="header"
    >
      {/* Mobile Menu Toggle */}
      <button
        type="button"
        className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
        aria-label="Toggle Menu"
        data-testid="button_header_menu"
      >
        <Menu size={24} />
      </button>

      {/* Logo */}
      <Link href="/en-us" className="mx-auto" data-testid="link_header_logo">
        <Image
          src="https://cdn.suitsupply.com/image/upload/suitsupply/assets/ss23/svg-icons/suitsupply-logo.svg"
          alt="Suitsupply"
          width={120}
          height={40}
          priority
        />
      </Link>

      {/* Header Actions */}
      <div className="flex items-center space-x-4">
        {/* Account */}
        <Link
          href="/en-us/account"
          className="text-gray-600 hover:text-gray-900"
          data-testid="link_header-account"
          aria-label="Account"
        >
          <User size={24} />
        </Link>

        {/* Wishlist */}
        <Link
          href="/en-us/wishlist"
          className="text-gray-600 hover:text-gray-900"
          data-testid="link_header-wishlist"
          aria-label="Wishlist"
        >
          <Heart size={24} />
        </Link>

        {/* Shopping Bag */}
        <Link
          href="/en-us/cart"
          className="text-gray-600 hover:text-gray-900"
          data-testid="link_header-minicart"
          aria-label="View bag"
        >
          <ShoppingBag size={24} />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
