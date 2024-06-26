import PrevIcon from '../icons/PrevIcon';
import NexIcon from '../icons/NexIcon';

import imgProductoBig1 from '../images/producto1.2.jpg'; 
import imgProductoBig2 from '../images/producto1.jpg';
import imgProductoBig3 from '../images/producto3.jpg';
import imgProductoBig4 from '../images/producto3.1.jpg';

import imgProducto1 from '../images/producto1.2.jpg';
import imgProducto2 from '../images/producto1.jpg';
import imgProducto3 from '../images/producto3.jpg';
import imgProducto4 from '../images/producto3.1.jpg'; 
import { useState } from 'react';

const ARRAY_IMGS = [imgProductoBig1, imgProductoBig2, imgProductoBig3, imgProductoBig4]


export default () => {

    const [index, setIndex] = useState(0);

    const handleClickNext = () => {
        if (index === ARRAY_IMGS.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };
    
    const handleClickPrev = () => {
        if (index === 0) {
            setIndex(ARRAY_IMGS.length - 1);
        } else {
            setIndex(index - 1);
        }
    };
    
    const handleThumbnailClick = (thumbIndex) => {
        setIndex(thumbIndex);
    };
    
    return (
        <section className="grid md:grid-cols-4 md:gap-4">
            <div className='relative col-span-4 md:ml-2'>
                <img src={ARRAY_IMGS[index]} alt="" className='aspect-[16/13] w-full md:aspect-[16/18] md:rounded-md' />
                <div className='absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4'>
                    <button className="grid h-10 w-10 place-items-center rounded-full bg-white" onClick={handleClickPrev}>
                        <PrevIcon />
                    </button>
                    <button className="grid h-10 w-10 place-items-center rounded-full bg-white" onClick={handleClickNext}>
                        <NexIcon />
                    </button>
                </div>
            </div>
    
            {/* Miniaturas que deben mostrarse solo en pantallas grandes */}
            <img src={imgProducto1} alt="" className="cursor-pointer hidden md:block md:rounded-md" onClick={() => handleThumbnailClick(0)} />
            <img src={imgProducto2} alt="" className="cursor-pointer hidden md:block md:rounded-md" onClick={() => handleThumbnailClick(1)} />
            <img src={imgProducto3} alt="" className="cursor-pointer hidden md:block md:rounded-md" onClick={() => handleThumbnailClick(2)} />
            <img src={imgProducto4} alt="" className="cursor-pointer hidden md:block md:rounded-md" onClick={() => handleThumbnailClick(3)} />
        </section>
    );
    
    
  
}
