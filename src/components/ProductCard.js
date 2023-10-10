import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Skeleton,
} from "@nextui-org/react";
import { useSearchContext } from "../contexts/SearchContext";

function ProductCard({ product }) {
  const { loading } = useSearchContext();

  const greenPrice = product.msrp > product.price && "text-green-600";

  return (
    <Card className="p-3">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="text-xl leading-6 p-2">{product.name}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Skeleton isLoaded={!loading}>
          <Image
            isZoomed
            fallbackSrc={require("../assets/no-img-avail.png")}
            alt={product.description}
            className="object-center rounded-xl text-center h-auto w-full"
            src={product.thumbnailImageUrl}
            width={267}
            height={400}
          />
        </Skeleton>
      </CardBody>
      <CardFooter>
        <div className="flex gap-2  text-2xl">
          {product.msrp > product.price && (
            <p className="uppercase line-through text-lg">${product.msrp}</p>
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
