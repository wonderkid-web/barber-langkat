import { Badge } from "@/components/ui/badge";
import { ScissorsIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-5 gap-4 px-4 py-4">
      {[1, 2, 3, 4].map((chair) => (
        <Link
          key={chair}
          href={"/admin/bangku/1"}
          className={`w-full h-40 rounded-xl flex flex-col items-center justify-center shadow-sm relative ${
            true ? "bg-amber-500 hover:bg-amber-400" : "bg-gray-500"
          }`}
        >
          <p className="text-xl px-2 rounded-full p-1 py-0 absolute left-1 top-1 bg-amber-600">
            {chair}
          </p>
          <ScissorsIcon height={100} width={100} />
          <Badge className="border-black" variant={"default"}>tersedia</Badge>
        </Link>
      ))}
    </div>
  );
}

export default page;
