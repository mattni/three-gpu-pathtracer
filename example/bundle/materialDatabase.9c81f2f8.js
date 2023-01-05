var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},a=e.parcelRequire5b70;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in t){var a=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,a.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequire5b70=a);var o=a("ilwiq"),r=a("RPVlj"),i=a("7lx9d"),s=a("5Rd1x"),l=a("4CEV9"),d=a("cVdfP"),m=a("891vQ"),c=a("kp7Te"),u=a("jiuw3");let p,h,g,b,w,y,f,v,C,M,x,I,B,E,R;const F={hideInfo:!1,acesToneMapping:!0,stableNoise:!1,tiles:2,bounces:15,multipleImportanceSampling:!0,resolutionScale:1/window.devicePixelRatio,environmentBlur:0,environmentIntensity:1,environmentRotation:0,backgroundBlur:.1,filterGlossyFactor:.5};function S(){const e=window.innerWidth,n=window.innerHeight,t=F.resolutionScale,a=window.devicePixelRatio;b.setSize(e*t*a,n*t*a),b.reset(),p.setSize(e,n),p.setPixelRatio(window.devicePixelRatio*t);const o=e/n;f.aspect=o,f.updateProjectionMatrix()}function T(){const e=M.generate(C,F.environmentBlur);b.material.envMapInfo.updateFrom(e),x.environment=e,b.reset()}function G(){requestAnimationFrame(G),R.style.visibility=F.hideInfo?"hidden":"visible";const e=v[F.material],[n,t]=y;!function(e,n){n.color.set(16777215),n.transmission=0,n.attenuationDistance=1/0,n.attenuationColor.set(16777215),n.specularColor.set(16777215),n.metalness=0,n.roughness=1,n.ior=1.5,n.thickness=1,e.specularColor&&n.specularColor.setRGB(...e.specularColor),"metalness"in e&&(n.metalness=e.metalness),"roughness"in e&&(n.roughness=e.roughness),"ior"in e&&(n.ior=e.ior),"transmission"in e&&(n.transmission=e.transmission),n.transmission?(e.color&&n.attenuationColor.setRGB(...e.color),n.attenuationDistance=200/e.density):e.color&&n.color.setRGB(...e.color);const t=e.name.replace(/\s+/g,"-").replace(/[()]+/g,"");E.src=`https://physicallybased.info/reference/render/${t}-cycles.webp`,B.innerText=`${e.description}`,B.style.display=e.description?"inline-block":"none"}(e,n),t.color.setRGB(.5,.5,.5).convertSRGBToLinear(),t.roughness=1,t.metalness=0,b.material.materials.updateFrom(g.materials,g.textures),b.material.filterGlossyFactor=F.filterGlossyFactor,b.material.environmentIntensity=F.environmentIntensity,b.material.backgroundBlur=F.backgroundBlur,b.material.bounces=F.bounces,b.material.physicalCamera.updateFrom(f),f.updateMatrixWorld(),F.backgroundAlpha<1?x.background=null:x.background=x.environment,b.update(),b.samples<1&&p.render(x,f),p.autoClear=!1,w.material.map=b.target.texture,w.render(p),p.autoClear=!0,I.innerText=`Samples: ${Math.floor(b.samples)}`}window.innerWidth/window.innerHeight<.65&&(F.bounces=Math.max(F.bounces,6),F.resolutionScale*=.5,F.tiles=2,F.multipleImportanceSampling=!1,F.environmentBlur=.35,hideInfo=!0),async function(){p=new o.WebGLRenderer({antialias:!0}),p.toneMapping=o.ACESFilmicToneMapping,p.outputEncoding=o.sRGBEncoding,p.setClearColor(0,0),document.body.appendChild(p.domElement);const e=window.innerWidth/window.innerHeight;f=new o.PerspectiveCamera(75,e,.025,500),f.position.set(-4,2,3),b=new l.PathTracingRenderer(p),b.camera=f,b.material=new l.PhysicalPathTracingMaterial,b.material.setDefine("FEATURE_MIS",Number(F.multipleImportanceSampling)),b.tiles.set(F.tiles,F.tiles),w=new r.FullScreenQuad(new o.MeshBasicMaterial({map:b.target.texture,blending:o.CustomBlending,premultipliedAlpha:p.getContextAttributes().premultipliedAlpha})),h=new s.OrbitControls(f,p.domElement),h.addEventListener("change",(()=>{b.reset()})),x=new o.Scene,I=document.getElementById("samples"),B=document.getElementById("materialInfo"),E=document.getElementById("materialImage"),R=document.getElementById("info"),M=new l.BlurredEnvMapGenerator(p);const n=(new m.RGBELoader).loadAsync("https://raw.githubusercontent.com/gkjohnson/3d-demo-data/master/hdri/autoshop_01_1k.hdr").then((e=>{C=e,T()})),t=new d.PathTracingSceneWorker,a=(new i.GLTFLoader).setMeshoptDecoder(c.MeshoptDecoder).loadAsync("https://raw.githubusercontent.com/gkjohnson/3d-demo-data/main/models/material-balls/material_ball_v2.glb").then((e=>{const n=new o.Group;e.scene.scale.setScalar(.01),e.scene.updateMatrixWorld(),n.add(e.scene);const a=new o.Box3;a.setFromObject(e.scene);const r=new o.Mesh(new o.CylinderGeometry(3,3,.05,200),new o.MeshPhysicalMaterial({color:16777215,roughness:0,metalness:.25}));r.geometry=r.geometry.toNonIndexed(),r.geometry.clearGroups(),r.position.y=a.min.y-.03,n.add(r);const i=new o.MeshPhysicalMaterial,s=new o.MeshPhysicalMaterial;return e.scene.traverse((e=>{e.geometry&&e.geometry.computeVertexNormals(),"Sphere_1"===e.name?e.material=s:e.material=i,"subsphere_1"===e.name&&(e.material=s)})),y=[i,s,r.material],t.generate(n)})).then((e=>{g=e,x.add(e.scene);const{bvh:n,textures:a,materials:o}=e,r=n.geometry,i=b.material;i.bvh.updateFrom(n),i.attributesArray.updateFrom(r.attributes.normal,r.attributes.tangent,r.attributes.uv,r.attributes.color),i.materialIndexAttribute.updateFrom(r.attributes.materialIndex),i.textures.setTextures(p,2048,2048,a),i.materials.updateFrom(o,a),t.dispose()})),P=fetch("https://api.physicallybased.info/materials").then((e=>e.json())).then((e=>{v={},e.forEach((e=>{v[e.name]=e}))}));await Promise.all([P,a,n]),document.getElementById("loading").remove(),S(),window.addEventListener("resize",S);const k=new u.GUI,A=Object.keys(v);F.material=A[0],k.add(F,"material",A).onChange((()=>{b.reset()})),k.add(F,"hideInfo");const N=k.addFolder("Path Tracing");N.add(F,"acesToneMapping").onChange((e=>{p.toneMapping=e?o.ACESFilmicToneMapping:o.NoToneMapping,w.material.needsUpdate=!0})),N.add(F,"stableNoise").onChange((e=>{b.stableNoise=e})),N.add(F,"multipleImportanceSampling").onChange((e=>{b.material.setDefine("FEATURE_MIS",Number(e)),b.reset()})),N.add(F,"tiles",1,4,1).onChange((e=>{b.tiles.set(e,e)})),N.add(F,"filterGlossyFactor",0,1).onChange((()=>{b.reset()})),N.add(F,"bounces",1,30,1).onChange((()=>{b.reset()})),N.add(F,"resolutionScale",.1,1).onChange((()=>{S()}));const _=k.addFolder("Environment");_.add(F,"environmentIntensity",0,10).onChange((()=>{b.reset()})),_.add(F,"environmentRotation",0,2*Math.PI).onChange((e=>{b.material.environmentRotation.makeRotationY(e),b.reset()})),_.add(F,"environmentBlur",0,1).onChange((()=>{T()})),_.add(F,"backgroundBlur",0,1).onChange((()=>{b.reset()})),G()}();
//# sourceMappingURL=materialDatabase.9c81f2f8.js.map
