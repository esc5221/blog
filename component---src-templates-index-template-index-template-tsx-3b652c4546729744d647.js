"use strict";(self.webpackChunkgatsby_starter_lumen=self.webpackChunkgatsby_starter_lumen||[]).push([[574],{7919:function(e,t,a){a.d(t,{f:function(){return o}});var n=a(7294),l=a(1082),r=a(241),m="Feed-module--link--6123b";var o=e=>{let{edges:t}=e;return n.createElement("div",{className:"Feed-module--feed--a6204"},t.map((e=>{var t;return n.createElement("div",{className:"Feed-module--item--c7a63",key:e.node.fields.slug},n.createElement("div",{className:"Feed-module--row--5d598"},n.createElement(r.E,{alt:"hello",path:e.node.frontmatter.socialImage.relativePath,className:"Feed-module--image--d2b15"}),n.createElement("div",{className:"Feed-module--column--83014"},n.createElement("h2",{className:"Feed-module--title--f252f",style:{marginBottom:0}},n.createElement(l.Link,{className:m,to:(null===(t=e.node.frontmatter)||void 0===t?void 0:t.slug)||e.node.fields.slug,style:{fontSize:"1.5rem"}},e.node.frontmatter.title)),n.createElement("p",{className:"Feed-module--description--57348"},e.node.frontmatter.description),n.createElement("div",{className:"Feed-module--meta--250c2"},n.createElement("time",{className:"Feed-module--time--72864",dateTime:new Date(e.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},new Date(e.node.frontmatter.date).toLocaleDateString("ko-KR",{year:"numeric",month:"numeric",day:"numeric"})),n.createElement("span",{className:"Feed-module--divider--81a18"}),n.createElement("span",{className:"Feed-module--category--59f58"},n.createElement(l.Link,{to:e.node.fields.categorySlug,className:m},e.node.frontmatter.category))))))})))}},9388:function(e,t,a){a.d(t,{t:function(){return s}});var n=a(7294),l=a(5900),r=a.n(l),m=a(1082),o=a(100),d="Pagination-module--disable--7e105";var s=e=>{let{prevPagePath:t,nextPagePath:a,hasNextPage:l,hasPrevPage:s}=e;const i=r()("Pagination-module--previousLink--5590d",{[d]:!s}),c=r()("Pagination-module--nextLink--532ff",{[d]:!l});return n.createElement("div",{className:"Pagination-module--pagination--d61cb"},n.createElement("div",{className:"Pagination-module--previous--4a76b"},n.createElement(m.Link,{rel:"prev",to:s?t:"/",className:i},o.X.PREV_PAGE)),n.createElement("div",{className:"Pagination-module--next--1cab8"},n.createElement(m.Link,{rel:"next",to:l?a:"/",className:c},o.X.NEXT_PAGE)))}},5886:function(e,t,a){a.r(t),a.d(t,{Head:function(){return c}});var n=a(7294),l=a(7919),r=a(6327),m=a(9395),o=a(7989),d=a(9388),s=a(4592),i=a(3649);const c=e=>{let{pageContext:t}=e;const{title:a,subtitle:l}=(0,i.$W)(),{pagination:{currentPage:r}}=t,o=r>0?"Posts - Page "+r+" - "+a:a;return n.createElement(m.h,{title:o,description:l})};t.default=e=>{let{data:t,pageContext:a}=e;const{pagination:m}=a,{hasNextPage:i,hasPrevPage:c,prevPagePath:u,nextPagePath:g}=m,{edges:P}=t.allMarkdownRemark;return n.createElement(r.A,null,n.createElement(s.Y,{isIndex:!0}),n.createElement(o.T,null,n.createElement(l.f,{edges:P}),n.createElement(d.t,{prevPagePath:u,nextPagePath:g,hasPrevPage:c,hasNextPage:i})))}}}]);
//# sourceMappingURL=component---src-templates-index-template-index-template-tsx-3b652c4546729744d647.js.map