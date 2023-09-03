import React from "react";

import { Button } from "@/components/Button";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import type { Node } from "@/types";

import { Author } from "./Author";
import { Comments } from "./Comments";
import { Content } from "./Content";
import { Meta } from "./Meta";
import { Tags } from "./Tags";

import * as styles from "./Post.module.scss";
import Utterances from "../Utterance/Utterance";
import { useTheme } from "@/hooks";

interface Props {
  post: Node;
}

const Post: React.FC<Props> = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date } = post.frontmatter;
  // import mode only
  const [{ mode }] = useTheme();

  // slug /posts/2017-19-08---Humane-Typography-in-the-Digital-Age//posts/hello-world
  // -> hello-world
  const simpleSlug = "/" + slug.split("//")[1];

  return (
    <div className={styles.post}>
      <button
        onClick={() => {
          console.log("slug", slug);
        }}
      />
      <div className={styles.buttons}>
        <Button className={styles.buttonArticles} title="All Articles" to="/" />
        <ThemeSwitcher />
      </div>

      <div className={styles.content}>
        <Content body={html} title={title} />
      </div>

      <div className={styles.footer}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>

      {/* <div className={styles.comments}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div> */}
      <Utterances
        repo="esc5221/blog_comment"
        issueTerm={simpleSlug}
        theme={mode === "dark" ? "dark-blue" : "github-light"}
      />
      {/* <div className={styles.footer}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div> */}
      <div style={{ marginBottom: "30rem" }}></div>
    </div>
  );
};

export default Post;
