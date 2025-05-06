import { HeartHandshake } from "lucide-react";

const FooterComp = () => {
  return (
    <footer className="py-10 bg-oker text-white text-center">
      <div className="container">
        <HeartHandshake size={32} className="mx-auto mb-4" />
        <p className="font-serif text-xl mb-2">Forever & Always</p>
        <p className="opacity-80 text-sm">Made with love for the love of my life</p>
      </div>
    </footer>
  );
};

export default FooterComp;