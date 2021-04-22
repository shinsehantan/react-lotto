(this["webpackJsonpreact-lotto"]=this["webpackJsonpreact-lotto"]||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var c=t(1),s=t.n(c),a=t(9),i=t.n(a),r=t(5),l=t(2),o=t(3),j=(t(14),t(15),t(0));function u(e){var n=Object(c.useState)([]),t=Object(o.a)(n,2),s=t[0],a=t[1],i=Object(c.useState)(0),r=Object(o.a)(i,2),l=r[0],u=r[1];return Object(j.jsxs)("main",{className:"main-container d-flex flex-col",children:[Object(j.jsx)("h1",{className:"text-center m-0",children:"\ud83c\udfb1 \ud589\uc6b4\uc758 \ub85c\ub610"}),Object(j.jsx)(C,{setLottoCount:e.setLottoCount}),Object(j.jsx)(T,{isModalOpened:e.isModalOpened,lottoCount:e.lottoCount,winningNumbers:s,bonusNumber:l,increaseWinningCounts:e.increaseWinningCounts}),Object(j.jsx)(w,{lottoCount:e.lottoCount,setWinningNumbers:a,setBonusNumber:u,openModal:e.openModal}),Object(j.jsx)(S,{announcementDate:e.announcementDate,setAnnouncementDate:e.setAnnouncementDate})]})}var b,O=t(4),m=1e3,N={NUMBER_COUNT:6,MIN_NUMBER:1,MAX_NUMBER:45,RANK:{FIRST:1,SECOND:2,THIRD:3,FOURTH:4,FIFTH:5},WINNING_PRIZE:{FIRST:2e9,SECOND:3e7,THIRD:15e5,FOURTH:5e4,FIFTH:5e3},MATCHED_COUNT:{FIRST:6,THIRD:5,FOURTH:4,FIFTH:3}},d=(b={},Object(l.a)(b,N.RANK.FIRST,N.WINNING_PRIZE.FIRST),Object(l.a)(b,N.RANK.SECOND,N.WINNING_PRIZE.SECOND),Object(l.a)(b,N.RANK.THIRD,N.WINNING_PRIZE.THIRD),Object(l.a)(b,N.RANK.FOURTH,N.WINNING_PRIZE.FOURTH),Object(l.a)(b,N.RANK.FIFTH,N.WINNING_PRIZE.FIFTH),b),x={INVALID_MONEY_UNIT:"1000\uc6d0 \ub2e8\uc704\ub85c\ub9cc \uad6c\ub9e4 \uac00\ub2a5\ud569\ub2c8\ub2e4.",LOTTO_NOT_EXIST:"\uad6c\uc785\ud55c \ub85c\ub610\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",DUPLICATED_WINNING_NUMBERS:"\ub2f9\ucca8 \ubc88\ud638\ub294 \uc911\ubcf5\ub420 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."},h=6,g=20,f=45,I=0,p=function(e,n){return Math.floor(Math.random()*(n-e)+e)};function R(e){var n=e.isToggled,t=e.isModalOpened,s=Object(c.useRef)(function(e,n,t){for(var c=new Set;c.size<t;){var s=p(e,n);c.add(s)}return Array.from(c)}(N.MIN_NUMBER,N.MAX_NUMBER,N.NUMBER_COUNT));Object(c.useEffect)((function(){t&&a()}),[t]);var a=function(){var n=e.winningNumbers.length+s.current.length-new Set([].concat(Object(O.a)(e.winningNumbers),Object(O.a)(s.current))).size,t=parseInt(e.bonusNumber);n===N.MATCHED_COUNT.FIRST&&e.increaseWinningCounts(N.RANK.FIRST),n===N.MATCHED_COUNT.THIRD&&(s.current.includes(t)?e.increaseWinningCounts(N.RANK.SECOND):e.increaseWinningCounts(N.RANK.THIRD)),n===N.MATCHED_COUNT.FOURTH&&e.increaseWinningCounts(N.RANK.FOURTH),n===N.MATCHED_COUNT.FIFTH&&e.increaseWinningCounts(N.RANK.FIFTH)};return Object(j.jsxs)("li",{className:"lotto-item ".concat(n?"toggle":""),children:[Object(j.jsx)("span",{className:"lotto-icon",children:"\ud83c\udf9f"}),n&&Object(j.jsx)("span",{children:Object(O.a)(s.current).join(", ")})]})}function T(e){var n=e.lottoCount,t=Object(c.useState)(!1),s=Object(o.a)(t,2),a=s[0],i=s[1];return Object(j.jsxs)("section",{className:"mt-5",children:[Object(j.jsxs)("div",{className:"d-flex justify-space-between items-center",children:[Object(j.jsxs)("div",{children:["\ucd1d ",Object(j.jsx)("span",{children:n}),"\uac1c\ub97c \uad6c\ub9e4\ud558\uc600\uc2b5\ub2c8\ub2e4."]}),Object(j.jsxs)("label",{className:"toggle-button",children:[Object(j.jsx)("input",{type:"checkbox",onChange:function(){i(!a)}}),Object(j.jsx)("span",{className:"toggle-slider"})]})]}),Object(j.jsx)("ul",{className:"lotto-list",children:Array.from({length:n}).map((function(n,t){return Object(j.jsx)(R,{isToggled:a,winningNumbers:e.winningNumbers,bonusNumber:e.bonusNumber,increaseWinningCounts:e.increaseWinningCounts,isModalOpened:e.isModalOpened},t)}))})]})}function C(e){var n=Object(c.useState)(!0),t=Object(o.a)(n,2),s=t[0],a=t[1],i=Object(c.useState)(0),r=Object(o.a)(i,2),l=r[0],u=r[1],b=function(){return l%m===0};return Object(j.jsx)("section",{className:"mt-5",children:Object(j.jsxs)("form",{className:"w-100",onSubmit:function(n){n.preventDefault(),b()?(e.setLottoCount(l/m),a(!1)):alert(x.INVALID_MONEY_UNIT)},children:[Object(j.jsx)("label",{htmlFor:"money-input",className:"w-100",children:"\uad6c\uc785\ud560 \uae08\uc561\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694. (\ub2e8\uc704: \uc6d0)"}),Object(j.jsxs)("div",{className:"d-flex justify-space-between items-center mt-1",children:[Object(j.jsx)("input",{className:"money-input flex-auto mr-3",type:"number",value:l||"",onChange:function(e){u(e.target.valueAsNumber)},placeholder:"\uad6c\uc785 \uae08\uc561",min:"1000",required:!0,disabled:!s}),Object(j.jsx)("button",{type:"submit",className:"basic-button",disabled:!s,children:"\ud655\uc778"})]})]})})}function w(e){var n=Object(c.useState)({}),t=Object(o.a)(n,2),s=t[0],a=t[1],i=Object(c.useState)(0),u=Object(o.a)(i,2),b=u[0],m=u[1],N=function(e){a(Object(r.a)(Object(r.a)({},s),{},Object(l.a)({},e.target.name,e.target.valueAsNumber)))};return Object(j.jsx)("section",{className:"w-100 mt-5",children:Object(j.jsxs)("form",{className:"w-100 mt-1",onSubmit:function(n){var t;(n.preventDefault(),e.lottoCount)?(t=[].concat(Object(O.a)(Object.values(s)),[b])).length===new Set(t).size?(e.openModal(),e.setWinningNumbers(Object.values(s)),e.setBonusNumber(b)):alert(x.DUPLICATED_WINNING_NUMBERS):alert(x.LOTTO_NOT_EXIST)},children:[Object(j.jsx)("label",{htmlFor:"first-winning-number",className:"w-100",children:"\uc9c0\ub09c \uc8fc \ub2f9\ucca8\ubc88\ud638 6\uac1c\uc640 \ubcf4\ub108\uc2a4 \ub118\ubc84 1\uac1c\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694."}),Object(j.jsxs)("div",{className:"d-flex mt-3",children:[Object(j.jsxs)("fieldset",{id:"winning-number-fieldset",className:"d-flex flex-col flex-auto",children:[Object(j.jsx)("legend",{className:"text-center font-bold",children:"\ub2f9\ucca8\ubc88\ud638"}),Object(j.jsxs)("div",{className:"d-flex flex-row justify-space-between",children:[Object(j.jsx)("input",{type:"number",min:"1",max:"45",id:"first-winning-number",className:"winning-number-input",name:"first-winning-number",value:s["first-winning-number"]||"",onChange:N,required:!0}),Object(j.jsx)("input",{type:"number",min:"1",max:"45","aria-label":"winning-number",className:"winning-number-input",name:"second-winning-number",value:s["second-winning-number"]||"",onChange:N,required:!0}),Object(j.jsx)("input",{type:"number",min:"1",max:"45","aria-label":"winning-number",name:"third-winning-number",value:s["third-winning-number"]||"",onChange:N,required:!0}),Object(j.jsx)("input",{type:"number",min:"1",max:"45","aria-label":"winning-number",name:"fourth-winning-number",value:s["fourth-winning-number"]||"",onChange:N,required:!0}),Object(j.jsx)("input",{type:"number",min:"1",max:"45","aria-label":"winning-number",name:"fifth-winning-number",value:s["fifth-winning-number"]||"",onChange:N,required:!0}),Object(j.jsx)("input",{type:"number",min:"1",max:"45","aria-label":"winning-number",name:"sixth-winning-number",value:s["sixth-winning-number"]||"",onChange:N,required:!0})]})]}),Object(j.jsxs)("fieldset",{id:"bonus-number-fieldset",className:"d-flex flex-col justify-center items-center",children:[Object(j.jsx)("legend",{className:"text-center font-bold",children:"\ubcf4\ub108\uc2a4"}),Object(j.jsx)("input",{type:"number",className:"winning-number-input",name:"bonus-number",value:b||"",onChange:function(e){m(e.target.value)},min:"1",max:"45",required:!0})]})]}),Object(j.jsx)("button",{className:"w-100 basic-button mt-3",type:"submit",children:"\uacb0\uacfc \ud655\uc778\ud558\uae30"})]})})}var D=function(){var e=new Date,n=e.getDay(),t=h-n,c=new Date;return c.setDate(c.getDate()+t),c.setHours(g),c.setMinutes(f),c.setSeconds(I),c<=e&&c.setDate(c.getDate()+7),c};function S(e){var n=Object(c.useState)(0),t=Object(o.a)(n,2),s=t[0],a=t[1];Object(c.useEffect)((function(){r();var e=setInterval(r,1e3);return function(){clearInterval(e)}}),[]);var i,r=function(){var n=new Date,t=e.announcementDate-n;t<1e3&&e.setAnnouncementDate(D()),a(t)};return Object(j.jsxs)("div",{className:"mt-5 text-center",children:[Object(j.jsx)("h3",{className:"m-1",children:"\ud83c\udf89 \ub2f9\ucca8 \ubc88\ud638 \ubc1c\ud45c \uc2dc\uac04 \ud83c\udf89"}),Object(j.jsx)("p",{className:"m-1",children:e.announcementDate.toLocaleString("ko-KR")}),Object(j.jsxs)("p",{className:"mt-1",children:["\ub0a8\uc740 \uc2dc\uac04 : ",(i=s,Math.floor(i/864e5)+"\uc77c "+Math.floor(i/36e5%24)+"\uc2dc\uac04 "+Math.floor(i/6e4)%60+"\ubd84 "+Math.floor(i/1e3)%60+"\ucd08")]})]})}function F(e){return Object(j.jsx)("div",{className:"modal d-flex justify-center items-center",role:"dialog","aria-modal":"true",onMouseDown:function(n){n.currentTarget===n.target&&e.closeModal()},onKeyDown:function(n){"Esc"!==n.key&&"Escape"!==n.key||e.closeModal()},tabIndex:"0",children:Object(j.jsxs)("div",{className:"modal-inner d-flex flex-col justify-center",children:[Object(j.jsx)("button",{type:"button",className:"modal-close-button",onClick:e.closeModal,children:Object(j.jsx)("svg",{viewBox:"0 0 40 40",children:Object(j.jsx)("path",{className:"close-x",d:"M 10,10 L 30,30 M 30, 10 L 10, 30"})})}),Object(j.jsx)("h1",{className:"text-center m-0",children:"\ud83d\udcb5 \ub2f9\ucca8 \uacb0\uacfc"}),Object(j.jsx)(A,{winningCounts:e.winningCounts}),Object(j.jsx)(v,{paidMoney:e.paidMoney,winningCounts:e.winningCounts}),Object(j.jsx)("button",{type:"button",className:"restart-button basic-button mt-5",onClick:e.resetAllState,children:"\ub2e4\uc2dc \uc2dc\uc791\ud558\uae30"})]})})}function v(e){return Object(j.jsxs)("div",{className:"mt-5 text-center",children:["\ud83c\udf89\ud83c\udf89 \ub2f9\uc2e0\uc758 \ucd1d \uc218\uc775\ub960\uc740 ",Object(j.jsx)("span",{className:"font-bold",children:function(){var n=Object.keys(e.winningCounts).reduce((function(n,t){return n+e.winningCounts[t]*d[t]}),0),t=e.paidMoney;return Math.floor((n-t)/t*100)}()}),"%\uc785\ub2c8\ub2e4. \ud83c\udf89\ud83c\udf89"]})}function A(e){return Object(j.jsx)("table",{className:"mt-3",children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{className:"p-2",children:"\uc77c\uce58 \uac2f\uc218"}),Object(j.jsx)("th",{className:"p-2",children:"\ub2f9\ucca8\uae08"}),Object(j.jsx)("th",{className:"p-2",children:"\ub2f9\ucca8 \uac2f\uc218"})]}),Object(j.jsxs)("tr",{className:"text-center",children:[Object(j.jsx)("td",{className:"p-2",children:"3\uac1c"}),Object(j.jsx)("td",{className:"p-2",children:N.WINNING_PRIZE.FIFTH.toLocaleString()}),Object(j.jsxs)("td",{className:"p-2",children:[Object(j.jsx)("span",{children:e.winningCounts[N.RANK.FIFTH]}),"\uac1c"]})]}),Object(j.jsxs)("tr",{className:"text-center",children:[Object(j.jsx)("td",{className:"p-2",children:"4\uac1c"}),Object(j.jsx)("td",{className:"p-2",children:N.WINNING_PRIZE.FOURTH.toLocaleString()}),Object(j.jsxs)("td",{className:"p-2",children:[Object(j.jsx)("span",{children:e.winningCounts[N.RANK.FOURTH]}),"\uac1c"]})]}),Object(j.jsxs)("tr",{className:"text-center",children:[Object(j.jsx)("td",{className:"p-2",children:"5\uac1c"}),Object(j.jsx)("td",{className:"p-2",children:N.WINNING_PRIZE.THIRD.toLocaleString()}),Object(j.jsxs)("td",{className:"p-2",children:[Object(j.jsx)("span",{children:e.winningCounts[N.RANK.THIRD]}),"\uac1c"]})]}),Object(j.jsxs)("tr",{className:"text-center",children:[Object(j.jsx)("td",{className:"p-2",children:"5\uac1c + \ubcf4\ub108\uc2a4\ubcfc"}),Object(j.jsx)("td",{className:"p-2",children:N.WINNING_PRIZE.SECOND.toLocaleString()}),Object(j.jsxs)("td",{className:"p-2",children:[Object(j.jsx)("span",{children:e.winningCounts[N.RANK.SECOND]}),"\uac1c"]})]}),Object(j.jsxs)("tr",{className:"text-center",children:[Object(j.jsx)("td",{className:"p-2",children:"6\uac1c"}),Object(j.jsx)("td",{className:"p-2",children:N.WINNING_PRIZE.FIRST.toLocaleString()}),Object(j.jsxs)("td",{className:"p-2",children:[Object(j.jsx)("span",{children:e.winningCounts[N.RANK.FIRST]}),"\uac1c"]})]})]})})}function M(){var e,n=Object(c.useState)(!1),t=Object(o.a)(n,2),s=t[0],a=t[1],i=Object(c.useState)((e={},Object(l.a)(e,N.RANK.FIRST,0),Object(l.a)(e,N.RANK.SECOND,0),Object(l.a)(e,N.RANK.THIRD,0),Object(l.a)(e,N.RANK.FOURTH,0),Object(l.a)(e,N.RANK.FIFTH,0),e)),b=Object(o.a)(i,2),O=b[0],d=b[1],x=Object(c.useState)(0),h=Object(o.a)(x,2),g=h[0],f=h[1],I=Object(c.useState)(new Date),p=Object(o.a)(I,2),R=p[0],T=p[1],C=Object(c.useState)(D()),w=Object(o.a)(C,2),S=w[0],v=w[1];return Object(j.jsxs)("div",{className:"app d-flex justify-center items-center",children:[Object(j.jsx)(u,{announcementDate:S,setAnnouncementDate:v,isModalOpened:s,openModal:function(){a(!0)},increaseWinningCounts:function(e){d(Object(r.a)(Object(r.a)({},O),{},Object(l.a)({},e,O[e]+1)))},setWinningCounts:d,lottoCount:g,setLottoCount:f},R),s&&Object(j.jsx)(F,{closeModal:function(){var e;a(!1),d((e={},Object(l.a)(e,N.RANK.FIRST,0),Object(l.a)(e,N.RANK.SECOND,0),Object(l.a)(e,N.RANK.THIRD,0),Object(l.a)(e,N.RANK.FOURTH,0),Object(l.a)(e,N.RANK.FIFTH,0),e))},winningCounts:O,paidMoney:g*m,resetAllState:function(){var e;a(!1),d((e={},Object(l.a)(e,N.RANK.FIRST,0),Object(l.a)(e,N.RANK.SECOND,0),Object(l.a)(e,N.RANK.THIRD,0),Object(l.a)(e,N.RANK.FOURTH,0),Object(l.a)(e,N.RANK.FIFTH,0),e)),f(0),T(new Date),v(D())}})]})}var E=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(n){var t=n.getCLS,c=n.getFID,s=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(M,{})}),document.getElementById("root")),E()}},[[17,1,2]]]);
//# sourceMappingURL=main.ea463fa1.chunk.js.map