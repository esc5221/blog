"use strict";(self.webpackChunkgatsby_starter_lumen=self.webpackChunkgatsby_starter_lumen||[]).push([[854],{7919:function(e,t,a){a.d(t,{f:function(){return o}});var n=a(7294),l=a(1082),r="Feed-module--link--6123b";var o=e=>{let{edges:t}=e;return n.createElement("div",{className:"Feed-module--feed--a6204"},t.map((e=>{var t,a;return n.createElement("div",{className:"Feed-module--item--c7a63",key:e.node.fields.slug},n.createElement("div",{className:"Feed-module--meta--250c2"},n.createElement("time",{className:"Feed-module--time--72864",dateTime:new Date(e.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},new Date(e.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long"})),n.createElement("span",{className:"Feed-module--divider--81a18"}),n.createElement("span",{className:"Feed-module--category--59f58"},n.createElement(l.Link,{to:e.node.fields.categorySlug,className:r},e.node.frontmatter.category))),n.createElement("h2",{className:"Feed-module--title--f252f"},n.createElement(l.Link,{className:r,to:(null===(t=e.node.frontmatter)||void 0===t?void 0:t.slug)||e.node.fields.slug},e.node.frontmatter.title)),n.createElement("p",{className:"Feed-module--description--57348"},e.node.frontmatter.description),n.createElement(l.Link,{className:"Feed-module--more--51a4e",to:(null===(a=e.node.frontmatter)||void 0===a?void 0:a.slug)||e.node.fields.slug},"Read"))})))}},9388:function(e,t,a){a.d(t,{t:function(){return i}});var n=a(7294),l=a(5900),r=a.n(l),o=a(1082),m=a(100),d="Pagination-module--disable--7e105";var i=e=>{let{prevPagePath:t,nextPagePath:a,hasNextPage:l,hasPrevPage:i}=e;const s=r()("Pagination-module--previousLink--5590d",{[d]:!i}),c=r()("Pagination-module--nextLink--532ff",{[d]:!l});return n.createElement("div",{className:"Pagination-module--pagination--d61cb"},n.createElement("div",{className:"Pagination-module--previous--4a76b"},n.createElement(o.Link,{rel:"prev",to:i?t:"/",className:s},m.X.PREV_PAGE)),n.createElement("div",{className:"Pagination-module--next--1cab8"},n.createElement(o.Link,{rel:"next",to:l?a:"/",className:c},m.X.NEXT_PAGE)))}},518:function(e,t,a){a.r(t),a.d(t,{Head:function(){return c}});var n=a(7294),l=a(7919),r=a(6327),o=a(9395),m=a(7989),d=a(9388),i=a(3588),s=a(3649);const c=e=>{let{pageContext:t}=e;const{title:a,subtitle:l}=(0,s.$W)(),{group:r,pagination:{currentPage:m}}=t,d=m>0?r+" - Page "+m+" - "+a:r+" - "+a;return n.createElement(o.h,{title:d,description:l})};t.default=e=>{let{data:t,pageContext:a}=e;const{group:o,pagination:s}=a,{prevPagePath:c,nextPagePath:u,hasPrevPage:g,hasNextPage:P}=s,{edges:f}=t.allMarkdownRemark;return n.createElement(r.A,null,n.createElement(i.Y,null),n.createElement(m.T,{title:o},n.createElement(l.f,{edges:f}),n.createElement(d.t,{prevPagePath:c,nextPagePath:u,hasPrevPage:g,hasNextPage:P})))}}}]);
//# sourceMappingURL=component---src-templates-tag-template-tag-template-tsx-cf6fabef4b1fb44d3578.js.map