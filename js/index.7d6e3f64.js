(function(e){function t(t){for(var s,a,u=t[0],o=t[1],c=t[2],p=0,b=[];p<u.length;p++)a=u[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&b.push(r[a][0]),r[a]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);l&&l(t);while(b.length)b.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,u=1;u<n.length;u++){var o=n[u];0!==r[o]&&(s=!1)}s&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var s={},r={index:0},i=[];function a(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=s,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/QuizMakerVue/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=o;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("7a23"),r=n("14b7");function i(e,t,n,r,i,a){var u=Object(s["u"])("router-view");return Object(s["p"])(),Object(s["d"])(u)}var a={name:"App"};a.render=i;var u=a,o=n("6c02"),c={class:"globalWrapper"};function l(e,t,n,r,i,a){var u=this,o=Object(s["u"])("NavigationBar"),l=Object(s["u"])("MainPageFront"),p=Object(s["u"])("MainPageQuestionInput"),b=Object(s["u"])("MainPageSubmit");return Object(s["p"])(),Object(s["d"])("div",c,[Object(s["C"])(Object(s["g"])(o,{onLeftNav:t[1]||(t[1]=function(e){return u.pageNavStatus-=1}),onRightNav:t[2]||(t[2]=function(e){return u.pageNavStatus+=1}),status:i.pageNavStatus,max:i.pageNavMax},null,8,["status","max"]),[[s["z"],!i.showLink]]),Object(s["C"])(Object(s["g"])(l,null,null,512),[[s["z"],0==i.pageNavStatus]]),Object(s["C"])(Object(s["g"])(p,null,null,512),[[s["z"],1==i.pageNavStatus]]),Object(s["C"])(Object(s["g"])(b,null,null,512),[[s["z"],2==i.pageNavStatus]])])}var p=n("5530"),b=(n("cb29"),n("4de4"),n("4160"),n("d81d"),n("fb6a"),n("b0c0"),n("159b"),n("96cf"),n("1da1")),d=n("d4ec"),g=n("bee2"),m=n("260b"),O=(n("e71f"),n("ea7b"),n("588e"),{apiKey:"AIzaSyAOdPrnY-0HVvl0rbh1jSCbL-NcLk4x3Vg",authDomain:"quizmaker-3934d.firebaseapp.com",projectId:"quizmaker-3934d",storageBucket:"quizmaker-3934d.appspot.com",messagingSenderId:"25946962267",appId:"1:25946962267:web:38ed9dc407b1049c5cc27e"});m["a"].initializeApp(O);var j=m["a"],h=function(){function e(){Object(d["a"])(this,e)}return Object(g["a"])(e,null,[{key:"getQuizOptions",value:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j.firestore().collection("quiz").doc(t).get();case 2:if(n=e.sent,n.exists){e.next=7;break}return e.abrupt("return",void 0);case 7:return e.abrupt("return",n.data());case 8:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getQuizQuestions",value:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j.firestore().collection("quiz").doc(t).collection("question").get();case 2:if(n=e.sent,!(n.docs.length<=0)){e.next=5;break}return e.abrupt("return",void 0);case 5:return e.abrupt("return",n.docs.map((function(e){return e.data()})));case 6:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getQuizResponce",value:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,n){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j.firestore().collection("quiz").doc(t).collection("response").doc(n).get();case 2:if(s=e.sent,s.exists){e.next=5;break}return e.abrupt("return",void 0);case 5:return e.abrupt("return",{name:s.data().name,quiz_answer:s.data().quiz_answer,marks:s.data().marks,date:s.data().time.toDate()});case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"getQuizTop10",value:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){var n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=this,n.responces=new Array(10).fill(void 0),e.next=4,j.firestore().collection("quiz").doc(t).collection("response").get().then((function(e){e.forEach((function(e){var t={name:e.data().name,quiz_answer:e.data().quiz_answer,marks:e.data().marks,score:e.data().marks.filter(Boolean).length,date:e.data().time.toDate()},s=n.responces;s.push(t),n.responces=s}))}));case 4:return s=n.responces,s.sort((function(e,t){return t.score-e.score})),s=s.slice(0,10),e.abrupt("return",s);case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"createQuiz",value:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j.firestore().collection("quiz").add({title:JSON.stringify(t.title),score_win:t.score_win,message_start:JSON.stringify(t.message_start),message_end_win:JSON.stringify(t.message_end_win),message_end_loss:JSON.stringify(t.message_end_loss)}).then((function(e){n=e.id;var s=j.firestore().batch();t.question.forEach((function(t,n){s.set(j.firestore().collection("quiz").doc(e.id).collection("question").doc(""+n),t)})),s.commit()})).catch((function(e){console.error("Error adding document: ",e)}));case 2:return e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"createResult",value:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,n){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=this,e.next=3,j.firestore().collection("quiz").doc(t).collection("response").add({name:n.name,quiz_answer:n.quiz_answer,marks:n.marks,time:j.firestore.FieldValue.serverTimestamp()}).then((function(e){s.resultLinkURL="r/"+e.id})).catch((function(e){alert("Something went wrong '"+e+"')"),console.error("Error adding document: ",e)}));case 3:return e.abrupt("return",s.resultLinkURL);case 4:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()}]),e}(),f=h;function v(e,t,n,r,i,a){var u=this;return Object(s["p"])(),Object(s["d"])(s["a"],null,[n.status-1>=0?(Object(s["p"])(),Object(s["d"])("button",{key:0,class:"globalLeftNav",onClick:t[1]||(t[1]=function(e){return u.$emit("leftNav")})},"<")):Object(s["e"])("",!0),n.status+1<n.max?(Object(s["p"])(),Object(s["d"])("button",{key:1,class:"globalRightNav",onClick:t[2]||(t[2]=function(e){return u.$emit("rightNav")})},">")):Object(s["e"])("",!0)],64)}n("a9e3");var q={name:"NavigationBar",emits:["leftNav","rightNav"],props:{status:Number,max:Number}};q.render=v;var w=q,z={class:"mpWrapper"},N={class:"mpQuizOption"},k={class:"mpQuizOption"},_={class:"mpQuizOption"},y={class:"mpQuizOption"};function S(e,t,n,r,i,a){return Object(s["p"])(),Object(s["d"])("div",z,[Object(s["C"])(Object(s["g"])("input",{placeholder:"Give your quiz a title",class:"mpInputTitle",type:"text",name:"title",autocomplete:"off","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.title=e})},null,512),[[s["y"],i.title]]),Object(s["g"])("span",N,[Object(s["C"])(Object(s["g"])("input",{placeholder:"This is the start message",class:"mpInputStart",name:"message_start",autocomplete:"off","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.message_start=e})},null,512),[[s["y"],i.message_start]])]),Object(s["g"])("span",k,[Object(s["C"])(Object(s["g"])("input",{placeholder:"This is the winning message",class:"mpInputWin",autocomplete:"off",name:"message_end_win","onUpdate:modelValue":t[3]||(t[3]=function(e){return i.message_end_win=e})},null,512),[[s["y"],i.message_end_win]])]),Object(s["g"])("span",_,[Object(s["C"])(Object(s["g"])("input",{placeholder:"This is the losing message",class:"mpInputLoss",autocomplete:"off",name:"message_end_loss","onUpdate:modelValue":t[4]||(t[4]=function(e){return i.message_end_loss=e})},null,512),[[s["y"],i.message_end_loss]])]),Object(s["g"])("span",y,[Object(s["C"])(Object(s["g"])("input",{placeholder:"Score needed to win",min:"1",class:"mpInputWinScore",name:"score_win",type:"number",autocomplete:"off","onUpdate:modelValue":t[5]||(t[5]=function(e){return i.score_win=e})},null,512),[[s["y"],i.score_win]])])])}var Q={name:"MainPageFront",data:function(){return{title:"",message_start:"",message_end_win:"",message_end_loss:"",score_win:1}},methods:{export:function(){return{title:this.title,message_start:this.message_start,message_end_win:this.message_end_win,message_end_loss:this.message_end_loss,score_win:this.score_win}},verify:function(){return""!==this.title&&(""!==this.message_start&&(""!==this.message_end_win&&""!==this.message_end_loss))}},mounted:function(){var e=this;this.emitter.on("submit",(function(){e.verify()&&e.emitter.emit("submitOptions",e.export())}))}};Q.render=S;var x=Q,C={class:"mpWrapper"},I={class:"mpQuestionTitle"},M=Object(s["g"])("br",null,null,-1),L={class:"mpAnswerSpan"},R=Object(s["g"])("br",null,null,-1),P={class:"mpAnswerSpan"},J=Object(s["g"])("br",null,null,-1),A={class:"mpAnswerSpan"},E=Object(s["g"])("br",null,null,-1),U={class:"mpAnswerSpan"},W=Object(s["g"])("br",null,null,-1),D={class:"mpQuestionNavigation"};function T(e,t,n,r,i,a){return Object(s["p"])(),Object(s["d"])("div",C,[Object(s["g"])("div",I,"Question "+Object(s["w"])(i.questionNav+1),1),Object(s["C"])(Object(s["g"])("input",{class:"mpQuestionInput",placeholder:"Enter your question here",name:"text",autocomplete:"off","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.questionInput[i.questionNav].text=e})},null,512),[[s["y"],i.questionInput[i.questionNav].text]]),M,Object(s["g"])("span",L,[Object(s["C"])(Object(s["g"])("input",{autocomplete:"off",class:1===i.questionInput[i.questionNav].correct?"mpQuestionCorrect":"mpQuestion",placeholder:"Enter option 1 here","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.questionInput[i.questionNav].answer1=e})},null,2),[[s["y"],i.questionInput[i.questionNav].answer1]]),Object(s["g"])("button",{class:"mpCorrect",onClick:t[3]||(t[3]=function(e){return i.questionInput[i.questionNav].correct=1})},"Correct"),R]),Object(s["g"])("span",P,[Object(s["C"])(Object(s["g"])("input",{autocomplete:"off",class:2===i.questionInput[i.questionNav].correct?"mpQuestionCorrect":"mpQuestion",placeholder:"Enter option 2 here","onUpdate:modelValue":t[4]||(t[4]=function(e){return i.questionInput[i.questionNav].answer2=e})},null,2),[[s["y"],i.questionInput[i.questionNav].answer2]]),Object(s["g"])("button",{class:"mpCorrect",onClick:t[5]||(t[5]=function(e){return i.questionInput[i.questionNav].correct=2})},"Correct"),J]),Object(s["g"])("span",A,[Object(s["C"])(Object(s["g"])("input",{autocomplete:"off",class:3===i.questionInput[i.questionNav].correct?"mpQuestionCorrect":"mpQuestion",placeholder:"Enter option 3 here","onUpdate:modelValue":t[6]||(t[6]=function(e){return i.questionInput[i.questionNav].answer3=e})},null,2),[[s["y"],i.questionInput[i.questionNav].answer3]]),Object(s["g"])("button",{class:"mpCorrect",onClick:t[7]||(t[7]=function(e){return i.questionInput[i.questionNav].correct=3})},"Correct"),E]),Object(s["g"])("span",U,[Object(s["C"])(Object(s["g"])("input",{autocomplete:"off",class:4===i.questionInput[i.questionNav].correct?"mpQuestionCorrect":"mpQuestion",placeholder:"Enter option 4 here","onUpdate:modelValue":t[8]||(t[8]=function(e){return i.questionInput[i.questionNav].answer4=e})},null,2),[[s["y"],i.questionInput[i.questionNav].answer4]]),Object(s["g"])("button",{class:"mpCorrect",onClick:t[9]||(t[9]=function(e){return i.questionInput[i.questionNav].correct=4})},"Correct"),W]),Object(s["g"])("div",D,[Object(s["g"])("button",{class:"mpQuestionNavigationPrevious",onClick:t[10]||(t[10]=function(e){return i.questionNav-=1}),disabled:this.leftDisabled}," Previous ",8,["disabled"]),Object(s["g"])("button",{class:"mpQuestionNavigationNew",onClick:t[11]||(t[11]=function(){return a.newQuestion&&a.newQuestion.apply(a,arguments)})}," New question "),Object(s["g"])("button",{class:"mpQuestionNavigationNext",onClick:t[12]||(t[12]=function(e){return i.questionNav+=1}),disabled:this.rightDisabled}," Next ",8,["disabled"])])])}var V={name:"MainPageQuestionInput",data:function(){return{questionNav:0,questionInput:[{text:"",answer1:"",answer2:"",answer3:"",answer4:"",correct:-1}]}},methods:{newQuestion:function(){this.questionInput.push({text:"",answer1:"",answer2:"",answer3:"",answer4:"",correct:-1}),this.questionNav=this.questionInput.length-1},validate:function(){for(var e=0;e<this.questionInput.length;e++){if(""==this.questionInput[e].text)return!1;if(""==this.questionInput[e].answer1)return!1;if(""==this.questionInput[e].answer2)return!1;if(""==this.questionInput[e].answer3)return!1;if(""==this.questionInput[e].answer4)return!1;if(-1===this.questionInput[e].correct)return!1}return!0},export:function(){for(var e=[],t=this.questionInput,n=0;n<t.length;n++)e.push({text:JSON.stringify(t[n].text),answer1:JSON.stringify(t[n].answer1),answer2:JSON.stringify(t[n].answer2),answer3:JSON.stringify(t[n].answer3),answer4:JSON.stringify(t[n].answer4),correct:t[n].correct});return e}},mounted:function(){var e=this;this.emitter.on("submit",(function(){e.validate()&&e.emitter.emit("submitQuestions",e.export())}))},computed:{leftDisabled:function(){return!(this.questionNav-1>=0)},rightDisabled:function(){return!(this.questionNav+1<this.questionInput.length)}}};V.render=T;var B=V,F={class:"mpWrapper"},$={key:0,class:"mpSubmitQuiz"},Y=Object(s["g"])("span",{class:"mpSubmitQuizMessage"},"Finished? Submit your quiz now!",-1),H=Object(s["g"])("br",null,null,-1),G={key:1,class:"mpSubmitQuizMessage"},K=Object(s["f"])("Cool, here's your link");function X(e,t,n,r,i,a){var u=this,o=Object(s["u"])("router-link");return Object(s["p"])(),Object(s["d"])("div",F,[i.showLink?Object(s["e"])("",!0):(Object(s["p"])(),Object(s["d"])("div",$,[Y,H,Object(s["g"])("button",{class:"mpSubmitQuizButton",onClick:t[1]||(t[1]=function(e){return u.emitter.emit("submit")})},"Submit quiz and get your link")])),i.showLink?(Object(s["p"])(),Object(s["d"])("div",G,[Object(s["g"])(o,{to:this.resultLink,target:"_blank"},{default:Object(s["B"])((function(){return[K]})),_:1},8,["to"])])):Object(s["e"])("",!0)])}var Z={name:"MainPageSubmit",data:function(){return{showLink:!1,resultLink:""}},mounted:function(){var e=this;this.emitter.on("submitLink",(function(t){e.showLink=!0,e.resultLink=t}))}};Z.render=X;var ee=Z,te={name:"MainPage",components:{MainPageFront:x,MainPageQuestionInput:B,MainPageSubmit:ee,NavigationBar:w},data:function(){return{pageNavStatus:0,pageNavMax:3,showLink:!1,quizData:{title:"",message_start:"",message_end_win:"",message_end_loss:"",score_win:0,question:void 0}}},methods:{submit:function(){this.emitter.emit("submit")}},mounted:function(){var e=this;this.emitter.on("submitOptions",(function(t){e.quizData=Object(p["a"])(Object(p["a"])({},e.quizData),t)})),this.emitter.on("submitQuestions",(function(t){e.quizData=Object(p["a"])(Object(p["a"])({},e.quizData),{},{question:t}),f.createQuiz(e.quizData).then((function(t){e.emitter.emit("submitLink",t),e.pageNavStatus=2,e.showLink=!0}))}))}};te.render=l;var ne=te,se={class:"globalWrapper"};function re(e,t,n,r,i,a){var u=Object(s["u"])("Loading"),o=Object(s["u"])("QuizFront"),c=Object(s["u"])("QuizQuestionPage"),l=Object(s["u"])("QuizResultPage");return Object(s["p"])(),Object(s["d"])("div",se,[-1==i.pageNavStatus&&void 0!=this.errorMessage?(Object(s["p"])(),Object(s["d"])(u,{key:0,message:this.errorMessage},null,8,["message"])):-1==i.pageNavStatus?(Object(s["p"])(),Object(s["d"])(u,{key:1})):0==i.pageNavStatus?(Object(s["p"])(),Object(s["d"])(o,{key:2,quiz:this.quiz,quizData:this.quiz.options},null,8,["quiz","quizData"])):1==i.pageNavStatus?(Object(s["p"])(),Object(s["d"])(c,{key:3,quiz:this.quiz},null,8,["quiz"])):2==i.pageNavStatus?(Object(s["p"])(),Object(s["d"])(l,{key:4,quiz:this.quiz,quiz_answer:this.quiz_answer,marks:this.marks,won:this.won,id:this.id},null,8,["quiz","quiz_answer","marks","won","id"])):Object(s["e"])("",!0)])}n("99af");var ie={class:"globalWrapper"},ae={className:"globalLoadingMessage"};function ue(e,t,n,r,i,a){return Object(s["p"])(),Object(s["d"])("div",ie,[Object(s["g"])("span",ae,Object(s["w"])(n.message),1)])}var oe={name:"Loading",props:{message:{default:"Loading...",type:String}}};oe.render=ue;var ce=oe,le={class:"mpWrapper"},pe={class:"qTitle"},be={class:"qStartMessage"},de={class:"qQuestionCount"},ge=Object(s["g"])("br",null,null,-1),me=Object(s["g"])("br",null,null,-1);function Oe(e,t,n,r,i,a){var u=this;return Object(s["p"])(),Object(s["d"])("div",le,[Object(s["g"])("div",pe,Object(s["w"])(JSON.parse(n.quiz.option.title)),1),Object(s["g"])("span",be,Object(s["w"])(JSON.parse(n.quiz.option.message_start)),1),Object(s["g"])("span",de," You have to answer "+Object(s["w"])(n.quiz.question.length)+" questions and need to answer "+Object(s["w"])(n.quiz.option.score_win)+" to win ",1),ge,me,Object(s["g"])("button",{class:"qStartButton",onClick:t[1]||(t[1]=function(e){return u.emitter.emit("next")})},"Start Quiz")])}var je={name:"QuizFront",props:{quiz:Object}};je.render=Oe;var he=je,fe={class:"mpWrapper"},ve={class:"qTitle"},qe={class:"qQuestion"},we=Object(s["g"])("br",null,null,-1),ze=Object(s["g"])("br",null,null,-1),Ne=Object(s["g"])("br",null,null,-1),ke=Object(s["g"])("br",null,null,-1),_e=Object(s["g"])("br",null,null,-1),ye=Object(s["g"])("br",null,null,-1);function Se(e,t,n,r,i,a){var u=this;return Object(s["p"])(),Object(s["d"])("div",fe,[Object(s["g"])("div",ve,Object(s["w"])(JSON.parse(n.quiz.option.title)),1),Object(s["g"])("span",qe,Object(s["w"])(JSON.parse(n.quiz.question[this.quiz_state].text)),1),we,ze,Object(s["g"])("button",{className:"qAnswerButton",onClick:t[1]||(t[1]=function(e){return u.selectAnswer(1)})},Object(s["w"])(JSON.parse(n.quiz.question[this.quiz_state].answer1)),1),Ne,Object(s["g"])("button",{className:"qAnswerButton",onClick:t[2]||(t[2]=function(e){return u.selectAnswer(2)})},Object(s["w"])(JSON.parse(n.quiz.question[this.quiz_state].answer2)),1),ke,Object(s["g"])("button",{className:"qAnswerButton",onClick:t[3]||(t[3]=function(e){return u.selectAnswer(3)})},Object(s["w"])(JSON.parse(n.quiz.question[this.quiz_state].answer3)),1),_e,Object(s["g"])("button",{className:"qAnswerButton",onClick:t[4]||(t[4]=function(e){return u.selectAnswer(4)})},Object(s["w"])(JSON.parse(n.quiz.question[this.quiz_state].answer4)),1),ye])}var Qe={name:"QuizQuestionPage",props:{quiz:Object},data:function(){return{quiz_state:0,quiz_answer:[]}},methods:{selectAnswer:function(e){this.quiz_answer[this.quiz_state]=e,this.quiz_state>=this.quiz.question.length-1?this.emitter.emit("completedQuiz",this.quiz_answer):this.quiz_state+=1}}};Qe.render=Se;var xe=Qe,Ce={class:"mpWrapper"},Ie={class:"qTitle"},Me={class:"qAnswerEnd"},Le={class:"qEndMessage"},Re=Object(s["g"])("br",null,null,-1),Pe={class:"qResultQuestion"},Je={class:"qResultAnswer"},Ae={class:"qSaveResult"},Ee=Object(s["f"])(" Want to show people how you did? Save you results!"),Ue=Object(s["g"])("br",null,null,-1),We=Object(s["g"])("br",null,null,-1),De=Object(s["g"])("br",null,null,-1),Te={class:"qResultLink"},Ve=Object(s["f"])("Cool, here's your link");function Be(e,t,n,r,i,a){var u=this,o=Object(s["u"])("router-link");return Object(s["p"])(),Object(s["d"])("div",Ce,[Object(s["g"])("div",Ie,Object(s["w"])(JSON.parse(this.quiz.option.title)),1),Object(s["g"])("div",Me,[Object(s["g"])("span",Le,Object(s["w"])(this.won?JSON.parse(this.quiz.option.message_end_win):JSON.parse(this.quiz.option.message_end_loss)),1),Re,(Object(s["p"])(!0),Object(s["d"])(s["a"],null,Object(s["t"])(n.quiz.question,(function(e,t){return Object(s["p"])(),Object(s["d"])("div",{key:t,class:n.marks[t]?"qCorrect":"qWrong"},[Object(s["g"])("div",Pe,Object(s["w"])(JSON.parse(e["text"])),1),Object(s["g"])("div",Je,Object(s["w"])(JSON.parse(e["answer"+n.quiz_answer[t]])),1)],2)})),128))]),Object(s["g"])("div",Ae,[Object(s["C"])(Object(s["g"])("div",null,[Ee,Ue,We,Object(s["C"])(Object(s["g"])("input",{placeholder:"Your name here",class:"qSaveInput",name:"qNameInput",autocomplete:"off","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.savedName=e}),type:"text"},null,512),[[s["y"],i.savedName]]),Object(s["g"])("button",{class:"qSaveButton",onClick:t[2]||(t[2]=function(e){return u.saveResult()})}," Save Result "),De],512),[[s["z"],!this.savedLink]]),Object(s["C"])(Object(s["g"])("div",Te,[Object(s["g"])(o,{target:"_blank",to:this.resultLinkURL,append:""},{default:Object(s["B"])((function(){return[Ve]})),_:1},8,["to"])],512),[[s["z"],this.savedLink]])])])}var Fe={name:"QuizResultPage",props:{quiz:Object,quiz_answer:Array,marks:Array,won:Boolean,id:Number},data:function(){return{savedLink:!1,savedName:"",resultLinkURL:""}},computed:{results:function(){return{name:this.savedName,quiz_answer:this.quiz_answer,marks:this.marks}}},methods:{saveResult:function(){var e=this;f.createResult(this.id,this.results).then((function(t){e.resultLinkURL="/"+e.$route.params.id+"/"+t,e.savedLink=!0}))}}};Fe.render=Be;var $e=Fe,Ye={name:"QuizPage",components:{Loading:ce,QuizFront:he,QuizQuestionPage:xe,QuizResultPage:$e},data:function(){return{pageNavStatus:-1,pageNavMax:3,id:this.$route.params.id,quiz:void 0,quiz_answer:[],marks:[],won:!1,errorMessage:void 0}},created:function(){var e=this;this.quiz={option:void 0,question:void 0},f.getQuizOptions(this.id).then((function(t){void 0===t?(e.errorMessage="Error! No such quiz!",e.pageNavStatus=-1):e.quiz.option=t})),void 0===this.errorMessage&&f.getQuizQuestions(this.id).then((function(t){void 0===t?(e.errorMessage="Error! Unable to load questions!",e.pageNavStatus=-1):(e.quiz.question=t,e.emitter.emit("next"))})),this.emitter.on("next",(function(){e.pageNavStatus+=1})),this.emitter.on("completedQuiz",(function(t){e.markAnswers(t),e.quiz_answer=t,e.pageNavStatus+=1}))},methods:{markAnswers:function(e){for(var t=[],n=0,s=0;s<this.quiz.question.length;s++)t=t.concat(e[s]===this.quiz.question[s].correct),e[s]===this.quiz.question[s].correct&&(n+=1);this.marks=t,this.won=n>=this.quiz.option.score_win}}};Ye.render=re;var He=Ye,Ge={class:"globalWrapper"},Ke={key:1,style:{display:"flex","justify-content":"center","align-items":"center","flex-direction":"column",width:"100%",height:"100%"}},Xe={class:"qTitle"},Ze={class:"rResultName"},et=Object(s["g"])("br",null,null,-1),tt=Object(s["g"])("br",null,null,-1),nt={className:"qResultQuestion"},st=Object(s["g"])("br",null,null,-1),rt={className:"qResultAnswer"},it=Object(s["g"])("br",null,null,-1),at=Object(s["g"])("br",null,null,-1);function ut(e,t,n,r,i,a){var u=Object(s["u"])("Loading");return Object(s["p"])(),Object(s["d"])("div",Ge,[void 0!==i.errorMessage?(Object(s["p"])(),Object(s["d"])(u,{key:0,message:this.errorMessage},null,8,["message"])):(Object(s["p"])(),Object(s["d"])("div",Ke,[Object(s["g"])("div",Xe,Object(s["w"])(JSON.parse(this.quiz.option.title)),1),Object(s["g"])("span",Ze,"Showing results for '"+Object(s["w"])(this.name)+"' on the "+Object(s["w"])(JSON.parse(this.quiz.option.title)),1),et,tt,(Object(s["p"])(!0),Object(s["d"])(s["a"],null,Object(s["t"])(i.quiz.question,(function(e,t){return Object(s["p"])(),Object(s["d"])("span",{key:t,class:i.marks[t]?"qCorrect":"qWrong"},[Object(s["g"])("span",nt,Object(s["w"])(JSON.parse(e.text)),1),st,Object(s["g"])("span",rt,Object(s["w"])(JSON.parse(e["answer"+i.quiz_answer[t]])),1),it,at],2)})),128))]))])}var ot={name:"ResultPage",components:{Loading:ce},data:function(){return{id:this.$route.params.id,result:this.$route.params.result,errorMessage:void 0,quiz:{},name:"",quiz_answer:[],marks:[],date:new Date}},created:function(){var e=this;this.quiz={option:void 0,question:void 0},f.getQuizOptions(this.id).then((function(t){void 0===t?(e.errorMessage="Error! No such quiz!",e.pageNavStatus=-1):e.quiz.option=t})),void 0===this.errorMessage&&f.getQuizQuestions(this.id).then((function(t){void 0===t?(e.errorMessage="Error! Unable to load questions!",e.pageNavStatus=-1):(e.quiz.question=t,e.emitter.emit("next"))})),f.getQuizResponce(this.id,this.result).then((function(t){void 0===t?e.errorMessage="Error! Unable to show result":(e.name=t.name,e.quiz_answer=t.quiz_answer,e.marks=t.marks,e.date=t.date)}))},methods:{}};ot.render=ut;var ct=ot,lt={class:"globalWrapper"},pt={key:2,style:{display:"flex","justify-content":"center","align-items":"center","flex-direction":"column",width:"100%",height:"100%"}},bt={class:"sbTitle"},dt={key:0},gt={class:"sbEntryPos"},mt=Object(s["f"])(),Ot=Object(s["g"])("span",{class:"sbEntryName"},"No Entry",-1),jt={key:1,style:{display:"flex","justify-content":"center","align-items":"center","flex-direction":"column"}},ht={class:"sbEntryPos"},ft=Object(s["f"])(),vt={class:"sbEntryName"},qt={class:"sbEntryScore"};function wt(e,t,n,r,i,a){var u=Object(s["u"])("Loading");return Object(s["p"])(),Object(s["d"])("div",lt,[-1==e.pageNavStatus&&void 0!==this.errorMessage||void 0===this.quiz.option?(Object(s["p"])(),Object(s["d"])(u,{key:0,message:this.errorMessage},null,8,["message"])):-1==e.pageNavStatus?(Object(s["p"])(),Object(s["d"])(u,{key:1})):(Object(s["p"])(),Object(s["d"])("div",pt,[Object(s["g"])("span",bt,Object(s["w"])(JSON.parse(this.quiz.option.title))+"'s Scoreboard",1),(Object(s["p"])(!0),Object(s["d"])(s["a"],null,Object(s["t"])(this.quiz.top10,(function(e,t){return Object(s["p"])(),Object(s["d"])("div",{class:"sbEntry",key:t},[void 0===e?(Object(s["p"])(),Object(s["d"])("span",dt,[Object(s["g"])("span",gt,"#"+Object(s["w"])(t+1),1),mt,Ot])):(Object(s["p"])(),Object(s["d"])("span",jt,[Object(s["g"])("span",null,[Object(s["g"])("span",ht,"#"+Object(s["w"])(t+1),1),ft,Object(s["g"])("span",vt,Object(s["w"])(e.name),1)]),Object(s["g"])("span",qt,"Score: "+Object(s["w"])(e.score),1)]))])})),128))]))])}var zt={name:"Scoreboard",components:{Loading:ce},data:function(){return{id:this.$route.params.id,showStage:-1,errorMessage:void 0,quiz:{}}},created:function(){var e=this;this.quiz={option:void 0,top10:void 0},f.getQuizOptions(this.id).then((function(t){void 0!==t?e.quiz.option=t:(e.errorMessage="Error! Unable to load scoreboard.",e.showStage=-1)})),void 0===this.errorMessage&&f.getQuizTop10(this.id).then((function(t){void 0!==t?(e.quiz.top10=t,e.showStage=0):(e.errorMessage="Error! Unable to load top 10",e.showStage=-1)})),console.log(this.quiz)}};zt.render=wt;var Nt=zt,kt={class:"globalWrapper"},_t=Object(s["g"])("span",{className:"globalLoadingMessage"},"Page not found",-1);function yt(e,t,n,r,i,a){return Object(s["p"])(),Object(s["d"])("div",kt,[_t])}var St={name:"NotFound"};St.render=yt;var Qt=St,xt=Object(r["a"])();n("b29b");var Ct=[{path:"/",name:"Home",component:ne},{path:"/:id/",name:"Quiz",component:He,pathToRegexpOptions:{strict:!0}},{path:"/:id/r/:result",name:"Result",component:ct},{path:"/:id/scoreboard",name:"Scoreboard",component:Nt},{path:"/:pathMatch(.*)",name:"NotFound",component:Qt}],It=Object(o["a"])({history:Object(o["b"])("/QuizMakerVue/"),base:"/quizmaker_vue/",routes:Ct}),Mt=Object(s["c"])(u);Mt.use(It),Mt.config.globalProperties.emitter=xt,Mt.mount("#app")},b29b:function(e,t,n){}});
//# sourceMappingURL=index.7d6e3f64.js.map