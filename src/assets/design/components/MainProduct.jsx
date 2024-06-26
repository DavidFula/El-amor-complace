import DetailsProduct from "../products/DetailsProduct"
import SlideProduct from "../products/SlideProduct"

const MainProduct = () => {
    return (
    <>
            <main className="grid grid-cols-1 md:grid-cols-2 gap-8 md:min-h-[calc(100vh-300px)] items-center md:container">
        <SlideProduct />
        <DetailsProduct />
      </main>  
    </>

    )
  
}
export default MainProduct
