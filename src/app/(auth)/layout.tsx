import type { Metadata } from "next";
import HeaderSection from "@/components/commons/HeaderSection";
import FooterSection from "@/components/commons/FooterSection";

const Dashbpardlayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                {/* <HeaderSection /> */}
                {children}
                {/* <FooterSection /> */}
            </main>
        </div>
    );
};

export default Dashbpardlayout;