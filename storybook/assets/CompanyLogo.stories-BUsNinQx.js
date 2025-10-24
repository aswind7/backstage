import{j as t,T as a,c,C as g,m as l}from"./iframe-CVxNCVyG.js";import{b as i,r as d}from"./plugin-CpxsHHS8.js";import{S as s}from"./Grid-BYalvECn.js";import{w as u}from"./appWrappers-CoNp-TeF.js";import{T as f}from"./TemplateBackstageLogo-CAJBSXPd.js";import"./preload-helper-D9Z9MdNV.js";import"./Plugin-C7NeFebB.js";import"./componentData-C39_eFK7.js";import"./useAnalytics-BjvESzS9.js";import"./useApp-Depokogc.js";import"./useRouteRef-DpvPRQqg.js";import"./index-tCJpFXCT.js";import"./InfoCard-BpTFLL0r.js";import"./CardContent-yXPLtyxs.js";import"./ErrorBoundary-BQXcj7qf.js";import"./ErrorPanel-j5_ntYL1.js";import"./WarningPanel-0uBr64Rc.js";import"./ExpandMore-REVjAMyk.js";import"./AccordionDetails-BnQlxJDH.js";import"./index-DnL3XN75.js";import"./Collapse-BIcQHlvJ.js";import"./MarkdownContent-CXgwndB-.js";import"./CodeSnippet-CyUVyl-g.js";import"./Box-CfQfvdzJ.js";import"./styled-CBLf8rNP.js";import"./CopyTextButton-CRX8eblA.js";import"./useCopyToClipboard-DGLT0Vsw.js";import"./useMountedState-D0QN9cIE.js";import"./Tooltip-DzZgOpND.js";import"./Popper-BNLnyF9W.js";import"./Portal-HWgAq1jl.js";import"./List-i6rJ_my_.js";import"./ListContext-9WDi1zks.js";import"./ListItem-oYKpmBDK.js";import"./ListItemText-C3vvVhKd.js";import"./LinkButton-DYgeAajO.js";import"./Button-CqlXZBuu.js";import"./Link-D_ibiZ5E.js";import"./lodash-CwBbdt2Q.js";import"./CardHeader-CWH7yRW-.js";import"./Divider-JhS1Cx0E.js";import"./CardActions-C1tStM6K.js";import"./BottomLink-feeuCoXi.js";import"./ArrowForward-BcJgisvh.js";import"./DialogTitle-9KmTKYnA.js";import"./Modal-N1WzyIV6.js";import"./Backdrop-CJ1JRzmf.js";import"./useObservable-Cb64YYti.js";import"./useIsomorphicLayoutEffect-BlXvx0n-.js";import"./useAsync-DAY-fkpv.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";const yo={title:"Plugins/Home/Components/CompanyLogo",decorators:[o=>u(t.jsx(a,{apis:[[c,new g({app:{title:"My App"}})]],children:t.jsx(o,{})}),{mountedRoutes:{"/hello-company-logo":d}})]},n=l(o=>({container:{margin:o.spacing(5,0)},svg:{width:"auto",height:100},path:{fill:"#7df3e1"}})),r=()=>{const{container:o}=n();return t.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:t.jsx(i,{className:o})})},e=()=>{const{container:o,svg:m,path:p}=n();return t.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:t.jsx(i,{className:o,logo:t.jsx(f,{classes:{svg:m,path:p}})})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};e.__docgenInfo={description:"",methods:[],displayName:"CustomLogo"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    container
  } = useLogoStyles();
  return <Grid container justifyContent="center" spacing={6}>
      <HomePageCompanyLogo className={container} />
    </Grid>;
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const {
    container,
    svg,
    path
  } = useLogoStyles();
  return <Grid container justifyContent="center" spacing={6}>
      <HomePageCompanyLogo className={container} logo={<TemplateBackstageLogo classes={{
      svg,
      path
    }} />} />
    </Grid>;
}`,...e.parameters?.docs?.source}}};const Co=["Default","CustomLogo"];export{e as CustomLogo,r as Default,Co as __namedExportsOrder,yo as default};
