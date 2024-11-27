import{j as o}from"./responsive-123a9343.js";import{r as P}from"./index-3b9dd0eb.js";import{C as i,d as W,s as E,h as I,i as N,j as V}from"./Calendar-3a06276d.js";import"./jsx-runtime-a3291550.js";import"./_commonjsHelpers-de833af9.js";import"./Combination-826c8940.js";import"./index-67ce947c.js";import"./useId-1d8fde67.js";import"./WebsiteIcon-a62a72af.js";import"./Stack-938d29d6.js";import"./Box-c8c0d4bd.js";import"./ExternalLinkCallout-dac509ef.js";const $={title:"forms/DatePicker/Calendar",component:i,render:function({yearRange:d,...j}){const[w,B]=P.useState();return o(W,{yearRange:d,children:o(i,{selected:w,onSelect:B,...j})})}},_=new Date,q=E(_,7),z=I(_,7),c=N(new Date),r={},a={args:{numberOfMonths:2}},s={args:{disabled:[{before:q},{after:z}]}},n={args:{yearRange:{from:c-2,to:c+5}}},t={args:{yearRange:{from:c,to:c}}},e=()=>{const[m,d]=P.useState();return o(W,{yearRange:void 0,children:o(V,{selected:m,numberOfMonths:2,onSelect:d})})};e.__docgenInfo={description:"",methods:[],displayName:"Range"};var p,g,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var l,f,R;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    numberOfMonths: 2
  }
}`,...(R=(f=a.parameters)==null?void 0:f.docs)==null?void 0:R.source}}};var h,S,M;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    disabled: [{
      before: lastWeek
    }, {
      after: nextWeek
    }]
  }
}`,...(M=(S=s.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var b,y,C;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    yearRange: {
      from: thisYear - 2,
      to: thisYear + 5
    }
  }
}`,...(C=(y=n.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var D,Y,x;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    yearRange: {
      from: thisYear,
      to: thisYear
    }
  }
}`,...(x=(Y=t.parameters)==null?void 0:Y.docs)==null?void 0:x.source}}};var k,v,O;e.parameters={...e.parameters,docs:{...(k=e.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [range, setRange] = useState<DateRange>();
  return <CalendarProvider yearRange={undefined}>
            <CalendarRange selected={range} numberOfMonths={2} onSelect={setRange} />
        </CalendarProvider>;
}`,...(O=(v=e.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};const ee=["Basic","MultipleMonths","MinMaxDates","CustomYearRange","DisabledYearRange","Range"];export{r as Basic,n as CustomYearRange,t as DisabledYearRange,s as MinMaxDates,a as MultipleMonths,e as Range,ee as __namedExportsOrder,$ as default};
