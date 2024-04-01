import { groq } from "next-sanity";
import { getClient } from "../lib/sanity.server";
import serializers from "../utils/serializers";
import BlockContent from "@sanity/block-content-to-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import router from "next/router";
const NewPage = ({ page, layoutData }) => {
  const [changeClass, setChangeClass] = useState("");

  useEffect(() => {
    const handleChangeStart = () => {
      setChangeClass("fadeOut");
    };

    const handleChangeComplete = () => {
      setChangeClass("fade-into");
    };

    router.events.on("routeChangeStart", handleChangeStart);
    router.events.on("routeChangeComplete", handleChangeComplete);
    return () => {
      router.events.off("routeChangeStart", handleChangeStart);
      router.events.off("routeChangeComplete", handleChangeComplete);
    };
  }, []);

  if (!page) {
    return <div>Page not found</div>;
  }
  return (
    <div className="w-screen">
      <Header layout={layoutData} />
      <div className={changeClass}>
        <BlockContent blocks={page.Blocks} serializers={serializers} />
      </div>
      <Footer layout={layoutData} />
    </div>
  );
};

export const getStaticProps = async ({ params, preview }) => {
  const data = await getClient(preview).fetch(
    groq`{"page":*[slug.current==$slug],
    "layoutData":*[_type == 'layout']}`,
    {
      slug: params?.slug,
    }
  );

  const { page, layoutData } = data;

  if (!page.length) {
    return { notFound: true };
  }

  return {
    props: {
      page: page[0],
      layoutData: layoutData[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await getClient().fetch(
    groq`*[_type == "pageSchema" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
};

export default NewPage;
