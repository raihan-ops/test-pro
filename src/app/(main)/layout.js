import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

import "./main.css";

const BaseLayout = ({children}) => {
    return (
        <div>
            <Header/>
            <main
                className="w-full mt-28 min-h-[calc(100vh-112px-80px)]"
            >
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default BaseLayout;