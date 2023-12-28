import dynamic from "next/dynamic";

import PersonalInfo from "@/components/contact/PersonalInfo";
import ContactForm from "@/components/contact/ContactForm";
import Loading from "@/components/common/Loading";

const GoogleMapIFrame = dynamic(() => import("@/components/contact/GoogleMapIFrame"), {
    loading: () => <Loading/>,
    ssr: false
});

export const metadata = {
    metadataBase: new URL("http://localhost:3000"),
    title: "Contact",
    description: "Contact page",
    keywords: "Contact",
    openGraph: {
        title: "Contact",
        description: 'Contact page',
        siteName: "STS",
        images: [],
        type: "article",
        url: "/contact",
    },
}

const Contact = () => {
    return (
        <>
            <div className="h-20 bg-emerald-700 flex-center">
                <h1 className="sts-container text-3xl text-white font-semibold">
                    Contact Us
                </h1>
            </div>
            <div className="sts-container flex justify-between items-center py-16 max-lg:flex-col-reverse">
                <div className="w-full min-h-[560px] flex-1 p-8 max-lg:mt-8 lg:mr-8 border border-emerald-700">
                    <h1 className="text-2xl text-center">
                        Let's Start a Conversation
                    </h1>
                    <ContactForm/>
                </div>
                <div>
                    <h1 className="text-2xl text-center pb-2 mb-2 border-b border-emerald-700">
                        Contact Information
                    </h1>
                    <PersonalInfo/>
                </div>
            </div>
            <GoogleMapIFrame/>
        </>
    );
};

export default Contact;