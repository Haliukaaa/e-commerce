'use client';
import React from 'react';

import { useSearchParams } from 'next/navigation';

export default function OrderPage() {
  const searchParams = useSearchParams();

  const orderDetails = {
    styleId: searchParams.get('styleId'),
    styleName: searchParams.get('styleName'),
    materialId: searchParams.get('materialId'),
    materialName: searchParams.get('materialName'),
    price: searchParams.get('price'),
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Your Order Details</h1>
      <div className="space-y-4">
        <div>
          <h2 className="font-medium">Selected Style:</h2>
          <p>{orderDetails.styleName}</p>
        </div>
        <div>
          <h2 className="font-medium">Selected Material:</h2>
          <p>{orderDetails.materialName}</p>
        </div>
        <div>
          <h2 className="font-medium">Price:</h2>
          <p>{orderDetails.price}</p>
        </div>
      </div>
    </div>
  );
}
