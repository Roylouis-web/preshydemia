import Image from "next/image"
import Link from "next/link"

const Home = () => {
    return (
        <main className="flex flex-col items-center justify-center p-4 dark:text-white">
            <section className="p-6">
                <h1 className="text-2xl sm:text-4xl mb-10">A Free Online Learning Platform</h1>
                <article>
                    <p className="text-lg bg-slate-950 p-10 rounded-xl hover:bg-opacity-80 sm:text-3xl flex justify-center items-center font-mono p-8 ">Used by students all over the world to broaden their knowledge in the field of catering.</p>
                </article>
            </section>

            <section className="p-6">
                <h1 className="text-2xl sm:text-4xl mb-5">What does Preshydemia offer?</h1>
                <div className="flex flex-col gap-6 items-center justify-center sm:grid sm:grid-cols-2 sm:gap-x-10">
                    <figure>
                        <Image
                            src="/images/Exam-Success.jpg"
                            height={250}
                            width={250}
                            priority
                            alt="Exam Success"
                            className="rounded-xl hover:opacity-50 w-auto h-auto"
                        />
                        <figcaption>
                            <p className="text-2xl sm:text-3xl
                             ">Exam Success</p>
                        </figcaption>
                    </figure>
                    <figure>
                        <Image
                            src="/images/free.webp"
                            height={250}
                            width={250}
                            priority
                            alt="Free to use"
                            className="rounded-xl hover:opacity-50 w-auto h-auto"
                        />
                        <figcaption className="text-2xl sm:text-3xl">
                            Free Services
                        </figcaption>
                    </figure>
                    <figure>
                        <Image
                            src="/images/increased-knowledge.png"
                            height={250}
                            width={250}
                            priority
                            alt="Increased Knowledge"
                            className="rounded-xl hover:opacity-50 w-auto h-auto"
                        />
                        <figcaption className="text-2xl sm:text-3xl">
                            Increased Knowledge
                        </figcaption>
                    </figure>
                </div>
            </section>
            <Link href="/dishes"
                className="text-2xl text-white bg-purple-800 p-6 rounded-t-lg rounded-b-lg hover:opacity-50 sm:w-60 text-center mt-10 mb-6"
            >
                Get Started
            </Link>
        </main>
    )
}

export default Home