import { FC } from "react";

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
      src={src}
      style={{ width: width ?? "100%", height: height ?? "100%" }}
      alt=""
    />
    // <Image
    //   unoptimized
    //   layout={layout ?? "fill"}
    //   width={width ?? "100%"}
    //   height={height ?? "100%"}
    //   placeholder="blur"
    //   src={src}
    //   alt={alt ?? ""}
    //   objectFit={objectFit ?? "cover"}
    //   blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMT0iYCQAEHwHCrSm2UwAAAABJRU5ErkJggg=="
    // />
  );
};

export default LazyLoadImage;
