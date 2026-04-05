import { Download, Globe, FileText, Sparkles, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white selection:bg-indigo-500/30">
      {/* Ambient gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-fuchsia-600/8 blur-3xl" />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-5 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-semibold text-sm tracking-wide">Chinh's CV</span>
        </div>
        <a
          href="https://chinht.xyz"
          className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          chinht.xyz
        </a>
      </nav>

      {/* Hero */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 pt-20 pb-16">
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-xs font-medium text-indigo-300 tracking-wider uppercase">
            Available for opportunities
          </span>
        </div>

        <h1 className="font-display text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-4">
          <span className="text-gradient">Nguyen The Chinh</span>
        </h1>
        <p className="text-xl md:text-2xl text-neutral-400 font-light mb-3">
          Fullstack Developer
        </p>
        <p className="text-base text-neutral-500 max-w-xl leading-relaxed">
          Building scalable web applications with strong backend foundations in JavaScript and
          modern frontend craft in React. Passionate about clean code and product quality.
        </p>
      </div>

      {/* CV cards */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/en"
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 transition-all duration-300 hover:bg-white/10 hover:border-indigo-500/30 hover:shadow-[0_0_40px_rgba(99,102,241,0.12)] glow-border"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-60" />
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="inline-flex items-center gap-1 text-xs font-medium text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                  <Globe className="w-3 h-3" />
                  EN
                </span>
              </div>
            </div>
            <h2 className="font-display text-2xl font-bold mb-1 group-hover:text-indigo-200 transition-colors">
              English CV
            </h2>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              Curriculum Vitae in English — recommended for international applications and tech
              roles globally.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-indigo-300 group-hover:text-indigo-200 transition-colors">
                View CV
              </span>
              <span className="text-indigo-400 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>

          <Link
            to="/vi"
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 transition-all duration-300 hover:bg-white/10 hover:border-violet-500/30 hover:shadow-[0_0_40px_rgba(192,132,252,0.12)]"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-60" />
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-violet-500/25">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="inline-flex items-center gap-1 text-xs font-medium text-violet-300 bg-violet-500/10 px-2.5 py-1 rounded-full border border-violet-500/20">
                  VN
                </span>
              </div>
            </div>
            <h2 className="font-display text-2xl font-bold mb-1 group-hover:text-violet-200 transition-colors">
              CV Tiếng Việt
            </h2>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              Sơ yếu lý lịch tiếng Việt — dành cho các ứng tuyển trong nước và các vị trí tại thị
              trường Việt Nam.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-violet-300 group-hover:text-violet-200 transition-colors">
                Xem CV
              </span>
              <span className="text-violet-400 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        </div>

        {/* Download links */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="cv-en.pdf"
            download="Nguyen-The-Chinh-CV-EN.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-sm font-medium text-neutral-300 hover:bg-white/10 hover:text-white transition-all hover:border-white/20"
          >
            <Download className="w-4 h-4" />
            Download EN PDF
          </a>
          <a
            href="cv-vi.pdf"
            download="Nguyen-The-Chinh-CV-VN.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-sm font-medium text-neutral-300 hover:bg-white/10 hover:text-white transition-all hover:border-white/20"
          >
            <Download className="w-4 h-4" />
            Tải CV Tiếng Việt
          </a>
        </div>

        <footer className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-600">
          <p>Nguyen The Chinh — Portfolio v2</p>
          <div className="flex items-center gap-1">
            <span className="inline-block w-1 h-1 rounded-full bg-neutral-700" />
            <span>Last updated April 2026</span>
          </div>
        </footer>
      </div>
    </main>
  )
}
