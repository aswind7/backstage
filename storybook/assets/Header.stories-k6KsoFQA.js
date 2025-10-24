import{j as e}from"./iframe-CVxNCVyG.js";import{H as o}from"./Header-CVrZD2I6.js";import{P as p}from"./Page-D26P4dGo.js";import{H as r}from"./HeaderLabel-DNRAkk8f.js";import"./preload-helper-D9Z9MdNV.js";import"./Helmet-rfctr88N.js";import"./Box-CfQfvdzJ.js";import"./styled-CBLf8rNP.js";import"./Grid-BYalvECn.js";import"./Breadcrumbs-DzyJFOTd.js";import"./index-DnL3XN75.js";import"./Popover-CJLglB2v.js";import"./Modal-N1WzyIV6.js";import"./Portal-HWgAq1jl.js";import"./List-i6rJ_my_.js";import"./ListContext-9WDi1zks.js";import"./ListItem-oYKpmBDK.js";import"./Link-D_ibiZ5E.js";import"./lodash-CwBbdt2Q.js";import"./index-tCJpFXCT.js";import"./useAnalytics-BjvESzS9.js";import"./useApp-Depokogc.js";import"./Page-Dlda1X-s.js";import"./useMediaQuery-CTsAirMg.js";import"./Tooltip-DzZgOpND.js";import"./Popper-BNLnyF9W.js";const N={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}}},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
  type: string;
  title: string;
  subtitle: string;
}) => {
  const {
    type
  } = args;
  return <Page themeId={type}>
      <Header {...args}>{labels}</Header>
    </Page>;
}`,...t.parameters?.docs?.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,N as default};
