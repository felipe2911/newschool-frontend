(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{289:function(t,e,n){var content=n(295);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("2f3fcffa",content,!0,{sourceMap:!1})},290:function(t,e,n){var content=n(297);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("f0f029ce",content,!0,{sourceMap:!1})},291:function(t,e,n){var content=n(300);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("0557587d",content,!0,{sourceMap:!1})},292:function(t,e,n){"use strict";n(184),n(26),n(11),n(7),n(16),n(36),n(5);var o=n(3),r=n(302),c=n.n(r),l=n(111),d=n(110);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{menu:[{id:1,label:"Meu Perfil",icon:"mdi-account",link:"/aluno/perfil"},{id:2,label:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:3,label:"Meus Certificados",icon:"mdi-school",link:"/aluno/certificados"},{id:4,label:"Cola com Nóix",icon:"mdi-gesture-double-tap",link:"/contribua"},{id:5,label:"O que é a new school?",icon:"mdi-library-books",link:"/sobre"},{id:7,label:"Fale com a gente",icon:"mdi-phone-message-outline",link:"/contato"},{id:8,label:"Apoie a new school",icon:"mdi-volume-high",link:"/construindo"},{id:8,label:"Ranking",icon:"mdi-trophy",link:"/aluno/ranking"}]}},methods:m(m({},Object(l.b)("user",["clearInfoUser"])),{},{closeMenu:function(){document.getElementById("menu-btn").click()},logout:function(){var t=this;this.logoutSocial().then((function(){$nuxt._router.push("/login"),localStorage.clear(),t.clearInfoUser()}))},pushAdminOnlyOptions:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[1].link="/admin/listar-cursos",this.menu.push({id:9,label:"Dashboard",icon:"mdi-chart-bar",link:"/admin/dashboard"}))},logoutSocial:function(){return this.$auth.loggedIn?this.$auth.logout():Promise.resolve()}}),computed:{user:function(){return this.$store.state.user.data}},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.pushAdminOnlyOptions())},filters:{simplifyName:function(t){if(!t)return"";return t.split(" ").length>2?/^(\S*\s+\S+).*/.exec(t)[1]:t}},components:{Avatar:c.a}},h=(n(294),n(35)),x=n(42),k=n.n(x),w=n(280),_=n(279),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-page"},[n("main",[n("section",{attrs:{id:"info"}},[n("div",{attrs:{id:"avatar"}},[n("div",{staticClass:"flex-center border-profile-photo"},[n("div",{staticClass:"flex-center profile-container"},[n("avatar",{attrs:{username:t._f("simplifyName")(t.user.name),size:90}})],1)])]),t._v(" "),n("div",{staticClass:"flex-center",attrs:{id:"flex-info-user"}},[n("h1",[t._v(t._s(t.user.name))]),t._v(" "),n("p",[t._v(t._s(t.user.type))]),t._v(" "),n("v-btn",{attrs:{id:"btnLogout",small:"",outlined:"",color:"error",width:"80px"},on:{click:t.logout}},[t._v("Sair")])],1)]),t._v(" "),n("div",{attrs:{id:"close"}},[n("v-icon",{attrs:{id:"close-btn",color:"primary"},on:{click:function(e){return t.closeMenu()}}},[t._v("mdi-close-circle")])],1)]),t._v(" "),n("section",{staticClass:"menu-list"},t._l(t.menu,(function(e){return n("router-link",{key:e.id,staticClass:"item-menu",attrs:{tag:"div",to:e.link},nativeOn:{click:function(e){return t.closeMenu()}}},[n("div",[n("v-icon",{attrs:{color:"primary"}},[t._v(t._s(e.icon))])],1),t._v(" "),n("p",{staticClass:"text-menu"},[t._v(t._s(e.label))])])})),1)])}),[],!1,null,"09cba8c5",null),y=component.exports;k()(component,{VBtn:w.a,VIcon:_.a});var C={components:{SideMenu:y},data:function(){return{viewMenu:!1,auth:!1,menu:[{id:1,name:"Início",icon:"mdi-home-outline",link:"/aluno/home"},{id:2,name:"Perfil",icon:"mdi-account-outline",link:"/aluno/perfil"},{id:3,name:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:4,name:"Certificados",icon:"mdi-school-outline",link:"/aluno/certificados",class:""}]}},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},methods:{setViewMenu:function(){this.viewMenu=!this.viewMenu},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[0].link="/admin/home",this.menu[1].link="/admin/perfil",this.menu[2].link="/admin/listar-cursos",this.menu[3].link="/admin/certificados")}}},O=(n(296),n(915)),j=Object(h.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.auth?n("div",[n("side-menu",{directives:[{name:"show",rawName:"v-show",value:t.viewMenu,expression:"viewMenu"}],staticClass:"intro-transition"}),t._v(" "),n("v-bottom-navigation",{attrs:{"scroll-target":"#page",fixed:"","scroll-threshold":"500",color:"write",horizontal:""}},[t._l(t.menu,(function(e){return n("v-btn",{key:e.id,staticClass:"btn-fixed menu__bottom",class:e.class,attrs:{to:e.link},on:{click:function(e){t.viewMenu=!1}}},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("v-icon",[t._v(t._s(e.icon))])],1)})),t._v(" "),n("v-btn",{staticClass:"btn-fixed",attrs:{id:"menu-btn"},on:{click:t.setViewMenu}},[n("span",[t._v("Outros")]),t._v(" "),n("v-icon",[t._v("mdi-apps")])],1)],2)],1):t._e()}),[],!1,null,"7d2ee64a",null);e.a=j.exports;k()(j,{VBottomNavigation:O.a,VBtn:w.a,VIcon:_.a})},293:function(t,e,n){"use strict";var o={props:["title","backPage","route"],methods:{comeBackPage:function(){this.route?this.$router.push(this.route):this.$router.back()}}},r=(n(299),n(35)),c=n(42),l=n.n(c),d=n(280),v=n(279),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"head__bar"}},[t.backPage?n("v-btn",{staticClass:"btn-back",attrs:{text:"",icon:""},on:{click:t.comeBackPage}},[n("v-icon",[t._v("mdi-arrow-left")])],1):t._e(),t._v(" "),n("h1",{staticClass:"h1__theme"},[t._v(t._s(t.title))])],1)}),[],!1,null,"576ed64e",null);e.a=component.exports;l()(component,{VBtn:d.a,VIcon:v.a})},294:function(t,e,n){"use strict";var o=n(289);n.n(o).a},295:function(t,e,n){(e=n(24)(!1)).push([t.i,".container-page[data-v-09cba8c5]{z-index:2}#btnLogout[data-v-09cba8c5]{margin-top:5px}.mdi-close-circle[data-v-09cba8c5]:before{color:var(--primary)}.container-page>main[data-v-09cba8c5]{-webkit-box-pack:justify;justify-content:space-between;padding:.5rem;margin-top:1rem;width:100%}#info[data-v-09cba8c5],.container-page>main[data-v-09cba8c5]{display:-webkit-box;display:flex}#avatar[data-v-09cba8c5]{margin-right:1rem}.text-menu[data-v-09cba8c5]{text-transform:uppercase}.mdi-library-books[data-v-09cba8c5]:before{content:url(https://api.iconify.design/mdi-library-books.svg?color=rgb%28105%2C0%2C204%29&height=24);vertical-align:-.125em}h1[data-v-09cba8c5]{font-size:1rem;font-weight:500;color:#000;text-transform:capitalize}.container-page[data-v-09cba8c5]{background-color:#fff;position:fixed;width:100%;height:100%;top:0;left:0}.row[data-v-09cba8c5]{margin-left:0}#close-btn[data-v-09cba8c5]{cursor:pointer;font-size:30px}#flex-info-user[data-v-09cba8c5]{-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:baseline;align-items:baseline}.flex-center[data-v-09cba8c5]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.border-profile-photo[data-v-09cba8c5]{height:95px;width:95px;border:1px solid #60c;border-radius:50px}.profile-container[data-v-09cba8c5]{width:85px;height:85px;border-radius:50px;overflow:hidden}.profile-container img[data-v-09cba8c5]{width:100%}.item-menu[data-v-09cba8c5]{width:100%;padding:13px;border-bottom:1px solid #e8e8e8;-webkit-box-align:center;align-items:center;color:var(--primary)!important;cursor:pointer}.item-menu[data-v-09cba8c5],.item-menu div[data-v-09cba8c5]{display:-webkit-box;display:flex}.item-menu div[data-v-09cba8c5]{width:50px;-webkit-box-pack:center;justify-content:center;margin-right:2rem}.item-menu[data-v-09cba8c5]:hover{background-color:#e8d1ff}.col-flex-center[data-v-09cba8c5]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:baseline;align-items:baseline}p[data-v-09cba8c5]{margin-bottom:0!important}h4[data-v-09cba8c5]{font-weight:600}@media(max-width:320px){.item-menu[data-v-09cba8c5]{height:42px}}",""]),t.exports=e},296:function(t,e,n){"use strict";var o=n(290);n.n(o).a},297:function(t,e,n){(e=n(24)(!1)).push([t.i,"[data-v-7d2ee64a] .v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.v-icon[data-v-7d2ee64a]{margin-right:0!important;padding-top:5px}#page[data-v-7d2ee64a]{margin-bottom:5rem!important}.btn-fixed[data-v-7d2ee64a]{height:100%!important}.intro-transition[data-v-7d2ee64a]{-webkit-animation-name:intro;animation-name:intro;-webkit-animation-duration:.2s;animation-duration:.2s}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content{color:var(--primary)}.mdi-library[data-v-7d2ee64a]:before{content:url(https://api.iconify.design/ic:outline-local-library.svg?color=rgb%28112%2C112%2C112%29&height=24);vertical-align:-.125em}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content .mdi-library:before{content:url(https://api.iconify.design/ic:outline-local-library.svg?color=rgb%28102%2C0%2C204%29&height=24);vertical-align:-.125em}span[data-v-7d2ee64a]{font-size:8px;font-weight:400;color:#737373;margin-top:5px}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content span{color:var(--primary)}@media (max-width:375px){.v-btn[data-v-7d2ee64a]{min-width:55px!important;font-size:.6rem!important}}@media (max-width:415px){.v-btn[data-v-7d2ee64a]{font-size:.65rem!important}}.remove-certificates[data-v-7d2ee64a]{display:none}",""]),t.exports=e},299:function(t,e,n){"use strict";var o=n(291);n.n(o).a},300:function(t,e,n){(e=n(24)(!1)).push([t.i,"*[data-v-576ed64e]{font-family:Roboto,sans-serif}.h1__theme[data-v-576ed64e]{font-size:1rem;line-height:1.2;font-weight:900;text-align:center;padding:0 2.5rem!important}#head__bar[data-v-576ed64e]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;padding:1.2rem 0;position:relative;-webkit-box-align:center;align-items:center;background:transparent}[data-v-576ed64e] .btn-back .theme--light.v-icon{color:var(--primary);font-size:35px}[data-v-576ed64e] .btn-back{position:absolute;left:1rem}",""]),t.exports=e},589:function(t,e,n){var content=n(781);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("71123473",content,!0,{sourceMap:!1})},590:function(t,e){},780:function(t,e,n){"use strict";var o=n(589);n.n(o).a},781:function(t,e,n){(e=n(24)(!1)).push([t.i,".card-alignment[data-v-2f2e99a1]{margin:1% auto;text-align:center;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;width:115px}.img-size[data-v-2f2e99a1]{width:110px;height:110px;padding:5px}.bottom-padding[data-v-2f2e99a1]{margin-bottom:30%}.horizontal-scroll[data-v-2f2e99a1]{width:100%;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;overflow-y:auto}.content-padding[data-v-2f2e99a1]{margin:0 20px 0 0;padding:0 10px 0 0}[data-v-2f2e99a1] .v-card__subtitle{font-size:10px;padding:0 30px;line-height:12px}[data-v-2f2e99a1] .v-card__title{text-align:center!important;display:block;font-size:12px}.v-card__text[data-v-2f2e99a1],.v-card__title[data-v-2f2e99a1],[data-v-2f2e99a1] .v-card__subtitle{padding:10px}::v-deeo .v-card[data-v-2f2e99a1]{box-shadow:#fff #fff #fff}[data-v-2f2e99a1] .title{color:var(--primary);font-weight:900;font-size:20px;line-height:24px}[data-v-2f2e99a1] .descricao,[data-v-2f2e99a1] .title{font-family:Montserrat;font-style:normal}[data-v-2f2e99a1] .descricao{margin-top:16px;font-weight:500;font-size:12px;line-height:15px;color:#1a1a1a}[data-v-2f2e99a1] .v-title__title{margin-top:-57px}[data-v-2f2e99a1] #page{max-height:100vh}@media (min-width:700px){.horizontal-scroll[data-v-2f2e99a1]{-webkit-box-pack:space-evenly;justify-content:space-evenly}.container[data-v-2f2e99a1]{max-width:700px}}",""]),t.exports=e},782:function(t,e,n){"use strict";var o=n(590),r=n.n(o);e.default=r.a},899:function(t,e,n){"use strict";n.r(e);var o=n(292),r={components:{HeaderBar:n(293).a,NavigationBar:o.a},data:function(){return{stacks:[{id:1,cover:"https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg",title:"Backend",deion:"NodeJs, NestJs, Type, Swagger, MySQL",linkUrl:"https://github.com/NewSchoolBR/newschool-backend",linkText:"Github"},{id:2,cover:"https://openbox.pt/wp-content/uploads/2018/04/vue-1.png",title:"Frontend",deion:"Vue, Nuxt, Vuetify - Material Design",linkUrl:"https://github.com/NewSchoolBR/newschool-frontend",linkText:"Github"},{id:3,cover:"https://shazronatadobe.files.wordpress.com/2012/09/cordova_bot.png",title:"Mobile",deion:"Cordova",linkUrl:"https://cordova.apache.org/",linkText:"Figma"}],tools:[{id:1,cover:"https://sharebook.com.brnuxtfiles/img/contribute-project/slack.jpg",title:"Slack",deion:"Comunicação, colaboração e integração.",linkUrl:"https://join.slack.com/t/newschoolbr/shared_invite/enQtODYwMTI2MTgwODY5LTJkYzcwYWVlYWUyNWI1NDg3OTRjMjUyYjE5ZjZhMDMxZWFjMTJlMDA3NDJlYzQ0ZDEzZmIxOTQ1MzIzNjIzZjI",linkText:"Slack"},{id:2,cover:"https://sharebook.com.brnuxtfiles/img/contribute-project/trello.jpg",title:"Trello",deion:"Pegue uma tarefa, coloque no seu nome e mova pra DOING.",linkUrl:"https://trello.com/invite/b/2MHuWn0C/b1a15b7112ea11b856cfa78174a6f72d/projeto-new-school-app",linkText:"Trello"},{id:3,cover:"https://sharebook.com.brnuxtfiles/img/contribute-project/github.jpg",title:"Github",deion:"Aqui nós temos o cuidado de ter um histórico educativo.",linkUrl:"https://github.com/newschoolbr",linkText:"Github"}]}},methods:{select:function(t){window.open(t,"_blank")}}},c=(n(780),n(35)),l=n(782),d=n(42),v=n.n(d),m=n(326),f=n(305),h=n(882),x=n(417),k=n(351),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("HeaderBar",{attrs:{title:"CONTRIBUA","back-page":!0}}),t._v(" "),n("article",{attrs:{id:"page"}},[n("v-container",[n("div",{staticClass:"title"},[t._v("APOIE O PROJETO")]),t._v(" "),n("p",{staticClass:"descricao"},[t._v("\n        Que tal nosso stack tecnológico? Combinação boa heim! Em cada\n        repositório GITHUB tem uma explicação passo-a-passo de como você fazer\n        sua PRIMEIRA CONTRIBUIÇÃO no projeto. Bora?\n      ")]),t._v(" "),n("v-container",{attrs:{fluid:"","max-width":"700"}},[n("v-row",[n("div",{staticClass:"horizontal-scroll"},t._l(t.stacks,(function(e){return n("v-card",{key:e.id,staticClass:"content-padding",staticStyle:{"box-shadow":"none"},attrs:{"min-width":"115"}},[n("div",{staticClass:"card-alignment"},[n("v-img",{staticClass:"img-size",attrs:{src:e.cover,"margin-top":"0",contain:""}}),t._v(" "),n("v-card-title",[t._v(t._s(e.title))]),t._v(" "),n("v-card-subtitle",[t._v(t._s(e.deion))])],1)])})),1)])],1),t._v(" "),n("article",[n("div",{staticClass:"title"},[t._v("Ferramentas")]),t._v(" "),n("p",{staticClass:"descricao"},[t._v("\n          Nós temos um monte de ferramentas legais pra esse trabalho\n          colaborativo. SLACK, TRELLO, GITHUB. Tudo integrado e bem explicado,\n          fácil de entender.\n        ")]),t._v(" "),n("v-container",{attrs:{fluid:""}},[n("v-row",[n("div",{staticClass:"horizontal-scroll"},t._l(t.tools,(function(e){return n("v-card",{key:e.id,staticClass:"content-padding",staticStyle:{"box-shadow":"none"},attrs:{"max-width":"168","min-width":"115"},on:{click:function(n){return t.select(e.linkUrl)}}},[n("div",{staticClass:"card-alignment bottom-padding"},[n("v-img",{staticClass:"img-size ",attrs:{src:e.cover}}),t._v(" "),n("v-card-title",[t._v(t._s(e.title))]),t._v(" "),n("v-card-subtitle",[t._v(t._s(e.deion))])],1)])})),1)])],1)],1)],1)],1),t._v(" "),n("navigation-bar")],1)}),[],!1,null,"2f2e99a1",null);"function"==typeof l.default&&Object(l.default)(component);e.default=component.exports;v()(component,{VCard:m.a,VCardSubtitle:f.a,VCardTitle:f.c,VContainer:h.a,VImg:x.a,VRow:k.a})}}]);