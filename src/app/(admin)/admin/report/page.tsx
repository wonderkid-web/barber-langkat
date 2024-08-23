import { Report } from "@/types";
import { ArchiveIcon } from "@radix-ui/react-icons";

import React from "react";

function ReportCard({
  created_at,
  customer,
  kapster,
  treatment,
  price,
}: Report) {
  return (
    <div className="bg-white shadow-md rounded-lg px-5 py-4 relative">
      <div className="text-sm text-gray-500">{created_at}</div>
      <div className="text-lg font-medium">{customer} - {kapster}</div>
      <div className="text-gray-600">{treatment}</div>
      {/* <div className="text-green-500 font-bold absolute right-3 top-3">
        {treatment}
      </div> */}
      <div className="bg-green-500 p-1 rounded-md text-white text-xl font-bold absolute right-3 top-3">
        {price}K
      </div>
    </div>
  );
}

// export default ReportCard;

function page() {
  const reports: Report[] = [
    {
      created_at: "21.08.2014",
      customer: "Atlant Mytishi",
      kapster: "reza",
      treatment: "Creambath",
      price: 20,
    },
    {
      created_at: "21.08.2014",
      customer: "Atlant Mytishi",
      kapster: "reza",
      treatment: "Creambath",
      price: 20,
    },
    {
      created_at: "21.08.2014",
      customer: "Atlant Mytishi",
      kapster: "reza",
      treatment: "Creambath",
      price: 20,
    },
    {
      created_at: "21.08.2014",
      customer: "Atlant Mytishi",
      kapster: "reza",
      treatment: "Creambath",
      price: 20,
    },
    {
      created_at: "21.08.2014",
      customer: "Atlant Mytishi",
      kapster: "reza",
      treatment: "Creambath",
      price: 20,
    },
    {
      created_at: "21.08.2014",
      customer: "Atlant Mytishi",
      kapster: "reza",
      treatment: "Creambath",
      price: 20,
    },
    {
      created_at: "21.08.2014",
      customer: "Atlant Mytishi",
      kapster: "reza",
      treatment: "Creambath",
      price: 20,
    },
    {
      created_at: "21.08.2014",
      customer: "Atlant Mytishi",
      kapster: "reza",
      treatment: "Creambath",
      price: 20,
    },
    {
      created_at: "21.08.2014",
      customer: "Atlant Mytishi",
      kapster: "reza",
      treatment: "Creambath",
      price: 20,
    },
    {
      created_at: "21.08.2014",
      customer: "Atlant Mytishi",
      kapster: "reza",
      treatment: "Creambath",
      price: 20,
    },
    {
      created_at: "21.08.2014",
      customer: "Atlant Mytishi",
      kapster: "reza",
      treatment: "Creambath",
      price: 20,
    },
    {
      created_at: "21.08.2014",
      customer: "Atlant Mytishi",
      kapster: "reza",
      treatment: "Creambath",
      price: 20,
    },
    // ... data taruhan lainnya
  ];

  return (
    <div className="p-4 flex flex-col gap-3 overflow-auto max-h-[90vh] min-h-[90vh]">
      <p className="text-header m-5 ml-0 mb-5 font-bold text-2xl flex items-center gap-2">
        <ArchiveIcon width={35} height={35} />
        Laporan Transaksi
      </p>
      {reports.map((report, index) => (
        <ReportCard key={index} {...report} />
      ))}
    </div>
  );
}

export default page;
