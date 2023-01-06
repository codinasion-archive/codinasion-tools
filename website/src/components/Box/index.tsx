interface Props {
  children: React.ReactNode;
}
export default function Box({ children }: Props) {
  return (
    <div className="p-3 bg-white mt-3 rounded-2xl shadow-md dark:bg-very-dark-blue dark:text-white">
        {children}
    </div>
  );
}
