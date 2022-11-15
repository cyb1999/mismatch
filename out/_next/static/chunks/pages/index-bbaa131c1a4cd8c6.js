(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return __webpack_require__(4369)}])},9749:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(_param){let blurWidth,blurHeight;var src,{src:src1,sizes,unoptimized=!1,priority=!1,loading,className,quality,width,height,fill,style,onLoad,onLoadingComplete,placeholder="empty",blurDataURL,layout,objectFit,objectPosition,lazyBoundary,lazyRoot}=_param,all=_object_without_properties_loose(_param,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let configContext=_react.useContext(_imageConfigContext.ImageConfigContext),config=_react.useMemo(()=>{let c=configEnv||configContext||_imageConfig.imageConfigDefault,allSizes=[...c.deviceSizes,...c.imageSizes].sort((a,b)=>a-b),deviceSizes=c.deviceSizes.sort((a,b)=>a-b);return _extends({},c,{allSizes,deviceSizes})},[configContext]),rest=all,loader=rest.loader||_imageLoader.default;if(delete rest.loader,"__next_img_default"in loader){if("custom"===config.loader)throw Error('Image with src "'.concat(src1,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let customImageLoader=loader;loader=obj=>{let{config:_}=obj,opts=_object_without_properties_loose(obj,["config"]);return customImageLoader(opts)}}if(layout){"fill"===layout&&(fill=!0);let layoutStyle={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[layout];layoutStyle&&(style=_extends({},style,layoutStyle));let layoutSizes={responsive:"100vw",fill:"100vw"}[layout];layoutSizes&&!sizes&&(sizes=layoutSizes)}let staticSrc="",widthInt=getInt(width),heightInt=getInt(height);if("object"==typeof(src=src1)&&(isStaticRequire(src)||void 0!==src.src)){let staticImageData=isStaticRequire(src1)?src1.default:src1;if(!staticImageData.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(staticImageData)));if(!staticImageData.height||!staticImageData.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(staticImageData)));if(blurWidth=staticImageData.blurWidth,blurHeight=staticImageData.blurHeight,blurDataURL=blurDataURL||staticImageData.blurDataURL,staticSrc=staticImageData.src,!fill){if(widthInt||heightInt){if(widthInt&&!heightInt){let ratio=widthInt/staticImageData.width;heightInt=Math.round(staticImageData.height*ratio)}else if(!widthInt&&heightInt){let ratio1=heightInt/staticImageData.height;widthInt=Math.round(staticImageData.width*ratio1)}}else widthInt=staticImageData.width,heightInt=staticImageData.height}}let isLazy=!priority&&("lazy"===loading||void 0===loading);((src1="string"==typeof src1?src1:staticSrc).startsWith("data:")||src1.startsWith("blob:"))&&(unoptimized=!0,isLazy=!1),config.unoptimized&&(unoptimized=!0);let[blurComplete,setBlurComplete]=_react.useState(!1),[showAltText,setShowAltText]=_react.useState(!1),qualityInt=getInt(quality),imgStyle=Object.assign(fill?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit,objectPosition}:{},showAltText?{}:{color:"transparent"},style),blurStyle="blur"===placeholder&&blurDataURL&&!blurComplete?{backgroundSize:imgStyle.objectFit||"cover",backgroundPosition:imgStyle.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(_imageBlurSvg.getImageBlurSvg({widthInt,heightInt,blurWidth,blurHeight,blurDataURL}),'")')}:{},imgAttributes=function(param){let{config,src,unoptimized,width,quality,sizes,loader}=param;if(unoptimized)return{src,srcSet:void 0,sizes:void 0};let{widths,kind}=function(param,width,sizes){let{deviceSizes,allSizes}=param;if(sizes){let viewportWidthRe=/(^|\s)(1?\d?\d)vw/g,percentSizes=[];for(let match;match=viewportWidthRe.exec(sizes);match)percentSizes.push(parseInt(match[2]));if(percentSizes.length){let smallestRatio=.01*Math.min(...percentSizes);return{widths:allSizes.filter(s=>s>=deviceSizes[0]*smallestRatio),kind:"w"}}return{widths:allSizes,kind:"w"}}if("number"!=typeof width)return{widths:deviceSizes,kind:"w"};let widths=[...new Set([width,2*width].map(w=>allSizes.find(p=>p>=w)||allSizes[allSizes.length-1]))];return{widths,kind:"x"}}(config,width,sizes),last=widths.length-1;return{sizes:sizes||"w"!==kind?sizes:"100vw",srcSet:widths.map((w,i)=>"".concat(loader({config,src,quality,width:w})," ").concat("w"===kind?w:i+1).concat(kind)).join(", "),src:loader({config,src,quality,width:widths[last]})}}({config,src:src1,unoptimized,width:widthInt,quality:qualityInt,sizes,loader}),srcString=src1,linkProps={imageSrcSet:imgAttributes.srcSet,imageSizes:imgAttributes.sizes,crossOrigin:rest.crossOrigin},onLoadRef=_react.useRef(onLoad);_react.useEffect(()=>{onLoadRef.current=onLoad},[onLoad]);let onLoadingCompleteRef=_react.useRef(onLoadingComplete);_react.useEffect(()=>{onLoadingCompleteRef.current=onLoadingComplete},[onLoadingComplete]);let imgElementArgs=_extends({isLazy,imgAttributes,heightInt,widthInt,qualityInt,className,imgStyle,blurStyle,loading,config,fill,unoptimized,placeholder,loader,srcString,onLoadRef,onLoadingCompleteRef,setBlurComplete,setShowAltText},rest);return _react.default.createElement(_react.default.Fragment,null,_react.default.createElement(ImageElement,Object.assign({},imgElementArgs)),priority?_react.default.createElement(_head.default,null,_react.default.createElement("link",Object.assign({key:"__nimg-"+imgAttributes.src+imgAttributes.srcSet+imgAttributes.sizes,rel:"preload",as:"image",href:imgAttributes.srcSet?void 0:imgAttributes.src},linkProps))):null)};var _extends=__webpack_require__(6495).Z,_interop_require_default=__webpack_require__(2648).Z,_interop_require_wildcard=__webpack_require__(1598).Z,_object_without_properties_loose=__webpack_require__(7273).Z,_react=_interop_require_wildcard(__webpack_require__(7294)),_head=_interop_require_default(__webpack_require__(3121)),_imageBlurSvg=__webpack_require__(2675),_imageConfig=__webpack_require__(139),_imageConfigContext=__webpack_require__(8730);__webpack_require__(7238);var _imageLoader=_interop_require_default(__webpack_require__(9824));let configEnv={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1};function isStaticRequire(src){return void 0!==src.default}function getInt(x){return"number"==typeof x||void 0===x?x:"string"==typeof x&&/^[0-9]+$/.test(x)?parseInt(x,10):NaN}function handleLoading(img,src,placeholder,onLoadRef,onLoadingCompleteRef,setBlurComplete,unoptimized){if(!img||img["data-loaded-src"]===src)return;img["data-loaded-src"]=src;let p="decode"in img?img.decode():Promise.resolve();p.catch(()=>{}).then(()=>{if(img.parentNode){if("blur"===placeholder&&setBlurComplete(!0),null==onLoadRef?void 0:onLoadRef.current){let event=new Event("load");Object.defineProperty(event,"target",{writable:!1,value:img});let prevented=!1,stopped=!1;onLoadRef.current(_extends({},event,{nativeEvent:event,currentTarget:img,target:img,isDefaultPrevented:()=>prevented,isPropagationStopped:()=>stopped,persist(){},preventDefault(){prevented=!0,event.preventDefault()},stopPropagation(){stopped=!0,event.stopPropagation()}}))}(null==onLoadingCompleteRef?void 0:onLoadingCompleteRef.current)&&onLoadingCompleteRef.current(img)}})}let ImageElement=_param=>{var{imgAttributes,heightInt,widthInt,qualityInt,className,imgStyle,blurStyle,isLazy,fill,placeholder,loading,srcString,config,unoptimized,loader,onLoadRef,onLoadingCompleteRef,setBlurComplete,setShowAltText,onLoad,onError}=_param,rest=_object_without_properties_loose(_param,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return loading=isLazy?"lazy":loading,_react.default.createElement(_react.default.Fragment,null,_react.default.createElement("img",Object.assign({},rest,imgAttributes,{width:widthInt,height:heightInt,decoding:"async","data-nimg":fill?"fill":"1",className:className,loading:loading,style:_extends({},imgStyle,blurStyle),ref:_react.useCallback(img=>{img&&(onError&&(img.src=img.src),img.complete&&handleLoading(img,srcString,placeholder,onLoadRef,onLoadingCompleteRef,setBlurComplete,unoptimized))},[srcString,placeholder,onLoadRef,onLoadingCompleteRef,setBlurComplete,onError,unoptimized]),onLoad(event){let img=event.currentTarget;handleLoading(img,srcString,placeholder,onLoadRef,onLoadingCompleteRef,setBlurComplete,unoptimized)},onError(event){setShowAltText(!0),"blur"===placeholder&&setBlurComplete(!0),onError&&onError(event)}})))};("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},2675:function(__unused_webpack_module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getImageBlurSvg=function(param){let{widthInt,heightInt,blurWidth,blurHeight,blurDataURL}=param,svgWidth=blurWidth||widthInt,svgHeight=blurHeight||heightInt,feComponentTransfer=blurDataURL.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return svgWidth&&svgHeight?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(svgWidth," ").concat(svgHeight,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(blurWidth&&blurHeight?"1":"20","'/%3E").concat(feComponentTransfer,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(blurDataURL,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(blurDataURL,"'/%3E%3C/svg%3E")}},9824:function(__unused_webpack_module,exports){"use strict";function defaultLoader(param){let{config,src,width,quality}=param;return src.endsWith(".svg")&&!config.dangerouslyAllowSVG?src:"".concat(config.path,"?url=").concat(encodeURIComponent(src),"&w=").concat(width,"&q=").concat(quality||75)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,defaultLoader.__next_img_default=!0,exports.default=defaultLoader},4369:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893);__webpack_require__(9008),__webpack_require__(5675);var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7160),_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);__webpack_exports__.default=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex-col ".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().page),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().group),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301262078875163.png"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex-col items-start ".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default()["image-wrapper"]),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().image_2),src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301271613572684.png"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().image_3),src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301272296463094.png"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().image_4),src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301273279447388.png"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().image_5),src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301273308752139.png"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().image_6),src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301274116773754.png"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().image_7),src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301274705731981.png"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().section_2)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().image_8),src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301265289970465.png"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().image_9),src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301274843494980.png"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex-col items-end ".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default()["image-wrapper_2"]),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().image_10),src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301276186330878.png"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().text),children:"Tap"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex-col ".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().group_2," ").concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default()["space-y-8"]),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().text_2),children:"Hello."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex-row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default()["equal-division-item"]),src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301267112885480.png"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default()["equal-division-item"]),src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301268337855859.png"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default()["equal-division-item"]),src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301269072485464.png"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default()["equal-division-item"]),src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301268499283836.png"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().text_3),children:"ミスマッチ研究会ヘようこそ"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().font_1," ").concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().text_4),children:"ミスマッチ研究会改め"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().font_1," ").concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().text_5),children:"“ミス研”とは"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().font_1," ").concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().text_6),children:"一見ミスマッチな食材を"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().font_1," ").concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().text_7),children:"ランダムで合成し"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex-col ".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().group_3," ").concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default()["space-y-11"]),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().font_1," ").concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().text_8),children:"マッチする組み合わせを"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex-col items-center ".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().group_4),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().font_1),children:"日夜研究しているサークルです"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().section_3)})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex-col items-center ".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().group_5," ").concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default()["space-y-26"]),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().font_2," ").concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().text_10),children:"さあ、あなたも"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().font_2," ").concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().text_10),children:"合成してみましょう"})]})]})},7160:function(module){module.exports={font_1:"Home_font_1__n7zFW",font_2:"Home_font_2___qnwl",text_10:"Home_text_10__Xr68y","equal-division-item":"Home_equal-division-item__tgZs3",page:"Home_page__0ydta",group:"Home_group__EwTBz",group_2:"Home_group_2__HN1AG",text_3:"Home_text_3__KWBhd",text_4:"Home_text_4__gmKyU",text_5:"Home_text_5___xI_y",text_6:"Home_text_6__fNT2P",text_7:"Home_text_7__EXnGD",group_3:"Home_group_3__GENM2",group_5:"Home_group_5__wd0fZ",image:"Home_image__yn5pu","image-wrapper":"Home_image-wrapper__ngCWR",image_3:"Home_image_3__YR6Dj",image_4:"Home_image_4__PhyUg",image_5:"Home_image_5__aPbM4",image_6:"Home_image_6__vbx0J",image_7:"Home_image_7__RDjpe",section_2:"Home_section_2__eYbo3",image_8:"Home_image_8__3hU6B",image_9:"Home_image_9__TDv4Z","image-wrapper_2":"Home_image-wrapper_2__Ab1Xx",text:"Home_text__upzyl",text_2:"Home_text_2__P105N",text_8:"Home_text_8__mmSWT",group_4:"Home_group_4__uVv33",image_2:"Home_image_2__hU9a_",image_10:"Home_image_10__wAFx1",section_3:"Home_section_3__EOWrB","space-y-8":"Home_space-y-8__bum2V","space-y-11":"Home_space-y-11__qGG8x","space-y-26":"Home_space-y-26__A2IeV"}},9008:function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__(3121)},5675:function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__(9749)}},function(__webpack_require__){__webpack_require__.O(0,[774,888,179],function(){return __webpack_require__(__webpack_require__.s=5557)}),_N_E=__webpack_require__.O()}]);