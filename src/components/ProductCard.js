import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";

function ProductCard({ product }) {
  const greenPrice = product.msrp > product.price && "text-green-600";
  return (
    <Card className="p-3" isHoverable="true">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{product.name}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <div className="fallBack">
          <Image
            isZoomed
            fallbackSrc={require("../assets/no-img.png")}
            alt="Card background"
            className="object-center rounded-xl h-full w-full bg-no-repeat"
            src={product.thumbnailImageUrl}
            width={270}
            height={400}
          />
        </div>
      </CardBody>
      <CardFooter>
        <div className="flex gap-2">
          {product.msrp > product.price && (
            <p className="text-sm uppercase line-through">${product.msrp}</p>
          )}
          <p className={`uppercase font-bold ${greenPrice}`}>
            ${product.price}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
