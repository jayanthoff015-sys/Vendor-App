import React, { useState } from "react";
import "./Vendors.css";

export default function Vendors() {
  const [vendors, setVendors] = useState([
    { id: 1, name: "Acme Corporation", contact: "John Smith", email: "john@acme.com", phone: "+91 9987656790", terms: "Net 30" },
    { id: 2, name: "Global Supplies Ltd", contact: "Jane Doe", email: "jane@globalsupplies.com", phone: "+91 9987656790", terms: "Net 45" },
    { id: 3, name: "TechVendor Inc", contact: "Bob Johnson", email: "bob@techvendor.com", phone: "+91 9987656790", terms: "Net 15" },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", email: "", phone: "", terms: "" });

  function openModal() {
    setForm({ name: "", contact: "", email: "", phone: "", terms: "" });
    setIsOpen(true);
  }
  function closeModal() { setIsOpen(false); }

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function addVendor(e) {
    e.preventDefault();
    if (!form.name) return alert("Please enter vendor name");
    const newVendor = { ...form, id: Date.now() };
    setVendors(prev => [...prev, newVendor]);
    closeModal();
  }

  function deleteVendor(id) {
    if (!confirm("Delete this vendor?")) return;
    setVendors(prev => prev.filter(v => v.id !== id));
  }

  return (
    <div className="vendors-page">
      <div className="vendors-header">
        <div>
          <h1>Vendors</h1>
          <p className="subtitle">Manage your vendor information and payment details</p>
        </div>

        <div>
          <button className="add-btn" onClick={openModal}>+ Add Vendor</button>
        </div>
      </div>

      <div className="vendors-card">
        <table className="vendors-table">
          <thead>
            <tr>
              <th>VENDOR NAME</th>
              <th>CONTACT PERSON</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>PAYMENT TERMS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {vendors.map(v => (
              <tr key={v.id}>
                <td className="vendor-name">{v.name}</td>
                <td>{v.contact}</td>
                <td>{v.email}</td>
                <td>{v.phone}</td>
                <td><span className="terms-pill">{v.terms}</span></td>
                <td>
                  <button className="delete-btn" onClick={() => deleteVendor(v.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isOpen && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Add Vendor</h3>
            <form onSubmit={addVendor} className="modal-form">
              <label>Vendor name</label>
              <input name="name" value={form.name} onChange={handleChange} required />

              <label>Contact person</label>
              <input name="contact" value={form.contact} onChange={handleChange} />

              <label>Email</label>
              <input name="email" value={form.email} onChange={handleChange} type="email" />

              <label>Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} />

              <label>Payment terms</label>
              <input name="terms" value={form.terms} onChange={handleChange} placeholder="e.g., Net 30" />

              <div className="modal-actions">
                <button type="button" className="btn-cancel" onClick={closeModal}>Cancel</button>
                <button type="submit" className="btn-save">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
