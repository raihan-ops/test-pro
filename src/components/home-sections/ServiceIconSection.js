"use client";

import Image from "next/image";
import IndividualTaxIcon from "public/individual-tax.webp";
import BusinessTaxIcon from "public/business-tax.webp";
import BookKeepingIcon from "public/book-keeping.webp";
import TaxPlanIcon from "public/tax-plan.webp";
import Link from "next/link";

const ServiceIconSection = () => {

    const handleScroll = (e) => {

        e.preventDefault();

        const href = e.currentTarget.href;
        const targetId = href.replace(/.*#/, "");

        const element = document.getElementById(targetId);

        element?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start"
        });

        element?.classList.add("bg-emerald-50");

        setTimeout(() => {
            element.classList.remove('bg-emerald-50');
        }, 1000);

    };

    return (
        <section className="service-icon-section bg-emerald-700">
            <div className="sts-container h-full flex justify-around items-center max-sm:flex-col py-10">
                <Link
                    href="#individual-tax"
                    onClick={handleScroll}
                    passHref
                    role="button"
                >
                    <div
                        className="m-2 flex-center flex-col cursor-pointer"
                    >
                        <Image
                            src={IndividualTaxIcon}
                            alt="Individual tax icon"
                        />
                        <p className="mt-3 capitalize text-white text-lg font-semibold">Individual Tax</p>
                    </div>
                </Link>
                <Link
                    href="#business-tax"
                    onClick={handleScroll}
                    passHref
                    role="button"
                >
                    <div
                        className="m-2 flex-center flex-col cursor-pointer"
                    >
                        <Image
                            src={BusinessTaxIcon}
                            alt="Business tax icon"
                        />
                        <p className="mt-3 capitalize text-white text-lg font-semibold">Business Tax</p>
                    </div>
                </Link>
                <Link
                    href="#book-keeping"
                    onClick={handleScroll}
                    passHref
                    role="button"
                >
                    <div
                        className="m-2 flex-center flex-col cursor-pointer"
                    >
                        <Image
                            src={BookKeepingIcon}
                            alt="Book keeping icon"
                        />
                        <p className="mt-3 capitalize text-white text-lg font-semibold">Book Keeping</p>
                    </div>
                </Link>
                <Link
                    href="#tax-plan"
                    onClick={handleScroll}
                    passHref
                    role="button"
                >
                    <div
                        className="m-2 flex-center flex-col cursor-pointer"
                    >
                        <Image
                            src={TaxPlanIcon}
                            alt="Tax plan icon"
                        />
                        <p className="mt-3 capitalize text-white text-lg font-semibold">Tax Plan</p>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default ServiceIconSection;