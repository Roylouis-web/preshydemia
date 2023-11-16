import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Filters from "../componenents/Filters"
import Card from "../componenents/Card";
import { getTrending } from "../../../lib/api";

type State = never[] | Item[];

const Trending = () => {
    const state: State = [];
    const [items, setItems] = useState(state);
    const [perPage, setPerPage] = useState(window.innerWidth <= 648 ? 2 : window.innerWidth <= 1024 ? 4 : 5);

    useEffect(() => {
        const trending = localStorage.getItem("trending");
        if (trending) {
            const result = JSON.parse(trending) as Item[];
            ((async () => setItems(result))());
        } else {
            ((async () => {
                setItems(await getTrending())
            })());

        }
        const setNumber = () => {
            window.innerWidth <= 648 ? setPerPage(2) : window.innerWidth <= 1024 ? setPerPage(4) : setPerPage(5);
        } 

        window.addEventListener('resize', setNumber);
    
    }, [window.innerWidth]);
    

    return (
        <div className="mt-8 p-2">
            <h1 className="text-white lg:text-3xl text-2xl">Trending</h1>
            <div className="mt-8">
                <Splide options={{ perPage, pagination: false, arrows: false, drag: 'free', gap: 0 }}>
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

export default Trending