import { useCallback, useState } from "react";

const PhotoModalComp = ({ item, closeAlbum }) => {
  const [i, setI] = useState(0);
  const close = useCallback(() => {
    setI(undefined);
    closeAlbum();
  }, [closeAlbum, setI]);

  return (
    <div className="fixed top-0 left-0 bg-black/50 w-full h-full z-20 flex flex-col justify-center items-center" onClick={close}>
      <h1 className="text-white text-3xl font-bold font-sans">{item.caption}</h1>
      <div className="h-[70vh] w-[80vw] flex justify-center items-center relative gap-4">
        {i !== 0 ?
          <button className="w-24 bg-white font-bold px-2 py-1" onClick={(e) => { e.stopPropagation(); setI(i-1); }}>Vorige</button> :
          <div className="w-24" />
        }
        {item.urls[i] !== undefined &&
          <img
            src={`/assets/photos/${item.urls[i]}`}
            alt={item.caption}
            className="w-full h-full object-contain overflow-hidden rounded-lg"
          />
        }
        {item.urls.length !== i+1 ?
          <button className="w-24 bg-white font-bold px-2 py-1" onClick={(e) => { e.stopPropagation(); setI(i+1); }}>Volgende</button> :
          <div className="w-24" />
        }
      </div>
    </div>
  );
}

export default PhotoModalComp;