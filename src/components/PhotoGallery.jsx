import { Heart } from "lucide-react";
import { useState } from "react";

const PhotoGalleryComp = () => {
  const [page, setPage] = useState(1);
  const photos = [
    {
      url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      caption: "Our first vacation together",
      date: "June 2023"
    },
    {
      url: "https://images.unsplash.com/photo-1537727365640-d9b9d2bbcba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      caption: "That sunset picnic by the lake",
      date: "August 2023"
    },
    {
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      caption: "Weekend hike to our favorite spot",
      date: "September 2023"
    },
    {
      url: "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      caption: "Dancing in the rain",
      date: "November 2023"
    },
    {
      url: "https://images.unsplash.com/photo-1515890435782-59a5bb6ec191?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      caption: "Winter wonderland",
      date: "January 2024"
    },
    {
      url: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      caption: "Spring flowers for you",
      date: "April 2024"
    },
  ];

  return (
    <section className="love-section" id="gallery">
      <div className="container">
        <div className="flex items-center justify-center gap-2 mb-10">
          <Heart className="text-oker fill-oker/50" size={24} />
          <h2 className="text-3xl md:text-4xl font-serif text-center font-bold text-oker">Favorite memory of each month</h2>
          <Heart className="text-oker fill-oker/50" size={24} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {photos.slice(0, page * 6).map((photo, i) => (
            <div key={i} className="group">
              <div className="polaroid transform hover:rotate-1 group-hover:scale-[1.02]">
                <div className="overflow-hidden rounded">
                  <img 
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-64 object-cover transition-transform duration-500"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-lg font-semibold font-serif text-oker">{photo.caption}</p>
                  <p className="text-sm text-softbrown/70 mt-1">{photo.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {page * 6 < photos.length &&
          <button 
            onClick={() => setPage(page+1)}
            className="bg-oker hover:bg-oker-dark text-white group px-6 py-3 flex items-center duration-75 transition-all ml-auto"
          >
            <span className="font-serif">Load more</span>
          </button>
        }
      </div>
    </section>
  );
}

export default PhotoGalleryComp;