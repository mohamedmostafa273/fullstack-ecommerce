import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { ProductsType } from "@/types";

const ProductCard = ({ product }: { product: ProductsType }) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      {/* IMAGE */}
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-2/3">
          <Image
            src={product.images[product.colors[0]]}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-all duration-300"
          />
        </div>
      </Link>

      {/* DETAILS */}
      <div className="flex flex-col gap-3 p-4">
        {/* NAME */}
        <h2 className="text-lg font-medium">{product.name}</h2>

        {/* SHORT DESCRIPTION */}
        <p className="text-sm text-gray-500">
          {product.shortDescription}
        </p>

        {/* SIZE + COLOR */}
        <div className="flex items-center gap-4 text-sm">
          {/* SIZE */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Size</span>
            <select
              name="size"
              className="ring-1 ring-gray-300 rounded-md px-2 py-1"
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          {/* COLORS */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Color</span>
            <div className="flex items-center gap-2">
              {product.colors.map((color) => (
                <div
                  key={color}
                  className="w-4 h-4 rounded-full cursor-pointer ring-1 ring-gray-300"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* PRICE + BUTTON */}
        <div className="flex items-center justify-between mt-2">
          <p className="font-medium">
            ${product.price.toFixed(2)}
          </p>

          <button className="flex items-center gap-2 ring-1 ring-gray-300 rounded-md px-3 py-1 text-sm cursor-pointer shadow-lg hover:bg-black hover:text-white transition-all duration-300">
            <ShoppingCart size={16} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;