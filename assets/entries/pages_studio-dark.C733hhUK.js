import{j as e,P as p,R as m,a as i,i as l,b as u}from"../chunks/chunk-Dw8SyKya.js";/* empty css                      */const n=void 0,g=[{id:"hIKv5vfNRbwa6HKRGQmLL"},{id:"LYutaI0620Gt0qmrvfFjU",maxWidth:991},{id:"EudZxrePT5YInbI42VSwQ",maxWidth:767},{id:"kd1n8tg93wB_eQPsymZbR",maxWidth:479}],f=void 0,h=[],x=[],y=r=>e.jsx("body",{className:"w-element",children:e.jsx(p,{code:`

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WUPTV Studio Access</title>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&amp;display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      padding: 0;
      background: #0a0a0a;
      color: #f2f2f2;
      font-family: 'Orbitron', sans-serif;
    }
    header {
      padding: 2rem;
      text-align: center;
      border-bottom: 1px solid #222;
      background: linear-gradient(to right, #111, #0a0a0a);
    }
    header h1 {
      font-size: 2.2rem;
      letter-spacing: 2px;
      color: #d94cff;
    }
    .container {
      padding: 2rem;
      max-width: 1200px;
      margin: auto;
    }
    .intro {
      background: #111;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 0 12px rgba(217, 76, 255, 0.15);
      margin-bottom: 2rem;
    }
    .intro h2 {
      font-size: 1.5rem;
      color: #00ffe0;
      margin-bottom: 0.5rem;
    }
    .intro p {
      line-height: 1.6;
      font-size: 0.95rem;
      color: #ccc;
    }
    .apply-button {
      margin-top: 1rem;
      background: #d94cff;
      color: #0a0a0a;
      border: none;
      padding: 0.8rem 2rem;
      border-radius: 30px;
      cursor: pointer;
      font-size: 1rem;
      transition: 0.3s ease;
    }
    .apply-button:hover {
      background: #ff70ff;
    }
    footer {
      text-align: center;
      font-size: 0.75rem;
      padding: 2rem;
      color: #555;
    }
  </style>


  <header>
    <h1>WUPTV STUDIO</h1>
    <p>Deploy. Stream. Create. All Systems Live.</p>
  </header>  <div class="container">
    <div class="intro">
      <h2>Creator-Ready Space</h2>
      <p>
        The WUPTV Studio is your launchpad. Designed for streamers, editors, and creators who want to deploy elite content with zero setup friction. All lighting, audio, and connection protocols are pre-installed — just step in and create.
      </p>
      <p>
        Every studio booking includes access to premium backdrops, WUPTV deploy visuals, and a control console linked to your vault access.
      </p>
      <button class="apply-button">Apply for Access</button>
    </div>
  </div>  <footer>
    © 2025 WUPTV. All rights reserved.
  </footer>

`,className:"w-html-embed"})}),b=({data:r})=>{const{system:t,resources:s,url:a}=r;return e.jsx(m.Provider,{value:{imageLoader:l,assetBaseUrl:i,resources:s,breakpoints:g,onError:console.error},children:e.jsx(y,{system:t},a)})},v=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"})),j=({data:r})=>{const{pageMeta:t}=r,{origin:s}=new URL(r.url);let a=t.socialImageUrl;t.socialImageAssetName&&(a=`${s}${l({src:`${i}/${t.socialImageAssetName}`})}`);const d=t.custom.some(o=>o.property==="twitter:card");return e.jsxs(e.Fragment,{children:[r.url&&e.jsx("meta",{property:"og:url",content:r.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),n,a&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),n,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:o,content:c})=>e.jsx("meta",{property:o,content:c},o)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&d===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),f,h.map(o=>e.jsx("link",{rel:"preload",href:`${i}${o}`,as:"font",crossOrigin:"anonymous"},o)),x.map(o=>e.jsx("link",{rel:"preload",href:`${i}${o}`,as:"image"},o))]})},w=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),P={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/studio-dark/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:v}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/studio-dark/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:w}}};export{P as configValuesSerialized};
