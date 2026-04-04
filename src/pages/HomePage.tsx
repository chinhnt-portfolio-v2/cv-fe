import { FileText, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full space-y-6 text-center">
        <div>
          <p className="text-sm text-neutral-400 uppercase tracking-widest mb-2">Curriculum Vitae</p>
          <h1 className="text-3xl font-bold text-white">Nguyen The Chinh</h1>
          <p className="text-neutral-400 mt-1">Fullstack Developer</p>
        </div>

        <div className="space-y-3">
          <Link
            to="/en"
            className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl bg-white text-neutral-900 font-medium hover:bg-neutral-200 transition-colors"
          >
            <Globe className="w-5 h-5" />
            English Version
          </Link>
          <Link
            to="/vi"
            className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl border border-neutral-700 text-white font-medium hover:bg-neutral-800 transition-colors"
          >
            <FileText className="w-5 h-5" />
            Phiên bản Tiếng Việt
          </Link>
        </div>
      </div>
    </main>
  )
}
