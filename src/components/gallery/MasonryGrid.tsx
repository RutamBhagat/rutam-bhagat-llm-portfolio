"use client";

import Masonry from "react-masonry-css";
import { SmartImage } from "@/once-ui/components";
import styles from "./Gallery.module.scss";
import { useTranslations } from "next-intl";
import { renderContent } from "@/app/resources";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Key } from "react";

export default function MasonryGrid() {
  const breakpointColumnsObj = {
    default: 4,
    1440: 3,
    1024: 2,
    560: 1,
  };

  const t = useTranslations();
  const { gallery } = renderContent(t);

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid}
      columnClassName={styles.masonryGridColumn}
    >
      {gallery.images.map(
        (
          image: {
            orientation: string;
            src: (string | StaticImport) & string;
            alt: string;
          },
          index: Key | null | undefined
        ) => (
          <SmartImage
            key={index}
            radius="m"
            aspectRatio={
              image.orientation === "horizontal" ? "16 / 9" : "9 / 16"
            }
            src={image.src}
            alt={image.alt}
            className={styles.gridItem}
          />
        )
      )}
    </Masonry>
  );
}
