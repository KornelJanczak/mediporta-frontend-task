import { useTagsList } from "@/hooks/use-tags-list";
import { useTags } from "@/common/tags/use-tags";
import { useEffect } from "react";
import Container from "./container";
import TagCard from "./tag-card";

export interface TagProps {}

export default function TagList() {
  const { tagsList, setTagsList } = useTagsList();
  const { tags, status } = useTags();

  const isSuccess = status === "success";
  const isError = status === "error";

  // useEffect(() => {
  //   if (isSuccess && tags) {
  //     setTagsList(tags.items);
  //   }
  // }, [tags, isError, isSuccess, setTagsList, tagsList]);

  console.log(tags);

  if (!tags) {
    return <div></div>;
  }

  if (tags) {
    // console.log(tags.items);

    return (
      <Container>
        {tags.items.map(({ name }) => (
          <TagCard key={name} />
        ))}
      </Container>
    );
  }
}
