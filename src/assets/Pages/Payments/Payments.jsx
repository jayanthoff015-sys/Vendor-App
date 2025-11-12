import React, { useState } from "react";
import "./Payments.css";

export default function Payments() {
  const [payments, setPayments] = useState([
    { id: 1, date: "Jan 14, 2024", invoice: "INV-2024-002", vendor: "Global Supplies Ltd", amount: 5200.0, method: "Bank Transfer", reference: "TXN-ABC123" },
    { id: 2, date: "Jan 10, 2024", invoice: "INV-2023-145", vendor: "Office Depot", amount: 850.0, method: "Check", reference: "CHK-5678" },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ date: "", invoice: "", vendor: "", amount: "", method: "Bank Transfer", reference: "" });

  function openModal() {
    setForm({ date: "", invoice: "", vendor: "", amount: "", method: "Bank Transfer", reference: "" });
    setIsOpen(true);
  }
  function closeModal() { setIsOpen(false); }

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function addPayment(e) {
    e.preventDefault();
    if (!form.invoice || !form.amount) return alert("Please fill invoice and amount");
    const newPayment = { ...form, id: Date.now(), amount: Number(form.amount) };
    setPayments(prev => [...prev, newPayment]);
    closeModal();
  }

  function formatAmount(a){
    return `₹${a.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  return (
    <div className="payments-page">
      <div className="payments-header">
        <div>
          <h1>Payments</h1>
          <p className="subtitle">Record and track all payment transactions</p>
        </div>

        <div>
          <button className="add-btn" onClick={openModal}>+ Record Payment</button>
        </div>
      </div>

      <div className="payments-card">
        <table className="payments-table">
          <thead>
            <tr>
              <th>PAYMENT DATE</th>
              <th>INVOICE #</th>
              <th>VENDOR</th>
              <th>AMOUNT</th>
              <th>METHOD</th>
              <th>REFERENCE</th>
            </tr>
          </thead>

          <tbody>
            {payments.map(p => (
              <tr key={p.id}>
                <td>{p.date}</td>
                <td className="mono">{p.invoice}</td>
                <td>{p.vendor}</td>
                <td className="amount">{formatAmount(p.amount)}</td>
                <td><span className="method-pill">{p.method}</span></td>
                <td className="mono">{p.reference}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isOpen && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal" onClick={(e)=>e.stopPropagation()}>
            <h3>Record Payment</h3>
            <form onSubmit={addPayment} className="modal-form">
              <label>Payment Date</label>
              <input name="date" value={form.date} onChange={handleChange} placeholder="e.g., Jan 14, 2024" />

              <label>Invoice #</label>
              <input name="invoice" value={form.invoice} onChange={handleChange} required />

              <label>Vendor</label>
              <input name="vendor" value={form.vendor} onChange={handleChange} />

              <label>Amount</label>
              <input name="amount" value={form.amount} onChange={handleChange} required />

              <label>Method</label>
              <select name="method" value={form.method} onChange={handleChange}>
                <option>Bank Transfer</option>
                <option>Check</option>
                <option>Online</option>
                <option>Cash</option>
              </select>

              <label>Reference</label>
              <input name="reference" value={form.reference} onChange={handleChange} />

              <div className="modal-actions">
                <button type="button" className="btn-cancel" onClick={closeModal}>Cancel</button>
                <button type="submit" className="btn-save">Save Payment</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
