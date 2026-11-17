import "./globals.css";

export const metadata = {
  title: "LPELIA — Lycée Professionnel d'Électronique et d'Informatique Appliquée",
  description: "Le LPELIA forme aux métiers de l'électronique, de l'informatique et des technologies de l'information et de la communication à Treichville, Abidjan.",
  metadataBase: new URL("https://lpelia.ci")
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
