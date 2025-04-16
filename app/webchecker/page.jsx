'use client';
import { useState } from "react";

export default function EmergencySEO() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  const handleCheck = async () => {
    const res = await fetch("https://apis.nodirani.ir/webcheck.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });
    const data = await res.json();
    console.log(data);
    setResult(data);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">اورژانس سئو</h1>
      <input
        type="text"
        className="border p-2 w-full mb-4 rounded"
        placeholder="مثال: https://example.com"
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        onClick={handleCheck}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        بررسی کن
      </button>

      {result && result.pagespeed && (
        <div className="mt-8 space-y-6">
          <div className="bg-gray-100 p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2">اطلاعات کلی</h2>
            <p><strong>آدرس سایت:</strong> {result.url}</p>
            <p><strong>وضعیت امنیتی:</strong> {result.safeBrowsing || "نامشخص"}</p>
            <p><strong>نتیجه کلی تجربه کاربر:</strong> {result.pagespeed.loadingExperience?.overall_category}</p>
            <p><strong>تاریخ تحلیل:</strong> {new Date(result.analysisUTCTimestamp).toLocaleString("fa-IR")}</p>
          </div>

          <div className="bg-white p-4 rounded shadow border">
            <h2 className="text-lg font-semibold mb-2">⏱️ سرعت بارگذاری</h2>
            <p><strong>First Contentful Paint:</strong> {result.pagespeed.loadingExperience.metrics?.FIRST_CONTENTFUL_PAINT_MS?.percentile} میلی‌ثانیه</p>
            <p><strong>Cumulative Layout Shift:</strong> {result.pagespeed.loadingExperience.metrics?.CUMULATIVE_LAYOUT_SHIFT_SCORE?.percentile}</p>
          </div>

          <div className="bg-white p-4 rounded shadow border">
            <h2 className="text-lg font-semibold mb-2">🛠️ نسخه لایت‌هاوس</h2>
            <p>{result.pagespeed.lighthouseResult?.lighthouseVersion}</p>
          </div>
        </div>
      )}
    </div>
  );
}