import React from "react";

import { Link } from "gatsby";

import { Edge } from "@/types";
import { Image } from "@/components/Image";

import * as styles from "./Feed.module.scss";

type Props = {
  edges: Array<Edge>;
};

const Feed: React.FC<Props> = ({ edges }: Props) => (
  <div className={styles.feed}>
    {edges.map((edge) => (
      <div className={styles.item} key={edge.node.fields.slug}>
        <div className={styles.row}>
          <Image
            alt="hello"
            path={edge.node.frontmatter.socialImage.relativePath}
            className={styles.image}
          />
          <div className={styles.column}>
            <h2 className={styles.title} style={{ marginBottom: 0 }}>
              <Link
                className={styles.link}
                to={edge.node.frontmatter?.slug || edge.node.fields.slug}
                style={{ fontSize: "1.5rem" }}
              >
                {edge.node.frontmatter.title}
              </Link>
            </h2>
            <p className={styles.description}>
              {edge.node.frontmatter.description}
            </p>
            <div className={styles.meta}>
              <time
                className={styles.time}
                dateTime={new Date(
                  edge.node.frontmatter.date,
                ).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              >
                {new Date(edge.node.frontmatter.date).toLocaleDateString(
                  "ko-KR",
                  {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  },
                )}
              </time>
              <span className={styles.divider} />
              <span className={styles.category}>
                <Link
                  to={edge.node.fields.categorySlug}
                  className={styles.link}
                >
                  {edge.node.frontmatter.category}
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Feed;
