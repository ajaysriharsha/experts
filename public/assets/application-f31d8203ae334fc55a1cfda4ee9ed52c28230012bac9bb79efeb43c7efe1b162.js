/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
*/

(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.8.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  'use strict';

  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',

    // Button elements bound by jquery-ujs
    buttonClickSelector: 'button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]), textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[name][type=file]:not([disabled])',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with], a[data-disable]',

    // Button onClick disable selector with possible reenable after remote submission
    buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]',

    // Up-to-date Cross-Site Request Forgery token
    csrfToken: function() {
     return $('meta[name=csrf-token]').attr('content');
    },

    // URL param that must contain the CSRF token
    csrfParam: function() {
     return $('meta[name=csrf-param]').attr('content');
    },

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = rails.csrfToken();
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // Make sure that all forms have actual up-to-date tokens (cached forms contain old ones)
    refreshCSRFTokens: function(){
      $('form input[name="' + rails.csrfParam() + '"]').val(rails.csrfToken());
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element[0].href;
    },

    // Checks "data-remote" if true to handle the request through a XHR request.
    isRemote: function(element) {
      return element.data('remote') !== undefined && element.data('remote') !== false;
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.data('ujs:submit-button-formmethod') || element.attr('method');
          url = element.data('ujs:submit-button-formaction') || element.attr('action');
          data = $(element[0]).serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
          element.data('ujs:submit-button-formmethod', null);
          element.data('ujs:submit-button-formaction', null);
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            if (rails.fire(element, 'ajax:beforeSend', [xhr, settings])) {
              element.trigger('ajax:send', xhr);
            } else {
              return false;
            }
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: rails.isCrossDomain(url)
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        return rails.ajax(options);
      } else {
        return false;
      }
    },

    // Determines if the request is a cross domain request.
    isCrossDomain: function(url) {
      var originAnchor = document.createElement('a');
      originAnchor.href = location.href;
      var urlAnchor = document.createElement('a');

      try {
        urlAnchor.href = url;
        // This is a workaround to a IE bug.
        urlAnchor.href = urlAnchor.href;

        // If URL protocol is false or is a string containing a single colon
        // *and* host are false, assume it is not a cross-domain request
        // (should only be the case for IE7 and IE compatibility mode).
        // Otherwise, evaluate protocol and host of the URL against the origin
        // protocol and host.
        return !(((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host) ||
          (originAnchor.protocol + '//' + originAnchor.host ===
            urlAnchor.protocol + '//' + urlAnchor.host));
      } catch (e) {
        // If there is an error parsing the URL, assume it is crossDomain.
        return true;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrfToken = rails.csrfToken(),
        csrfParam = rails.csrfParam(),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrfParam !== undefined && csrfToken !== undefined && !rails.isCrossDomain(href)) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },

    // Helper function that returns form elements that match the specified CSS selector
    // If form is actually a "form" element this will return associated elements outside the from that have
    // the html form attribute set
    formElements: function(form, selector) {
      return form.is('form') ? $(form[0].elements).filter(selector) : form.find(selector);
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      rails.formElements(form, rails.disableSelector).each(function() {
        rails.disableFormElement($(this));
      });
    },

    disableFormElement: function(element) {
      var method, replacement;

      method = element.is('button') ? 'html' : 'val';
      replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element[method]());
        element[method](replacement);
      }

      element.prop('disabled', true);
      element.data('ujs:disabled', true);
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      rails.formElements(form, rails.enableSelector).each(function() {
        rails.enableFormElement($(this));
      });
    },

    enableFormElement: function(element) {
      var method = element.is('button') ? 'html' : 'val';
      if (element.data('ujs:enable-with') !== undefined) {
        element[method](element.data('ujs:enable-with'));
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.prop('disabled', false);
      element.removeData('ujs:disabled');
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        try {
          answer = rails.confirm(message);
        } catch (e) {
          (console.error || console.log).call(console, e.stack || e);
        }
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var foundInputs = $(),
        input,
        valueToCheck,
        radiosForNameWithNoneSelected,
        radioName,
        selector = specifiedSelector || 'input,textarea',
        requiredInputs = form.find(selector),
        checkedRadioButtonNames = {};

      requiredInputs.each(function() {
        input = $(this);
        if (input.is('input[type=radio]')) {

          // Don't count unchecked required radio as blank if other radio with same name is checked,
          // regardless of whether same-name radio input has required attribute or not. The spec
          // states https://www.w3.org/TR/html5/forms.html#the-required-attribute
          radioName = input.attr('name');

          // Skip if we've already seen the radio with this name.
          if (!checkedRadioButtonNames[radioName]) {

            // If none checked
            if (form.find('input[type=radio]:checked[name="' + radioName + '"]').length === 0) {
              radiosForNameWithNoneSelected = form.find(
                'input[type=radio][name="' + radioName + '"]');
              foundInputs = foundInputs.add(radiosForNameWithNoneSelected);
            }

            // We only need to check each name once.
            checkedRadioButtonNames[radioName] = radioName;
          }
        } else {
          valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : !!input.val();
          if (valueToCheck === nonBlank) {
            foundInputs = foundInputs.add(input);
          }
        }
      });
      return foundInputs.length ? foundInputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  Replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      var replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element.html()); // store enabled state
        element.html(replacement);
      }

      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
      element.data('ujs:disabled', true);
    },

    // Restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
      element.removeData('ujs:disabled');
    }
  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    // This event works the same as the load event, except that it fires every
    // time the page is loaded.
    //
    // See https://github.com/rails/jquery-ujs/issues/357
    // See https://developer.mozilla.org/en-US/docs/Using_Firefox_1.5_caching
    $(window).on('pageshow.rails', function () {
      $($.rails.enableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableFormElement(element);
        }
      });

      $($.rails.linkDisableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableElement(element);
        }
      });
    });

    $document.on('ajax:complete', rails.linkDisableSelector, function() {
        rails.enableElement($(this));
    });

    $document.on('ajax:complete', rails.buttonDisableSelector, function() {
        rails.enableFormElement($(this));
    });

    $document.on('click.rails', rails.linkClickSelector, function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (rails.isRemote(link)) {
        if (metaClick && (!method || method === 'GET') && !data) { return true; }

        var handleRemote = rails.handleRemote(link);
        // Response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.fail( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (method) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.on('click.rails', rails.buttonClickSelector, function(e) {
      var button = $(this);

      if (!rails.allowAction(button) || !rails.isRemote(button)) return rails.stopEverything(e);

      if (button.is(rails.buttonDisableSelector)) rails.disableFormElement(button);

      var handleRemote = rails.handleRemote(button);
      // Response from rails.handleRemote() will either be false or a deferred object promise.
      if (handleRemote === false) {
        rails.enableFormElement(button);
      } else {
        handleRemote.fail( function() { rails.enableFormElement(button); } );
      }
      return false;
    });

    $document.on('change.rails', rails.inputChangeSelector, function(e) {
      var link = $(this);
      if (!rails.allowAction(link) || !rails.isRemote(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.on('submit.rails', rails.formSubmitSelector, function(e) {
      var form = $(this),
        remote = rails.isRemote(form),
        blankRequiredInputs,
        nonBlankFileInputs;

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // Skip other logic when required values are missing or file upload is present
      if (form.attr('novalidate') === undefined) {
        if (form.data('ujs:formnovalidate-button') === undefined) {
          blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector, false);
          if (blankRequiredInputs && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
            return rails.stopEverything(e);
          }
        } else {
          // Clear the formnovalidate in case the next button click is not on a formnovalidate button
          // Not strictly necessary to do here, since it is also reset on each button click, but just to be certain
          form.data('ujs:formnovalidate-button', undefined);
        }
      }

      if (remote) {
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);
        if (nonBlankFileInputs) {
          // Slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // Re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // Slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.on('click.rails', rails.formInputClickSelector, function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // Register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      var form = button.closest('form');
      if (form.length === 0) {
        form = $('#' + button.attr('form'));
      }
      form.data('ujs:submit-button', data);

      // Save attributes from button
      form.data('ujs:formnovalidate-button', button.attr('formnovalidate'));
      form.data('ujs:submit-button-formaction', button.attr('formaction'));
      form.data('ujs:submit-button-formmethod', button.attr('formmethod'));
    });

    $document.on('ajax:send.rails', rails.formSubmitSelector, function(event) {
      if (this === event.target) rails.disableFormElements($(this));
    });

    $document.on('ajax:complete.rails', rails.formSubmitSelector, function(event) {
      if (this === event.target) rails.enableFormElements($(this));
    });

    $(function(){
      rails.refreshCSRFTokens();
    });
  }

})( jQuery );
/*
Turbolinks 5.0.3
Copyright © 2017 Basecamp, LLC
 */

(function(){(function(){(function(){this.Turbolinks={supported:function(){return null!=window.history.pushState&&null!=window.requestAnimationFrame&&null!=window.addEventListener}(),visit:function(e,r){return t.controller.visit(e,r)},clearCache:function(){return t.controller.clearCache()}}}).call(this)}).call(this);var t=this.Turbolinks;(function(){(function(){var e,r,n=[].slice;t.copyObject=function(t){var e,r,n;r={};for(e in t)n=t[e],r[e]=n;return r},t.closest=function(t,r){return e.call(t,r)},e=function(){var t,e;return t=document.documentElement,null!=(e=t.closest)?e:function(t){var e;for(e=this;e;){if(e.nodeType===Node.ELEMENT_NODE&&r.call(e,t))return e;e=e.parentNode}}}(),t.defer=function(t){return setTimeout(t,1)},t.throttle=function(t){var e;return e=null,function(){var r;return r=1<=arguments.length?n.call(arguments,0):[],null!=e?e:e=requestAnimationFrame(function(n){return function(){return e=null,t.apply(n,r)}}(this))}},t.dispatch=function(t,e){var r,n,o,i,s;return i=null!=e?e:{},s=i.target,r=i.cancelable,n=i.data,o=document.createEvent("Events"),o.initEvent(t,!0,r===!0),o.data=null!=n?n:{},(null!=s?s:document).dispatchEvent(o),o},t.match=function(t,e){return r.call(t,e)},r=function(){var t,e,r,n;return t=document.documentElement,null!=(e=null!=(r=null!=(n=t.matchesSelector)?n:t.webkitMatchesSelector)?r:t.msMatchesSelector)?e:t.mozMatchesSelector}(),t.uuid=function(){var t,e,r;for(r="",t=e=1;36>=e;t=++e)r+=9===t||14===t||19===t||24===t?"-":15===t?"4":20===t?(Math.floor(4*Math.random())+8).toString(16):Math.floor(15*Math.random()).toString(16);return r}}).call(this),function(){t.Location=function(){function t(t){var e,r;null==t&&(t=""),r=document.createElement("a"),r.href=t.toString(),this.absoluteURL=r.href,e=r.hash.length,2>e?this.requestURL=this.absoluteURL:(this.requestURL=this.absoluteURL.slice(0,-e),this.anchor=r.hash.slice(1))}var e,r,n,o;return t.wrap=function(t){return t instanceof this?t:new this(t)},t.prototype.getOrigin=function(){return this.absoluteURL.split("/",3).join("/")},t.prototype.getPath=function(){var t,e;return null!=(t=null!=(e=this.absoluteURL.match(/\/\/[^\/]*(\/[^?;]*)/))?e[1]:void 0)?t:"/"},t.prototype.getPathComponents=function(){return this.getPath().split("/").slice(1)},t.prototype.getLastPathComponent=function(){return this.getPathComponents().slice(-1)[0]},t.prototype.getExtension=function(){var t,e;return null!=(t=null!=(e=this.getLastPathComponent().match(/\.[^.]*$/))?e[0]:void 0)?t:""},t.prototype.isHTML=function(){return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)},t.prototype.isPrefixedBy=function(t){var e;return e=r(t),this.isEqualTo(t)||o(this.absoluteURL,e)},t.prototype.isEqualTo=function(t){return this.absoluteURL===(null!=t?t.absoluteURL:void 0)},t.prototype.toCacheKey=function(){return this.requestURL},t.prototype.toJSON=function(){return this.absoluteURL},t.prototype.toString=function(){return this.absoluteURL},t.prototype.valueOf=function(){return this.absoluteURL},r=function(t){return e(t.getOrigin()+t.getPath())},e=function(t){return n(t,"/")?t:t+"/"},o=function(t,e){return t.slice(0,e.length)===e},n=function(t,e){return t.slice(-e.length)===e},t}()}.call(this),function(){var e=function(t,e){return function(){return t.apply(e,arguments)}};t.HttpRequest=function(){function r(r,n,o){this.delegate=r,this.requestCanceled=e(this.requestCanceled,this),this.requestTimedOut=e(this.requestTimedOut,this),this.requestFailed=e(this.requestFailed,this),this.requestLoaded=e(this.requestLoaded,this),this.requestProgressed=e(this.requestProgressed,this),this.url=t.Location.wrap(n).requestURL,this.referrer=t.Location.wrap(o).absoluteURL,this.createXHR()}return r.NETWORK_FAILURE=0,r.TIMEOUT_FAILURE=-1,r.timeout=60,r.prototype.send=function(){var t;return this.xhr&&!this.sent?(this.notifyApplicationBeforeRequestStart(),this.setProgress(0),this.xhr.send(),this.sent=!0,"function"==typeof(t=this.delegate).requestStarted?t.requestStarted():void 0):void 0},r.prototype.cancel=function(){return this.xhr&&this.sent?this.xhr.abort():void 0},r.prototype.requestProgressed=function(t){return t.lengthComputable?this.setProgress(t.loaded/t.total):void 0},r.prototype.requestLoaded=function(){return this.endRequest(function(t){return function(){var e;return 200<=(e=t.xhr.status)&&300>e?t.delegate.requestCompletedWithResponse(t.xhr.responseText,t.xhr.getResponseHeader("Turbolinks-Location")):(t.failed=!0,t.delegate.requestFailedWithStatusCode(t.xhr.status,t.xhr.responseText))}}(this))},r.prototype.requestFailed=function(){return this.endRequest(function(t){return function(){return t.failed=!0,t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE)}}(this))},r.prototype.requestTimedOut=function(){return this.endRequest(function(t){return function(){return t.failed=!0,t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE)}}(this))},r.prototype.requestCanceled=function(){return this.endRequest()},r.prototype.notifyApplicationBeforeRequestStart=function(){return t.dispatch("turbolinks:request-start",{data:{url:this.url,xhr:this.xhr}})},r.prototype.notifyApplicationAfterRequestEnd=function(){return t.dispatch("turbolinks:request-end",{data:{url:this.url,xhr:this.xhr}})},r.prototype.createXHR=function(){return this.xhr=new XMLHttpRequest,this.xhr.open("GET",this.url,!0),this.xhr.timeout=1e3*this.constructor.timeout,this.xhr.setRequestHeader("Accept","text/html, application/xhtml+xml"),this.xhr.setRequestHeader("Turbolinks-Referrer",this.referrer),this.xhr.onprogress=this.requestProgressed,this.xhr.onload=this.requestLoaded,this.xhr.onerror=this.requestFailed,this.xhr.ontimeout=this.requestTimedOut,this.xhr.onabort=this.requestCanceled},r.prototype.endRequest=function(t){return this.xhr?(this.notifyApplicationAfterRequestEnd(),null!=t&&t.call(this),this.destroy()):void 0},r.prototype.setProgress=function(t){var e;return this.progress=t,"function"==typeof(e=this.delegate).requestProgressed?e.requestProgressed(this.progress):void 0},r.prototype.destroy=function(){var t;return this.setProgress(1),"function"==typeof(t=this.delegate).requestFinished&&t.requestFinished(),this.delegate=null,this.xhr=null},r}()}.call(this),function(){var e=function(t,e){return function(){return t.apply(e,arguments)}};t.ProgressBar=function(){function t(){this.trickle=e(this.trickle,this),this.stylesheetElement=this.createStylesheetElement(),this.progressElement=this.createProgressElement()}var r;return r=300,t.defaultCSS=".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width "+r+"ms ease-out, opacity "+r/2+"ms "+r/2+"ms ease-in;\n  transform: translate3d(0, 0, 0);\n}",t.prototype.show=function(){return this.visible?void 0:(this.visible=!0,this.installStylesheetElement(),this.installProgressElement(),this.startTrickling())},t.prototype.hide=function(){return this.visible&&!this.hiding?(this.hiding=!0,this.fadeProgressElement(function(t){return function(){return t.uninstallProgressElement(),t.stopTrickling(),t.visible=!1,t.hiding=!1}}(this))):void 0},t.prototype.setValue=function(t){return this.value=t,this.refresh()},t.prototype.installStylesheetElement=function(){return document.head.insertBefore(this.stylesheetElement,document.head.firstChild)},t.prototype.installProgressElement=function(){return this.progressElement.style.width=0,this.progressElement.style.opacity=1,document.documentElement.insertBefore(this.progressElement,document.body),this.refresh()},t.prototype.fadeProgressElement=function(t){return this.progressElement.style.opacity=0,setTimeout(t,1.5*r)},t.prototype.uninstallProgressElement=function(){return this.progressElement.parentNode?document.documentElement.removeChild(this.progressElement):void 0},t.prototype.startTrickling=function(){return null!=this.trickleInterval?this.trickleInterval:this.trickleInterval=setInterval(this.trickle,r)},t.prototype.stopTrickling=function(){return clearInterval(this.trickleInterval),this.trickleInterval=null},t.prototype.trickle=function(){return this.setValue(this.value+Math.random()/100)},t.prototype.refresh=function(){return requestAnimationFrame(function(t){return function(){return t.progressElement.style.width=10+90*t.value+"%"}}(this))},t.prototype.createStylesheetElement=function(){var t;return t=document.createElement("style"),t.type="text/css",t.textContent=this.constructor.defaultCSS,t},t.prototype.createProgressElement=function(){var t;return t=document.createElement("div"),t.className="turbolinks-progress-bar",t},t}()}.call(this),function(){var e=function(t,e){return function(){return t.apply(e,arguments)}};t.BrowserAdapter=function(){function r(r){this.controller=r,this.showProgressBar=e(this.showProgressBar,this),this.progressBar=new t.ProgressBar}var n,o,i,s;return s=t.HttpRequest,n=s.NETWORK_FAILURE,i=s.TIMEOUT_FAILURE,o=500,r.prototype.visitProposedToLocationWithAction=function(t,e){return this.controller.startVisitToLocationWithAction(t,e)},r.prototype.visitStarted=function(t){return t.issueRequest(),t.changeHistory(),t.loadCachedSnapshot()},r.prototype.visitRequestStarted=function(t){return this.progressBar.setValue(0),t.hasCachedSnapshot()||"restore"!==t.action?this.showProgressBarAfterDelay():this.showProgressBar()},r.prototype.visitRequestProgressed=function(t){return this.progressBar.setValue(t.progress)},r.prototype.visitRequestCompleted=function(t){return t.loadResponse()},r.prototype.visitRequestFailedWithStatusCode=function(t,e){switch(e){case n:case i:return this.reload();default:return t.loadResponse()}},r.prototype.visitRequestFinished=function(t){return this.hideProgressBar()},r.prototype.visitCompleted=function(t){return t.followRedirect()},r.prototype.pageInvalidated=function(){return this.reload()},r.prototype.showProgressBarAfterDelay=function(){return this.progressBarTimeout=setTimeout(this.showProgressBar,o)},r.prototype.showProgressBar=function(){return this.progressBar.show()},r.prototype.hideProgressBar=function(){return this.progressBar.hide(),clearTimeout(this.progressBarTimeout)},r.prototype.reload=function(){return window.location.reload()},r}()}.call(this),function(){var e=function(t,e){return function(){return t.apply(e,arguments)}};t.History=function(){function r(t){this.delegate=t,this.onPageLoad=e(this.onPageLoad,this),this.onPopState=e(this.onPopState,this)}return r.prototype.start=function(){return this.started?void 0:(addEventListener("popstate",this.onPopState,!1),addEventListener("load",this.onPageLoad,!1),this.started=!0)},r.prototype.stop=function(){return this.started?(removeEventListener("popstate",this.onPopState,!1),removeEventListener("load",this.onPageLoad,!1),this.started=!1):void 0},r.prototype.push=function(e,r){return e=t.Location.wrap(e),this.update("push",e,r)},r.prototype.replace=function(e,r){return e=t.Location.wrap(e),this.update("replace",e,r)},r.prototype.onPopState=function(e){var r,n,o,i;return this.shouldHandlePopState()&&(i=null!=(n=e.state)?n.turbolinks:void 0)?(r=t.Location.wrap(window.location),o=i.restorationIdentifier,this.delegate.historyPoppedToLocationWithRestorationIdentifier(r,o)):void 0},r.prototype.onPageLoad=function(e){return t.defer(function(t){return function(){return t.pageLoaded=!0}}(this))},r.prototype.shouldHandlePopState=function(){return this.pageIsLoaded()},r.prototype.pageIsLoaded=function(){return this.pageLoaded||"complete"===document.readyState},r.prototype.update=function(t,e,r){var n;return n={turbolinks:{restorationIdentifier:r}},history[t+"State"](n,null,e)},r}()}.call(this),function(){t.Snapshot=function(){function e(t){var e,r;r=t.head,e=t.body,this.head=null!=r?r:document.createElement("head"),this.body=null!=e?e:document.createElement("body")}return e.wrap=function(t){return t instanceof this?t:this.fromHTML(t)},e.fromHTML=function(t){var e;return e=document.createElement("html"),e.innerHTML=t,this.fromElement(e)},e.fromElement=function(t){return new this({head:t.querySelector("head"),body:t.querySelector("body")})},e.prototype.clone=function(){return new e({head:this.head.cloneNode(!0),body:this.body.cloneNode(!0)})},e.prototype.getRootLocation=function(){var e,r;return r=null!=(e=this.getSetting("root"))?e:"/",new t.Location(r)},e.prototype.getCacheControlValue=function(){return this.getSetting("cache-control")},e.prototype.hasAnchor=function(t){try{return null!=this.body.querySelector("[id='"+t+"']")}catch(e){}},e.prototype.isPreviewable=function(){return"no-preview"!==this.getCacheControlValue()},e.prototype.isCacheable=function(){return"no-cache"!==this.getCacheControlValue()},e.prototype.getSetting=function(t){var e,r;return r=this.head.querySelectorAll("meta[name='turbolinks-"+t+"']"),e=r[r.length-1],null!=e?e.getAttribute("content"):void 0},e}()}.call(this),function(){var e=[].slice;t.Renderer=function(){function t(){}var r;return t.render=function(){var t,r,n,o;return n=arguments[0],r=arguments[1],t=3<=arguments.length?e.call(arguments,2):[],o=function(t,e,r){r.prototype=t.prototype;var n=new r,o=t.apply(n,e);return Object(o)===o?o:n}(this,t,function(){}),o.delegate=n,o.render(r),o},t.prototype.renderView=function(t){return this.delegate.viewWillRender(this.newBody),t(),this.delegate.viewRendered(this.newBody)},t.prototype.invalidateView=function(){return this.delegate.viewInvalidated()},t.prototype.createScriptElement=function(t){var e;return"false"===t.getAttribute("data-turbolinks-eval")?t:(e=document.createElement("script"),e.textContent=t.textContent,r(e,t),e)},r=function(t,e){var r,n,o,i,s,a,u;for(i=e.attributes,a=[],r=0,n=i.length;n>r;r++)s=i[r],o=s.name,u=s.value,a.push(t.setAttribute(o,u));return a},t}()}.call(this),function(){t.HeadDetails=function(){function t(t){var e,r,i,s,a,u,l;for(this.element=t,this.elements={},l=this.element.childNodes,s=0,u=l.length;u>s;s++)i=l[s],i.nodeType===Node.ELEMENT_NODE&&(a=i.outerHTML,r=null!=(e=this.elements)[a]?e[a]:e[a]={type:o(i),tracked:n(i),elements:[]},r.elements.push(i))}var e,r,n,o;return t.prototype.hasElementWithKey=function(t){return t in this.elements},t.prototype.getTrackedElementSignature=function(){var t,e;return function(){var r,n;r=this.elements,n=[];for(t in r)e=r[t].tracked,e&&n.push(t);return n}.call(this).join("")},t.prototype.getScriptElementsNotInDetails=function(t){return this.getElementsMatchingTypeNotInDetails("script",t)},t.prototype.getStylesheetElementsNotInDetails=function(t){return this.getElementsMatchingTypeNotInDetails("stylesheet",t)},t.prototype.getElementsMatchingTypeNotInDetails=function(t,e){var r,n,o,i,s,a;o=this.elements,s=[];for(n in o)i=o[n],a=i.type,r=i.elements,a!==t||e.hasElementWithKey(n)||s.push(r[0]);return s},t.prototype.getProvisionalElements=function(){var t,e,r,n,o,i,s;r=[],n=this.elements;for(e in n)o=n[e],s=o.type,i=o.tracked,t=o.elements,null!=s||i?t.length>1&&r.push.apply(r,t.slice(1)):r.push.apply(r,t);return r},o=function(t){return e(t)?"script":r(t)?"stylesheet":void 0},n=function(t){return"reload"===t.getAttribute("data-turbolinks-track")},e=function(t){var e;return e=t.tagName.toLowerCase(),"script"===e},r=function(t){var e;return e=t.tagName.toLowerCase(),"style"===e||"link"===e&&"stylesheet"===t.getAttribute("rel")},t}()}.call(this),function(){var e=function(t,e){function n(){this.constructor=t}for(var o in e)r.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty;t.SnapshotRenderer=function(r){function n(e,r){this.currentSnapshot=e,this.newSnapshot=r,this.currentHeadDetails=new t.HeadDetails(this.currentSnapshot.head),this.newHeadDetails=new t.HeadDetails(this.newSnapshot.head),this.newBody=this.newSnapshot.body}return e(n,r),n.prototype.render=function(t){return this.trackedElementsAreIdentical()?(this.mergeHead(),this.renderView(function(e){return function(){return e.replaceBody(),e.focusFirstAutofocusableElement(),t()}}(this))):this.invalidateView()},n.prototype.mergeHead=function(){return this.copyNewHeadStylesheetElements(),this.copyNewHeadScriptElements(),this.removeCurrentHeadProvisionalElements(),this.copyNewHeadProvisionalElements()},n.prototype.replaceBody=function(){return this.activateBodyScriptElements(),this.importBodyPermanentElements(),this.assignNewBody()},n.prototype.trackedElementsAreIdentical=function(){return this.currentHeadDetails.getTrackedElementSignature()===this.newHeadDetails.getTrackedElementSignature()},n.prototype.copyNewHeadStylesheetElements=function(){var t,e,r,n,o;for(n=this.getNewHeadStylesheetElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(t));return o},n.prototype.copyNewHeadScriptElements=function(){var t,e,r,n,o;for(n=this.getNewHeadScriptElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(this.createScriptElement(t)));return o},n.prototype.removeCurrentHeadProvisionalElements=function(){var t,e,r,n,o;for(n=this.getCurrentHeadProvisionalElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.removeChild(t));return o},n.prototype.copyNewHeadProvisionalElements=function(){var t,e,r,n,o;for(n=this.getNewHeadProvisionalElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(t));return o},n.prototype.importBodyPermanentElements=function(){var t,e,r,n,o,i;for(n=this.getNewBodyPermanentElements(),i=[],e=0,r=n.length;r>e;e++)o=n[e],(t=this.findCurrentBodyPermanentElement(o))?i.push(o.parentNode.replaceChild(t,o)):i.push(void 0);return i},n.prototype.activateBodyScriptElements=function(){var t,e,r,n,o,i;for(n=this.getNewBodyScriptElements(),i=[],e=0,r=n.length;r>e;e++)o=n[e],t=this.createScriptElement(o),i.push(o.parentNode.replaceChild(t,o));return i},n.prototype.assignNewBody=function(){return document.body=this.newBody},n.prototype.focusFirstAutofocusableElement=function(){var t;return null!=(t=this.findFirstAutofocusableElement())?t.focus():void 0},n.prototype.getNewHeadStylesheetElements=function(){return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)},n.prototype.getNewHeadScriptElements=function(){return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)},n.prototype.getCurrentHeadProvisionalElements=function(){return this.currentHeadDetails.getProvisionalElements()},n.prototype.getNewHeadProvisionalElements=function(){return this.newHeadDetails.getProvisionalElements()},n.prototype.getNewBodyPermanentElements=function(){return this.newBody.querySelectorAll("[id][data-turbolinks-permanent]")},n.prototype.findCurrentBodyPermanentElement=function(t){return document.body.querySelector("#"+t.id+"[data-turbolinks-permanent]")},n.prototype.getNewBodyScriptElements=function(){return this.newBody.querySelectorAll("script")},n.prototype.findFirstAutofocusableElement=function(){return document.body.querySelector("[autofocus]")},n}(t.Renderer)}.call(this),function(){var e=function(t,e){function n(){this.constructor=t}for(var o in e)r.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty;t.ErrorRenderer=function(t){function r(t){this.html=t}return e(r,t),r.prototype.render=function(t){return this.renderView(function(e){return function(){return e.replaceDocumentHTML(),e.activateBodyScriptElements(),t()}}(this))},r.prototype.replaceDocumentHTML=function(){return document.documentElement.innerHTML=this.html},r.prototype.activateBodyScriptElements=function(){var t,e,r,n,o,i;for(n=this.getScriptElements(),i=[],e=0,r=n.length;r>e;e++)o=n[e],t=this.createScriptElement(o),i.push(o.parentNode.replaceChild(t,o));return i},r.prototype.getScriptElements=function(){return document.documentElement.querySelectorAll("script")},r}(t.Renderer)}.call(this),function(){t.View=function(){function e(t){this.delegate=t,this.element=document.documentElement}return e.prototype.getRootLocation=function(){return this.getSnapshot().getRootLocation()},e.prototype.getSnapshot=function(){return t.Snapshot.fromElement(this.element)},e.prototype.render=function(t,e){var r,n,o;return o=t.snapshot,r=t.error,n=t.isPreview,this.markAsPreview(n),null!=o?this.renderSnapshot(o,e):this.renderError(r,e)},e.prototype.markAsPreview=function(t){return t?this.element.setAttribute("data-turbolinks-preview",""):this.element.removeAttribute("data-turbolinks-preview")},e.prototype.renderSnapshot=function(e,r){return t.SnapshotRenderer.render(this.delegate,r,this.getSnapshot(),t.Snapshot.wrap(e))},e.prototype.renderError=function(e,r){return t.ErrorRenderer.render(this.delegate,r,e)},e}()}.call(this),function(){var e=function(t,e){return function(){return t.apply(e,arguments)}};t.ScrollManager=function(){function r(r){this.delegate=r,this.onScroll=e(this.onScroll,this),this.onScroll=t.throttle(this.onScroll)}return r.prototype.start=function(){return this.started?void 0:(addEventListener("scroll",this.onScroll,!1),this.onScroll(),this.started=!0)},r.prototype.stop=function(){return this.started?(removeEventListener("scroll",this.onScroll,!1),this.started=!1):void 0},r.prototype.scrollToElement=function(t){return t.scrollIntoView()},r.prototype.scrollToPosition=function(t){var e,r;return e=t.x,r=t.y,window.scrollTo(e,r)},r.prototype.onScroll=function(t){return this.updatePosition({x:window.pageXOffset,y:window.pageYOffset})},r.prototype.updatePosition=function(t){var e;return this.position=t,null!=(e=this.delegate)?e.scrollPositionChanged(this.position):void 0},r}()}.call(this),function(){t.SnapshotCache=function(){function e(t){this.size=t,this.keys=[],this.snapshots={}}var r;return e.prototype.has=function(t){var e;return e=r(t),e in this.snapshots},e.prototype.get=function(t){var e;if(this.has(t))return e=this.read(t),this.touch(t),e},e.prototype.put=function(t,e){return this.write(t,e),this.touch(t),e},e.prototype.read=function(t){var e;return e=r(t),this.snapshots[e]},e.prototype.write=function(t,e){var n;return n=r(t),this.snapshots[n]=e},e.prototype.touch=function(t){var e,n;return n=r(t),e=this.keys.indexOf(n),e>-1&&this.keys.splice(e,1),this.keys.unshift(n),this.trim()},e.prototype.trim=function(){var t,e,r,n,o;for(n=this.keys.splice(this.size),o=[],t=0,r=n.length;r>t;t++)e=n[t],o.push(delete this.snapshots[e]);return o},r=function(e){return t.Location.wrap(e).toCacheKey()},e}()}.call(this),function(){var e=function(t,e){return function(){return t.apply(e,arguments)}};t.Visit=function(){function r(r,n,o){this.controller=r,this.action=o,this.performScroll=e(this.performScroll,this),this.identifier=t.uuid(),this.location=t.Location.wrap(n),this.adapter=this.controller.adapter,this.state="initialized",this.timingMetrics={}}var n;return r.prototype.start=function(){return"initialized"===this.state?(this.recordTimingMetric("visitStart"),this.state="started",this.adapter.visitStarted(this)):void 0},r.prototype.cancel=function(){var t;return"started"===this.state?(null!=(t=this.request)&&t.cancel(),this.cancelRender(),this.state="canceled"):void 0},r.prototype.complete=function(){var t;return"started"===this.state?(this.recordTimingMetric("visitEnd"),this.state="completed","function"==typeof(t=this.adapter).visitCompleted&&t.visitCompleted(this),this.controller.visitCompleted(this)):void 0},r.prototype.fail=function(){var t;return"started"===this.state?(this.state="failed","function"==typeof(t=this.adapter).visitFailed?t.visitFailed(this):void 0):void 0},r.prototype.changeHistory=function(){var t,e;return this.historyChanged?void 0:(t=this.location.isEqualTo(this.referrer)?"replace":this.action,e=n(t),this.controller[e](this.location,this.restorationIdentifier),this.historyChanged=!0)},r.prototype.issueRequest=function(){return this.shouldIssueRequest()&&null==this.request?(this.progress=0,this.request=new t.HttpRequest(this,this.location,this.referrer),this.request.send()):void 0},r.prototype.getCachedSnapshot=function(){var t;return!(t=this.controller.getCachedSnapshotForLocation(this.location))||null!=this.location.anchor&&!t.hasAnchor(this.location.anchor)||"restore"!==this.action&&!t.isPreviewable()?void 0:t},r.prototype.hasCachedSnapshot=function(){return null!=this.getCachedSnapshot()},r.prototype.loadCachedSnapshot=function(){var t,e;return(e=this.getCachedSnapshot())?(t=this.shouldIssueRequest(),this.render(function(){var r;return this.cacheSnapshot(),this.controller.render({snapshot:e,isPreview:t},this.performScroll),"function"==typeof(r=this.adapter).visitRendered&&r.visitRendered(this),t?void 0:this.complete()})):void 0},r.prototype.loadResponse=function(){return null!=this.response?this.render(function(){var t,e;return this.cacheSnapshot(),this.request.failed?(this.controller.render({error:this.response},this.performScroll),"function"==typeof(t=this.adapter).visitRendered&&t.visitRendered(this),this.fail()):(this.controller.render({snapshot:this.response},this.performScroll),"function"==typeof(e=this.adapter).visitRendered&&e.visitRendered(this),this.complete())}):void 0},r.prototype.followRedirect=function(){return this.redirectedToLocation&&!this.followedRedirect?(this.location=this.redirectedToLocation,this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation,this.restorationIdentifier),this.followedRedirect=!0):void 0},r.prototype.requestStarted=function(){var t;return this.recordTimingMetric("requestStart"),"function"==typeof(t=this.adapter).visitRequestStarted?t.visitRequestStarted(this):void 0},r.prototype.requestProgressed=function(t){var e;return this.progress=t,"function"==typeof(e=this.adapter).visitRequestProgressed?e.visitRequestProgressed(this):void 0},r.prototype.requestCompletedWithResponse=function(e,r){return this.response=e,null!=r&&(this.redirectedToLocation=t.Location.wrap(r)),this.adapter.visitRequestCompleted(this)},r.prototype.requestFailedWithStatusCode=function(t,e){return this.response=e,this.adapter.visitRequestFailedWithStatusCode(this,t)},r.prototype.requestFinished=function(){var t;return this.recordTimingMetric("requestEnd"),"function"==typeof(t=this.adapter).visitRequestFinished?t.visitRequestFinished(this):void 0},r.prototype.performScroll=function(){return this.scrolled?void 0:("restore"===this.action?this.scrollToRestoredPosition()||this.scrollToTop():this.scrollToAnchor()||this.scrollToTop(),this.scrolled=!0)},r.prototype.scrollToRestoredPosition=function(){var t,e;return t=null!=(e=this.restorationData)?e.scrollPosition:void 0,null!=t?(this.controller.scrollToPosition(t),!0):void 0},r.prototype.scrollToAnchor=function(){return null!=this.location.anchor?(this.controller.scrollToAnchor(this.location.anchor),!0):void 0},r.prototype.scrollToTop=function(){return this.controller.scrollToPosition({x:0,y:0})},r.prototype.recordTimingMetric=function(t){var e;return null!=(e=this.timingMetrics)[t]?e[t]:e[t]=(new Date).getTime()},r.prototype.getTimingMetrics=function(){return t.copyObject(this.timingMetrics)},n=function(t){switch(t){case"replace":return"replaceHistoryWithLocationAndRestorationIdentifier";case"advance":case"restore":return"pushHistoryWithLocationAndRestorationIdentifier"}},r.prototype.shouldIssueRequest=function(){return"restore"===this.action?!this.hasCachedSnapshot():!0},r.prototype.cacheSnapshot=function(){return this.snapshotCached?void 0:(this.controller.cacheSnapshot(),this.snapshotCached=!0)},r.prototype.render=function(t){return this.cancelRender(),this.frame=requestAnimationFrame(function(e){return function(){return e.frame=null,t.call(e)}}(this))},r.prototype.cancelRender=function(){return this.frame?cancelAnimationFrame(this.frame):void 0},r}()}.call(this),function(){var e=function(t,e){return function(){return t.apply(e,arguments)}};t.Controller=function(){function r(){this.clickBubbled=e(this.clickBubbled,this),this.clickCaptured=e(this.clickCaptured,this),this.pageLoaded=e(this.pageLoaded,this),this.history=new t.History(this),this.view=new t.View(this),this.scrollManager=new t.ScrollManager(this),this.restorationData={},this.clearCache()}return r.prototype.start=function(){return t.supported&&!this.started?(addEventListener("click",this.clickCaptured,!0),addEventListener("DOMContentLoaded",this.pageLoaded,!1),this.scrollManager.start(),this.startHistory(),this.started=!0,this.enabled=!0):void 0},r.prototype.disable=function(){return this.enabled=!1},r.prototype.stop=function(){return this.started?(removeEventListener("click",this.clickCaptured,!0),removeEventListener("DOMContentLoaded",this.pageLoaded,!1),this.scrollManager.stop(),this.stopHistory(),this.started=!1):void 0},r.prototype.clearCache=function(){return this.cache=new t.SnapshotCache(10)},r.prototype.visit=function(e,r){var n,o;return null==r&&(r={}),e=t.Location.wrap(e),this.applicationAllowsVisitingLocation(e)?this.locationIsVisitable(e)?(n=null!=(o=r.action)?o:"advance",this.adapter.visitProposedToLocationWithAction(e,n)):window.location=e:void 0},r.prototype.startVisitToLocationWithAction=function(e,r,n){var o;return t.supported?(o=this.getRestorationDataForIdentifier(n),this.startVisit(e,r,{restorationData:o})):window.location=e},r.prototype.startHistory=function(){return this.location=t.Location.wrap(window.location),this.restorationIdentifier=t.uuid(),this.history.start(),this.history.replace(this.location,this.restorationIdentifier)},r.prototype.stopHistory=function(){return this.history.stop()},r.prototype.pushHistoryWithLocationAndRestorationIdentifier=function(e,r){return this.restorationIdentifier=r,this.location=t.Location.wrap(e),this.history.push(this.location,this.restorationIdentifier)},r.prototype.replaceHistoryWithLocationAndRestorationIdentifier=function(e,r){return this.restorationIdentifier=r,this.location=t.Location.wrap(e),this.history.replace(this.location,this.restorationIdentifier)},r.prototype.historyPoppedToLocationWithRestorationIdentifier=function(e,r){var n;return this.restorationIdentifier=r,this.enabled?(n=this.getRestorationDataForIdentifier(this.restorationIdentifier),this.startVisit(e,"restore",{restorationIdentifier:this.restorationIdentifier,restorationData:n,historyChanged:!0}),this.location=t.Location.wrap(e)):this.adapter.pageInvalidated()},r.prototype.getCachedSnapshotForLocation=function(t){var e;return e=this.cache.get(t),e?e.clone():void 0},r.prototype.shouldCacheSnapshot=function(){return this.view.getSnapshot().isCacheable()},r.prototype.cacheSnapshot=function(){var t;return this.shouldCacheSnapshot()?(this.notifyApplicationBeforeCachingSnapshot(),t=this.view.getSnapshot(),this.cache.put(this.lastRenderedLocation,t.clone())):void 0},r.prototype.scrollToAnchor=function(t){var e;return(e=document.getElementById(t))?this.scrollToElement(e):this.scrollToPosition({x:0,y:0})},r.prototype.scrollToElement=function(t){return this.scrollManager.scrollToElement(t)},r.prototype.scrollToPosition=function(t){return this.scrollManager.scrollToPosition(t)},r.prototype.scrollPositionChanged=function(t){var e;return e=this.getCurrentRestorationData(),e.scrollPosition=t},r.prototype.render=function(t,e){return this.view.render(t,e)},r.prototype.viewInvalidated=function(){return this.adapter.pageInvalidated()},r.prototype.viewWillRender=function(t){return this.notifyApplicationBeforeRender(t)},r.prototype.viewRendered=function(){return this.lastRenderedLocation=this.currentVisit.location,this.notifyApplicationAfterRender()},r.prototype.pageLoaded=function(){return this.lastRenderedLocation=this.location,this.notifyApplicationAfterPageLoad()},r.prototype.clickCaptured=function(){return removeEventListener("click",this.clickBubbled,!1),addEventListener("click",this.clickBubbled,!1)},r.prototype.clickBubbled=function(t){var e,r,n;return this.enabled&&this.clickEventIsSignificant(t)&&(r=this.getVisitableLinkForNode(t.target))&&(n=this.getVisitableLocationForLink(r))&&this.applicationAllowsFollowingLinkToLocation(r,n)?(t.preventDefault(),e=this.getActionForLink(r),this.visit(n,{action:e})):void 0},r.prototype.applicationAllowsFollowingLinkToLocation=function(t,e){var r;return r=this.notifyApplicationAfterClickingLinkToLocation(t,e),!r.defaultPrevented},r.prototype.applicationAllowsVisitingLocation=function(t){var e;return e=this.notifyApplicationBeforeVisitingLocation(t),!e.defaultPrevented},r.prototype.notifyApplicationAfterClickingLinkToLocation=function(e,r){return t.dispatch("turbolinks:click",{target:e,data:{url:r.absoluteURL},cancelable:!0})},r.prototype.notifyApplicationBeforeVisitingLocation=function(e){return t.dispatch("turbolinks:before-visit",{data:{url:e.absoluteURL},cancelable:!0})},r.prototype.notifyApplicationAfterVisitingLocation=function(e){return t.dispatch("turbolinks:visit",{data:{url:e.absoluteURL}})},r.prototype.notifyApplicationBeforeCachingSnapshot=function(){return t.dispatch("turbolinks:before-cache")},r.prototype.notifyApplicationBeforeRender=function(e){
return t.dispatch("turbolinks:before-render",{data:{newBody:e}})},r.prototype.notifyApplicationAfterRender=function(){return t.dispatch("turbolinks:render")},r.prototype.notifyApplicationAfterPageLoad=function(e){return null==e&&(e={}),t.dispatch("turbolinks:load",{data:{url:this.location.absoluteURL,timing:e}})},r.prototype.startVisit=function(t,e,r){var n;return null!=(n=this.currentVisit)&&n.cancel(),this.currentVisit=this.createVisit(t,e,r),this.currentVisit.start(),this.notifyApplicationAfterVisitingLocation(t)},r.prototype.createVisit=function(e,r,n){var o,i,s,a,u;return i=null!=n?n:{},a=i.restorationIdentifier,s=i.restorationData,o=i.historyChanged,u=new t.Visit(this,e,r),u.restorationIdentifier=null!=a?a:t.uuid(),u.restorationData=t.copyObject(s),u.historyChanged=o,u.referrer=this.location,u},r.prototype.visitCompleted=function(t){return this.notifyApplicationAfterPageLoad(t.getTimingMetrics())},r.prototype.clickEventIsSignificant=function(t){return!(t.defaultPrevented||t.target.isContentEditable||t.which>1||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey)},r.prototype.getVisitableLinkForNode=function(e){return this.nodeIsVisitable(e)?t.closest(e,"a[href]:not([target]):not([download])"):void 0},r.prototype.getVisitableLocationForLink=function(e){var r;return r=new t.Location(e.getAttribute("href")),this.locationIsVisitable(r)?r:void 0},r.prototype.getActionForLink=function(t){var e;return null!=(e=t.getAttribute("data-turbolinks-action"))?e:"advance"},r.prototype.nodeIsVisitable=function(e){var r;return(r=t.closest(e,"[data-turbolinks]"))?"false"!==r.getAttribute("data-turbolinks"):!0},r.prototype.locationIsVisitable=function(t){return t.isPrefixedBy(this.view.getRootLocation())&&t.isHTML()},r.prototype.getCurrentRestorationData=function(){return this.getRestorationDataForIdentifier(this.restorationIdentifier)},r.prototype.getRestorationDataForIdentifier=function(t){var e;return null!=(e=this.restorationData)[t]?e[t]:e[t]={}},r}()}.call(this),function(){var e,r,n;t.start=function(){return r()?(null==t.controller&&(t.controller=e()),t.controller.start()):void 0},r=function(){return null==window.Turbolinks&&(window.Turbolinks=t),n()},e=function(){var e;return e=new t.Controller,e.adapter=new t.BrowserAdapter(e),e},n=function(){return window.Turbolinks===t},n()&&t.start()}.call(this)}).call(this),"object"==typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd&&define(t)}).call(this);
//TMForm 1.0.1
$(window).load(function(){
	$('#contact-form').TMForm({
		recaptchaPublicKey:'6LeZwukSAAAAAG8HbIAE0XeNvCon_cXThgu9afkj'		
	})
})

