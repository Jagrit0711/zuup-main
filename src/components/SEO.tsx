import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description?: string;
  path?: string;
  noindex?: boolean;
}

const SEO = ({ title, description, path, noindex = false }: SEOProps) => {
  const baseUrl = "https://zuup.dev";
  const url = path ? `${baseUrl}${path}` : baseUrl;

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {path && <link rel="canonical" href={url} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
};

export default SEO;
