import{r as x,j as a}from"./iframe-CVxNCVyG.js";import{c as n}from"./clsx-B-dksMZM.js";import{u as f}from"./useStyles-DTicY05F.js";import{A as m,a as h,b as _}from"./AvatarFallback-DCKbJtnc.js";import{F as j}from"./Flex-CXlmd-E0.js";import"./preload-helper-D9Z9MdNV.js";import"./useEventCallback-De6uVpjw.js";import"./noop-qoFuZKhr.js";const i={"bui-AvatarRoot":"_bui-AvatarRoot_odwvx_20","bui-AvatarImage":"_bui-AvatarImage_odwvx_52","bui-AvatarFallback":"_bui-AvatarFallback_odwvx_58"},s=x.forwardRef((t,c)=>{const{classNames:e,dataAttributes:u,cleanedProps:p}=f("Avatar",{size:"medium",...t}),{className:d,src:A,name:g,...v}=p;return a.jsxs(m,{ref:c,className:n(e.root,i[e.root],d),...u,...v,children:[a.jsx(h,{className:n(e.image,i[e.image]),src:A}),a.jsx(_,{className:n(e.fallback,i[e.fallback]),children:(g||"").split(" ").map(b=>b[0]).join("").toLocaleUpperCase("en-US").slice(0,2)})]})});s.displayName=m.displayName;s.__docgenInfo={description:"@public",methods:[],props:{src:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""}}};const I={title:"Backstage UI/Avatar",component:s},r={args:{src:"https://avatars.githubusercontent.com/u/1540635?v=4",name:"Charles de Dreuille"}},o={args:{...r.args,src:"https://avatars.githubusercontent.com/u/15406AAAAAAAAA"}},l={args:{...r.args},render:t=>a.jsxs(j,{children:[a.jsx(s,{...t,size:"small"}),a.jsx(s,{...t,size:"medium"}),a.jsx(s,{...t,size:"large"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://avatars.githubusercontent.com/u/1540635?v=4',
    name: 'Charles de Dreuille'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    src: 'https://avatars.githubusercontent.com/u/15406AAAAAAAAA'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => <Flex>
      <Avatar {...args} size="small" />
      <Avatar {...args} size="medium" />
      <Avatar {...args} size="large" />
    </Flex>
}`,...l.parameters?.docs?.source}}};const R=["Default","Fallback","Sizes"];export{r as Default,o as Fallback,l as Sizes,R as __namedExportsOrder,I as default};
