import React from 'react'

 const TicketList = () => {
    const fakeTickets = [
      { id: 1, subject: "مشکل در ورود", status: "در حال بررسی" },
      { id: 2, subject: "سؤال درباره فاکتور", status: "پاسخ داده شده" },
    ];
  
    return (
      <div className="space-y-4">
        {fakeTickets.map((ticket) => (
          <div
            key={ticket.id}
            className="border rounded-xl px-4 py-3 bg-gray-50 flex justify-between items-center"
          >
            <div>
              <div className="font-semibold">{ticket.subject}</div>
              <div className="text-sm text-gray-500">وضعیت: {ticket.status}</div>
            </div>
            <button className="text-blue-500 hover:underline text-sm">مشاهده</button>
          </div>
        ))}
      </div>
    );
  }
  export default TicketList