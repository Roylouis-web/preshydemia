import Image from "next/image"
import { promisify } from "util";
import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Filters from "./Filters"
import Card from "./Card";
import { getVegetarian } from "../../../lib/api";


const Veggies = () => {
    const [items, setItems] = useState([]);
    const [perPage, setPerPage] = useState(window.innerWidth <= 648 ? 2 : window.innerWidth <= 1024 ? 4 : 5);

    useEffect(() => {
        const veggies = localStorage.getItem("veggies");
        if (veggies) {
            const result = JSON.parse(veggies);
            ((async () => setItems(result))());
        } else {
            ((async () => {
                setItems(await getVegetarian())
            })());
        }
        const setNumber = () => {
            window.innerWidth <= 648 ? setPerPage(2) : window.innerWidth <= 1024 ? setPerPage(4) : setPerPage(5);
        } 

        window.addEventListener('resize', setNumber);
    
    }, [perPage]);
    

    return (
        <div className="mt-8 p-2">
            <h1 className="dark:text-white text-black lg:text-3xl text-2xl">Our veggie picks</h1>
            <div className="mt-8">
                <Splide options={{ perPage, arrows: false, drag: 'free', gap: 1 }}>
                    {items.map((item) => {
                        return (
                            <SplideSlide key={crypto.randomUUID()}>
                                <Card 
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                />
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </div>
        </div>
    )
}

export default Veggies