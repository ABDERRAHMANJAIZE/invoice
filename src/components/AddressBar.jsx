export default function AddressBar({ client, onClientChange }) {
  function updateClient(field, value) {
    onClientChange(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="px-10 py-4 pb-8 flex justify-between">
      <div>
        <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2">{"\u00c9"}metteur</p>
        <div className="text-sm space-y-0.5 font-medium">
          <p className="font-bold text-slate-900 dark:text-slate-100 text-sm">ARROWLANCER</p>
          <p className="text-slate-900 dark:text-slate-100 text-sm">150 Avenue Hadj Omar Riffi</p>
          <p className="text-slate-900 dark:text-slate-100 text-sm">{"1er \u00c9tage, Appartement 03"}</p>
          <p className="text-slate-900 dark:text-slate-100 text-sm">Casablanca, Maroc</p>
        </div>
      </div>
      <div className="pt-[6%] ml-auto" style={{ width: '30%' }}>
        <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2">Client</p>
        <div className="text-sm space-y-0.5 font-medium">
          <input
            className="editable-field font-bold text-slate-900 dark:text-slate-100 text-sm"
            value={client.name}
            onChange={e => updateClient("name", e.target.value)}
          />
          <input
            className="editable-field text-slate-900 dark:text-slate-100 text-sm"
            value={client.line1}
            onChange={e => updateClient("line1", e.target.value)}
          />
          <input
            className="editable-field text-slate-900 dark:text-slate-100 text-sm"
            value={client.line2}
            onChange={e => updateClient("line2", e.target.value)}
          />
          <input
            className="editable-field text-slate-900 dark:text-slate-100 text-sm"
            value={client.line3}
            onChange={e => updateClient("line3", e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}
