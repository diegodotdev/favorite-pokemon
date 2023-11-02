import { fetchAllData } from "@/lib/requests";
import type { Data } from "@/types";
import Image from "next/image";
import { Percentage } from "@/components";

export default async function Page() {
  const data: Data[] = await fetchAllData();

  return (
    <div className="w-full px-5 md:px-0 md:w-[50vw] mx-auto flex flex-col gap-5">
      <div className="w-full flex justify-end items-center">
        <p>Votes: {data?.length}</p>
      </div>
      {data?.map((item) => (
        <div
          key={item?.id}
          className="w-full flex justify-between items-center gap-5"
        >
          <div className="flex flex-col justify-center items-center">
            <p className="text-sm font-[600] capitalize">{item?.name}</p>
            <Image src={item?.image} alt={item?.name} width={70} height={70} />
          </div>
          <div className="grow grid place-items-center">
            <Percentage data={data} name={item?.name} />
          </div>
        </div>
      ))}
    </div>
  );
}
