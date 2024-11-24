import "./globals.css";

export const metadata = {
  title: "CronJob | Home",
  description: "Home for your daily tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
