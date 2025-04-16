export default function TabButton({ tabs, activeTab, setActiveTab }) {
    return (
      <div className="flex space-x-2 border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 ${
              activeTab === tab.key ? "border-b-2 border-blue-500 font-bold" : "text-gray-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  }