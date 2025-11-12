import React, { useState } from "react";
import "./Invoices.css";

export default function Invoices() {
  const [invoices, setInvoices] = useState([
    { id: 1, number: "INV-2024-001", vendor: "Acme Corporation", amount: 2450.0, dueDate: "Feb 15, 2024", status: "pending", description: "Office supplies" },
    { id: 2, number: "INV-2024-002", vendor: "Global Supplies Ltd", amount: 5200.0, dueDate: "Feb 20, 2024", status: "paid", description: "Equipment purchase" },
    { id: 3, number: "INV-2024-003", vendor: "TechVendor Inc", amount: 1850.0, dueDate: "Jan 10, 2024", status: "overdue", description: "Software licenses" },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ number: "", vendor: "", amount: "", dueDate: "", status: "pending", description: "" });

  function openModal() {
    setForm({ number: "", vendor: "", amount: "", dueDate: "", status: "pending", description: "" });
    setIsOpen(true);
  }
  function closeModal() { setIsOpen(false); }

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function addInvoice(e) {
    e.preventDefault();
    if (!form.number || !form.vendor || !form.amount) return alert("Please fill invoice number, vendor and amount");
    const newInv = { ...form, id: Date.now(), amount: Number(form.amount) };
    setInvoices(prev => [...prev, newInv]);
    closeModal();
  }

  function deleteInvoice(id) {
    if (!confirm("Delete this invoice?")) return;
    setInvoices(prev => prev.filter(i => i.id !== id));
  }

  const statusClass = (s) => {
    if (s === "paid") return "pill paid";
    if (s === "overdue") return "pill overdue";
    return "pill pending";
  };

  return (
    <div className="invoices-page">
      <div className="invoices-header">
        <div>
          <h1>Invoices</h1>
          <p className="subtitle">Track and manage all vendor invoices</p>
        </div>

        <div>
          <button className="add-btn" onClick={openModal}>+ Add Invoice</button>
        </div>
      </div>

      <div className="invoices-card">
        <table className="invoices-table">
          <thead>
            <tr>
              <th>INVOICE #</th>
              <th>VENDOR</th>
              <th>AMOUNT</th>
              <th>DUE DATE</th>
              <th>STATUS</th>
              <th>DESCRIPTION</th>
              <th>ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {invoices.map(inv => (
              <tr key={inv.id}>
                <td className="mono">{inv.number}</td>
                <td>{inv.vendor}</td>
                <td>₹{inv.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                <td>{inv.dueDate}</td>
                <td><span className={statusClass(inv.status)}>{inv.status}</span></td>
                <td>{inv.description}</td>
                <td>
                  <button className="delete-btn" onClick={() => deleteInvoice(inv.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isOpen && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal" onClick={(e)=>e.stopPropagation()}>
            <h3>Add Invoice</h3>
            <form onSubmit={addInvoice} className="modal-form">
              <label>Invoice #</label>
              <input name="number" value={form.number} onChange={handleChange} required />

              <label>Vendor</label>
              <input name="vendor" value={form.vendor} onChange={handleChange} required />

              <label>Amount</label>
              <input name="amount" value={form.amount} onChange={handleChange} required />

              <label>Due Date</label>
              <input name="dueDate" value={form.dueDate} onChange={handleChange} placeholder="e.g., Feb 15, 2024" />

              <label>Status</label>
              <select name="status" value={form.status} onChange={handleChange}>
                <option value="pending">pending</option>
                <option value="paid">paid</option>
                <option value="overdue">overdue</option>
              </select>

              <label>Description</label>
              <input name="description" value={form.description} onChange={handleChange} />

              <div className="modal-actions">
                <button type="button" className="btn-cancel" onClick={closeModal}>Cancel</button>
                <button type="submit" className="btn-save">Save Invoice</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
