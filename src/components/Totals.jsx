function formatMoney(n) {
  return n.toFixed(2)
}

export default function Totals({ subtotal, taxRate, taxAmount, total, onTaxRateChange }) {
  return (
    <div className="flex justify-end mt-2">
      <div className="w-1/3 space-y-2">
        <div className="flex justify-between items-center text-xs uppercase tracking-wider font-bold text-primary">
          <span>Total HT</span>
          <span className="text-slate-900 dark:text-slate-100 text-sm font-medium">{formatMoney(subtotal)} dh</span>
        </div>
        <div className="flex justify-between items-center text-xs uppercase tracking-wider font-bold text-primary gap-4">
          <span className="flex items-center gap-1 whitespace-nowrap">
            TVA
            <input
              type="number"
              step="0.1"
              min="0"
              max="100"
              value={taxRate}
              className="editable-field w-14 text-right text-xs font-bold text-primary"
              onChange={e => onTaxRateChange(parseFloat(e.target.value) || 0)}
            />%
          </span>
          <span className="text-slate-900 dark:text-slate-100 text-sm font-medium">{formatMoney(taxAmount)} dh</span>
        </div>
        <div className="flex justify-between items-center pt-2 border-t border-slate-200 dark:border-slate-700">
          <span className="text-sm uppercase tracking-widest font-extrabold text-primary">Total TTC</span>
          <span className="text-lg font-extrabold text-primary">{formatMoney(total)} dh</span>
        </div>
      </div>
    </div>
  )
}
