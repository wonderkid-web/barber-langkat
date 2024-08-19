import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

type Props = {
    treatment: "Bread" | "Shaving" | "Creambath",
    icon: StaticImport
};

const TreatmentIcon = ({treatment, icon}: Props) => {
  return (
    <div className="w-fit">
      <div className="bg-secondary rounded-full relative flex justify-center h-24 w-24 box-border shadow-md">
        <Image
          src={icon}
          alt="shaving icon"
          objectFit="cover"
          className={`${treatment == "Bread" ? "m-2 mt-4" : "m-2"}`}
        />
      </div>
      <p className=" text-center text-white mt-1">
        {treatment}
      </p>
    </div>
  );
};

export default TreatmentIcon;