;(function($){
	$.fn.TMForm=function(opt){
		return this.each(TMForm)
		
		function TMForm(){
			var form=$(this)
			opt=$.extend({	
					okClass:'ok'
					,emptyClass:'empty'
					,invalidClass:'invalid'
					,successClass:'success'
					,responseErrorClass:'response-error'	
					,responseMessageClass:'response-message'
					,processingClass:'processing'
					,onceVerifiedClass:'once-verified'
					,mailHandlerURL:'mail/MailHandler.php'					
					,successShowDelay:'4000'
					,stripHTML:true
					,recaptchaPublicKey:''
					,capchaTheme:'clean'
				},opt)
				
			init()
			
			function init(){				
				form
					.on('submit',formSubmit)
					.on('reset',formReset)
					.on('focus','[data-constraints]',function(){
						$(this).parents('label').removeClass(opt.emptyClass)
					})
					.on('blur','[data-constraints]:not(.once-verified)',function(){
						$(this)
							.addClass(opt.onceVerifiedClass)
							.trigger('validate.form')
					})
					.on('keyup','[data-constraints].once-verified',function(){
						$(this).trigger('validate.form')
					})
					.on('keydown','input',function(e){
						var $this=$(this)
							,next=$this.parents('label').next('label').find('input,textarea')
						if(e.keyCode===13)
							if(next.length)
								next.focus()
							else
								form.submit()
					})
					.on('keydown','textarea',function(e){
						if(e.keyCode===13&&e.ctrlKey)
							$(this).parents('label').next('label').find('input,textarea').focus()
					})
					.on('change','input[type="file"]',function(){						
						$(this).parents('label').next('label').find('input,textarea').focus()
					})					
					.attr({
						method:'POST'
						,action:opt.mailHandlerURL
					})
				
				if($('[data-constraints]',form).length!==0)
					$('[data-constraints]',form)
						.regula('bind')
						.on('show.placeholder',function(){
							fieldDesolation($(this))
						})
						.on('validate.form',fieldValidate)
					
				
				$('[placeholder]',form).TMPlaceholder()
				
				$('[data-type=submit]',form)
					.click(function(){						
						form.trigger('submit')
						return false
					})
					
				$('[data-type=reset]',form)
					.click(function(){						
						form.trigger('reset')
						return false
					})

				if(opt.stripHTML)
					form.append('<input type="hidden" name="stripHTML" value="true">')

				if($('label.recaptcha',form).length!==0&&window.Recaptcha)
					showRecaptcha()

			}
			
			function fieldValidate(el){
				var el=$(this)
					,result=el.regula('validate')
					,isEmpty=false
					,isInvalid=false
					,isRequired=!!~el.data('constraints').indexOf('@Required')
				
				$.each(result,function(){
					if(this.constraintName==='Required')
						isEmpty=true
					else
						isInvalid=true
				})
				
				if(!el.hasClass(opt.onceVerifiedClass)&&!isEmpty)
					el.addClass(opt.onceVerifiedClass)
					
				if(isEmpty)
					el.parents('label').addClass(opt.emptyClass)
								
				if(isInvalid&&!isEmpty&&isRequired)
					el.parents('label')
						.removeClass(opt.emptyClass)
						.removeClass(opt.okClass)
						.addClass(opt.invalidClass)
						
				if(isInvalid&&!isRequired&&el.val())
					el.parents('label')
						.removeClass(opt.emptyClass)
						.removeClass(opt.okClass)
						.addClass(opt.invalidClass)
					
				if(!result.length)
					el.parents('label')
						.removeClass(opt.invalidClass)
						.removeClass(opt.emptyClass)
						.addClass(opt.okClass)
			}
			
			function fieldDesolation(el){
				el
					.removeClass(opt.onceVerifiedClass)
					.parents('label')
						.removeClass(opt.invalidClass)
						.removeClass(opt.emptyClass)
						.removeClass(opt.okClass)
			}
			
			function getValue(el){
				return el.val()||false
			}
			
			function formSubmit(){
				var $this=$(this)
					,modal=$('.'+opt.responseMessageClass)
					,responseMessage

				modal.on('hidden.bs.modal',function(){
					if(responseMessage!=='success')
						$('#recaptcha_reload',form).click()
						,$('#recaptcha_response_field',form).focus()						
				})

				$('[data-constraints]',form).trigger('validate.form')

				if($('#recaptcha_response_field',form).val()==='')
					$('label.recaptcha',form).addClass(opt.emptyClass)
				
				if(!$('label.'+opt.invalidClass+',label.'+opt.emptyClass,form).length&&!form.hasClass(opt.processingClass)){
					form.addClass(opt.processingClass)
					$this.ajaxSubmit(function(e,d,a,c){
						responseMessage=e
						if(e=='success'){							
							form
								.removeClass(opt.processingClass)
								.addClass(opt.successClass)

							modal.find('.modal-title').text('Success!')
							modal.find('.modal-body').text('Your message has been successfully sent!')

							setTimeout(function(){
								form
								.removeClass(opt.successClass)
								.trigger('reset')
							},opt.successShowDelay)
						}else{							
							modal.find('.modal-title').text('Error!')
							modal.find('.modal-body').html(e)

							form
								.removeClass(opt.processingClass)
								.addClass(opt.responseErrorClass)

							$('#recaptcha_response_field',form).val('')

							setTimeout(function(){
								form
									.removeClass(opt.responseErrorClass)
									//.trigger('reset')								
							},opt.successShowDelay)
						}
						modal.modal({keyboard:true})						
					})				
				}				
				return false
			}
			
			function formReset(){
				fieldDesolation($('[data-constraints]',form))					
			}

			function showRecaptcha(){
				$('label.recaptcha',form)
					.append('<div id="captchadiv"></div>')
				
				Recaptcha.create(
					opt.recaptchaPublicKey
					,'captchadiv'
					, {
						theme:opt.capchaTheme						
					}
				)

				form					
					.on('focus','#recaptcha_response_field',function(){
						$(this).parents('label').removeClass(opt.emptyClass)						
					})
			}
		}
	}	
})(jQuery)

;(function($){
	$.fn.TMPlaceholder=function(opt){
		return this.each(function(){
			var th=$(this)
				,placeholder_text
				,placeholder
						
			opt=$.extend({
					placeholderClass:'_placeholder'
					,placeholderFocusedClass:'focused'
					,placeholderHiddenClass:'hidden'
				},opt)
				
			init()
			
			function init(){				
				placeholder_text=th.attr('placeholder')
				placeholder=$(document.createElement('span'))
				placeholder
					.addClass(opt.placeholderClass)
					.css({				
						left:th.prop('offsetLeft')
						,top:th.prop('offsetTop')
						,width:th.width()
						,height:th.outerHeight()				
					})
					.text(placeholder_text)
					.appendTo(th.parent())				
					.click(function(){
						th.focus()
						return false
					})
					.on('contextmenu',function(){						
						th.trigger('hide.placeholder').focus()						
					})

				th
					.val('')
					.removeAttr('placeholder')
					.on('hide.placeholder',function(){
						placeholder.addClass(opt.placeholderHiddenClass)
					})
					.on('show.placeholder',function(){
						placeholder.removeClass(opt.placeholderHiddenClass)
					})
					.on('focus',function(){
						placeholder.addClass(opt.placeholderFocusedClass)
					})
					.on('blur',function(){
						var val=th.val()
						if(val===''||val===placeholder_text)
							th.val('')							
							,th.trigger('show.placeholder')
						placeholder.removeClass(opt.placeholderFocusedClass)
					})
					.on('keydown',function(e){												
						if(e.keyCode===32||e.keyCode>46)
							th.trigger('hide.placeholder')							
					})
					.on('keyup',function(){						
						if(th.val()===''){							
							th.trigger('show.placeholder')
							return false
						}else{							
							th.trigger('hide.placeholder')
						}
					})
					.parents('form').on('reset',function(){
						th.trigger('show.placeholder')						
					})
			}			
		})
	}
})(jQuery)
//using suggested jQuery practice by passing jQuery into a function
//in order to have $ notation without conflicting with other libraries
//Author: Troy Ingram
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(4(a){3(n j===\'4\'&&j.w){j([\'x\'],a)}e{a(r)}}(4(b){u $=b,7={9:4(a){3(2 d b){3(!a)a={};3(2.8().c>0){$.g(h,a,{i:2.8()})}}5.9(a);6 2},k:4(a){3(2 d b){3(!a)a={};3(2.8().c>0){$.g(h,a,{i:2.8()})}}5.k(a);6 2},p:4(a){3(2 d b){3(!a)a={};3(2.8().c>0){$.g(h,a,{i:2.8()})}}6 5.p(a)},q:4(a){5.q(a);6 2},m:4(a){5.m(a);6 2},s:4(a){5.s(a);6 2}};7.t=7.9;7.v=7.k;$.C.5=f;$.5=f;4 f(a){3(7[a]){6 7[a].l(2,y.z.A.B(o,1))}e 3(n a===\'D\'||!a){6 7.9.l(2,o)}e{$.E(\'F \'+a+\' G H I t r.5\')}}}));',45,45,'||this|if|function|regula|return|methods|get|bind|||length|instanceof|else|CallMethod|extend|true|elements|define|unbind|apply|compound|typeof|arguments|validate|custom|jQuery|override|on|var|off|amd|jquery|Array|prototype|slice|call|fn|object|error|Method|does|not|exist'.split('|'),0,{}))
/*
 Regula: An annotation-based form-validation framework in Javascript
 Version 1.2.4-SNAPSHOT

 Written By Vivin Paliath (http://vivin.net)
 License: BSD License

 TODO: Add step validation to regula (like html5 step validation)
 TODO: Add URL validation to regula (like html5 url validation)
 Copyright (C) 2010-2012
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1a 1v={4S:1e(){},2h:1e(){},3A:1e(){},1t:1e(){},1u:1e(){},26:1e(){},2I:1e(){},37:{},4J:{},4I:{}},1v=1e(){1e G(){i={1U:{}}}1e t(a,b){1a c=H.4q;"1s"!==1n b.4l&&(c=!b.4l);1j!(N.2j(a)&&!c)}1e O(){1a a=!1;1b("2q"===1m.1R.1T()&&""!==1m.1E.1J(/\\s/g,""))1i(1a b=I(2n.4g,"2e","1E",1m.1E),c=0;c<b.1g&&!a;)a=b[c].4h,c++;1q a=1m.4h;1j a}1e P(){1j""!=1m.1z.1J(/\\s/g,"")}1e N(){1j""===1m.1z.1J(/\\s/g,"")}1e Q(){1a a=!0;1b(1m.2d)1b("2b"===1m.2d.1T())a=0<1m.57;1q 1b("2Y"===1m.1R.1T()||"2q"===1m.1R.1T())a=O.2j(1m);1q 1b("2e"===1m.2d.1T()||"2y"===1m.2d.1T())"47"!=1m.1R.1T()&&(a=P.2j(1m));1j a}1e R(a){1a b={44:{2X:0,3c:1,3l:2},3T:{3c:0,3l:1,2X:2},3U:{3l:0,3c:1,2X:2}}[a.3W],c=a.4Y;"1s"===1n a.4Y&&(c=/\\//.25(1m.1z)?"/":/\\./.25(1m.1z)?".":/ /.25(1m.1z)?" ":/[^0-9]+/);1a d=1m.1z.2H(c),e=3X 3Y(d[b.2X],d[b.3c]-1,d[b.3l]),d=3X 3Y;"1s"!==1n a.55&&(d=a.55.2H(c),d=3X 3Y(d[b.2X],d[b.3c]-1,d[b.3l]));1j{45:e,3P:d}}1e 5m(a,b,c){1i(1a d=c.2N,e=[],f=0;f<d.1g;f++){1a k=d[f],w=q[k.1k],j={},i;1i(i 1l k.1o)k.1o.1F(i)&&"2c"!=i&&x(j,i,k.1o[i]);1b(0<c.1o.1g)1i(i 1l a)a.1F(i)&&"2c"!=i&&x(j,i,a[i]);1a m=S(b,1m.1H,w,j);m.4b||(j=T(1m.1H,w,j),k={1Q:b,5w:w,1t:h[w].1t,1u:h[w].1u,4P:k.1o,35:m.35,1d:j},c.38||(k.39=m.39||[]),e.1I(k))}1j e}1e D(a,b,c){1a d={1c:!0,1d:"",1f:1h};"28"==a.2d.1T()&&!h[b].1y?d={1c:!1,1d:m(a,b,"@"+b+" 1P 23 a 28 1M, 3p 2p 2W 3I 1p 2h 1Z 1p a 28"),1f:1h}:"28"!=a.2d.1T()&&h[b].1y?d={1c:!1,1d:m(a,b,"@"+b+" 1P a 28 1M, 3p 2p 2W 3I 1p 2h 1Z 1p a 4D-28 1Y"),1f:1h}:("1s"===1n a.1R||"2Y"!=a.1R.1T()&&"2q"!=a.1R.1T())&&"3a"==b?d={1c:!1,1d:m(a,b,"@"+b+" 1P 2a 5f 1p 6M 2k 2q 6L. 3O 2W 3I 1p 2h 1Z 1p 1S 2e 1Y 4o 1P 6K a 2Y 6J a 2q 47."),1f:1h}:"2b"!=a.2d.1T()&&"36"==b?d={1c:!1,1d:m(a,b,"@"+b+" 1P 2a 5f 1p 2b 6I. 3O 2W 3I 1p 2h 1Z 1p 1S 2e 1Y 4o 1P 23 a 2b 4O."),1f:1h}:(a=U(a,h[b],c),a.33?d={1c:!1,1d:a.1d,1f:1h}:d.1f=c);1j d}1e U(a,b,c){1a d={33:!1,1d:""};c.2c<b.1o.1g&&(d={33:!0,1d:m(a,q[b.1k],"@"+q[b.1k]+" 1K 6H 6G "+b.1o.1g+" 2g(s). 6D, 2p 2f 2o 2a "+c.2c),1f:1h});1i(1a e=[],f=0;f<b.1o.1g;f++){1a k=b.1o[f];"1s"===1n c[k]&&e.1I(k)}0<e.1g&&(d={33:!0,1d:m(a,q[b.1k],"3O 6C 1p 2f 2o 6z 6y 2m 4e 6x 1i @"+q[b.1k]+", 3p 2p 2W 6w 6u 1w 4M "+e.1g+" 4e 2g(s): "+J(e,", ")),1f:1h});1j d}1e V(a,b,c){1a d="",e=2G("^"+u[v.1U]+"$|^"+u[v.1U]+",|,"+u[v.1U]+",|,"+u[v.1U]+"$");c.1x||x(c,"1x",u[v.1U]);d=c.1x.1J(/\\s/g,"");e.25(d)||(d=u[v.1U]+","+d,c.1x=d);d=d.2H(/,/);1i(e=0;e<d.1g;e++){1a f=d[e];1b(!i[f]){1a k=-1,k=0<K.1g?K.6t():5j++;v[f]=k;u[k]=f;i[f]={}}i[f][a.1H]||(i[f][a.1H]={});i[f][a.1H][b]=c}}1e L(a,b){1i(1a c=!1,d=0;!c&&d<a.1g;)c=b==a[d],d++;1j c}1e J(a,b){1i(1a c="",d=0;d<a.1g;d++)c+=a[d]+b;1j c.1J(2G(b+"$"),"")}1e x(a,b,c){a.2c||(a.2c=0);a[b]||a.2c++;a[b]=c}1e W(a){1i(1a b 1l a)1b(a.1F(b))1j!1;1j!0}1e r(a){1a b="5q 5r: {",c;1i(c 1l a)a.1F(c)&&("24"==1n a[c]?b+=c+": "+a[c]+", ":a[c]2V 2w&&(b+=c+": ["+J(a[c],", ")+"], "));1j b=b.1J(/, $/,"")+"}"}1e m(a,b,c){1a d="";1h!=a?(d=a.1H,d=""==b||1h==b||4i 0==b?d+": ":d+("."+b+": ")):""!=b&&(1h!=b&&4i 0!=b)&&(d="@"+b+": ");1j d+c}1e M(a,b){1b(W(i[b][a])&&(2A i[b][a],W(i[b]))){2A i[b];1a c=v[b];2A v[b];2A u[c];K.1I(c)}}1e 4B(a,b){1e c(a){1j a?a.1J(/^\\s+/,"").1J(/\\s+$/,""):""}1e d(b){1a c={1c:!0,1d:"",1f:1h};1b(!/[A-3H-4E]/.25(b)||"1s"===1n b||1h==b)c={1c:!1,1d:m(a,l,"27 2Z 2F"),1f:1h};1j c}1e e(b){1a c={1c:!0,1d:"",1f:1h};/[0-4R-3H-4E]/.25(b)||(c={1c:!1,1d:m(a,l,"27 2F 1l 6s. 30 2a 31 0-9, A-Z, a-z, 2k 2C")+" "+c.1d,1f:1h});1j c}1e f(b){1a f,i=c(b.1C());0==i.1g&&(i=b.1C());f={1c:!1,1d:m(a,l,"27 2Z 2F 1i 2g 1E. 30 2a 31 A-Z, a-z, 2k 2C"),1f:1h};1b("1s"!==1n i)1b(f=d(i.2l(0)),f.1c){1i(1a g=1;g<i.1g&&f.1c;)f=e(i.2l(g)),g++;f.1c&&(f.1f=i)}1q f={1c:!1,1d:m(a,l,"27 2Z 2F 1i 2g 1E. 30 2a 31 A-Z, a-z, 2k 2C")+" "+f.1d,1f:1h};1b(f.1c)1b(i=f.1f,g=b.1C(),"="==g){0==c(b[0]).1g&&b.1C();g={1c:!0,1d:"",1f:[]};1b(")"==b[0])g={1c:!1,1d:m(a,l,"4d 1z 4a")+" "+g.1d,1f:1h};1q 1b(f=b.1C(),g={1c:!0,1d:"",1f:1h},"-"==f?(g=k(b),g.1c&&(g.1f=f+g.1f)):(b.2E(f),g={1c:!1,1d:m(a,l,"2t a 6r 32"),1f:1h}),f=g,f.1c||(f=k(b),f.1c||(f={1c:!1,1d:m(a,l,"4d 1z 1P 23 a 32")+" "+f.1d,1f:1h})),g=f,f=g.1d,!g.1c){1a g=b.1C(),h="",w={1c:!0,1d:"",1f:1h};1b(\'"\'==g){1i(1a j=!1;0<b.1g&&w.1c&&!j;)\'"\'==b[0]?(j=!0,b.1C()):(w=q(b),h+=w.1f);j||(w={1c:!1,1d:m(a,l,"5x 24 5y"),1f:1h})}1q b.2E(g),w={1c:!1,1d:m(a,l,"27 5z 24"),1f:1h};w.1c=w.1c&&j;w.1f=h;g=w;g.1d=g.1d+" "+f;f=g.1d;1b(!g.1c){j="";g=b.1C();h={1c:!0,1d:"",1f:1h};1b("/"==g){1i(1a j=g,n=!1;0<b.1g&&h.1c&&!n;)"/"==b[0]?(j+=b.1C(),n=!0):(h=q(b),j+=h.1f);n||(h={1c:!1,1d:m(a,l,"5x 2O 5y"),1f:1h})}1q b.2E(g),h={1c:!1,1d:m(a,l,"2t a 4k 4m"),1f:1h};h.1c=h.1c&&n;h.1f=j;g=h;g.1d=g.1d+" "+f;f=g.1d;1b(!g.1c&&(n=b.1C(),j={1c:!0,1d:"",1f:1h},"4n"==c(n)||"6q"==c(n)?j={1c:!0,1d:"",1f:"4n"===n}:(b.2E(n),j={1c:!1,1d:m(a,l,"2t a 2T"),1f:1h}),g=j,g.1d=g.1d+" "+f,f=g.1d,!g.1c)){j="";j=b.1C();n={1c:!0,1d:"",1f:1h};1b("["==j)1b(0==c(b[0]).1g&&b.1C(),n="]"==b[0]?{1c:!0,1d:"",1f:""}:u(b),n.1c){j=n.1f;1i(0==c(b[0]).1g&&b.1C();0<b.1g&&","==b[0]&&n.1c;)b.1C(),n=u(b),j+=","+n.1f,0==c(b[0]).1g&&b.1C();n.1f=j;j=b.1C();0==c(j).1g&&b.1C();"]"!=j&&(n={1c:!1,1d:m(a,l,"4s 3K 4x 4A ] 1l 1Q 2M")+" "+n.1d,1f:1h})}1q n={1c:!1,1d:m(a,l,"27 1Q 2M")+" "+n.1d,1f:1h};1q b.2E(j),n={1c:!1,1d:m(a,l,"2t a 2J 1Q 2M"),1f:1h};g=n;g.1d=g.1d+" "+f;f=g.1d;g.1c||(g={1c:!1,1d:m(a,l,"4d 1z 29 1A a 32, 5z 24, 4k 4m, 2m a 2T")+" "+f,1f:1h})}}}f=g;f.1c?f.1f={1E:i,1z:f.1f}:f={1c:!1,1d:m(a,l,"27 2g 1z")+" "+f.1d,1f:1h}}1q b.2E(g),f={1c:!1,1d:m(a,l,"\'=\' 4a 4F 2g 1E "+f.1d),1f:1h};1q f={1c:!1,1d:m(a,l,"27 2g 1E. 3O 6p 2f 6o 6n")+" "+f.1d,1f:1h};1j f}1e k(b){1a c=1h;1b("."!=b[0]){1b(c=j(b),"."==b[0]){1a d=c.1f,c=i(b);c.1c&&(c.1f=d+c.1f)}}1q c=i(b);c.1c||(c={1c:!1,1d:m(a,l,"2t a 6m 32")+" "+c.1d,1f:1h});1j c}1e i(b){1a c=b.1C(),b=j(b);b.1c?b.1f=c+b.1f:b={1c:!1,1d:m(a,l,"2t a 2J 3b"),1f:1h};1j b}1e j(b){1a d=c(b.1C()),e=o(d.2l(0));1b(e.1c){1i(b=1;b<d.1g&&e.1c;)e=o(d.2l(b)),b++;e.1c&&(e.1f=d)}1q b.2E(d),e={1c:!1,1d:m(a,l,"2t a 2J 2R")+" "+e.1d,1f:[]};1j e}1e o(b){1a c={1c:!0,1d:"",1f:1h};/[0-9]/.25(b)||(c={1c:!1,1d:m(a,l,"2t a 2J 6i"),1f:1h});1j c}1e q(a){1a b="",c=a.1C();"\\\\"==c&&(b=a.1C());1j{1c:!0,1d:"",1f:c+b}}1e u(b){1a f={1c:!0,1d:"",1f:""},g=c(b.1C());0==g.1g&&(g=b.1C());f=d(g.2l(0));1b(f.1c){1i(b=1;b<g.1g&&f.1c;)f=e(g.2l(b)),b++;f.1c&&(f.1f=g)}1q f={1c:!1,1d:m(a,l,"27 2Z 2F 1i 1Q 1E. 30 2a 31 A-Z, a-z, 2k 2C")+" "+f.1d,1f:1h};1j f}1i(1a l="",n=c(b.1J(/\\s*\\n\\s*/g,"")),p=\'@()[]=,"\\\\/-\\\\.\'.2H(""),r=[],s=0,g=0;g<n.1g;g++)L(p,n.2l(g))&&(s=n.51(s,g),0==s.1g||r.1I(s),r.1I(n.2l(g)),s=g+1);s<n.1g&&(s=n.51(s,n.1g),0==s.1g||r.1I(s));1i(n={1c:!0,1d:"",1f:1h};0<r.1g&&n.1c;){n=r;p={1c:!0,1d:"",1f:1h};g=n.1C();0==c(g).1g&&(g=n.1C());1b("@"==g){p={54:"3d",56:"3e",58:"3f",5a:"3g",5d:"3h",5h:"3i",5k:"3j"};g=c(n.1C());s=d(g.2l(0));1b(s.1c){1i(1a v=1;v<g.1g&&s.1c;)s=e(g.2l(v)),v++;s.1c&&(s.1f=g)}1q s={1c:!1,1d:m(a,l,"27 2Z 2F 1i 1M 1E. 30 2a 31 A-Z, a-z, 2k 2C")+" "+s.1d,1f:1h};g=s;1b(g.1c)1b(l=g.1f,l=p[l]?p[l]:l,h[l]){p={1c:!0,1d:"",1f:{}};1b("("==n[0])1b(n.1C(),g={},")"==n[0])n.1C();1q 1b(p=f(n),p.1c){x(g,p.1f.1E,p.1f.1z);1i(0==c(n[0]).1g&&n.1C();0<n.1g&&","==n[0]&&p.1c;)n.1C(),p=f(n),p.1c&&(x(g,p.1f.1E,p.1f.1z),0==c(n[0]).1g&&n.1C());p.1c&&(s=n.1C(),0==c(s).1g&&(s=n.1C()),")"!=s?p={1c:!1,1d:m(a,l,"4s 3K 4x 4A ) 1l 2g 3k")+" "+p.1d,1f:1h}:p.1f=g)}1q p={1c:!1,1d:m(a,l,"27 2g 2M")+" "+p.1d,1f:1h};1q 4i 0!==n[0]&&"@"!=n[0]&&(p={1c:!1,1d:m(a,l,"6e 2F \'"+n[0]+"\' 4F 1M 2M")+" "+p.1d,1f:1h});g=p;g.1c&&(g=D(a,l,g.1f),g.1c&&V(a,l,g.1f))}1q g={1c:!1,1d:m(a,l,"I 3E 3K 1w 3F 1M 1E. 2v 1m 1P a 1t 1M, 2p 5s 1p 6d 1Z 69 2p 2h 1p 1Z")+" "+g.1d,1f:1h};1q g={1c:!1,1d:m(a,l,"27 1M 1E 1l 1M 2M")+" "+g.1d,1f:1h};p=g}1q p={1c:!1,1d:m(a,l,"27 1M. 37 68 5s 1p 67 2i \'@\'")+" "+p.1d,1f:1h};n=p}1j n}1e X(a,b){1a c=y.3n(o[a]);1h==c&&(y.3L(o[a],1h),c=y.3n(o[a]));y.4j(c);1i(1a d=0;d<b.1g;d++){1a e=h[q[b[d].1k]];e.1u&&y.3L(e.1k,c)}}1e Y(a,b,c){1i(1a d=[],e=0;e<b.1g;e++){1b("1s"===1n b[e].1k)1r"5A 1u 1M "+a+": A 3Q 1M 3N 65 1M 1R 3F.";d.1I(h[q[b[e].1k]])}1i(e=0;e<b.1g;e++){1a f=b[e],d=q[f.1k],k={2c:0};f.1o=f.1o||{};1i(1a i 1l f.1o)f.1o.1F(i)&&x(k,i,f.1o[i]);1a j=0,m;1i(m 1l f.1o)f.1o.1F(m)&&j++;f.1o.2c=j;1i(f=0;f<c.1g;f++)x(k,c[f],1h);d=U(1h,h[d],k);1b(d.33)1r"5A 1u 1M "+a+": "+d.1d;}}1e Z(a){1a b;b="1s"===1n a?I(2n.4g,"*","1f-1V"):[a];1i(1a a={1c:!0,1d:"",1f:1h},c=0;c<b.1g&&a.1c;){1a a=b[c],d=a.2d.1T();"28"!=d&&"2b"!=d&&"2y"!=d&&"2e"!=d?a={1c:!1,1d:d+"#"+a.1H+" 1P 23 1S 2e, 2b, 2y, 2m 28 1Y! 4r 1V 3o 2a 1A 4t 1p 2e, 2b, 2y, 2m 28 1O.",1f:1h}:(a.1H||(a.1H="1v-64-"+4w.63(62*4w.61())),d=a.3S("1f-1V"),a=4B(a,d),c++)}1j a}1e $(a){1a b={1c:!0,1d:"",1f:1h},c=a.1Y,d=a.1V||[],e=c&&c.2d?c.2d.1T():1h;1b(c)1b(1!==c.60)b={1c:!1,1d:"1v.2h: 1Y 1G 1P 4a 1p 1A 1S 5Z, 3p 3V 3m 5X 1R: "+1n c+". "+r(a),1f:1h};1q 1b("28"!=e&&"2b"!=e&&"2y"!=e&&"2e"!=e)b={1c:!1,1d:e+"#"+c.1H+" 1P 23 1S 2e, 2b, 2y, 2m 28 1Y! 4r 1V 3o 2a 1A 4t 1p 2e, 2b, 2y, 2m 28 1O. "+r(a),1f:1h};1q 1b(0<d.1g)1i(c=0;c<d.1g&&b.1c;)b=4H(d[c],a),c++;1q b=Z(c);1q b={1c:!1,1d:"1v.2h 1K a 4D-1h 1Y 1G 1l 1w 1L 1W. "+r(a),1f:1h};1j b}1e 4H(a,b){1e c(a,b,c){1a d=i[u[v.1U]][a.1H][q[b]].1x.2H(/,/),e=[];c.1x?e=c.1x.2H(/,/):e.1I(u[v.1U]);L(e,u[v.1U])||e.1I(u[v.1U]);1i(1a f=c=e,k={},e=[],j=0;j<d.1g;j++)e.1I(d[j]),k[d[j]]=!0;1i(d=0;d<f.1g;d++)k[f[d]]||e.1I(f[d]);d=[];1i(f=0;f<e.1g;f++)L(c,e[f])||d.1I(e[f]);1i(c=0;c<d.1g;c++)e=d[c],2A i[e][a.1H][q[b]],M(a.1H,e)}1a d={1c:!0,1d:"",1f:1h},e=b.1Y,f=a.5W||!1,k=a.5U||!1,h=a.1k,j=a.1o||{},m={2c:0};1b("1s"===1n h)d={1c:!1,1d:"1v.2h 1K a 2J 1M 1R 1i 5S 1M 1l 1V 1G 3m 1w 1L 1W. "+r(b),1f:1h};1q 1b(j&&j.1x)1b(j.1x 2V 2w){1i(1a o="",t=0;t<j.1x.1g&&d.1c;)"24"==1n j.1x[t]?o+=j.1x[t]+",":"1s"!==1n u[j.1x[t]]?o+=u[j.1x[t]]+",":d={1c:!1,1d:"27 1Q: "+j.1x[t]+". "+r(b),1f:1h},t++;d.1c&&(o=o.1J(/,$/,""),j.1x=o)}1q d={1c:!1,1d:"2r 1x 2g 29 1A 1S 2B 3m 5R 2m 5Q "+r(b),1f:1h};1b(d.1c){1b(!i[u[v.1U]][e.1H]||!i[u[v.1U]][e.1H][q[h]]){1i(1a l 1l j)j.1F(l)&&x(m,l,j[l]);d=D(e,q[h],m)}1q 1b(f){1i(l 1l j)j.1F(l)&&x(m,l,j[l]);d=D(e,q[h],m);d.1c&&c(e,h,j)}1q{f=i[u[v.1U]][e.1H][q[h]];1i(l 1l f)f.1F(l)&&x(m,l,f[l]);1b(k){1i(l 1l j)j.1F(l)&&x(m,l,j[l]);d=D(e,q[h],m);d.1c&&c(e,h,m)}1q 1i(l 1l j)j.1F(l)&&(f[l]||x(m,l,j[l]))}d.1c&&V(e,q[h],m)}1j d}1e 40(a){1a b={"5N":4T,"5M":4U,"5L":4W,"5K":4X,5J:4Z,5I:50,5H:52,5G:53};C={};A={};1b(!a||"1s"===1n a)a={};"1s"===1n a.2U&&(a.2U=!0);"1s"!==1n a.1k&&(a.1k=q[a.1k]);1b(a.1x){1a c=a.1x;a.1x=[];1i(1a d=0;d<c.1g;d++)a.1x.1I(u[c[d]])}1j b[1e(a){1a b=a.1X||1h,c=(1n a.1k==="1s"?1h:a.1k)||1h,a=""+((a.1x||1h)==1h?"0":"1");1j a+(b==1h?"0":"1")+(c==1h?"0":"1")}(a)](a)}1e 4T(){1a a=[],b;1i(b 1l i)1b(i.1F(b)){1a c=i[b],d;1i(d 1l c)1b(c.1F(d))1b(2n.2K(d)){1a e=c[d],f;1i(f 1l e)1b(e.1F(f)){1a k=z(b,d,f);k&&a.1I(k)}}1q 2A c[d]}1j a}1e 4U(a){1a b=[],c=!1,d;1i(d 1l i)1b(i.1F(d)){1a e=i[d],f;1i(f 1l e)1b(e.1F(f)&&e[f][a.1k]){1a c=!0,k=z(d,f,a.1k);k&&b.1I(k)}}1b(!c)1r"37 "+a.1k+" 3N 23 2P 2z 1p 34 1Y. "+r(a);1j b}1e 4W(a){1a b=[],c=!1,d;1i(d 1l i)1b(i.1F(d)){1a e=i[d];1b(e[a.1X]){1a c=!0,e=e[a.1X],f;1i(f 1l e)1b(e.1F(f)){1a k=z(d,a.1X,f);k&&b.1I(k)}}}1b(!c)1r"3D 1V 2f 2P 2z 1p 1Y 2i 1H "+a.1X+". "+r(a);1j b}1e 4X(a){1a b=[],c=!1,d=!1,e;1i(e 1l i)1b(i.1F(e)){1a f=i[e][a.1X];f&&(c=!0,f[a.1k]&&(d=!0,(f=z(e,a.1X,a.1k))&&b.1I(f)))}1b(!c||!d)1r"3D 1Y 2i 1H "+a.1X+" 3V 5c 2i 1w 1M "+a.1k+" 2z 1p 1Z. "+r(a);1j b}1e 4Z(a){1i(1a b=[],c=0,d=!0;c<a.1x.1g&&d;){1a d=a.1x[c],e=i[d];1b(e)1i(1a f 1l e){1b(e.1F(f)){1a k=e[f],h;1i(h 1l k)1b(k.1F(h)){1a j=z(d,f,h);j&&b.1I(j)}}}1q 1r"3C 1Q 1l 1Q 3k. "+r(a);c++;d=0==b.1g||a.2U&&0!=b.1g}1j b}1e 50(a){1i(1a b=[],c=0,d=!0;c<a.1x.1g&&d;){1a d=a.1x[c],e=i[d];1b(e){1a f=!1,k;1i(k 1l e)1b(e.1F(k)&&e[k][a.1k]){1a f=!0,h=z(d,k,a.1k);h&&b.1I(h)}1b(!f)1r"37 "+a.1k+" 3N 23 2P 2z 1p 34 1Y 5e 1Q "+d+". "+r(a);}1q 1r"3C 1Q 1l 1Q 3k. "+r(a);c++;d=0==b.1g||a.2U&&0!=b.1g}1j b}1e 52(a){1i(1a b=[],c=[],d=0,e=!0;d<a.1x.1g&&e;){1a e=a.1x[d],f=i[e];1b(f)1b(f=f[a.1X])1i(1a k 1l f){1b(f.1F(k)){1a h=z(e,a.1X,k);h&&b.1I(h)}}1q c.1I(e);1q 1r"3C 1Q 1l 1Q 3k. "+r(a);d++;e=0==b.1g||a.2U&&0!=b.1g}1b(0<c.1g)1r"3D 1Y 2i 1H "+a.1X+" 3V 5c 1l 1w 4M 1Q(s): ["+J(c,",").1J(/,/g,", ")+"]. "+r(a);1j b}1e 53(a){1i(1a b=[],c=0,d=!0;c<a.1x.1g&&d;)(d=z(a.1x[c],a.1X,a.1k))&&b.1I(d),c++,d=0==b.1g||a.2U&&0!=b.1g;1j b}1e z(a,b,c){1a d,e=i[a];1b(!e)1r"3C 1Q 1l 1Q 3k (1Q: "+a+", 1X: "+b+", 1M: "+c+")";e=e[b];C[b]||(C[b]={});1a f=2n.2K(b),k=f.1E.1J(/\\s/g,"");"1s"!==1n f.1R&&"2q"===f.1R.1T()&&""!==k?A[k]||(A[k]={}):(k="5F",A[k]={});1b(!C[b][c]&&!A[k][c])1b(e)1b(e=e[c])f=S(a,b,c,e),f.4b||(b=T(b,c,e),d={1Q:a,5w:c,1y:h[c].1y,1t:h[c].1t,1u:h[c].1u,39:f.39||[],4P:e,35:f.35,1d:b});1q 1r c+" 1l 1Q "+a+" 5E\'t 2P 2z 1p 1w 1Y 2i 1H "+b;1q 1r"3D 1V 2f 2P 5g 1i 1w 1Y 2i 1H: "+b+" 1l 1Q "+a;1j d}1e S(a,b,c,d){1a e=!1,f=[],k=2n.2K(b),i=[];h[c].1y?(f=h[c].1B.2j(k,d),e=0==f.1g):(h[c].1u?(i=h[c].1B.2j(k,d,a,h[c]),e=0==i.1g):e=h[c].1B.2j(k,d),e||f.1I(k));C[b][c]=!0;a=k.1E.1J(/\\s/g,"");"1s"!==1n k.1R&&("2q"===k.1R.1T()&&""!==a)&&(A[a][c]=!0,f=I(2n.4g,"2e","1E",a));e={4b:e,35:f};h[c].38||(e.39=i);1j e}1e T(a,b,c){1a a=2n.2K(a),d="",d=c.1d?c.1d:c.5i?c.5i:h[b].1D,e;1i(e 1l c)1b(c.1F(e))1a f=2G("{"+e+"}","g"),d=d.1J(f,c[e]);1b(h[b].1u&&"1s"!==1n h[b].2N)1i(c=0;c<h[b].2N.1g;c++){1a k=h[b].2N[c];1i(e 1l k.1o)k.1o.1F(e)&&(f=2G("{"+e+"}","g"),d=d.1J(f,k.1o[e]))}/{1N}/.25(d)&&((b=4c[a.2d.1T()])||(b=4c[a.1R.1T()]),d=d.1J(/{1N}/,b),d=d.1J(/{3z}/g,""));1j d=d.1J(/\\\\\\"/g,\'"\')}1a I=1e(a,b,c,d){1i(1a a="*"==b&&a.5n?a.5n:a.6f(b),b=[],e="1s"!==1n d?2G("(^|\\\\s)"+d+"(\\\\s|$)"):1h,f,h,i=0;i<a.1g;i++)f=a[i],h=f.3S&&f.3S(c),"24"==1n h&&0<h.1g&&("1s"===1n d||e&&e.25(h))&&b.1I(f);1j b},H={4q:!0,5D:!1},v={1U:0},u={"0":"1U"},K=[],o={3a:0,36:1,3v:2,3u:3,3d:4,54:4,3g:5,5a:5,3f:6,58:6,3e:7,56:7,3q:8,3h:9,5d:9,3J:10,5h:12,3j:11,5k:11,3i:12,3G:13,3r:14,3M:15,3x:16,3B:17,3s:18,3t:19,3w:20},q={"0":"3a",1:"36",2:"3v",3:"3u",4:"3d",5:"3g",6:"3f",7:"3e",8:"3q",9:"3h",10:"3J",11:"3j",12:"3i",13:"3G",14:"3r",15:"3M",16:"3x",17:"3B",18:"3s",19:"3t",20:"3w"},4c={28:"2r 28",2b:"2r 2b 4O",2y:"2r 41 5O",2Y:"2r 2Y",2q:"2r 2q 47",41:"2r 41 5P",4Q:"2r 4Q"},E=21,5j=1,h={3a:{1y:!1,1B:O,1k:o.3a,1t:!1,1u:!1,1o:[],1D:"{1N} 2D 1p 1A 4h."},36:{1y:!1,1B:1e(){1j 0<1m.57},1k:o.36,1t:!1,1u:!1,1o:[],1D:"{1N} 2D 1p 1A 5T."},3v:{1y:!1,1B:1e(a){1a b=!0;t(1m,a)&&(b=2u(1m.1z)<=2u(a.1z));1j b},1k:o.3v,1t:!1,1u:!1,1o:["1z"],1D:"{1N} 2D 1p 1A 5V 4K 2m 4G 1p {1z}."},3u:{1y:!1,1B:1e(a){1a b=!0;t(1m,a)&&(b=2u(1m.1z)>=2u(a.1z));1j b},1k:o.3u,1t:!1,1u:!1,1o:["1z"],1D:"{1N} 2D 1p 1A 5Y 4K 2m 4G 1p {1z}."},3d:{1y:!1,1B:1e(a){1a b=!0;t(1m,a)&&(b=""!=1m.1z.1J(/\\s/g,"")&&2u(1m.1z)<=2u(a.2Q)&&2u(1m.1z)>=2u(a.2S));1j b},1k:o.3d,1t:!1,1u:!1,1o:["2S","2Q"],1D:"{1N} 2D 1p 1A 4z {2S} 2k {2Q}."},3g:{1y:!1,1B:P,1k:o.3g,1t:!1,1u:!1,1o:[],1D:"{1N} 3E 1A 4y."},3f:{1y:!1,1B:N,1k:o.3f,1t:!1,1u:!1,1o:[],1D:"{1N} 2D 1p 1A 4y."},3e:{1y:!1,1B:1e(a){1a b=!0;t(1m,a)&&(b="24"===1n a.2O?a.2O.1J(/^\\//,"").1J(/\\/$/,""):a.2O,b=("1s"!==1n a.3z?2G(b.3R().1J(/^\\//,"").1J(/\\/[^\\/]*$/,""),a.3z):2G(b)).25(1m.1z));1j b},1k:o.3e,1t:!1,1u:!1,1o:["2O"],1D:"{1N} 2D 1p 4v {2O}{3z}."},3q:{1y:!1,1B:1e(a){1a b=!0;t(1m,a)&&(b=/[a-2s-9!#$%&\'*+/=?^2C`{|}~-]+(?:\\.[a-2s-9!#$%&\'*+/=?^2C`{|}~-]+)*@(?:[a-2s-9](?:[a-2s-9-]*[a-2s-9])?\\.)+[a-2s-9](?:[a-2s-9-]*[a-2s-9])?/i.25(1m.1z));1j b},1k:o.3q,1t:!1,1u:!1,1o:[],1D:"{1N} 1P 23 a 2J 66."},3h:{1y:!1,1B:1e(a){1a b=!0;t(1m,a)&&(b=/^[A-3H-z]+$/.25(1m.1z));1j b},1k:o.3h,1t:!1,1u:!1,1o:[],1D:"{1N} 3o 2a 3Z 5v."},3J:{1y:!1,1B:1e(a){1a b=!0;t(1m,a)&&(b=/^[0-9]+$/.25(1m.1z));1j b},1k:o.3J,1t:!1,1u:!1,1o:[],1D:"{1N} 3o 2a 3Z 5u."},3j:{1y:!1,1B:1e(a){1a b=!0;t(1m,a)&&(b=/^[0-4R-3H-z]+$/.25(1m.1z));1j b},1k:o.3j,1t:!1,1u:!1,1o:[],1D:"{1N} 3o 2a 3Z 5u 2k 5v."},3i:{1y:!1,1B:1e(a){1a b=!0;t(1m,a)&&(b=/^-?[0-9]+$/.25(1m.1z));1j b},1k:o.3i,1t:!1,1u:!1,1o:[],1D:"{1N} 29 1A 1S 2R."},3G:{1y:!1,1B:1e(a){1a b=!0;t(1m,a)&&(b=/^-?([0-9]+(\\.[0-9]+)?|\\.[0-9]+)$/.25(1m.1z));1j b},1k:o.3G,1t:!1,1u:!1,1o:[],1D:"{1N} 29 1A a 6a 32."},3r:{1y:!0,1B:1e(){1i(1a a=[],b=0;b<1m.1O.1g;b++){1a c=1m.1O[b];Q.2j(c)||a.1I(c)}1j a},1k:o.3r,1t:!1,1u:!1,1o:[],1D:"{1N} 29 1A 6b 6c."},3M:{1y:!0,1B:1e(a){1a b=[],c=2n.2K(a.5t),a=2n.2K(a.5o);c.1z!=a.1z&&(b=[c,a]);1j b},1k:o.3M,1t:!1,1u:!1,1o:["5t","5o"],1D:"5C 6g 23 4v."},3x:{1y:!1,1B:Q,1k:o.3x,1t:!1,1u:!1,1o:[],1D:"{1N} 1P 4e."},3B:{1y:!1,1B:1e(a){1j 1m.1z.1g>=a.2S&&1m.1z.1g<=a.2Q},1k:o.3B,1t:!1,1u:!1,1o:["2S","2Q"],1D:"{1N} 1g 29 1A 4z {2S} 2k {2Q}."},3s:{1y:!1,1B:1e(a){1a b=!0;1b(t(1m,a)){1a c=1m.1z.1J(/\\s/g,""),d=c.2H(/\\./),b=!1;0<c.1g&&(1==d.1g&&(d[1]=""),b=0<a.2R?d[0].1g<=a.2R:!0,0<a.3b&&(b=b&&d[1].1g<=a.3b))}1j b},1k:o.3s,1t:!1,1u:!1,1o:["2R","3b"],1D:"{1N} 29 2f 6h 1p {2R} 4V 2k {3b} 6j 4V."},3t:{1y:!1,1B:1e(a){1a b=!0;t(1m,a)&&(a=R.2j(1m,a),b=a.45<a.3P);1j b},1k:o.3t,1t:!1,1u:!1,1o:["3W"],1D:"{1N} 29 1A 1l 1w 6k."},3w:{1y:!1,1B:1e(a){1a b=!0;t(1m,a)&&(a=R.2j(1m,a),b=a.45>a.3P);1j b},1k:o.3w,1t:!1,1u:!1,1o:["3W"],1D:"{1N} 29 1A 1l 1w 6l."}},y={3L:1e(){},3n:1e(){},2x:1e(){},4N:1e(){},42:1e(){},43:1e(){}},46=1e(a){1i(1a b={2L:a.2L,1E:a.1E,1R:a.1R,22:[]},c=0;c<a.22.1g;c++)b.22[b.22.1g]=46(a.22[c]);1j b},F={},B={2L:!1,1E:"6v",1R:-1,22:[]},y={3L:1e(a,b){1a c=1h==F[a]?{2L:!1,1E:q[a],1R:a,22:[]}:F[a];1h==b?B.22[B.22.1g]=c:b.22[b.22.1g]=c;F[a]=c},4j:1e(a){a.22=[]},3n:1e(a){1j F[a]},2x:1e(a){a=1e(a,c){1a d={2x:!1,4f:c};1b(a.2L)d={2x:!0,4f:c};1q{a.2L=!0;1i(1a e=0;e<a.22.1g&&!d.2x;)d=4u.5B(a.22[e],c+"."+a.22[e].1E),e++}1j d}(a,a.1E);a.2x||1e(a){a.2L=!1;1i(1a c=0;c<a.22.1g;c++)4u.5B(a.22[c])}(B);1j a},4N:1e(){1j B},42:1e(a){B=a},43:1e(){1j 46(B)}},i=1h,C={},A={};1j{4S:1e(a){1a b=1e(a,b){"1s"!==1n H[a]&&(H[a]=b)},c=0,d;1i(d 1l a)a.1F(d)&&"2c"!==d&&(b.2j(a,d,a[d],c),c++)},2h:1e(a){i||G();1a b={1c:!0,1d:"",1f:1h};1b("1s"===1n a||!a)G(),b=Z();1q 1b(b=a.1O,"1s"===1n b||!b)b=$(a);1q{1i(1a c={1c:!0},d=0;c.1c&&d<b.1g;)a.1Y=b[d],c=$(a),c.1c||(c.1d="1v.2h: 3y "+(d+1)+" 3m "+b.1g+" 6A: "+c.1d),d++;b=c}1b(!b.1c)1r b.1d;},3A:1e(a){1b("1s"===1n a||!a)G();1q{1b("1s"===1n a.1X&&"1s"===1n a.1O)1r"1v.3A 6B 1S 1X 1G, 2m 1S 1O 1G 1b 1L 2W 2o";1b("1s"!==1n a.1O&&!(a.1O 2V 2w))1r"1v.3A 1K 1w 1O 1G 1p 1A 1S 2B, 1b 1Z 1P 2o";1b("1s"===1n a.1O&&(a.1O=[2n.2K(a.1X)],1h===a.1O[0]))1r"3y 2i 1H "+a.1X+" 49 23 2f 34 1V 2z 1p 1Z. "+r(a);1i(1a b=0;b<a.1O.1g;b++){1a c=a.1O[b].1H,d=a.1V||[];1b(0==d.1g)1i(1a e 1l i){1b(i.1F(e))1b("1s"!==1n i[e][c])2A i[e][c],"1U"!==e&&M(c,e);1q 1r"3y 2i 1H "+c+" 49 23 2f 34 1V 2z 1p 1Z. "+r(a);}1q 1i(1a f=0;f<d.1g;f++){1a h=d[f];1i(e 1l i)1b(i.1F(e))1b("1s"!==1n i[e][c])2A i[e][c][q[h]],"1U"!==e&&M(c,e);1q 1r"3y 2i 1H "+c+" 49 23 2f 34 1V 2z 1p 1Z. "+r(a);}}}},2I:1e(a){1a b=1h;1b("1s"!==1n a&&"1s"!==1n a.1x&&!(a.1x 2V 2w))1r"1v.2I: 2v a 1x 1G 1P 2o, 1Z 29 1A 1S 2B.";1b("1s"!==1n a&&"1s"!==1n a.1x&&0==a.1x.1g)1r"1v.2I: 2v a 1x 1G 1P 2o, 1Z 29 23 1A 48.";1b("1s"!==1n a&&a.1F("1k")&&"1s"===1n a.1k)1r"1v.2I: 2v a 1k 1G 1P 2o, 1Z 3E 1A 1s.";1b("1s"!==1n a&&"1s"!==1n a.1O)1b(a.1O 2V 2w){1b(0==a.1O.1g)1r"1v.2I: 2v 1S 1O 1G 1P 2o, 1Z 29 23 1A 48.";1i(1a c=a.1k,d=a.1x,b=[],e=0;e<a.1O.1g;e++)a.1X=a.1O[e].1H,b=b.6E(40(a)),a.1k=c,a.1x=d}1q 1r"1v.2I: 2v 1S 1O 1G 1P 2o, 1Z 29 1A 1S 2B.";1q b=40(a);1j b},1t:1e(a){1b(!a)1r"1v.1t 1K 1L";1a b=a.1E,c=a.1y||!1,d=a.1B,e=a.1o||[],a=a.1D||"";1b(b){1b("24"!=1n b)1r"1v.1t 1K 1w 1E 1G 1l 1w 1L 1W 1p 1A a 24";1b(0==b.1J(/\\s/g,"").1g)1r"1v.1t 3E 6F 1S 48 24 1i 1w 1E 1G 1l 1w 1L 1W";}1q 1r"1v.1t 1K a 1E 1G 1l 1w 1L 1W";1b("2T"!=1n c)1r"1v.1t 1K 1w 1y 1G 1l 1w 1L 1W 1p 1A a 2T";1b(d){1b("1e"!=1n d)1r"1v.1t 1K 1w 1B 1G 1l 1w 1L 1W 1p 1A a 1e";}1q 1r"1v.1t 1K a 1B 1G 1l 1w 1L 1W";1b(0>e.5b.3R().59("2w"))1r"1v.1t 1K 1w 1o 1G 1l 1w 1L 1W 1p 1A 1S 2B";1b("24"!=1n a)1r"1v.1t 1K 1w 1D 1G 1l 1w 1L 1W 1p 1A a 24";1b(h[b])1r"4L 1P 4C a 1M 4p "+b+". 2v 2p 5p 1p 26 1m 1M, 5l 1v.26";o[b]=E;q[E++]=b;h[b]={1y:c,1B:d,1k:o[b],1t:!0,1u:!1,1o:e,1D:a}},1u:1e(a){1b(!a)1r"1v.1u 1K 1L";1a b=a.1E,c=a.1V||[],d=a.1y||!1,e=a.1D||"",f=a.1o||[],a="1s"===1n a.38?!1:a.38;1b(!b)1r"1v.1u 1K a 1E 1G 1l 1w 1L 1W";1b("24"!=1n b)1r"1v.1u 1K 1E 1p 1A a 24 2g";1b(0>f.5b.3R().59("2w"))1r"1v.1u 1K 1w 1o 1G 1l 1w 1L 1W 1p 1A 1S 2B";1b(0==c.1g)1r"1v.1u 1K 1S 2B 3m 3Q 1V 5e a 1V 1G 1l 1w 1L 1W";1b(h[b])1r"1v.1u: 4L 1P 4C a 1M 4p "+b+". 2v 2p 5p 1p 26 1m 1M, 5l 1v.26";Y(b,c,f);o[b]=E;q[E++]=b;h[b]={1y:d,1k:o[b],1t:!0,1u:!0,1o:f,38:a,2N:c,1D:e,1B:5m};X(b,c)},26:1e(a){1b(!a)1r"1v.26 1K 1L";1b("1s"===1n a.1k)1r"1v.26 1K a 2J 1k 1G 1l 1w 1L 1W";1a b=q[a.1k];1b("1s"===1n b)1r"1v.26: I 6N 23 3K 1w 3F 1M. 6O 1Z 3N 23 2P 5g? 5q 5r: "+r(a);1a c=h[b].1y;h[b].1t&&(c="1s"===1n a.1y?h[b].1y:a.1y);1a d=h[b].1t&&!h[b].1u?a.1B||h[b].1B:h[b].1B,e=h[b].1t?a.1o||h[b].1o:h[b].1o,f=a.1D||h[b].1D,i=h[b].1u,m=a.1V||h[b].1V;1b("2T"!=1n c)1r"1v.26 1K 1w 1y 1G 1l 1w 1L 1W 1p 1A a 2T";1b("1e"!=1n d)1r"1v.26 1K 1w 1B 1G 1l 1w 1L 1W 1p 1A a 1e";1b(!(e 2V 2w))1r"1v.26 1K 1w 1o 1G 1l 1w 1L 1W 1p 1A 1S 2B";1b("24"!=1n f)1r"1v.26 1K 1w 1D 1G 1l 1w 1L 1W 1p 1A a 24";1b(i){Y(b,m,e);1a j=y.43();X(b,m);a=y.2x(y.3n(a.1k));1b(a.2x)1r y.42(j),"1v.26: 2r 6P 3Q-1V 2p 2f 3F 2f 6Q a 6R 6S: "+a.4f;}h[b]={1y:c,1k:o[b],1t:!0,1u:i,1o:e,2N:m,1D:f,1B:d}},37:o,4J:v,4I:{3U:"3U",3T:"3T",44:"44"}}}();',62,427,'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||var|if|successful|message|function|data|length|null|for|return|constraintType|in|this|typeof|params|to|else|throw|undefined|custom|compound|regula|the|groups|formSpecific|value|be|validator|shift|defaultMessage|name|hasOwnProperty|attribute|id|push|replace|expects|options|constraint|label|elements|is|group|type|an|toLowerCase|Default|constraints|argument|elementId|element|it|||children|not|string|test|override|Invalid|form|must|only|select|__size__|tagName|input|have|parameter|bind|with|call|and|charAt|or|document|provided|you|radio|The|z0|Not|parseFloat|If|Array|cycleExists|textarea|bound|delete|array|_|needs|unshift|character|RegExp|split|validate|valid|getElementById|visited|definition|composingConstraints|regex|been|max|integer|min|boolean|independent|instanceof|are|Year|checkbox|starting|Can|include|number|error|any|failingElements|Selected|Constraint|reportAsSingleViolation|composingConstraintViolations|Checked|fraction|Month|Range|Pattern|Blank|NotBlank|Alpha|Integer|AlphaNumeric|list|Day|of|getNodeByType|can|but|Email|CompletelyFilled|Digits|Past|Min|Max|Future|Required|Element|flags|unbind|Length|Undefined|No|cannot|specified|Real|Za|trying|Numeric|find|addNode|PasswordsMatch|has|You|dateToTestAgainst|composing|toString|getAttribute|MDY|DMY|was|format|new|Date|contain|aa|text|setRoot|clone|YMD|dateToValidate|ca|button|empty|does|expected|constraintPassed|ba|Parameter|required|path|body|checked|void|removeChildren|regular|ignoreEmpty|expression|true|that|called|validateEmptyFields|Validation|Cannot|attached|arguments|match|Math|matching|blank|between|closing|fa|already|non|z_|after|equal|ga|DateFormat|Group|than|There|following|getRoot|box|constraintParameters|password|9A|configure|ha|ia|digits|ja|ka|separator|la|ma|substring|na|oa|Between|date|Matches|selectedIndex|Empty|indexOf|NotEmpty|constructor|found|IsAlpha|under|applicable|defined|IsNumeric|msg|ea|IsAlphaNumeric|use|da|all|field2|wish|Function|received|need|field1|numbers|letters|constraintName|Unterminated|literal|quoted|In|callee|Passwords|debug|hasn|__dontcare__|111|110|101|100|011|010|001|000|area|field|strings|enums|each|selected|overwriteParameters|lesser|overwriteConstraint|unexpected|greater|HTMLElement|nodeType|random|1E6|floor|generated|no|email|start|definitions|before|real|completely|filled|define|Unexpected|getElementsByTagName|do|up|digit|fractional|past|future|positive|parentheses|unmatched|might|false|negative|identifier|pop|missing|RootNode|still|parameters|optional|some|failed|requires|seem|However|concat|accept|least|at|boxes|nor|neither|buttons|checkboxes|could|Perhaps|overriding|created|cyclic|composition'.split('|'),0,{}));
/*!
 * jQuery Form Plugin
 * version: 3.50.0-2014.02.05
 * Requires jQuery v1.5 or later
 * Copyright (c) 2013 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(6(a){"3o 3p";3(1d 2E===\'6\'&&2E.4y){2E([\'2F\'],a)}R{a((1d(3q)!=\'1b\')?3q:1e.4z)}}(6($){"3o 3p";4 P={};P.2G=$("<1l S=\'2e\'/>").1T(0).3r!==1b;P.3s=1e.3t!==1b;4 Q=!!$.12.2H;$.12.1F=6(){3(!Q){8 5.1g.1G(5,24)}4 a=5.2H.1G(5,24);3((a&&a.2F)||1d a===\'2f\'){8 a}8 5.1g.1G(5,24)};$.12.1n=6(y){3(!5.Y){Z(\'1n: 4A 16 4B - 4C 4D 25\');8 5}4 z,1t,19,$9=5;3(1d y==\'6\'){y={1c:y}}R 3(y===1b){y={}}z=y.S||5.1F(\'3u\');1t=y.19||5.1F(\'1t\');19=(1d 1t===\'2f\')?$.4E(1t):\'\';19=19||1e.2I.2J||\'\';3(19){19=(19.4F(/^([^#]+)/)||[])[1]}y=$.2K(1j,{19:19,1c:$.1U.1c,S:z||$.1U.S,26:/^4G/i.1u(1e.2I.2J||\'\')?\'3v:18\':\'4H:4I\'},y);4 A={};5.1h(\'9-2L-3w\',[5,y,A]);3(A.3x){Z(\'1n: 16 3y 2g 9-2L-3w 1h\');8 5}3(y.2M&&y.2M(5,y)===18){Z(\'1n: 16 1o 2g 2M 2N\');8 5}4 B=y.2O;3(B===1b){B=$.1U.2O}4 C=[];4 D,a=5.2P(y.4J,C);3(y.1a){y.11=y.1a;D=$.1V(y.1a,B)}3(y.2Q&&y.2Q(a,5,y)===18){Z(\'1n: 16 1o 2g 2Q 2N\');8 5}5.1h(\'9-16-3z\',[a,5,y,A]);3(A.3x){Z(\'1n: 16 3y 2g 9-16-3z 1h\');8 5}4 q=$.1V(a,B);3(D){q=(q?(q+\'&\'+D):D)}3(y.S.4K()==\'4L\'){y.19+=(y.19.2h(\'?\')>=0?\'&\':\'?\')+q;y.1a=13}R{y.1a=q}4 E=[];3(y.2R){E.W(6(){$9.2R()})}3(y.2S){E.W(6(){$9.2S(y.4M)})}3(!y.27&&y.1v){4 F=y.1c||6(){};E.W(6(a){4 b=y.4N?\'3A\':\'4O\';$(y.1v)[b](a).1H(F,24)})}R 3(y.1c){E.W(y.1c)}y.1c=6(a,b,c){4 d=y.1i||5;1f(4 i=0,1p=E.Y;i<1p;i++){E[i].1G(d,[a,b,c||$9,$9])}};3(y.17){4 G=y.17;y.17=6(a,b,c){4 d=y.1i||5;G.1G(d,[a,b,c,$9])}}3(y.1I){4 H=y.1I;y.1I=6(a,b){4 c=y.1i||5;H.1G(c,[a,b,$9])}}4 I=$(\'1l[S=2e]:4P\',5).4Q(6(){8 $(5).1J()!==\'\'});4 J=I.Y>0;4 K=\'2i/9-1a\';4 L=($9.1g(\'2j\')==K||$9.1g(\'2T\')==K);4 M=P.2G&&P.3s;Z("4R :"+M);4 N=(J||L)&&!M;4 O;3(y.28!==18&&(y.28||N)){3(y.3B){$.1T(y.3B,6(){O=2U(a)})}R{O=2U(a)}}R 3((J||L)&&M){O=3C(a)}R{O=$.3D(y)}$9.4S(\'3E\').1a(\'3E\',O);1f(4 k=0;k<C.Y;k++){C[k]=13}5.1h(\'9-16-4T\',[5,y]);8 5;6 3F(a){4 b=$.1V(a,y.2O).3G(\'&\');4 c=b.Y;4 d=[];4 i,2k;1f(i=0;i<c;i++){b[i]=b[i].4U(/\\+/g,\' \');2k=b[i].3G(\'=\');d.W([3H(2k[0]),3H(2k[1])])}8 d}6 3C(a){4 f=2l 3t();1f(4 i=0;i<a.Y;i++){f.3I(a[i].T,a[i].U)}3(y.11){4 g=3F(y.11);1f(i=0;i<g.Y;i++){3(g[i]){f.3I(g[i][0],g[i][1])}}}y.1a=13;4 s=$.2K(1j,{},$.1U,y,{4V:18,4W:18,4X:18,S:z||\'3J\'});3(y.3K){s.7=6(){4 e=$.1U.7();3(e.2m){e.2m.3L(\'4Y\',6(a){4 b=0;4 c=a.4Z||a.3M;4 d=a.51;3(a.52){b=53.54(c/d*2V)}y.3K(a,c,d,b)},18)}8 e}}s.1a=13;4 h=s.2n;s.2n=6(a,o){3(y.3N){o.1a=y.3N}R{o.1a=f}3(h){h.1w(5,a,o)}};8 $.3D(s)}6 2U(a){4 l=$9[0],X,i,s,g,1K,$V,V,7,1L,n,2o,1W;4 m=$.55();m.1x=6(a){7.1x(a)};3(a){1f(i=0;i<C.Y;i++){X=$(C[i]);3(Q){X.2H(\'1M\',18)}R{X.3O(\'1M\')}}}s=$.2K(1j,{},$.1U,y);s.1i=s.1i||s;1K=\'56\'+(2l 57().58());3(s.2p){$V=$(s.2p);n=$V.1F(\'T\');3(!n){$V.1F(\'T\',1K)}R{1K=n}}R{$V=$(\'<28 T="\'+1K+\'" 2W="\'+s.26+\'" />\');$V.59({3M:\'5a\',3P:\'-3Q\',3R:\'-3Q\'})}V=$V[0];7={1o:0,1q:13,1X:13,1k:0,1y:\'n/a\',5b:6(){},2X:6(){},5c:6(){},1x:6(a){4 e=(a===\'1z\'?\'1z\':\'1o\');Z(\'5d 2m... \'+e);5.1o=1;1A{3(V.29.1r.3S){V.29.1r.3S(\'5e\')}}1N(5f){}$V.1g(\'2W\',s.26);7.17=e;3(s.17){s.17.1w(s.1i,7,e,a)}3(g){$.1O.1h("3T",[7,s,e])}3(s.1I){s.1I.1w(s.1i,7,e)}}};g=s.3U;3(g&&0===$.2Y++){$.1O.1h("5g")}3(g){$.1O.1h("5h",[7,s])}3(s.2n&&s.2n.1w(s.1i,7,s)===18){3(s.3U){$.2Y--}m.2a();8 m}3(7.1o){m.2a();8 m}1L=l.1B;3(1L){n=1L.T;3(n&&!1L.1M){s.11=s.11||{};s.11[n]=1L.U;3(1L.S=="1Y"){s.11[n+\'.x\']=l.1P;s.11[n+\'.y\']=l.1Q}}}4 o=1;4 p=2;6 2Z(a){4 b=13;1A{3(a.29){b=a.29.1r}}1N(1m){Z(\'30 1T 28.29 1r: \'+1m)}3(b){8 b}1A{b=a.31?a.31:a.1r}1N(1m){Z(\'30 1T 28.31: \'+1m);b=a.1r}8 b}4 q=$(\'3V[T=3W-5i]\').1g(\'2q\');4 r=$(\'3V[T=3W-1V]\').1g(\'2q\');3(r&&q){s.11=s.11||{};s.11[r]=q}6 32(){4 t=$9.1F(\'1v\'),a=$9.1F(\'1t\'),K=\'2i/9-1a\',3X=$9.1g(\'2j\')||$9.1g(\'2T\')||K;l.1Z(\'1v\',1K);3(!z||/3Y/i.1u(z)){l.1Z(\'3u\',\'3J\')}3(a!=s.19){l.1Z(\'1t\',s.19)}3(!s.5j&&(!z||/3Y/i.1u(z))){$9.1g({2T:\'2i/9-1a\',2j:\'2i/9-1a\'})}3(s.1z){1W=1R(6(){2o=1j;1C(o)},s.1z)}6 33(){1A{4 a=2Z(V).5k;Z(\'5l = \'+a);3(a&&a.20()==\'5m\'){1R(33,50)}}1N(e){Z(\'5n 1x: \',e,\' (\',e.T,\')\');1C(p);3(1W){3Z(1W)}1W=1b}}4 b=[];1A{3(s.11){1f(4 n 5o s.11){3(s.11.34(n)){3($.5p(s.11[n])&&s.11[n].34(\'T\')&&s.11[n].34(\'U\')){b.W($(\'<1l S="35" T="\'+s.11[n].T+\'">\').1J(s.11[n].U).36(l)[0])}R{b.W($(\'<1l S="35" T="\'+n+\'">\').1J(s.11[n]).36(l)[0])}}}}3(!s.2p){$V.36(\'21\')}3(V.40){V.40(\'41\',1C)}R{V.3L(\'42\',1C,18)}1R(33,15);1A{l.16()}1N(1m){4 c=1r.5q(\'9\').16;c.1G(l)}}5r{l.1Z(\'1t\',a);l.1Z(\'2j\',3X);3(t){l.1Z(\'1v\',t)}R{$9.3O(\'1v\')}$(b).43()}}3(s.5s){32()}R{1R(32,10)}4 u,14,44=50,37;6 1C(e){3(7.1o||37){8}14=2Z(V);3(!14){Z(\'30 5t 5u 1r\');e=p}3(e===o&&7){7.1x(\'1z\');m.2a(7,\'1z\');8}R 3(e==p&&7){7.1x(\'45 1x\');m.2a(7,\'17\',\'45 1x\');8}3(!14||14.2I.2J==s.26){3(!2o){8}}3(V.46){V.46(\'41\',1C)}R{V.5v(\'42\',1C,18)}4 c=\'1c\',1D;1A{3(2o){5w\'1z\';}4 d=s.27==\'1s\'||14.38||$.5x(14);Z(\'5y=\'+d);3(!d&&1e.2r&&(14.21===13||!14.21.47)){3(--44){Z(\'5z 5A 2N, 39 3a 5B\');1R(1C,5C);8}}4 f=14.21?14.21:14.2s;7.1q=f?f.47:13;7.1X=14.38?14.38:14;3(d){s.27=\'1s\'}7.2X=6(a){4 b={\'2q-S\':s.27};8 b[a.20()]};3(f){7.1k=48(f.2t(\'1k\'))||7.1k;7.1y=f.2t(\'1y\')||7.1y}4 h=(s.27||\'\').20();4 i=/(3b|49|2u)/.1u(h);3(i||s.2v){4 j=14.2w(\'2v\')[0];3(j){7.1q=j.U;7.1k=48(j.2t(\'1k\'))||7.1k;7.1y=j.2t(\'1y\')||7.1y}R 3(i){4 k=14.2w(\'2L\')[0];4 b=14.2w(\'21\')[0];3(k){7.1q=k.2x?k.2x:k.4a}R 3(b){7.1q=b.2x?b.2x:b.4a}}}R 3(h==\'1s\'&&!7.1X&&7.1q){7.1X=v(7.1q)}1A{u=x(7,h,s)}1N(1m){c=\'2y\';7.17=1D=(1m||c)}}1N(1m){Z(\'17 5D: \',1m);c=\'17\';7.17=1D=(1m||c)}3(7.1o){Z(\'2m 1o\');c=13}3(7.1k){c=(7.1k>=5E&&7.1k<5F||7.1k===5G)?\'1c\':\'17\'}3(c===\'1c\'){3(s.1c){s.1c.1w(s.1i,u,\'1c\',7)}m.5H(7.1q,\'1c\',7);3(g){$.1O.1h("5I",[7,s])}}R 3(c){3(1D===1b){1D=7.1y}3(s.17){s.17.1w(s.1i,7,c,1D)}m.2a(7,\'17\',1D);3(g){$.1O.1h("3T",[7,s,1D])}}3(g){$.1O.1h("5J",[7,s])}3(g&&!--$.2Y){$.1O.1h("5K")}3(s.1I){s.1I.1w(s.1i,7,c)}37=1j;3(s.1z){3Z(1W)}1R(6(){3(!s.2p){$V.43()}R{$V.1g(\'2W\',s.26)}7.1X=13},2V)}4 v=$.5L||6(s,a){3(1e.4b){a=2l 4b(\'5M.5N\');a.5O=\'18\';a.5P(s)}R{a=(2l 5Q()).5R(s,\'2u/1s\')}8(a&&a.2s&&a.2s.4c!=\'2y\')?a:13};4 w=$.5S||6(s){8 1e[\'5T\'](\'(\'+s+\')\')};4 x=6(a,b,s){4 c=a.2X(\'2q-S\')||\'\',1s=b===\'1s\'||!b&&c.2h(\'1s\')>=0,u=1s?a.1X:a.1q;3(1s&&u.2s.4c===\'2y\'){3($.17){$.17(\'2y\')}}3(s&&s.4d){u=s.4d(u,b)}3(1d u===\'2f\'){3(b===\'3b\'||!b&&c.2h(\'3b\')>=0){u=w(u)}R 3(b==="49"||!b&&c.2h("3v")>=0){$.5U(u)}}8 u};8 m}};$.12.3c=6(a){a=a||{};a.2z=a.2z&&$.5V($.12.3d);3(!a.2z&&5.Y===0){4 o={s:5.22,c:5.1i};3(!$.4e&&o.s){Z(\'39 3a 4f, 5W 3c\');$(6(){$(o.s,o.c).3c(a)});8 5}Z(\'5X; 5Y 4g 5Z 60 22\'+($.4e?\'\':\' (39 3a 4f)\'));8 5}3(a.2z){$(1r).4h(\'16.9-1E\',5.22,2A).4h(\'2B.9-1E\',5.22,2C).3d(\'16.9-1E\',5.22,a,2A).3d(\'2B.9-1E\',5.22,a,2C);8 5}8 5.4i().4j(\'16.9-1E\',a,2A).4j(\'2B.9-1E\',a,2C)};6 2A(e){4 a=e.1a;3(!e.61()){e.62();$(e.1v).1n(a)}}6 2C(e){4 a=e.1v;4 b=$(a);3(!(b.4k("[S=16],[S=1Y]"))){4 t=b.63(\'[S=16]\');3(t.Y===0){8}a=t[0]}4 c=5;c.1B=a;3(a.S==\'1Y\'){3(e.4l!==1b){c.1P=e.4l;c.1Q=e.64}R 3(1d $.12.4m==\'6\'){4 d=b.4m();c.1P=e.4n-d.3R;c.1Q=e.4o-d.3P}R{c.1P=e.4n-a.65;c.1Q=e.4o-a.66}}1R(6(){c.1B=c.1P=c.1Q=13},2V)}$.12.4i=6(){8 5.67(\'16.9-1E 2B.9-1E\')};$.12.2P=6(b,c){4 a=[];3(5.Y===0){8 a}4 d=5[0];4 e=5.1g(\'1K\');4 f=b?d.2w(\'*\'):d.4g;4 g;3(f&&!/4p [68]/.1u(4q.4r)){f=$(f).1T()}3(e){g=$(\':1l[9=\'+e+\']\').1T();3(g.Y){f=(f||[]).69(g)}}3(!f||!f.Y){8 a}4 i,j,n,v,X,1p,3e;1f(i=0,1p=f.Y;i<1p;i++){X=f[i];n=X.T;3(!n||X.1M){3f}3(b&&d.1B&&X.S=="1Y"){3(d.1B==X){a.W({T:n,U:$(X).1J(),S:X.S});a.W({T:n+\'.x\',U:d.1P},{T:n+\'.y\',U:d.1Q})}3f}v=$.2b(X,1j);3(v&&v.2D==2c){3(c){c.W(X)}1f(j=0,3e=v.Y;j<3e;j++){a.W({T:n,U:v[j]})}}R 3(P.2G&&X.S==\'2e\'){3(c){c.W(X)}4 h=X.3r;3(h.Y){1f(j=0;j<h.Y;j++){a.W({T:n,U:h[j],S:X.S})}}R{a.W({T:n,U:\'\',S:X.S})}}R 3(v!==13&&1d v!=\'1b\'){3(c){c.W(X)}a.W({T:n,U:v,S:X.S,4s:X.4s})}}3(!b&&d.1B){4 k=$(d.1B),1l=k[0];n=1l.T;3(n&&!1l.1M&&1l.S==\'1Y\'){a.W({T:n,U:k.1J()});a.W({T:n+\'.x\',U:d.1P},{T:n+\'.y\',U:d.1Q})}}8 a};$.12.6a=6(a){8 $.1V(5.2P(a))};$.12.6b=6(b){4 a=[];5.1H(6(){4 n=5.T;3(!n){8}4 v=$.2b(5,b);3(v&&v.2D==2c){1f(4 i=0,1p=v.Y;i<1p;i++){a.W({T:n,U:v[i]})}}R 3(v!==13&&1d v!=\'1b\'){a.W({T:5.T,U:v})}});8 $.1V(a)};$.12.2b=6(a){1f(4 b=[],i=0,1p=5.Y;i<1p;i++){4 c=5[i];4 v=$.2b(c,a);3(v===13||1d v==\'1b\'||(v.2D==2c&&!v.Y)){3f}3(v.2D==2c){$.6c(b,v)}R{b.W(v)}}8 b};$.2b=6(b,c){4 n=b.T,t=b.S,23=b.3g.20();3(c===1b){c=1j}3(c&&(!n||b.1M||t==\'2d\'||t==\'6d\'||(t==\'3h\'||t==\'3i\')&&!b.3j||(t==\'16\'||t==\'1Y\')&&b.9&&b.9.1B!=b||23==\'1S\'&&b.3k==-1)){8 13}3(23==\'1S\'){4 d=b.3k;3(d<0){8 13}4 a=[],3l=b.6e;4 e=(t==\'1S-4t\');4 f=(e?d+1:3l.Y);1f(4 i=(e?d:0);i<f;i++){4 g=3l[i];3(g.25){4 v=g.U;3(!v){v=(g.3m&&g.3m.U&&!(g.3m.U.6f))?g.2u:g.U}3(e){8 v}a.W(v)}}8 a}8 $(b).1J()};$.12.2S=6(a){8 5.1H(6(){$(\'1l,1S,2v\',5).4u(a)})};$.12.4u=$.12.6g=6(a){4 b=/^(?:6h|6i|6j|6k|6l|6m|6n|6o|6p|6q|2u|6r|19|6s)$/i;8 5.1H(6(){4 t=5.S,23=5.3g.20();3(b.1u(t)||23==\'2v\'){5.U=\'\'}R 3(t==\'3h\'||t==\'3i\'){5.3j=18}R 3(23==\'1S\'){5.3k=-1}R 3(t=="2e"){3(/4p/.1u(4q.4r)){$(5).3A($(5).6t(1j))}R{$(5).1J(\'\')}}R 3(a){3((a===1j&&/35/.1u(t))||(1d a==\'2f\'&&$(5).4k(a))){5.U=\'\'}}})};$.12.2R=6(){8 5.1H(6(){3(1d 5.2d==\'6\'||(1d 5.2d==\'6u\'&&!5.2d.6v)){5.2d()}})};$.12.6w=6(b){3(b===1b){b=1j}8 5.1H(6(){5.1M=!b})};$.12.25=6(b){3(b===1b){b=1j}8 5.1H(6(){4 t=5.S;3(t==\'3h\'||t==\'3i\'){5.3j=b}R 3(5.3g.20()==\'4v\'){4 a=$(5).6x(\'1S\');3(b&&a[0]&&a[0].S==\'1S-4t\'){a.6y(\'4v\').25(18)}5.25=b}})};$.12.1n.4w=18;6 Z(){3(!$.12.1n.4w){8}4 a=\'[2F.9] \'+2c.6z.6A.1w(24,\'\');3(1e.3n&&1e.3n.Z){1e.3n.Z(a)}R 3(1e.2r&&1e.2r.4x){1e.2r.4x(a)}}}));',62,409,'|||if|var|this|function|xhr|return|form||||||||||||||||||||||||||||||||||||||||||||else|type|name|value|io|push|el|length|log||extraData|fn|null|doc||submit|error|false|url|data|undefined|success|typeof|window|for|attr|trigger|context|true|status|input|err|ajaxSubmit|aborted|max|responseText|document|xml|action|test|target|call|abort|statusText|timeout|try|clk|cb|errMsg|plugin|attr2|apply|each|complete|val|id|sub|disabled|catch|event|clk_x|clk_y|setTimeout|select|get|ajaxSettings|param|timeoutHandle|responseXML|image|setAttribute|toLowerCase|body|selector|tag|arguments|selected|iframeSrc|dataType|iframe|contentWindow|reject|fieldValue|Array|reset|file|string|via|indexOf|multipart|enctype|part|new|upload|beforeSend|timedOut|iframeTarget|content|opera|documentElement|getAttribute|text|textarea|getElementsByTagName|textContent|parsererror|delegation|doAjaxSubmit|click|captureSubmittingElement|constructor|define|jquery|fileapi|prop|location|href|extend|pre|beforeSerialize|callback|traditional|formToArray|beforeSubmit|resetForm|clearForm|encoding|fileUploadIframe|100|src|getResponseHeader|active|getDoc|cannot|contentDocument|doSubmit|checkState|hasOwnProperty|hidden|appendTo|callbackProcessed|XMLDocument|DOM|not|json|ajaxForm|on|jmax|continue|tagName|checkbox|radio|checked|selectedIndex|ops|attributes|console|use|strict|jQuery|files|formdata|FormData|method|javascript|serialize|veto|vetoed|validate|replaceWith|closeKeepAlive|fileUploadXhr|ajax|jqxhr|deepSerialize|split|decodeURIComponent|append|POST|uploadProgress|addEventListener|position|formData|removeAttr|top|1000px|left|execCommand|ajaxError|global|meta|csrf|et|post|clearTimeout|attachEvent|onload|load|remove|domCheckCount|server|detachEvent|innerHTML|Number|script|innerText|ActiveXObject|nodeName|dataFilter|isReady|ready|elements|off|ajaxFormUnbind|bind|is|offsetX|offset|pageX|pageY|MSIE|navigator|userAgent|required|one|clearFields|option|debug|postError|amd|Zepto|skipping|process|no|element|trim|match|https|about|blank|semantic|toUpperCase|GET|includeHidden|replaceTarget|html|enabled|filter|fileAPI|removeData|notify|replace|contentType|processData|cache|progress|loaded||total|lengthComputable|Math|ceil|Deferred|jqFormIO|Date|getTime|css|absolute|getAllResponseHeaders|setRequestHeader|aborting|Stop|ignore|ajaxStart|ajaxSend|token|skipEncodingOverride|readyState|state|uninitialized|Server|in|isPlainObject|createElement|finally|forceSync|access|response|removeEventListener|throw|isXMLDoc|isXml|requeing|onLoad|available|250|caught|200|300|304|resolve|ajaxSuccess|ajaxComplete|ajaxStop|parseXML|Microsoft|XMLDOM|async|loadXML|DOMParser|parseFromString|parseJSON|eval|globalEval|isFunction|queuing|terminating|zero|found|by|isDefaultPrevented|preventDefault|closest|offsetY|offsetLeft|offsetTop|unbind|678|concat|formSerialize|fieldSerialize|merge|button|options|specified|clearInputs|color|date|datetime|email|month|number|password|range|search|tel|time|week|clone|object|nodeType|enable|parent|find|prototype|join'.split('|'),0,{}))

regula.custom({
	name:'JustLetters'
	,validator:function(){
		return /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/.test(this.value)
	}
})
regula.custom({
	name:'JustNumbers'
	,validator:function(){
		return /^\+?(\d[\d\-\+\(\) ]{5,}\d$)/.test(this.value)
	}
})
;
(function() {


}).call(this);
(function() {
  var previousDevice, _addClass, _doc_element, _find, _handleOrientation, _hasClass, _orientation_event, _removeClass, _supports_orientation, _user_agent;

  previousDevice = window.device;

  window.device = {};

  _doc_element = window.document.documentElement;

  _user_agent = window.navigator.userAgent.toLowerCase();

  device.ios = function() {
    return device.iphone() || device.ipod() || device.ipad();
  };

  device.iphone = function() {
    return _find('iphone');
  };

  device.ipod = function() {
    return _find('ipod');
  };

  device.ipad = function() {
    return _find('ipad');
  };

  device.android = function() {
    return _find('android');
  };

  device.androidPhone = function() {
    return device.android() && _find('mobile');
  };

  device.androidTablet = function() {
    return device.android() && !_find('mobile');
  };

  device.blackberry = function() {
    return _find('blackberry') || _find('bb10') || _find('rim');
  };

  device.blackberryPhone = function() {
    return device.blackberry() && !_find('tablet');
  };

  device.blackberryTablet = function() {
    return device.blackberry() && _find('tablet');
  };

  device.windows = function() {
    return _find('windows');
  };

  device.windowsPhone = function() {
    return device.windows() && _find('phone');
  };

  device.windowsTablet = function() {
    return device.windows() && _find('touch');
  };

  device.fxos = function() {
    return (_find('(mobile;') || _find('(tablet;')) && _find('; rv:');
  };

  device.fxosPhone = function() {
    return device.fxos() && _find('mobile');
  };

  device.fxosTablet = function() {
    return device.fxos() && _find('tablet');
  };

  device.meego = function() {
    return _find('meego');
  };

  device.cordova = function() {
    return window.cordova && location.protocol === 'file:';
  };

  device.mobile = function() {
    return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego();
  };

  device.tablet = function() {
    return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet();
  };

  device.desktop = function() {
    return !device.tablet() && !device.mobile();
  };

  device.portrait = function() {
    return (window.innerHeight / window.innerWidth) > 1;
  };

  device.landscape = function() {
    return (window.innerHeight / window.innerWidth) < 1;
  };

  device.noConflict = function() {
    window.device = previousDevice;
    return this;
  };

  _find = function(needle) {
    return _user_agent.indexOf(needle) !== -1;
  };

  _hasClass = function(class_name) {
    var regex;
    regex = new RegExp(class_name, 'i');
    return _doc_element.className.match(regex);
  };

  _addClass = function(class_name) {
    if (!_hasClass(class_name)) {
      return _doc_element.className += " " + class_name;
    }
  };

  _removeClass = function(class_name) {
    if (_hasClass(class_name)) {
      return _doc_element.className = _doc_element.className.replace(class_name, "");
    }
  };

  if (device.ios()) {
    if (device.ipad()) {
      _addClass("ios ipad tablet");
    } else if (device.iphone()) {
      _addClass("ios iphone mobile");
    } else if (device.ipod()) {
      _addClass("ios ipod mobile");
    }
  } else if (device.android()) {
    if (device.androidTablet()) {
      _addClass("android tablet");
    } else {
      _addClass("android mobile");
    }
  } else if (device.blackberry()) {
    if (device.blackberryTablet()) {
      _addClass("blackberry tablet");
    } else {
      _addClass("blackberry mobile");
    }
  } else if (device.windows()) {
    if (device.windowsTablet()) {
      _addClass("windows tablet");
    } else if (device.windowsPhone()) {
      _addClass("windows mobile");
    } else {
      _addClass("desktop");
    }
  } else if (device.fxos()) {
    if (device.fxosTablet()) {
      _addClass("fxos tablet");
    } else {
      _addClass("fxos mobile");
    }
  } else if (device.meego()) {
    _addClass("meego mobile");
  } else {
    _addClass("desktop");
  }

  if (device.cordova()) {
    _addClass("cordova");
  }

  _handleOrientation = function() {
    if (device.landscape()) {
      _removeClass("portrait");
      return _addClass("landscape");
    } else {
      _removeClass("landscape");
      return _addClass("portrait");
    }
  };

  _supports_orientation = "onorientationchange" in window;

  _orientation_event = _supports_orientation ? "orientationchange" : "resize";

  if (window.addEventListener) {
    window.addEventListener(_orientation_event, _handleOrientation, false);
  } else if (window.attachEvent) {
    window.attachEvent(_orientation_event, _handleOrientation);
  } else {
    window[_orientation_event] = _handleOrientation;
  }

  _handleOrientation();

}).call(this);
/*
 HTML5 Shiv v3.6.2pre | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/

(function(l,f){function m(){var a=e.elements;return"string"==typeof a?a.split(" "):a}function i(a){var b=n[a[o]];b||(b={},h++,a[o]=h,n[h]=b);return b}function p(a,b,c){b||(b=f);if(g)return b.createElement(a);c||(c=i(b));b=c.cache[a]?c.cache[a].cloneNode():r.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);return b.canHaveChildren&&!s.test(a)?c.frag.appendChild(b):b}function t(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();
a.createElement=function(c){return!e.shivMethods?b.createElem(c):p(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/\w+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(e,b.frag)}function q(a){a||(a=f);var b=i(a);if(e.shivCSS&&!j&&!b.hasCSS){var c,d=a;c=d.createElement("p");d=d.getElementsByTagName("head")[0]||d.documentElement;c.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
c=d.insertBefore(c.lastChild,d.firstChild);b.hasCSS=!!c}g||t(a,b);return a}var k=l.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,j,o="_html5shiv",h=0,n={},g;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";j="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||
"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}g=b}catch(d){g=j=!0}})();var e={elements:k.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",version:"3.6.2pre",shivCSS:!1!==k.shivCSS,supportsUnknownElements:g,shivMethods:!1!==k.shivMethods,type:"default",shivDocument:q,createElement:p,createDocumentFragment:function(a,b){a||(a=f);if(g)return a.createDocumentFragment();
for(var b=b||i(a),c=b.frag.cloneNode(),d=0,e=m(),h=e.length;d<h;d++)c.createElement(e[d]);return c}};l.html5=e;q(f)})(this,document);
/*!
 * jQuery Migrate - v1.2.1 - 2013-05-08
 * https://github.com/jquery/jquery-migrate
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; Licensed MIT
 */

(function( jQuery, window, undefined ) {
// See http://bugs.jquery.com/ticket/13335
// "use strict";


var warnedAbout = {};

// List of warnings already given; public read only
jQuery.migrateWarnings = [];

// Set to true to prevent console output; migrateWarnings still maintained
// jQuery.migrateMute = false;

// Show a message on the console so devs know we're active
if ( !jQuery.migrateMute && window.console && window.console.log ) {
	window.console.log("JQMIGRATE: Logging is active");
}

// Set to false to disable traces that appear with warnings
if ( jQuery.migrateTrace === undefined ) {
	jQuery.migrateTrace = true;
}

// Forget any warnings we've already given; public
jQuery.migrateReset = function() {
	warnedAbout = {};
	jQuery.migrateWarnings.length = 0;
};

function migrateWarn( msg) {
	var console = window.console;
	if ( !warnedAbout[ msg ] ) {
		warnedAbout[ msg ] = true;
		jQuery.migrateWarnings.push( msg );
		if ( console && console.warn && !jQuery.migrateMute ) {
			console.warn( "JQMIGRATE: " + msg );
			if ( jQuery.migrateTrace && console.trace ) {
				console.trace();
			}
		}
	}
}

function migrateWarnProp( obj, prop, value, msg ) {
	if ( Object.defineProperty ) {
		// On ES5 browsers (non-oldIE), warn if the code tries to get prop;
		// allow property to be overwritten in case some other plugin wants it
		try {
			Object.defineProperty( obj, prop, {
				configurable: true,
				enumerable: true,
				get: function() {
					migrateWarn( msg );
					return value;
				},
				set: function( newValue ) {
					migrateWarn( msg );
					value = newValue;
				}
			});
			return;
		} catch( err ) {
			// IE8 is a dope about Object.defineProperty, can't warn there
		}
	}

	// Non-ES5 (or broken) browser; just set the property
	jQuery._definePropertyBroken = true;
	obj[ prop ] = value;
}

if ( document.compatMode === "BackCompat" ) {
	// jQuery has never supported or tested Quirks Mode
	migrateWarn( "jQuery is not compatible with Quirks Mode" );
}


var attrFn = jQuery( "<input/>", { size: 1 } ).attr("size") && jQuery.attrFn,
	oldAttr = jQuery.attr,
	valueAttrGet = jQuery.attrHooks.value && jQuery.attrHooks.value.get ||
		function() { return null; },
	valueAttrSet = jQuery.attrHooks.value && jQuery.attrHooks.value.set ||
		function() { return undefined; },
	rnoType = /^(?:input|button)$/i,
	rnoAttrNodeType = /^[238]$/,
	rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	ruseDefault = /^(?:checked|selected)$/i;

// jQuery.attrFn
migrateWarnProp( jQuery, "attrFn", attrFn || {}, "jQuery.attrFn is deprecated" );

jQuery.attr = function( elem, name, value, pass ) {
	var lowerName = name.toLowerCase(),
		nType = elem && elem.nodeType;

	if ( pass ) {
		// Since pass is used internally, we only warn for new jQuery
		// versions where there isn't a pass arg in the formal params
		if ( oldAttr.length < 4 ) {
			migrateWarn("jQuery.fn.attr( props, pass ) is deprecated");
		}
		if ( elem && !rnoAttrNodeType.test( nType ) &&
			(attrFn ? name in attrFn : jQuery.isFunction(jQuery.fn[name])) ) {
			return jQuery( elem )[ name ]( value );
		}
	}

	// Warn if user tries to set `type`, since it breaks on IE 6/7/8; by checking
	// for disconnected elements we don't warn on $( "<button>", { type: "button" } ).
	if ( name === "type" && value !== undefined && rnoType.test( elem.nodeName ) && elem.parentNode ) {
		migrateWarn("Can't change the 'type' of an input or button in IE 6/7/8");
	}

	// Restore boolHook for boolean property/attribute synchronization
	if ( !jQuery.attrHooks[ lowerName ] && rboolean.test( lowerName ) ) {
		jQuery.attrHooks[ lowerName ] = {
			get: function( elem, name ) {
				// Align boolean attributes with corresponding properties
				// Fall back to attribute presence where some booleans are not supported
				var attrNode,
					property = jQuery.prop( elem, name );
				return property === true || typeof property !== "boolean" &&
					( attrNode = elem.getAttributeNode(name) ) && attrNode.nodeValue !== false ?

					name.toLowerCase() :
					undefined;
			},
			set: function( elem, value, name ) {
				var propName;
				if ( value === false ) {
					// Remove boolean attributes when set to false
					jQuery.removeAttr( elem, name );
				} else {
					// value is true since we know at this point it's type boolean and not false
					// Set boolean attributes to the same name and set the DOM property
					propName = jQuery.propFix[ name ] || name;
					if ( propName in elem ) {
						// Only set the IDL specifically if it already exists on the element
						elem[ propName ] = true;
					}

					elem.setAttribute( name, name.toLowerCase() );
				}
				return name;
			}
		};

		// Warn only for attributes that can remain distinct from their properties post-1.9
		if ( ruseDefault.test( lowerName ) ) {
			migrateWarn( "jQuery.fn.attr('" + lowerName + "') may use property instead of attribute" );
		}
	}

	return oldAttr.call( jQuery, elem, name, value );
};

// attrHooks: value
jQuery.attrHooks.value = {
	get: function( elem, name ) {
		var nodeName = ( elem.nodeName || "" ).toLowerCase();
		if ( nodeName === "button" ) {
			return valueAttrGet.apply( this, arguments );
		}
		if ( nodeName !== "input" && nodeName !== "option" ) {
			migrateWarn("jQuery.fn.attr('value') no longer gets properties");
		}
		return name in elem ?
			elem.value :
			null;
	},
	set: function( elem, value ) {
		var nodeName = ( elem.nodeName || "" ).toLowerCase();
		if ( nodeName === "button" ) {
			return valueAttrSet.apply( this, arguments );
		}
		if ( nodeName !== "input" && nodeName !== "option" ) {
			migrateWarn("jQuery.fn.attr('value', val) no longer sets properties");
		}
		// Does not return so that setAttribute is also used
		elem.value = value;
	}
};


var matched, browser,
	oldInit = jQuery.fn.init,
	oldParseJSON = jQuery.parseJSON,
	// Note: XSS check is done below after string is trimmed
	rquickExpr = /^([^<]*)(<[\w\W]+>)([^>]*)$/;

// $(html) "looks like html" rule change
jQuery.fn.init = function( selector, context, rootjQuery ) {
	var match;

	if ( selector && typeof selector === "string" && !jQuery.isPlainObject( context ) &&
			(match = rquickExpr.exec( jQuery.trim( selector ) )) && match[ 0 ] ) {
		// This is an HTML string according to the "old" rules; is it still?
		if ( selector.charAt( 0 ) !== "<" ) {
			migrateWarn("$(html) HTML strings must start with '<' character");
		}
		if ( match[ 3 ] ) {
			migrateWarn("$(html) HTML text after last tag is ignored");
		}
		// Consistently reject any HTML-like string starting with a hash (#9521)
		// Note that this may break jQuery 1.6.x code that otherwise would work.
		if ( match[ 0 ].charAt( 0 ) === "#" ) {
			migrateWarn("HTML string cannot start with a '#' character");
			jQuery.error("JQMIGRATE: Invalid selector string (XSS)");
		}
		// Now process using loose rules; let pre-1.8 play too
		if ( context && context.context ) {
			// jQuery object as context; parseHTML expects a DOM object
			context = context.context;
		}
		if ( jQuery.parseHTML ) {
			return oldInit.call( this, jQuery.parseHTML( match[ 2 ], context, true ),
					context, rootjQuery );
		}
	}
	return oldInit.apply( this, arguments );
};
jQuery.fn.init.prototype = jQuery.fn;

// Let $.parseJSON(falsy_value) return null
jQuery.parseJSON = function( json ) {
	if ( !json && json !== null ) {
		migrateWarn("jQuery.parseJSON requires a valid JSON string");
		return null;
	}
	return oldParseJSON.apply( this, arguments );
};

jQuery.uaMatch = function( ua ) {
	ua = ua.toLowerCase();

	var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
		/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
		/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
		/(msie) ([\w.]+)/.exec( ua ) ||
		ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
		[];

	return {
		browser: match[ 1 ] || "",
		version: match[ 2 ] || "0"
	};
};

// Don't clobber any existing jQuery.browser in case it's different
if ( !jQuery.browser ) {
	matched = jQuery.uaMatch( navigator.userAgent );
	browser = {};

	if ( matched.browser ) {
		browser[ matched.browser ] = true;
		browser.version = matched.version;
	}

	// Chrome is Webkit, but Webkit is also Safari.
	if ( browser.chrome ) {
		browser.webkit = true;
	} else if ( browser.webkit ) {
		browser.safari = true;
	}

	jQuery.browser = browser;
}

// Warn if the code tries to get jQuery.browser
migrateWarnProp( jQuery, "browser", jQuery.browser, "jQuery.browser is deprecated" );

jQuery.sub = function() {
	function jQuerySub( selector, context ) {
		return new jQuerySub.fn.init( selector, context );
	}
	jQuery.extend( true, jQuerySub, this );
	jQuerySub.superclass = this;
	jQuerySub.fn = jQuerySub.prototype = this();
	jQuerySub.fn.constructor = jQuerySub;
	jQuerySub.sub = this.sub;
	jQuerySub.fn.init = function init( selector, context ) {
		if ( context && context instanceof jQuery && !(context instanceof jQuerySub) ) {
			context = jQuerySub( context );
		}

		return jQuery.fn.init.call( this, selector, context, rootjQuerySub );
	};
	jQuerySub.fn.init.prototype = jQuerySub.fn;
	var rootjQuerySub = jQuerySub(document);
	migrateWarn( "jQuery.sub() is deprecated" );
	return jQuerySub;
};


// Ensure that $.ajax gets the new parseJSON defined in core.js
jQuery.ajaxSetup({
	converters: {
		"text json": jQuery.parseJSON
	}
});


var oldFnData = jQuery.fn.data;

jQuery.fn.data = function( name ) {
	var ret, evt,
		elem = this[0];

	// Handles 1.7 which has this behavior and 1.8 which doesn't
	if ( elem && name === "events" && arguments.length === 1 ) {
		ret = jQuery.data( elem, name );
		evt = jQuery._data( elem, name );
		if ( ( ret === undefined || ret === evt ) && evt !== undefined ) {
			migrateWarn("Use of jQuery.fn.data('events') is deprecated");
			return evt;
		}
	}
	return oldFnData.apply( this, arguments );
};


var rscriptType = /\/(java|ecma)script/i,
	oldSelf = jQuery.fn.andSelf || jQuery.fn.addBack;

jQuery.fn.andSelf = function() {
	migrateWarn("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");
	return oldSelf.apply( this, arguments );
};

// Since jQuery.clean is used internally on older versions, we only shim if it's missing
if ( !jQuery.clean ) {
	jQuery.clean = function( elems, context, fragment, scripts ) {
		// Set context per 1.8 logic
		context = context || document;
		context = !context.nodeType && context[0] || context;
		context = context.ownerDocument || context;

		migrateWarn("jQuery.clean() is deprecated");

		var i, elem, handleScript, jsTags,
			ret = [];

		jQuery.merge( ret, jQuery.buildFragment( elems, context ).childNodes );

		// Complex logic lifted directly from jQuery 1.8
		if ( fragment ) {
			// Special handling of each script element
			handleScript = function( elem ) {
				// Check if we consider it executable
				if ( !elem.type || rscriptType.test( elem.type ) ) {
					// Detach the script and store it in the scripts array (if provided) or the fragment
					// Return truthy to indicate that it has been handled
					return scripts ?
						scripts.push( elem.parentNode ? elem.parentNode.removeChild( elem ) : elem ) :
						fragment.appendChild( elem );
				}
			};

			for ( i = 0; (elem = ret[i]) != null; i++ ) {
				// Check if we're done after handling an executable script
				if ( !( jQuery.nodeName( elem, "script" ) && handleScript( elem ) ) ) {
					// Append to fragment and handle embedded scripts
					fragment.appendChild( elem );
					if ( typeof elem.getElementsByTagName !== "undefined" ) {
						// handleScript alters the DOM, so use jQuery.merge to ensure snapshot iteration
						jsTags = jQuery.grep( jQuery.merge( [], elem.getElementsByTagName("script") ), handleScript );

						// Splice the scripts into ret after their former ancestor and advance our index beyond them
						ret.splice.apply( ret, [i + 1, 0].concat( jsTags ) );
						i += jsTags.length;
					}
				}
			}
		}

		return ret;
	};
}

var eventAdd = jQuery.event.add,
	eventRemove = jQuery.event.remove,
	eventTrigger = jQuery.event.trigger,
	oldToggle = jQuery.fn.toggle,
	oldLive = jQuery.fn.live,
	oldDie = jQuery.fn.die,
	ajaxEvents = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
	rajaxEvent = new RegExp( "\\b(?:" + ajaxEvents + ")\\b" ),
	rhoverHack = /(?:^|\s)hover(\.\S+|)\b/,
	hoverHack = function( events ) {
		if ( typeof( events ) !== "string" || jQuery.event.special.hover ) {
			return events;
		}
		if ( rhoverHack.test( events ) ) {
			migrateWarn("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'");
		}
		return events && events.replace( rhoverHack, "mouseenter$1 mouseleave$1" );
	};

// Event props removed in 1.9, put them back if needed; no practical way to warn them
if ( jQuery.event.props && jQuery.event.props[ 0 ] !== "attrChange" ) {
	jQuery.event.props.unshift( "attrChange", "attrName", "relatedNode", "srcElement" );
}

// Undocumented jQuery.event.handle was "deprecated" in jQuery 1.7
if ( jQuery.event.dispatch ) {
	migrateWarnProp( jQuery.event, "handle", jQuery.event.dispatch, "jQuery.event.handle is undocumented and deprecated" );
}

// Support for 'hover' pseudo-event and ajax event warnings
jQuery.event.add = function( elem, types, handler, data, selector ){
	if ( elem !== document && rajaxEvent.test( types ) ) {
		migrateWarn( "AJAX events should be attached to document: " + types );
	}
	eventAdd.call( this, elem, hoverHack( types || "" ), handler, data, selector );
};
jQuery.event.remove = function( elem, types, handler, selector, mappedTypes ){
	eventRemove.call( this, elem, hoverHack( types ) || "", handler, selector, mappedTypes );
};

jQuery.fn.error = function() {
	var args = Array.prototype.slice.call( arguments, 0);
	migrateWarn("jQuery.fn.error() is deprecated");
	args.splice( 0, 0, "error" );
	if ( arguments.length ) {
		return this.bind.apply( this, args );
	}
	// error event should not bubble to window, although it does pre-1.7
	this.triggerHandler.apply( this, args );
	return this;
};

jQuery.fn.toggle = function( fn, fn2 ) {

	// Don't mess with animation or css toggles
	if ( !jQuery.isFunction( fn ) || !jQuery.isFunction( fn2 ) ) {
		return oldToggle.apply( this, arguments );
	}
	migrateWarn("jQuery.fn.toggle(handler, handler...) is deprecated");

	// Save reference to arguments for access in closure
	var args = arguments,
		guid = fn.guid || jQuery.guid++,
		i = 0,
		toggler = function( event ) {
			// Figure out which function to execute
			var lastToggle = ( jQuery._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
			jQuery._data( this, "lastToggle" + fn.guid, lastToggle + 1 );

			// Make sure that clicks stop
			event.preventDefault();

			// and execute the function
			return args[ lastToggle ].apply( this, arguments ) || false;
		};

	// link all the functions, so any of them can unbind this click handler
	toggler.guid = guid;
	while ( i < args.length ) {
		args[ i++ ].guid = guid;
	}

	return this.click( toggler );
};

jQuery.fn.live = function( types, data, fn ) {
	migrateWarn("jQuery.fn.live() is deprecated");
	if ( oldLive ) {
		return oldLive.apply( this, arguments );
	}
	jQuery( this.context ).on( types, this.selector, data, fn );
	return this;
};

jQuery.fn.die = function( types, fn ) {
	migrateWarn("jQuery.fn.die() is deprecated");
	if ( oldDie ) {
		return oldDie.apply( this, arguments );
	}
	jQuery( this.context ).off( types, this.selector || "**", fn );
	return this;
};

// Turn global events into document-triggered events
jQuery.event.trigger = function( event, data, elem, onlyHandlers  ){
	if ( !elem && !rajaxEvent.test( event ) ) {
		migrateWarn( "Global events are undocumented and deprecated" );
	}
	return eventTrigger.call( this,  event, data, elem || document, onlyHandlers  );
};
jQuery.each( ajaxEvents.split("|"),
	function( _, name ) {
		jQuery.event.special[ name ] = {
			setup: function() {
				var elem = this;

				// The document needs no shimming; must be !== for oldIE
				if ( elem !== document ) {
					jQuery.event.add( document, name + "." + jQuery.guid, function() {
						jQuery.event.trigger( name, null, elem, true );
					});
					jQuery._data( this, name, jQuery.guid++ );
				}
				return false;
			},
			teardown: function() {
				if ( this !== document ) {
					jQuery.event.remove( document, name + "." + jQuery._data( this, name ) );
				}
				return false;
			}
		};
	}
);


})( jQuery, window );
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
;
/*parsed HTML*/

      
$(function(){
	$(".maxheight").each(function(){
		$(this).contents().wrapAll("<div class='box_inner'></div>");
	})
	$(".maxheight1").each(function(){
		$(this).contents().wrapAll("<div class='box_inner'></div>");
	})
	$(".maxheight2").each(function(){
		$(this).contents().wrapAll("<div class='box_inner'></div>");
	})
})
/*add event*/
$(window).bind("resize", height_handler).bind("load", height_handler)
function height_handler(){
	if($(window).width()>767){
		$(".maxheight").equalHeights();
	}else{
		$(".maxheight").css({'height':'auto'});
	}
	if($(window).width()>767){
		$(".maxheight1").equalHeights();
	}else{
		$(".maxheight1").css({'height':'auto'});
	}
	if($(window).width()>767){
		$(".maxheight2").equalHeights();
	}else{
		$(".maxheight2").css({'height':'auto'});
	}
}
/*glob function*/
(function($){
	$.fn.equalHeights=function(minHeight,maxHeight){
		tallest=(minHeight)?minHeight:0;
		this.each(function(){
			if($(">.box_inner", this).outerHeight()>tallest){
				tallest=$(">.box_inner", this).outerHeight()
			}
		});
		if((maxHeight)&&tallest>maxHeight) tallest=maxHeight;
		return this.each(function(){$(this).height(tallest)})
	}
})(jQuery)
;
/**
 * jQuery Mobile Menu 
 * Turn unordered list menu into dropdown select menu
 * version 1.1(27-JULY-2013)
 * 
 * Built on top of the jQuery library
 *   http://jquery.com
 * 
 * Documentation
 *   http://github.com/mambows/mobilemenu
 */

(function($){
$.fn.mobileMenu = function(options) {
  
  var defaults = {
      defaultText: 'Navigate to...',
      className: 'select-menu',
      subMenuClass: 'sub-menu',
      subMenuDash: '&ndash;'
    },
    settings = $.extend( defaults, options ),
    el = $(this);
  
  this.each(function(){
    var $el = $(this),
      $select_menu;

    // ad class to submenu list
    $el.find('ul').addClass(settings.subMenuClass);

    // Create base menu
    var $select_menu = $('<select />',{
      'class' : settings.className + ' ' + el.get(0).className
    }).insertAfter( $el );

    // Create default option
    $('<option />', {
      "value"   : '#',
      "text"    : settings.defaultText
    }).appendTo( $select_menu );

    // Create select option from menu
    $el.find('a').each(function(){
      var $this   = $(this),
        optText = '&nbsp;' + $this.text(),
        optSub  = $this.parents( '.' + settings.subMenuClass ),
        len   = optSub.length,
        dash;
      
      // if menu has sub menu
      if( $this.parents('ul').hasClass( settings.subMenuClass ) ) {
        dash = Array( len+1 ).join( settings.subMenuDash );
        optText = dash + optText;
      }

      // Now build menu and append it
      $('<option />', {
        "value" : this.href,
        "html"  : optText,
        "selected" : (this.href == window.location.href)
      }).appendTo( $select_menu );

    }); // End el.find('a').each

    // Change event on select element
    $select_menu.change(function(){
      var locations = $(this).val();
      if( locations !== '#' ) {
        window.location.href = $(this).val();
      };
    });
    $('.select-menu').show();
  }); // End this.each

  return this;

};
})(jQuery);
$(document).ready(function(){
	$('.sf-menu').mobileMenu();
});
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.11
 *
 * Requires: jQuery 1.2.2+
 */


(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.11',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $parent = $(elem)['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10);
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));
/**
 * jquery.simplr.smoothscroll
 * version 1.0
 * copyright (c) 2012 https://github.com/simov/simplr-smoothscroll
 * licensed under MIT
 * requires jquery.mousewheel - https://github.com/brandonaaron/jquery-mousewheel/
 */

;(function($) {
    'use strict';
    
    $.srSmoothscroll = function(options) {
    
    var self = $.extend({
        step: 170,
        speed: 1000,
        ease: "easeOutQuad"
    }, options || {});
    
    // private fields & init
    var win = $(window),
        doc = $(document),
        top = 0,
        step = self.step,
        speed = self.speed,
        viewport = win.height(),
        body = (navigator.userAgent.indexOf('AppleWebKit') !== -1) ? $('body') : $('html'),
        wheel = false;

    // events
    $('body').mousewheel(function(event, delta) {

        wheel = true;

        if (delta < 0) // down
            top = (top+viewport) >= doc.height() ? top : top+=step;

        else // up
            top = top <= 0 ? 0 : top-=step;

        body.stop().animate({scrollTop: top}, speed, self.ease, function () {
            wheel = false;
        });

        return false;
    });

    win
    .on('resize', function (e) {
        viewport = win.height();
    })
    .on('scroll', function (e) {
        if (!wheel)
            top = win.scrollTop();
    });
    
    };
})(jQuery);
(function($){
	$.fn.UItoTop = function(options) {

 		var defaults = {
			text: '',
			min: 200,			
			scrollSpeed: 800,
  			containerID: 'toTop',
			containerHoverID: 'toTopHover',
			easingType: 'linear',
			min_width:parseInt($('body').css("min-width"),10),
			main_width:parseInt($('body').css("min-width"),10)/2
					
 		};

 		var settings = $.extend(defaults, options);
		var containerIDhash = '#' + settings.containerID;
		var containerHoverIDHash = '#'+settings.containerHoverID;
			
		$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');
		
		var button_width = parseInt($(containerIDhash).css("width"))+90
		var button_width_1 = parseInt($(containerIDhash).css("width"))+20
		var max_width = defaults.min_width+button_width;
		var margin_right_1 = -(defaults.main_width+button_width_1)
		var margin_right_2 = -(defaults.main_width-20)
		
		function top(){
			if(($(window).width()<=max_width)&&($(window).width()>=defaults.min_width))$(containerIDhash).stop().animate({marginRight:margin_right_2,right:'50%'})
			else if($(window).width()<=defaults.min_width)$(containerIDhash).stop().css({marginRight:0,right:10})
			else $(containerIDhash).stop().animate({marginRight:margin_right_1,right:'50%'})
		}
		top()
		$(containerIDhash).hide().click(function(){			
			$('html, body').stop().animate({scrollTop:0}, settings.scrollSpeed, settings.easingType);
			$('#'+settings.containerHoverID, this).stop().animate({'opacity': 0 }, settings.inDelay, settings.easingType);
			return false;
		})
		
		.prepend('<span id="'+settings.containerHoverID+'"></span>')
		.hover(function() {
				$(containerHoverIDHash, this).stop().animate({
					'opacity': 1
				}, 600, 'linear');
			}, function() { 
				$(containerHoverIDHash, this).stop().animate({
					'opacity': 0
				}, 700, 'linear');
			});
								
		$(window).scroll(function() {
			var sd = $(window).scrollTop();
			if(typeof document.body.style.maxHeight === "undefined") {
				$(containerIDhash).css({
					'position': 'absolute',
					'top': $(window).scrollTop() + $(window).height() - 50
				});
			}
			if ( sd > settings.min ) 
				$(containerIDhash).css({display: 'block'});
			else 
				$(containerIDhash).css({display: 'none'});
		});
		$(window).resize(function(){top()})
};
})(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.1.1
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options        = options
    this.$body          = $(document.body)
    this.$element       = $(element)
    this.$backdrop      =
    this.isShown        = null
    this.scrollbarWidth = 0

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.$body.addClass('modal-open')

    this.setScrollbar()
    this.escape()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one($.support.transition.end, function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.$body.removeClass('modal-open')

    this.resetScrollbar()
    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one($.support.transition.end, $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.removeBackdrop()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (callback) {
      callback()
    }
  }

  Modal.prototype.checkScrollbar = function () {
    if (document.body.clientWidth >= window.innerWidth) return
    this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar()
  }

  Modal.prototype.setScrollbar =  function () {
    var bodyPad = parseInt(this.$body.css('padding-right') || 0)
    if (this.scrollbarWidth) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', '')
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  var old = $.fn.modal

  $.fn.modal = function (option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target
      .modal(option, this)
      .one('hide', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
  })

}(jQuery);
$(function(){
// IPad/IPhone
  var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
  ua = navigator.userAgent,

  gestureStart = function () {viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";},

  scaleFix = function () {
    if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
      viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
      document.addEventListener("gesturestart", gestureStart, false);
    }
  };
  
  scaleFix();
  // Menu Android
  if(window.orientation!=undefined){
  var regM = /ipod|ipad|iphone/gi,
   result = ua.match(regM)
  if(!result) {
   $('.sf-menu li').each(function(){
    if($(">ul", this)[0]){
     $(">a", this).toggle(
      function(){
       return false;
      },
      function(){
       window.location.href = $(this).attr("href");
      }
     );
    } 
   })
  }
 }
});
var ua=navigator.userAgent.toLocaleLowerCase(),
 regV = /ipod|ipad|iphone/gi,
 result = ua.match(regV),
 userScale="";
if(!result){
 userScale=",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">')

var currentYear = (new Date).getFullYear();
  $(document).ready(function() {
  $("#copyright-year").text( (new Date).getFullYear() );
  });

  $(function(){
  $('.sf-menu').superfish({autoArrows: true})
})



// DEVICE.JS AND SMOOTH SCROLLIG

function include(url){document.write('<script type="text/javascript" src="'+url+'"></script>')}
include('js/device.js');
include('js/jquery.mousewheel.js');
include('js/jquery.simplr.smoothscroll.js');

  $(function () { 
    if ($('html').hasClass('desktop')) {
        $.srSmoothscroll();
    }
  });
/*
 * jQuery Superfish Menu Plugin
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */


(function ($) {
	"use strict";

	var methods = (function () {
		// private properties and methods go here
		var c = {
				bcClass: 'sf-breadcrumb',
				menuClass: 'sf-js-enabled',
				anchorClass: 'sf-with-ul',
				menuArrowClass: 'sf-arrows'
			},
			ios = (function () {
				var ios = /iPhone|iPad|iPod/i.test(navigator.userAgent);
				if (ios) {
					// iOS clicks only bubble as far as body children
					$(window).load(function () {
						$('body').children().on('click', $.noop);
					});
				}
				return ios;
			})(),
			wp7 = (function () {
				var style = document.documentElement.style;
				return ('behavior' in style && 'fill' in style && /iemobile/i.test(navigator.userAgent));
			})(),
			toggleMenuClasses = function ($menu, o) {
				var classes = c.menuClass;
				if (o.cssArrows) {
					classes += ' ' + c.menuArrowClass;
				}
				$menu.toggleClass(classes);
			},
			setPathToCurrent = function ($menu, o) {
				return $menu.find('li.' + o.pathClass).slice(0, o.pathLevels)
					.addClass(o.hoverClass + ' ' + c.bcClass)
						.filter(function () {
							return ($(this).children(o.popUpSelector).hide().show().length);
						}).removeClass(o.pathClass);
			},
			toggleAnchorClass = function ($li) {
				$li.children('a').toggleClass(c.anchorClass);
			},
			toggleTouchAction = function ($menu) {
				var touchAction = $menu.css('ms-touch-action');
				touchAction = (touchAction === 'pan-y') ? 'auto' : 'pan-y';
				$menu.css('ms-touch-action', touchAction);
			},
			applyHandlers = function ($menu, o) {
				var targets = 'li:has(' + o.popUpSelector + ')';
				if ($.fn.hoverIntent && !o.disableHI) {
					$menu.hoverIntent(over, out, targets);
				}
				else {
					$menu
						.on('mouseenter.superfish', targets, over)
						.on('mouseleave.superfish', targets, out);
				}
				var touchevent = 'MSPointerDown.superfish';
				if (!ios) {
					touchevent += ' touchend.superfish';
				}
				if (wp7) {
					touchevent += ' mousedown.superfish';
				}
				$menu
					.on('focusin.superfish', 'li', over)
					.on('focusout.superfish', 'li', out)
					.on(touchevent, 'a', o, touchHandler);
			},
			touchHandler = function (e) {
				var $this = $(this),
					$ul = $this.siblings(e.data.popUpSelector);

				if ($ul.length > 0 && $ul.is(':hidden')) {
					$this.one('click.superfish', false);
					if (e.type === 'MSPointerDown') {
						$this.trigger('focus');
					} else {
						$.proxy(over, $this.parent('li'))();
					}
				}
			},
			over = function () {
				var $this = $(this),
					o = getOptions($this);
				clearTimeout(o.sfTimer);
				$this.siblings().superfish('hide').end().superfish('show');
			},
			out = function () {
				var $this = $(this),
					o = getOptions($this);
				if (ios) {
					$.proxy(close, $this, o)();
				}
				else {
					clearTimeout(o.sfTimer);
					o.sfTimer = setTimeout($.proxy(close, $this, o), o.delay);
				}
			},
			close = function (o) {
				o.retainPath = ($.inArray(this[0], o.$path) > -1);
				this.superfish('hide');

				if (!this.parents('.' + o.hoverClass).length) {
					o.onIdle.call(getMenu(this));
					if (o.$path.length) {
						$.proxy(over, o.$path)();
					}
				}
			},
			getMenu = function ($el) {
				return $el.closest('.' + c.menuClass);
			},
			getOptions = function ($el) {
				return getMenu($el).data('sf-options');
			};

		return {
			// public methods
			hide: function (instant) {
				if (this.length) {
					var $this = this,
						o = getOptions($this);
					if (!o) {
						return this;
					}
					var not = (o.retainPath === true) ? o.$path : '',
						$ul = $this.find('li.' + o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector),
						speed = o.speedOut;

					if (instant) {
						$ul.show();
						speed = 0;
					}
					o.retainPath = false;
					o.onBeforeHide.call($ul);
					$ul.stop(true, true).animate(o.animationOut, speed, function () {
						var $this = $(this);
						o.onHide.call($this);
					});
				}
				return this;
			},
			show: function () {
				var o = getOptions(this);
				if (!o) {
					return this;
				}
				var $this = this.addClass(o.hoverClass),
					$ul = $this.children(o.popUpSelector);

				o.onBeforeShow.call($ul);
				$ul.stop(true, true).animate(o.animation, o.speed, function () {
					o.onShow.call($ul);
				});
				return this;
			},
			destroy: function () {
				return this.each(function () {
					var $this = $(this),
						o = $this.data('sf-options'),
						$hasPopUp;
					if (!o) {
						return false;
					}
					$hasPopUp = $this.find(o.popUpSelector).parent('li');
					clearTimeout(o.sfTimer);
					toggleMenuClasses($this, o);
					toggleAnchorClass($hasPopUp);
					toggleTouchAction($this);
					// remove event handlers
					$this.off('.superfish').off('.hoverIntent');
					// clear animation's inline display style
					$hasPopUp.children(o.popUpSelector).attr('style', function (i, style) {
						return style.replace(/display[^;]+;?/g, '');
					});
					// reset 'current' path classes
					o.$path.removeClass(o.hoverClass + ' ' + c.bcClass).addClass(o.pathClass);
					$this.find('.' + o.hoverClass).removeClass(o.hoverClass);
					o.onDestroy.call($this);
					$this.removeData('sf-options');
				});
			},
			init: function (op) {
				return this.each(function () {
					var $this = $(this);
					if ($this.data('sf-options')) {
						return false;
					}
					var o = $.extend({}, $.fn.superfish.defaults, op),
						$hasPopUp = $this.find(o.popUpSelector).parent('li');
					o.$path = setPathToCurrent($this, o);

					$this.data('sf-options', o);

					toggleMenuClasses($this, o);
					toggleAnchorClass($hasPopUp);
					toggleTouchAction($this);
					applyHandlers($this, o);

					$hasPopUp.not('.' + c.bcClass).superfish('hide', true);

					o.onInit.call(this);
				});
			}
		};
	})();

	$.fn.superfish = function (method, args) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		else if (typeof method === 'object' || ! method) {
			return methods.init.apply(this, arguments);
		}
		else {
			return $.error('Method ' +  method + ' does not exist on jQuery.fn.superfish');
		}
	};

	$.fn.superfish.defaults = {
		popUpSelector: 'ul,.sf-mega', // within menu context
		hoverClass: 'sfHover',
		pathClass: 'overrideThisToUse',
		pathLevels: 1,
		delay: 800,
		animation: {opacity: 'show'},
		animationOut: {opacity: 'hide'},
		speed: 'normal',
		speedOut: 'fast',
		cssArrows: true,
		disableHI: false,
		onInit: $.noop,
		onBeforeShow: $.noop,
		onShow: $.noop,
		onBeforeHide: $.noop,
		onHide: $.noop,
		onIdle: $.noop,
		onDestroy: $.noop
	};

	// soon to be deprecated
	$.fn.extend({
		hideSuperfishUl: methods.hide,
		showSuperfishUl: methods.show
	});

})(jQuery);
(function($){
	$.fn.tmStickUp=function(options){ 
		
		var getOptions = {
			corectionValue: 0
		}
		$.extend(getOptions, options); 

		var
			_this = $(this)
		,	_window = $(window)
		,	_document = $(document)
		,	thisOffsetTop = 0
		,	thisOuterHeight = 0
		,	thisMarginTop = 0
		,	documentScroll = 0
		,	pseudoBlock
		,	lastScrollValue = 0
		,	scrollDir = ''
		,	tmpScrolled
		,	gridWidth = 0
		,	tmpTop = 0
		;

		init();
		function init(){
			parentContainer = _this.parent();
			thisOffsetTop = parseInt(_this.offset().top);
			thisMarginTop = parseInt(_this.css("margin-top"));
			thisOuterHeight = parseInt(_this.outerHeight(true));
			gridWidth = parseInt($('.container').width());

			$('<div class="pseudoStickyBlock"></div>').insertAfter(_this);
			pseudoBlock = $('.pseudoStickyBlock');
			pseudoBlock.css({"position":"relative", "display":"block"});

			_this.on("rePosition",
				function(e,d){
					tmpTop = d;
					_document.trigger('scroll');
				}
			)

			addEventsFunction();
		}//end init

		function addEventsFunction(){
			_document.on('scroll', function() {

				tmpScrolled = $(this).scrollTop();
					if (tmpScrolled > lastScrollValue){
						scrollDir = 'down';
					} else {
						scrollDir = 'up';
					}
				lastScrollValue = tmpScrolled;

				documentScroll = parseInt(_document.scrollTop());
				if(thisOffsetTop-thisMarginTop < documentScroll){
					_this.addClass('isStuck');
					_this.css({position:"fixed",top:tmpTop, zIndex:999, left:0, right:0, margin:"0 auto"})
					pseudoBlock.css({"height":thisOuterHeight});
				}else{
					_this.removeClass('isStuck');
					_this.css({position:"relative", top: 0});
					pseudoBlock.css({"height":0});
				}
				
			}).trigger('scroll');
		}
	}//end tmStickUp function
})(jQuery)
;
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//




;
