import Link from "next/link";
import Image from "next/image"

interface Color {
    id: number;
    image: string;
    title: string;
}

const Card = ({ id, image, title }: Color) => {
    return (
        <Link href={`/dishes/dish?id=${id}`}>
            <Image 
            src={image}
            width={250}
            height={250}
            priority
            alt="Items"
            className="w-32 h-32 text-white lg:w-56 lg:h-56 lg:text-2xl text-xl rounded-xl relative">
            </Image>
            <p className=" dark:text-white text-black top-3/4 sm:text-xl text-lg max-w-[250px] p-2">{ title }</p>
        </Link>
    )
}

export default Card