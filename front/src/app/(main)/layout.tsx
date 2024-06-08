import { Header } from "../components/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-purple-50">
      <body>
      <Header />
        {children}
        </body>
    </html>
  );
}
