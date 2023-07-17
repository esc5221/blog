import { Node as GatsbyNode } from "gatsby";

interface SocialImage {
  publicURL?: string;
}

interface Frontmatter {
  date?: string;
  slug?: string;
  template?: string;
  category?: string;
  description?: string;
  tags?: Array<string>;
  socialImage?: SocialImage;
}

interface Fields {
  slug?: string;
  categorySlug?: string;
  tagSlugs?: Array<string>;
}

interface Node extends GatsbyNode {
  fields?: Fields;
  frontmatter?: Frontmatter;
}

interface Edge {
  node: Node;
}

export default Edge;
