(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{31:function(e,t,n){e.exports=n(49)},49:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(26),u=n.n(c),i=n(6),l=n(19),o=n(4),s=n(8),m=n.n(s),f=n(14),p=n(17);n(37),n(50),n(51);p.a.initializeApp({apiKey:"AIzaSyCtcDuOmtuRfH4djZprvguxUzVkLEz-GqY",authDomain:"nwitter-8b0fd.firebaseapp.com",projectId:"nwitter-8b0fd",storageBucket:"nwitter-8b0fd.appspot.com",messagingSenderId:"328124011891",appId:"1:328124011891:web:313651f109a744d3c4a106"});var d=p.a,b=p.a.auth(),h=p.a.firestore(),E=p.a.storage(),v=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),l=Object(i.a)(u,2),o=l[0],s=l[1],p=Object(a.useState)(!0),d=Object(i.a)(p,2),h=d[0],E=d[1],v=Object(a.useState)(""),g=Object(i.a)(v,2),O=g[0],j=g[1],w=function(e){var t=e.target,n=t.name,a=t.value;"\uc774\uba5c"===n?c(a):"\uc554\ud638"===n&&s(a)},x=function(){var e=Object(f.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!h){e.next=8;break}return e.next=5,b.createUserWithEmailAndPassword(n,o);case 5:e.sent,e.next=11;break;case 8:return e.next=10,b.signInWithEmailAndPassword(n,o);case 10:e.sent;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),j(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:x},r.a.createElement("input",{name:"\uc774\uba5c",type:"email",placeholder:"Email",value:n,onChange:w,required:!0}),r.a.createElement("input",{name:"\uc554\ud638",type:"password",placeholder:"Password",value:o,onChange:w,required:!0}),r.a.createElement("input",{type:"submit",value:h?"Create Account":"Log In"}),O),r.a.createElement("span",{onClick:function(){return E((function(e){return!e}))}},h?"Sign In":"Create Account"))},g=function(){var e=function(){var e=Object(f.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Google"===(n=t.target.name)?a=new d.auth.GoogleAuthProvider:"Github"===n&&(a=new d.auth.GithubAuthProvider).addScope("repo"),e.next=4,b.signInWithPopup(a).then((function(e){e.credential.accessToken,e.user})).catch((function(e){var t=e.code;e.message,e.email,e.credential;"auth/account-exists-with-different-credential"===t?alert("You have signed up with a different provider for that email."):console.error(e)}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",null,r.a.createElement("button",{name:"Google",onClick:e},"Continue with Google"),r.a.createElement("button",{name:"Github",onClick:e},"Continue with Github")))},O=n(30),j=function(e){var t=e.nweetObj,n=e.isOwner,c=Object(a.useState)(!1),u=Object(i.a)(c,2),l=u[0],o=u[1],s=Object(a.useState)(t.text),p=Object(i.a)(s,2),d=p[0],b=p[1],v=function(){o((function(e){return!e})),l||b(t.text)},g=function(){var e=Object(f.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.doc("nweets/".concat(t.id)).update({text:d});case 2:o(!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,l?r.a.createElement(r.a.Fragment,null,r.a.createElement("form",null,r.a.createElement("input",{onChange:function(e){var t=e.target.value;b(t)},value:d,required:!0}),r.a.createElement("button",{onClick:g},"Submit")),r.a.createElement("button",{onClick:v},"Cancle")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,t.text),t.attachmentUrl&&r.a.createElement("img",{src:t.attachmentUrl,width:"50px",height:"50px"}),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(e){window.confirm("\uc0ad\uc81c?")&&(h.doc("nweets/".concat(t.id)).delete(),""!==t.attachmentUrl&&E.refFromURL(t.attachmentUrl).delete())}},"Delete Nweet"),r.a.createElement("button",{onClick:v},"Edit Nweet"))))},w=n(27),x=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(i.a)(n,2),u=c[0],l=c[1],o=Object(a.useState)(""),s=Object(i.a)(o,2),p=s[0],d=s[1],b=function(){var e=Object(f.a)(m.a.mark((function e(n){var a,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a="",""===p){e.next=10;break}return r=E.ref().child("".concat(t.uid,"/").concat(Object(w.v4)())),e.next=6,r.putString(p,"data_url");case 6:return c=e.sent,e.next=9,c.ref.getDownloadURL();case 9:a=e.sent;case 10:return e.next=12,h.collection("nweets").add({text:u,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a});case 12:l(""),d("");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",null,r.a.createElement("input",{value:u,onChange:function(e){e.preventDefault();var t=e.target.value;l(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),r.a.createElement("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;d(t)},n.readAsDataURL(t)}}),r.a.createElement("input",{type:"submit",onClick:b,value:"Nweet"}),p&&r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:p,width:"50px",height:"50px",alt:"aa"}),r.a.createElement("button",{onClick:function(){return d("")}},"Clear")))},y=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(i.a)(n,2),u=c[0],l=c[1];return Object(a.useEffect)((function(){h.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(O.a)({id:e.id},e.data())}));l(t)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{userObj:t}),r.a.createElement("div",null,u.map((function(e,n){return r.a.createElement(j,{key:n,nweetObj:e,isOwner:e.creatorId===t.uid})}))))},k=function(e){var t=e.userObj,n=e.refreshUser,c=Object(a.useState)([]),u=Object(i.a)(c,2),l=u[0],o=u[1],s=Object(a.useState)(t.displayName),p=Object(i.a)(s,2),d=p[0],E=p[1],v=function(){var e=Object(f.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t.displayName===d){e.next=5;break}return e.next=4,t.updateProfile({displayName:d});case 4:n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(f.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("nweets").where("creatorId","==",t.uid).orderBy("createdAt","asc").get();case 2:n=e.sent,o(n.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){g()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:v},r.a.createElement("input",{type:"text",onChange:function(e){var t=e.target.value;E(t)},placeholder:"Display Name"}),r.a.createElement("input",{type:"submit",value:"Update Profile"})),r.a.createElement("button",{onClick:function(){b.signOut()}},"Log Out"),l.map((function(e,n){return r.a.createElement(j,{key:n,nweetObj:e,isOwner:e.creatorId===t.uid})})))},C=function(e){var t=e.userObj;return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/profile"},t.displayName,"\uc758 Profile"))))},S=function(e){var t=e.isLoggedIn,n=e.userObj,a=e.refreshUser;return r.a.createElement(l.a,null,t&&r.a.createElement(C,{userObj:n}),r.a.createElement(o.d,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{exact:!0,path:"/"},r.a.createElement(y,{userObj:n})),r.a.createElement(o.b,{exact:!0,path:"/profile"},r.a.createElement(k,{refreshUser:a,userObj:n}))):r.a.createElement(o.b,{exact:!0,path:"/"},r.a.createElement(g,null)),r.a.createElement(o.a,{from:"*",to:"/"})))};var U=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(null),l=Object(i.a)(u,2),o=l[0],s=l[1];return Object(a.useEffect)((function(){b.onAuthStateChanged((function(e){s(!!e&&{uid:e.uid,displayName:e.displayName,updateProfile:function(t){return e.updateProfile(t)}}),c(!0)}))}),[]),r.a.createElement(r.a.Fragment,null,n?r.a.createElement(S,{refreshUser:function(){var e=b.currentUser;s({uid:e.uid,displayName:e.displayName,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(o),userObj:o}):"initializing...")};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.38d418f8.chunk.js.map