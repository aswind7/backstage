import{j as o}from"./iframe-CVxNCVyG.js";import{c as e}from"./plugin-CpxsHHS8.js";import{S as l}from"./Grid-BYalvECn.js";import{C as m}from"./ComponentAccordion-tQt1UvTO.js";import{w as a}from"./appWrappers-CoNp-TeF.js";import{T as i}from"./TemplateBackstageLogoIcon-CUHANjWJ.js";import{I as s}from"./InfoCard-BpTFLL0r.js";import"./preload-helper-D9Z9MdNV.js";import"./Plugin-C7NeFebB.js";import"./componentData-C39_eFK7.js";import"./useAnalytics-BjvESzS9.js";import"./useApp-Depokogc.js";import"./useRouteRef-DpvPRQqg.js";import"./index-tCJpFXCT.js";import"./DialogTitle-9KmTKYnA.js";import"./Modal-N1WzyIV6.js";import"./Portal-HWgAq1jl.js";import"./Backdrop-CJ1JRzmf.js";import"./Button-CqlXZBuu.js";import"./useObservable-Cb64YYti.js";import"./useIsomorphicLayoutEffect-BlXvx0n-.js";import"./ExpandMore-REVjAMyk.js";import"./AccordionDetails-BnQlxJDH.js";import"./index-DnL3XN75.js";import"./Collapse-BIcQHlvJ.js";import"./useAsync-DAY-fkpv.js";import"./useMountedState-D0QN9cIE.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./CardContent-yXPLtyxs.js";import"./ErrorBoundary-BQXcj7qf.js";import"./ErrorPanel-j5_ntYL1.js";import"./WarningPanel-0uBr64Rc.js";import"./MarkdownContent-CXgwndB-.js";import"./CodeSnippet-CyUVyl-g.js";import"./Box-CfQfvdzJ.js";import"./styled-CBLf8rNP.js";import"./CopyTextButton-CRX8eblA.js";import"./useCopyToClipboard-DGLT0Vsw.js";import"./Tooltip-DzZgOpND.js";import"./Popper-BNLnyF9W.js";import"./List-i6rJ_my_.js";import"./ListContext-9WDi1zks.js";import"./ListItem-oYKpmBDK.js";import"./ListItemText-C3vvVhKd.js";import"./LinkButton-DYgeAajO.js";import"./Link-D_ibiZ5E.js";import"./lodash-CwBbdt2Q.js";import"./CardHeader-CWH7yRW-.js";import"./Divider-JhS1Cx0E.js";import"./CardActions-C1tStM6K.js";import"./BottomLink-feeuCoXi.js";import"./ArrowForward-BcJgisvh.js";const co={title:"Plugins/Home/Components/Toolkit",decorators:[n=>a(o.jsx(n,{}))]},r=()=>o.jsx(l,{item:!0,xs:12,md:6,children:o.jsx(e,{tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})})})}),t=()=>{const n=p=>o.jsx(m,{expanded:!0,...p});return o.jsx(s,{title:"Toolkit",noPadding:!0,children:o.jsxs(l,{item:!0,children:[o.jsx(e,{title:"Tools 1",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:n}),o.jsx(e,{title:"Tools 2",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:m}),o.jsx(e,{title:"Tools 3",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:m})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"InAccordion"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <Grid item xs={12} md={6}>
      <HomePageToolkit tools={Array(8).fill({
      url: '#',
      label: 'link',
      icon: <TemplateBackstageLogoIcon />
    })} />
    </Grid>;
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const ExpandedComponentAccordion = (props: any) => <ComponentAccordion expanded {...props} />;
  return <InfoCard title="Toolkit" noPadding>
      <Grid item>
        <HomePageToolkit title="Tools 1" tools={Array(8).fill({
        url: '#',
        label: 'link',
        icon: <TemplateBackstageLogoIcon />
      })} Renderer={ExpandedComponentAccordion} />
        <HomePageToolkit title="Tools 2" tools={Array(8).fill({
        url: '#',
        label: 'link',
        icon: <TemplateBackstageLogoIcon />
      })} Renderer={ComponentAccordion} />
        <HomePageToolkit title="Tools 3" tools={Array(8).fill({
        url: '#',
        label: 'link',
        icon: <TemplateBackstageLogoIcon />
      })} Renderer={ComponentAccordion} />
      </Grid>
    </InfoCard>;
}`,...t.parameters?.docs?.source}}};const uo=["Default","InAccordion"];export{r as Default,t as InAccordion,uo as __namedExportsOrder,co as default};
