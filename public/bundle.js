var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function c(t){return document.createElement(t)}function l(){return t=" ",document.createTextNode(t);var t}function i(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}let u;function d(t){u=t}const f=[],m=[],p=[],h=[],$=Promise.resolve();let g=!1;function _(t){p.push(t)}function v(){const t=new Set;do{for(;f.length;){const t=f.shift();d(t),y(t.$$)}for(;m.length;)m.pop()();for(let e=0;e<p.length;e+=1){const n=p[e];t.has(n)||(n(),t.add(n))}p.length=0}while(f.length);for(;h.length;)h.pop()();g=!1}function y(t){t.fragment&&(t.update(t.dirty),r(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(_))}const b=new Set;function x(t,e){t.$$.dirty||(f.push(t),g||(g=!0,$.then(v)),t.$$.dirty=n()),t.$$.dirty[e]=!0}function j(a,s,c,l,i,f){const m=u;d(a);const p=s.props||{},h=a.$$={fragment:null,ctx:null,props:f,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:n(),dirty:null};let $=!1;var g,y,j;h.ctx=c?c(a,p,(t,e)=>{h.ctx&&i(h.ctx[t],h.ctx[t]=e)&&(h.bound[t]&&h.bound[t](e),$&&x(a,t))}):p,h.update(),$=!0,r(h.before_update),h.fragment=l(h.ctx),s.target&&(s.hydrate?h.fragment.l((j=s.target,Array.from(j.childNodes))):h.fragment.c(),s.intro&&((g=a.$$.fragment)&&g.i&&(b.delete(g),g.i(y))),function(t,n,a){const{fragment:s,on_mount:c,on_destroy:l,after_update:i}=t.$$;s.m(n,a),_(()=>{const n=c.map(e).filter(o);l?l.push(...n):r(n),t.$$.on_mount=[]}),i.forEach(_)}(a,s.target,s.anchor),v()),d(m)}class E{$destroy(){var e,n;n=1,(e=this).$$.fragment&&(r(e.$$.on_destroy),e.$$.fragment.d(n),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={}),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const k={telegram:{token:"713285747:AAEd1AO6O2JazBAhCAElhRO8mvvjGHnlmeU",chat:"755550652"}};function A(e){var n,r,o,a,u,d,f,m,p,h;return{c(){var t,s,$,g;n=c("fieldset"),(r=c("legend")).textContent="Связаться со мной",o=l(),(a=c("div")).innerHTML='<input class="form__input svelte-19s5ajt" type="text" name="name" placeholder="Имя" required=""> <input class="form__input svelte-19s5ajt" type="email" name="email" placeholder="Email" required=""> <textarea class="form__input form__message svelte-19s5ajt" name="mess" placeholder="Ваше сообщение" required=""></textarea>',u=l(),d=c("div"),(f=c("button")).textContent="Отправить",m=l(),(p=c("button")).textContent="Очистить",i(a,"class","form__container svelte-19s5ajt"),i(f,"class","form__submit error svelte-19s5ajt"),i(p,"class","form__clean svelte-19s5ajt"),i(d,"class","form__buttons svelte-19s5ajt"),t=f,s="click",$=e.checkForm,t.addEventListener(s,$,g),h=(()=>t.removeEventListener(s,$,g))},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e),s(n,r),s(n,o),s(n,a),s(n,u),s(n,d),s(d,f),s(d,m),s(d,p)},p:t,i:t,o:t,d(t){var e;t&&(e=n).parentNode.removeChild(e),h()}}}let C="https://api.telegram.org/bot";function N(t,e,n){let{name:r}=e;return t.$set=(t=>{"name"in t&&n("name",r=t.name)}),{name:r,checkForm:t=>{let e=t.target.parentNode.parentNode.getElementsByClassName("form__input"),n={},r=!1;for(let t=0,o=e.length;t<o;t++){let o=e[t],a=o.name,s=o.value;s?(o.classList.remove("error"),n[a]=s):(o.classList.add("error"),r=!0)}r||(t=>{fetch(C+k.telegram.token+"/sendMessage",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:k.telegram.chat,text:JSON.stringify(t)})}).then(t=>t.json()).then(t=>{console.log(t)}).catch(console.warn)})(n)}}}return new class extends E{constructor(t){super(),j(this,t,N,A,a,["name"])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
