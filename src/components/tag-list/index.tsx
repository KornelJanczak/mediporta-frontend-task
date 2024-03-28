import { useTagsList } from "@/hooks/use-tags-list";
import { useTags } from "@/common/tags/use-tags";
import { useEffect } from "react";
import Container from "./container";
import TagCard from "./tag-card";

export interface TagProps {}

export default function TagList() {
  const { tagsList, setTagsList } = useTagsList();
  const { data, status } = useTags();

  const isSuccess = status === "success";
  const isError = status === "error";

  useEffect(() => {
    if (isSuccess && data) {
      // console.log(data);

      setTagsList(data);
    }

    if (isError) {
      setTagsList(null);
    }
  }, [data, isError, isSuccess, setTagsList]);

  if (!tagsList) {
    return <div></div>;
  }

  if (tagsList) {
    console.log(tagsList);

    return (
      <Container>
        {tagsList.map(({ name }) => (
          <TagCard key={name} />
        ))}
      </Container>
    );
  }
}
