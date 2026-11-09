import Image from "next/image";

const galleryItems = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Modern home exterior with large windows",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Clean residential exterior and landscaping",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Contemporary home facade detail",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Bright home exterior ready for cleaning presentation",
  },
];

export function Gallery() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            Exterior Details Worth Showing Off
          </h2>
          <p className="mt-4 text-muted">
            Photography placeholders for future project images. Real completed-project
            photos can replace these once supplied by the team.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <div
              key={item.src}
              className={`relative overflow-hidden rounded-[1.5rem] ${
                index % 2 === 0 ? "min-h-64" : "min-h-72"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
