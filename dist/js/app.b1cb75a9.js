(function(e){function t(t){for(var r,i,c=t[0],l=t[1],s=t[2],u=0,f=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(f.length)f.shift()();return n.push.apply(n,s||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],r=!0,i=1;i<o.length;i++){var l=o[i];0!==a[l]&&(r=!1)}r&&(n.splice(t--,1),e=c(c.s=o[0]))}return e}var r={},a={app:0},n=[];function i(e){return c.p+"js/"+({Create:"Create"}[e]||e)+"."+{Create:"94f18394"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var t=[],o=a[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,r){o=a[e]=[t,r]}));t.push(o[2]=r);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var s=new Error;n=function(t){l.onerror=l.onload=null,clearTimeout(u);var o=a[e];if(0!==o){if(o){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",s.name="ChunkLoadError",s.type=r,s.request=n,o[1](s)}a[e]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(o,r,function(t){return e[t]}.bind(null,r));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=s;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("85ec")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("div",{attrs:{id:"app"}},[o("router-view")],1)])},n=[],i=(o("034f"),o("2877")),c=o("6544"),l=o.n(c),s=o("7496"),u={},d=Object(i["a"])(u,a,n,!1,null,null,null),f=d.exports;l()(d,{VApp:s["a"]});var p=o("9483");Object(p["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});o("d3b7"),o("3ca3"),o("ddb0");var v=o("8c4f"),g=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",[o("div",{staticClass:"home"},[o("h1",[e._v("¡Hola Janna!!!")]),o("h2",[e._v("Korean")]),o("h3",[e._v(e._s(e.value+1))]),o("flashcard",{attrs:{front:e.cards[e.value].front,back:e.cards[e.value].back}}),o("v-btn",{staticStyle:{position:"relative",bottom:"140px",right:"280px"},on:{click:function(t){e.value--}}},[o("v-icon",[e._v("mdi-keyboard-backspace")])],1),o("v-btn",{staticStyle:{position:"relative",bottom:"140px",left:"280px",transform:"rotate(180deg)"},on:{click:function(t){e.value++}}},[o("v-icon",[e._v("mdi-keyboard-backspace")])],1),o("b-icon",{staticStyle:{position:"fixed",bottom:"20px",right:"25px","font-size":"2em"},attrs:{icon:"plus-circle-fill",variant:"primary"},on:{click:function(t){e.FormGroup=!0}}}),o("v-dialog",{model:{value:e.FormGroup,callback:function(t){e.FormGroup=t},expression:"FormGroup"}},[o("v-card",{staticStyle:{padding:"20px"}},[o("v-text-field",{attrs:{name:"input-7-1",filled:"",label:"Parte delantera","auto-grow":""},model:{value:e.PartF,callback:function(t){e.PartF=t},expression:"PartF"}}),o("v-text-field",{attrs:{name:"input-7-1",filled:"",label:"Parte trasera","auto-grow":""},model:{value:e.PartB,callback:function(t){e.PartB=t},expression:"PartB"}}),o("b-form-group",{attrs:{label:"Individual radios"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.ariaDescribedby;return[o("b-form-radio",{attrs:{"aria-describedby":r,name:"some-radios",value:"Coreano"},model:{value:e.collection,callback:function(t){e.collection=t},expression:"collection"}},[e._v("Coreano")]),o("b-form-radio",{attrs:{"aria-describedby":r,name:"some-radios",value:"Ingles"},model:{value:e.collection,callback:function(t){e.collection=t},expression:"collection"}},[e._v("Ingles")]),o("b-form-radio",{attrs:{"aria-describedby":r,name:"some-radios",value:"Otros"},model:{value:e.collection,callback:function(t){e.collection=t},expression:"collection"}},[e._v("Otros")])]}}])}),o("v-btn",{staticStyle:{"margin-right":"15px"},on:{click:function(t){e.FormGroup=!1}}},[e._v("Cancelar")]),o("v-btn",{on:{click:function(t){return e.add()}}},[e._v("Crear")])],1)],1)],1)])},m=[],h=(o("a434"),o("6c6c")),b={name:"Home",data:function(){return{value:0,cards:[{front:"배우다",back:"Aprender"}],collection:"",FormGroup:!1,PartF:"",PartB:"",items:["Coreano","Ingles","Otros"]}},components:{Flashcard:h["a"]},methods:{add:function(){this.cards.push({front:this.PartF,back:this.PartB,group:this.collection}),this.FormGroup=!1,this.PartF="",this.PartB="",this.collection="",localStorage.setItem("cards",JSON.stringify(this.cards))},del:function(){this.cards.splice(1,this.value),localStorage.setItem("cards",JSON.stringify(this.cards)),console.log(this.cards)}},mounted:function(){null==localStorage.getItem("cards")?localStorage.setItem("cards",[]):this.cards=JSON.parse(localStorage.getItem("cards"))}},y=b,k=(o("cccb"),o("8336")),S=o("b0af"),x=o("a523"),F=o("169a"),w=o("132d"),_=o("8654"),C=Object(i["a"])(y,g,m,!1,null,null,null),P=C.exports;l()(C,{VBtn:k["a"],VCard:S["a"],VContainer:x["a"],VDialog:F["a"],VIcon:w["a"],VTextField:_["a"]}),r["default"].use(v["a"]);var B=[{path:"/",name:"Home",component:P},{path:"/create",name:"Create",component:function(){return o.e("Create").then(o.bind(null,"d879"))}}],O=new v["a"]({mode:"history",base:"/",routes:B}),T=O,j=o("2f62");r["default"].use(j["a"]);var I=new j["a"].Store({state:{},mutations:{},actions:{},modules:{}}),N=o("f309"),z=o("5e4e");r["default"].use(N["a"]);var A=new N["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{es:z["a"]},current:"es"},icons:{iconfont:"md"}}),E=(o("5363"),o("d5e8"),o("5f5b")),G=o("b1e0");o("f9e3"),o("2dd8");r["default"].use(E["a"]),r["default"].use(G["a"]),r["default"].config.productionTip=!1,new r["default"]({router:T,store:I,vuetify:A,render:function(e){return e(f)}}).$mount("#app")},"5ced":function(e,t,o){},6939:function(e,t,o){},"6c6c":function(e,t,o){"use strict";var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{directives:[{name:"show",rawName:"v-show",value:!e.isToggle,expression:"!isToggle"}],staticClass:"animated flipInX flashcard",style:{backgroundColor:e.colorFront,color:e.colorTextFront},on:{click:function(t){e.isToggle=!e.isToggle}}},[o("div",{staticClass:"card-header",staticStyle:{"padding-bottom":"15px"}},[e._v(e._s(e.headerFront))]),o("div",{staticClass:"card-content center"},[o("p",{style:{fontSize:e.textSizeFront,fontWeight:"bold"}},[e._v(e._s(e.front))]),""!=e.imgFront?o("img",{attrs:{src:e.imgFront,width:"200",height:"200"}}):e._e()]),o("div",{staticClass:"card-footer"},[e._v(e._s(e.footerFront))])]),o("div",{directives:[{name:"show",rawName:"v-show",value:e.isToggle,expression:"isToggle"}],staticClass:"animated flipInX flashcard",style:{backgroundColor:e.colorBack,color:e.colorTextBack},on:{click:function(t){e.isToggle=!e.isToggle}}},[o("div",{staticClass:"card-header",staticStyle:{"padding-bottom":"15px"}},[e._v(e._s(e.headerBack))]),o("div",{staticClass:"card-content center"},[o("p",{style:{fontSize:e.textSizeBack,fontWeight:"bold"}},[e._v(e._s(e.back))]),""!=e.imgBack?o("img",{attrs:{src:e.imgBack,width:"200",height:"200"}}):e._e()]),o("div",{staticClass:"card-footer"},[e._v(e._s(e.footerBack))])])])},a=[],n={name:"Flashcard",data:function(){return{isToggle:!1}},props:{imgFront:{type:String,default:""},imgBack:{type:String,default:""},front:{type:String,default:""},back:{type:String,default:""},textSizeFront:{type:String,default:"2em"},textSizeBack:{type:String,default:"2em"},colorTextFront:{type:String,default:"black"},colorTextBack:{type:String,default:"white"},colorFront:{type:String,default:"white"},colorBack:{type:String,default:"#2ecc71"},headerFront:{type:String,default:"Dice..."},headerBack:{type:String,default:"Repuesta:"},footerFront:{type:String,default:"Pulsa para ver la parte de atras"},footerBack:{type:String,default:"Pulsa para ver la parte de adelante"}}},i=n,c=(o("6dbb"),o("2877")),l=Object(c["a"])(i,r,a,!1,null,"34a86289",null);t["a"]=l.exports},"6dbb":function(e,t,o){"use strict";o("6939")},"85ec":function(e,t,o){},cccb:function(e,t,o){"use strict";o("5ced")}});
//# sourceMappingURL=app.b1cb75a9.js.map