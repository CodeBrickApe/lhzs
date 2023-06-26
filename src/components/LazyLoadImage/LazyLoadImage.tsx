import { FC } from "react";
import Image from "next/image";

type ImgElementStyle = NonNullable<JSX.IntrinsicElements["img"]["style"]>;

export interface Props {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  layout?: "fill" | "fixed" | "intrinsic" | "responsive" | undefined;
  objectFit?: ImgElementStyle["objectFit"];
}

const LazyLoadImage: FC<Props> = ({
  src,
  alt,
  width,
  height,
  layout,
  objectFit,
}) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      width={width ?? "100%"}
      height={height ?? "100%"}
      placeholder="blur"
      src={src}
      alt={alt ?? ""}
    />
  );
};

export default LazyLoadImage;
