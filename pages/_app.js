import "@/styles/globals.css";
import { Raleway } from "next/font/google";
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "800", "400"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={raleway.className}>
      <Component {...pageProps} />
    </div>
  );
}
