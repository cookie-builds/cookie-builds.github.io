import { Heart } from "lucide-react";
import { useCallback, useState } from "react";
import importPhotos from "../../public/assets/photos";
import PhotoModalComp from "./PhotoModal";

const PhotoGalleryComp = () => {
  const [page, setPage] = useState(1);
  const [opened, setOpened] = useState(undefined);

  const amountShown = 6;

  const photos = importPhotos;

  const openAlbum = useCallback(i => {
    setOpened(i);
  }, [setOpened]);
  const closeAlbum = useCallback(() => {
    setOpened(undefined);
  }, [setOpened]);

  return (
    <section className="love-section" id="gallery">
      {opened !== undefined && (
        <PhotoModalComp item={photos[opened]} closeAlbum={closeAlbum} />
      )}
      <div className="container">
        <div className="flex items-center justify-center gap-2 mb-10">
          <Heart className="text-oker fill-oker/50" size={24} />
          <h2 className="text-3xl md:text-4xl font-serif text-center font-bold text-oker">Favoriete momentjes</h2>
          <Heart className="text-oker fill-oker/50" size={24} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {photos.slice(0, page * amountShown).map((photo, i) => (
            <a key={i} className="group cursor-pointer" onClick={() => openAlbum(i)}>
              <div className="polaroid transform hover:rotate-1 group-hover:scale-[1.02] select-none">
                <div className="overflow-hidden rounded">
                  <img 
                    src={`/assets/photos/${photo.urls[0]}`}
                    alt={photo.caption}
                    className={`w-full h-64 group-hover:scale-[1.05] object-cover transition duration-500`}
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-lg font-semibold font-serif text-oker">{photo.caption}</p>
                  <p className="text-sm text-softbrown/70 mt-1">{photo.date}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        {page * amountShown < photos.length &&
          <button 
            onClick={() => setPage(page+1)}
            className="bg-oker hover:bg-oker-dark text-white group px-6 py-3 flex items-center duration-75 transition-all ml-auto"
          >
            <span className="font-serif">Nog meer</span>
          </button>
        }
      </div>
    </section>
  );
}

export default PhotoGalleryComp;