import "./home.css";

/* Root layout for the home page ("/"). It has its own stylesheet so nothing
   here can change how /linkedin looks. */
export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
