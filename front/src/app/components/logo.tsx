import Image from "next/image";

export const Logo: React.FC = () => {
  return (
    <Image width={120} height={50} src="/logo-horizontal.png" alt="Logo" />
  );
};
