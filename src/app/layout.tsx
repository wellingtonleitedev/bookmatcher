import { globalStyles } from "../../styles/global"
import ServerStylesheet from "./registry"

globalStyles();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <ServerStylesheet>
          {children}
        </ServerStylesheet>
      </body>
    </html>
  )
}
