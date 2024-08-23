import Bangku from "@/component/menu/Bangku";

type Props = {};

function page({}: Props) {
  return (
   <div>
     <p className="text-header m-5 font-bold text-2xl mb-0">
          Pilih Bangku
        </p>
     <p className="text-paragraph ml-5 font-semibold text-xl mb-1">
          Pilih nomor bangku yang ingin di inspeksi.
        </p>
     <div className="grid grid-cols-2 xl:grid-cols-5 gap-4 px-4 py-4">
      {[1, 2, 3, 4].map((chair) => (
        <Bangku key={chair} chair={chair as 1 | 2 | 3 | 4} />
      ))}
    </div>
   </div>
  );
}

export default page;
