(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1006:function(e,t,o){"use strict";o.r(t);o(34);var r=o(296),l=o.n(r),n=o(553),f=o(307),d=o(310),x=(o(518),{components:{HeaderBar:d.a,NavigationBar:f.a},data:function(){return{certificate:{},loading:!0,courseStartDate:"",courseCompleteDate:"",author:"",director:"New School"}},computed:{certificateUrl:function(){return window.location.href}},mounted:function(){var e=this,t=this.$route.params.idCourse,o=this.$route.params.idUser;n.a.pageCertificate(o,t).then((function(t){e.certificate=t.data,e.author=e.convertName(e.certificate.course.authorName),e.courseStartDate=l()(e.certificate.courseStartDate).format("DD/MM/YYYY"),e.courseCompleteDate=l()(e.certificate.courseCompleteDate).format("DD/MM/YYYY"),e.loading=!1,1==e.$route.params.print&&setTimeout((function(){e.download()}),850),0==e.$route.params.print&&(document.getElementById("head__bar").style.visibility="hidden",document.getElementById("navigator").style.display="none")}))},methods:{head:function(){return{meta:[{hid:"og:image",property:"og:image",content:"".concat("https://newschoolapp.com.br","nuxtfiles/backgroundCertificates.svg")}]}},download:function(){window.print()},convertName:function(e){return(e=e.split(" ")).length>2&&(e[1]=e[1].charAt(0)),e.join(" ")}}}),c=(o(760),o(39)),m=o(762),w=o(43),h=o.n(w),v=o(315),k=o(129),component=Object(c.a)(x,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"background"},[r("HeaderBar",{attrs:{title:"CERTIFICADO","back-page":!0}}),e._v(" "),r("v-container",[e.loading?r("div",[r("div",{staticClass:"container-spinner"},[r("v-progress-circular",{attrs:{size:70,width:5,indeterminate:"",color:"#6600cc"}})],1)]):r("div",{staticClass:"card-box"},[r("header",{staticClass:"certificate__title"},[r("h3",{staticClass:"medium__text"},[e._v("CERTIFICADO DE CONCLUSÃO")]),e._v(" "),r("h1",{staticClass:"new_school__bold"},[e._v("NEW SCHOOL")])]),e._v(" "),r("div",{staticClass:"container"},[r("main",{staticClass:"main"},[r("h4",[e._v("CURSO DE "+e._s(e.certificate.course.title.toUpperCase()))]),e._v(" "),r("h4",{staticClass:"medium__text"},[e._v("\n            FINALIZADO NO DIA "+e._s(e.courseCompleteDate)+" COM CARGA HORÁRIA DE\n            "+e._s(e.certificate.course.workload)+"HRS\n          ")])]),e._v(" "),r("main",{staticClass:"main"},[r("h4",{staticClass:"medium__text middle__text"},[e._v("\n            ESTE CERTIFICADO É ORGULHOSAMENTE APRESENTADO PARA\n          ")]),e._v(" "),r("h4",{staticClass:"user"},[e._v("\n            "+e._s(e.certificate.user.name.toUpperCase())+"\n          ")])]),e._v(" "),r("footer",[r("div",{staticClass:"assignature"},[r("div",{staticClass:"professor "},[r("div",{staticClass:"asn"},[r("img",{staticClass:"asn_img",attrs:{src:o(682),alt:""}})]),e._v(" "),r("h6",{staticClass:"medium__text"},[e._v("PROFESSOR")])]),e._v(" "),r("div",{staticClass:"director "},[r("div",{staticClass:"asn"},[r("img",{staticClass:"asn_img",attrs:{src:o(682),alt:""}})]),e._v(" "),r("h6",{staticClass:"medium__text"},[e._v("DIRETORIA")])])]),e._v(" "),r("img",{staticClass:"new__logo",attrs:{src:o(574),alt:""}})])])])]),e._v(" "),r("navigation-bar",{attrs:{id:"navigator"}})],1)}),[],!1,null,"434bcef0",null);"function"==typeof m.default&&Object(m.default)(component);t.default=component.exports;h()(component,{VContainer:v.a,VProgressCircular:k.a})},297:function(e,t,o){var content=o(304);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(29).default)("6f85827c",content,!0,{sourceMap:!1})},298:function(e,t,o){var content=o(306);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(29).default)("f0f029ce",content,!0,{sourceMap:!1})},299:function(e,t,o){var content=o(309);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(29).default)("79745966",content,!0,{sourceMap:!1})},300:function(e,t,o){var content=o(302);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(29).default)("744bab4a",content,!0,{sourceMap:!1})},301:function(e,t,o){"use strict";o.d(t,"a",(function(){return l}));o(73),o(7),o(5),o(13);var r=o(1);function l(e){return r.default.extend({name:"v-".concat(e),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,o){var r=o.props,data=o.data,l=o.children;data.staticClass="".concat(e," ").concat(data.staticClass||"").trim();var n=data.attrs;if(n){data.attrs={};var f=Object.keys(n).filter((function(e){if("slot"===e)return!1;var t=n[e];return e.startsWith("data-")?(data.attrs[e]=t,!1):t||"string"==typeof t}));f.length&&(data.staticClass+=" ".concat(f.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,l)}})}},302:function(e,t,o){(t=o(28)(!1)).push([e.i,".container.grow-shrink-0{-webkit-box-flex:0;flex-grow:0;flex-shrink:0}.container.fill-height{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;flex-wrap:wrap}.container.fill-height>.row{-webkit-box-flex:1;flex:1 1 100%;max-width:100%}.container.fill-height>.layout{height:100%;-webkit-box-flex:1;flex:1 1 auto}.container.fill-height>.layout.grow-shrink-0{-webkit-box-flex:0;flex-grow:0;flex-shrink:0}.container.grid-list-xs .layout .flex{padding:1px}.container.grid-list-xs .layout:only-child{margin:-1px}.container.grid-list-xs .layout:not(:only-child){margin:auto -1px}.container.grid-list-xs :not(:only-child) .layout:first-child{margin-top:-1px}.container.grid-list-xs :not(:only-child) .layout:last-child{margin-bottom:-1px}.container.grid-list-sm .layout .flex{padding:2px}.container.grid-list-sm .layout:only-child{margin:-2px}.container.grid-list-sm .layout:not(:only-child){margin:auto -2px}.container.grid-list-sm :not(:only-child) .layout:first-child{margin-top:-2px}.container.grid-list-sm :not(:only-child) .layout:last-child{margin-bottom:-2px}.container.grid-list-md .layout .flex{padding:4px}.container.grid-list-md .layout:only-child{margin:-4px}.container.grid-list-md .layout:not(:only-child){margin:auto -4px}.container.grid-list-md :not(:only-child) .layout:first-child{margin-top:-4px}.container.grid-list-md :not(:only-child) .layout:last-child{margin-bottom:-4px}.container.grid-list-lg .layout .flex{padding:8px}.container.grid-list-lg .layout:only-child{margin:-8px}.container.grid-list-lg .layout:not(:only-child){margin:auto -8px}.container.grid-list-lg :not(:only-child) .layout:first-child{margin-top:-8px}.container.grid-list-lg :not(:only-child) .layout:last-child{margin-bottom:-8px}.container.grid-list-xl .layout .flex{padding:12px}.container.grid-list-xl .layout:only-child{margin:-12px}.container.grid-list-xl .layout:not(:only-child){margin:auto -12px}.container.grid-list-xl :not(:only-child) .layout:first-child{margin-top:-12px}.container.grid-list-xl :not(:only-child) .layout:last-child{margin-bottom:-12px}.layout{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1 1 auto;flex-wrap:nowrap;min-width:0}.layout.reverse{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;flex-direction:row-reverse}.layout.column{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.layout.column.reverse{-webkit-box-orient:vertical;-webkit-box-direction:reverse;flex-direction:column-reverse}.layout.column>.flex{max-width:100%}.layout.wrap{flex-wrap:wrap}.layout.grow-shrink-0{-webkit-box-flex:0;flex-grow:0;flex-shrink:0}@media (min-width:0){.flex.xs12{flex-basis:100%;-webkit-box-flex:0;flex-grow:0;max-width:100%}.flex.order-xs12{-webkit-box-ordinal-group:13;order:12}.flex.xs11{flex-basis:91.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:91.6666666667%}.flex.order-xs11{-webkit-box-ordinal-group:12;order:11}.flex.xs10{flex-basis:83.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:83.3333333333%}.flex.order-xs10{-webkit-box-ordinal-group:11;order:10}.flex.xs9{flex-basis:75%;-webkit-box-flex:0;flex-grow:0;max-width:75%}.flex.order-xs9{-webkit-box-ordinal-group:10;order:9}.flex.xs8{flex-basis:66.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:66.6666666667%}.flex.order-xs8{-webkit-box-ordinal-group:9;order:8}.flex.xs7{flex-basis:58.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:58.3333333333%}.flex.order-xs7{-webkit-box-ordinal-group:8;order:7}.flex.xs6{flex-basis:50%;-webkit-box-flex:0;flex-grow:0;max-width:50%}.flex.order-xs6{-webkit-box-ordinal-group:7;order:6}.flex.xs5{flex-basis:41.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:41.6666666667%}.flex.order-xs5{-webkit-box-ordinal-group:6;order:5}.flex.xs4{flex-basis:33.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:33.3333333333%}.flex.order-xs4{-webkit-box-ordinal-group:5;order:4}.flex.xs3{flex-basis:25%;-webkit-box-flex:0;flex-grow:0;max-width:25%}.flex.order-xs3{-webkit-box-ordinal-group:4;order:3}.flex.xs2{flex-basis:16.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:16.6666666667%}.flex.order-xs2{-webkit-box-ordinal-group:3;order:2}.flex.xs1{flex-basis:8.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:8.3333333333%}.flex.order-xs1{-webkit-box-ordinal-group:2;order:1}.flex.offset-xs12{margin-left:100%}.flex.offset-xs11{margin-left:91.6666666667%}.flex.offset-xs10{margin-left:83.3333333333%}.flex.offset-xs9{margin-left:75%}.flex.offset-xs8{margin-left:66.6666666667%}.flex.offset-xs7{margin-left:58.3333333333%}.flex.offset-xs6{margin-left:50%}.flex.offset-xs5{margin-left:41.6666666667%}.flex.offset-xs4{margin-left:33.3333333333%}.flex.offset-xs3{margin-left:25%}.flex.offset-xs2{margin-left:16.6666666667%}.flex.offset-xs1{margin-left:8.3333333333%}.flex.offset-xs0{margin-left:0}}@media (min-width:600px){.flex.sm12{flex-basis:100%;-webkit-box-flex:0;flex-grow:0;max-width:100%}.flex.order-sm12{-webkit-box-ordinal-group:13;order:12}.flex.sm11{flex-basis:91.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:91.6666666667%}.flex.order-sm11{-webkit-box-ordinal-group:12;order:11}.flex.sm10{flex-basis:83.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:83.3333333333%}.flex.order-sm10{-webkit-box-ordinal-group:11;order:10}.flex.sm9{flex-basis:75%;-webkit-box-flex:0;flex-grow:0;max-width:75%}.flex.order-sm9{-webkit-box-ordinal-group:10;order:9}.flex.sm8{flex-basis:66.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:66.6666666667%}.flex.order-sm8{-webkit-box-ordinal-group:9;order:8}.flex.sm7{flex-basis:58.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:58.3333333333%}.flex.order-sm7{-webkit-box-ordinal-group:8;order:7}.flex.sm6{flex-basis:50%;-webkit-box-flex:0;flex-grow:0;max-width:50%}.flex.order-sm6{-webkit-box-ordinal-group:7;order:6}.flex.sm5{flex-basis:41.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:41.6666666667%}.flex.order-sm5{-webkit-box-ordinal-group:6;order:5}.flex.sm4{flex-basis:33.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:33.3333333333%}.flex.order-sm4{-webkit-box-ordinal-group:5;order:4}.flex.sm3{flex-basis:25%;-webkit-box-flex:0;flex-grow:0;max-width:25%}.flex.order-sm3{-webkit-box-ordinal-group:4;order:3}.flex.sm2{flex-basis:16.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:16.6666666667%}.flex.order-sm2{-webkit-box-ordinal-group:3;order:2}.flex.sm1{flex-basis:8.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:8.3333333333%}.flex.order-sm1{-webkit-box-ordinal-group:2;order:1}.flex.offset-sm12{margin-left:100%}.flex.offset-sm11{margin-left:91.6666666667%}.flex.offset-sm10{margin-left:83.3333333333%}.flex.offset-sm9{margin-left:75%}.flex.offset-sm8{margin-left:66.6666666667%}.flex.offset-sm7{margin-left:58.3333333333%}.flex.offset-sm6{margin-left:50%}.flex.offset-sm5{margin-left:41.6666666667%}.flex.offset-sm4{margin-left:33.3333333333%}.flex.offset-sm3{margin-left:25%}.flex.offset-sm2{margin-left:16.6666666667%}.flex.offset-sm1{margin-left:8.3333333333%}.flex.offset-sm0{margin-left:0}}@media (min-width:960px){.flex.md12{flex-basis:100%;-webkit-box-flex:0;flex-grow:0;max-width:100%}.flex.order-md12{-webkit-box-ordinal-group:13;order:12}.flex.md11{flex-basis:91.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:91.6666666667%}.flex.order-md11{-webkit-box-ordinal-group:12;order:11}.flex.md10{flex-basis:83.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:83.3333333333%}.flex.order-md10{-webkit-box-ordinal-group:11;order:10}.flex.md9{flex-basis:75%;-webkit-box-flex:0;flex-grow:0;max-width:75%}.flex.order-md9{-webkit-box-ordinal-group:10;order:9}.flex.md8{flex-basis:66.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:66.6666666667%}.flex.order-md8{-webkit-box-ordinal-group:9;order:8}.flex.md7{flex-basis:58.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:58.3333333333%}.flex.order-md7{-webkit-box-ordinal-group:8;order:7}.flex.md6{flex-basis:50%;-webkit-box-flex:0;flex-grow:0;max-width:50%}.flex.order-md6{-webkit-box-ordinal-group:7;order:6}.flex.md5{flex-basis:41.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:41.6666666667%}.flex.order-md5{-webkit-box-ordinal-group:6;order:5}.flex.md4{flex-basis:33.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:33.3333333333%}.flex.order-md4{-webkit-box-ordinal-group:5;order:4}.flex.md3{flex-basis:25%;-webkit-box-flex:0;flex-grow:0;max-width:25%}.flex.order-md3{-webkit-box-ordinal-group:4;order:3}.flex.md2{flex-basis:16.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:16.6666666667%}.flex.order-md2{-webkit-box-ordinal-group:3;order:2}.flex.md1{flex-basis:8.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:8.3333333333%}.flex.order-md1{-webkit-box-ordinal-group:2;order:1}.flex.offset-md12{margin-left:100%}.flex.offset-md11{margin-left:91.6666666667%}.flex.offset-md10{margin-left:83.3333333333%}.flex.offset-md9{margin-left:75%}.flex.offset-md8{margin-left:66.6666666667%}.flex.offset-md7{margin-left:58.3333333333%}.flex.offset-md6{margin-left:50%}.flex.offset-md5{margin-left:41.6666666667%}.flex.offset-md4{margin-left:33.3333333333%}.flex.offset-md3{margin-left:25%}.flex.offset-md2{margin-left:16.6666666667%}.flex.offset-md1{margin-left:8.3333333333%}.flex.offset-md0{margin-left:0}}@media (min-width:1264px){.flex.lg12{flex-basis:100%;-webkit-box-flex:0;flex-grow:0;max-width:100%}.flex.order-lg12{-webkit-box-ordinal-group:13;order:12}.flex.lg11{flex-basis:91.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:91.6666666667%}.flex.order-lg11{-webkit-box-ordinal-group:12;order:11}.flex.lg10{flex-basis:83.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:83.3333333333%}.flex.order-lg10{-webkit-box-ordinal-group:11;order:10}.flex.lg9{flex-basis:75%;-webkit-box-flex:0;flex-grow:0;max-width:75%}.flex.order-lg9{-webkit-box-ordinal-group:10;order:9}.flex.lg8{flex-basis:66.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:66.6666666667%}.flex.order-lg8{-webkit-box-ordinal-group:9;order:8}.flex.lg7{flex-basis:58.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:58.3333333333%}.flex.order-lg7{-webkit-box-ordinal-group:8;order:7}.flex.lg6{flex-basis:50%;-webkit-box-flex:0;flex-grow:0;max-width:50%}.flex.order-lg6{-webkit-box-ordinal-group:7;order:6}.flex.lg5{flex-basis:41.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:41.6666666667%}.flex.order-lg5{-webkit-box-ordinal-group:6;order:5}.flex.lg4{flex-basis:33.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:33.3333333333%}.flex.order-lg4{-webkit-box-ordinal-group:5;order:4}.flex.lg3{flex-basis:25%;-webkit-box-flex:0;flex-grow:0;max-width:25%}.flex.order-lg3{-webkit-box-ordinal-group:4;order:3}.flex.lg2{flex-basis:16.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:16.6666666667%}.flex.order-lg2{-webkit-box-ordinal-group:3;order:2}.flex.lg1{flex-basis:8.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:8.3333333333%}.flex.order-lg1{-webkit-box-ordinal-group:2;order:1}.flex.offset-lg12{margin-left:100%}.flex.offset-lg11{margin-left:91.6666666667%}.flex.offset-lg10{margin-left:83.3333333333%}.flex.offset-lg9{margin-left:75%}.flex.offset-lg8{margin-left:66.6666666667%}.flex.offset-lg7{margin-left:58.3333333333%}.flex.offset-lg6{margin-left:50%}.flex.offset-lg5{margin-left:41.6666666667%}.flex.offset-lg4{margin-left:33.3333333333%}.flex.offset-lg3{margin-left:25%}.flex.offset-lg2{margin-left:16.6666666667%}.flex.offset-lg1{margin-left:8.3333333333%}.flex.offset-lg0{margin-left:0}}@media (min-width:1904px){.flex.xl12{flex-basis:100%;-webkit-box-flex:0;flex-grow:0;max-width:100%}.flex.order-xl12{-webkit-box-ordinal-group:13;order:12}.flex.xl11{flex-basis:91.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:91.6666666667%}.flex.order-xl11{-webkit-box-ordinal-group:12;order:11}.flex.xl10{flex-basis:83.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:83.3333333333%}.flex.order-xl10{-webkit-box-ordinal-group:11;order:10}.flex.xl9{flex-basis:75%;-webkit-box-flex:0;flex-grow:0;max-width:75%}.flex.order-xl9{-webkit-box-ordinal-group:10;order:9}.flex.xl8{flex-basis:66.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:66.6666666667%}.flex.order-xl8{-webkit-box-ordinal-group:9;order:8}.flex.xl7{flex-basis:58.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:58.3333333333%}.flex.order-xl7{-webkit-box-ordinal-group:8;order:7}.flex.xl6{flex-basis:50%;-webkit-box-flex:0;flex-grow:0;max-width:50%}.flex.order-xl6{-webkit-box-ordinal-group:7;order:6}.flex.xl5{flex-basis:41.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:41.6666666667%}.flex.order-xl5{-webkit-box-ordinal-group:6;order:5}.flex.xl4{flex-basis:33.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:33.3333333333%}.flex.order-xl4{-webkit-box-ordinal-group:5;order:4}.flex.xl3{flex-basis:25%;-webkit-box-flex:0;flex-grow:0;max-width:25%}.flex.order-xl3{-webkit-box-ordinal-group:4;order:3}.flex.xl2{flex-basis:16.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:16.6666666667%}.flex.order-xl2{-webkit-box-ordinal-group:3;order:2}.flex.xl1{flex-basis:8.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:8.3333333333%}.flex.order-xl1{-webkit-box-ordinal-group:2;order:1}.flex.offset-xl12{margin-left:100%}.flex.offset-xl11{margin-left:91.6666666667%}.flex.offset-xl10{margin-left:83.3333333333%}.flex.offset-xl9{margin-left:75%}.flex.offset-xl8{margin-left:66.6666666667%}.flex.offset-xl7{margin-left:58.3333333333%}.flex.offset-xl6{margin-left:50%}.flex.offset-xl5{margin-left:41.6666666667%}.flex.offset-xl4{margin-left:33.3333333333%}.flex.offset-xl3{margin-left:25%}.flex.offset-xl2{margin-left:16.6666666667%}.flex.offset-xl1{margin-left:8.3333333333%}.flex.offset-xl0{margin-left:0}}.child-flex>*,.flex{-webkit-box-flex:1;flex:1 1 auto;max-width:100%}.child-flex>.grow-shrink-0,.flex.grow-shrink-0{-webkit-box-flex:0;flex-grow:0;flex-shrink:0}.grow,.spacer{-webkit-box-flex:1!important;flex-grow:1!important}.grow{flex-shrink:0!important}.shrink{-webkit-box-flex:0!important;flex-grow:0!important;flex-shrink:1!important}.fill-height{height:100%}",""]),e.exports=t},303:function(e,t,o){"use strict";var r=o(297);o.n(r).a},304:function(e,t,o){(t=o(28)(!1)).push([e.i,".container-page[data-v-79c0d9d2]{z-index:2}#btnLogout[data-v-79c0d9d2]{margin-top:5px}.mdi-close-circle[data-v-79c0d9d2]:before{color:var(--primary);position:absolute;right:22px;top:33px}.container-page>main[data-v-79c0d9d2]{-webkit-box-pack:justify;justify-content:space-between;padding:.5rem;margin-top:1rem;width:100%}#info[data-v-79c0d9d2],.container-page>main[data-v-79c0d9d2]{display:-webkit-box;display:flex}#avatar[data-v-79c0d9d2]{margin-right:1rem}.text-menu[data-v-79c0d9d2]{text-transform:uppercase}.mdi-library-books[data-v-79c0d9d2]:before{content:url(https://api.iconify.design/mdi-library-books.svg?color=rgb%28105%2C0%2C204%29&height=24);vertical-align:-.125em}h1[data-v-79c0d9d2]{font-size:1rem;font-weight:500;color:#000;text-transform:capitalize}.menu-list[data-v-79c0d9d2]{max-width:500px}.container-page[data-v-79c0d9d2]{background-color:#fff;position:fixed;width:100%;height:100%;top:0;left:0}.row[data-v-79c0d9d2]{margin-left:0}#close-btn[data-v-79c0d9d2]{cursor:pointer;font-size:30px}#flex-info-user[data-v-79c0d9d2]{-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:baseline;align-items:baseline}.flex-center[data-v-79c0d9d2]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.border-profile-photo[data-v-79c0d9d2]{height:95px;width:95px;border:1px solid #60c;border-radius:50px}.profile-container[data-v-79c0d9d2]{width:85px;height:85px;border-radius:50px;overflow:hidden}.profile-container img[data-v-79c0d9d2]{width:100%}.item-menu[data-v-79c0d9d2]{width:100%;padding:13px;border-bottom:1px solid #e8e8e8;-webkit-box-align:center;align-items:center;color:var(--primary)!important;cursor:pointer}.item-menu[data-v-79c0d9d2],.item-menu div[data-v-79c0d9d2]{display:-webkit-box;display:flex}.item-menu div[data-v-79c0d9d2]{width:50px;-webkit-box-pack:center;justify-content:center;margin-right:2rem}.item-menu[data-v-79c0d9d2]:hover{background-color:#e8d1ff}.col-flex-center[data-v-79c0d9d2]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:baseline;align-items:baseline}p[data-v-79c0d9d2]{margin-bottom:0!important}h4[data-v-79c0d9d2]{font-weight:600}@media(min-width:600px){#info[data-v-79c0d9d2],.menu-list[data-v-79c0d9d2]{margin:0 auto}}",""]),e.exports=t},305:function(e,t,o){"use strict";var r=o(298);o.n(r).a},306:function(e,t,o){(t=o(28)(!1)).push([e.i,"[data-v-7d2ee64a] .v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.v-icon[data-v-7d2ee64a]{margin-right:0!important;padding-top:5px}#page[data-v-7d2ee64a]{margin-bottom:5rem!important}.btn-fixed[data-v-7d2ee64a]{height:100%!important}.intro-transition[data-v-7d2ee64a]{-webkit-animation-name:intro;animation-name:intro;-webkit-animation-duration:.2s;animation-duration:.2s}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content{color:var(--primary)}.mdi-library[data-v-7d2ee64a]:before{content:url(https://api.iconify.design/ic:outline-local-library.svg?color=rgb%28112%2C112%2C112%29&height=24);vertical-align:-.125em}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content .mdi-library:before{content:url(https://api.iconify.design/ic:outline-local-library.svg?color=rgb%28102%2C0%2C204%29&height=24);vertical-align:-.125em}span[data-v-7d2ee64a]{font-size:8px;font-weight:400;color:#737373;margin-top:5px}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content span{color:var(--primary)}@media (max-width:375px){.v-btn[data-v-7d2ee64a]{min-width:55px!important;font-size:.6rem!important}}@media (max-width:415px){.v-btn[data-v-7d2ee64a]{font-size:.65rem!important}}.remove-certificates[data-v-7d2ee64a]{display:none}",""]),e.exports=t},307:function(e,t,o){"use strict";o(189),o(23),o(11),o(7),o(13),o(34),o(5);var r=o(4),l=o(311),n=o.n(l),f=o(110),d=o(109);function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={data:function(){return{menu:[{id:1,label:"Meu Perfil",icon:"mdi-account",link:"/aluno/perfil"},{id:2,label:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:3,label:"Meus Certificados",icon:"mdi-school",link:"/aluno/certificados"},{id:4,label:"Cola com Nóix",icon:"mdi-gesture-double-tap",link:"/contribua"},{id:5,label:"O que é a new school?",icon:"mdi-library-books",link:"/sobre"},{id:7,label:"Fale com a gente",icon:"mdi-phone-message-outline",link:"/contato"},{id:8,label:"Apoie a new school",icon:"mdi-volume-high",link:"/construindo"},{id:9,label:"Ranking",icon:"mdi-trophy",link:"/aluno/ranking"}]}},methods:c(c({},Object(f.b)("user",["clearInfoUser"])),{},{closeMenu:function(){document.getElementById("menu-btn").click()},logout:function(){var e=this;this.logoutSocial().then((function(){$nuxt._router.push("/login"),localStorage.clear(),e.clearInfoUser()}))},pushAdminOnlyOptions:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[1].link="/admin/listar-cursos",this.menu.push({id:9,label:"Dashboard",icon:"mdi-chart-bar",link:"/admin/dashboard"}))},logoutSocial:function(){return this.$auth.loggedIn?this.$auth.logout():Promise.resolve()}}),computed:{user:function(){return this.$store.state.user.data}},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.pushAdminOnlyOptions())},filters:{simplifyName:function(e){if(!e)return"";return e.split(" ").length>2?/^(\S*\s+\S+).*/.exec(e)[1]:e}},components:{Avatar:n.a}},w=(o(303),o(39)),h=o(43),v=o.n(h),k=o(289),y=o(288),component=Object(w.a)(m,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container-page",attrs:{id:"page"}},[o("main",[o("section",{attrs:{id:"info"}},[o("div",{attrs:{id:"avatar"}},[o("div",{staticClass:"flex-center border-profile-photo"},[o("div",{staticClass:"flex-center profile-container"},[e.user.photo?o("img",{attrs:{src:e.user.photo}}):o("avatar",{attrs:{username:e._f("simplifyName")(e.user.name),size:90}})],1)])]),e._v(" "),o("div",{staticClass:"flex-center",attrs:{id:"flex-info-user"}},[o("h1",[e._v(e._s(e.user.name))]),e._v(" "),o("p",[e._v(e._s(e.user.type))]),e._v(" "),o("v-btn",{attrs:{id:"btnLogout",small:"",outlined:"",color:"error",width:"80px"},on:{click:e.logout}},[e._v("Sair")])],1),e._v(" "),o("div",{attrs:{id:"close"}},[o("v-icon",{attrs:{id:"close-btn",color:"primary"},on:{click:function(t){return e.closeMenu()}}},[e._v("mdi-close-circle")])],1)])]),e._v(" "),o("section",{staticClass:"menu-list"},e._l(e.menu,(function(t){return o("router-link",{key:t.id,staticClass:"item-menu",attrs:{tag:"div",to:t.link},nativeOn:{click:function(t){return e.closeMenu()}}},[o("div",[o("v-icon",{attrs:{color:"primary"}},[e._v(e._s(t.icon))])],1),e._v(" "),o("p",{staticClass:"text-menu"},[e._v(e._s(t.label))])])})),1)])}),[],!1,null,"79c0d9d2",null),j=component.exports;v()(component,{VBtn:k.a,VIcon:y.a});var _={components:{SideMenu:j},data:function(){return{viewMenu:!1,auth:!1,menu:[{id:1,name:"Início",icon:"mdi-home-outline",link:"/aluno/home"},{id:2,name:"Perfil",icon:"mdi-account-outline",link:"/aluno/perfil"},{id:3,name:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:4,name:"Certificados",icon:"mdi-school-outline",link:"/aluno/certificados",class:""}]}},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},methods:{setViewMenu:function(){this.viewMenu=!this.viewMenu},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[0].link="/admin/home",this.menu[1].link="/admin/perfil",this.menu[2].link="/admin/listar-cursos",this.menu[3].link="/admin/certificados")}}},C=(o(305),o(1032)),O=Object(w.a)(_,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.auth?o("div",[o("side-menu",{directives:[{name:"show",rawName:"v-show",value:e.viewMenu,expression:"viewMenu"}],staticClass:"intro-transition"}),e._v(" "),o("v-bottom-navigation",{attrs:{"scroll-target":"#page",fixed:"","scroll-threshold":"500",color:"write",horizontal:""}},[e._l(e.menu,(function(t){return o("v-btn",{key:t.id,staticClass:"btn-fixed menu__bottom",class:t.class,attrs:{to:t.link},on:{click:function(t){e.viewMenu=!1}}},[o("span",[e._v(e._s(t.name))]),e._v(" "),o("v-icon",[e._v(e._s(t.icon))])],1)})),e._v(" "),o("v-btn",{staticClass:"btn-fixed",attrs:{id:"menu-btn"},on:{click:e.setViewMenu}},[o("span",[e._v("Outros")]),e._v(" "),o("v-icon",[e._v("mdi-apps")])],1)],2)],1):e._e()}),[],!1,null,"7d2ee64a",null);t.a=O.exports;v()(O,{VBottomNavigation:C.a,VBtn:k.a,VIcon:y.a})},308:function(e,t,o){"use strict";var r=o(299);o.n(r).a},309:function(e,t,o){(t=o(28)(!1)).push([e.i,"*[data-v-7719e329]{font-family:Roboto,sans-serif}.h1__theme[data-v-7719e329]{font-size:1rem;line-height:1.2;font-weight:900;text-align:center;padding:0 2.5rem!important}#head__bar[data-v-7719e329]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;padding:1.5rem 0;position:relative;-webkit-box-align:center;align-items:center;background:transparent}[data-v-7719e329] .btn-back .theme--light.v-icon{color:var(--primary);font-size:35px}[data-v-7719e329] .btn-back{position:absolute;left:1rem}",""]),e.exports=t},310:function(e,t,o){"use strict";var r={props:["title","backPage","route"],methods:{comeBackPage:function(){this.route?this.$router.push(this.route):this.$router.back()}}},l=(o(308),o(39)),n=o(43),f=o.n(n),d=o(289),x=o(288),component=Object(l.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"head__bar"}},[t("v-btn",{staticClass:"btn-back",attrs:{text:"",icon:""},on:{click:this.comeBackPage}},[t("v-icon",[this._v("mdi-arrow-left")])],1),this._v(" "),t("h1",{staticClass:"h1__theme"},[this._v(this._s(this.title))])],1)}),[],!1,null,"7719e329",null);t.a=component.exports;f()(component,{VBtn:d.a,VIcon:x.a})},315:function(e,t,o){"use strict";o(73),o(7),o(5),o(13),o(300),o(190);var r=o(301),l=o(135);t.a=Object(r.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(e,t){var o,r=t.props,data=t.data,n=t.children,f=data.attrs;return f&&(data.attrs={},o=Object.keys(f).filter((function(e){if("slot"===e)return!1;var t=f[e];return e.startsWith("data-")?(data.attrs[e]=t,!1):t||"string"==typeof t}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),e(r.tag,Object(l.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(o||[])}),n)}})},352:function(e,t,o){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},518:function(e,t,o){e.exports=o.p+"img/8b7821e.svg"},553:function(e,t,o){"use strict";var r=o(32),l=o(25);t.a={pageCertificate:function(e,t){return l.a.getExternalCredentials().then((function(o){return r.a.get("".concat("api/v2/course-taken/certificate/user/").concat(e,"/course/").concat(t),{headers:{Authorization:"Bearer ".concat(o.data.accessToken)}})}))}}},574:function(e,t,o){e.exports=o.p+"img/7857f17.svg"},575:function(e,t,o){var content=o(761);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(29).default)("31eb7429",content,!0,{sourceMap:!1})},576:function(e,t){},680:function(e,t,o){var map={"./af":385,"./af.js":385,"./ar":386,"./ar-dz":387,"./ar-dz.js":387,"./ar-kw":388,"./ar-kw.js":388,"./ar-ly":389,"./ar-ly.js":389,"./ar-ma":390,"./ar-ma.js":390,"./ar-sa":391,"./ar-sa.js":391,"./ar-tn":392,"./ar-tn.js":392,"./ar.js":386,"./az":393,"./az.js":393,"./be":394,"./be.js":394,"./bg":395,"./bg.js":395,"./bm":396,"./bm.js":396,"./bn":397,"./bn.js":397,"./bo":398,"./bo.js":398,"./br":399,"./br.js":399,"./bs":400,"./bs.js":400,"./ca":401,"./ca.js":401,"./cs":402,"./cs.js":402,"./cv":403,"./cv.js":403,"./cy":404,"./cy.js":404,"./da":405,"./da.js":405,"./de":406,"./de-at":407,"./de-at.js":407,"./de-ch":408,"./de-ch.js":408,"./de.js":406,"./dv":409,"./dv.js":409,"./el":410,"./el.js":410,"./en-SG":411,"./en-SG.js":411,"./en-au":412,"./en-au.js":412,"./en-ca":413,"./en-ca.js":413,"./en-gb":414,"./en-gb.js":414,"./en-ie":415,"./en-ie.js":415,"./en-il":416,"./en-il.js":416,"./en-nz":417,"./en-nz.js":417,"./eo":418,"./eo.js":418,"./es":419,"./es-do":420,"./es-do.js":420,"./es-us":421,"./es-us.js":421,"./es.js":419,"./et":422,"./et.js":422,"./eu":423,"./eu.js":423,"./fa":424,"./fa.js":424,"./fi":425,"./fi.js":425,"./fo":426,"./fo.js":426,"./fr":427,"./fr-ca":428,"./fr-ca.js":428,"./fr-ch":429,"./fr-ch.js":429,"./fr.js":427,"./fy":430,"./fy.js":430,"./ga":431,"./ga.js":431,"./gd":432,"./gd.js":432,"./gl":433,"./gl.js":433,"./gom-latn":434,"./gom-latn.js":434,"./gu":435,"./gu.js":435,"./he":436,"./he.js":436,"./hi":437,"./hi.js":437,"./hr":438,"./hr.js":438,"./hu":439,"./hu.js":439,"./hy-am":440,"./hy-am.js":440,"./id":441,"./id.js":441,"./is":442,"./is.js":442,"./it":443,"./it-ch":444,"./it-ch.js":444,"./it.js":443,"./ja":445,"./ja.js":445,"./jv":446,"./jv.js":446,"./ka":447,"./ka.js":447,"./kk":448,"./kk.js":448,"./km":449,"./km.js":449,"./kn":450,"./kn.js":450,"./ko":451,"./ko.js":451,"./ku":452,"./ku.js":452,"./ky":453,"./ky.js":453,"./lb":454,"./lb.js":454,"./lo":455,"./lo.js":455,"./lt":456,"./lt.js":456,"./lv":457,"./lv.js":457,"./me":458,"./me.js":458,"./mi":459,"./mi.js":459,"./mk":460,"./mk.js":460,"./ml":461,"./ml.js":461,"./mn":462,"./mn.js":462,"./mr":463,"./mr.js":463,"./ms":464,"./ms-my":465,"./ms-my.js":465,"./ms.js":464,"./mt":466,"./mt.js":466,"./my":467,"./my.js":467,"./nb":468,"./nb.js":468,"./ne":469,"./ne.js":469,"./nl":470,"./nl-be":471,"./nl-be.js":471,"./nl.js":470,"./nn":472,"./nn.js":472,"./pa-in":473,"./pa-in.js":473,"./pl":474,"./pl.js":474,"./pt":475,"./pt-br":476,"./pt-br.js":476,"./pt.js":475,"./ro":477,"./ro.js":477,"./ru":478,"./ru.js":478,"./sd":479,"./sd.js":479,"./se":480,"./se.js":480,"./si":481,"./si.js":481,"./sk":482,"./sk.js":482,"./sl":483,"./sl.js":483,"./sq":484,"./sq.js":484,"./sr":485,"./sr-cyrl":486,"./sr-cyrl.js":486,"./sr.js":485,"./ss":487,"./ss.js":487,"./sv":488,"./sv.js":488,"./sw":489,"./sw.js":489,"./ta":490,"./ta.js":490,"./te":491,"./te.js":491,"./tet":492,"./tet.js":492,"./tg":493,"./tg.js":493,"./th":494,"./th.js":494,"./tl-ph":495,"./tl-ph.js":495,"./tlh":496,"./tlh.js":496,"./tr":497,"./tr.js":497,"./tzl":498,"./tzl.js":498,"./tzm":499,"./tzm-latn":500,"./tzm-latn.js":500,"./tzm.js":499,"./ug-cn":501,"./ug-cn.js":501,"./uk":502,"./uk.js":502,"./ur":503,"./ur.js":503,"./uz":504,"./uz-latn":505,"./uz-latn.js":505,"./uz.js":504,"./vi":506,"./vi.js":506,"./x-pseudo":507,"./x-pseudo.js":507,"./yo":508,"./yo.js":508,"./zh-cn":509,"./zh-cn.js":509,"./zh-hk":510,"./zh-hk.js":510,"./zh-tw":511,"./zh-tw.js":511};function r(e){var t=l(e);return o(t)}function l(e){if(!o.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=l,e.exports=r,r.id=680},682:function(e,t,o){e.exports=o.p+"img/0a51b45.png"},760:function(e,t,o){"use strict";var r=o(575);o.n(r).a},761:function(e,t,o){var r=o(28),l=o(352),n=o(518);t=r(!1);var f=l(n);t.push([e.i,"*[data-v-434bcef0]{padding:0;outline:0;box-sizing:border-box}h3[data-v-434bcef0],h4[data-v-434bcef0]{color:#000!important}.background[data-v-434bcef0]{background:url("+f+");background-repeat:no-repeat;background-size:cover;position:fixed;height:100%;width:100%;margin:0 auto}.card-box[data-v-434bcef0]{margin-left:5%}.medium__text[data-v-434bcef0]{font-size:16px;line-height:20px;font-weight:400;text-align:left}.certificate__title .new_school__bold[data-v-434bcef0]{font-weight:700;color:var(--primary)}.btn-block[data-v-434bcef0],.btn-white[data-v-434bcef0]{margin:5% 10%}.main[data-v-434bcef0]{width:85%;margin:4% 0 5%;font-size:16px}.main .middle__text[data-v-434bcef0]{font-size:14px}.user[data-v-434bcef0]{font-size:16px}.icon[data-v-434bcef0]{height:35px;width:35px;margin-left:20px;margin-top:10px;background-color:rgba(112,16,207,.1);display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;text-align:center;text-transform:uppercase;font-size:8px;color:var(--primary);line-height:10px;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.new__logo[data-v-434bcef0]{display:none}.assignature[data-v-434bcef0]{margin-top:-55px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.assignature .director[data-v-434bcef0],.assignature .professor[data-v-434bcef0]{width:50%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:start;align-items:flex-start}.assignature .asn[data-v-434bcef0]{border-bottom:1px solid #000;width:75%}.asn_img[data-v-434bcef0]{width:91px;height:192px;margin-left:26px;margin-bottom:-80px}h6[data-v-434bcef0]{font-size:12px!important;margin-top:2%}@media(min-width:700px){.icon[data-v-434bcef0]{display:none}.certificate__title[data-v-434bcef0]{margin-top:3%}.certificate__title .new_school__bold[data-v-434bcef0]{font-size:75px}.main[data-v-434bcef0],.medium__text[data-v-434bcef0]{font-size:25px}.main .middle__text[data-v-434bcef0]{font-size:20px}.user[data-v-434bcef0]{font-size:25px}.assignature[data-v-434bcef0]{-webkit-box-pack:start;justify-content:flex-start}.asn_img[data-v-434bcef0]{width:150px;height:250px;margin-left:20px;margin-bottom:-110px}.new__logo[data-v-434bcef0]{width:200px;height:200px;display:block;position:absolute;right:35px;bottom:0}#head__bar[data-v-434bcef0],[data-v-434bcef0] .v-item-group.v-bottom-navigation--fixed{display:none}.assignature .director[data-v-434bcef0],.assignature .professor[data-v-434bcef0]{width:30%}.background[data-v-434bcef0]{border:20px solid #60c}}@media print{@page{margin:0;size:landscape}.icon[data-v-434bcef0]{display:none}.certificate__title[data-v-434bcef0]{margin-top:3%}.certificate__title .new_school__bold[data-v-434bcef0]{font-size:75px}.main[data-v-434bcef0],.medium__text[data-v-434bcef0]{font-size:25px}.main .middle__text[data-v-434bcef0]{font-size:20px}.user[data-v-434bcef0]{font-size:25px}.assignature[data-v-434bcef0]{-webkit-box-pack:start;justify-content:flex-start}.asn_img[data-v-434bcef0]{width:150px;height:250px;margin-left:20px;margin-bottom:-110px}.new__logo[data-v-434bcef0]{width:200px;height:200px;display:block;position:absolute;right:35px;bottom:0}#head__bar[data-v-434bcef0],[data-v-434bcef0] .v-item-group.v-bottom-navigation--fixed{display:none}.assignature .director[data-v-434bcef0],.assignature .professor[data-v-434bcef0]{width:30%}.background[data-v-434bcef0]{border:20px solid #60c}}",""]),e.exports=t},762:function(e,t,o){"use strict";var r=o(576),l=o.n(r);t.default=l.a}}]);