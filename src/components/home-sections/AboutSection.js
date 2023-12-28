"use client";

import dynamic from "next/dynamic";
import Loading from "@/components/common/Loading";

const ServiceDetails = dynamic(() => import("@/components/home-sections/ServiceDetails"), {
    loading: () => <Loading/>,
    ssr: false
})

const AboutSection = () => {
    return (
        <section className="about-section sts-container py-16">
            <div
                className="text-center px-16"
            >
                <h1 className="text-3xl font-semibold capitalize mb-6">About Us</h1>
                <p className="mb-6 text-gray-700">
                    NY Firm, conveniently located in Long Island City, Signature Tax Services Inc exists to make the
                    lives of Individuals and Business Owners easy. We do so by providing quality work in a timely
                    manner. Every client is treated like a partner because at the end of the day we can not do our
                    job without the cooperation of the client. Every new client is onboarded efficiently and all
                    recurring clients are kept in communication. Every client deserves to be treated with
                    professionalism and with us every client is.
                </p>
                <p className="mb-6 text-gray-700">
                    We specialize in Individual (1040, Sch C, Sch E) and Business Tax Return Preparation (1120,
                    1120S, 1065). We also specialize in Tax Resolution. If you recieved a tax due notice from the
                    IRS and are unsure how to deal with it, we can help you by analyzing the situation and possibly
                    contacting the IRS to resolve the issue right away.
                </p>
            </div>
            <ServiceDetails/>
        </section>
    );
};

export default AboutSection;