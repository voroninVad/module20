(function(){"use strict";var t={4216:function(t,e,a){var n=a(5130),s=a(6768);const o={class:"container"};function i(t,e,a,n,i,l){const r=(0,s.g2)("RouterLink"),u=(0,s.g2)("RouterView");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("nav",null,[(0,s.bF)(r,{class:"navigation",to:"/"},{default:(0,s.k6)((()=>e[0]||(e[0]=[(0,s.eW)("Мои задачи")]))),_:1}),(0,s.bF)(r,{class:"navigation",to:"/addtask"},{default:(0,s.k6)((()=>e[1]||(e[1]=[(0,s.eW)("Добавить задачу")]))),_:1}),(0,s.bF)(r,{class:"navigation",to:"/settings"},{default:(0,s.k6)((()=>e[2]||(e[2]=[(0,s.eW)("Настройки")]))),_:1})]),(0,s.Lk)("main",null,[(0,s.Lk)("div",o,[e[3]||(e[3]=(0,s.Lk)("h1",null,"Список дел",-1)),(0,s.bF)(u)])])],64)}var l=a(1387),r={components:{RouterLink:l.Wk}},u=a(1241);const d=(0,u.A)(r,[["render",i]]);var c=d,k=a(4232);const h={class:"task"},p={key:0},T={class:"status"},f={class:"priority"},m=["onClick"];function v(t,e,a,n,o,i){const l=(0,s.g2)("RouterLink");return(0,s.uX)(),(0,s.CE)("div",h,[0===i.tasks.length?((0,s.uX)(),(0,s.CE)("h3",p,"Задач нету")):(0,s.Q3)("",!0),(0,s.Lk)("ul",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.tasks,((t,e)=>((0,s.uX)(),(0,s.Wv)(l,{class:"link_task",key:e,to:`/task/${e}`},{default:(0,s.k6)((()=>[(0,s.Lk)("h4",null,(0,k.v_)(t.title),1),(0,s.Lk)("p",null,(0,k.v_)(t.description),1),(0,s.Lk)("span",null,"Срок: "+(0,k.v_)(t.deadline),1),(0,s.Lk)("span",T,(0,k.v_)(t.status),1),(0,s.Lk)("p",f,"Приоритет: "+(0,k.v_)(t.daysLeft),1),(0,s.Lk)("button",{onClick:t=>i.deleteTask(e)},"Удалить",8,m)])),_:2},1032,["to"])))),128))]),(0,s.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>i.goToAdd&&i.goToAdd(...t))},"Перейти к добавлению")])}a(4114);var L=a(782),g={computed:{...(0,L.L8)(["allTasks"]),tasks(){return this.allTasks.map((t=>({...t,daysLeft:this.calculateDaysLeft(t.deadline)})))}},methods:{calculateDaysLeft(t){const e=new Date,a=new Date(t),n=a-e,s=Math.ceil(n/864e5);return s>=14?"низкий":s>=7?"средний":"высокий"},deleteTask(t){this.$store.dispatch("deleteTask",t)},toggleTask(t){this.$store.dispatch("toggleTask",t)},goToAdd(){this.$router.push("/addtask")}}};const b=(0,u.A)(g,[["render",v]]);var w=b;const _={for:"deadline"};function y(t,e,a,o,i,l){return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=e=>t.newTaskTitle=e),placeholder:"Введите заголовок задачи"},null,512),[[n.Jo,t.newTaskTitle]]),(0,s.bo)((0,s.Lk)("textarea",{"onUpdate:modelValue":e[1]||(e[1]=e=>t.newTaskDescription=e),placeholder:"Введите описание задачи"},null,512),[[n.Jo,t.newTaskDescription]]),(0,s.Lk)("label",_,[e[4]||(e[4]=(0,s.eW)(" Срок выполнения ")),(0,s.bo)((0,s.Lk)("input",{type:"date","onUpdate:modelValue":e[2]||(e[2]=e=>t.newTaskDeadline=e),id:"deadline"},null,512),[[n.Jo,t.newTaskDeadline]])]),(0,s.Lk)("button",{onClick:e[3]||(e[3]=(...t)=>l.addTask&&l.addTask(...t))},"Добавить")],64)}var D={data(){return{newTask:""}},methods:{addTask(){if(this.newTaskTitle.trim()&&this.newTaskDescription.trim()&&this.newTaskDeadline){const t={title:this.newTaskTitle,description:this.newTaskDescription,deadline:this.newTaskDeadline,status:"новая"};this.$store.dispatch("addTask",t),this.newTaskTitle="",this.newTaskDescription="",this.newTaskDeadline="",this.$router.push("/")}}}};const A=(0,u.A)(D,[["render",y]]);var E=A;const C={class:"settings"};function $(t,e,a,o,i,l){return(0,s.uX)(),(0,s.CE)("div",C,[e[3]||(e[3]=(0,s.Lk)("h1",null,"Настройки",-1)),e[4]||(e[4]=(0,s.Lk)("label",{for:"theme-selector"},"Выберите тему:",-1)),(0,s.bo)((0,s.Lk)("select",{id:"theme-selector","onUpdate:modelValue":e[0]||(e[0]=t=>i.selectedTheme=t),onChange:e[1]||(e[1]=(...t)=>l.changeTheme&&l.changeTheme(...t))},e[2]||(e[2]=[(0,s.Lk)("option",{value:"light"},"Светлая тема",-1),(0,s.Lk)("option",{value:"dark"},"Темная тема",-1)]),544),[[n.u1,i.selectedTheme]])])}var O={data(){return{selectedTheme:localStorage.getItem("theme")||"light"}},methods:{changeTheme(){document.body.setAttribute("data-theme",this.selectedTheme),localStorage.setItem("theme",this.selectedTheme)}},created(){this.changeTheme()}};const K=(0,u.A)(O,[["render",$],["__scopeId","data-v-57b49979"]]);var U=K;const F={class:"task"},S={for:"deadline"};function V(t,e,a,o,i,l){return(0,s.uX)(),(0,s.CE)("div",F,[e[5]||(e[5]=(0,s.Lk)("h2",null,"Редактировать Задачу",-1)),(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>i.task.title=t),placeholder:"Название задачи"},null,512),[[n.Jo,i.task.title]]),(0,s.bo)((0,s.Lk)("textarea",{"onUpdate:modelValue":e[1]||(e[1]=t=>i.task.description=t),placeholder:"Описание задачи"},null,512),[[n.Jo,i.task.description]]),(0,s.Lk)("label",S,[e[4]||(e[4]=(0,s.eW)("Срок выполнения ")),(0,s.bo)((0,s.Lk)("input",{type:"date","onUpdate:modelValue":e[2]||(e[2]=t=>i.task.deadline=t),id:"deadline"},null,512),[[n.Jo,i.task.deadline]])]),(0,s.Lk)("button",{onClick:e[3]||(e[3]=(...t)=>l.updateTask&&l.updateTask(...t))},"Обновить задачу")])}var X={data(){return{task:{title:"",description:"",deadline:""}}},computed:{...(0,L.L8)(["allTasks"])},created(){const t=this.$route.params.id,e=this.allTasks[t];e?this.task={...e}:this.$router.push("/")},methods:{updateTask(){const t=this.$route.params.id;this.$store.dispatch("updateTask",{id:t,task:this.task}),this.$router.push("/")}}};const x=(0,u.A)(X,[["render",V]]);var W=x;const j=[{path:"/",component:w},{path:"/addtask",component:E},{path:"/settings",component:U},{path:"/task/:id/",component:W}],J=(0,l.aE)({history:(0,l.LA)(),routes:j});var I=J;const P=(0,L.y$)({state:{tasks:[]},mutations:{ADD_TASK(t,e){t.tasks.push(e)},UPDATE_TASK(t,{id:e,task:a}){t.tasks[e]=a},DELETE_TASK(t,e){t.tasks.splice(e,1)}},actions:{addTask({commit:t},e){t("ADD_TASK",e)},updateTask({commit:t},{id:e,task:a}){t("UPDATE_TASK",{id:e,task:a})},deleteTask({commit:t},e){t("DELETE_TASK",e)}},getters:{allTasks(t){return t.tasks}}});var R=P;(0,n.Ef)(c).use(I).use(R).mount("#app")}},e={};function a(n){var s=e[n];if(void 0!==s)return s.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,n,s,o){if(!n){var i=1/0;for(d=0;d<t.length;d++){n=t[d][0],s=t[d][1],o=t[d][2];for(var l=!0,r=0;r<n.length;r++)(!1&o||i>=o)&&Object.keys(a.O).every((function(t){return a.O[t](n[r])}))?n.splice(r--,1):(l=!1,o<i&&(i=o));if(l){t.splice(d--,1);var u=s();void 0!==u&&(e=u)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[n,s,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,o,i=n[0],l=n[1],r=n[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(s in l)a.o(l,s)&&(a.m[s]=l[s]);if(r)var d=r(a)}for(e&&e(n);u<i.length;u++)o=i[u],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(d)},n=self["webpackChunkmy_app_vue"]=self["webpackChunkmy_app_vue"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(4216)}));n=a.O(n)})();
//# sourceMappingURL=app.fd212b8d.js.map