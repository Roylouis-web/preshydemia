import Image from "next/image";

const About = () => {
    return (
        <section className="flex flex-col items-center justify-center rounded-t-3xl rounded-b-3xl w-4/5 sm:w-1/2 bg-red-300 p-10 text-black gap-6 mt-20 mb-20 mx-auto grow">
            <Image
                src="/images/IMG_E6431.JPG"
                width={250}
                height={250}
                priority
                alt="My goddess"
                className="rounded-full w-auto h-auto"
            />
            <article className="flex flex-col justify-center items-center gap-6">
                <div className="flex gap-6 justify-center items-center">
                    <p className="text-xl sm:text-2xl animate-bounce inline-block">
                        💙
                    </p>
                    <h1 className=" font-extrabold font-serif text-lg sm:text-2xl">Hey There</h1>
                    <p className="text-xl sm:text-2xl animate-bounce inline-block">
                        💙
                    </p>
                </div>
                <p className="font-semibold
                text-lg sm:text-2xl
                font-extrabold flex justify-center items-center font-mono max-w-[200px] lg:max-w-lg">I&apos;m Precious Uchechi Ndumechi, a medical practitioner from Eastern Nigeria and a huge polymath. My love for learning new things triggered the spearheading of Preshydemia which is an online learning platform that offers recipes of a wide range of dishes from all over the world. Preshydemia seeks to break the barrier between students and free quality learning resources as we ensure that app is absolutely free of charge. Try Preshydemia today and broaden your knowledge in a variety of dishes from all over the world.</p>
            </article>
        </section>
    )
}

export default About;