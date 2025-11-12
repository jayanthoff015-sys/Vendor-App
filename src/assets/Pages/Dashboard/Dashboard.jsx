import React from 'react'
import './Dashboard.css'
const Dashboard = () => {
     const kpis = {
    totalInvoices: 47,
    pendingAmount: 28450.5,
    avgTurnaround: 18,
    overdueCount: 5,
  };

  const recent = [
    { id: 1, date: "2024-01-15", activity: "Invoice Created", vendor: "Acme Corp", amount: 2450.0 },
    { id: 2, date: "2024-01-14", activity: "Payment Received", vendor: "Global Supplies", amount: 5200.0 },
    { id: 3, date: "2024-01-13", activity: "Invoice Created", vendor: "TechVendor Inc", amount: 1850.0 },
  ];

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p className="subtitle">Overview of your vendor invoicing and payment tracking</p>
      </header>

      <section className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-label">TOTAL INVOICES</div>
          <div className="kpi-value">{kpis.totalInvoices}</div>
          <div className="kpi-note">All time</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-label">PENDING AMOUNT</div>
          <div className="kpi-value">₹{kpis.pendingAmount.toLocaleString()}</div>
          <div className="kpi-note">Awaiting payment</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-label">AVG TURNAROUND</div>
          <div className="kpi-value">{kpis.avgTurnaround} days</div>
          <div className="kpi-note">Payment cycle</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-label">OVERDUE INVOICES</div>
          <div className="kpi-value">{kpis.overdueCount}</div>
          <div className="kpi-note">Requires attention</div>
        </div>
      </section>

      <section className="recent-activity">
        <div className="card">
          <h3 className="card-title">Recent Activity</h3>

          <div className="table-wrap">
            <table className="activity-table">
              <thead>
                <tr>
                  <th>DATE</th>
                  <th>ACTIVITY</th>
                  <th>VENDOR</th>
                  <th className="amount-col">AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((row) => (
                  <tr key={row.id}>
                    <td>{row.date}</td>
                    <td>{row.activity}</td>
                    <td>{row.vendor}</td>
                    <td className="amount-col">₹{row.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );

  
}

export default Dashboard
