(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(67)},57:function(e,t){e.exports="data:image/gif;base64,R0lGODlhHgAlAOeVAAAAAAEBAQMDAwYGBgcHBwwMDA4ODg8PDxISEhMTExQUFBUVFRYWFhcXFxgYGBkZGRoaGhsbGxwcHB0dHR4eHh8fHyAgICEhISIiIiMjIyQkJCYmJigoKCkpKSoqKisrKywsLC0tLTAwMDExMTMzMzc3Nzk5OT4+Pj8/P0BAQEFBQUNDQ09PT1FRUVVVVVlZWVpaWlxcXF1dXV5eXl9fX2FhYWJiYmNjY2RkZGVlZWZmZmdnZ2hoaGpqamtra2xsbG1tbXBwcHFxcXp6eoGBgYKCgoODg4uLi4yMjI2NjY+Pj5CQkJaWlpeXl5iYmJmZmZubm5ycnJ6enqSkpKWlpaioqKurq6ysrK2trbKysrOzs7e3t7u7u7y8vL29vb6+vr+/v8DAwMHBwcLCwsTExMXFxcbGxsjIyMnJycrKysvLy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NXV1dbW1tfX19jY2NnZ2dra2tvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5OXl5ebm5ufn5+zs7O3t7e7u7u/v7/Dw8PHx8fLy8vPz8/T09PX19fj4+Pv7+/z8/P39/f///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAP8ALAAAAAAeACUAAAj+AP8JHEhwYAYHHgoqXMjwn4UNGS40ZNgjRw4cNmjUwFEjBg0YMnCItJjDBouGadzEgWNmSxg1bNiUGXOGTRs2cOLEaWOlB8MxhyZRYmQHzyA/gPLYyeNnEKFHlChNWtSlRgeFRvoIjQRIjx44buy8iSOHjp5EQik5EmMjhMIeX+7gsaMmDRkuXryEKVOGixY1cutsCcJQxQ0hQoIAAfJjBw4eOnj4qDHDB2IgLSYypPCPggbNoEODPoGidGnSplObTtHwxRIrWGJfoSJlipUrV6pUuRJbNpaFNbIYgkQckqM9aOAIKjRID59GxSEViqOwRBGtlbJXmkQIz5w+c+W4/JGknRKcIgtlUPnDqJH7RYACAZID580aOojcN1IEJgZDF0Q8EQUUBDbhBBNHKIFEEks8QSAUTwyxgmgDgQCCCSGIQKFmGPzDQAUbTtRhAiGK+M8BJTbUIQIpMtShAy0u1KEEMSo0Y40FfWYBjgS9yONAHT7wo0AdXjVkhx+QcOQ/Gwz5T4cgLunklAtEoAABAwxgAAQOQJBiAhwsNEKUITYQQYcFTRBBixEkUIAAAAAQwAALZDBRQAA7"},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(30),s=a.n(i),l=a(2),o=a(3),c=a(5),m=a(4),d=a(6),u=a(12),p={alignContent:"right",padding:"0px 2px 2px 2px",width:"90px",display:"inline-block",marginBottom:"10px"},h={height:"200px",width:"100%",display:"block",margin:"auto"},g={fontSize:"22px",position:"absolute",bottom:"0",left:"0",width:"100%",height:"50px",background:"#00838f",opacity:".6",padding:"0, 5%, 30px, 5%"},E={padding:"10%",color:"white"},f={padding:"24px, 24px, 5px, 24px",margin:"20px"};var v=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"col s4"},r.a.createElement("div",{className:"card z-depth-4"},r.a.createElement("div",{className:"card-image"},r.a.createElement("a",{className:"modal-trigger",href:"#".concat(e.id)},r.a.createElement("img",{className:"responsive-img",style:h,src:e.image,alt:e.title})),r.a.createElement("div",{className:"valign-wrapper",style:g},r.a.createElement("p",{className:"truncate",style:E},e.title))),r.a.createElement("div",{style:f},r.a.createElement("p",{className:"truncate"},e.description),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s2 offset-s7"},r.a.createElement("a",{className:"card-action btn text-center modal-trigger right-align cyan",style:p,href:"/trading-post/item/".concat(e.id)},"Details")))))))};var b=function(e){return console.log("PROPS: ",e),r.a.createElement("div",null,r.a.createElement("div",{className:"row"},e.items.map(function(e,t){return r.a.createElement(v,{title:e.title,description:e.description,image:e.picture,id:e._id,key:e._id})})))},y=a(7),N=a.n(y),w={user:function(){return N.a.get("https://trading-post-server.herokuapp.com/api/auth/user",{crossdomain:!0,withCredentials:!0})},signup:function(e){return N.a.post("https://trading-post-server.herokuapp.com/api/auth/signup",e)},signin:function(e){return N.a.post("https://trading-post-server.herokuapp.com/api/auth/login",e)},getRecentItems:function(){return N.a.get("https://trading-post-server.herokuapp.com/api/items/dateDown")},createNewItem:function(e,t){return console.log(t),N.a.post("https://trading-post-server.herokuapp.com/api/items/".concat(e),t)},users:function(){return N.a.get("https://trading-post-server.herokuapp.com/api/auth/users")},getUserInfo:function(e){return N.a.get("https://trading-post-server.herokuapp.com/api/users/"+e)},getSearchedItems:function(e,t){return console.log("category: "+e),console.log("searchTerm: "+t),N.a.get("https://trading-post-server.herokuapp.com/api/categories/"+e+"/"+t)},updateItem:function(e){return N.a.get("https://trading-post-server.herokuapp.com/api/items/single/"+e)},updateExistingItem:function(e,t){return N.a.put("https://trading-post-server.herokuapp.com/api/items/single/"+e,t)},getItemData:function(e){return N.a.get("https://trading-post-server.herokuapp.com/api/items/single/"+e)},deleteItem:function(e,t){return console.log(e),console.log(t),N.a.delete("https://trading-post-server.herokuapp.com/api/items/".concat(e,"/").concat(t))}};function I(e){return r.a.createElement("button",Object.assign({},e,{style:{margin:"auto"},className:"btn",type:"submit"}),"Search ",e.children)}var C=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={returnedItems:[],searchTerm:"",pg:"Landing",selectedCategory:"General",categories:["General","Books","Electronics","Jewelry","Tools","Clothing","Furniture","Games","Sports Equipment","Appliances"]},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(u.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault(),console.log(a.state.selectedCategory),console.log(a.state.searchTerm),w.getSearchedItems(a.state.selectedCategory,a.state.searchTerm).then(function(e){console.log(e.data),a.setState({returnedItems:e.data,searchTerm:""})})},a.loadItems=function(){w.getRecentItems().then(function(e){a.setState({returnedItems:e.data,isLoaded:!0})},function(e){a.setState({isLoaded:!0,error:e})})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.loadItems()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("form",{className:"search"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m5 l5",style:{"margin-top":"15px"}},r.a.createElement("select",{value:this.state.selectedCategory,id:"dropdown",onChange:function(t){return e.setState({selectedCategory:t.target.value})}},this.state.categories.map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("div",{className:"input-field col s12 m5 l5"},r.a.createElement("i",{class:"material-icons prefix"},"search"),r.a.createElement("input",{id:"search",type:"search",name:"searchTerm",value:this.state.searchTerm,onChange:this.handleInputChange,required:!0}),r.a.createElement("label",{for:"search"},"Seach for items")),r.a.createElement("div",{className:"col s12 m2 l2",style:{"margin-top":"10px"}},r.a.createElement(I,{onClick:this.handleFormSubmit}))))),r.a.createElement("div",null,r.a.createElement(b,{items:this.state.returnedItems})))}}]),t}(n.Component);function x(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col s4"},r.a.createElement("img",{src:e.image,className:"circle profile-pic responsive-img z-depth-4",alt:"Profile Pic"})),r.a.createElement("div",{className:"col s7 push-s1"},r.a.createElement("h3",null,e.username),r.a.createElement("p",null,e.description))))}function k(e){console.log(e);var t=e.userId;return console.log(t),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col s5 push-s1"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"center"},e.listTitle)),e.items.map(function(a){return r.a.createElement("tr",{key:a._id},r.a.createElement("td",null,r.a.createElement("a",{href:"/trading-post/item/"+a._id},a.title)),r.a.createElement("td",null,r.a.createElement("a",{href:"/trading-post/updateitem/"+a._id},"Update Item")),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.deleteUserItem(t,a._id)}},"Delete Item")))})))))}function S(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function j(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}var A=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={_id:"",isLoaded:!1,error:null,firstName:"",lastName:"",userName:"",city:"",state:"",phone:"",bio:"",profilePic:"",items:[],wishlist:[],searchTerm:"",pg:"Profile",categories:["General","Books","Electronics","Jewerly","Tools","Clothing","Furniture","Games","Sports Equipment","Appliances"]},a.loadUser=function(e){w.getUserInfo(e).then(function(e){console.log(e.data),a.setState({isLoaded:!0,error:null,_id:e.data._id,firstName:e.data.firstName,lastName:e.data.lastName,userName:e.data.userName,city:e.data.city,state:e.data.state,phone:e.data.phone,items:e.data.items,wishlist:e.data.wishlist,searchterm:e.data.searchTerm,bio:e.data.bio,profilePic:e.data.profilePic})},function(e){a.setState({isLoaded:!0,error:e})})},a.deleteUserItem=function(e,t){w.deleteItem(e,t).then(function(e){return console.log(e)})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;console.log("id "+t),this.loadUser(t,function(t){e.setState._id=t})}},{key:"render",value:function(){return console.log(this.state),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(x,{image:this.state.profilePic,username:this.state.userName,description:this.state.bio}),r.a.createElement(j,null,r.a.createElement(k,{listTitle:"Posts",userId:this.state._id,deleteUserItem:this.deleteUserItem,items:this.state.items}),r.a.createElement(k,{listTitle:"Wishlist",userId:this.state._id,items:this.state.wishlist})))}}]),t}(n.Component),O={width:"50%",height:"auto",display:"block",margin:"auto"},D={width:"100%",height:"680px",backgroundColor:"Black"};var U=function(){return r.a.createElement("div",{style:D},r.a.createElement("h1",{className:"center white-text"},"404 Page Not Found"),r.a.createElement("img",{style:O,src:"https://media1.tenor.com/images/84c4e8c1a24b84bece745d2dcd2a5aa8/tenor.gif?itemid=5551618",alt:"Sad Pikachu"}))},P=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",picture:"",description:"",selectedCategory:"General",condition:"",categories:["General","Books","Electronics","Jewelry","Tools","Clothing","Furniture","Games","Sports Equipment","Appliances"]},a.fileChangedHandler=function(e){a.setState({picture:e.target.files[0]})},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(u.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault(),console.log(a.state.selectedCategory),w.createNewItem(sessionStorage.getItem("UserId"),{_owner:sessionStorage.getItem("UserId"),title:a.state.title,picture:0===a.state.picture.length?"https://www.pluggedin.com/images/content-image/placeholder_book.jpg":a.state.picture,description:a.state.description,category:a.state.selectedCategory,condition:a.state.condition}).then(function(e){console.log("The item was posted "+e.data)})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(S,null,r.a.createElement("form",null,r.a.createElement("div",{className:"formCont"},r.a.createElement("h3",null,"Post your Item"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("input",{id:"title",type:"text",value:this.state.title,onChange:this.handleInputChange,name:"title",required:!0}),r.a.createElement("label",{for:"title"},"Add a Title")),r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("div",null,r.a.createElement("select",{className:"select-dropdown",value:this.state.selectedCategory,id:"dropdown",onChange:function(t){return e.setState({selectedCategory:t.target.value})}},this.state.categories.map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{id:"Description",type:"text",name:"description",value:this.state.description,onChange:this.handleInputChange,required:!0}),r.a.createElement("label",{for:"Description"},"Description")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{id:"Condition",type:"text",name:"condition",value:this.state.condition,onChange:this.handleInputChange,required:!0}),r.a.createElement("label",{for:"Condition"},"Condition"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{id:"picture",type:"text",name:"picture",onChange:this.handleInputChange,value:this.state.picture,required:!0}),r.a.createElement("label",{for:"picture"},"Add a Picture"))),r.a.createElement("button",{className:"btn",onClick:this.handleFormSubmit},"Add Item")))))}}]),t}(n.Component),T=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={_id:"",title:"",picture:"",description:"",selectedCategory:"General",condition:"",categories:["General","Books","Electronics","Jewelry","Tools","Clothing","Furniture","Games","Sports Equipment","Appliances"]},a.loadItemInfo=function(e){w.updateItem(e).then(function(e){console.log(e.data),a.setState({title:e.data.title,picture:e.data.picture,description:e.data.description,condition:e.data.condition,category:e.data.category,_owner:e.data._owner,isLoaded:!0})},function(e){a.setState({isLoaded:!0,error:e})})},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(u.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault(),console.log(a.state.selectedCategory),w.updateExistingItem(a.state._id,{title:a.state.title,picture:0===a.state.picture.length?"https://www.pluggedin.com/images/content-image/placeholder_book.jpg":a.state.picture,description:a.state.description,condition:a.state.condition}).then(function(e){console.log("The item was updated "+e.data)})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;console.log("id "+e),this.setState({_id:e}),this.loadItemInfo(e)}},{key:"render",value:function(){return r.a.createElement(S,null,r.a.createElement("form",null,r.a.createElement("div",{className:"formCont"},r.a.createElement("h3",null,"Update your Item"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s2"},r.a.createElement("label",{for:"title"},"Title:")),r.a.createElement("div",{className:"input-field col s10"},r.a.createElement("input",{id:"title",type:"text",value:this.state.title,onChange:this.handleInputChange,name:"title",required:!0}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s2"},r.a.createElement("label",{for:"Description"},"Description:")),r.a.createElement("div",{className:"input-field col s10"},r.a.createElement("input",{id:"Description",type:"text",name:"description",value:this.state.description,onChange:this.handleInputChange,required:!0}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s2"},r.a.createElement("label",{for:"Condition"},"Condition:")),r.a.createElement("div",{className:"input-field col s10"},r.a.createElement("input",{id:"Condition",type:"text",name:"condition",value:this.state.condition,onChange:this.handleInputChange,required:!0}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s2"},r.a.createElement("label",{for:"picture"},"Picture:")),r.a.createElement("div",{className:"input-field col s10"},r.a.createElement("input",{id:"picture",type:"text",name:"picture",onChange:this.handleInputChange,value:this.state.picture,required:!0}))),r.a.createElement("button",{className:"btn",onClick:this.handleFormSubmit},"Update Item"))))}}]),t}(n.Component),F={width:"50%",height:"600px",margin:"auto",display:"block"},B={padding:"2px, 2px, 2px, 2px",margin:"2px, 2px, 2px, 2px"};var G=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col s10 z-depth-4"},r.a.createElement("div",{className:"card "},r.a.createElement("h2",{className:"center"},e.title),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{className:"responsive-img",style:F,src:e.picture,alt:e.title})),r.a.createElement("div",{className:"card-content"},r.a.createElement("h5",null,"Description"),r.a.createElement("div",{className:"col s8"},r.a.createElement("p",null,e.description)),r.a.createElement("div",{className:"col s4"},r.a.createElement("p",null,"Condition: ",e.condition),r.a.createElement("a",{className:"btn green modal-trigger",href:"#modal1",style:B},"Email this user!")))))),r.a.createElement("div",{id:"modal1",className:"modal"},r.a.createElement("form",{action:"mailto:"+e.ownerEmail,method:"post",enctype:"text/plain"},r.a.createElement("br",null),"Hi, My name is ",r.a.createElement("input",{type:"text",name:"name",placeholder:"Name"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"comment",size:"50",placeholder:"Your Message Here"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Send"}),r.a.createElement("input",{type:"reset",value:"Reset"}))))},Q=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={id:"",picture:"",title:"",description:"",condition:"",ownerID:"",ownerEmail:""},a.getItem=function(e){w.getItemData(e).then(function(e){console.log(e.data),a.setState({id:e.data._id,picture:e.data.picture,title:e.data.title,description:e.data.description,condition:e.data.condition})},function(e){a.setState({isLoaded:!0,error:e})})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.getItem(e)}},{key:"render",value:function(){return r.a.createElement(G,{picture:this.state.picture,title:this.state.title,description:this.state.description,condition:this.state.condition,ownerEmail:this.state.ownerEmail})}}]),t}(n.Component);var M=function(e){var t=!0,n=!1;return e.isLoggedIn&&(t=!1,n=!0),r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper cyan darken-3"},r.a.createElement("a",{href:"/trading-post",className:"brand-logo center"},"The Trading Post"),r.a.createElement("ul",{id:"nav-mobile",className:"left hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement("a",{href:"/trading-post"},r.a.createElement("img",{src:a(57),style:{"margin-bottom":"-10px","margin-right":"7px"}}),"Home")),sessionStorage.getItem("UserId")?r.a.createElement("li",null,r.a.createElement("a",{href:"/trading-post/profile/"+sessionStorage.getItem("UserId")},"Profile")):console.log("not logged in")),r.a.createElement("ul",{className:"right hide-on-med-and-down"},t&&r.a.createElement("li",null,r.a.createElement("a",{className:"waves-effect waves-light btn",href:"/trading-post/signin"},"Sign In",r.a.createElement("i",{className:"material-icons right"},"account_circle"))),n&&r.a.createElement("li",null,r.a.createElement("a",{className:"waves-effect waves-light btn",onClick:function(){sessionStorage.removeItem("UserId")}},"Sign Out",r.a.createElement("i",{className:"material-icons right"},"account_circle"))),r.a.createElement("li",null,r.a.createElement("a",{className:"waves-effect waves-light btn",href:"/trading-post/signup"},"Sign up",r.a.createElement("i",{className:"material-icons right"},"account_circle"))))))},L=a(14),H=a.n(L),R=a(16),_=a(13),J=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={userName:"",password:""},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(u.a)({},n,r))},a.handleFormSubmit=function(){var e=Object(R.a)(H.a.mark(function e(t){var n;return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!a.state.userName||!a.state.password){e.next=5;break}return n={userName:a.state.userName,password:a.state.password},e.next=5,w.signin(n).then(function(e){console.log({res:e},"login res"),sessionStorage.setItem("UserId",e.data.user_id),a.setState({userName:"",password:""}),a.props.history.push("/trading-post/profile/".concat(e.data.user_id))});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("input",{value:this.state.userName,onChange:this.handleInputChange,name:"userName",placeholder:"Username",type:"text"}),r.a.createElement("input",{value:this.state.password,onChange:this.handleInputChange,name:"password",placeholder:"Password",type:"password"}),r.a.createElement("button",{onClick:this.handleFormSubmit},"Sign In")))}}]),t}(n.Component),Y=Object(_.e)(J),q=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={firstName:"",lastName:"",userName:"",password:"",email:"",phone:"",city:"",state:"",bio:"",passwordConfirm:""},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(u.a)({},n,r))},a.handleFormSubmit=function(){var e=Object(R.a)(H.a.mark(function e(t){var n;return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(a.state.firstName&&a.state.lastName&&a.state.userName&&a.state.password&&a.state.passwordConfirm&&a.state.email&&a.state.phone&&a.state.city&&a.state.state)){e.next=13;break}if(a.state.password!==a.state.passwordConfirm){e.next=10;break}return n={firstName:a.state.firstName,lastName:a.state.lastName,userName:a.state.userName,password:a.state.password,email:a.state.email,phone:a.state.phone,city:a.state.city,state:a.state.state,bio:a.state.bio},e.next=6,w.signup(n).then(function(e){a.props.history.push("/trading-post/signin"),console.log(e)});case 6:console.log(n),a.setState({firstName:"",lastName:"",userName:"",password:"",email:"",phone:"",city:"",state:"",bio:"",passwordConfirm:""}),e.next=11;break;case 10:console.log("Make sure your passwords match.");case 11:e.next=14;break;case 13:console.log("Fill out all fields.");case 14:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("input",{value:this.state.firstName,onChange:this.handleInputChange,name:"firstName",placeholder:"Firstname",type:"text"}),r.a.createElement("input",{value:this.state.lastName,onChange:this.handleInputChange,name:"lastName",placeholder:"Lastname",type:"text"}),r.a.createElement("input",{value:this.state.userName,onChange:this.handleInputChange,name:"userName",placeholder:"Username",type:"text"}),r.a.createElement("input",{value:this.state.email,onChange:this.handleInputChange,name:"email",placeholder:"Email",type:"Email"}),r.a.createElement("input",{value:this.state.password,onChange:this.handleInputChange,name:"password",placeholder:"Password",type:"password"}),r.a.createElement("input",{value:this.state.passwordConfirm,onChange:this.handleInputChange,name:"passwordConfirm",placeholder:"Confirm password",type:"password"}),r.a.createElement("input",{value:this.state.phone,onChange:this.handleInputChange,name:"phone",placeholder:"Phone",type:"text"}),r.a.createElement("input",{value:this.state.city,onChange:this.handleInputChange,name:"city",placeholder:"City",type:"text"}),r.a.createElement("input",{value:this.state.state,onChange:this.handleInputChange,name:"state",placeholder:"State",type:"text"}),r.a.createElement("input",{value:this.state.bio,onChange:this.handleInputChange,name:"bio",placeholder:"Bio",type:"text"}),r.a.createElement("button",{onClick:this.handleFormSubmit},"Sign Up")))}}]),t}(n.Component),z=a(19),K=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedIn:!1,UserId:""},a.logout=function(){localStorage.removeItem("UserId"),a.setState({isLoggedIn:!1,UserId:""})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){var e=sessionStorage.getItem("UserId");console.log("app",e),this.setState({isLoggedIn:!!e,UserId:e}),console.log(this.state,"app state")}},{key:"render",value:function(){return r.a.createElement(z.a,null,r.a.createElement("div",null,r.a.createElement(M,{isLoggedIn:this.state.isLoggedIn}),r.a.createElement(_.c,null,r.a.createElement(_.a,{exact:!0,path:"/trading-post/",component:C}),r.a.createElement(_.a,{exact:!0,path:"/trading-post/signin",component:Y}),r.a.createElement(_.a,{exact:!0,path:"/trading-post/signup",component:q}),r.a.createElement(_.a,{exact:!0,path:"/trading-post/postitem/:id",component:P}),r.a.createElement(_.a,{exact:!0,path:"/trading-post/updateitem/:id",component:T}),r.a.createElement(_.a,{path:"/trading-post/item/:id",component:Q}),r.a.createElement(_.a,{path:"/trading-post/profile/:id",component:A}),r.a.createElement(_.a,{component:U}))))}}]),t}(n.Component);s.a.render(r.a.createElement(K,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.4f9fdf62.chunk.js.map