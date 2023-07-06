import Image, { StaticImageData } from "next/image";

const ProductFilter = ({
  img,
  name,
}: {
  img: StaticImageData;
  name: string;
}) => {
  return (
    <div className="product-filter w-32 sm:w-44">
      <Image className="rounded-lg" src={img} alt={name} />
      <div className="rounded-lg">
        <span>{name}</span>
      </div>
    </div>
  );
};
export default ProductFilter