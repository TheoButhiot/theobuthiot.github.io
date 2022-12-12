(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();const Q={view:async()=>`
        <ul hidden>
    <li><a href="/">home</a></li>
    <li><a href="../#Work">work</a></li>
    <li><a href="../#AboutMe">aboutMe</a></li>
    <li><a href="../#Contact">contact</a></li>

    
</ul>
`,after:()=>{console.log("Component navigation mounted")}};var j=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ce={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(j,function(){var n=document,r=n.createTextNode.bind(n);function o(a,i,s){a.style.setProperty(i,s)}function c(a,i){return a.appendChild(i)}function u(a,i,s,f){var m=n.createElement("span");return i&&(m.className=i),s&&(!f&&m.setAttribute("data-"+i,s),m.textContent=s),a&&c(a,m)||m}function d(a,i){return a.getAttribute("data-"+i)}function v(a,i){return!a||a.length==0?[]:a.nodeName?[a]:[].slice.call(a[0].nodeName?a:(i||n).querySelectorAll(a))}function p(a){for(var i=[];a--;)i[a]=[];return i}function g(a,i){a&&a.some(i)}function O(a){return function(i){return a[i]}}function M(a,i,s){var f="--"+i,m=f+"-index";g(s,function(h,y){Array.isArray(h)?g(h,function(S){o(S,m,y)}):o(h,m,y)}),o(a,f+"-total",s.length)}var L={};function $(a,i,s){var f=s.indexOf(a);if(f==-1)s.unshift(a),g(L[a].depends,function(h){$(h,a,s)});else{var m=s.indexOf(i);s.splice(f,1),s.splice(m,0,a)}return s}function T(a,i,s,f){return{by:a,depends:i,key:s,split:f}}function I(a){return $(a,0,[]).map(O(L))}function b(a){L[a.by]=a}function A(a,i,s,f,m){a.normalize();var h=[],y=document.createDocumentFragment();f&&h.push(a.previousSibling);var S=[];return v(a.childNodes).some(function(x){if(x.tagName&&!x.hasChildNodes()){S.push(x);return}if(x.childNodes&&x.childNodes.length){S.push(x),h.push.apply(h,A(x,i,s,f,m));return}var H=x.wholeText||"",J=H.trim();J.length&&(H[0]===" "&&S.push(r(" ")),g(J.split(s),function(Me,Ae){Ae&&m&&S.push(u(y,"whitespace"," ",m));var K=u(y,i,Me);h.push(K),S.push(K)}),H[H.length-1]===" "&&S.push(r(" ")))}),g(S,function(x){c(y,x)}),a.innerHTML="",c(a,y),h}var N=0;function D(a,i){for(var s in i)a[s]=i[s];return a}var E="words",l=T(E,N,"word",function(a){return A(a,"word",/\s+/,0,1)}),k="chars",C=T(k,[E],"char",function(a,i,s){var f=[];return g(s[E],function(m,h){f.push.apply(f,A(m,"char","",i.whitespace&&h))}),f});function z(a){a=a||{};var i=a.key;return v(a.target||"[data-splitting]").map(function(s){var f=s["\u{1F34C}"];if(!a.force&&f)return f;f=s["\u{1F34C}"]={el:s};var m=I(a.by||d(s,"splitting")||k),h=D({},a);return g(m,function(y){if(y.split){var S=y.by,x=(i?"-"+i:"")+y.key,H=y.split(s,h,f);x&&M(s,x,H),f[S]=H,s.classList.add(S)}}),s.classList.add("splitting"),f})}function we(a){a=a||{};var i=a.target=u();return i.innerHTML=a.content,z(a),i.outerHTML}z.html=we,z.add=b;function G(a,i,s){var f=v(i.matching||a.children,a),m={};return g(f,function(h){var y=Math.round(h[s]);(m[y]||(m[y]=[])).push(h)}),Object.keys(m).map(Number).sort(ke).map(O(m))}function ke(a,i){return a-i}var Se=T("lines",[E],"line",function(a,i,s){return G(a,{matching:s[E]},"offsetTop")}),xe=T("items",N,"item",function(a,i){return v(i.matching||a.children,a)}),Te=T("rows",N,"row",function(a,i){return G(a,i,"offsetTop")}),Oe=T("cols",N,"col",function(a,i){return G(a,i,"offsetLeft")}),Ee=T("grid",["rows","cols"]),B="layout",Ce=T(B,N,N,function(a,i){var s=i.rows=+(i.rows||d(a,"rows")||1),f=i.columns=+(i.columns||d(a,"columns")||1);if(i.image=i.image||d(a,"image")||a.currentSrc||a.src,i.image){var m=v("img",a)[0];i.image=m&&(m.currentSrc||m.src)}i.image&&o(a,"background-image","url("+i.image+")");for(var h=s*f,y=[],S=u(N,"cell-grid");h--;){var x=u(S,"cell");u(x,"cell-inner"),y.push(x)}return c(a,S),y}),Le=T("cellRows",[B],"row",function(a,i,s){var f=i.rows,m=p(f);return g(s[B],function(h,y,S){m[Math.floor(y/(S.length/f))].push(h)}),m}),Ne=T("cellColumns",[B],"col",function(a,i,s){var f=i.columns,m=p(f);return g(s[B],function(h,y){m[y%f].push(h)}),m}),ze=T("cells",["cellRows","cellColumns"],"cell",function(a,i,s){return s[B]});return b(l),b(C),b(Se),b(xe),b(Te),b(Oe),b(Ee),b(Ce),b(Le),b(Ne),b(ze),z})})(ce);const Pe=ce.exports,je={view:async()=>`
		<img src="/img/Sans titre.png" alt="" class="menuBurger">
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
					<a href="https://github.com/TheoButhiot">
						https://github.com/TheoButhiot</a>
				</li>
			</ul>
			</footer>
		</section>
`,after:()=>{console.log("Component Home mounted"),Pe();const t=document.querySelector(".menuBurger"),e=document.querySelector(".navbar");t.addEventListener("click",()=>{e.classList.toggle("mobileMenu")})}};var le="Expected a function",X=0/0,qe="[object Symbol]",Ie=/^\s+|\s+$/g,He=/^[-+]0x[0-9a-f]+$/i,_e=/^0b[01]+$/i,$e=/^0o[0-7]+$/i,Be=parseInt,De=typeof j=="object"&&j&&j.Object===Object&&j,We=typeof self=="object"&&self&&self.Object===Object&&self,Fe=De||We||Function("return this")(),Re=Object.prototype,Ue=Re.toString,Ge=Math.max,Ye=Math.min,Y=function(){return Fe.Date.now()};function Ve(t,e,n){var r,o,c,u,d,v,p=0,g=!1,O=!1,M=!0;if(typeof t!="function")throw new TypeError(le);e=ee(e)||0,U(n)&&(g=!!n.leading,O="maxWait"in n,c=O?Ge(ee(n.maxWait)||0,e):c,M="trailing"in n?!!n.trailing:M);function L(l){var k=r,C=o;return r=o=void 0,p=l,u=t.apply(C,k),u}function $(l){return p=l,d=setTimeout(b,e),g?L(l):u}function T(l){var k=l-v,C=l-p,z=e-k;return O?Ye(z,c-C):z}function I(l){var k=l-v,C=l-p;return v===void 0||k>=e||k<0||O&&C>=c}function b(){var l=Y();if(I(l))return A(l);d=setTimeout(b,T(l))}function A(l){return d=void 0,M&&r?L(l):(r=o=void 0,u)}function N(){d!==void 0&&clearTimeout(d),p=0,r=v=o=d=void 0}function D(){return d===void 0?u:A(Y())}function E(){var l=Y(),k=I(l);if(r=arguments,o=this,v=l,k){if(d===void 0)return $(v);if(O)return d=setTimeout(b,e),L(v)}return d===void 0&&(d=setTimeout(b,e)),u}return E.cancel=N,E.flush=D,E}function Ze(t,e,n){var r=!0,o=!0;if(typeof t!="function")throw new TypeError(le);return U(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Ve(t,e,{leading:r,maxWait:e,trailing:o})}function U(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Je(t){return!!t&&typeof t=="object"}function Ke(t){return typeof t=="symbol"||Je(t)&&Ue.call(t)==qe}function ee(t){if(typeof t=="number")return t;if(Ke(t))return X;if(U(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=U(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(Ie,"");var n=_e.test(t);return n||$e.test(t)?Be(t.slice(2),n?2:8):He.test(t)?X:+t}var Qe=Ze,Xe="Expected a function",te=0/0,et="[object Symbol]",tt=/^\s+|\s+$/g,nt=/^[-+]0x[0-9a-f]+$/i,at=/^0b[01]+$/i,rt=/^0o[0-7]+$/i,it=parseInt,ot=typeof j=="object"&&j&&j.Object===Object&&j,st=typeof self=="object"&&self&&self.Object===Object&&self,ct=ot||st||Function("return this")(),lt=Object.prototype,ut=lt.toString,dt=Math.max,ft=Math.min,V=function(){return ct.Date.now()};function mt(t,e,n){var r,o,c,u,d,v,p=0,g=!1,O=!1,M=!0;if(typeof t!="function")throw new TypeError(Xe);e=ne(e)||0,Z(n)&&(g=!!n.leading,O="maxWait"in n,c=O?dt(ne(n.maxWait)||0,e):c,M="trailing"in n?!!n.trailing:M);function L(l){var k=r,C=o;return r=o=void 0,p=l,u=t.apply(C,k),u}function $(l){return p=l,d=setTimeout(b,e),g?L(l):u}function T(l){var k=l-v,C=l-p,z=e-k;return O?ft(z,c-C):z}function I(l){var k=l-v,C=l-p;return v===void 0||k>=e||k<0||O&&C>=c}function b(){var l=V();if(I(l))return A(l);d=setTimeout(b,T(l))}function A(l){return d=void 0,M&&r?L(l):(r=o=void 0,u)}function N(){d!==void 0&&clearTimeout(d),p=0,r=v=o=d=void 0}function D(){return d===void 0?u:A(V())}function E(){var l=V(),k=I(l);if(r=arguments,o=this,v=l,k){if(d===void 0)return $(v);if(O)return d=setTimeout(b,e),L(v)}return d===void 0&&(d=setTimeout(b,e)),u}return E.cancel=N,E.flush=D,E}function Z(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function vt(t){return!!t&&typeof t=="object"}function gt(t){return typeof t=="symbol"||vt(t)&&ut.call(t)==et}function ne(t){if(typeof t=="number")return t;if(gt(t))return te;if(Z(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Z(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(tt,"");var n=at.test(t);return n||rt.test(t)?it(t.slice(2),n?2:8):nt.test(t)?te:+t}var ae=mt,ue=function(){};function de(t){var e=void 0,n=void 0,r=void 0;for(e=0;e<t.length;e+=1)if(n=t[e],n.dataset&&n.dataset.aos||(r=n.children&&de(n.children),r))return!0;return!1}function pt(t){!t||t.forEach(function(e){var n=Array.prototype.slice.call(e.addedNodes),r=Array.prototype.slice.call(e.removedNodes),o=n.concat(r);if(de(o))return ue()})}function fe(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function ht(){return!!fe()}function bt(t,e){var n=window.document,r=fe(),o=new r(pt);ue=e,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}var re={isSupported:ht,ready:bt},yt=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},wt=function(){function t(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),kt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},St=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,xt=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,Tt=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,Ot=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function ie(){return navigator.userAgent||navigator.vendor||window.opera||""}var Et=function(){function t(){yt(this,t)}return wt(t,[{key:"phone",value:function(){var n=ie();return!!(St.test(n)||xt.test(n.substr(0,4)))}},{key:"mobile",value:function(){var n=ie();return!!(Tt.test(n)||Ot.test(n.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),t}(),R=new Et,Ct=function(e,n){return n&&n.forEach(function(r){return e.classList.add(r)})},Lt=function(e,n){return n&&n.forEach(function(r){return e.classList.remove(r)})},W=function(e,n){var r=void 0;return R.ie11()?(r=document.createEvent("CustomEvent"),r.initCustomEvent(e,!0,!0,{detail:n})):r=new CustomEvent(e,{detail:n}),document.dispatchEvent(r)},Nt=function(e,n){var r=e.options,o=e.position,c=e.node;e.data;var u=function(){!e.animated||(Lt(c,r.animatedClassNames),W("aos:out",c),e.options.id&&W("aos:in:"+e.options.id,c),e.animated=!1)},d=function(){e.animated||(Ct(c,r.animatedClassNames),W("aos:in",c),e.options.id&&W("aos:in:"+e.options.id,c),e.animated=!0)};r.mirror&&n>=o.out&&!r.once?u():n>=o.in?d():e.animated&&!r.once&&u()},oe=function(e){return e.forEach(function(n,r){return Nt(n,window.pageYOffset)})},me=function(e){for(var n=0,r=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)n+=e.offsetLeft-(e.tagName!="BODY"?e.scrollLeft:0),r+=e.offsetTop-(e.tagName!="BODY"?e.scrollTop:0),e=e.offsetParent;return{top:r,left:n}},q=function(t,e,n){var r=t.getAttribute("data-aos-"+e);if(typeof r<"u"){if(r==="true")return!0;if(r==="false")return!1}return r||n},zt=function(e,n,r){var o=window.innerHeight,c=q(e,"anchor"),u=q(e,"anchor-placement"),d=Number(q(e,"offset",u?0:n)),v=u||r,p=e;c&&document.querySelectorAll(c)&&(p=document.querySelectorAll(c)[0]);var g=me(p).top-o;switch(v){case"top-bottom":break;case"center-bottom":g+=p.offsetHeight/2;break;case"bottom-bottom":g+=p.offsetHeight;break;case"top-center":g+=o/2;break;case"center-center":g+=o/2+p.offsetHeight/2;break;case"bottom-center":g+=o/2+p.offsetHeight;break;case"top-top":g+=o;break;case"bottom-top":g+=o+p.offsetHeight;break;case"center-top":g+=o+p.offsetHeight/2;break}return g+d},Mt=function(e,n){var r=q(e,"anchor"),o=q(e,"offset",n),c=e;r&&document.querySelectorAll(r)&&(c=document.querySelectorAll(r)[0]);var u=me(c).top;return u+c.offsetHeight-o},At=function(e,n){return e.forEach(function(r,o){var c=q(r.node,"mirror",n.mirror),u=q(r.node,"once",n.once),d=q(r.node,"id"),v=n.useClassNames&&r.node.getAttribute("data-aos"),p=[n.animatedClassName].concat(v?v.split(" "):[]).filter(function(g){return typeof g=="string"});n.initClassName&&r.node.classList.add(n.initClassName),r.position={in:zt(r.node,n.offset,n.anchorPlacement),out:c&&Mt(r.node,n.offset)},r.options={once:u,mirror:c,animatedClassNames:p,id:d}}),e},ve=function(){var t=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(t,function(e){return{node:e}})},P=[],se=!1,w={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},ge=function(){return document.all&&!window.atob},Pt=function(){return P=At(P,w),oe(P),window.addEventListener("scroll",Qe(function(){oe(P,w.once)},w.throttleDelay)),P},_=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;e&&(se=!0),se&&Pt()},pe=function(){if(P=ve(),be(w.disable)||ge())return he();_()},he=function(){P.forEach(function(e,n){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),w.initClassName&&e.node.classList.remove(w.initClassName),w.animatedClassName&&e.node.classList.remove(w.animatedClassName)})},be=function(e){return e===!0||e==="mobile"&&R.mobile()||e==="phone"&&R.phone()||e==="tablet"&&R.tablet()||typeof e=="function"&&e()===!0},jt=function(e){return w=kt(w,e),P=ve(),!w.disableMutationObserver&&!re.isSupported()&&(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),w.disableMutationObserver=!0),w.disableMutationObserver||re.ready("[data-aos]",pe),be(w.disable)||ge()?he():(document.querySelector("body").setAttribute("data-aos-easing",w.easing),document.querySelector("body").setAttribute("data-aos-duration",w.duration),document.querySelector("body").setAttribute("data-aos-delay",w.delay),["DOMContentLoaded","load"].indexOf(w.startEvent)===-1?document.addEventListener(w.startEvent,function(){_(!0)}):window.addEventListener("load",function(){_(!0)}),w.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1&&_(!0),window.addEventListener("resize",ae(_,w.debounceDelay,!0)),window.addEventListener("orientationchange",ae(_,w.debounceDelay,!0)),P)},qt={init:jt,refresh:_,refreshHard:pe};const It={view:async()=>`
		<img src="/img/Sans titre.png" alt="" class="menuBurger">
		<video autoplay loop muted plays-inline class="back-video">
		<source src="img/Plafond - 1663 (1).mp4">
	</video>

        <section class="Main">
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

		<section class="Main">
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

		
		<section class="Main">
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

		<section class="Main">
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
`,after:()=>{console.log("Component Home mounted"),qt.init();const t=document.querySelector(".menuBurger"),e=document.querySelector(".navbar");t.addEventListener("click",()=>{e.classList.toggle("mobileMenu")})}},Ht={view:async()=>`
        <img src="/img/Sans titre.png" alt="" class="menuBurger">
        <video autoplay loop muted plays-inline class="back-video">
        <source src="/img/Vague - 49131.mp4" type="video/mp4">
    </video>

    <section class="Main">
        <div class="navbar">
            <ul class="link">
            <img src="/img/Sans titre.png" alt="" class="menuBurger">
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
`,after:()=>{console.log("Component Home mounted");const t=document.querySelector(".menuBurger"),e=document.querySelector(".navbar");t.addEventListener("click",()=>{e.classList.toggle("mobileMenu")})}},_t={view:async()=>`
        <img src="/img/Sans titre.png" alt="" class="menuBurger">
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
`,after:()=>{console.log("Component Home mounted");const t=document.querySelector(".menuBurger"),e=document.querySelector(".navbar");t.addEventListener("click",()=>{e.classList.toggle("mobileMenu")})}},F={"/":je,Work:It,AboutMe:Ht,Contact:_t},$t=document.getElementById("app"),Bt=document.getElementById("navigation"),ye=async()=>{let t=location.hash.split("#")[1]||"/";Bt.innerHTML=await Q.view(),await Q.after(),F[t]||(F[t]=Error404),$t.innerHTML=await F[t].view(),F[t].after()};window.addEventListener("hashchange",async()=>{await ye()});window.addEventListener("load",async()=>{await ye()});
