import{S as x,i as $,s as ee,C as z,k as A,a as w,l as C,m as L,c as T,h as u,n as r,b as N,D as E,g as v,v as j,d as D,f as G,E as O,F as y,G as K,H as Se,I as Y,J as Z,K as De,L as Fe,q as Q,r as W,y as Le,z as He,A as Re,B as Pe,M as Ae,e as te,N as J,O as U}from"../chunks/index.7582b933.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.e94c8fa9.js";const Ce=o=>({}),se=o=>({}),Me=o=>({}),ae=o=>({}),Ie=o=>({}),oe=o=>({});function ie(o){let e,t,s;const i=o[22].lead,l=z(i,o,o[21],oe);return{c(){e=A("div"),l&&l.c(),this.h()},l(a){e=C(a,"DIV",{class:!0});var f=L(e);l&&l.l(f),f.forEach(u),this.h()},h(){r(e,"class",t="app-bar-slot-lead "+o[4])},m(a,f){N(a,e,f),l&&l.m(e,null),s=!0},p(a,f){l&&l.p&&(!s||f&2097152)&&O(l,i,a,a[21],s?K(i,a[21],f,Ie):y(a[21]),oe),(!s||f&16&&t!==(t="app-bar-slot-lead "+a[4]))&&r(e,"class",t)},i(a){s||(v(l,a),s=!0)},o(a){D(l,a),s=!1},d(a){a&&u(e),l&&l.d(a)}}}function fe(o){let e,t,s;const i=o[22].trail,l=z(i,o,o[21],ae);return{c(){e=A("div"),l&&l.c(),this.h()},l(a){e=C(a,"DIV",{class:!0});var f=L(e);l&&l.l(f),f.forEach(u),this.h()},h(){r(e,"class",t="app-bar-slot-trail "+o[2])},m(a,f){N(a,e,f),l&&l.m(e,null),s=!0},p(a,f){l&&l.p&&(!s||f&2097152)&&O(l,i,a,a[21],s?K(i,a[21],f,Me):y(a[21]),ae),(!s||f&4&&t!==(t="app-bar-slot-trail "+a[2]))&&r(e,"class",t)},i(a){s||(v(l,a),s=!0)},o(a){D(l,a),s=!1},d(a){a&&u(e),l&&l.d(a)}}}function re(o){let e,t,s;const i=o[22].headline,l=z(i,o,o[21],se);return{c(){e=A("div"),l&&l.c(),this.h()},l(a){e=C(a,"DIV",{class:!0});var f=L(e);l&&l.l(f),f.forEach(u),this.h()},h(){r(e,"class",t="app-bar-row-headline "+o[5])},m(a,f){N(a,e,f),l&&l.m(e,null),s=!0},p(a,f){l&&l.p&&(!s||f&2097152)&&O(l,i,a,a[21],s?K(i,a[21],f,Ce):y(a[21]),se),(!s||f&32&&t!==(t="app-bar-row-headline "+a[5]))&&r(e,"class",t)},i(a){s||(v(l,a),s=!0)},o(a){D(l,a),s=!1},d(a){a&&u(e),l&&l.d(a)}}}function Be(o){let e,t,s,i,l,a,f,h,B,R,S=o[8].lead&&ie(o);const M=o[22].default,b=z(M,o,o[21],null);let _=o[8].trail&&fe(o),p=o[8].headline&&re(o);return{c(){e=A("div"),t=A("div"),S&&S.c(),s=w(),i=A("div"),b&&b.c(),a=w(),_&&_.c(),h=w(),p&&p.c(),this.h()},l(n){e=C(n,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var c=L(e);t=C(c,"DIV",{class:!0});var k=L(t);S&&S.l(k),s=T(k),i=C(k,"DIV",{class:!0});var V=L(i);b&&b.l(V),V.forEach(u),a=T(k),_&&_.l(k),k.forEach(u),h=T(c),p&&p.l(c),c.forEach(u),this.h()},h(){r(i,"class",l="app-bar-slot-default "+o[3]),r(t,"class",f="app-bar-row-main "+o[6]),r(e,"class",B="app-bar "+o[7]),r(e,"data-testid","app-bar"),r(e,"role","toolbar"),r(e,"aria-label",o[0]),r(e,"aria-labelledby",o[1])},m(n,c){N(n,e,c),E(e,t),S&&S.m(t,null),E(t,s),E(t,i),b&&b.m(i,null),E(t,a),_&&_.m(t,null),E(e,h),p&&p.m(e,null),R=!0},p(n,[c]){n[8].lead?S?(S.p(n,c),c&256&&v(S,1)):(S=ie(n),S.c(),v(S,1),S.m(t,s)):S&&(j(),D(S,1,1,()=>{S=null}),G()),b&&b.p&&(!R||c&2097152)&&O(b,M,n,n[21],R?K(M,n[21],c,null):y(n[21]),null),(!R||c&8&&l!==(l="app-bar-slot-default "+n[3]))&&r(i,"class",l),n[8].trail?_?(_.p(n,c),c&256&&v(_,1)):(_=fe(n),_.c(),v(_,1),_.m(t,null)):_&&(j(),D(_,1,1,()=>{_=null}),G()),(!R||c&64&&f!==(f="app-bar-row-main "+n[6]))&&r(t,"class",f),n[8].headline?p?(p.p(n,c),c&256&&v(p,1)):(p=re(n),p.c(),v(p,1),p.m(e,null)):p&&(j(),D(p,1,1,()=>{p=null}),G()),(!R||c&128&&B!==(B="app-bar "+n[7]))&&r(e,"class",B),(!R||c&1)&&r(e,"aria-label",n[0]),(!R||c&2)&&r(e,"aria-labelledby",n[1])},i(n){R||(v(S),v(b,n),v(_),v(p),R=!0)},o(n){D(S),D(b,n),D(_),D(p),R=!1},d(n){n&&u(e),S&&S.d(),b&&b.d(n),_&&_.d(),p&&p.d()}}}const Ve="flex flex-col",Ne="grid items-center",we="",Te="flex-none flex justify-between items-center",ze="flex-auto",Oe="flex-none flex items-center space-x-4";function ye(o,e,t){let s,i,l,a,f,h,{$$slots:B={},$$scope:R}=e;const S=Se(B);let{background:M="bg-surface-100-800-token"}=e,{border:b=""}=e,{padding:_="p-4"}=e,{shadow:p=""}=e,{spacing:n="space-y-4"}=e,{gridColumns:c="grid-cols-[auto_1fr_auto]"}=e,{gap:k="gap-4"}=e,{regionRowMain:V=""}=e,{regionRowHeadline:I=""}=e,{slotLead:H=""}=e,{slotDefault:F=""}=e,{slotTrail:d=""}=e,{label:m=""}=e,{labelledby:P=""}=e;return o.$$set=g=>{t(23,e=Y(Y({},e),Z(g))),"background"in g&&t(9,M=g.background),"border"in g&&t(10,b=g.border),"padding"in g&&t(11,_=g.padding),"shadow"in g&&t(12,p=g.shadow),"spacing"in g&&t(13,n=g.spacing),"gridColumns"in g&&t(14,c=g.gridColumns),"gap"in g&&t(15,k=g.gap),"regionRowMain"in g&&t(16,V=g.regionRowMain),"regionRowHeadline"in g&&t(17,I=g.regionRowHeadline),"slotLead"in g&&t(18,H=g.slotLead),"slotDefault"in g&&t(19,F=g.slotDefault),"slotTrail"in g&&t(20,d=g.slotTrail),"label"in g&&t(0,m=g.label),"labelledby"in g&&t(1,P=g.labelledby),"$$scope"in g&&t(21,R=g.$$scope)},o.$$.update=()=>{t(7,s=`${Ve} ${M} ${b} ${n} ${_} ${p} ${e.class??""}`),o.$$.dirty&114688&&t(6,i=`${Ne} ${c} ${k} ${V}`),o.$$.dirty&131072&&t(5,l=`${we} ${I}`),o.$$.dirty&262144&&t(4,a=`${Te} ${H}`),o.$$.dirty&524288&&t(3,f=`${ze} ${F}`),o.$$.dirty&1048576&&t(2,h=`${Oe} ${d}`)},e=Z(e),[m,P,h,f,a,l,i,s,S,M,b,_,p,n,c,k,V,I,H,F,d,R,B]}class Ke extends x{constructor(e){super(),$(this,e,ye,Be,ee,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1})}}const qe=o=>({}),ne=o=>({}),je=o=>({}),ce=o=>({}),Ge=o=>({}),ue=o=>({}),Je=o=>({}),de=o=>({}),Ue=o=>({}),he=o=>({}),Qe=o=>({}),_e=o=>({});function ge(o){let e,t,s;const i=o[18].header,l=z(i,o,o[17],_e);return{c(){e=A("header"),l&&l.c(),this.h()},l(a){e=C(a,"HEADER",{id:!0,class:!0});var f=L(e);l&&l.l(f),f.forEach(u),this.h()},h(){r(e,"id","shell-header"),r(e,"class",t="flex-none "+o[7])},m(a,f){N(a,e,f),l&&l.m(e,null),s=!0},p(a,f){l&&l.p&&(!s||f&131072)&&O(l,i,a,a[17],s?K(i,a[17],f,Qe):y(a[17]),_e),(!s||f&128&&t!==(t="flex-none "+a[7]))&&r(e,"class",t)},i(a){s||(v(l,a),s=!0)},o(a){D(l,a),s=!1},d(a){a&&u(e),l&&l.d(a)}}}function me(o){let e,t;const s=o[18].sidebarLeft,i=z(s,o,o[17],he);return{c(){e=A("aside"),i&&i.c(),this.h()},l(l){e=C(l,"ASIDE",{id:!0,class:!0});var a=L(e);i&&i.l(a),a.forEach(u),this.h()},h(){r(e,"id","sidebar-left"),r(e,"class",o[6])},m(l,a){N(l,e,a),i&&i.m(e,null),t=!0},p(l,a){i&&i.p&&(!t||a&131072)&&O(i,s,l,l[17],t?K(s,l[17],a,Ue):y(l[17]),he),(!t||a&64)&&r(e,"class",l[6])},i(l){t||(v(i,l),t=!0)},o(l){D(i,l),t=!1},d(l){l&&u(e),i&&i.d(l)}}}function be(o){let e,t,s;const i=o[18].pageHeader,l=z(i,o,o[17],de),a=l||We();return{c(){e=A("header"),a&&a.c(),this.h()},l(f){e=C(f,"HEADER",{id:!0,class:!0});var h=L(e);a&&a.l(h),h.forEach(u),this.h()},h(){r(e,"id","page-header"),r(e,"class",t="flex-none "+o[4])},m(f,h){N(f,e,h),a&&a.m(e,null),s=!0},p(f,h){l&&l.p&&(!s||h&131072)&&O(l,i,f,f[17],s?K(i,f[17],h,Je):y(f[17]),de),(!s||h&16&&t!==(t="flex-none "+f[4]))&&r(e,"class",t)},i(f){s||(v(a,f),s=!0)},o(f){D(a,f),s=!1},d(f){f&&u(e),a&&a.d(f)}}}function We(o){let e;return{c(){e=Q("(slot:header)")},l(t){e=W(t,"(slot:header)")},m(t,s){N(t,e,s)},d(t){t&&u(e)}}}function ve(o){let e,t,s;const i=o[18].pageFooter,l=z(i,o,o[17],ue),a=l||Xe();return{c(){e=A("footer"),a&&a.c(),this.h()},l(f){e=C(f,"FOOTER",{id:!0,class:!0});var h=L(e);a&&a.l(h),h.forEach(u),this.h()},h(){r(e,"id","page-footer"),r(e,"class",t="flex-none "+o[2])},m(f,h){N(f,e,h),a&&a.m(e,null),s=!0},p(f,h){l&&l.p&&(!s||h&131072)&&O(l,i,f,f[17],s?K(i,f[17],h,Ge):y(f[17]),ue),(!s||h&4&&t!==(t="flex-none "+f[2]))&&r(e,"class",t)},i(f){s||(v(a,f),s=!0)},o(f){D(a,f),s=!1},d(f){f&&u(e),a&&a.d(f)}}}function Xe(o){let e;return{c(){e=Q("(slot:footer)")},l(t){e=W(t,"(slot:footer)")},m(t,s){N(t,e,s)},d(t){t&&u(e)}}}function pe(o){let e,t;const s=o[18].sidebarRight,i=z(s,o,o[17],ce);return{c(){e=A("aside"),i&&i.c(),this.h()},l(l){e=C(l,"ASIDE",{id:!0,class:!0});var a=L(e);i&&i.l(a),a.forEach(u),this.h()},h(){r(e,"id","sidebar-right"),r(e,"class",o[5])},m(l,a){N(l,e,a),i&&i.m(e,null),t=!0},p(l,a){i&&i.p&&(!t||a&131072)&&O(i,s,l,l[17],t?K(s,l[17],a,je):y(l[17]),ce),(!t||a&32)&&r(e,"class",l[5])},i(l){t||(v(i,l),t=!0)},o(l){D(i,l),t=!1},d(l){l&&u(e),i&&i.d(l)}}}function Ee(o){let e,t,s;const i=o[18].footer,l=z(i,o,o[17],ne);return{c(){e=A("footer"),l&&l.c(),this.h()},l(a){e=C(a,"FOOTER",{id:!0,class:!0});var f=L(e);l&&l.l(f),f.forEach(u),this.h()},h(){r(e,"id","shell-footer"),r(e,"class",t="flex-none "+o[1])},m(a,f){N(a,e,f),l&&l.m(e,null),s=!0},p(a,f){l&&l.p&&(!s||f&131072)&&O(l,i,a,a[17],s?K(i,a[17],f,qe):y(a[17]),ne),(!s||f&2&&t!==(t="flex-none "+a[1]))&&r(e,"class",t)},i(a){s||(v(l,a),s=!0)},o(a){D(l,a),s=!1},d(a){a&&u(e),l&&l.d(a)}}}function Ye(o){let e,t,s,i,l,a,f,h,B,R,S,M,b,_,p,n=o[9].header&&ge(o),c=o[9].sidebarLeft&&me(o),k=o[9].pageHeader&&be(o);const V=o[18].default,I=z(V,o,o[17],null);let H=o[9].pageFooter&&ve(o),F=o[9].sidebarRight&&pe(o),d=o[9].footer&&Ee(o);return{c(){e=A("div"),n&&n.c(),t=w(),s=A("div"),c&&c.c(),i=w(),l=A("div"),k&&k.c(),a=w(),f=A("main"),I&&I.c(),B=w(),H&&H.c(),S=w(),F&&F.c(),M=w(),d&&d.c(),this.h()},l(m){e=C(m,"DIV",{id:!0,class:!0,"data-testid":!0});var P=L(e);n&&n.l(P),t=T(P),s=C(P,"DIV",{class:!0});var g=L(s);c&&c.l(g),i=T(g),l=C(g,"DIV",{id:!0,class:!0});var q=L(l);k&&k.l(q),a=T(q),f=C(q,"MAIN",{id:!0,class:!0});var X=L(f);I&&I.l(X),X.forEach(u),B=T(q),H&&H.l(q),q.forEach(u),S=T(g),F&&F.l(g),g.forEach(u),M=T(P),d&&d.l(P),P.forEach(u),this.h()},h(){r(f,"id","page-content"),r(f,"class",h="flex-auto "+o[3]),r(l,"id","page"),r(l,"class",R=o[0]+" "+ke),r(s,"class","flex-auto "+xe),r(e,"id","appShell"),r(e,"class",o[8]),r(e,"data-testid","app-shell")},m(m,P){N(m,e,P),n&&n.m(e,null),E(e,t),E(e,s),c&&c.m(s,null),E(s,i),E(s,l),k&&k.m(l,null),E(l,a),E(l,f),I&&I.m(f,null),E(l,B),H&&H.m(l,null),E(s,S),F&&F.m(s,null),E(e,M),d&&d.m(e,null),b=!0,_||(p=De(l,"scroll",o[19]),_=!0)},p(m,[P]){m[9].header?n?(n.p(m,P),P&512&&v(n,1)):(n=ge(m),n.c(),v(n,1),n.m(e,t)):n&&(j(),D(n,1,1,()=>{n=null}),G()),m[9].sidebarLeft?c?(c.p(m,P),P&512&&v(c,1)):(c=me(m),c.c(),v(c,1),c.m(s,i)):c&&(j(),D(c,1,1,()=>{c=null}),G()),m[9].pageHeader?k?(k.p(m,P),P&512&&v(k,1)):(k=be(m),k.c(),v(k,1),k.m(l,a)):k&&(j(),D(k,1,1,()=>{k=null}),G()),I&&I.p&&(!b||P&131072)&&O(I,V,m,m[17],b?K(V,m[17],P,null):y(m[17]),null),(!b||P&8&&h!==(h="flex-auto "+m[3]))&&r(f,"class",h),m[9].pageFooter?H?(H.p(m,P),P&512&&v(H,1)):(H=ve(m),H.c(),v(H,1),H.m(l,null)):H&&(j(),D(H,1,1,()=>{H=null}),G()),(!b||P&1&&R!==(R=m[0]+" "+ke))&&r(l,"class",R),m[9].sidebarRight?F?(F.p(m,P),P&512&&v(F,1)):(F=pe(m),F.c(),v(F,1),F.m(s,null)):F&&(j(),D(F,1,1,()=>{F=null}),G()),m[9].footer?d?(d.p(m,P),P&512&&v(d,1)):(d=Ee(m),d.c(),v(d,1),d.m(e,null)):d&&(j(),D(d,1,1,()=>{d=null}),G()),(!b||P&256)&&r(e,"class",m[8])},i(m){b||(v(n),v(c),v(k),v(I,m),v(H),v(F),v(d),b=!0)},o(m){D(n),D(c),D(k),D(I,m),D(H),D(F),D(d),b=!1},d(m){m&&u(e),n&&n.d(),c&&c.d(),k&&k.d(),I&&I.d(m),H&&H.d(),F&&F.d(),d&&d.d(),_=!1,p()}}}const Ze="w-full h-full flex flex-col overflow-hidden",xe="w-full h-full flex overflow-hidden",ke="flex-1 overflow-x-hidden flex flex-col",$e="flex-none overflow-x-hidden overflow-y-auto",el="flex-none overflow-x-hidden overflow-y-auto";function ll(o,e,t){let s,i,l,a,f,h,B,R,{$$slots:S={},$$scope:M}=e;const b=Se(S);let{regionPage:_=""}=e,{slotHeader:p="z-10"}=e,{slotSidebarLeft:n="w-auto"}=e,{slotSidebarRight:c="w-auto"}=e,{slotPageHeader:k=""}=e,{slotPageContent:V=""}=e,{slotPageFooter:I=""}=e,{slotFooter:H=""}=e;function F(d){Fe.call(this,o,d)}return o.$$set=d=>{t(20,e=Y(Y({},e),Z(d))),"regionPage"in d&&t(0,_=d.regionPage),"slotHeader"in d&&t(10,p=d.slotHeader),"slotSidebarLeft"in d&&t(11,n=d.slotSidebarLeft),"slotSidebarRight"in d&&t(12,c=d.slotSidebarRight),"slotPageHeader"in d&&t(13,k=d.slotPageHeader),"slotPageContent"in d&&t(14,V=d.slotPageContent),"slotPageFooter"in d&&t(15,I=d.slotPageFooter),"slotFooter"in d&&t(16,H=d.slotFooter),"$$scope"in d&&t(17,M=d.$$scope)},o.$$.update=()=>{t(8,s=`${Ze} ${e.class??""}`),o.$$.dirty&1024&&t(7,i=`${p}`),o.$$.dirty&2048&&t(6,l=`${$e} ${n}`),o.$$.dirty&4096&&t(5,a=`${el} ${c}`),o.$$.dirty&8192&&t(4,f=`${k}`),o.$$.dirty&16384&&t(3,h=`${V}`),o.$$.dirty&32768&&t(2,B=`${I}`),o.$$.dirty&65536&&t(1,R=`${H}`)},e=Z(e),[_,R,B,h,f,a,l,i,s,b,p,n,c,k,V,I,H,M,S,F]}class tl extends x{constructor(e){super(),$(this,e,ll,Ye,ee,{regionPage:0,slotHeader:10,slotSidebarLeft:11,slotSidebarRight:12,slotPageHeader:13,slotPageContent:14,slotPageFooter:15,slotFooter:16})}}function sl(o){let e;const t=o[1].default,s=z(t,o,o[2],null);return{c(){s&&s.c()},l(i){s&&s.l(i)},m(i,l){s&&s.m(i,l),e=!0},p(i,l){s&&s.p&&(!e||l&4)&&O(s,t,i,i[2],e?K(t,i[2],l,null):y(i[2]),null)},i(i){e||(v(s,i),e=!0)},o(i){D(s,i),e=!1},d(i){s&&s.d(i)}}}function al(o){let e,t;return{c(){e=A("span"),t=Q("Pocketbase Demo SvelteKit"),this.h()},l(s){e=C(s,"SPAN",{class:!0});var i=L(e);t=W(i,"Pocketbase Demo SvelteKit"),i.forEach(u),this.h()},h(){r(e,"class","font-semibold text-lg")},m(s,i){N(s,e,i),E(e,t)},p:Ae,d(s){s&&u(e)}}}function ol(o){let e,t,s,i,l,a,f,h,B;return{c(){e=A("div"),t=A("form"),s=A("button"),i=A("span"),l=J("svg"),a=J("path"),f=w(),h=A("span"),B=Q("Logout"),this.h()},l(R){e=C(R,"DIV",{class:!0});var S=L(e);t=C(S,"FORM",{action:!0,method:!0});var M=L(t);s=C(M,"BUTTON",{type:!0,class:!0});var b=L(s);i=C(b,"SPAN",{class:!0});var _=L(i);l=U(_,"svg",{xmlns:!0,height:!0,viewBox:!0});var p=L(l);a=U(p,"path",{d:!0}),L(a).forEach(u),p.forEach(u),_.forEach(u),f=T(b),h=C(b,"SPAN",{class:!0});var n=L(h);B=W(n,"Logout"),n.forEach(u),b.forEach(u),M.forEach(u),S.forEach(u),this.h()},h(){r(a,"d","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"),r(l,"xmlns","http://www.w3.org/2000/svg"),r(l,"height","1.25em"),r(l,"viewBox","0 0 512 512"),r(i,"class","md:hidden"),r(h,"class","hidden md:inline"),r(s,"type","submit"),r(s,"class","btn variant-filled font-bold w-12 md:w-28 h-12"),r(t,"action","/logout"),r(t,"method","post"),r(e,"class","text-center space-x-5")},m(R,S){N(R,e,S),E(e,t),E(t,s),E(s,i),E(i,l),E(l,a),E(s,f),E(s,h),E(h,B)},d(R){R&&u(e)}}}function il(o){let e,t,s,i,l,a,f,h,B,R,S,M,b,_,p,n,c,k;return{c(){e=A("div"),t=A("a"),s=A("span"),i=J("svg"),l=J("style"),a=Q("svg{fill:#4f46e5}"),f=J("path"),h=w(),B=A("span"),R=Q("Login"),S=w(),M=A("a"),b=A("span"),_=J("svg"),p=J("path"),n=w(),c=A("span"),k=Q("Sign up"),this.h()},l(V){e=C(V,"DIV",{class:!0});var I=L(e);t=C(I,"A",{href:!0,type:!0,class:!0});var H=L(t);s=C(H,"SPAN",{class:!0});var F=L(s);i=U(F,"svg",{xmlns:!0,height:!0,viewBox:!0});var d=L(i);l=U(d,"style",{});var m=L(l);a=W(m,"svg{fill:#4f46e5}"),m.forEach(u),f=U(d,"path",{d:!0}),L(f).forEach(u),d.forEach(u),F.forEach(u),h=T(H),B=C(H,"SPAN",{class:!0});var P=L(B);R=W(P,"Login"),P.forEach(u),H.forEach(u),S=T(I),M=C(I,"A",{href:!0,type:!0,class:!0});var g=L(M);b=C(g,"SPAN",{class:!0});var q=L(b);_=U(q,"svg",{xmlns:!0,height:!0,viewBox:!0});var X=L(_);p=U(X,"path",{d:!0}),L(p).forEach(u),X.forEach(u),q.forEach(u),n=T(g),c=C(g,"SPAN",{class:!0});var le=L(c);k=W(le,"Sign up"),le.forEach(u),g.forEach(u),I.forEach(u),this.h()},h(){r(f,"d","M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"),r(i,"xmlns","http://www.w3.org/2000/svg"),r(i,"height","1.5em"),r(i,"viewBox","0 0 512 512"),r(s,"class","md:hidden"),r(B,"class","hidden md:inline"),r(t,"href","/login"),r(t,"type","button"),r(t,"class","btn variant-filled font-bold w-12 md:w-28 h-12"),r(p,"d","M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"),r(_,"xmlns","http://www.w3.org/2000/svg"),r(_,"height","1.5em"),r(_,"viewBox","0 0 640 512"),r(b,"class","md:hidden"),r(c,"class","hidden md:inline"),r(M,"href","/signup"),r(M,"type","button"),r(M,"class","btn variant-filled font-bold w-12 md:w-28 h-12"),r(e,"class","text-center space-x-5")},m(V,I){N(V,e,I),E(e,t),E(t,s),E(s,i),E(i,l),E(l,a),E(i,f),E(t,h),E(t,B),E(B,R),E(e,S),E(e,M),E(M,b),E(b,_),E(_,p),E(M,n),E(M,c),E(c,k)},d(V){V&&u(e)}}}function fl(o){let e;function t(l,a){return l[0].user?ol:il}let s=t(o),i=s(o);return{c(){i.c(),e=te()},l(l){i.l(l),e=te()},m(l,a){i.m(l,a),N(l,e,a)},p(l,a){s!==(s=t(l))&&(i.d(1),i=s(l),i&&(i.c(),i.m(e.parentNode,e)))},d(l){i.d(l),l&&u(e)}}}function rl(o){let e,t;return e=new Ke({props:{$$slots:{trail:[fl],lead:[al]},$$scope:{ctx:o}}}),{c(){Le(e.$$.fragment)},l(s){He(e.$$.fragment,s)},m(s,i){Re(e,s,i),t=!0},p(s,i){const l={};i&5&&(l.$$scope={dirty:i,ctx:s}),e.$set(l)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){D(e.$$.fragment,s),t=!1},d(s){Pe(e,s)}}}function nl(o){let e,t;return e=new tl({props:{$$slots:{header:[rl],default:[sl]},$$scope:{ctx:o}}}),{c(){Le(e.$$.fragment)},l(s){He(e.$$.fragment,s)},m(s,i){Re(e,s,i),t=!0},p(s,[i]){const l={};i&5&&(l.$$scope={dirty:i,ctx:s}),e.$set(l)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){D(e.$$.fragment,s),t=!1},d(s){Pe(e,s)}}}function cl(o,e,t){let{$$slots:s={},$$scope:i}=e,{data:l}=e;return o.$$set=a=>{"data"in a&&t(0,l=a.data),"$$scope"in a&&t(2,i=a.$$scope)},[l,s,i]}class hl extends x{constructor(e){super(),$(this,e,cl,nl,ee,{data:0})}}export{hl as component};