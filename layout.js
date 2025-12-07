export const metadata = { title: "Polar Plumbing & Heating" };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}