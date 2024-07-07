(()=>{"use strict";var e,t={835:(e,t,r)=>{const a=window.wp.blocks,o=window.wp.primitives;var l=r(848);const n=(0,l.jsx)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(o.Path,{d:"M9.518 8.783a.25.25 0 00.188-.137l2.069-4.192a.25.25 0 01.448 0l2.07 4.192a.25.25 0 00.187.137l4.626.672a.25.25 0 01.139.427l-3.347 3.262a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.363.264l-4.137-2.176a.25.25 0 00-.233 0l-4.138 2.175a.25.25 0 01-.362-.263l.79-4.607a.25.25 0 00-.072-.222L4.753 9.882a.25.25 0 01.14-.427l4.625-.672zM12 14.533c.28 0 .559.067.814.2l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39v7.143z"})});var s=r(609);const i=window.wp.i18n,c=window.wp.blockEditor,p=window.wp.components,u=window.wp.element,m=window.wp.apiFetch;var d=r.n(m);const b=JSON.parse('{"UU":"create-block/simple-star-rating-block"}');(0,a.registerBlockType)(b.UU,{icon:n,edit:function({attributes:e,setAttributes:t}){const{rating:r,customField:a,useCustomField:o,starColor:l,starSize:n}=e,[m,b]=(0,u.useState)([]),[f,g]=(0,u.useState)({});(0,u.useEffect)((()=>{if(o){const e=wp.data.select("core/editor").getCurrentPostId(),t=wp.data.select("core/editor").getCurrentPostType();d()({path:`/wp/v2/${t}s/${e}`}).then((e=>{const t={...e.meta,...e.acf},o=[...Object.keys(e.meta),...Object.keys(e.acf)];b(o),g(t),v(t[a]||r)}))}}),[o]);const v=e=>{const r=parseFloat(e);!isNaN(r)&&r>=0&&r<=5&&t({rating:r})},w=Math.floor(r),_=r-w;return(0,s.createElement)("div",{...(0,c.useBlockProps)()},(0,s.createElement)(c.InspectorControls,null,(0,s.createElement)(p.PanelBody,{title:(0,i.__)("Rating Settings","simple-star-rating-block")},(0,s.createElement)(p.ToggleControl,{label:(0,i.__)("Show From Custom Field","simple-star-rating-block"),checked:o,onChange:e=>t({useCustomField:e})}),o&&(0,s.createElement)(p.ComboboxControl,{label:(0,i.__)("Custom Field Key","simple-star-rating-block"),value:a,options:m.map((e=>({label:e,value:e}))),onChange:e=>{t({customField:e});const r=f[e];void 0===r||isNaN(parseFloat(r))?console.warn(`Invalid custom field value for ${e}: ${r}`):v(r)}}),!o&&(0,s.createElement)(p.TextControl,{label:(0,i.__)("Rating","simple-star-rating-block"),type:"number",min:"0",max:"5",step:"0.01",readOnly:o,value:r,onChange:v})),(0,s.createElement)(p.PanelBody,{title:(0,i.__)("Style","simple-star-rating-block"),initialOpen:!1},(0,s.createElement)(c.ColorPalette,{label:(0,i.__)("Star Color","simple-star-rating-block"),value:l,onChange:e=>t({starColor:e})}),(0,s.createElement)(p.RangeControl,{label:(0,i.__)("Star Size","simple-star-rating-block"),value:n,onChange:e=>t({starSize:e}),min:10,max:50}))),(0,s.createElement)("div",{style:{fontSize:`${n}px`}},Array.from({length:5},((e,t)=>{if(t<w)return(0,s.createElement)("span",{key:t,className:"ssrb-star ssrb-full",style:{backgroundColor:l}});if(t===w&&_>0){const e=Math.round(100*_);return(0,s.createElement)("span",{key:t,className:`ssrb-star ssrb-perc-${e}`,style:{backgroundImage:`linear-gradient(90deg, ${l} ${e}%, transparent ${e}%)`}})}return(0,s.createElement)("span",{key:t,className:"ssrb-star"})}))))}})},20:(e,t,r)=>{var a=r(609),o=Symbol.for("react.element"),l=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),n=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};t.jsx=function(e,t,r){var a,i={},c=null,p=null;for(a in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(p=t.ref),t)l.call(t,a)&&!s.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:o,type:e,key:c,ref:p,props:i,_owner:n.current}}},848:(e,t,r)=>{e.exports=r(20)},609:e=>{e.exports=window.React}},r={};function a(e){var o=r[e];if(void 0!==o)return o.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,a),l.exports}a.m=t,e=[],a.O=(t,r,o,l)=>{if(!r){var n=1/0;for(p=0;p<e.length;p++){for(var[r,o,l]=e[p],s=!0,i=0;i<r.length;i++)(!1&l||n>=l)&&Object.keys(a.O).every((e=>a.O[e](r[i])))?r.splice(i--,1):(s=!1,l<n&&(n=l));if(s){e.splice(p--,1);var c=o();void 0!==c&&(t=c)}}return t}l=l||0;for(var p=e.length;p>0&&e[p-1][2]>l;p--)e[p]=e[p-1];e[p]=[r,o,l]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var o,l,[n,s,i]=r,c=0;if(n.some((t=>0!==e[t]))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(i)var p=i(a)}for(t&&t(r);c<n.length;c++)l=n[c],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(p)},r=globalThis.webpackChunksimple_star_rating_block=globalThis.webpackChunksimple_star_rating_block||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=a.O(void 0,[350],(()=>a(835)));o=a.O(o)})();