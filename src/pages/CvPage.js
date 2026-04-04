import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
const LABELS = {
    en: {
        title: 'English CV',
        download: 'Download PDF',
        back: '← Back',
    },
    vi: {
        title: 'CV Tiếng Việt',
        download: 'Tải xuống PDF',
        back: '← Quay lại',
    },
};
export default function CvPage({ lang }) {
    const label = LABELS[lang];
    const pdfFile = `cv-${lang}.pdf`;
    return (_jsxs("main", { className: "min-h-screen bg-neutral-900 flex flex-col", children: [_jsxs("header", { className: "flex items-center justify-between px-6 py-4 border-b border-neutral-800", children: [_jsxs(Link, { to: "/", className: "flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors", children: [_jsx(ArrowLeft, { className: "w-4 h-4" }), label.back] }), _jsx("span", { className: "text-sm text-neutral-500", children: label.title }), _jsxs("a", { href: pdfFile, download: `Nguyen-The-Chinh-CV-${lang.toUpperCase()}.pdf`, className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-200 transition-colors", children: [_jsx(Download, { className: "w-4 h-4" }), label.download] })] }), _jsx("div", { className: "flex-1 flex items-center justify-center p-6", children: _jsx("iframe", { src: pdfFile, title: label.title, className: "w-full max-w-3xl aspect-[8.5/11] rounded-lg shadow-2xl bg-white" }) })] }));
}
