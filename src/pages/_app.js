// These styles apply to every route in the application
import "@/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { animationLib } from "@/utils/animationLib";
gsap.registerPlugin(ScrollTrigger);

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    animationLib();
    document.querySelectorAll(".anim").forEach((el, i) => {
      const randomNumber = Math.floor(Math.random() * 3);
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 110%",
        },
        autoAlpha: 0,
        y: randomNumber * 10,
        duration: 0.8,
        delay: i * 0.1,
      });
    });
  }, [router.asPath]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://d2poexpdc5y9vj.cloudfront.net/embed/js/ez_widgets_v2.js";
    script.type = "text/javascript";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <>
      <Head>
        <title>McWin Capital Partners | Annual Investor Meeting 2024</title>
        <meta
          name="description"
          content="Empowering food evolution - Join us to accelerate the transformation of the world's food ecosystem- We invite you to be part of our event where we invest in companies whose breakthroughs will drive this revolution. Don't miss this opportunity to change the world with us!"
        />
        <meta
          property="og:title"
          content="McWin Capital Partners | Annual Investor Meeting 2024"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aimmcwin.com" />
        <meta
          property="og:image"
          content="https://cdn.sanity.io/images/9nxeopkt/production/d056adf40291633deb5a5ae8190f74cc6d290ebf-1372x720.png?h=400&fit=max"
        />
        <link
          rel="icon"
          href="https://cdn.sanity.io/images/9nxeopkt/production/adaf4e76e7f1eaf8dbee9dc45f318244677bf2d7-98x97.jpg"
          sizes="any"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
