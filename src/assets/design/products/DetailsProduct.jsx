import { CartIcon } from "../icons/CartIcon"
export default () => {
    return (
        <section className="container mx-auto px-4 md:px-0 ml-1">
          <p className="mb-4 font-bold text-red-800 uppercase" >El amor complace website</p>
          <h2 className="font-bold text-3xl mb-6">Conjunto Virginia Negro</h2>
          <p className="text-gray-700 mb-4"> 
          Reservada pero sensual.

Un conjunto que deja mucho a la imaginación, pero que te permitirá cruzar esa pequeña línea de lo reservado a lo atrevido. 

Características:

Material: 89% NYLON 11 % ELASTANE
Talla: Única
Color: Negro
Incluye: Top y panty
          </p>
          <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-1  ">
            <span className="text-2">$65.000 COP</span>
            <span className="bg-orange-200 rounded-md mr-auto py-1  text-orange-500">-50%</span>
            <span className="text-right line-through text-gray-600 md:col-span-3 md:text-left">$130.000 COP</span>
          </div>
          <div className="grid grid-cols-3 font-bold gap-4 " >
            <div className="col-span-3 bg-gray-300  flex items-center justify-between pb-3 py-2 px-5">
              <button className="text-3xl text-orange-500">-</button>
              <span className="text-xl text-black-500">0</span>
              <button className="text-3xl text-orange-500">+</button>
           </div>  
           <button className="col-span-3 bg-orange-400 py-3 text-white rounded-md flex items-center justify-center gap-x-3 hover:bg-orange-700 transition-all" >
           <CartIcon fill="#ffff" className="fill-white"/>
            <span>Add to cart </span>
           </button>

          </div>

        </section>

    )
  
}

