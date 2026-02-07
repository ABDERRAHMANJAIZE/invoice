import logoWhite from '../assets/logo-white.svg'

export default function Header({ devis, onDevisChange }) {
  function update(field, value) {
    onDevisChange(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div>
      <div className="bg-primary px-10 py-4 flex justify-between items-center text-white">
        <h1 className="text-4xl font-extrabold tracking-tighter uppercase">Devis</h1>
        <img src={logoWhite} alt="ARROWLANCER" className="h-10 w-auto" />
      </div>
      <div className="px-10 py-2 flex gap-4 text-xs border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-1 whitespace-nowrap">
          <span className="text-[8px] font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">{"Devis N\u00b0 :"}</span>
          <input
            className="editable-field font-semibold text-slate-900 dark:text-slate-100 text-xs w-28"
            value={devis.number}
            onChange={e => update("number", e.target.value)}
          />
        </div>
        <div className="flex items-center gap-1 whitespace-nowrap">
          <span className="text-[8px] font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">Date :</span>
          <input
            className="editable-field font-semibold text-slate-900 dark:text-slate-100 text-xs w-24"
            value={devis.date}
            onChange={e => update("date", e.target.value)}
          />
        </div>
        <div className="flex items-center gap-1 whitespace-nowrap">
          <span className="text-[8px] font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">Client ID :</span>
          <input
            className="editable-field font-semibold text-slate-900 dark:text-slate-100 text-xs w-24"
            value={devis.clientId}
            onChange={e => update("clientId", e.target.value)}
            placeholder="ID client"
          />
        </div>
        <div className="flex items-center gap-1 whitespace-nowrap">
          <span className="text-[8px] font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">Responsable :</span>
          <input
            className="editable-field font-semibold text-slate-900 dark:text-slate-100 text-xs w-28"
            value={devis.responsable}
            onChange={e => update("responsable", e.target.value)}
            placeholder="Nom"
          />
        </div>
      </div>
    </div>
  )
}
