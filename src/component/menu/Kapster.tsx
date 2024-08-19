import Image from "next/image";
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {
    name: string;
    photo: StaticImport
};

function Kapster({name, photo}: Props) {
  return (
    <div className="bg-secondary rounded-md gap-4 w-full pt-4 shadow-md">
      <div className="relative h-24 w-24 mx-auto rounded-full bg-gray-700 overflow-hidden">
        <Image src={photo} alt="shaving" objectFit="full" />
      </div>
      <p className="text-header font-semibold text-center mt-1 text-md mb-1">
        {name}
      </p>
    </div>
  );
}

export default Kapster;
