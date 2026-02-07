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
    { id: 1, description: "Organic Wildflower Honey (500g)", unitPrice: 100, qty: 1 },
    { id: 2, description: "Honeycomb Sampler Box", unitPrice: 25, qty: 2 },
    { id: 3, description: "Custom Branding Packaging Fee", unitPrice: 15, qty: 3 },
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
        <div className="px-10 flex-grow">
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
