"use strict";(self.webpackChunkgatsby_starter_lumen=self.webpackChunkgatsby_starter_lumen||[]).push([[350],{7919:function(e,t,a){a.d(t,{f:function(){return o}});var n=a(7294),l=a(1082),r=a(241),m="Feed-module--link--6123b";var o=e=>{let{edges:t}=e;return n.createElement("div",{className:"Feed-module--feed--a6204"},t.map((e=>{var t;return n.createElement("div",{className:"Feed-module--item--c7a63",key:e.node.fields.slug},n.createElement("div",{className:"Feed-module--row--5d598"},n.createElement(r.E,{alt:"hello",path:e.node.frontmatter.socialImage.relativePath,className:"Feed-module--image--d2b15"}),n.createElement("div",{className:"Feed-module--column--83014"},n.createElement("h2",{className:"Feed-module--title--f252f",style:{marginBottom:0}},n.createElement(l.Link,{className:m,to:(null===(t=e.node.frontmatter)||void 0===t?void 0:t.slug)||e.node.fields.slug,style:{fontSize:"1.5rem"}},e.node.frontmatter.title)),n.createElement("p",{className:"Feed-module--description--57348"},e.node.frontmatter.description),n.createElement("div",{className:"Feed-module--meta--250c2"},n.createElement("time",{className:"Feed-module--time--72864",dateTime:new Date(e.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},new Date(e.node.frontmatter.date).toLocaleDateString("ko-KR",{year:"numeric",month:"numeric",day:"numeric"})),n.createElement("span",{className:"Feed-module--divider--81a18"}),n.createElement("span",{className:"Feed-module--category--59f58"},n.createElement(l.Link,{to:e.node.fields.categorySlug,className:m},e.node.frontmatter.category))))))})))}},9388:function(e,t,a){a.d(t,{t:function(){return i}});var n=a(7294),l=a(5900),r=a.n(l),m=a(1082),o=a(100),d="Pagination-module--disable--7e105";var i=e=>{let{prevPagePath:t,nextPagePath:a,hasNextPage:l,hasPrevPage:i}=e;const s=r()("Pagination-module--previousLink--5590d",{[d]:!i}),c=r()("Pagination-module--nextLink--532ff",{[d]:!l});return n.createElement("div",{className:"Pagination-module--pagination--d61cb"},n.createElement("div",{className:"Pagination-module--previous--4a76b"},n.createElement(m.Link,{rel:"prev",to:i?t:"/",className:s},o.X.PREV_PAGE)),n.createElement("div",{className:"Pagination-module--next--1cab8"},n.createElement(m.Link,{rel:"next",to:l?a:"/",className:c},o.X.NEXT_PAGE)))}},1139:function(e,t,a){a.r(t),a.d(t,{Head:function(){return c}});var n=a(7294),l=a(7919),r=a(6327),m=a(9395),o=a(7989),d=a(9388),i=a(4592),s=a(3649);const c=e=>{let{pageContext:t}=e;const{title:a,subtitle:l}=(0,s.$W)(),{group:r,pagination:{currentPage:o}}=t,d=o>0?r+" - Page "+o+" - "+a:r+" - "+a;return n.createElement(m.h,{title:d,description:l})};t.default=e=>{let{data:t,pageContext:a}=e;const{group:m,pagination:s}=a,{prevPagePath:c,nextPagePath:u,hasPrevPage:g,hasNextPage:P}=s,{edges:E}=t.allMarkdownRemark;return n.createElement(r.A,null,n.createElement(i.Y,null),n.createElement(o.T,{title:m},n.createElement(l.f,{edges:E}),n.createElement(d.t,{prevPagePath:c,nextPagePath:u,hasPrevPage:g,hasNextPage:P})))}}}]);
//# sourceMappingURL=component---src-templates-category-template-category-template-tsx-b70fd8d58a73fbea683b.js.map