import { Download, ArrowLeft, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'

interface CvPageProps {
  lang: 'en' | 'vi'
}

const LABELS = {
  en: {
    title: 'English CV',
    download: 'Download PDF',
    back: '← Back to Home',
  },
  vi: {
    title: 'CV Tiếng Việt',
    download: 'Tải xuống PDF',
    back: '← Quay lại Trang chủ',
  },
} as const

export default function CvPage({ lang }: CvPageProps) {
  const label = LABELS[lang]
  const pdfFile = `cv-${lang}.pdf`

  return (
    <main className="flex flex-col min-h-screen bg-[#09090b] text-white">
      {/* Top bar */}
      <header className="flex shrink-0 items-center justify-between px-6 py-4 bg-[#09090b]/95 backdrop-blur-sm border-b border-white/[0.07]">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          {label.back}
        </Link>

        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-indigo-400" />
          <span className="text-sm font-medium text-neutral-200">{label.title}</span>
        </div>

        <a
          href={pdfFile}
          download={`Nguyen-The-Chinh-CV-${lang.toUpperCase()}.pdf`}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/25"
        >
          <Download className="w-4 h-4" />
          {label.download}
        </a>
      </header>

      {/* PDF viewer — fills remaining viewport height */}
      <div className="flex-1 p-4 bg-[#111113]">
        <iframe
          src={`/${pdfFile}`}
          title={`${label.title} preview`}
          className="w-full h-full rounded-xl shadow-2xl border border-white/[0.06]"
          style={{ minHeight: 'calc(100vh - 10rem)' }}
        />
      </div>
    </main>
  )
}
