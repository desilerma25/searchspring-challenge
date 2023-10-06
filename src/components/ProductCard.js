import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
} from "@nextui-org/react";

function ProductCard({ product }) {
  const greenPrice = product.msrp > product.price && "text-green-600";

  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <div className="flex gap-2">
          {product.msrp > product.price && (
            <p className="text-sm uppercase line-through">${product.msrp}</p>
          )}
          <p className={`uppercase font-bold ${greenPrice}`}>
            ${product.price}
          </p>
        </div>
        <h4 className="font-bold text-large">{product.name}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={product.thumbnailImageUrl}
          width={270}
        />
      </CardBody>
    </Card>
  );
}

export default ProductCard;
