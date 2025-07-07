import{j as e,P as m,R as c,a as o,i as n,b as u}from"../chunks/chunk-Dw8SyKya.js";/* empty css                      */const l=void 0,g=[{id:"hIKv5vfNRbwa6HKRGQmLL"},{id:"LYutaI0620Gt0qmrvfFjU",maxWidth:991},{id:"EudZxrePT5YInbI42VSwQ",maxWidth:767},{id:"kd1n8tg93wB_eQPsymZbR",maxWidth:479}],v=void 0,f=[],x=[],h=a=>e.jsx("body",{className:"w-element",children:e.jsx(m,{code:`

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WUPTV Vault | Private Deploy Library</title>
  <meta name="description" content="Browse the WUPTV Vault. Private previews of exclusive Femme Unit deploys available only to licensed buyers and verified creators.">
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
      background: #111;
      border-bottom: 1px solid #222;
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
      background: #151515;
      border-radius: 12px;
      padding: 1rem;
      box-shadow: 0 0 10px rgba(217, 76, 255, 0.05);
      text-align: center;
    }
    .vault-item .blurred {
      width: 100%;
      height: 160px;
      background: repeating-linear-gradient(45deg, #222, #222 10px, #333 10px, #333 20px);
      filter: blur(6px);
      border-radius: 8px;
      margin-bottom: 1rem;
    }
    .vault-item h3 {
      font-size: 1rem;
      color: #00ffe0;
      margin-bottom: 0.25rem;
    }
    .vault-item p {
      font-size: 0.85rem;
      color: #999;
    }
    footer {
      text-align: center;
      padding: 2rem;
      color: #555;
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

`,className:"w-html-embed"})}),y=({data:a})=>{const{system:t,resources:s,url:i}=a;return e.jsx(c.Provider,{value:{imageLoader:n,assetBaseUrl:o,resources:s,breakpoints:g,onError:console.error},children:e.jsx(h,{system:t},i)})},b=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),j=({data:a})=>{const{pageMeta:t}=a,{origin:s}=new URL(a.url);let i=t.socialImageUrl;t.socialImageAssetName&&(i=`${s}${n({src:`${o}/${t.socialImageAssetName}`})}`);const d=t.custom.some(r=>r.property==="twitter:card");return e.jsxs(e.Fragment,{children:[a.url&&e.jsx("meta",{property:"og:url",content:a.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),l,i&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),l,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:r,content:p})=>e.jsx("meta",{property:r,content:p},r)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&d===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),v,f.map(r=>e.jsx("link",{rel:"preload",href:`${o}${r}`,as:"font",crossOrigin:"anonymous"},r)),x.map(r=>e.jsx("link",{rel:"preload",href:`${o}${r}`,as:"image"},r))]})},w=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),U={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/vault-dark/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/vault-dark/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:w}}};export{U as configValuesSerialized};
