export default function Button({
  className,
  label,
}: {
  className: string;
  label: string;
}) {
  return <button className={className}>{label}</button>;
}
