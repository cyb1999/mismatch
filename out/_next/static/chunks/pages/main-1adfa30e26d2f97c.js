(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[671],{115:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/main",function(){return __webpack_require__(4812)}])},4812:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return main}});var jsx_runtime=__webpack_require__(5893),react=__webpack_require__(7294),main_module=__webpack_require__(1190),main_module_default=__webpack_require__.n(main_module);__webpack_require__(1163),__webpack_require__(1939);var Fade=__webpack_require__(9470),Fade_default=__webpack_require__.n(Fade),debounce=__webpack_require__(3279),debounce_default=__webpack_require__.n(debounce),index_esm=__webpack_require__(6964);let MySlotMachine=()=>{let[Switch,setSwitch]=(0,react.useState)(!0),[Disabled,setDisabled]=(0,react.useState)(!0),myLucky=(0,react.useRef)(),[blocks]=(0,react.useState)([{imgs:[{src:"/bg.png",width:"100%",height:"100%"}]}]),[prizes]=(0,react.useState)([{text:"爱心",imgs:[{text:"爱心",id:1,width:"100%",src:"/1.png"}]},{text:"太阳",imgs:[{id:2,width:"100%",src:"/2.png"}]},{borderRadius:"60px",text:"杯子",imgs:[{id:3,width:"100%",src:"/3.png"}]}]),res=[[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]];(0,react.useEffect)(()=>{if(Switch)var timer=setInterval(()=>{playGame()},100);else clearInterval(timer);return()=>{clearInterval(timer),console.log("销毁",timer)}},[Switch]);let StopGame=()=>{if(console.log("点击1"),Switch){var ref;let index=res[6*Math.random()>>0];null==myLucky||null===(ref=myLucky.current)||void 0===ref||ref.stop(index),setSwitch(_=>!1)}},playGame=()=>{var ref;null==myLucky||null===(ref=myLucky.current)||void 0===ref||ref.play()};return debounce_default()(function(e){console.log(e),StopGame()},2e3),(0,jsx_runtime.jsxs)("div",{style:{minHeight:"100vh"},children:[(0,jsx_runtime.jsx)("div",{style:{display:"flex",height:"400px",justifyContent:"center",alignItems:"center"},children:(0,jsx_runtime.jsx)(Fade_default(),{top:!0,children:(0,jsx_runtime.jsx)(index_esm.FI,{ref:myLucky,width:"320px",height:"200px",blocks:blocks,prizes:prizes,slots:[{},{direction:-1},{speed:20}],defaultConfig:{rowSpacing:"50px"},onEnd(prize){console.log(prize)}})})}),(0,jsx_runtime.jsx)(Fade_default(),{top:!0,children:(0,jsx_runtime.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItem:"center"},children:(0,jsx_runtime.jsx)("button",{style:{transition:"all 0.5s",width:"150px",height:"40px",borderRadius:"20px",border:"none",fontSize:"20px",backgroundColor:"".concat(Switch?"red":"#2d93d2"),color:"#fff",fontWeight:"bold",textAlign:"center",cursor:"".concat(Switch?"pointer":"wait")},onClick:StopGame,children:Switch?"Stop":"Loading \xb7 \xb7 \xb7"})})})]})},Main=()=>(0,jsx_runtime.jsxs)("div",{className:"flex-col ".concat(main_module_default().page),children:[(0,jsx_runtime.jsxs)("div",{className:"flex-col ".concat(main_module_default().group_2," ").concat(main_module_default()["space-y-8"]),children:[(0,jsx_runtime.jsx)(Fade_default(),{left:!0,cascade:!0,children:(0,jsx_runtime.jsx)("span",{className:"".concat(main_module_default().text_2),children:"Hello."})}),(0,jsx_runtime.jsx)(Fade_default(),{top:!0,cascade:!0,children:(0,jsx_runtime.jsxs)("div",{className:"flex-row",children:[(0,jsx_runtime.jsx)("img",{className:"".concat(main_module_default()["equal-division-item"]),src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301267112885480.png"}),(0,jsx_runtime.jsx)("img",{className:"".concat(main_module_default()["equal-division-item"]),src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301268337855859.png"}),(0,jsx_runtime.jsx)("img",{className:"".concat(main_module_default()["equal-division-item"]),src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301269072485464.png"}),(0,jsx_runtime.jsx)("img",{className:"".concat(main_module_default()["equal-division-item"]),src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301268499283836.png"})]})})]}),(0,jsx_runtime.jsxs)(Fade_default(),{top:!0,cascade:!0,children:[(0,jsx_runtime.jsx)("span",{className:"".concat(main_module_default().text_3),children:"ミスマッチ研究会ヘようこそ"}),(0,jsx_runtime.jsx)("span",{className:"".concat(main_module_default().font_1," ").concat(main_module_default().text_4),children:"ミスマッチ研究会改め"}),(0,jsx_runtime.jsx)("span",{className:"".concat(main_module_default().font_1," ").concat(main_module_default().text_5),children:"“ミス研”とは"}),(0,jsx_runtime.jsx)("span",{className:"".concat(main_module_default().font_1," ").concat(main_module_default().text_6),children:"一見ミスマッチな食材を"}),(0,jsx_runtime.jsx)("span",{className:"".concat(main_module_default().font_1," ").concat(main_module_default().text_7),children:"ランダムで合成し"}),(0,jsx_runtime.jsxs)("div",{className:"flex-col ".concat(main_module_default().group_3," ").concat(main_module_default()["space-y-11"]),children:[(0,jsx_runtime.jsx)("span",{className:"".concat(main_module_default().font_1," ").concat(main_module_default().text_8),children:"マッチする組み合わせを"}),(0,jsx_runtime.jsxs)("div",{className:"flex-col items-center ".concat(main_module_default().group_4),children:[(0,jsx_runtime.jsx)("span",{className:"".concat(main_module_default().font_1),children:"日夜研究しているサークルです"}),(0,jsx_runtime.jsx)("div",{className:"".concat(main_module_default().section_3)})]})]}),(0,jsx_runtime.jsxs)("div",{className:"flex-col items-center ".concat(main_module_default().group_5," ").concat(main_module_default()["space-y-26"]),children:[(0,jsx_runtime.jsx)("span",{className:"".concat(main_module_default().font_2," ").concat(main_module_default().text_10),children:"さあ、あなたも"}),(0,jsx_runtime.jsx)("span",{className:"".concat(main_module_default().font_2," ").concat(main_module_default().text_10),children:"合成してみましょう"})]})]}),(0,jsx_runtime.jsx)(MySlotMachine,{})]});var main=Main},1190:function(module){module.exports={page:"main_page__l5kim",group:"main_group__tLMgx",image:"main_image__CLUBh","image-wrapper":"main_image-wrapper__t5tB5",image_2:"main_image_2__rSR91",image_3:"main_image_3__B2EIz",image_4:"main_image_4__CVUow",image_5:"main_image_5__kXiFG",image_6:"main_image_6__5K7XU",image_7:"main_image_7__xx8UR",section_2:"main_section_2__grTR3",image_8:"main_image_8__Sqyf8",image_9:"main_image_9__n8E8Z","image-wrapper_2":"main_image-wrapper_2__u2YOM",image_10:"main_image_10__z1JPS",text:"main_text__ZFrju",group_2:"main_group_2__a_tmw","space-y-8":"main_space-y-8__LSNYb",text_2:"main_text_2__pmOMI","equal-division-item":"main_equal-division-item__MI3w_",text_3:"main_text_3__d7eK5",font_1:"main_font_1__JE_dc",text_4:"main_text_4__VqrIj",text_5:"main_text_5__cXVmA",text_6:"main_text_6__d2Vw5",text_7:"main_text_7__JSSxS",group_3:"main_group_3__AImMU","space-y-11":"main_space-y-11__50jVN",text_8:"main_text_8__3ySIk",group_4:"main_group_4__WaW5H",section_3:"main_section_3__PGvGP",group_5:"main_group_5__ER5st","space-y-26":"main_space-y-26__XFQk5",font_2:"main_font_2__oKhp5",text_10:"main_text_10__SirMG"}}},function(__webpack_require__){__webpack_require__.O(0,[638,774,888,179],function(){return __webpack_require__(__webpack_require__.s=115)}),_N_E=__webpack_require__.O()}]);