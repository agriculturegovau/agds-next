import{j as e,a}from"./Box-3d8e40b9.js";import{T as k}from"./Text-76115ace.js";import{S as j}from"./Stack-88a94cf9.js";import{H as N}from"./Heading-1fbb096a.js";import{f as g,d as b,a as u,e as r,c as t,b as T,T as m}from"./TableWrapper-33276cae.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";const q={title:"content/Table",component:g,subcomponents:{TableBody:b,TableCaption:u,TableCell:r,TableHeader:t,TableHead:T,TableWrapper:m}},x=[{location:"New South Wales",population:7670700,growthYear:3.1,growthDecade:12.9},{location:"Victoria",population:5996400,growthYear:2.5,growthDecade:9.3},{location:"Queensland",population:4808800,growthYear:1.7,growthDecade:13.3},{location:"Western Australia",population:2603900,growthYear:2.3,growthDecade:11.6},{location:"South Australia",population:1702800,growthYear:2,growthDecade:6.8},{location:"Tasmania",population:517400,growthYear:4,growthDecade:5.3},{location:"Northern Territory",population:244400,growthYear:1.2,growthDecade:4.5},{location:"Australian Capital Territory",population:393e3,growthYear:2.4,growthDecade:9.6}],C=new Intl.NumberFormat("en-AU"),L=l=>e(m,{children:a(g,{...l,children:[e(u,{children:"Population of Australian states and territories, December 2015"}),e(T,{children:a("tr",{children:[e(t,{scope:"col",children:"Location"}),e(t,{textAlign:"right",scope:"col",children:"Population"}),e(t,{textAlign:"right",scope:"col",children:"Change over previous year %"}),e(t,{textAlign:"right",scope:"col",children:"Change over previous decade %"})]})}),e(b,{children:x.map(({location:o,population:n,growthYear:i,growthDecade:c},F)=>a("tr",{children:[e(r,{as:"th",scope:"row",children:o}),e(r,{textAlign:"right",children:C.format(n)}),a(r,{textAlign:"right",children:[i,"%"]}),a(r,{textAlign:"right",children:[c,"%"]})]},F))})]})}),d=L.bind({});d.args={};const s=L.bind({});s.args={striped:!0};const p=()=>e(m,{children:a(g,{tableLayout:"fixed",children:[e(u,{children:"Population of Australian states and territories, December 2015"}),e(T,{children:a("tr",{children:[e(t,{scope:"col",width:{xs:"14rem",md:"40%"},children:"Location"}),e(t,{scope:"col",textAlign:"right",width:{xs:"10rem",md:"20%"},children:"Population"}),e(t,{scope:"col",textAlign:"right",width:{xs:"14rem",md:"20%"},children:"Change over previous year %"}),e(t,{scope:"col",textAlign:"right",width:{xs:"14rem",md:"20%"},children:"Change over previous decade %"})]})}),e(b,{children:x.map(({location:l,population:o,growthYear:n,growthDecade:i},c)=>a("tr",{children:[e(r,{as:"th",scope:"row",children:l}),e(r,{textAlign:"right",children:C.format(o)}),a(r,{textAlign:"right",children:[n,"%"]}),a(r,{textAlign:"right",children:[i,"%"]})]},c))})]})}),h=()=>a(j,{gap:1,children:[e(N,{id:"table-heading",children:"Population"}),e(k,{id:"table-description",children:"Population of Australian states and territories, December 2015."}),e(m,{children:a(g,{"aria-labelledby":"table-heading","aria-describedby":"table-description",children:[e(T,{children:a("tr",{children:[e(t,{scope:"col",children:"Location"}),e(t,{textAlign:"right",scope:"col",children:"Population"}),e(t,{textAlign:"right",scope:"col",children:"Change over previous year %"}),e(t,{textAlign:"right",scope:"col",children:"Change over previous decade %"})]})}),e(b,{children:x.map(({location:l,population:o,growthYear:n,growthDecade:i},c)=>a("tr",{children:[e(r,{as:"th",scope:"row",children:l}),e(r,{textAlign:"right",children:C.format(o)}),a(r,{textAlign:"right",children:[n,"%"]}),a(r,{textAlign:"right",children:[i,"%"]})]},c))})]})})]});var A,w,H;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`args => <TableWrapper>
        <Table {...args}>
            <TableCaption>
                Population of Australian states and territories, December 2015
            </TableCaption>
            <TableHead>
                <tr>
                    <TableHeader scope="col">Location</TableHeader>
                    <TableHeader textAlign="right" scope="col">
                        Population
                    </TableHeader>
                    <TableHeader textAlign="right" scope="col">
                        Change over previous year %
                    </TableHeader>
                    <TableHeader textAlign="right" scope="col">
                        Change over previous decade %
                    </TableHeader>
                </tr>
            </TableHead>
            <TableBody>
                {exampleData.map(({
        location,
        population,
        growthYear,
        growthDecade
      }, index) => <tr key={index}>
                            <TableCell as="th" scope="row">
                                {location}
                            </TableCell>
                            <TableCell textAlign="right">
                                {numberFormatter.format(population)}
                            </TableCell>
                            <TableCell textAlign="right">{growthYear}%</TableCell>
                            <TableCell textAlign="right">{growthDecade}%</TableCell>
                        </tr>)}
            </TableBody>
        </Table>
    </TableWrapper>`,...(H=(w=d.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var y,v,D;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => <TableWrapper>
        <Table {...args}>
            <TableCaption>
                Population of Australian states and territories, December 2015
            </TableCaption>
            <TableHead>
                <tr>
                    <TableHeader scope="col">Location</TableHeader>
                    <TableHeader textAlign="right" scope="col">
                        Population
                    </TableHeader>
                    <TableHeader textAlign="right" scope="col">
                        Change over previous year %
                    </TableHeader>
                    <TableHeader textAlign="right" scope="col">
                        Change over previous decade %
                    </TableHeader>
                </tr>
            </TableHead>
            <TableBody>
                {exampleData.map(({
        location,
        population,
        growthYear,
        growthDecade
      }, index) => <tr key={index}>
                            <TableCell as="th" scope="row">
                                {location}
                            </TableCell>
                            <TableCell textAlign="right">
                                {numberFormatter.format(population)}
                            </TableCell>
                            <TableCell textAlign="right">{growthYear}%</TableCell>
                            <TableCell textAlign="right">{growthDecade}%</TableCell>
                        </tr>)}
            </TableBody>
        </Table>
    </TableWrapper>`,...(D=(v=s.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var f,P,Y;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`() => <TableWrapper>
        <Table tableLayout="fixed">
            <TableCaption>
                Population of Australian states and territories, December 2015
            </TableCaption>
            <TableHead>
                <tr>
                    <TableHeader scope="col" width={{
          xs: '14rem',
          md: '40%'
        }}>
                        Location
                    </TableHeader>
                    <TableHeader scope="col" textAlign="right" width={{
          xs: '10rem',
          md: '20%'
        }}>
                        Population
                    </TableHeader>
                    <TableHeader scope="col" textAlign="right" width={{
          xs: '14rem',
          md: '20%'
        }}>
                        Change over previous year %
                    </TableHeader>
                    <TableHeader scope="col" textAlign="right" width={{
          xs: '14rem',
          md: '20%'
        }}>
                        Change over previous decade %
                    </TableHeader>
                </tr>
            </TableHead>
            <TableBody>
                {exampleData.map(({
        location,
        population,
        growthYear,
        growthDecade
      }, index) => <tr key={index}>
                            <TableCell as="th" scope="row">
                                {location}
                            </TableCell>
                            <TableCell textAlign="right">
                                {numberFormatter.format(population)}
                            </TableCell>
                            <TableCell textAlign="right">{growthYear}%</TableCell>
                            <TableCell textAlign="right">{growthDecade}%</TableCell>
                        </tr>)}
            </TableBody>
        </Table>
    </TableWrapper>`,...(Y=(P=p.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};var W,S,B;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <Stack gap={1}>
            <H1 id="table-heading">Population</H1>
            <Text id="table-description">
                Population of Australian states and territories, December 2015.
            </Text>
            <TableWrapper>
                <Table aria-labelledby="table-heading" aria-describedby="table-description">
                    <TableHead>
                        <tr>
                            <TableHeader scope="col">Location</TableHeader>
                            <TableHeader textAlign="right" scope="col">
                                Population
                            </TableHeader>
                            <TableHeader textAlign="right" scope="col">
                                Change over previous year %
                            </TableHeader>
                            <TableHeader textAlign="right" scope="col">
                                Change over previous decade %
                            </TableHeader>
                        </tr>
                    </TableHead>
                    <TableBody>
                        {exampleData.map(({
            location,
            population,
            growthYear,
            growthDecade
          }, index) => <tr key={index}>
                                    <TableCell as="th" scope="row">
                                        {location}
                                    </TableCell>
                                    <TableCell textAlign="right">
                                        {numberFormatter.format(population)}
                                    </TableCell>
                                    <TableCell textAlign="right">{growthYear}%</TableCell>
                                    <TableCell textAlign="right">{growthDecade}%</TableCell>
                                </tr>)}
                    </TableBody>
                </Table>
            </TableWrapper>
        </Stack>;
}`,...(B=(S=h.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const z=["Basic","Striped","FixedLayout","WithHeading"];export{d as Basic,p as FixedLayout,s as Striped,h as WithHeading,z as __namedExportsOrder,q as default};
//# sourceMappingURL=Table.stories-78ed5800.js.map
