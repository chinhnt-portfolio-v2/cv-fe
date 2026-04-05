import { Download, ArrowLeft, Maximize2, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'

interface CvPageProps {
  lang: 'en' | 'vi'
}

const LABELS = {
  en: {
    title: 'English CV',
    download: 'Download PDF',
    back: '← Back to Home',
    previewHint: 'Scroll or zoom to view full document',
  },
  vi: {
    title: 'CV Tiếng Việt',
    download: 'Tải xuống PDF',
    back: '← Quay lại Trang chủ',
    previewHint: 'Cuộn hoặc phóng to để xem toàn bộ tài liệu',
  },
} as const

export default function CvPage({ lang }: CvPageProps) {
  const label = LABELS[lang]
  const pdfFile = `cv-${lang}.pdf`

  return (
    <main className="min-h-screen bg-[#09090b] text-white flex flex-col">
      {/* Top bar */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-white/8 bg-[#09090b]/90 backdrop-blur-sm shrink-0">
        <Link
          to="/"
          className="flex items-center gap-2.5 text-sm text-neutral-400 hover:text-white transition-colors group"
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

      {/* PDF viewer */}
      <div className="flex-1 flex flex-col min-h-0">
        <div className="shrink-0 flex items-center justify-center gap-2 py-2.5 bg-white/[0.03] border-b border-white/5">
          <Maximize2 className="w-3.5 h-3.5 text-neutral-600" />
          <span className="text-xs text-neutral-600">{label.previewHint}</span>
        </div>

        <div className="flex-1 min-h-0 p-4 bg-[#111113]">
          <div className="w-full h-full rounded-xl overflow-hidden border border-white/8 shadow-2xl bg-white">
            <object
              data={`/${pdfFile}`}
              type="application/pdf"
              className="w-full h-full"
              aria-label={`${label.title} preview`}
            >
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-neutral-50">
                <FileText className="w-16 h-16 text-neutral-300" />
                <div className="text-center">
                  <p className="text-sm font-medium text-neutral-700 mb-1">
                    Cannot load PDF preview
                  </p>
                  <a
                    href={pdfFile}
                    download
                    className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    <Download className="w-4 h-4" />
                    {label.download}
                  </a>
                </div>
              </div>
            </object>
          </div>
        </div>
      </div>
    </main>
  )
}
