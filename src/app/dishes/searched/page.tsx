'use client';
import { motion } from "framer-motion";
import Card from "@/app/componenents/Card";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react"
import { getSearch } from "../../../../lib/api";

type State = never[] | Item2;

const Search = () => {
    const search = useSearchParams().get('search') as string;
    const state: State = [];
    const [items, setItems] = useState(state);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        ((async () => {
            const [data, notFound] = await getSearch(search);
            setItems(data as Item2);
            setNotFound(notFound as boolean);
        })());
    }, [search]);

    const result = items.length > 0 ? (<motion.div className="mt-8 p-6"
    key="my_key"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
    >
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-y-4 gap-x-4 mx-auto w-11/12 sm:w-full mb-32">
            {items.map((item) => {
                return (
                    <Card key={crypto.randomUUID()}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    />
                )
            })}
        </div>
    </motion.div>) : (<h1 style={{color: notFound ? "red": "white", textAlign: "center", padding: "80px"}} className="text-2xl">{notFound ? "Dish not found!": "Loading..."}</h1>)

    return result;
}

export default Search