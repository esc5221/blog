"use strict";(self.webpackChunkgatsby_starter_lumen=self.webpackChunkgatsby_starter_lumen||[]).push([[854],{7919:function(e,t,a){a.d(t,{f:function(){return c}});var n=a(7294),l=a(1082),r=a(241),m="Feed-module--link--6123b";var c=e=>{let{edges:t}=e;return n.createElement("div",{className:"Feed-module--feed--a6204"},t.map((e=>{var t;return n.createElement("div",{className:"Feed-module--item--c7a63",key:e.node.fields.slug},n.createElement("div",{className:"Feed-module--row--5d598"},n.createElement(r.E,{alt:"image",path:e.node.frontmatter.socialImage.relativePath,className:"Feed-module--image--d2b15"}),n.createElement("div",{className:"Feed-module--column--83014"},n.createElement("h2",{className:"Feed-module--title--f252f",style:{marginBottom:0}},n.createElement(l.Link,{className:m,to:(null===(t=e.node.frontmatter)||void 0===t?void 0:t.slug)||e.node.fields.slug},e.node.frontmatter.title)),n.createElement("p",{className:"Feed-module--description--57348"},e.node.frontmatter.description),n.createElement("div",{className:"Feed-module--meta--250c2"},n.createElement("time",{className:"Feed-module--time--72864",dateTime:new Date(e.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},new Date(e.node.frontmatter.date).toLocaleDateString("ko-KR",{year:"numeric",month:"numeric",day:"numeric"})),n.createElement("span",{className:"Feed-module--divider--81a18"}),n.createElement("span",{className:"Feed-module--category--59f58"},n.createElement(l.Link,{to:e.node.fields.categorySlug,className:m},e.node.frontmatter.category))))))})))}},7989:function(e,t,a){a.d(t,{T:function(){return l}});var n=a(7294);var l=e=>{let{title:t,children:a}=e;const l=(0,n.useRef)(null);return(0,n.useEffect)((()=>{l.current&&l.current.scrollIntoView()}),[]),n.createElement("div",{ref:l,className:"Page-module--page--24e03"},n.createElement("div",{className:"Page-module--inner--4b31d"},t&&n.createElement("h1",{className:"Page-module--title--90338"},t),n.createElement("div",{className:"Page-module--body--561c4"},a)))}},9388:function(e,t,a){a.d(t,{t:function(){return s}});var n=a(7294),l=a(5900),r=a.n(l),m=a(1082),c=a(100),o="Pagination-module--disable--7e105";var s=e=>{let{prevPagePath:t,nextPagePath:a,hasNextPage:l,hasPrevPage:s}=e;const i=r()("Pagination-module--previousLink--5590d",{[o]:!s}),d=r()("Pagination-module--nextLink--532ff",{[o]:!l});return n.createElement("div",{className:"Pagination-module--pagination--d61cb"},n.createElement("div",{className:"Pagination-module--previous--4a76b"},n.createElement(m.Link,{rel:"prev",to:s?t:"/",className:i},c.X.PREV_PAGE)),n.createElement("div",{className:"Pagination-module--next--1cab8"},n.createElement(m.Link,{rel:"next",to:l?a:"/",className:d},c.X.NEXT_PAGE)))}},4592:function(e,t,a){a.d(t,{Y:function(){return f}});var n=a(7294),l=a(1082),r=a(3649),m=a(241),c=a(7203),o="Author-module--link--09c17",s="Author-module--title--cf7e5";var i=e=>{let{author:t,isIndex:a}=e;return n.createElement("div",{className:"Author-module--author--cbd31"},n.createElement(l.Link,{to:"/"},n.createElement(m.E,{alt:t.name,path:t.photo,className:"Author-module--photo--9787b"})),n.createElement("div",{className:"Author-module--titleContainer--4f576"},a?n.createElement("h1",{className:s},n.createElement(l.Link,{className:o,to:"/"},t.name)):n.createElement("h2",{className:s},n.createElement(l.Link,{className:o,to:"/"},t.name)),n.createElement(c.O,null)),n.createElement("p",{className:"Author-module--subtitle--86ec5"},t.bio))},d=a(4832);var u=e=>{let{name:t,icon:a}=e;return n.createElement("svg",{className:"Icon-module--icon--1d7da",viewBox:a.viewBox},n.createElement("title",null,t),n.createElement("path",{d:a.path}))},E=a(2072),g="Contacts-module--link--de1e0";var v=e=>{let{contacts:t}=e;return n.createElement("div",{className:"Contacts-module--contacts--09178"},n.createElement("ul",{className:"Contacts-module--list--9670b"},Object.keys(t).map((e=>t[e]?n.createElement("li",{className:"Contacts-module--item--f9cb0",key:e},"email"===e?n.createElement("span",{className:g,onClick:()=>{window.location.href="mailto:"+(0,d.atob)((0,E.KA)(e,t[e]))}},n.createElement(u,{name:e,icon:(0,E.q7)(e)})):n.createElement("a",{className:g,href:(0,E.KA)(e,t[e]),target:"_blank",rel:"noopener noreferrer"+("mastodon"===e?" me":"")},n.createElement(u,{name:e,icon:(0,E.q7)(e)}))):null))))};var h=e=>{let{copyright:t}=e;return n.createElement("div",{className:"Copyright-module--copyright--2c602"},t)};var N=e=>{let{menu:t}=e;return n.createElement("nav",{className:"Menu-module--menu--113a9"},n.createElement("ul",{className:"Menu-module--list--e1ae3"},t.map((e=>n.createElement("li",{className:"Menu-module--item--8b679",key:e.path},n.createElement(l.Link,{to:e.path,className:"Menu-module--link--a6f02",activeClassName:"Menu-module--active--6cb74"},e.label))))))};var f=e=>{let{isIndex:t}=e;const{author:a,copyright:m,menu:c}=(0,r.$W)(),o=(0,r.xJ)();return n.createElement("div",{className:"Sidebar-module--sidebar--1bfa1"},n.createElement("div",{className:"Sidebar-module--inner--344d0"},n.createElement(i,{author:a,isIndex:t}),n.createElement(N,{menu:c}),n.createElement(v,{contacts:a.contacts}),n.createElement(h,{copyright:m}),n.createElement("p",null,o.sort(((e,t)=>t.totalCount-e.totalCount)).map((e=>n.createElement("li",{key:e.fieldValue},n.createElement(l.Link,{to:"/tag/"+(0,E.mA)(e.fieldValue)+"/"},e.fieldValue," (",e.totalCount,")")))))))}},518:function(e,t,a){a.r(t),a.d(t,{Head:function(){return d}});var n=a(7294),l=a(7919),r=a(6327),m=a(9395),c=a(7989),o=a(9388),s=a(4592),i=a(3649);const d=e=>{let{pageContext:t}=e;const{title:a,subtitle:l}=(0,i.$W)(),{group:r,pagination:{currentPage:c}}=t,o=c>0?r+" - Page "+c+" - "+a:r+" - "+a;return n.createElement(m.h,{title:o,description:l})};t.default=e=>{let{data:t,pageContext:a}=e;const{group:m,pagination:i}=a,{prevPagePath:d,nextPagePath:u,hasPrevPage:E,hasNextPage:g}=i,{edges:v}=t.allMarkdownRemark;return n.createElement(r.A,null,n.createElement(s.Y,null),n.createElement(c.T,{title:m},n.createElement(l.f,{edges:v}),n.createElement(o.t,{prevPagePath:d,nextPagePath:u,hasPrevPage:E,hasNextPage:g})))}}}]);
//# sourceMappingURL=component---src-templates-tag-template-tag-template-tsx-5156eb23f223dc778695.js.map