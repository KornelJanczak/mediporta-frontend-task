export default function TagsContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col ">{children}</div>;
}
