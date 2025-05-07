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
          <div className="inline-block bg-oker text-white px-4 py-1 rounded-full text-sm mb-3">Our Love Story</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-oker mb-2">For My Beloved</h1>
          <p className="text-xl md:text-2xl text-softbrown max-w-2xl mx-auto">
            A collection of our most cherished memories and moments together
          </p>
        </div>
      </header>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg md:text-xl text-softbrown">
          I've created this space to celebrate our love and the beautiful journey we're on together.
          Explore our photos, special moments, and the many reasons why my heart belongs to you.
        </p>
      </div>
    </>
  )
}

export default HeaderComp