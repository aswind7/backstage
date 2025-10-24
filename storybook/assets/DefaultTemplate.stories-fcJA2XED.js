import{j as t,T as p,c,C as l,m as i,a as d}from"./iframe-CVxNCVyG.js";import{s as g,H as u}from"./plugin-M1_kZs5K.js";import{c as h}from"./api-DVavCrU5.js";import{c as f}from"./catalogApiMock-BoTlLWu8.js";import{s as x}from"./api-Cf0pbhIp.js";import{S as y}from"./SearchContext-CgGSdvLk.js";import{P as S}from"./Page-D26P4dGo.js";import{S as r}from"./Grid-BYalvECn.js";import{b as k,a as j,c as C}from"./plugin-CpxsHHS8.js";import{T as P}from"./TemplateBackstageLogo-CAJBSXPd.js";import{T}from"./TemplateBackstageLogoIcon-CUHANjWJ.js";import{e as I}from"./routes-D0bAY7UB.js";import{w as v}from"./appWrappers-CoNp-TeF.js";import{s as G}from"./StarredEntitiesApi-hLP4l6mm.js";import{M as A}from"./MockStarredEntitiesApi-ElpGnFMm.js";import{I as B}from"./InfoCard-BpTFLL0r.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DxOM8DK_.js";import"./Plugin-C7NeFebB.js";import"./componentData-C39_eFK7.js";import"./useAnalytics-BjvESzS9.js";import"./useApp-Depokogc.js";import"./useRouteRef-DpvPRQqg.js";import"./index-tCJpFXCT.js";import"./ref-C0VTUPuL.js";import"./lodash-CwBbdt2Q.js";import"./useAsync-DAY-fkpv.js";import"./useMountedState-D0QN9cIE.js";import"./DialogTitle-9KmTKYnA.js";import"./Modal-N1WzyIV6.js";import"./Portal-HWgAq1jl.js";import"./Backdrop-CJ1JRzmf.js";import"./Button-CqlXZBuu.js";import"./useObservable-Cb64YYti.js";import"./useIsomorphicLayoutEffect-BlXvx0n-.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./CardContent-yXPLtyxs.js";import"./ErrorBoundary-BQXcj7qf.js";import"./ErrorPanel-j5_ntYL1.js";import"./WarningPanel-0uBr64Rc.js";import"./ExpandMore-REVjAMyk.js";import"./AccordionDetails-BnQlxJDH.js";import"./index-DnL3XN75.js";import"./Collapse-BIcQHlvJ.js";import"./MarkdownContent-CXgwndB-.js";import"./CodeSnippet-CyUVyl-g.js";import"./Box-CfQfvdzJ.js";import"./styled-CBLf8rNP.js";import"./CopyTextButton-CRX8eblA.js";import"./useCopyToClipboard-DGLT0Vsw.js";import"./Tooltip-DzZgOpND.js";import"./Popper-BNLnyF9W.js";import"./List-i6rJ_my_.js";import"./ListContext-9WDi1zks.js";import"./ListItem-oYKpmBDK.js";import"./ListItemText-C3vvVhKd.js";import"./LinkButton-DYgeAajO.js";import"./Link-D_ibiZ5E.js";import"./CardHeader-CWH7yRW-.js";import"./Divider-JhS1Cx0E.js";import"./CardActions-C1tStM6K.js";import"./BottomLink-feeuCoXi.js";import"./ArrowForward-BcJgisvh.js";const b=[{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity",title:"Mock Starred Entity!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-2",title:"Mock Starred Entity 2!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-3",title:"Mock Starred Entity 3!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-4",title:"Mock Starred Entity 4!"}}],E=f({entities:b}),a=new A;a.toggleStarred("component:default/example-starred-entity");a.toggleStarred("component:default/example-starred-entity-2");a.toggleStarred("component:default/example-starred-entity-3");a.toggleStarred("component:default/example-starred-entity-4");const Wt={title:"Plugins/Home/Templates",decorators:[e=>v(t.jsx(t.Fragment,{children:t.jsx(p,{apis:[[h,E],[G,a],[x,{query:()=>Promise.resolve({results:[]})}],[c,new l({stackoverflow:{baseUrl:"https://api.stackexchange.com/2.2"}})]],children:t.jsx(e,{})})}),{mountedRoutes:{"/hello-company":g.routes.root,"/catalog/:namespace/:kind/:name":I}})]},H=i(e=>({searchBarInput:{maxWidth:"60vw",margin:"auto",backgroundColor:e.palette.background.paper,borderRadius:"50px",boxShadow:e.shadows[1]},searchBarOutline:{borderStyle:"none"}})),R=i(e=>({container:{margin:e.spacing(5,0)},svg:{width:"auto",height:100},path:{fill:"#7df3e1"}})),o=()=>{const e=H(),{svg:s,path:n,container:m}=R();return t.jsx(y,{children:t.jsx(S,{themeId:"home",children:t.jsx(d,{children:t.jsxs(r,{container:!0,justifyContent:"center",spacing:6,children:[t.jsx(k,{className:m,logo:t.jsx(P,{classes:{svg:s,path:n}})}),t.jsx(r,{container:!0,item:!0,xs:12,justifyContent:"center",children:t.jsx(u,{InputProps:{classes:{root:e.searchBarInput,notchedOutline:e.searchBarOutline}},placeholder:"Search"})}),t.jsxs(r,{container:!0,item:!0,xs:12,children:[t.jsx(r,{item:!0,xs:12,md:6,children:t.jsx(j,{})}),t.jsx(r,{item:!0,xs:12,md:6,children:t.jsx(C,{tools:Array(8).fill({url:"#",label:"link",icon:t.jsx(T,{})})})}),t.jsx(r,{item:!0,xs:12,md:6,children:t.jsx(B,{title:"Composable Section",children:t.jsx("div",{style:{height:370}})})})]})]})})})})};o.__docgenInfo={description:"",methods:[],displayName:"DefaultTemplate"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const classes = useStyles();
  const {
    svg,
    path,
    container
  } = useLogoStyles();
  return <SearchContextProvider>
      <Page themeId="home">
        <Content>
          <Grid container justifyContent="center" spacing={6}>
            <HomePageCompanyLogo className={container} logo={<TemplateBackstageLogo classes={{
            svg,
            path
          }} />} />
            <Grid container item xs={12} justifyContent="center">
              <HomePageSearchBar InputProps={{
              classes: {
                root: classes.searchBarInput,
                notchedOutline: classes.searchBarOutline
              }
            }} placeholder="Search" />
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={12} md={6}>
                <HomePageStarredEntities />
              </Grid>
              <Grid item xs={12} md={6}>
                <HomePageToolkit tools={Array(8).fill({
                url: '#',
                label: 'link',
                icon: <TemplateBackstageLogoIcon />
              })} />
              </Grid>
              <Grid item xs={12} md={6}>
                <InfoCard title="Composable Section">
                  {/* placeholder for content */}
                  <div style={{
                  height: 370
                }} />
                </InfoCard>
              </Grid>
            </Grid>
          </Grid>
        </Content>
      </Page>
    </SearchContextProvider>;
}`,...o.parameters?.docs?.source}}};const zt=["DefaultTemplate"];export{o as DefaultTemplate,zt as __namedExportsOrder,Wt as default};
