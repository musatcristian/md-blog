export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">

        <body>
          <header>This is the app header</header>
          {children}
          <footer>This is the app footer</footer>
          
          </body>
      </html>
    )
}                     