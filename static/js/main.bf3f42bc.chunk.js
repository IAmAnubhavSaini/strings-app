(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,a){e.exports=a(248)},132:function(e,t,a){},134:function(e,t,a){},141:function(e,t){},143:function(e,t){},153:function(e,t){},155:function(e,t){},180:function(e,t){},182:function(e,t){},183:function(e,t){},188:function(e,t){},190:function(e,t){},196:function(e,t){},198:function(e,t){},217:function(e,t){},229:function(e,t){},232:function(e,t){},248:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(118),i=a.n(c),r=(a(132),a(8)),u=(a(134),a(56));function m(e){var t=Object(n.useState)(!0),a=Object(r.a)(t,2),c=a[0],i=a[1];return l.a.createElement("section",{className:"SHA y-flex flex"},l.a.createElement("h2",{className:"clickable",onClick:function(e){return i(!c)}},"SHA"),c&&l.a.createElement("div",{className:"y-flex flex"},l.a.createElement("div",{className:"x-flex flex"},l.a.createElement("div",null,"sha-256"),l.a.createElement("div",null,Object(u.sha256)(e.input))),l.a.createElement("div",{className:"x-flex flex"},l.a.createElement("div",null,"sha-512"),l.a.createElement("div",null,l.a.createElement("div",null,Object(u.sha512)(e.input))))))}var s=a(119),f=a.n(s),o=a(120),E=a.n(o),x=a(121),d=a.n(x),v=a(122);function p(e){var t=Object(n.useState)(!0),a=Object(r.a)(t,2),c=a[0],i=a[1];return e.input?l.a.createElement("section",{className:"flex y-flex"},l.a.createElement("h2",{className:"clickable",onClick:function(e){return i(!c)}},"ROT"),c&&l.a.createElement("div",{className:"flex y-flex"},l.a.createElement("div",{className:"flex x-flex"},l.a.createElement("div",null,"rot5"),l.a.createElement("div",null,f()(e.input)||"<empty string>")),l.a.createElement("div",{className:"flex x-flex"},l.a.createElement("div",null,"rot13"),l.a.createElement("div",null,E()(e.input)||"<empty string>")),l.a.createElement("div",{className:"flex x-flex"},l.a.createElement("div",null,"rot47"),l.a.createElement("div",null,d()(e.input)||"<empty string>")),l.a.createElement("div",{className:"flex x-flex"},l.a.createElement("div",null,"rotations"),l.a.createElement("div",{className:"flex y-flex"},Object(v.rotations)(e.input).map(function(e,t){var a=e.i,n=e.rot;return l.a.createElement("div",{className:"flex x-flex",key:"".concat(n,"-").concat(a,"-").concat(t)},l.a.createElement("div",null,a),l.a.createElement("div",null,n))}))))):null}var N=a(235),b=N.encode,j=N.decode;function O(e){var t=Object(n.useState)(!0),a=Object(r.a)(t,2),c=a[0],i=a[1];return e.input?l.a.createElement("section",{className:"flex y-flex"},l.a.createElement("h2",{className:"clickable",onClick:function(e){return i(!c)}},"BASE64"),c&&l.a.createElement("div",{className:"flex y-flex"},l.a.createElement("div",{className:"flex x-flex"},l.a.createElement("div",null,"encode"),l.a.createElement("div",null,b(e.input))),l.a.createElement("div",{className:"flex x-flex"},l.a.createElement("div",null,"decode"),l.a.createElement("div",null,j(e.input))))):null}var y=a(123),h=a(247).escape;function g(e){var t=Object(n.useState)(!0),a=Object(r.a)(t,2),c=a[0],i=a[1];return e.input?l.a.createElement("section",{className:"flex y-flex"},l.a.createElement("h2",{className:"clickable",onClick:function(e){return i(!c)}},"Escapes"),c&&l.a.createElement("div",{className:"flex y-flex"},l.a.createElement("div",{className:"flex x-flex"},l.a.createElement("div",null,"esc HTML"),l.a.createElement("div",null,Object(y.escape)(e.input))),l.a.createElement("div",{className:"flex x-flex"},l.a.createElement("div",null,"esc JS"),l.a.createElement("div",null,h(e.input))))):null}var k=a(124);function S(e){var t=Object(n.useState)(!0),a=Object(r.a)(t,2),c=a[0],i=a[1];return e.input?l.a.createElement("section",{className:"flex y-flex"},l.a.createElement("h2",{className:"clickable",onClick:function(e){return i(!c)}},"Nato"),c&&l.a.createElement("div",{className:"flex y-flex"},l.a.createElement("div",{className:"flex x-flex"},l.a.createElement("div",null,"\xa0"),l.a.createElement("div",null,Object(k.word2words)(e.input).join(" "))))):null}var C=function(){var e=Object(n.useState)("@f0c1s/strings-app"),t=Object(r.a)(e,2),a=t[0],c=t[1];return l.a.createElement("div",{className:"App flex y-flex"},l.a.createElement("header",null,l.a.createElement("h1",null,"Strings"),l.a.createElement("input",{className:"input",value:a,onChange:function(e){return c(e.currentTarget.value)}})),l.a.createElement(S,{input:a}),l.a.createElement(O,{input:a}),l.a.createElement(m,{input:a}),l.a.createElement(g,{input:a}),l.a.createElement(p,{input:a}))},w=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,249)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),l(e),c(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null))),w()}},[[125,3,2]]]);
//# sourceMappingURL=main.bf3f42bc.chunk.js.map