import{j as e,P as c,R as m,a as n,i as l,b as u}from"../chunks/chunk-Dw8SyKya.js";/* empty css                      */const s=void 0,g=[{id:"hIKv5vfNRbwa6HKRGQmLL"},{id:"LYutaI0620Gt0qmrvfFjU",maxWidth:991},{id:"EudZxrePT5YInbI42VSwQ",maxWidth:767},{id:"kd1n8tg93wB_eQPsymZbR",maxWidth:479}],f=void 0,x=[],h=[],b=r=>e.jsx("body",{className:"w-element",children:e.jsx(c,{code:`

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WUPTV Deploy Console | Unlock Unit Access</title>
  <meta name="description" content="Enter your Deploy ID to unlock your WUPTV Femme Unit visuals. Download licensed assets, track usage rights, and begin visual embedding.">
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
      max-width: 600px;
      margin: auto;
      padding: 3rem 2rem;
      text-align: center;
    }
    .input-box {
      background: #151515;
      border-radius: 10px;
      padding: 2rem;
      box-shadow: 0 0 10px rgba(217, 76, 255, 0.1);
    }
    .input-box input {
      width: 100%;
      padding: 0.75rem 1rem;
      font-size: 1rem;
      border: none;
      border-radius: 6px;
      margin-bottom: 1.5rem;
      background: #1f1f1f;
      color: #fff;
    }
    .input-box button {
      padding: 0.75rem 2rem;
      font-size: 1rem;
      border: none;
      border-radius: 30px;
      background: #d94cff;
      color: #0a0a0a;
      cursor: pointer;
      transition: 0.3s ease;
    }
    .input-box button:hover {
      background: #ff70ff;
    }
    footer {
      text-align: center;
      padding: 2rem;
      font-size: 0.75rem;
      color: #555;
    }
  </style>


  <header>
    <h1>WUPTV DEPLOY CONSOLE</h1>
    <p>Enter Deploy ID to Unlock Visuals</p>
  </header>  <div class="container">
    <div class="input-box">
      <form action="#" method="POST">
        <input type="text" placeholder="Enter your Deploy ID" required="">
        <button type="submit">Unlock Now</button>
      </form>
    </div>
  </div>  <footer>
    © 2025 WUPTV. All rights reserved.
  </footer>

`,className:"w-html-embed"})}),y=({data:r})=>{const{system:t,resources:i,url:a}=r;return e.jsx(m.Provider,{value:{imageLoader:l,assetBaseUrl:n,resources:i,breakpoints:g,onError:console.error},children:e.jsx(b,{system:t},a)})},v=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),j=({data:r})=>{const{pageMeta:t}=r,{origin:i}=new URL(r.url);let a=t.socialImageUrl;t.socialImageAssetName&&(a=`${i}${l({src:`${n}/${t.socialImageAssetName}`})}`);const d=t.custom.some(o=>o.property==="twitter:card");return e.jsxs(e.Fragment,{children:[r.url&&e.jsx("meta",{property:"og:url",content:r.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),s,a&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),s,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:o,content:p})=>e.jsx("meta",{property:o,content:p},o)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&d===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),f,x.map(o=>e.jsx("link",{rel:"preload",href:`${n}${o}`,as:"font",crossOrigin:"anonymous"},o)),h.map(o=>e.jsx("link",{rel:"preload",href:`${n}${o}`,as:"image"},o))]})},w=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),U={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/deploy-console-dark/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:v}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/deploy-console-dark/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:w}}};export{U as configValuesSerialized};
