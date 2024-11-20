import React from 'react';

import { AttributeDetail } from './';
interface ItemAttribute {
  name: string;
  image: string;
}
interface ItemDetail {
  name: string;
  material: ItemAttribute;
  style: ItemAttribute;
  price: string;
  button: ItemAttribute;
  sleeve: ItemAttribute;
}
export const ItemDetails = ({ item }: { item: ItemDetail }) => (
  <div className="space-y-4">
    <p className="font-semibold">{item.name}</p>
    <AttributeDetail label="Material" attribute={item.material} />
    <AttributeDetail label="Style" attribute={item.style} />
    <AttributeDetail label="Button" attribute={item.button} />
    <AttributeDetail label="Sleeve" attribute={item.sleeve} />
    <div>
      <p className="text-sm text-gray-500">Price</p>
      <p className="text-primary">{item.price}</p>
    </div>
  </div>
);
