(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();const Q={view:async()=>`
        <ul hidden>
    <li><a href="/">home</a></li>
    <li><a href="../#Work">work</a></li>
    <li><a href="../#AboutMe">aboutMe</a></li>
    <li><a href="../#Contact">contact</a></li>

    
</ul>
`,after:()=>{console.log("Component navigation mounted")}};var j=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ce={exports:{}};(function(t,e){(function(n,i){t.exports=i()})(j,function(){var n=document,i=n.createTextNode.bind(n);function o(a,r,s){a.style.setProperty(r,s)}function c(a,r){return a.appendChild(r)}function u(a,r,s,f){var m=n.createElement("span");return r&&(m.className=r),s&&(!f&&m.setAttribute("data-"+r,s),m.textContent=s),a&&c(a,m)||m}function d(a,r){return a.getAttribute("data-"+r)}function v(a,r){return!a||a.length==0?[]:a.nodeName?[a]:[].slice.call(a[0].nodeName?a:(r||n).querySelectorAll(a))}function p(a){for(var r=[];a--;)r[a]=[];return r}function g(a,r){a&&a.some(r)}function S(a){return function(r){return a[r]}}function A(a,r,s){var f="--"+r,m=f+"-index";g(s,function(h,y){Array.isArray(h)?g(h,function(x){o(x,m,y)}):o(h,m,y)}),o(a,f+"-total",s.length)}var N={};function $(a,r,s){var f=s.indexOf(a);if(f==-1)s.unshift(a),g(N[a].depends,function(h){$(h,a,s)});else{var m=s.indexOf(r);s.splice(f,1),s.splice(m,0,a)}return s}function O(a,r,s,f){return{by:a,depends:r,key:s,split:f}}function H(a){return $(a,0,[]).map(S(N))}function b(a){N[a.by]=a}function M(a,r,s,f,m){a.normalize();var h=[],y=document.createDocumentFragment();f&&h.push(a.previousSibling);var x=[];return v(a.childNodes).some(function(T){if(T.tagName&&!T.hasChildNodes()){x.push(T);return}if(T.childNodes&&T.childNodes.length){x.push(T),h.push.apply(h,M(T,r,s,f,m));return}var _=T.wholeText||"",J=_.trim();J.length&&(_[0]===" "&&x.push(i(" ")),g(J.split(s),function(Ae,Me){Me&&m&&x.push(u(y,"whitespace"," ",m));var K=u(y,r,Ae);h.push(K),x.push(K)}),_[_.length-1]===" "&&x.push(i(" ")))}),g(x,function(T){c(y,T)}),a.innerHTML="",c(a,y),h}var z=0;function W(a,r){for(var s in r)a[s]=r[s];return a}var C="words",l=O(C,z,"word",function(a){return M(a,"word",/\s+/,0,1)}),k="chars",E=O(k,[C],"char",function(a,r,s){var f=[];return g(s[C],function(m,h){f.push.apply(f,M(m,"char","",r.whitespace&&h))}),f});function L(a){a=a||{};var r=a.key;return v(a.target||"[data-splitting]").map(function(s){var f=s["\u{1F34C}"];if(!a.force&&f)return f;f=s["\u{1F34C}"]={el:s};var m=H(a.by||d(s,"splitting")||k),h=W({},a);return g(m,function(y){if(y.split){var x=y.by,T=(r?"-"+r:"")+y.key,_=y.split(s,h,f);T&&A(s,T,_),f[x]=_,s.classList.add(x)}}),s.classList.add("splitting"),f})}function we(a){a=a||{};var r=a.target=u();return r.innerHTML=a.content,L(a),r.outerHTML}L.html=we,L.add=b;function G(a,r,s){var f=v(r.matching||a.children,a),m={};return g(f,function(h){var y=Math.round(h[s]);(m[y]||(m[y]=[])).push(h)}),Object.keys(m).map(Number).sort(ke).map(S(m))}function ke(a,r){return a-r}var xe=O("lines",[C],"line",function(a,r,s){return G(a,{matching:s[C]},"offsetTop")}),Te=O("items",z,"item",function(a,r){return v(r.matching||a.children,a)}),Oe=O("rows",z,"row",function(a,r){return G(a,r,"offsetTop")}),Se=O("cols",z,"col",function(a,r){return G(a,r,"offsetLeft")}),Ce=O("grid",["rows","cols"]),D="layout",Ee=O(D,z,z,function(a,r){var s=r.rows=+(r.rows||d(a,"rows")||1),f=r.columns=+(r.columns||d(a,"columns")||1);if(r.image=r.image||d(a,"image")||a.currentSrc||a.src,r.image){var m=v("img",a)[0];r.image=m&&(m.currentSrc||m.src)}r.image&&o(a,"background-image","url("+r.image+")");for(var h=s*f,y=[],x=u(z,"cell-grid");h--;){var T=u(x,"cell");u(T,"cell-inner"),y.push(T)}return c(a,x),y}),Ne=O("cellRows",[D],"row",function(a,r,s){var f=r.rows,m=p(f);return g(s[D],function(h,y,x){m[Math.floor(y/(x.length/f))].push(h)}),m}),ze=O("cellColumns",[D],"col",function(a,r,s){var f=r.columns,m=p(f);return g(s[D],function(h,y){m[y%f].push(h)}),m}),Le=O("cells",["cellRows","cellColumns"],"cell",function(a,r,s){return s[D]});return b(l),b(E),b(xe),b(Te),b(Oe),b(Se),b(Ce),b(Ee),b(Ne),b(ze),b(Le),L})})(ce);const Pe=ce.exports,je={view:async()=>`
        <video autoplay loop muted plays-inline class="back-video">
			<source src="img/Sol - 1662 (1) copy.mp4">
		</video>

		<section class="Main">
			<div class="navbar">
				<ul class="link">
		
					<img src="img/unnamed-removebg-preview copy.png" alt="" class="logoPortfo">
					
					<li>
						<a class="underline_nav" href="">home</a>
					</li>
					<li>
						<a class="underline_nav" href="#AboutMe">about me</a>
					</li>
					<li>
						<a  class="underline_nav" href="#Work">work</a>
					</li>
					<li>
						<a  class="underline_nav" href="#Contact">contact</a>
					</li>
				</ul>
			</div>

			<div class="center">
				<h1 class="center__text glitch is-glitching" data-text="THEO BUTHIOT">THEO BUTHIOT</h1>
		  	</div>
			
			<h2 class="under_title" data-splitting>Full Stack Web Developer</h2>

			<footer class="homeFooter" data-splitting>
			<ul class="homeFooterList">
				<li class="homeFooterLink">theo.buthiot@laposte.net</li>
				<li class="homeFooterLink">06.83.88.12.35</li>
				<li class="homeFooterLink">
					<a href="#">
						Linked in | Theo Buthiot</a>
				</li>
				<li class="homeFooterLink">
					<a href="#">
						https://github.com/TheoButhiot</a>
				</li>
			</ul>
			</footer>
		</section>
`,after:()=>{console.log("Component Home mounted"),Pe()}};var le="Expected a function",X=0/0,Ie="[object Symbol]",He=/^\s+|\s+$/g,_e=/^[-+]0x[0-9a-f]+$/i,qe=/^0b[01]+$/i,$e=/^0o[0-7]+$/i,De=parseInt,We=typeof j=="object"&&j&&j.Object===Object&&j,Fe=typeof self=="object"&&self&&self.Object===Object&&self,Re=We||Fe||Function("return this")(),Be=Object.prototype,Ue=Be.toString,Ge=Math.max,Ye=Math.min,Y=function(){return Re.Date.now()};function Ve(t,e,n){var i,o,c,u,d,v,p=0,g=!1,S=!1,A=!0;if(typeof t!="function")throw new TypeError(le);e=ee(e)||0,U(n)&&(g=!!n.leading,S="maxWait"in n,c=S?Ge(ee(n.maxWait)||0,e):c,A="trailing"in n?!!n.trailing:A);function N(l){var k=i,E=o;return i=o=void 0,p=l,u=t.apply(E,k),u}function $(l){return p=l,d=setTimeout(b,e),g?N(l):u}function O(l){var k=l-v,E=l-p,L=e-k;return S?Ye(L,c-E):L}function H(l){var k=l-v,E=l-p;return v===void 0||k>=e||k<0||S&&E>=c}function b(){var l=Y();if(H(l))return M(l);d=setTimeout(b,O(l))}function M(l){return d=void 0,A&&i?N(l):(i=o=void 0,u)}function z(){d!==void 0&&clearTimeout(d),p=0,i=v=o=d=void 0}function W(){return d===void 0?u:M(Y())}function C(){var l=Y(),k=H(l);if(i=arguments,o=this,v=l,k){if(d===void 0)return $(v);if(S)return d=setTimeout(b,e),N(v)}return d===void 0&&(d=setTimeout(b,e)),u}return C.cancel=z,C.flush=W,C}function Ze(t,e,n){var i=!0,o=!0;if(typeof t!="function")throw new TypeError(le);return U(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),Ve(t,e,{leading:i,maxWait:e,trailing:o})}function U(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Je(t){return!!t&&typeof t=="object"}function Ke(t){return typeof t=="symbol"||Je(t)&&Ue.call(t)==Ie}function ee(t){if(typeof t=="number")return t;if(Ke(t))return X;if(U(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=U(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(He,"");var n=qe.test(t);return n||$e.test(t)?De(t.slice(2),n?2:8):_e.test(t)?X:+t}var Qe=Ze,Xe="Expected a function",te=0/0,et="[object Symbol]",tt=/^\s+|\s+$/g,nt=/^[-+]0x[0-9a-f]+$/i,at=/^0b[01]+$/i,it=/^0o[0-7]+$/i,rt=parseInt,ot=typeof j=="object"&&j&&j.Object===Object&&j,st=typeof self=="object"&&self&&self.Object===Object&&self,ct=ot||st||Function("return this")(),lt=Object.prototype,ut=lt.toString,dt=Math.max,ft=Math.min,V=function(){return ct.Date.now()};function mt(t,e,n){var i,o,c,u,d,v,p=0,g=!1,S=!1,A=!0;if(typeof t!="function")throw new TypeError(Xe);e=ne(e)||0,Z(n)&&(g=!!n.leading,S="maxWait"in n,c=S?dt(ne(n.maxWait)||0,e):c,A="trailing"in n?!!n.trailing:A);function N(l){var k=i,E=o;return i=o=void 0,p=l,u=t.apply(E,k),u}function $(l){return p=l,d=setTimeout(b,e),g?N(l):u}function O(l){var k=l-v,E=l-p,L=e-k;return S?ft(L,c-E):L}function H(l){var k=l-v,E=l-p;return v===void 0||k>=e||k<0||S&&E>=c}function b(){var l=V();if(H(l))return M(l);d=setTimeout(b,O(l))}function M(l){return d=void 0,A&&i?N(l):(i=o=void 0,u)}function z(){d!==void 0&&clearTimeout(d),p=0,i=v=o=d=void 0}function W(){return d===void 0?u:M(V())}function C(){var l=V(),k=H(l);if(i=arguments,o=this,v=l,k){if(d===void 0)return $(v);if(S)return d=setTimeout(b,e),N(v)}return d===void 0&&(d=setTimeout(b,e)),u}return C.cancel=z,C.flush=W,C}function Z(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function vt(t){return!!t&&typeof t=="object"}function gt(t){return typeof t=="symbol"||vt(t)&&ut.call(t)==et}function ne(t){if(typeof t=="number")return t;if(gt(t))return te;if(Z(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Z(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(tt,"");var n=at.test(t);return n||it.test(t)?rt(t.slice(2),n?2:8):nt.test(t)?te:+t}var ae=mt,ue=function(){};function de(t){var e=void 0,n=void 0,i=void 0;for(e=0;e<t.length;e+=1)if(n=t[e],n.dataset&&n.dataset.aos||(i=n.children&&de(n.children),i))return!0;return!1}function pt(t){!t||t.forEach(function(e){var n=Array.prototype.slice.call(e.addedNodes),i=Array.prototype.slice.call(e.removedNodes),o=n.concat(i);if(de(o))return ue()})}function fe(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function ht(){return!!fe()}function bt(t,e){var n=window.document,i=fe(),o=new i(pt);ue=e,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}var ie={isSupported:ht,ready:bt},yt=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},wt=function(){function t(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),kt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},xt=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,Tt=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,Ot=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,St=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function re(){return navigator.userAgent||navigator.vendor||window.opera||""}var Ct=function(){function t(){yt(this,t)}return wt(t,[{key:"phone",value:function(){var n=re();return!!(xt.test(n)||Tt.test(n.substr(0,4)))}},{key:"mobile",value:function(){var n=re();return!!(Ot.test(n)||St.test(n.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),t}(),B=new Ct,Et=function(e,n){return n&&n.forEach(function(i){return e.classList.add(i)})},Nt=function(e,n){return n&&n.forEach(function(i){return e.classList.remove(i)})},F=function(e,n){var i=void 0;return B.ie11()?(i=document.createEvent("CustomEvent"),i.initCustomEvent(e,!0,!0,{detail:n})):i=new CustomEvent(e,{detail:n}),document.dispatchEvent(i)},zt=function(e,n){var i=e.options,o=e.position,c=e.node;e.data;var u=function(){!e.animated||(Nt(c,i.animatedClassNames),F("aos:out",c),e.options.id&&F("aos:in:"+e.options.id,c),e.animated=!1)},d=function(){e.animated||(Et(c,i.animatedClassNames),F("aos:in",c),e.options.id&&F("aos:in:"+e.options.id,c),e.animated=!0)};i.mirror&&n>=o.out&&!i.once?u():n>=o.in?d():e.animated&&!i.once&&u()},oe=function(e){return e.forEach(function(n,i){return zt(n,window.pageYOffset)})},me=function(e){for(var n=0,i=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)n+=e.offsetLeft-(e.tagName!="BODY"?e.scrollLeft:0),i+=e.offsetTop-(e.tagName!="BODY"?e.scrollTop:0),e=e.offsetParent;return{top:i,left:n}},I=function(t,e,n){var i=t.getAttribute("data-aos-"+e);if(typeof i<"u"){if(i==="true")return!0;if(i==="false")return!1}return i||n},Lt=function(e,n,i){var o=window.innerHeight,c=I(e,"anchor"),u=I(e,"anchor-placement"),d=Number(I(e,"offset",u?0:n)),v=u||i,p=e;c&&document.querySelectorAll(c)&&(p=document.querySelectorAll(c)[0]);var g=me(p).top-o;switch(v){case"top-bottom":break;case"center-bottom":g+=p.offsetHeight/2;break;case"bottom-bottom":g+=p.offsetHeight;break;case"top-center":g+=o/2;break;case"center-center":g+=o/2+p.offsetHeight/2;break;case"bottom-center":g+=o/2+p.offsetHeight;break;case"top-top":g+=o;break;case"bottom-top":g+=o+p.offsetHeight;break;case"center-top":g+=o+p.offsetHeight/2;break}return g+d},At=function(e,n){var i=I(e,"anchor"),o=I(e,"offset",n),c=e;i&&document.querySelectorAll(i)&&(c=document.querySelectorAll(i)[0]);var u=me(c).top;return u+c.offsetHeight-o},Mt=function(e,n){return e.forEach(function(i,o){var c=I(i.node,"mirror",n.mirror),u=I(i.node,"once",n.once),d=I(i.node,"id"),v=n.useClassNames&&i.node.getAttribute("data-aos"),p=[n.animatedClassName].concat(v?v.split(" "):[]).filter(function(g){return typeof g=="string"});n.initClassName&&i.node.classList.add(n.initClassName),i.position={in:Lt(i.node,n.offset,n.anchorPlacement),out:c&&At(i.node,n.offset)},i.options={once:u,mirror:c,animatedClassNames:p,id:d}}),e},ve=function(){var t=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(t,function(e){return{node:e}})},P=[],se=!1,w={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},ge=function(){return document.all&&!window.atob},Pt=function(){return P=Mt(P,w),oe(P),window.addEventListener("scroll",Qe(function(){oe(P,w.once)},w.throttleDelay)),P},q=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;e&&(se=!0),se&&Pt()},pe=function(){if(P=ve(),be(w.disable)||ge())return he();q()},he=function(){P.forEach(function(e,n){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),w.initClassName&&e.node.classList.remove(w.initClassName),w.animatedClassName&&e.node.classList.remove(w.animatedClassName)})},be=function(e){return e===!0||e==="mobile"&&B.mobile()||e==="phone"&&B.phone()||e==="tablet"&&B.tablet()||typeof e=="function"&&e()===!0},jt=function(e){return w=kt(w,e),P=ve(),!w.disableMutationObserver&&!ie.isSupported()&&(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),w.disableMutationObserver=!0),w.disableMutationObserver||ie.ready("[data-aos]",pe),be(w.disable)||ge()?he():(document.querySelector("body").setAttribute("data-aos-easing",w.easing),document.querySelector("body").setAttribute("data-aos-duration",w.duration),document.querySelector("body").setAttribute("data-aos-delay",w.delay),["DOMContentLoaded","load"].indexOf(w.startEvent)===-1?document.addEventListener(w.startEvent,function(){q(!0)}):window.addEventListener("load",function(){q(!0)}),w.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1&&q(!0),window.addEventListener("resize",ae(q,w.debounceDelay,!0)),window.addEventListener("orientationchange",ae(q,w.debounceDelay,!0)),P)},It={init:jt,refresh:q,refreshHard:pe};const Ht={view:async()=>`

		<video autoplay loop muted plays-inline class="back-video">
		<source src="img/Plafond - 1663 (1) copy.mp4">
	</video>
        <section class="homePage">
			<div class="navbar">
				<ul class="link">
		
						<img src="img/unnamed-removebg-preview copy.png" alt="" class="logoPortfo">
					
					<li>
						<a class="underline_nav" href="">home</a>
					</li>
					<li>
						<a  class="underline_nav" href="#AboutMe">about me</a>
					</li>
					<li>
						<a class="underline_nav" href="#Work">work</a>
					</li>
					<li>
						<a class="underline_nav" href="#Contact">contact</a>
					</li>
				</ul>
			</div>
		
				<h1 class="work">Work</h1>
				<h2 class="scrollDown">Scroll down</h2>
				 <img class="arrowDown" src="/img/iconmonstr-arrow-down-alt-lined-240.png" alt="">
			
		</section>

		<section class="Main1">
			<div class="grid">
				<div class="containerSquizzz" data-aos="fade-right" data-aos-delay="700">
					<div class="containerImg" >
						 <img src="/img/homeLesquizzz.png" alt="">
					</div>
				</div>
				<div class="containerTextSq">
					<div class="rightText">
						<div class="titleSquizzz">LE SQUIZZZ</div>
						<div class="containerDescribe">
							<span class="langageSquizzz" data-aos="fade-left" data-aos-delay="700">Quiz based on API coding with HTML, CSS and Javascript</span>
							<a class="clickHere" href="" data-aos="fade-left" data-aos-delay="900">click here</a>
						</div>
					</div>
				</div>
			</div>
		</section>

		
		<section class="Main1">
			<div class="grid">
				<div class="containerSquizzz1" data-aos="zoom-out-left" data-aos-easing="ease-in-sine" data-aos-delay="900">
					<div class="containerImg" >
						 <img src="img/2022-11-28 12_14_32-.png" alt="">
					</div>
				</div>
				<div class="containerTextSq1">
					<div class="rightText1">
						<div class="titleSquizzz1">Trapstar</div>
						<div class="containerDescribe1">
							<span class="langageSquizzz1" data-aos="zoom-out-right" data-aos-delay="700">E-shop website code in PHP POO</span>
							<a class="clickHere" href="" data-aos="fade-left" data-aos-delay="900">click here</a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="Main1">
			<div class="grid">
				<div class="containerSquizzz" data-aos="fade-right" data-aos-delay="700">
					<div class="containerImg" >
						 <img src="/img/2022-11-28 14_02_49-.png" alt="">
					</div>
				</div>
				<div class="containerTextSq">
					<div class="rightText">
						<div class="titleSquizzz">AGENDALY</div>
						<div class="containerDescribe">
							<span class="langageSquizzz" data-aos="fade-left" data-aos-delay="700">Agenda create in PHP procedural</span>
							<a class="clickHere" href="" data-aos="fade-left" data-aos-delay="900">click here</a>
						</div>
					</div>
				</div>
			</div>
		</section>

		
`,after:()=>{console.log("Component Home mounted"),It.init()}},_t={view:async()=>`
        <video autoplay loop muted plays-inline class="back-video">
        <source src="/img/Vague - 49131.mp4" type="video/mp4">
    </video>

    <section class="Main">
        <div class="navbar">
            <ul class="link">
                
                    <img src="img/unnamed-removebg-preview copy.png" alt="" class="logoPortfo">
           
                <li>
                   <a class="underline_nav" href="/">home</a>
                </li>
                <li>
                    <a class="underline_nav" href="#AboutMe">about me</a>
                </li>
                <li>
                    <a class="underline_nav" href="#Work">work</a>
                </li>
                <li>
                    <a class="underline_nav" href="#Contact">contact</a>
                </li>
            </ul>
        </div>
        
        <div class="aboutMeText">
            <h1>" I started in web development a year ago. <br><br>
               
                I like front and back end but I have a preference for the visual side of a website. <br><br>
                I code in HTML CSS JS AND PHP"<br></h1>
        </div>
    </div>

    </section>
`,after:()=>{console.log("Component Home mounted")}},qt={view:async()=>`
        <video autoplay loop muted plays-inline class="back-video">
        <source src="/img/Plafond - 877.mp4">
    </video>

    <section class="Main">
        <div class="navbar">
            <ul class="link">
               
                    <img src="img/unnamed-removebg-preview copy.png" alt="" class="logoPortfo">
               
                <li>
                    <a class="underline_nav" href="/">home</a>
                </li>
                <li>
                    <a class="underline_nav" href="#AboutMe">about me</a>
                </li>
                <li>
                    <a class="underline_nav" href="#Work">work</a>
                </li>
                <li>
                    <a class="underline_nav" href="#Contact">contact</a>
                </li>
            </ul>
        </div>

        <h1 class="mailAdress">theo.buthiot@laposte.net</h1>
    </section>
`,after:()=>{console.log("Component Home mounted")}},R={"/":je,Work:Ht,AboutMe:_t,Contact:qt},$t=document.getElementById("app"),Dt=document.getElementById("navigation"),ye=async()=>{let t=location.hash.split("#")[1]||"/";Dt.innerHTML=await Q.view(),await Q.after(),R[t]||(R[t]=Error404),$t.innerHTML=await R[t].view(),R[t].after()};window.addEventListener("hashchange",async()=>{await ye()});window.addEventListener("load",async()=>{await ye()});
