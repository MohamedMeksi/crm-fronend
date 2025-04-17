import React from 'react';

const LeadTable = ({ leads, onUpdate }) => (
  <table className="w-full border">
    <thead>
      <tr>
        <th>Contact</th>
        <th>Company</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {leads.map(lead => (
        <tr key={lead._id}>
          <td>{lead.contactName}</td>
          <td>{lead.companyName}</td>
          <td>{lead.status}</td>
          <td>
            <button onClick={() => onUpdate(lead)} className="text-blue-500">Update</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default LeadTable;