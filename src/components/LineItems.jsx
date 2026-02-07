import { useRef, useEffect } from 'react'

function formatMoney(n) {
  return n.toFixed(2)
}

export default function LineItems({ lines, onUpdateLine, onAddLine, onRemoveLine }) {
  const lastAddedRef = useRef(null)

  function handleAdd() {
    lastAddedRef.current = true
    onAddLine()
  }

  useEffect(() => {
    if (lastAddedRef.current) {
      lastAddedRef.current = false
      const rows = document.querySelectorAll('#invoice-lines tr')
      const lastRow = rows[rows.length - 1]
      if (lastRow) {
        const descInput = lastRow.querySelector('input')
        if (descInput) descInput.focus()
      }
    }
  }, [lines.length])

  return (
    <>
      <table className="w-full text-left">
        <thead>
          <tr className="border-y-2 border-primary">
            <th className="py-2 text-[10px] uppercase tracking-widest font-extrabold text-primary w-6"></th>
            <th className="py-2 text-[10px] uppercase tracking-widest font-extrabold text-primary">Description</th>
            <th className="py-2 text-[10px] uppercase tracking-widest font-extrabold text-primary text-right w-32">Prix unitaire</th>
            <th className="py-2 text-[10px] uppercase tracking-widest font-extrabold text-primary text-center w-20">Qt{"\u00e9"}</th>
            <th className="py-2 text-[10px] uppercase tracking-widest font-extrabold text-primary text-right w-32">Montant</th>
          </tr>
        </thead>
        <tbody id="invoice-lines" className="text-sm font-medium text-slate-900 dark:text-slate-100">
          {lines.map(line => {
            const amount = line.unitPrice * line.qty
            return (
              <tr key={line.id} className="border-b border-slate-100 dark:border-slate-800 group">
                <td className="py-2 w-6">
                  <button
                    className="delete-row-btn no-print text-slate-900 hover:text-red-500 transition-colors"
                    onClick={() => onRemoveLine(line.id)}
                    title="Supprimer la ligne"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </td>
                <td className="py-2">
                  <input
                    className="editable-field text-sm font-medium text-slate-900 dark:text-slate-100"
                    value={line.description}
                    onChange={e => onUpdateLine(line.id, 'description', e.target.value)}
                    placeholder="Description du poste"
                  />
                </td>
                <td className="py-2 text-right">
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    className="editable-field text-sm font-medium text-slate-900 dark:text-slate-100 text-right w-28"
                    value={line.unitPrice}
                    onChange={e => onUpdateLine(line.id, 'unitPrice', parseFloat(e.target.value) || 0)}
                  />
                </td>
                <td className="py-2 text-center">
                  <input
                    type="number"
                    step="1"
                    min="1"
                    className="editable-field text-sm font-medium text-slate-900 dark:text-slate-100 text-center w-16"
                    value={line.qty}
                    onChange={e => onUpdateLine(line.id, 'qty', parseInt(e.target.value) || 0)}
                  />
                </td>
                <td className="py-3 text-right text-sm font-medium text-slate-900 dark:text-slate-100">
                  {formatMoney(amount)} dh
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className="no-print mt-2">
        <button
          className="add-line-btn text-primary hover:text-orange-600 text-xs font-bold uppercase tracking-wider flex items-center gap-1 py-2 transition-colors"
          onClick={handleAdd}
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          Ajouter une ligne
        </button>
      </div>
    </>
  )
}
