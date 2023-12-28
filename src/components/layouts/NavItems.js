"use client";

import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";
import {MAIN_NAVS} from "@/helpers/Navs";

const NavItems = ({toggleMenu}) => {

    const pathname = usePathname();

    const handleToggle = () => {
        if (toggleMenu) {
            toggleMenu();
        }
    }

    const isActiveRoute = (route) => {

        if (route === pathname) {
            return "bg-emerald-700 text-white";
        }

        return "hover:bg-emerald-700 hover:text-white";
    }

    return (
        <ul className="block lg:flex font-semibold text-sm">

            {
                MAIN_NAVS.map((nav, i) => (
                    <li
                        key={i}
                        className={`max-lg:mb-2 lg:ml-2 uppercase cursor-pointer transition-all ${isActiveRoute(nav.path)}`}
                    >
                        <Link
                            href={nav.path}
                            title={nav.title}
                            onClick={handleToggle}
                            className="inline-block w-full h-full p-2"
                        >
                            {nav.displayName}
                        </Link>
                    </li>
                ))
            }

            <li
                className="
                    max-lg:mb-2 lg:ml-2 uppercase cursor-pointer transition-all hover:bg-emerald-700 hover:text-white
                "
            >
                <Link
                    href="https://www.signaturetaxservices.com/login"
                    title="Client portal link" target="_blank"
                    onClick={handleToggle}
                    className="inline-block w-full h-full p-2"
                >
                    Client Portal
                </Link>
            </li>
        </ul>
    )
        ;
};

export default NavItems;