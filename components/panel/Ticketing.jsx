'use client'
import React from 'react'
import TicketTabs from './ticket/Tickettabs';
const Ticketing = () => {
    
    return (
        <div className='h-screen'>
        <div className="w-full bg-white shadow-lg rounded-2xl p-6">
             <TicketTabs />
        </div>
        </div>
    );
}
export default Ticketing