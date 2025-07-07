import{j as e,P as p,R as m,a as i,i as n,b as u}from"../chunks/chunk-Dw8SyKya.js";/* empty css                      */const l=void 0,v=[{id:"hIKv5vfNRbwa6HKRGQmLL"},{id:"LYutaI0620Gt0qmrvfFjU",maxWidth:991},{id:"EudZxrePT5YInbI42VSwQ",maxWidth:767},{id:"kd1n8tg93wB_eQPsymZbR",maxWidth:479}],f=void 0,g=[],h=[],x=r=>e.jsx("body",{className:"w-element",children:e.jsx(p,{code:`

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WUPTV Vault | Private Deploy Library</title>
  <meta name="description" content="Browse the WUPTV Vault. Private previews of exclusive Femme Unit deploys available only to licensed buyers and verified creators.">
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&amp;display=swap" rel="stylesheet">
  <style>
    body {
      background-color: #0a0a0a;
      color: #f1f1f1;
      font-family: 'Orbitron', sans-serif;
      margin: 0;
      padding: 0;
    }
    header {
      padding: 2rem;
      text-align: center;
      background-color: #111;
      border-bottom: 1px solid #222;
    }
    header h1 {
      font-size: 2rem;
      color: #d94cff;
    }
    .container {
      max-width: 960px;
      margin: auto;
      padding: 2rem;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }
    .card {
      background: #161616;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.02);
      transition: transform 0.2s ease;
    }
    .card:hover {
      transform: scale(1.01);
    }
    .card video {
      width: 100%;
      display: block;
      filter: blur(5px);
    }
    .card .info {
      padding: 1rem;
    }
    .card .info h3 {
      margin: 0;
      color: #d94cff;
      font-size: 1rem;
    }
    .card .info p {
      margin: 0.5rem 0 0;
      font-size: 0.85rem;
      color: #aaa;
    }
    footer {
      text-align: center;
      padding: 2rem;
      font-size: 0.75rem;
      color: #555;
    }
  </style>


  <header>
    <h1>WUPTV VAULT</h1>
    <p>Private Preview Gallery – Femme Unit Deploys</p>
  </header>  <div class="container">
    <div class="grid">
      <div class="card">
        <video muted="" autoplay="" loop="" src="/vault/sample1.mp4"></video>
        <div class="info">
          <h3>Unit 003 – Private</h3>
          <p>Licensed Views: 8</p>
        </div>
      </div>
      <div class="card">
        <video muted="" autoplay="" loop="" src="/vault/sample2.mp4"></video>
        <div class="info">
          <h3>Unit 014 – Private</h3>
          <p>Licensed Views: 3</p>
        </div>
      </div>
      <div class="card">
        <video muted="" autoplay="" loop="" src="/vault/sample3.mp4"></video>
        <div class="info">
          <h3>Unit 009 – Private</h3>
          <p>Licensed Views: 11</p>
        </div>
      </div>
    </div>
  </div>  <footer>
    © 2025 WUPTV. All rights reserved.
  </footer>

`,className:"w-html-embed"})}),y=({data:r})=>{const{system:t,resources:s,url:o}=r;return e.jsx(m.Provider,{value:{imageLoader:n,assetBaseUrl:i,resources:s,breakpoints:v,onError:console.error},children:e.jsx(x,{system:t},o)})},w=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),b=({data:r})=>{const{pageMeta:t}=r,{origin:s}=new URL(r.url);let o=t.socialImageUrl;t.socialImageAssetName&&(o=`${s}${n({src:`${i}/${t.socialImageAssetName}`})}`);const d=t.custom.some(a=>a.property==="twitter:card");return e.jsxs(e.Fragment,{children:[r.url&&e.jsx("meta",{property:"og:url",content:r.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),l,o&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),l,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:a,content:c})=>e.jsx("meta",{property:a,content:c},a)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&d===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),f,g.map(a=>e.jsx("link",{rel:"preload",href:`${i}${a}`,as:"font",crossOrigin:"anonymous"},a)),h.map(a=>e.jsx("link",{rel:"preload",href:`${i}${a}`,as:"image"},a))]})},j=Object.freeze(Object.defineProperty({__proto__:null,Head:b},Symbol.toStringTag,{value:"Module"})),T={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/vault-2-dark/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:w}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/vault-2-dark/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}}};export{T as configValuesSerialized};
