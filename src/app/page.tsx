import Link from "next/link"

const Home = () => {
    return (
        <main className="flex flex-col items-center justify-center p-4 bg- bg-cover bg-no-repeat grow font-bold text-blue-600" style={{ backgroundImage: "url('/images/cakedecoration-1200x675.avif')"}}>
            <section className="p-6">
                <h1 className="text-2xl sm:text-4xl mb-10 mt-10">A Free Online Learning Platform</h1>
                <article>
                    <p className="hover:bg-opacity-80 text-xl sm:text-3xl flex font-mono">Used by students all over the world to broaden their knowledge in the field of catering.</p>
                </article>
            </section>

            
            <Link href="/dishes"
                className="text-md sm:text-xl text-white bg-purple-800 p-6 rounded-t-lg rounded-b-lg hover:opacity-90 sm:w-60 text-center mt-10 mb-6"
            >
                Get Started
            </Link>
        </main>
    )
}

export default Home