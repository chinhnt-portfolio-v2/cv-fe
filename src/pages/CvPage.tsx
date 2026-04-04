import { Download, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

interface CvPageProps {
  lang: 'en' | 'vi'
}

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
} as const

export default function CvPage({ lang }: CvPageProps) {
  const label = LABELS[lang]
  const pdfFile = `cv-${lang}.pdf`

  return (
    <main className="min-h-screen bg-neutral-900 flex flex-col">
      {/* Top bar */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {label.back}
        </Link>
        <span className="text-sm text-neutral-500">{label.title}</span>
        <a
          href={pdfFile}
          download={`Nguyen-The-Chinh-CV-${lang.toUpperCase()}.pdf`}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-200 transition-colors"
        >
          <Download className="w-4 h-4" />
          {label.download}
        </a>
      </header>

      {/* PDF embed */}
      <div className="flex-1 flex items-center justify-center p-6">
        <iframe
          src={pdfFile}
          title={label.title}
          className="w-full max-w-3xl aspect-[8.5/11] rounded-lg shadow-2xl bg-white"
        />
      </div>
    </main>
  )
}
