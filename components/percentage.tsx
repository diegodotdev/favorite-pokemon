import { Data } from "@/types";

export default function Percentage({
  data,
  name,
}: {
  data: Data[];
  name: string;
}) {
  const filtered = data?.filter((item) => item?.name === name);
  const percentage = (filtered?.length / data?.length) * 100;

  return <p>{percentage?.toFixed(0)}% of all votes</p>;
}
