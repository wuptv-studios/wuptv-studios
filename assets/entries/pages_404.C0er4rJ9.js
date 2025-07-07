import{j as e,P as c,R as p,a as i,i as l,b as f}from"../chunks/chunk-Dw8SyKya.js";/* empty css                      */const n=void 0,g=[{id:"hIKv5vfNRbwa6HKRGQmLL"},{id:"LYutaI0620Gt0qmrvfFjU",maxWidth:991},{id:"EudZxrePT5YInbI42VSwQ",maxWidth:767},{id:"kd1n8tg93wB_eQPsymZbR",maxWidth:479}],u=void 0,h=[],x=[],y=a=>e.jsx("body",{className:"w-element",children:e.jsx(c,{code:`


  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>404 — Page Not Found | WUPTV</title>
  <meta name="description" content="Oops! The page you’re looking for doesn’t exist on WUPTV. Return home and keep the vibe alive.">
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&amp;display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      background-color: #0a0a0a;
      color: #d94cff;
      font-family: 'Orbitron', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      text-align: center;
      padding: 2rem;
      flex-direction: column;
    }
    h1 {
      font-size: 8rem;
      margin: 0;
      text-shadow: 0 0 5px #d94cff;
    }
    p {
      font-size: 1.5rem;
      margin: 1rem 0 2rem;
      color: #fff;
    }
    a {
      color: #fff;
      background: #d94cff;
      padding: 1rem 2rem;
      border-radius: 30px;
      text-decoration: none;
      font-weight: bold;
      font-size: 1rem;
      transition: background 0.3s ease;
    }
    a:hover {
      background: #ff70ff;
    }
    .silhouette {
      width: 150px;
      height: 300px;
      margin-bottom: 2rem;
      fill: #d94cff;
      filter: drop-shadow(0 0 5px #ff70ff);
      transform: translateY(10px);
    }
  </style>


  <svg class="silhouette" viewBox="0 0 64 128" xmlns="http://www.w3.org/2000/svg" aria-label="Sad girl silhouette" role="img">
    <path d="M32 0c-4 6-7 14-7 22 0 6 2 14 4 20 1 3 3 7 3 10 0 4-1 10-2 14-2 6-5 10-5 10h18s-3-5-5-10c-1-4-2-10-2-14 0-3 2-7 3-10 2-6 4-14 4-20 0-8-3-16-7-22z"></path>
  </svg>
  <h1>404</h1>
  <p>Page Not Found</p>
  <a href="/">Return Home</a>

`,className:"w-html-embed"})}),v=({data:a})=>{const{system:t,resources:s,url:r}=a;return e.jsx(p.Provider,{value:{imageLoader:l,assetBaseUrl:i,resources:s,breakpoints:g,onError:console.error},children:e.jsx(y,{system:t},r)})},w=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"})),j=({data:a})=>{const{pageMeta:t}=a,{origin:s}=new URL(a.url);let r=t.socialImageUrl;t.socialImageAssetName&&(r=`${s}${l({src:`${i}/${t.socialImageAssetName}`})}`);const d=t.custom.some(o=>o.property==="twitter:card");return e.jsxs(e.Fragment,{children:[a.url&&e.jsx("meta",{property:"og:url",content:a.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),n,r&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),n,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:o,content:m})=>e.jsx("meta",{property:o,content:m},o)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&d===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),u,h.map(o=>e.jsx("link",{rel:"preload",href:`${i}${o}`,as:"font",crossOrigin:"anonymous"},o)),x.map(o=>e.jsx("link",{rel:"preload",href:`${i}${o}`,as:"image"},o))]})},b=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),T={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/404/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:w}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/404/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}}};export{T as configValuesSerialized};
