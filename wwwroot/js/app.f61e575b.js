(function(t){function e(e){for(var a,o,n=e[0],l=e[1],c=e[2],d=0,g=[];d<n.length;d++)o=n[d],i[o]&&g.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(g.length)g.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,n=1;n<s.length;n++){var l=s[n];0!==i[l]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("64a9"),i=s.n(a);i.a},"1a63":function(t,e,s){"use strict";var a=s("85db"),i=s.n(a);i.a},2044:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("navigation"),s("div",{staticClass:"container-fluid"},[s("router-view")],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navigation w-100 mb-4"},[a("div",{staticClass:"col d-flex justify-content-between align-items-center"},[a("div",{staticClass:"action m-1",on:{click:function(e){return t.$router.push({name:"home"})}}},[a("img",{attrs:{src:s("5e8a"),alt:"logo",height:"100"}})]),t.title?a("h1",{staticClass:"action nav-title text-light",attrs:{"data-toggle":"toggle","data-placement":"top",title:"Back to Home"}},[t._v("Bug Box")]):t._e()])])},n=[],l=s("3d20"),c=s.n(l),u={name:"navigation",data(){return{open:!1,links:[{name:"Home",routeName:"home",class:""},{name:"Playlists",routeName:"playlists",class:""},{name:"Documentation",routeName:"documentation",class:" order-1"}]}},computed:{title(){return this.$route.name},baseURL(){return this.$store.state.baseURL||"//localhost:3000/api"}},methods:{setBaseURL(){c.a.fire({title:"Change your server address?",text:"Note: The url will be formatted for you. Just provide the port number.",input:"number",inputAutoTrim:!0,showCancelButton:!0,inputPlaceholder:"e.g., 3000",preConfirm:t=>{t&&(this.$store.dispatch("setBaseURL",t),setTimeout(()=>this.$store.dispatch("cstmAlrt",{method:"toast",title:"Port Updated"}),100))}})}},components:{}},d=u,g=(s("9028"),s("2877")),p=Object(g["a"])(d,o,n,!1,null,null,null),f=p.exports,b={name:"App",components:{Navigation:f}},m=b,h=(s("034f"),Object(g["a"])(m,i,r,!1,null,null,null)),_=h.exports,v=s("8c4f"),y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home row justify-content-center"},[s("div",{staticClass:"col-11"},[s("form",[s("div",{staticClass:"d-flex align-items-center"},[t.query.length?s("i",{staticClass:"action muted fa fa-fw fa-times",on:{click:function(e){t.query=""}}}):t._e(),s("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"__query w-100",attrs:{autofocus:"",placeholder:"search...",required:"",name:"query",type:"text"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})])]),t.results.length?s("div",{staticClass:"row"},t._l(t.results,function(e){return s("blog-card",{key:e.id,attrs:{blog:e},on:{setQuery:t.setQuery}})}),1):t._e()]),s("div",{staticClass:"__fab"},[s("input",{staticClass:"__fab_toggle",attrs:{type:"checkbox",name:"__fab_toggle"}}),t._m(0),s("div",{staticClass:"__fab_buttons"},[s("a",{staticClass:"text-white action d-flex align-items-center justify-content-center",attrs:{title:"Add Blog"},on:{click:t.createBlog}},[s("i",{staticClass:"fa fa-plus-circle"})]),s("a",{staticClass:"text-white action d-flex align-items-center justify-content-center",attrs:{title:"Run Tests"},on:{click:t.runTests}},[s("i",{staticClass:"fa fa-clipboard"})])])])])},w=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"__fab_button action"},[s("i",{staticClass:"fa fa-cog"})])}],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"blog-container",style:{width:t.full?"90%":"50rem"}},[a("div",{staticClass:"blog-header"},[a("div",{staticClass:"blog-cover"},[a("div",{staticClass:"blog-author"},[a("h3",[t._v(t._s(t.blog.title))])])])]),a("div",{staticClass:"blog-body",style:{width:t.full?"95%":"80%"}},[a("div",{staticClass:"blog-title mt-1"},[a("h1",[t.blog.closedDate?a("span",{staticClass:"text-secondary muted",staticStyle:{"text-decoration":"line-through"}},[t._v("CLOSED: "+t._s(t.blog.title))]):a("router-link",{staticClass:"text-danger",attrs:{to:{name:"blog",params:{id:t.blog.id}}}},[t._v(t._s(t.blog.title))])],1),t.full?a("hr"):t._e()]),a("div",{staticClass:"blog-summary"},[a("p",[t._v(t._s(t.blog.summary))]),t.full?a("p",{domProps:{innerHTML:t._s(t.blog.description)}}):t._e()])]),a("div",{staticClass:"blog-footer",style:{width:t.full?"95%":"80%"}},[a("ul",[t.blog.lastModified?a("li",{staticClass:"published-date"},[t._v(t._s(t._f("timeago")(t.blog.lastModified)))]):t._e(),t.full?a("li",{staticClass:"published-date bg-dark text-light"},[a("img",{attrs:{src:s("8a63"),height:"25"}}),a("span",{staticClass:"ml-1"},[t._v(t._s(t.blog.title))])]):t._e()])])]),t.full?a("div",{staticClass:"blog-container p-2 bg-dark ",style:{width:t.full?"90%":"50rem"}},[a("h3",{staticClass:"text-light"},[t._v("Notes:")]),t._l(t.notes,function(e){return a("div",{key:e.id,staticClass:"card square p-2"},[t._v(t._s(e.body))])})],2):t._e()])},B=[],x={name:"BlogCard",props:{blog:{type:Object,required:!0},full:{type:Boolean}},mounted(){this.full&&this.$store.dispatch("getNotes",this.blog.id)},computed:{notes(){return this.$store.state.notes}},filters:{timeago(t){try{let s=new Date(t);return`${s.toLocaleString()}`}catch(e){return""}}}},T=x,E=(s("1a63"),Object(g["a"])(T,C,B,!1,null,null,null)),$=E.exports,N={name:"home",data(){return{query:""}},mounted(){this.$store.dispatch("getBugs")},computed:{blogs(){return this.$store.state.bugs},results(){if(!this.query.length)return this.blogs;let t=new RegExp(this.query,"ig");return this.blogs.filter(e=>{if(t.test(e.title))return!0})}},methods:{setQuery(t){this.query=t},createBlog(){this.$store.dispatch("createBug")},setBaseUrl(){this.$store.dispatch("setBaseURL")},runTests(){this.$store.dispatch("runTests")}},components:{Navigation:f,BlogCard:$}},k=N,A=(s("cccb"),Object(g["a"])(k,y,w,!1,null,null,null)),O=A.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"documentation row"},[t._v("\n    doc here\n")])},S=[],U={},q=Object(g["a"])(U,j,S,!1,null,null,null),P=q.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.blog.id?s("div",[t.editing?t._e():s("blog-card",{attrs:{blog:t.blog,full:!0}}),t.editing?s("div",{staticClass:"card p-3"},[s("form",{on:{submit:t.save}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Title:")]),s("div",{staticClass:"d-flex align-items-center"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.blog.title,expression:"blog.title",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"title",maxlength:"60"},domProps:{value:t.blog.title},on:{input:function(e){e.target.composing||t.$set(t.blog,"title",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("small",{staticClass:"ml-1"},[t.blog.title?s("small",[t._v(t._s(t.blog.title.length)+"/60")]):t._e()])])]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Description:")]),s("div",{staticClass:"d-flex align-items-center"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.blog.description,expression:"blog.description",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"title",maxlength:"120"},domProps:{value:t.blog.description},on:{input:function(e){e.target.composing||t.$set(t.blog,"description",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("small",{staticClass:"ml-1"},[t.blog.description?s("small",[t._v(t._s(t.blog.description.length)+"/120")]):t._e()])])]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"body"}}),s("div",{staticClass:"outline",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t.blog.description)},on:{blur:t.setBody}})])])]):t._e(),s("div",{staticClass:"__fab"},[s("input",{staticClass:"__fab_toggle",attrs:{type:"checkbox",name:"__fab_toggle"}}),t._m(0),s("div",{staticClass:"__fab_buttons"},[t.editing?t._e():s("a",{staticClass:"text-white action d-flex align-items-center justify-content-center",attrs:{title:"Edit"},on:{click:function(e){t.editing=!0}}},[s("i",{staticClass:"fa fa-edit"})]),t.editing?s("a",{staticClass:"text-white action d-flex align-items-center justify-content-center bg-success",attrs:{title:"Set Port"},on:{click:t.save}},[s("i",{staticClass:"fa fa-upload"})]):t._e(),s("a",{staticClass:"text-white action d-flex align-items-center justify-content-center bg-danger",attrs:{title:"Set Port"},on:{click:t.deleteBlog}},[s("i",{staticClass:"fa fa-trash"})])])])],1):s("div",[t._v("LOADING.....")])},D=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"__fab_button action"},[s("i",{staticClass:"fa fa-cog"})])}],L=(s("b747"),{name:"Blog",data(){return{editing:!1}},mounted(){this.$store.dispatch("getBug",this.$route.params.id)},computed:{blog(){return this.$store.state.bug}},methods:{addImage(){event.target.files;var t=event.target.files[0],e=new FileReader;e.addEventListener("load",t=>{this.blog.img=e.result},!1),t&&e.readAsDataURL(t)},setBody(){this.blog.body=event.target.innerHTML},save(){this.blog.slug=this.slug,this.$store.dispatch("saveBlog",this.blog),this.editing=!1},deleteBlog(){c.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(t=>{t.value&&(this.$store.dispatch("deleteBlog",this.blog._id),c.a.fire("Deleted!","Your file has been deleted.","success"),this.$router.push({name:"home"}))})},removeTag(t){this.blog.tags.splice(t,1)},addTag(){c.a.fire({title:"Add Tag",input:"text",inputAutoTrim:!0,showCancelButton:!0,inputPlaceholder:"tag",preConfirm:t=>{if(!t)return;let e=this.blog.tags.find(e=>e==t);e||this.blog.tags.push(t)}})}},components:{BlogCard:$}}),M=L,R=(s("9d5a"),Object(g["a"])(M,I,D,!1,null,null,null)),H=R.exports;a["a"].use(v["a"]);var Y=new v["a"]({routes:[{path:"/",name:"home",component:O},{path:"/documentation",name:"documentation",component:P},{path:"/bug/:id",name:"blog",component:H}]}),F=s("2f62"),J=s("bc3a"),G=s.n(J);function Q({title:t,text:e="",type:s="success",timer:a=5500}){return c.a.fire({title:t,text:e,type:s,timer:a,showConfirmButton:!1,position:"top-right",toast:!0})}function W(t){if(!t)return Q({title:"An uknown error occured",type:"error"});let e=t.message||"An error occured";if(!t.isAxiosError||!t.response)return Q({title:e,type:"error"});let s=t.response.data,a=s.message?s.message:s.error?s.error:t.message;e=`${t.code} ${e}`,Q({title:e,text:a,type:"error",timer:15e3})}a["a"].use(F["a"]);const z="/";let K=G.a.create({baseURL:z+"api",timeout:5e3});var V=new F["a"].Store({state:{bugs:[],notes:[],bug:{}},mutations:{setBugs(t,e=[]){t.bugs=e},setBug(t,e={}){t.bug=e},addBug(t,e){e&&t.bugs.unshift(e)},setNotes(t,e=[]){t.notes=e},addNote(t,e={}){t.notes.unshift(e)}},actions:{async getBugs({commit:t,state:e}){try{let e=await K.get("Bugs/");t("setBugs",e.data)}catch(s){W(s)}},async createBug({dispatch:t,commit:e}){c.a.mixin({input:"text",confirmButtonText:"Next &rarr;",showCancelButton:!0,progressSteps:["1","2"]}).queue(["Provide a short Title for the Bug","Please describe the bug in detail?"]).then(e=>{if(!e.value)throw new Error("Bug Creation Canceled");t("sendBug",e.value)}).catch(t=>W(t))},async sendBug({commit:t},e){try{let a={title:e[0],description:e[1]},i=await K.post("bugs",a);if(i.data.id)return Q({title:"Bug Created"}),t("addBug",i.data),!0}catch(s){W(new Error("Unable to get bugs"))}},async getBug({commit:t,state:e},s){try{let e=await K.get("bugs/"+s);e.data&&e.data&&t("setBug",e.data)}catch(a){W(new Error("Unable to get bug by id"))}},async saveBug({dispatch:t},e){try{await K.put("bugs/"+e.id,e);Q({title:"Bug Updated"}),Y.push({name:"bug",params:{slug:e.slug}})}catch(s){W(s)}},async deleteBlog({dispatch:t},e){try{await K.delete("bugs/"+e);Q({title:"Blog Closed"}),t("getBugs")}catch(s){W(s)}},async getNotes({commit:t},e){try{t("setNotes",[]);let a=await K.get("bugs/"+e+"/notes");a.data&&a.data&&t("setNotes",a.data)}catch(s){W(s)}},async runTests(){var t={title:"__test__blog",description:"__a__test__summary"};let e,s;function a(t,e){return t.response&&404==t.response.status&&(t.message=e,t.isAxiosError=!1),W(t)}let i="Unable to get bugs or bad data retrived when requesting bugs";try{Q({title:"Starting Bug Tests",type:"info"});let t=await K.get("bugs");if(e=t.data,!Array.isArray(e))throw new Error(i)}catch(d){return a(d,i)}try{Q({title:"Testing Bug Creation",type:"info"});let e=await K.post("bugs",t);s=e.data}catch(d){return a(d,"Unable to create bug")}let r="Unable to retrive bug by its id";try{let t=await K.get("bugs/"+s.id);if(s=t.data,!s)throw new Error(r);if(s.closedDate)throw new Error("Bug was created with a closedDate")}catch(d){return a(d,r)}let o="Unable to edit Bug or was not edited appropriately";try{Q({title:"Testing Bug Edit",type:"info"}),s.description="___THISISATEST___",s.closedDate=new Date(Date.now()).toUTCString();let t=await K.put("bugs/"+s.id,s);if(t.data.closedDate)throw new Error("Bugs should not be closable on edits")}catch(d){return a(d,o)}try{Q({title:"Testing Find BugById",type:"info"});let t=await K.get("bugs/"+s.id);if(!s.description==t.data.description)throw new Error(o);s=t.data}catch(d){return a(d,o)}let n,l,c="Bug was not closed on delete request";try{await K.delete("bugs/"+s.id);let t=await K.get("bugs/"+s.id);if(!t.data.closedDate)throw new Error(c)}catch(d){return a(d,c)}Q({title:"Testing Blog Notes",type:"info"});try{t.body="__TEST__BUG__WITH__NOTES__";let e=await K.post("bugs",t);n=e.data;let s=await K.post("bugnotes",{body:"THIS__NOTE__IS__GREAT",bugId:n.id});l=s.data;let i=await K.put("bugnotes/"+l.id,{body:"I__CAN__EDIT__MY__NOTE"});if("I__CAN__EDIT__MY__NOTE"!=i.data.body)throw new Error("Unable to edit Notes");await K.post("bugnotes",{body:"THIS__NOTE__IS__NOTE__2",bugId:n.id})}catch(d){return a(d,"Unable to edit Notes")}let u="notes not returned when requesting blogs/:id/notes";try{let t=await K.get("bugs/"+n.id+"/notes"),e=t.data;if(!Array.isArray(e)||2!=e.length)throw new Error(u)}catch(d){return a(d,u)}Q({title:"All tests successfully passed Excellent Job!!!",type:"success"})}}}),X=s("9483");Object(X["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}}),new a["a"]({router:Y,store:V,render:function(t){return t(_)}}).$mount("#app")},"5e8a":function(t,e,s){t.exports=s.p+"img/bugbox-logo.18696dc7.png"},"64a9":function(t,e,s){},"75ce":function(t,e,s){},"85db":function(t,e,s){},"8a63":function(t,e,s){t.exports=s.p+"img/bug-icon.3b8762f6.png"},9028:function(t,e,s){"use strict";var a=s("2044"),i=s.n(a);i.a},"9d5a":function(t,e,s){"use strict";var a=s("75ce"),i=s.n(a);i.a},cccb:function(t,e,s){"use strict";var a=s("d563"),i=s.n(a);i.a},d563:function(t,e,s){}});
//# sourceMappingURL=app.f61e575b.js.map