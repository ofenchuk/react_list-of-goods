(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s,r=n(4),o=n.n(r),i=n(5),c=n(6),a=n(9),l=n(7),u=n(8),h=n(1),d=(n(14),n(15),n(2)),b=n.n(d),p=n(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(e){e[e.NONE=0]="NONE",e[e.ALPHABET=1]="ALPHABET",e[e.LENGTH=2]="LENGTH"}(s||(s={}));var f=function(e){Object(a.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={isReversed:!1,sortType:s.NONE},e.handleAlphabetSort=function(){e.setState({sortType:s.ALPHABET})},e.handleLengthSort=function(){e.setState({sortType:s.LENGTH})},e.handleReverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.handleReset=function(){e.setState({isReversed:!1,sortType:s.NONE})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,t=e.sortType,n=e.isReversed,r=function(e,t){var n=t.sortType,r=t.isReversed,o=Object(u.a)(e);return n===s.ALPHABET&&e.sort((function(e,t){return e.localeCompare(t)})),n===s.LENGTH&&o.sort((function(e,t){return e.length-t.length})),r&&o.reverse(),o}(j,{sortType:t,isReversed:n}),o=n||t!==s.NONE;return Object(p.jsxs)("div",{className:"section content",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"button",className:b()("button is-info",{"is-light":t!==s.ALPHABET}),onClick:this.handleAlphabetSort,children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:b()("button is-info",{"is-light":t!==s.LENGTH}),onClick:this.handleLengthSort,children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:b()("button is-info",{"is-light":!n}),onClick:this.handleReverse,children:"Reverse"}),o&&Object(p.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.handleReset,children:"Reset"})]}),Object(p.jsx)("ul",{children:Object(p.jsx)("ul",{children:r.map((function(e){return Object(p.jsx)("li",{"data-cy":"Good",children:e},e)}))})})]})}}]),n}(h.Component);o.a.render(Object(p.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.08aa9a0a.chunk.js.map