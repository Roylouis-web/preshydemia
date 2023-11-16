'use client'
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

const Contact = () => {
    const router = useRouter()
    const [details, setDetails] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push('/')
    }

    const handleChange = () => {

    }

    return (
        <div className="flex justify-center items-center text-black text-lg sm:text-xl p-16">
            <form onSubmit={handleSubmit} className="bg-indigo-400 p-6 sm:p-16 rounded-l-3xl rounded-r-3xl">
                <h1 className="mb-8 text-xl font-bold text-center sm:text-3xl">Contact Us</h1>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="name"
                    required
                    autoComplete="true"
                    className="p-1 outline-none 
                     outline-1
                    rounded-xl"
                />
                <br />
                <br />
                <input
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="email"
                    required
                    className="p-1 outline-none 
                     outline-1
                    rounded-xl"
                />
                <br />
                <br />
                
                <textarea
                    name="message"
                    id="message"
                    placeholder="Enter message"
                    required
                    className="p-1 outline-none
                    outline-none 
                     outline-1
                    rounded-xl w-full h-20"
                ></textarea>
                <br />
                <br />
                <button className="bg-white dark:bg-black dark:text-white text-center w-full p-1 rounded-xl hover:bg-gray-900">Submit</button>
            </form>
        </div>
    )
}

export default Contact