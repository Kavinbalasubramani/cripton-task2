import React from "react";
const transactions = [
  {
    id: 1,
    name: "Aokiji",
    date: "28 Feb 2023",
    time: "06:23 PM",
    amount: "+$13.00",
    type: "Received",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    color: "green",
  },
  {
    id: 2,
    name: "Kizaru",
    date: "28 Feb 2023",
    time: "06:23 PM",
    amount: "-$9.00",
    type: "Outgoing",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
    color: "red",
  },
  {
    id: 3,
    name: "Akainu",
    date: "28 Feb 2023",
    time: "06:23 PM",
    amount: "+$20.00",
    type: "Received",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    color: "green",
  },
];

export default function Transactions() {
  return (
    <div className="transactions-container">
      <div className="transactions-header">
        <h2>Last Transactions</h2>
        <span className="see-all">See All</span>
      </div>
      <div className="transactions-list">
        {transactions.map((tx) => (
          <div className="transaction-card" key={tx.id}>
           
            <img src={tx.img} alt={tx.name} className="profile-pic" />


            <div className="transaction-details">
              <h3>{tx.name}</h3>
              <p className="transaction-date">
                {tx.date} • {tx.time}
              </p>
            </div>
            <div className="transaction-amount">
              <span className={tx.color}>{tx.amount}</span>
              <p>{tx.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
