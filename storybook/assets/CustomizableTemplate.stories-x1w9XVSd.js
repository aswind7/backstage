import{j as t,T as i,c as m,C as a}from"./iframe-CVxNCVyG.js";import{w as n}from"./appWrappers-CoNp-TeF.js";import{s as p,H as s}from"./plugin-M1_kZs5K.js";import{c as d}from"./api-DVavCrU5.js";import{c}from"./catalogApiMock-BoTlLWu8.js";import{M as g}from"./MockStarredEntitiesApi-ElpGnFMm.js";import{s as l}from"./api-Cf0pbhIp.js";import{C as h}from"./CustomHomepageGrid-BBi42V0G.js";import{H as f,a as u}from"./plugin-CpxsHHS8.js";import{e as y}from"./routes-D0bAY7UB.js";import{s as w}from"./StarredEntitiesApi-hLP4l6mm.js";import"./preload-helper-D9Z9MdNV.js";import"./useObservable-Cb64YYti.js";import"./useIsomorphicLayoutEffect-BlXvx0n-.js";import"./useAnalytics-BjvESzS9.js";import"./useAsync-DAY-fkpv.js";import"./useMountedState-D0QN9cIE.js";import"./componentData-C39_eFK7.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./index-tCJpFXCT.js";import"./useApp-Depokogc.js";import"./index-DxOM8DK_.js";import"./Plugin-C7NeFebB.js";import"./useRouteRef-DpvPRQqg.js";import"./ref-C0VTUPuL.js";import"./lodash-CwBbdt2Q.js";import"./get-DdhrmVcN.js";import"./_baseSlice-DkFNCYmM.js";import"./_arrayReduce-BTs_qt-z.js";import"./toNumber-DwNnq1eP.js";import"./Add-DgfGoKB4.js";import"./Grid-BYalvECn.js";import"./Box-CfQfvdzJ.js";import"./styled-CBLf8rNP.js";import"./TextField-Cb55Kzsz.js";import"./Select-CE4k1772.js";import"./index-DnL3XN75.js";import"./Popover-CJLglB2v.js";import"./Modal-N1WzyIV6.js";import"./Portal-HWgAq1jl.js";import"./List-i6rJ_my_.js";import"./ListContext-9WDi1zks.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-4ksIOyob.js";import"./FormLabel-CJj0FrOp.js";import"./InputLabel-BQm04JMc.js";import"./ListItem-oYKpmBDK.js";import"./ListItemIcon-lmJxt7-A.js";import"./ListItemText-C3vvVhKd.js";import"./Remove-D0lh7IgQ.js";import"./useCopyToClipboard-DGLT0Vsw.js";import"./Button-CqlXZBuu.js";import"./Divider-JhS1Cx0E.js";import"./FormControlLabel-BVyC8vTJ.js";import"./Checkbox-DlKaEKG1.js";import"./SwitchBase-38_xQv8S.js";import"./RadioGroup-BgkVzIOr.js";import"./MenuItem-BmjBM50l.js";import"./translation-Pwb2VEFb.js";import"./DialogTitle-9KmTKYnA.js";import"./Backdrop-CJ1JRzmf.js";import"./Tooltip-DzZgOpND.js";import"./Popper-BNLnyF9W.js";import"./createStyles-Bp4GwXob.js";import"./createStyles-yD3y8ldD.js";import"./ListItemAvatar-D_EQj_XE.js";import"./Edit-D3Z1IwKp.js";import"./Cancel-TUyKDHi5.js";import"./Progress-cKAXgUAI.js";import"./LinearProgress-C1EkYpUj.js";import"./ContentHeader-D9slVDsg.js";import"./Helmet-rfctr88N.js";import"./ErrorBoundary-BQXcj7qf.js";import"./ErrorPanel-j5_ntYL1.js";import"./WarningPanel-0uBr64Rc.js";import"./ExpandMore-REVjAMyk.js";import"./AccordionDetails-BnQlxJDH.js";import"./Collapse-BIcQHlvJ.js";import"./MarkdownContent-CXgwndB-.js";import"./CodeSnippet-CyUVyl-g.js";import"./CopyTextButton-CRX8eblA.js";import"./LinkButton-DYgeAajO.js";import"./Link-D_ibiZ5E.js";import"./useElementFilter-l9tlygl9.js";import"./InfoCard-BpTFLL0r.js";import"./CardContent-yXPLtyxs.js";import"./CardHeader-CWH7yRW-.js";import"./CardActions-C1tStM6K.js";import"./BottomLink-feeuCoXi.js";import"./ArrowForward-BcJgisvh.js";const x=[{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity",title:"Mock Starred Entity!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-2",title:"Mock Starred Entity 2!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-3",title:"Mock Starred Entity 3!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-4",title:"Mock Starred Entity 4!"}}],k=c({entities:x}),o=new g;o.toggleStarred("component:default/example-starred-entity");o.toggleStarred("component:default/example-starred-entity-2");o.toggleStarred("component:default/example-starred-entity-3");o.toggleStarred("component:default/example-starred-entity-4");const me={title:"Plugins/Home/Templates",decorators:[r=>n(t.jsx(t.Fragment,{children:t.jsx(i,{apis:[[d,k],[w,o],[l,{query:()=>Promise.resolve({results:[]})}],[m,new a({backend:{baseUrl:"https://localhost:7007"}})]],children:t.jsx(r,{})})}),{mountedRoutes:{"/hello-company":p.routes.root,"/catalog/:namespace/:kind/:name":y}})]},e=()=>{const r=[{component:"HomePageSearchBar",x:0,y:0,width:12,height:5},{component:"HomePageRandomJoke",x:0,y:2,width:6,height:16},{component:"HomePageStarredEntities",x:6,y:2,width:6,height:12}];return t.jsxs(h,{config:r,rowHeight:10,children:["// Insert the allowed widgets inside the grid. User can add, organize and // remove the widgets as they want.",t.jsx(s,{}),t.jsx(f,{}),t.jsx(u,{})]})};e.__docgenInfo={description:"",methods:[],displayName:"CustomizableTemplate"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  // This is the default configuration that is shown to the user
  // when first arriving to the homepage.
  const defaultConfig = [{
    component: 'HomePageSearchBar',
    x: 0,
    y: 0,
    width: 12,
    height: 5
  }, {
    component: 'HomePageRandomJoke',
    x: 0,
    y: 2,
    width: 6,
    height: 16
  }, {
    component: 'HomePageStarredEntities',
    x: 6,
    y: 2,
    width: 6,
    height: 12
  }];
  return <CustomHomepageGrid config={defaultConfig} rowHeight={10}>
      // Insert the allowed widgets inside the grid. User can add, organize and
      // remove the widgets as they want.
      <HomePageSearchBar />
      <HomePageRandomJoke />
      <HomePageStarredEntities />
    </CustomHomepageGrid>;
}`,...e.parameters?.docs?.source}}};const ae=["CustomizableTemplate"];export{e as CustomizableTemplate,ae as __namedExportsOrder,me as default};
