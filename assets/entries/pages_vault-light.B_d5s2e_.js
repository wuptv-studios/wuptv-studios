import{j as e,P as m,R as c,a as o,i as d,b as u}from"../chunks/chunk-Dw8SyKya.js";/* empty css                      */const l=void 0,g=[{id:"hIKv5vfNRbwa6HKRGQmLL"},{id:"LYutaI0620Gt0qmrvfFjU",maxWidth:991},{id:"EudZxrePT5YInbI42VSwQ",maxWidth:767},{id:"kd1n8tg93wB_eQPsymZbR",maxWidth:479}],f=void 0,v=[],h=[],x=r=>e.jsx("body",{className:"w-element",children:e.jsx(m,{code:`

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WUPTV Vault | Private Deploy Library</title>
  <meta name="description" content="Browse the WUPTV Vault. Private previews of exclusive Femme Unit deploys available only to licensed buyers and verified creators.">
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&amp;display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      padding: 0;
      background: #ffffff;
      color: #111111;
      font-family: 'Orbitron', sans-serif;
    }
    header {
      padding: 2rem;
      text-align: center;
      background: #fdfdfd;
      border-bottom: 1px solid #ddd;
    }
    header h1 {
      font-size: 2rem;
      color: #d94cff;
    }
    .container {
      max-width: 1200px;
      margin: auto;
      padding: 2rem;
    }
    .vault-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem;
    }
    .vault-item {
      background: #f2f2f2;
      border-radius: 12px;
      padding: 1rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.04);
      text-align: center;
    }
    .vault-item .blurred {
      width: 100%;
      height: 160px;
      background: repeating-linear-gradient(45deg, #eee, #eee 10px, #ddd 10px, #ddd 20px);
      filter: blur(5px);
      border-radius: 8px;
      margin-bottom: 1rem;
    }
    .vault-item h3 {
      font-size: 1rem;
      color: #7a00cc;
      margin-bottom: 0.25rem;
    }
    .vault-item p {
      font-size: 0.85rem;
      color: #555;
    }
    footer {
      text-align: center;
      padding: 2rem;
      color: #aaa;
      font-size: 0.75rem;
    }
  </style>


  <header>
    <h1>WUPTV VAULT</h1>
    <p>Private Deploy Library (Blurred Preview Access)</p>
  </header>  <div class="container">
    <div class="vault-grid">
      <div class="vault-item">
        <div class="blurred"></div>
        <h3>Unit 003 – Gabi Conejo</h3>
        <p>Deploy ID: WPTV-003A</p>
      </div>
      <div class="vault-item">
        <div class="blurred"></div>
        <h3>Unit 002 – Skye Zero</h3>
        <p>Deploy ID: WPTV-002L</p>
      </div>
      <div class="vault-item">
        <div class="blurred"></div>
        <h3>Unit 001 – Nova Raye</h3>
        <p>Deploy ID: WPTV-001X</p>
      </div>
    </div>
  </div>  <footer>
    © 2025 WUPTV. All rights reserved.
  </footer>

`,className:"w-html-embed"})}),y=({data:r})=>{const{system:t,resources:s,url:i}=r;return e.jsx(c.Provider,{value:{imageLoader:d,assetBaseUrl:o,resources:s,breakpoints:g,onError:console.error},children:e.jsx(x,{system:t},i)})},b=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),j=({data:r})=>{const{pageMeta:t}=r,{origin:s}=new URL(r.url);let i=t.socialImageUrl;t.socialImageAssetName&&(i=`${s}${d({src:`${o}/${t.socialImageAssetName}`})}`);const n=t.custom.some(a=>a.property==="twitter:card");return e.jsxs(e.Fragment,{children:[r.url&&e.jsx("meta",{property:"og:url",content:r.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),l,i&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),l,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:a,content:p})=>e.jsx("meta",{property:a,content:p},a)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&n===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),f,v.map(a=>e.jsx("link",{rel:"preload",href:`${o}${a}`,as:"font",crossOrigin:"anonymous"},a)),h.map(a=>e.jsx("link",{rel:"preload",href:`${o}${a}`,as:"image"},a))]})},w=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),U={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/vault-light/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/vault-light/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:w}}};export{U as configValuesSerialized};
