import type { FC } from "react";
import { PhotosGallery } from "@/components/photos/PhotosGallery";
import { publishedPhotos } from "@/features/photos/gallery-data";

/**
 * Photos route — renders the curated Flickr gallery.
 *
 * No props — route shell exists so the router can mount the gallery at
 * `/photos`. Kept separate from `PhotosGallery` so route-level concerns
 * (loaders, layout) don't bleed into the mosaic. `Record<string, never>`
 * instead of `interface Foo {}` because `@typescript-eslint/no-empty-object-type`
 * flags the latter.
 */
export type PhotosProps = Record<string, never>;

export const Photos: FC<PhotosProps> = () => (
  <main>
    <h1 className="px-4 text-3xl font-semibold">Photos</h1>
    <PhotosGallery items={publishedPhotos} />
    <p className="px-4 pt-4 text-xs">
      <a href={publishedPhotos[0].canonicalPageUrl}>View this photo on Flickr.</a>{" "}
      This product uses the Flickr API but is not endorsed or certified by
      SmugMug, Inc.
    </p>
  </main>
);
