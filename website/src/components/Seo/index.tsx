import Head from "next/head";

type PropsType = {
  title?: string;
  description?: string;
};

export default function Seo({ title, description }: PropsType) {
  return (
    <>
      <Head>
        {title && (
          <>
            <title key="title">{`${title}`}</title>
            <meta
              key="twitter-title"
              name="twitter:title"
              content={`${title}`}
            />
            <meta key="og-title" property="og:title" content={`${title}`} />
            <meta
              key="og-image-alt"
              property="og:image:alt"
              content={`${title}`}
            />
          </>
        )}

        {description && (
          <>
            <meta
              key="description"
              name="description"
              content={`${description}`}
            />

            <meta
              key="twitter-description"
              name="twitter:description"
              content={`${description}`}
            />

            <meta
              key="og-description"
              property="og:description"
              content={`${description}`}
            />
          </>
        )}
      </Head>
    </>
  );
}
