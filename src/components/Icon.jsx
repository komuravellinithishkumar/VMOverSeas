import * as Icons from "lucide-react";

const Icon = ({ name, size = 22 }) => {
  const Cmp = Icons[name] || Icons.Circle;
  return <Cmp size={size} strokeWidth={1.5} />;
};

export default Icon;
