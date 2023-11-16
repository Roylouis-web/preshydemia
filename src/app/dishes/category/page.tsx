'use client';
import { motion } from 'framer-motion';
import Card from "@/app/componenents/Card";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react"
import { getCategory } from '../../../../lib/api';

type State = never[] | Item2;

const Category = () => {
    const category = useSearchParams().get('category') as string;
    const state: State = [];
    const [items, setItems] = useState(state);
    
    useEffect(() => {
        const category2 = localStorage.getItem(category);
        if (category2) {
            const result = JSON.parse(category2) as Item2;
            ((async () => setItems(result))());
        } else {
            ((async () => {
                setItems(await getCategory(category))
            })());

        }
    }, [category]);

    return (
        <motion.div className="mt-8 p-6"
            key="my_key"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            >
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-y-4 gap-x-4 mx-auto w-11/12 sm:w-full">
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
        </motion.div>
    )
}

export default Category