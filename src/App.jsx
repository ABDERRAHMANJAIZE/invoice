import { useState, useMemo } from 'react'
import Toolbar from './components/Toolbar'
import Header from './components/Header'
import AddressBar from './components/AddressBar'
import LineItems from './components/LineItems'
import Totals from './components/Totals'
import Footer from './components/Footer'

function App() {

  const [devis, setDevis] = useState({
    number: "DEV-2025-001",
    date: new Date().toLocaleDateString('fr-FR'),
    clientId: "",
    responsable: "",
  })

  const [client, setClient] = useState({
    name: "Jessie M Horne",
    line1: "4312 Wood Road",
    line2: "New York, NY 10031",
    line3: "jessie@example.com",
  })

  const [lines, setLines] = useState([
    { id: 1, description: "Conception et D\u00e9veloppement Landing Page", unitPrice: 1, qty: 1 },
    { id: 2, description: "Design Responsive (Mobile, Tablette, Desktop)", unitPrice: 1, qty: 1 },
    { id: 3, description: "Nom de Domaine (.ma / .com) - 1 an", unitPrice: 1, qty: 1 },
    { id: 4, description: "H\u00e9bergement Web Premium - 1 an", unitPrice: 1, qty: 1 },
    { id: 5, description: "Certificat SSL (HTTPS S\u00e9curis\u00e9)", unitPrice: 1, qty: 1 },
    { id: 6, description: "Optimisation SEO On-Page", unitPrice: 1, qty: 1 },
    { id: 7, description: "Google Analytics + Search Console Setup", unitPrice: 1, qty: 1 },
    { id: 8, description: "Bo\u00eetes Email Professionnelles (5 comptes)", unitPrice: 1, qty: 5 },
    { id: 9, description: "Formulaire de Contact + Int\u00e9gration", unitPrice: 1, qty: 1 },
    { id: 10, description: "Maintenance Mensuelle (12 mois)", unitPrice: 1, qty: 12 },
    { id: 11, description: "Sauvegardes Automatiques Quotidiennes", unitPrice: 1, qty: 12 },
    { id: 12, description: "Support Technique (Email/T\u00e9l\u00e9phone)", unitPrice: 1, qty: 12 },
  ])

  const [taxRate, setTaxRate] = useState(20.0)



  const subtotal = useMemo(() => lines.reduce((sum, l) => sum + l.unitPrice * l.qty, 0), [lines])
  const taxAmount = useMemo(() => subtotal * taxRate / 100, [subtotal, taxRate])
  const total = useMemo(() => subtotal + taxAmount, [subtotal, taxAmount])

  let nextId = lines.length > 0 ? Math.max(...lines.map(l => l.id)) + 1 : 1

  function handleUpdateLine(id, field, value) {
    setLines(prev => prev.map(l => l.id === id ? { ...l, [field]: value } : l))
  }

  function handleAddLine() {
    setLines(prev => [...prev, { id: nextId++, description: "", unitPrice: 0, qty: 1 }])
  }

  function handleRemoveLine(id) {
    setLines(prev => prev.length <= 1 ? prev : prev.filter(l => l.id !== id))
  }

  return (
    <>
      <Toolbar />
      <div className="print-container a4-page flex flex-col bg-white dark:bg-slate-900 overflow-hidden relative border border-slate-200 dark:border-slate-800">
        <Header devis={devis} onDevisChange={setDevis} />
        <AddressBar
          client={client}
          onClientChange={setClient}
        />
        <div className="px-10 flex-grow flex flex-col">
          <LineItems
            lines={lines}
            onUpdateLine={handleUpdateLine}
            onAddLine={handleAddLine}
            onRemoveLine={handleRemoveLine}
          />
          <Totals
            subtotal={subtotal}
            taxRate={taxRate}
            taxAmount={taxAmount}
            total={total}
            onTaxRateChange={setTaxRate}
          />
          <div className="flex-1 flex items-center">
            <div>
              <h3 className="text-xs font-extrabold text-red-400 uppercase tracking-widest mb-1">Conditions</h3>
              <p className="text-xs text-red-400 font-medium leading-relaxed">
                {"Ce devis est valable 30 jours. Paiement : 50% d'acompte a la signature, solde a la livraison."}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-auto">
          <Footer />
          <div className="h-4 bg-primary w-full"></div>
        </div>
      </div>
    </>
  )
}

export default App
