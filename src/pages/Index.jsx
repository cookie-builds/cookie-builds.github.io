import FooterComp from "../components/Footer"
import HeaderComp from "../components/Header"
import LoveNotesComp from "../components/LoveNotes"
import PhotoGalleryComp from "../components/PhotoGallery"

const IndexPage = () => {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-white to-cream">
      <div className="mx-auto max-w-screen-lg py-16 md:py-24 relative flex flex-col gap-32">
          <HeaderComp />
          <PhotoGalleryComp />
          <LoveNotesComp />
      </div>
      <FooterComp />
    </div>
  )
}

export default IndexPage