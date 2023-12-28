"use client";

import {useRouter} from "next/navigation";
import {useState} from "react";
import {signIn} from "next-auth/react";
import {ADMIN_ARTICLES_PATH, HOME_PATH} from "@/helpers/Slugs";
import Image from "next/image";
import Spinner from "@/components/common/Spinner";
import Logo from "public/logo.webp";
import Link from "next/link";


const Login = () => {

    const router = useRouter();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();

        const data = new FormData(e.currentTarget);

        try {

            setLoading(true);

            const signInResponse = await signIn("credentials_sign_id", {
                email: data.get("email"),
                password: data.get("password"),
                redirect: false,
            });

            if (signInResponse && !signInResponse.error) {
                router.push(ADMIN_ARTICLES_PATH);
            } else {
                console.log("Error: ", signInResponse);
                setError("Your Email or Password is wrong!");
            }

            setLoading(false);

        } catch (e) {
            setLoading(false);
        }

    };

    return (
        <div className="w-80 h-80">
            <div className="flex flex-col mb-3 justify-center items-center">
                <Link
                    title="Home page link"
                    href={HOME_PATH}
                >
                    <Image
                        src={Logo}
                        alt="STS logo"
                    />
                </Link>

                <h2 className="my-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>
            <form
                className="text-black"
                onSubmit={handleSubmit}
            >
                {error && (<span className="w-full block mb-3 text-sm text-center text-red-500">{error}</span>)}

                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                    Email:
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Please enter your email"
                    required
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
                    aria-label="email"
                />

                <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
                    Password:
                </label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Plase enter you password"
                    required
                    className="w-full px-2 py-2 mb-4 border border-gray-300 rounded-md"
                    aria-label="email"
                />

                <button
                    type="submit"
                    className="default-btn flex-center w-full bg-emerald-700 text-white hover:bg-emerald-600"
                    disabled={loading}
                >
                    {loading && <Spinner/>}
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;