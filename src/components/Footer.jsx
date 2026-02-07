export default function Footer() {
  return (
    <div>
      <div className="px-10 pt-1 pb-2">
        <h3 className="text-[10px] font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest mb-1">Conditions</h3>
        <p className="text-xs text-slate-900 dark:text-slate-100 font-medium leading-relaxed">
          {"Ce devis est valable 30 jours. Paiement : 50% d'acompte a la signature, solde a la livraison."}
        </p>
      </div>
      <div className="px-10 py-2 border-t border-slate-200 dark:border-slate-700 text-center">
        <p className="text-[9px] text-slate-900 dark:text-slate-300 leading-relaxed">
          {"ARROWLANCER SARL AU \u2014 Si\u00e8ge social : 150 Avenue Hadj Omar Riffi, 1er \u00c9tage, Appartement 03, Casablanca, Maroc"}
        </p>
        <p className="text-[9px] text-slate-900 dark:text-slate-300 leading-relaxed">
          {"RC : 681961 \u2014 ICE : 003741468000044 \u2014 IF : 67001585 \u2014 Patente : 34214564 \u2014 T\u00e9l : 0611846283"}
        </p>
      </div>
    </div>
  )
}
