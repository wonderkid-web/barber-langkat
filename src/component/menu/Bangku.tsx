import { Badge } from "@/components/ui/badge";
import { ScissorsIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

type Props = {
  chair: 1 | 2 | 3 | 4;
};

function Bangku({ chair }: Props) {
  return (
    <Link
      key={chair}
      href={`/admin/bangku/${chair}`}
      className={`w-full h-40 rounded-xl flex flex-col items-center justify-center shadow-md relative ${
        true ? "bg-amber-500 hover:bg-amber-400" : "bg-gray-500"
      }`}
    >
      <p className="text-xl px-2 rounded-full p-1 py-0 absolute left-1 top-1 bg-amber-600">
        {chair}
      </p>
      <ScissorsIcon height={100} width={100} />
      <Badge className="border-black" variant={"default"}>
        tersedia
      </Badge>
    </Link>
  );
}

export default Bangku;
