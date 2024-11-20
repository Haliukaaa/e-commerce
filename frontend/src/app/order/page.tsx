'use client';
import React from 'react';

import { OrderDetailSection, OrderImageSection } from '../components/order/';

export default function OrderPage() {
  return (
    <div className="pt-11 lg:pt-[50px] bg-white">
      <div className="container mx-auto px-4 sm:px-1 lg:pl-32">
        <h1 className="text-2xl mb-6 sm:text-3xl md:text-4xl lg:mb-10 md:mb-8 font-bold text-center text-primary">
          Захиалгын дэлгэрэнгүй
        </h1>
        <div className="w-full flex flex-col lg:justify-end lg:flex-row h-full">
          <OrderImageSection />
          <OrderDetailSection />
        </div>
      </div>
    </div>
  );
}
