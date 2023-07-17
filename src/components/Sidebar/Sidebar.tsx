import React from "react";

import { Link } from "gatsby";

import { useSiteMetadata, useTagsList } from "@/hooks";
import { Page } from "@/components/Page";

import { Author } from "./Author";
import { Contacts } from "./Contacts";
import { Copyright } from "./Copyright";
import { Menu } from "./Menu";
import { toKebabCase } from "@/utils";

import * as styles from "./Sidebar.module.scss";

type Props = {
  isIndex?: boolean;
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();
  const tags = useTagsList();

  return (
    <div className={styles.sidebar}>
      <div className={styles.inner}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
        <p>
          {tags
            .sort((a, b) => b.totalCount - a.totalCount) // Sort tags in descending order
            .map((tag) => (
              <li key={tag.fieldValue}>
                <Link to={`/tag/${toKebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
