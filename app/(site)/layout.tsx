import Navbar from "@/components/navbar";
import LenisScroll from "@/components/lenis";
import Footer from "@/components/footer";
import { ModalProvider } from "@/contexts/modal-context";
import ContactModal from "@/components/contact-modal";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <ModalProvider>
            <LenisScroll />
            <Navbar />
            {children}
            <Footer />
            <ContactModal />
        </ModalProvider>
    );
}
