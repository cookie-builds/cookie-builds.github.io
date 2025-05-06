import { Heart } from "lucide-react";

const LoveNotesComp = () => {
  const reasons = [
    "Your smile brightens even my darkest days",
    "You know exactly how to make me laugh when I need it most",
    "Your passion for the things you love inspires me",
    "The way you care for others with such kindness",
    "How you always believe in me, even when I don't believe in myself",
    "Your intelligence and how you see the world differently",
    "The little notes you leave for me to find",
    "How beautiful you look first thing in the morning",
    "The way your hand fits perfectly in mine",
    "Your determination to follow your dreams",
    "How you're my best friend and partner all in one"
  ];

  return (
    <section className="love-section py-20" id="reasons">
      <div className="container">
        <div className="flex items-center justify-center gap-2 mb-12">
          <Heart className="text-oker fill-oker/50" size={24} />
          <h2 className="text-3xl md:text-4xl font-serif text-center font-bold text-oker">Reasons Why I Love You</h2>
          <Heart className="text-oker fill-oker/50" size={24} />
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white relative overflow-hidden shadow-lg p-8 md:p-12 border border-oker/10 rounded-lg">
            <div className="absolute -right-8 -top-4 opacity-10">
              <Heart size={200} className="text-oker fill-oker" />
            </div>
            
            <ul className="space-y-4 relative z-10">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-center gap-3" style={{animationDelay: `${index * 0.1}s`}}>
                  <Heart size={12} className="text-oker fill-oker mt-1 flex-shrink-0" />
                  <p className="text-softbrown">{reason}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveNotesComp;