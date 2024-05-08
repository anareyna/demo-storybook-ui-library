import{r as ae}from"./index-BBkUAzwr.js";var ee={exports:{}},T={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ce=ae,de=Symbol.for("react.element"),ue=Symbol.for("react.fragment"),pe=Object.prototype.hasOwnProperty,fe=ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,be={key:!0,ref:!0,__self:!0,__source:!0};function re(e,r,o){var t,i={},n=null,s=null;o!==void 0&&(n=""+o),r.key!==void 0&&(n=""+r.key),r.ref!==void 0&&(s=r.ref);for(t in r)pe.call(r,t)&&!be.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)i[t]===void 0&&(i[t]=r[t]);return{$$typeof:de,type:e,key:n,ref:s,props:i,_owner:fe.current}}T.Fragment=ue;T.jsx=re;T.jsxs=re;ee.exports=T;var Ze=ee.exports;function te(e){var r,o,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(r=0;r<i;r++)e[r]&&(o=te(e[r]))&&(t&&(t+=" "),t+=o)}else for(o in e)e[o]&&(t&&(t+=" "),t+=o);return t}function ge(){for(var e,r,o=0,t="",i=arguments.length;o<i;o++)(e=arguments[o])&&(r=te(e))&&(t&&(t+=" "),t+=r);return t}const U="-";function me(e){const r=ye(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:t}=e;function i(s){const a=s.split(U);return a[0]===""&&a.length!==1&&a.shift(),oe(a,r)||he(s)}function n(s,a){const u=o[s]||[];return a&&t[s]?[...u,...t[s]]:u}return{getClassGroupId:i,getConflictingClassGroupIds:n}}function oe(e,r){var s;if(e.length===0)return r.classGroupId;const o=e[0],t=r.nextPart.get(o),i=t?oe(e.slice(1),t):void 0;if(i)return i;if(r.validators.length===0)return;const n=e.join(U);return(s=r.validators.find(({validator:a})=>a(n)))==null?void 0:s.classGroupId}const Q=/^\[(.+)\]$/;function he(e){if(Q.test(e)){const r=Q.exec(e)[1],o=r==null?void 0:r.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}}function ye(e){const{theme:r,prefix:o}=e,t={nextPart:new Map,validators:[]};return we(Object.entries(e.classGroups),o).forEach(([n,s])=>{V(s,t,n,r)}),t}function V(e,r,o,t){e.forEach(i=>{if(typeof i=="string"){const n=i===""?r:D(r,i);n.classGroupId=o;return}if(typeof i=="function"){if(xe(i)){V(i(t),r,o,t);return}r.validators.push({validator:i,classGroupId:o});return}Object.entries(i).forEach(([n,s])=>{V(s,D(r,n),o,t)})})}function D(e,r){let o=e;return r.split(U).forEach(t=>{o.nextPart.has(t)||o.nextPart.set(t,{nextPart:new Map,validators:[]}),o=o.nextPart.get(t)}),o}function xe(e){return e.isThemeGetter}function we(e,r){return r?e.map(([o,t])=>{const i=t.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,a])=>[r+s,a])):n);return[o,i]}):e}function ve(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,o=new Map,t=new Map;function i(n,s){o.set(n,s),r++,r>e&&(r=0,t=o,o=new Map)}return{get(n){let s=o.get(n);if(s!==void 0)return s;if((s=t.get(n))!==void 0)return i(n,s),s},set(n,s){o.has(n)?o.set(n,s):i(n,s)}}}const ne="!";function ke(e){const r=e.separator,o=r.length===1,t=r[0],i=r.length;return function(s){const a=[];let u=0,f=0,p;for(let b=0;b<s.length;b++){let m=s[b];if(u===0){if(m===t&&(o||s.slice(b,b+i)===r)){a.push(s.slice(f,b)),f=b+i;continue}if(m==="/"){p=b;continue}}m==="["?u++:m==="]"&&u--}const g=a.length===0?s:s.substring(f),h=g.startsWith(ne),w=h?g.substring(1):g,S=p&&p>f?p-f:void 0;return{modifiers:a,hasImportantModifier:h,baseClassName:w,maybePostfixModifierPosition:S}}}function Ce(e){if(e.length<=1)return e;const r=[];let o=[];return e.forEach(t=>{t[0]==="["?(r.push(...o.sort(),t),o=[]):o.push(t)}),r.push(...o.sort()),r}function ze(e){return{cache:ve(e.cacheSize),splitModifiers:ke(e),...me(e)}}const Se=/\s+/;function Ae(e,r){const{splitModifiers:o,getClassGroupId:t,getConflictingClassGroupIds:i}=r,n=new Set;return e.trim().split(Se).map(s=>{const{modifiers:a,hasImportantModifier:u,baseClassName:f,maybePostfixModifierPosition:p}=o(s);let g=t(p?f.substring(0,p):f),h=!!p;if(!g){if(!p)return{isTailwindClass:!1,originalClassName:s};if(g=t(f),!g)return{isTailwindClass:!1,originalClassName:s};h=!1}const w=Ce(a).join(":");return{isTailwindClass:!0,modifierId:u?w+ne:w,classGroupId:g,originalClassName:s,hasPostfixModifier:h}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:a,classGroupId:u,hasPostfixModifier:f}=s,p=a+u;return n.has(p)?!1:(n.add(p),i(u,f).forEach(g=>n.add(a+g)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function Me(){let e=0,r,o,t="";for(;e<arguments.length;)(r=arguments[e++])&&(o=se(r))&&(t&&(t+=" "),t+=o);return t}function se(e){if(typeof e=="string")return e;let r,o="";for(let t=0;t<e.length;t++)e[t]&&(r=se(e[t]))&&(o&&(o+=" "),o+=r);return o}function Re(e,...r){let o,t,i,n=s;function s(u){const f=r.reduce((p,g)=>g(p),e());return o=ze(f),t=o.cache.get,i=o.cache.set,n=a,a(u)}function a(u){const f=t(u);if(f)return f;const p=Ae(u,o);return i(u,p),p}return function(){return n(Me.apply(null,arguments))}}function c(e){const r=o=>o[e]||[];return r.isThemeGetter=!0,r}const ie=/^\[(?:([a-z-]+):)?(.+)\]$/i,Ee=/^\d+\/\d+$/,Ie=new Set(["px","full","screen"]),_e=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,je=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Pe=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Ge=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Te=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function x(e){return z(e)||Ie.has(e)||Ee.test(e)}function k(e){return A(e,"length",Be)}function z(e){return!!e&&!Number.isNaN(Number(e))}function G(e){return A(e,"number",z)}function E(e){return!!e&&Number.isInteger(Number(e))}function Le(e){return e.endsWith("%")&&z(e.slice(0,-1))}function l(e){return ie.test(e)}function C(e){return _e.test(e)}const Oe=new Set(["length","size","percentage"]);function We(e){return A(e,Oe,le)}function Ne(e){return A(e,"position",le)}const $e=new Set(["image","url"]);function Ve(e){return A(e,$e,qe)}function Ue(e){return A(e,"",Fe)}function I(){return!0}function A(e,r,o){const t=ie.exec(e);return t?t[1]?typeof r=="string"?t[1]===r:r.has(t[1]):o(t[2]):!1}function Be(e){return je.test(e)&&!Pe.test(e)}function le(){return!1}function Fe(e){return Ge.test(e)}function qe(e){return Te.test(e)}function Je(){const e=c("colors"),r=c("spacing"),o=c("blur"),t=c("brightness"),i=c("borderColor"),n=c("borderRadius"),s=c("borderSpacing"),a=c("borderWidth"),u=c("contrast"),f=c("grayscale"),p=c("hueRotate"),g=c("invert"),h=c("gap"),w=c("gradientColorStops"),S=c("gradientColorStopPositions"),b=c("inset"),m=c("margin"),v=c("opacity"),y=c("padding"),B=c("saturate"),L=c("scale"),F=c("sepia"),q=c("skew"),J=c("space"),X=c("translate"),O=()=>["auto","contain","none"],W=()=>["auto","hidden","clip","visible","scroll"],N=()=>["auto",l,r],d=()=>[l,r],Y=()=>["",x,k],_=()=>["auto",z,l],Z=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],j=()=>["solid","dashed","dotted","double","none"],H=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],$=()=>["start","end","center","between","around","evenly","stretch"],M=()=>["","0",l],K=()=>["auto","avoid","all","avoid-page","page","left","right","column"],R=()=>[z,G],P=()=>[z,l];return{cacheSize:500,separator:":",theme:{colors:[I],spacing:[x,k],blur:["none","",C,l],brightness:R(),borderColor:[e],borderRadius:["none","","full",C,l],borderSpacing:d(),borderWidth:Y(),contrast:R(),grayscale:M(),hueRotate:P(),invert:M(),gap:d(),gradientColorStops:[e],gradientColorStopPositions:[Le,k],inset:N(),margin:N(),opacity:R(),padding:d(),saturate:R(),scale:R(),sepia:M(),skew:P(),space:d(),translate:d()},classGroups:{aspect:[{aspect:["auto","square","video",l]}],container:["container"],columns:[{columns:[C]}],"break-after":[{"break-after":K()}],"break-before":[{"break-before":K()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Z(),l]}],overflow:[{overflow:W()}],"overflow-x":[{"overflow-x":W()}],"overflow-y":[{"overflow-y":W()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[b]}],"inset-x":[{"inset-x":[b]}],"inset-y":[{"inset-y":[b]}],start:[{start:[b]}],end:[{end:[b]}],top:[{top:[b]}],right:[{right:[b]}],bottom:[{bottom:[b]}],left:[{left:[b]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",E,l]}],basis:[{basis:N()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",l]}],grow:[{grow:M()}],shrink:[{shrink:M()}],order:[{order:["first","last","none",E,l]}],"grid-cols":[{"grid-cols":[I]}],"col-start-end":[{col:["auto",{span:["full",E,l]},l]}],"col-start":[{"col-start":_()}],"col-end":[{"col-end":_()}],"grid-rows":[{"grid-rows":[I]}],"row-start-end":[{row:["auto",{span:[E,l]},l]}],"row-start":[{"row-start":_()}],"row-end":[{"row-end":_()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",l]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",l]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...$()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...$(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...$(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[J]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[J]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",l,r]}],"min-w":[{"min-w":[l,r,"min","max","fit"]}],"max-w":[{"max-w":[l,r,"none","full","min","max","fit","prose",{screen:[C]},C]}],h:[{h:[l,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[l,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[l,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[l,r,"auto","min","max","fit"]}],"font-size":[{text:["base",C,k]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",G]}],"font-family":[{font:[I]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",l]}],"line-clamp":[{"line-clamp":["none",z,G]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",x,l]}],"list-image":[{"list-image":["none",l]}],"list-style-type":[{list:["none","disc","decimal",l]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[v]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[v]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...j(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",x,k]}],"underline-offset":[{"underline-offset":["auto",x,l]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:d()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",l]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",l]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[v]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Z(),Ne]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",We]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Ve]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[S]}],"gradient-via-pos":[{via:[S]}],"gradient-to-pos":[{to:[S]}],"gradient-from":[{from:[w]}],"gradient-via":[{via:[w]}],"gradient-to":[{to:[w]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[v]}],"border-style":[{border:[...j(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[v]}],"divide-style":[{divide:j()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...j()]}],"outline-offset":[{"outline-offset":[x,l]}],"outline-w":[{outline:[x,k]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:Y()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[v]}],"ring-offset-w":[{"ring-offset":[x,k]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",C,Ue]}],"shadow-color":[{shadow:[I]}],opacity:[{opacity:[v]}],"mix-blend":[{"mix-blend":H()}],"bg-blend":[{"bg-blend":H()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",C,l]}],grayscale:[{grayscale:[f]}],"hue-rotate":[{"hue-rotate":[p]}],invert:[{invert:[g]}],saturate:[{saturate:[B]}],sepia:[{sepia:[F]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[f]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[v]}],"backdrop-saturate":[{"backdrop-saturate":[B]}],"backdrop-sepia":[{"backdrop-sepia":[F]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",l]}],duration:[{duration:P()}],ease:[{ease:["linear","in","out","in-out",l]}],delay:[{delay:P()}],animate:[{animate:["none","spin","ping","pulse","bounce",l]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[L]}],"scale-x":[{"scale-x":[L]}],"scale-y":[{"scale-y":[L]}],rotate:[{rotate:[E,l]}],"translate-x":[{"translate-x":[X]}],"translate-y":[{"translate-y":[X]}],"skew-x":[{"skew-x":[q]}],"skew-y":[{"skew-y":[q]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",l]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",l]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":d()}],"scroll-mx":[{"scroll-mx":d()}],"scroll-my":[{"scroll-my":d()}],"scroll-ms":[{"scroll-ms":d()}],"scroll-me":[{"scroll-me":d()}],"scroll-mt":[{"scroll-mt":d()}],"scroll-mr":[{"scroll-mr":d()}],"scroll-mb":[{"scroll-mb":d()}],"scroll-ml":[{"scroll-ml":d()}],"scroll-p":[{"scroll-p":d()}],"scroll-px":[{"scroll-px":d()}],"scroll-py":[{"scroll-py":d()}],"scroll-ps":[{"scroll-ps":d()}],"scroll-pe":[{"scroll-pe":d()}],"scroll-pt":[{"scroll-pt":d()}],"scroll-pr":[{"scroll-pr":d()}],"scroll-pb":[{"scroll-pb":d()}],"scroll-pl":[{"scroll-pl":d()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",l]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[x,k,G]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const Xe=Re(Je),He=(...e)=>Xe(ge(e));export{He as c,Ze as j};
