export default function Toolbar() {
  function toggleDarkMode() {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="no-print fixed top-4 right-4 flex gap-3 z-50">
      <button
        className="bg-primary hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg font-medium transition-all active:scale-95"
        onClick={() => window.print()}
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
        Imprimer
      </button>
      <button
        className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 p-2 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700"
        onClick={toggleDarkMode}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>
    </div>
  )
}
