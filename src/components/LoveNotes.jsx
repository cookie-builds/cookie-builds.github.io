import { Heart } from "lucide-react";

const LoveNotesComp = () => {
  const reasons = [
    "Jouw glimlach als je naar mij kijkt",
    "De zelfgemaakte cadeautjes en kaartjes",
    "Viben op de muziek in de auto",
    "Kijken hoe je 10 keer na elkaar dood gaat bij een spelletje",
    "Je bent er voor mij in de moeilijke momenten",
    "Hoe je geïrriteerd kijkt als ik weer eens een slechte mop maak",
    "Wanneer je de zoomies krijgt vlak voor het slapen gaan",
    "De geweldige knuffelsessies",
    "Omdat ik altijd jouw privé-chauffeur mag spelen",
    "Samen koken, zelfs als het soms eens mislukt...",
    "Samen plannen voor de toekomst",
    "Hoe ik altijd uitkijk naar het volgende moment dat we samen zijn",
    "Samen series kijken, ookal doen we er een eeuwigheid over om ze uit te kijken",
    "Hand in hand door de winkelstraat lopen",
  ];

  const index = Math.floor((new Date().getTime() / 1000 / 60 / 60 / 24) % reasons.length); // Get the index based on the current date

  return (
    <section className="love-section py-20" id="reasons">
      <div className="container">
        <div className="flex items-center justify-center gap-2 mb-12">
          <Heart className="text-oker fill-oker/50" size={24} />
          <h2 className="text-3xl md:text-4xl font-serif text-center font-bold text-oker">"Reason why I love you" van de dag</h2>
          <Heart className="text-oker fill-oker/50" size={24} />
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white relative overflow-hidden shadow-lg p-8 md:p-12 border border-oker/10 rounded-lg">
            <Heart size={100} className="absolute right-32 top-2 opacity-10 text-oker fill-oker -rotate-6" />
            <Heart size={100} className="absolute right-4 bottom-2 opacity-10 text-oker fill-oker -rotate-[32deg]" />
            
            <p className="text-softbrown text-xl">{reasons[index]}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveNotesComp;