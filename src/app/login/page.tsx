'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

const Login = () => {
    const router = useRouter()
    const [details, setDetails] = useState({
        userName: '',
        password: '',
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push('/')
    }

    const handleChange = () => {

    }

    return (
        <div className="flex justify-center items-center text-black text-lg sm:text-xl lg:pt-[10%] lg:pb-[10%] pt-[25%] pb-[50%]">
            <form onSubmit={handleSubmit} className="bg-indigo-400 p-6 sm:p-16 rounded-l-3xl rounded-r-3xl">
                <h1 className="mb-8 text-xl font-bold text-center sm:text-3xl">Login</h1>
                <input
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="email"
                    required
                    className="p-1 outline-none 
                     outline-1
                    rounded-xl"
                    autoComplete="true"
                />
                <br />
                <br />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    required
                    className="p-1 outline-none
                    outline-none 
                     outline-1
                    rounded-xl"
                    autoComplete="true"
                />
                <br />
                <br />
                <button className="bg-black text-white text-center w-full p-1 rounded-xl hover:bg-gray-900">Login</button>
                <br />
                <br />
                <small className="font-bold">Don&apos;t have an account? <Link href="/register"><strong>Register</strong></Link></small>
            </form>
        </div>
    )
}

export default Login