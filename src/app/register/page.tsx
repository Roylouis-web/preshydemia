'use client'
import Link from "next/link"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

const Register = () => {
    const router = useRouter()
    const [details, setDetails] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: ''
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push('/')
    }

    const handleChange = () => {

    }

    return (
        <div className="flex justify-center items-center text-black text-lg sm:text-2xl sm:text-xl p-16">
            <form onSubmit={handleSubmit} className="bg-indigo-400 p-6 sm:p-16 rounded-l-3xl rounded-r-3xl mb-6">
                <h1 className="text-xl font-bold text-center mb-6 sm:text-3xl">Register</h1>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="first name"
                    required
                    autoComplete="true"
                    className="p-1 outline-none outline-1
                    rounded-xl"
                />
                <br />
                <br />
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="last name"
                    required
                    autoComplete="true"
                    className="p-1 outline-none  -700 outline-1
                    rounded-xl"
                />
                <br />
                <br />
                <input
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="username"
                    required
                    autoComplete="true"
                    className="p-1 outline-none  -700 outline-1
                    rounded-xl"
                />
                <br />
                <br />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                    required
                    autoComplete="true"
                    className="p-1 outline-none  -700 outline-1
                    rounded-xl"
                />
                <br />
                <br />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    required
                    autoComplete="true"
                    className="p-1 outline-none  -700 outline-1
                    rounded-xl"
                />
                <br />
                <br />
                <button className="bg-white dark:bg-black dark:text-white text-center w-full p-1 rounded-xl hover:bg-gray-900">Register</button>
                <br />
                <br />
                <small className="font-bold">Already have an account? <Link href="/login"><strong>Login</strong></Link></small>
            </form>
        </div>
    )
}

export default Register