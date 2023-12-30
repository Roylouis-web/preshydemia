'use client';
import { useRouter, useSearchParams } from "next/navigation";

const Filters = () => {
    const router = useRouter();
    const category = useSearchParams().get('category');
    const style = "bg-indigo-600 rounded-full p-3 sm:p-4 flex text-lg lg:text-2xl font-bold";

    const handleClick = (choice: string) => {
        router.push(`/dishes/category?category=${choice}`)
    }

    return (
        <div className="text-white mx-auto max-w-2xl flex justify-evenly mt-36 gap-3">
            <div className={category === "Italian" ? `${style} bg-white  gradient` : style } onClick={() => handleClick("Italian")}>Italian</div>
            <div className={category === "American" ? `${style} bg-white gradient` : style } onClick={() => handleClick("American")}>American</div>
            <div className={category === "Chinese" ? `${style} bg-white gradient` : style } onClick={() => handleClick("Chinese")}>Chinese</div>
        </div>
    );
}

export default Filters