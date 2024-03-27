import { useTagsList } from "@/hooks/use-tags-list";
import { useTags } from "@/common/tags/use-tags";
import { useEffect } from "react";
export default function TagList() {
  const { tagsList, setTagsList } = useTagsList();
  const { data, status } = useTags();

  const isSuccess = status === "success";
  const isError = status === "error";

  useEffect(() => {
    if (isSuccess && data) {
      setTagsList(data);
    }

    if (isError) {
      setTagsList(null);
    }
  });

  if (!data) return <div></div>;

  if (data) return <div></div>;
}
