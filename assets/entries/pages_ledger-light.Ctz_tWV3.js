import{j as e,P as p,R as m,a as i,i as n,b as f}from"../chunks/chunk-Dw8SyKya.js";/* empty css                      */const s=void 0,g=[{id:"hIKv5vfNRbwa6HKRGQmLL"},{id:"LYutaI0620Gt0qmrvfFjU",maxWidth:991},{id:"EudZxrePT5YInbI42VSwQ",maxWidth:767},{id:"kd1n8tg93wB_eQPsymZbR",maxWidth:479}],h=void 0,u=[],x=[],y=r=>e.jsx("body",{className:"w-element",children:e.jsx(p,{code:`

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WUPTV Deploy Ledger | Public Drop Log</title>
  <meta name="description" content="View the public WUPTV Deploy Ledger. Discover which creators licensed which Femme Units, and explore deploy stats across the network.">
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
      max-width: 1000px;
      margin: auto;
      padding: 2rem;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 2rem;
      background: #f6f6f6;
      border-radius: 8px;
      overflow: hidden;
    }
    thead {
      background: #f0f0f0;
    }
    th, td {
      padding: 1rem;
      text-align: left;
      font-size: 0.9rem;
    }
    th {
      color: #7a00cc;
      border-bottom: 1px solid #ccc;
    }
    td {
      border-bottom: 1px solid #eee;
      color: #333;
    }
    tr:hover td {
      background: #fafafa;
    }
    footer {
      text-align: center;
      padding: 2rem;
      font-size: 0.75rem;
      color: #888;
    }
  </style>


  <header>
    <h1>WUPTV DEPLOY LEDGER</h1>
    <p>Public Log of Femme Unit Deployments</p>
  </header>  <div class="container">
    <table>
      <thead>
        <tr>
          <th>Buyer Handle</th>
          <th>Unit ID</th>
          <th>Deploy ID</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>@darkflareYT</td>
          <td>Unit 003</td>
          <td>WPTV-003A</td>
          <td>2025-07-01</td>
        </tr>
        <tr>
          <td>@visualzen</td>
          <td>Unit 001</td>
          <td>WPTV-001X</td>
          <td>2025-06-28</td>
        </tr>
        <tr>
          <td>@midnightecho</td>
          <td>Unit 002</td>
          <td>WPTV-002L</td>
          <td>2025-06-25</td>
        </tr>
      </tbody>
    </table>
  </div>  <footer>
    © 2025 WUPTV. All rights reserved.
  </footer>

`,className:"w-html-embed"})}),b=({data:r})=>{const{system:t,resources:d,url:a}=r;return e.jsx(m.Provider,{value:{imageLoader:n,assetBaseUrl:i,resources:d,breakpoints:g,onError:console.error},children:e.jsx(y,{system:t},a)})},v=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"})),w=({data:r})=>{const{pageMeta:t}=r,{origin:d}=new URL(r.url);let a=t.socialImageUrl;t.socialImageAssetName&&(a=`${d}${n({src:`${i}/${t.socialImageAssetName}`})}`);const l=t.custom.some(o=>o.property==="twitter:card");return e.jsxs(e.Fragment,{children:[r.url&&e.jsx("meta",{property:"og:url",content:r.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),s,a&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),s,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:o,content:c})=>e.jsx("meta",{property:o,content:c},o)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&l===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),h,u.map(o=>e.jsx("link",{rel:"preload",href:`${i}${o}`,as:"font",crossOrigin:"anonymous"},o)),x.map(o=>e.jsx("link",{rel:"preload",href:`${i}${o}`,as:"image"},o))]})},j=Object.freeze(Object.defineProperty({__proto__:null,Head:w},Symbol.toStringTag,{value:"Module"})),U={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/ledger-light/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:v}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/ledger-light/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}}};export{U as configValuesSerialized};
