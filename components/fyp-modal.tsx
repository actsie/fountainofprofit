"use client";
import { ChevronDownIcon, XIcon } from "lucide-react";
import { useState } from "react";

const inputBase = "border bg-[#f7fcfb] rounded-lg px-3 py-2 text-sm text-gray-800 placeholder:text-zinc-400 focus:outline-none transition-colors";
const inputNormal = `${inputBase} border-[#edf9f8] focus:border-purple-300`;
const inputError = `${inputBase} border-red-300 focus:border-red-400`;

type Props = {
    open: boolean;
    source: string;
    onClose: () => void;
    initialQrMenu?: boolean;
};

export default function FypModal({ open, source, onClose, initialQrMenu = false }: Props) {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [qrMenuExpanded, setQrMenuExpanded] = useState(false);
    const [formData, setFormData] = useState({
        name: "", email: "", business: "", website: "", businessType: "", notes: "", qrMenu: initialQrMenu,
    });

    if (!open) return null;

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value, type } = e.target as HTMLInputElement;
        const newValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
        setFormData(prev => ({ ...prev, [name]: newValue }));
        if (errors[name]) setErrors(prev => { const next = { ...prev }; delete next[name]; return next; });
    }

    function isValidUrl(val: string) {
        try { new URL(val); return true; } catch { return false; }
    }

    function validate() {
        const e: Record<string, string> = {};
        if (!formData.name.trim()) e.name = "Name is required";
        if (!formData.email.trim()) e.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Enter a valid email address";
        if (!formData.business.trim()) e.business = "Business name is required";
        if (!formData.website.trim()) e.website = "Current website URL is required";
        else if (!isValidUrl(formData.website)) e.website = "Enter a valid URL";
        return e;
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }
        setLoading(true);
        try {
            await fetch("/api/contact-fyp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, source }),
            });
            setSubmitted(true);
        } finally {
            setLoading(false);
        }
    }

    function handleClose() {
        onClose();
        setTimeout(() => setSubmitted(false), 300);
    }

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={handleClose} />

            <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto z-10">
                <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[#edf9f8]">
                    <div>
                        <h2 className="font-urbanist font-semibold text-lg text-gray-800">Fix my page</h2>
                        <p className="text-zinc-500 text-sm mt-0.5">We&apos;ll review and get back to you within 24 hours.</p>
                    </div>
                    <button onClick={handleClose} className="text-zinc-400 hover:text-zinc-600 transition-colors">
                        <XIcon size={20} />
                    </button>
                </div>

                {submitted ? (
                    <div className="relative flex flex-col items-center justify-center py-16 pb-10 px-6 text-center">
                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <h3 className="font-urbanist font-semibold text-xl text-gray-800">We got it.</h3>
                        <p className="text-zinc-500 text-sm mt-2 max-w-xs">We&apos;ll review your site and reach out within 24 hours.</p>
                        <button onClick={handleClose} className="mt-6 py-2 px-6 bg-purple-500 text-white rounded-full text-sm hover:bg-purple-600 transition-colors">
                            Close
                        </button>
                        {source && <p className="absolute bottom-4 text-xs text-zinc-300">via {source}</p>}
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} noValidate className="p-6 flex flex-col gap-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-gray-700">Name <span className="text-purple-500">*</span></label>
                                <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Your name" className={errors.name ? inputError : inputNormal} />
                                {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-gray-700">Email <span className="text-purple-500">*</span></label>
                                <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="you@yourbusiness.com" className={errors.email ? inputError : inputNormal} />
                                {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-gray-700">Business name <span className="text-purple-500">*</span></label>
                            <input name="business" value={formData.business} onChange={handleChange} type="text" placeholder="Fountain of Scale Salon" className={errors.business ? inputError : inputNormal} />
                            {errors.business && <p className="text-xs text-red-500">{errors.business}</p>}
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-gray-700">Current website <span className="text-purple-500">*</span></label>
                            <input name="website" value={formData.website} onChange={handleChange} type="url" placeholder="https://yourbusiness.com" className={errors.website ? inputError : inputNormal} />
                            {errors.website && <p className="text-xs text-red-500">{errors.website}</p>}
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-gray-700">What kind of business? <span className="text-zinc-400 font-normal">(optional)</span></label>
                            <input name="businessType" value={formData.businessType} onChange={handleChange} type="text" placeholder="e.g. hair salon, auto shop, massage studio..." className={inputNormal} />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-gray-700">Anything else we should know? <span className="text-zinc-400 font-normal">(optional)</span></label>
                            <textarea name="notes" value={formData.notes} onChange={handleChange} rows={2} placeholder="What do you want visitors to do when they land on your page?" className={`${inputNormal} resize-none`} />
                        </div>

                        {/* QR Menu add-on */}
                        <div className="border border-[#edf9f8] rounded-xl p-4 bg-[#f7fcfb]">
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input
                                    name="qrMenu"
                                    type="checkbox"
                                    checked={formData.qrMenu}
                                    onChange={handleChange}
                                    className="mt-0.5 accent-purple-500 shrink-0"
                                />
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-sm font-medium text-gray-800">Add Interactive QR Menu + Smart Table Ordering</span>
                                </div>
                            </label>
                            <button
                                type="button"
                                onClick={() => setQrMenuExpanded(v => !v)}
                                className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-600 mt-2 ml-6 transition-colors"
                            >
                                Learn more
                                <ChevronDownIcon size={12} className={`transition-transform ${qrMenuExpanded ? "rotate-180" : ""}`} />
                            </button>
                            {qrMenuExpanded && (
                                <p className="text-xs text-zinc-500 leading-5 mt-2 ml-6">
                                    Turn your menu into an interactive QR experience customers can browse on their phone — with photos, descriptions, and item reviews — with optional self-ordering and in-app waiter requests like water, check, or order modifications. Includes a staff dashboard so your team can see table requests and orders faster, helping reduce wait time, mistakes, and service delays.
                                </p>
                            )}
                        </div>

                        <button type="submit" disabled={loading} className="mt-2 w-full py-2.5 bg-purple-500 hover:bg-purple-600 disabled:opacity-60 text-white rounded-full text-sm font-medium transition-colors">
                            {loading ? "Sending..." : "Fix my page"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
