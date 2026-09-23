export type ToolStatus='working'|'implemented'|'planned';
export const toolRegistry=[
['percentage','Percentage Calculator','working'],['age','Age Calculator','working'],['discount','Discount Calculator','working'],['emi','EMI Calculator','working'],['unit','Unit Converter','working'],['date-difference','Date Difference','working'],['time-duration','Time Duration','working'],['gst','GST Calculator','working'],['loan-interest','Loan Interest Calculator','working'],['salary','Salary Calculator','working'],['electricity-bill','Electricity Bill Calculator','working'],['image-compress','Image Compress','working'],['image-resize','Image Resize','working'],['jpg-png','JPG / PNG Converter','working'],['pdf-compress','PDF Compress','implemented'],['pdf-merge','PDF Merge','implemented'],['pdf-split','PDF Split','implemented']
].map(([slug,name,status])=>({slug,name,status:status as ToolStatus}));
export const problemIntents=[
 {q:'my pdf is too large',tool:'pdf-compress'}, {q:'combine pdf files',tool:'pdf-merge'}, {q:'split pdf pages',tool:'pdf-split'},
 {q:'compress photo',tool:'image-compress'}, {q:'resize image',tool:'image-resize'}, {q:'convert jpg png',tool:'jpg-png'},
 {q:'calculate percentage',tool:'percentage'}, {q:'how old am i',tool:'age'}, {q:'discount price',tool:'discount'},
 {q:'loan monthly payment',tool:'emi'}, {q:'convert kg to pounds',tool:'unit'}, {q:'days between dates',tool:'date-difference'},
 {q:'hours between times',tool:'time-duration'}, {q:'gst calculation',tool:'gst'}, {q:'simple interest',tool:'loan-interest'},
 {q:'salary take home',tool:'salary'}, {q:'electricity bill estimate',tool:'electricity-bill'}
];
