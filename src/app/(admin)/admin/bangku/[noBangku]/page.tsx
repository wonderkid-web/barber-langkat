import { kapster, treatment } from "@/static";
import TreatmentIcon from "@/component/menu/TreatmentIcon";
import Bangku from "@/component/menu/Bangku";
import Kapster from "@/component/menu/Kapster";
import { Separator } from "@/components/ui/separator";

function page({
  params: { noBangku },
}: {
  params: { noBangku: 1 | 2 | 3 | 4 };
}) {
  return (
    <div className="grid grid-cols-1 items-center justify-items-center grid-rows-6 gap-4 max-h-[95vh]">
      <div className="row-span-2 w-3/4">
        <p className="text-header font-semibold text-lg mb-1">
          Bangku Terpilih
        </p>
        <Bangku chair={noBangku} />

        <Separator decorative={false} className="mt-3  bg-[#2F2519]" />
      </div>

      <div className="row-start-3 h-full">
        <p className="text-header font-semibold text-lg mb-1">
          Pilih Treatment
        </p>
        <div className="flex gap-5 justify-around">
          {treatment.map((treat) => (
            <TreatmentIcon key={treat.treatment} {...treat} />
          ))}
        </div>
      </div>

      <div className="row-span-2 row-start-4 w-full h-full grid grid-cols-1 grid-rows-[30px_1fr] px-4 mt-32">
        <p className="text-header font-semibold text-lg mb-3 ml-6">
          Pilih Pemangkas
        </p>
        <div className="flex gap-5 justify-around h-fit mt-2">
          {kapster.map((kaps) => (
            <Kapster key={kaps.name} {...kaps} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
