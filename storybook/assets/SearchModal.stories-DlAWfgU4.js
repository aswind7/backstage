import{j as t,m as d,I as u,b as h,T as g}from"./iframe-CVxNCVyG.js";import{r as x}from"./plugin-M1_kZs5K.js";import{S as m,u as n,a as S}from"./useSearchModal-CG1q9wlF.js";import{B as c}from"./Button-CqlXZBuu.js";import{a as f,b as M,c as j}from"./DialogTitle-9KmTKYnA.js";import{B as C}from"./Box-CfQfvdzJ.js";import{S as r}from"./Grid-BYalvECn.js";import{S as y}from"./SearchType-0s7K4Ah4.js";import{L as I}from"./List-i6rJ_my_.js";import{H as R}from"./DefaultResultListItem-Bfr715f7.js";import{s as B,M as D}from"./api-Cf0pbhIp.js";import{S as T}from"./SearchContext-CgGSdvLk.js";import{w as k}from"./appWrappers-CoNp-TeF.js";import{SearchBar as v}from"./SearchBar-DlKGL5wH.js";import{a as b}from"./SearchResult-C4NjC3_4.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DxOM8DK_.js";import"./Plugin-C7NeFebB.js";import"./componentData-C39_eFK7.js";import"./useAnalytics-BjvESzS9.js";import"./useApp-Depokogc.js";import"./useRouteRef-DpvPRQqg.js";import"./index-tCJpFXCT.js";import"./ArrowForward-BcJgisvh.js";import"./translation-CynvzPfT.js";import"./Page-Dlda1X-s.js";import"./useMediaQuery-CTsAirMg.js";import"./Divider-JhS1Cx0E.js";import"./ArrowBackIos-CY2d2x9v.js";import"./ArrowForwardIos-8zL1ICGl.js";import"./translation-4WWQfxOC.js";import"./Modal-N1WzyIV6.js";import"./Portal-HWgAq1jl.js";import"./Backdrop-CJ1JRzmf.js";import"./styled-CBLf8rNP.js";import"./ExpandMore-REVjAMyk.js";import"./useAsync-DAY-fkpv.js";import"./useMountedState-D0QN9cIE.js";import"./AccordionDetails-BnQlxJDH.js";import"./index-DnL3XN75.js";import"./Collapse-BIcQHlvJ.js";import"./ListItem-oYKpmBDK.js";import"./ListContext-9WDi1zks.js";import"./ListItemIcon-lmJxt7-A.js";import"./ListItemText-C3vvVhKd.js";import"./Tabs-BrayUuaq.js";import"./KeyboardArrowRight-C4JCTFfo.js";import"./FormLabel-CJj0FrOp.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-4ksIOyob.js";import"./InputLabel-BQm04JMc.js";import"./Select-CE4k1772.js";import"./Popover-CJLglB2v.js";import"./MenuItem-BmjBM50l.js";import"./Checkbox-DlKaEKG1.js";import"./SwitchBase-38_xQv8S.js";import"./Chip-ozhfN2aE.js";import"./Link-D_ibiZ5E.js";import"./lodash-CwBbdt2Q.js";import"./useObservable-Cb64YYti.js";import"./useIsomorphicLayoutEffect-BlXvx0n-.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./Search-CsD7-tGp.js";import"./useDebounce-xEZB4k29.js";import"./InputAdornment-CRFh148s.js";import"./TextField-Cb55Kzsz.js";import"./useElementFilter-l9tlygl9.js";import"./EmptyState-B3rtOFg4.js";import"./Progress-cKAXgUAI.js";import"./LinearProgress-C1EkYpUj.js";import"./ResponseErrorPanel-DAmyYlFR.js";import"./ErrorPanel-j5_ntYL1.js";import"./WarningPanel-0uBr64Rc.js";import"./MarkdownContent-CXgwndB-.js";import"./CodeSnippet-CyUVyl-g.js";import"./CopyTextButton-CRX8eblA.js";import"./useCopyToClipboard-DGLT0Vsw.js";import"./Tooltip-DzZgOpND.js";import"./Popper-BNLnyF9W.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},ao={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>k(t.jsx(g,{apis:[[B,new D(G)]],children:t.jsx(T,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":x}})]},s=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=d(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),i=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(f,{children:t.jsxs(C,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(u,{"aria-label":"close",onClick:e,children:t.jsx(h,{})})]})}),t.jsx(M,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(y.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(I,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(R,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(j,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(S,{})})})})]})})]})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const {
    state,
    toggleModal
  } = useSearchModal();
  return <>
      <Button variant="contained" color="primary" onClick={toggleModal}>
        Toggle Search Modal
      </Button>
      <SearchModal {...state} toggleModal={toggleModal} />
    </>;
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const classes = useStyles();
  const {
    state,
    toggleModal
  } = useSearchModal();
  return <>
      <Button variant="contained" color="primary" onClick={toggleModal}>
        Toggle Custom Search Modal
      </Button>
      <SearchModal {...state} toggleModal={toggleModal}>
        {() => <>
            <DialogTitle>
              <Box className={classes.titleContainer}>
                <SearchBar className={classes.input} />

                <IconButton aria-label="close" onClick={toggleModal}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </DialogTitle>
            <DialogContent>
              <Grid container direction="column">
                <Grid item>
                  <SearchType.Tabs defaultValue="" types={[{
                value: 'custom-result-item',
                name: 'Custom Item'
              }, {
                value: 'no-custom-result-item',
                name: 'No Custom Item'
              }]} />
                </Grid>
                <Grid item>
                  <SearchResult>
                    {({
                  results
                }) => <List>
                        {results.map(({
                    document
                  }) => <div role="button" tabIndex={0} key={\`\${document.location}-btn\`} onClick={toggleModal} onKeyPress={toggleModal}>
                            <DefaultResultListItem key={document.location} result={document} />
                          </div>)}
                      </List>}
                  </SearchResult>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions className={classes.dialogActionsContainer}>
              <Grid container direction="row">
                <Grid item xs={12}>
                  <SearchResultPager />
                </Grid>
              </Grid>
            </DialogActions>
          </>}
      </SearchModal>
    </>;
}`,...i.parameters?.docs?.source}}};const lo=["Default","CustomModal"];export{i as CustomModal,s as Default,lo as __namedExportsOrder,ao as default};
