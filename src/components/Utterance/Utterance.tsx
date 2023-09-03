import React, { createRef, useLayoutEffect } from "react";

const src = "https://utteranc.es/client.js";

export interface IUtterancesProps {
  repo: string;
  issueTerm: string;
  theme?: string;
}

const Utterances: React.FC<IUtterancesProps> = React.memo(
  ({ repo, issueTerm, theme }) => {
    const containerRef = createRef<HTMLDivElement>();

    useLayoutEffect(() => {
      const utterances = document.createElement("script");

      const attributes = {
        src,
        repo,
        theme: theme || "preferred-color-scheme",
        "issue-term": issueTerm,
        crossOrigin: "anonymous",
        async: "true",
      };

      Object.entries(attributes).forEach(([key, value]) => {
        utterances.setAttribute(key, value);
      });

      containerRef.current!.appendChild(utterances);
    }, [repo]);

    return <div ref={containerRef} />;
  },
);

Utterances.displayName = "Utterances";

export default Utterances;
