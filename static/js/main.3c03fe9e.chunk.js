(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{283:function(e,t,n){},284:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(32),o=n.n(a),c=n(39),s=n(40),r=n(43),l=n(41),d=n(51),u=n(173),h=n(285),p=n(53),j=(n(145),n(79)),b="THEM_SINH_VIEN",O="SET_DANH_SACH_SV",f="OPEN_MODAL",m="CLOSE_MODAL",v="ON_FAILED_STATUS",y=n(93),g=n.n(y),x="https://621b1529faa12ee45004ec80.mockapi.io/sinhvien",E=function(){return g()({method:"GET",url:x})},F=function(e){return g()({method:"DELETE",url:"".concat(x,"/").concat(e)})},S=function(e){return g()({method:"POST",url:x,data:e})},T=function(e,t){return g()({method:"PUT",url:"".concat(x,"/").concat(e),data:t})},I=function(e){return g()({url:"".concat(x,"/").concat(e),method:"GET"})},C=n(9),D=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.dssv,n=h.a.Column;return Object(C.jsxs)(h.a,{dataSource:Object(u.a)(t),rowKey:"id",children:[Object(C.jsx)(n,{title:"ID",dataIndex:"id"},"id"),Object(C.jsx)(n,{title:"Name",dataIndex:"name",width:200},"name"),Object(C.jsx)(n,{title:"Email",dataIndex:"email"},"email"),Object(C.jsx)(n,{title:"Phone",dataIndex:"phone"},"phone"),Object(C.jsx)(n,{width:300,title:"Edit",render:function(t,n){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(p.a,{type:"primary","data-toggle":"modal","data-target":"#myModal",onClick:function(){return t=n.id,void I(t).then((function(n){e.props.openModal(t,n.data)}));var t},children:"EDIT"}),Object(C.jsx)(p.a,{type:"danger",onClick:function(){return t=n.id,void F(t).then((function(t){E().then((function(t){e.props.setDssv(t.data)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}));var t},children:"DELETE"}),Object(C.jsx)(p.a,{type:"primary",ghost:!0,children:Object(C.jsx)(j.b,{className:"text-white",to:"/detail/".concat(n.id),children:"Xem chi tiet"})})]})}},"edit")]})}}]),n}(i.Component),L=Object(d.b)((function(e){return{dssv:e.qlsvReducer.dssv,onFinish:e.qlsvReducer.onFinish}}),(function(e){return{setDssv:function(t){e({type:O,payload:t})},openModal:function(t,n){e({type:f,payload:{edit:"edit",onEditId:t,onEditSv:n}})}}}))(D),w=n(288),_=n(286),k=n(171),M=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).formRef=Object(i.createRef)(),e.onFinish=function(t){e.props.sinhVien(t),null===e.props.onEditSv&&S(t).then((function(t){e.formRef.current.resetFields(),E().then((function(t){e.props.setDssv(t.data)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)})),e.props.onEditSv&&T(e.props.onEditId,t).then((function(t){E().then((function(t){e.props.setDssv(t.data)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},e.onFinishFailed=function(t){e.props.onFailed(e.formRef)},e}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(){this.props.onEditSv?this.formRef.current.setFieldsValue(this.props.onEditSv):this.formRef.current.resetFields()}},{key:"render",value:function(){return Object(C.jsxs)(_.a,{id:"myForm",ref:this.formRef,name:"basic",labelCol:{span:4},wrapperCol:{span:20},initialValues:this.props.onEditSv,onFinish:this.onFinish,onFinishFailed:this.onFinishFailed,autoComplete:"off",children:[Object(C.jsx)(_.a.Item,{label:"ID",name:"id",rules:[{required:!0,message:"Please input id!"},{pattern:/^\d+$/,message:"ID can only numbers"},{whitespace:!1,max:6,message:"ID contains 1-6 digits"}],hasFeedback:!0,children:Object(C.jsx)(k.a,{disabled:this.props.onEditSv})}),Object(C.jsx)(_.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input name!"},{pattern:/[a-zA-Z_\xc0\xc1\xc2\xc3\xc8\xc9\xca\xcc\xcd\xd2\xd3\xd4\xd5\xd9\xda\u0102\u0110\u0128\u0168\u01a0\xe0\xe1\xe2\xe3\xe8\xe9\xea\xec\xed\xf2\xf3\xf4\xf5\xf9\xfa\u0103\u0111\u0129\u0169\u01a1\u01af\u0102\u1ea0\u1ea2\u1ea4\u1ea6\u1ea8\u1eaa\u1eac\u1eae\u1eb0\u1eb2\u1eb4\u1eb6\u1eb8\u1eba\u1ebc\u1ec0\u1ec0\u1ec2\u01b0\u0103\u1ea1\u1ea3\u1ea5\u1ea7\u1ea9\u1eab\u1ead\u1eaf\u1eb1\u1eb3\u1eb5\u1eb7\u1eb9\u1ebb\u1ebd\u1ec1\u1ec1\u1ec3\u1ec4\u1ec6\u1ec8\u1eca\u1ecc\u1ece\u1ed0\u1ed2\u1ed4\u1ed6\u1ed8\u1eda\u1edc\u1ede\u1ee0\u1ee2\u1ee4\u1ee6\u1ee8\u1eea\u1ec5\u1ec7\u1ec9\u1ecb\u1ecd\u1ecf\u1ed1\u1ed3\u1ed5\u1ed7\u1ed9\u1edb\u1edd\u1edf\u1ee1\u1ee3\u1ee5\u1ee7\u1ee9\u1eeb\u1eec\u1eee\u1ef0\u1ef2\u1ef4\xdd\u1ef6\u1ef8\u1eed\u1eef\u1ef1\u1ef3\u1ef5\u1ef7\u1ef9]+$/,message:"Name can only include letters"},function(e){e.getFieldValue;return{validator:function(e,t){return(null===t||void 0===t?void 0:t.trim().length)<=7?Promise.reject(new Error("Name must be at least 8 characters")):Promise.resolve()}}}],hasFeedback:!0,children:Object(C.jsx)(k.a,{})}),Object(C.jsx)(_.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input email!"},{type:"email"}],hasFeedback:!0,children:Object(C.jsx)(k.a,{})}),Object(C.jsx)(_.a.Item,{label:"Phone",name:"phone",rules:[{required:!0,message:"Please input phone!"},{pattern:/^\d+$/,message:"Please enter only numbers"},{min:9,whitespace:!1,message:"Phone must be at least 9 characters"}],hasFeedback:!0,children:Object(C.jsx)(k.a,{})})]})}}]),n}(i.Component),N=Object(d.b)((function(e){return{editMode:e.qlsvReducer.editMode,onEditId:e.qlsvReducer.onEditId,onEditSv:e.qlsvReducer.onEditSv,isModalVisible:e.qlsvReducer.isModalVisible,dssv:e.qlsvReducer.dssv}}),(function(e){return{sinhVien:function(t){e({type:b,payload:t})},setDssv:function(t){e({type:O,payload:t})},onFailed:function(t){e({type:v,payload:t})}}}))(M),R=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=function(){var t,n;null===(t=e.props.onFailed)||void 0===t||null===(n=t.current)||void 0===n||n.resetFields(),e.props.handleCancel()};return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(p.a,{type:"primary",onClick:this.props.showModal,children:"Open Modal"}),Object(C.jsx)(w.a,{title:"Basic Modal",visible:this.props.isModalVisible,onCancel:t,footer:[Object(C.jsx)(p.a,{form:"myForm",htmlType:"submit",children:this.props.onEditSv?"S\u1eeda":"Th\xeam"},"submit"),Object(C.jsx)(p.a,{onClick:t,children:"Cancel"},"cancel")],children:Object(C.jsx)(N,{})})]})}}]),n}(i.Component),V=Object(d.b)((function(e){return{isModalVisible:e.qlsvReducer.isModalVisible,onFailed:e.qlsvReducer.onFailed,onEditSv:e.qlsvReducer.onEditSv}}),(function(e){return{showModal:function(){e({type:f})},handleCancel:function(){e({type:m})}}}))(R),q=n(287),A="BAT_LOADING",P="TAT_LOADING",U=function(){return{type:A}},H=function(){return{type:P}},X=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.batLoading(),E().then((function(t){e.props.tatLoading(),e.props.setDssv(t.data)})).catch((function(t){e.props.tatLoading(),console.log(t)}))}},{key:"render",value:function(){var e=q.a.Text;return Object(C.jsxs)("div",{children:[Object(C.jsx)(q.a.Title,{style:{margin:"2rem",textAlign:"center"},children:Object(C.jsx)(e,{type:"success",children:"QU\u1ea2N L\xdd SINH VI\xcaN"})}),Object(C.jsx)(V,{}),Object(C.jsx)(L,{})]})}}]),n}(i.Component),G=Object(d.b)(null,(function(e){return{setDssv:function(t){e({type:O,payload:t})},batLoading:function(){e(U())},tatLoading:function(){e(H())}}}))(X),B=n(31),$=(i.Component,function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={thongTinChiTiet:{}},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.batLoading(),I(this.props.match.params.id).then((function(t){e.props.tatLoading(),e.setState({thongTinChiTiet:t.data})})).catch((function(t){e.props.tatLoading(),console.log(t)}))}},{key:"render",value:function(){var e,t,n;return Object(C.jsxs)("div",{className:"container detail",children:[Object(C.jsxs)("p",{className:"p",children:["T\xean:",Object(C.jsx)("span",{style:{color:"#88b04b"},children:null===(e=this.state.thongTinChiTiet)||void 0===e?void 0:e.name})]}),Object(C.jsxs)("p",{className:"p",children:["Email:",Object(C.jsx)("span",{style:{color:"#88b04b"},children:null===(t=this.state.thongTinChiTiet)||void 0===t?void 0:t.email})]}),Object(C.jsxs)("p",{className:"p",children:["Phone:",Object(C.jsx)("span",{style:{color:"#88b04b"},children:null===(n=this.state.thongTinChiTiet)||void 0===n?void 0:n.phone})]})]})}}]),n}(i.Component)),z=Object(d.b)(null,(function(e){return{batLoading:function(){e(U())},tatLoading:function(){e(H())}}}))($),J=(n(283),function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(C.jsx)("div",{children:Object(C.jsx)(j.b,{exact:!0,style:{marginRight:"20px"},activeStyle:{color:"red"},to:"/",children:"Trang ch\u1ee7"})})}}]),n}(i.Component)),K=n(170),Q=n.n(K),Z=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return this.props.isLoading?Object(C.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",width:"100vw",height:"100vh",background:"black",zIndex:1e3},children:Object(C.jsx)(Q.a,{type:"spin",color:"#ccc",height:75,width:75})}):Object(C.jsx)(C.Fragment,{})}}]),n}(i.Component),W=Object(d.b)((function(e){return{isLoading:e.loadingReducer.isLoading}}))(Z),Y=function(){return Object(C.jsxs)(j.a,{children:[Object(C.jsx)(J,{}),Object(C.jsx)(W,{}),Object(C.jsxs)(B.c,{children:[Object(C.jsx)(B.a,{exact:!0,path:"/dssv",component:G}),Object(C.jsx)(B.a,{exact:!0,path:"/detail/:id",component:z}),Object(C.jsx)(B.a,{path:"/",component:G})]})]})},ee=n(123),te=n(54),ne={dssv:[],isModalVisible:!1,onFinish:!1,onFailed:null,onEditId:"",onEditSv:null},ie={isLoading:!1},ae=Object(ee.a)({qlsvReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(te.a)(Object(te.a)({},e),{},{dssv:t.payload});case b:return Object(te.a)(Object(te.a)({},e),{},{isModalVisible:!1,onFinish:!0});case f:return Object(te.a)(Object(te.a)({},e),{},{isModalVisible:!0,onFinish:!1,onEditId:t.payload&&t.payload.onEditId?t.payload.onEditId:"",onEditSv:t.payload&&t.payload.onEditSv?t.payload.onEditSv:null});case m:return Object(te.a)(Object(te.a)({},e),{},{isModalVisible:!1,onEditSv:null});case v:return Object(te.a)(Object(te.a)({},e),{},{onFailed:t.payload});default:return e}},loadingReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case A:return e.count++,e.isLoading=!0,Object(te.a)({},e);case P:return e.isLoading=!1,Object(te.a)({},e);default:return e}}}),oe=Object(ee.b)(ae,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(Object(C.jsx)(d.a,{store:oe,children:Object(C.jsx)(Y,{})}),document.getElementById("root"))}},[[284,1,2]]]);
//# sourceMappingURL=main.3c03fe9e.chunk.js.map