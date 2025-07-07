import{j as e,P as c,R as m,a as i,i as s,b as u}from"../chunks/chunk-Dw8SyKya.js";/* empty css                      */const l=void 0,g=[{id:"hIKv5vfNRbwa6HKRGQmLL"},{id:"LYutaI0620Gt0qmrvfFjU",maxWidth:991},{id:"EudZxrePT5YInbI42VSwQ",maxWidth:767},{id:"kd1n8tg93wB_eQPsymZbR",maxWidth:479}],f=void 0,b=[],x=[],y=a=>e.jsx("body",{className:"w-element",children:e.jsx(c,{code:`

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WUPTV Unit Builder | Customize Femme Deploys</title>
  <meta name="description" content="Build your custom Femme Unit deploy with WUPTV. Select pose type, length, license level, and add personal tags for tracked deployment.">
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&amp;display=swap" rel="stylesheet">
  <style>
    body {
      background-color: #0b0b0b;
      color: #f2f2f2;
      font-family: 'Orbitron', sans-serif;
      margin: 0;
      padding: 0;
    }
    header {
      text-align: center;
      padding: 2rem;
      background-color: #111;
      border-bottom: 1px solid #222;
    }
    header h1 {
      color: #d94cff;
      font-size: 2rem;
    }
    .container {
      max-width: 800px;
      margin: auto;
      padding: 2rem;
    }
    form {
      background: #151515;
      padding: 2rem;
      border-radius: 10px;
    }
    label {
      display: block;
      margin: 1rem 0 0.5rem;
      color: #ccc;
      font-size: 0.9rem;
    }
    select, input[type="text"], textarea {
      width: 100%;
      padding: 0.75rem;
      border-radius: 6px;
      border: none;
      margin-bottom: 1rem;
      background-color: #222;
      color: #fff;
    }
    button {
      background-color: #d94cff;
      border: none;
      color: #0a0a0a;
      padding: 0.75rem 2rem;
      font-size: 1rem;
      border-radius: 30px;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    button:hover {
      background-color: #ff70ff;
    }
    footer {
      text-align: center;
      padding: 2rem;
      font-size: 0.75rem;
      color: #555;
    }
  </style>


  <header>
    <h1>WUPTV UNIT BUILDER</h1>
    <p>Customize your Femme Deploy Package</p>
  </header>  <div class="container">
    <form>
      <label for="pose">Pose Style</label>
      <select id="pose" name="pose">
        <option value="stand">Standing</option>
        <option value="lean">Leaning</option>
        <option value="closeup">Close-Up</option>
        <option value="motion">Motion / Turn</option>
      </select><label for="duration">Duration (Seconds)</label>
  <select id="duration" name="duration">
    <option value="10">10</option>
    <option value="15">15</option>
    <option value="20">20</option>
  </select>

  <label for="license">License Level</label>
  <select id="license" name="license">
    <option value="basic">Basic – 1 use</option>
    <option value="premium">Premium – 5 uses</option>
    <option value="pro">Pro – Unlimited</option>
  </select>

  <label for="tag">Creator Tag</label>
  <input type="text" id="tag" name="tag" placeholder="@yourhandle">

  <label for="notes">Additional Notes (Optional)</label>
  <textarea id="notes" name="notes" rows="4" placeholder="Special request or vibe..."></textarea>

  <button type="submit">Build My Deploy</button>
</form>

  </div>  <footer>
    © 2025 WUPTV. All rights reserved.
  </footer>

`,className:"w-html-embed"})}),h=({data:a})=>{const{system:t,resources:n,url:r}=a;return e.jsx(m.Provider,{value:{imageLoader:s,assetBaseUrl:i,resources:n,breakpoints:g,onError:console.error},children:e.jsx(y,{system:t},r)})},v=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),j=({data:a})=>{const{pageMeta:t}=a,{origin:n}=new URL(a.url);let r=t.socialImageUrl;t.socialImageAssetName&&(r=`${n}${s({src:`${i}/${t.socialImageAssetName}`})}`);const d=t.custom.some(o=>o.property==="twitter:card");return e.jsxs(e.Fragment,{children:[a.url&&e.jsx("meta",{property:"og:url",content:a.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),l,r&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),l,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:o,content:p})=>e.jsx("meta",{property:o,content:p},o)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&d===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),f,b.map(o=>e.jsx("link",{rel:"preload",href:`${i}${o}`,as:"font",crossOrigin:"anonymous"},o)),x.map(o=>e.jsx("link",{rel:"preload",href:`${i}${o}`,as:"image"},o))]})},w=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),T={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/builder-dark/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:v}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/builder-dark/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:w}}};export{T as configValuesSerialized};
