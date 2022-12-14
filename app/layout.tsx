import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="fixed top-0 left-0 w-full h-[130px] flex items-center justify-center z-20 navigation">
          <h1 className="text-[60px] lg:text-[70px] font-extrabold logo">
            Broševi.ba
          </h1>
        </div>
        <div className="mt-[130px]">{children}</div>
      </body>
    </html>
  );
}
