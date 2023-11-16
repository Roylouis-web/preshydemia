'use client';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useSearchParams } from "next/navigation";
import Image from 'next/image';
import { getDish } from '../../../../lib/api';

const Dish = () => {
    const id = useSearchParams().get('id') as string;
    const [choice, setChoice] = useState("instructions")
    const buttonStyle = "bg-grey bg-slate-500 p-2 sm:text-xl lg:text-2xl"
    // const paragraphStyle = "text-white sm:text-2xl"
    const state = {} as Item
    const [item, setItem] = useState<Item>(state);

    useEffect(() => {
        ((async () => setItem(await getDish(id)))());
    }, [id])


    return <div className="flex mt-12 sm:pl-6 lg:mb-32 pb-10 place-content-center sm:gap-6 lg:gap-24">
        <div className='pl-2'>
            <Image
                src={item.image}
                width={500}
                height={500}
                priority
                alt="Items"
                className="w-32 h-32 text-white lg:w-56 lg:h-56 lg:text-2xl text-xl rounded-xl relative">
            </Image>
            <p className=" text-white top-3/4 sm:text-xl text-lg max-w-[180px]">{item.title}</p>
        </div>
        <div>
            <div className="text-white flex mb-5 sm:gap-6 p-2">
                <button className={choice === "instructions" ? `${buttonStyle} gradient` : buttonStyle} onClick={() => setChoice("instructions")}>Instructions</button>
                <button className={choice === "ingredients" ? `${buttonStyle} gradient` : buttonStyle} onClick={() => setChoice("ingredients")}>Ingredients</button>
            </div>
            {choice === "instructions" ? (
                <div className='text-white max-w-[180px] lg:text-2xl lg:max-w-4xl p-2'>
                    <h3 dangerouslySetInnerHTML={{ __html: item.summary }}></h3>
                    <h3 dangerouslySetInnerHTML={{ __html: item.instructions }}></h3>
                </div>
            ) : (<ul className='max-w-[180px] lg:text-2xl lg:max-w-4xl p-2'>
                {item.extendedIngredients.map((ingredient) => {
                    return (
                        <li key={ingredient.id} className='text-white'>{ingredient.original}</li>
                    );
                })}
            </ul>)}
        </div>
    </div>
}

export default Dish