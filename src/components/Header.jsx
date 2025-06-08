import { Heart } from "lucide-react"

const HeaderComp = () => {
  return (
    <>
      <header className="pt-8 text-center relative">
        <div className="absolute inset-0 flex justify-around opacity-10">
          <Heart size={200} className="text-oker fill-oker/20 animate-float relative top-4" />
          <Heart size={120} className="text-oker fill-oker/20 animate-float relative -top-4" style={{animationDelay: "0.5s"}} />
          <Heart size={150} className="text-oker fill-oker/20 animate-float" style={{animationDelay: "1s"}} />
          <Heart size={200} className="text-oker fill-oker/20 animate-float relative top-8" style={{animationDelay: "1.5s"}} />
        </div>
        
        <div className="container relative z-10">
          <div className="inline-block bg-oker text-white px-4 py-1 rounded-full text-sm mb-3">Ons verhaal</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-oker mb-2">Voor mijn Springduif</h1>
        </div>
      </header>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg md:text-xl text-softbrown">
          Ik heb nog eens een pagina gemaakt om onze mooiste momenten samen te delen.<br />
          Als je eens een mindere dag hebt, kan je hier altijd even komen kijken dat je weet dat ik altijd van je hou.
        </p>
      </div>
    </>
  )
}

export default HeaderComp