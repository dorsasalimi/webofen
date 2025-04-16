import React from 'react'
import { useState } from "react";
import TicketList from './TicketList';
import CreateTicket from './CreateTicket';
import TabButton from './Tabbutton';
const Tickettabs = () => {
    const [activeTab, setActiveTab] = useState("create");

    const renderTabContent = () => {
        switch (activeTab) {
            case "create":
                return <CreateTicket />;
            case "list":
                return <TicketList />;
            default:
                return null;
        }
    };

    return (
        <div className="max-w-3xl mx-auto">
            <TabButton
                tabs={[
                    { label: "ارسال تیکت جدید", key: "create" },
                    { label: "لیست تیکت‌ها", key: "list" },
                ]}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <div className="bg-white border p-4 rounded-xl mt-4 shadow">{renderTabContent()}</div>
        </div>
    );
}

export default Tickettabs