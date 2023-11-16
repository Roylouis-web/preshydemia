import Image from "next/image";

const About = () => {
    return (
        <section className="flex flex-col items-center justify-center rounded-t-3xl rounded-b-3xl w-4/5 sm:w-1/2 bg-red-300 p-10 mb-32 text-black gap-6 mt-32 mx-auto">
            <Image
                src="/images/IMG_E6431.JPG"
                width={250}
                height={250}
                priority
                alt="My goddess"
                className="rounded-full w-auto h-auto"
            />
            <article className="mt-6 flex flex-col justify-center items-center gap-6">
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
                font-extrabold flex justify-center items-center font-mono">I&apos;m Precious Uchechi Ndumechi, a medical practitioner from Eastern Nigeria and a huge polymath. My love for learning new things triggered the spearheading of Preshydemia which is an online learning platform that covers topics related to a wide range of subjects like Biology, Chemistry, Physics, Geography, Baking and so much more. Preshydemia seeks to break the barrier between students and free quality learning resources as we ensure that all courses offered are absolutely free of charge. Try Preshydemia today and broaden your knowledge in a variety of fields.</p>
            </article>
        </section>
    )
}

export default About;