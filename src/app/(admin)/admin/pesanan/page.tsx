import Bangku from "@/component/menu/Bangku";
import { Order, Report } from "@/types";

type Props = {};

function ReportCard({
  created_at,
  customer,
  kapster,
  treatment,
}: Order) {
  return (
    <div className="bg-white shadow-md rounded-lg px-5 py-4 relative">
      <div className="text-sm text-gray-500">{created_at}</div>
      <div className="text-lg font-medium">
        {customer} - {kapster}
      </div>
      <div className="text-gray-600">{treatment}</div>
  
      <div className="p-1 rounded-md text-white text-xl font-bold absolute right-3 top-8 flex gap-2">
        <div className="rounded-md text-white bg-green-500 text-3xl px-1 font-semibold">✔</div>
        <div className="rounded-md text-white bg-red-500 text-3xl px-1 font-semibold">✖</div>
      </div>
    </div>
  );
}

function page({}: Props) {
  const orders: Order[] = [
    {
      created_at: "21.08.2014",
      customer: "Atlant Mytishi",
      kapster: "reza",
      treatment: "Creambath",
    },
    {
      created_at: "21.08.2014",
      customer: "Atlant Mytishi",
      kapster: "reza",
      treatment: "Creambath",
    },
    {
      created_at: "21.08.2014",
      customer: "Atlant Mytishi",
      kapster: "reza",
      treatment: "Creambath",
    },
    {
      created_at: "21.08.2014",
      customer: "Atlant Mytishi",
      kapster: "reza",
      treatment: "Creambath",
    },
    {
      created_at: "21.08.2014",
      customer: "Atlant Mytishi",
      kapster: "reza",
      treatment: "Creambath",
    },
    {
      created_at: "21.08.2014",
      customer: "Atlant Mytishi",
      kapster: "reza",
      treatment: "Creambath",
    },
    {
      created_at: "21.08.2014",
      customer: "Atlant Mytishi",
      kapster: "reza",
      treatment: "Creambath",
    },
    {
      created_at: "21.08.2014",
      customer: "Atlant Mytishi",
      kapster: "reza",
      treatment: "Creambath",
    },
    {
      created_at: "21.08.2014",
      customer: "Atlant Mytishi",
      kapster: "reza",
      treatment: "Creambath",
    },
    {
      created_at: "21.08.2014",
      customer: "Atlant Mytishi",
      kapster: "reza",
      treatment: "Creambath",
    },
    {
      created_at: "21.08.2014",
      customer: "Atlant Mytishi",
      kapster: "reza",
      treatment: "Creambath",
    },
    {
      created_at: "21.08.2014",
      customer: "Atlant Mytishi",
      kapster: "reza",
      treatment: "Creambath",
    },
    // ... data taruhan lainnya
  ];
  return (
    <div className="p-4 flex flex-col gap-3 overflow-auto max-h-[90vh] min-h-[90vh]">
      <p className="text-header m-5 font-bold text-2xl mb-0">Pilih Bangku</p>
      <p className="text-paragraph ml-5 font-semibold text-xl mb-1">
        Pilih nomor bangku yang ingin di inspeksi.
      </p>

      {orders.map((report, index) => (
        <ReportCard key={index} {...report} />
      ))}
    </div>
  );
}

export default page;
