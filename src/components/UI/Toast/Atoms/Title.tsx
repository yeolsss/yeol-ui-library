interface Props {
  children: React.ReactNode;
}

function Title({ children }: Props) {
  return <h2 className="text-2xl">{children}</h2>;
}

export default Title;
