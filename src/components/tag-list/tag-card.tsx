import { TagListProps } from ".";

export default function TagCard({ name, count }: TagListProps) {
  return (
    <div>
      <div>{name}</div>
      <div>{count}</div>
    </div>
  );
}
