//Create objects for common properties across available frames
var masks = [{src:'/img/frames/m15/nickname/m15MaskNicknameLegendCrownStrokeless.png', name:'Strokeless Crown'}, {src:'/img/frames/m15/regular/m15MaskTitle.png', name:'Title'}, {src:'/img/frames/m15/nickname/m15NicknameMaskTrueName.png', name:'True Title'}];
var masks2 = [{src:'/img/frames/m15/nickname/m15MaskNicknameTitleStrokeless.png', name:'Strokeless Title'}, {src:'/img/frames/m15/regular/m15MaskTitle.png', name:'Title'}, {src:'/img/frames/m15/nickname/m15NicknameMaskTrueName.png', name:'True Title'}, {src:'/img/frames/m15/nickname/truenameAddon.svg', name:'Lower Section'}];
var bounds = {x:0.024, y:0.0172, width:0.952, height:0.1286};
var bounds2 = {x:0.0494, y:0.0405, width:0.9014, height:0.1053};
//defines available frames
availableFrames = [
	{name:'White Crown', src:'/img/frames/borderlessAlt/nickname/crownW.png', masks:masks, bounds:bounds},
	{name:'Blue Crown', src:'/img/frames/borderlessAlt/nickname/crownU.png', masks:masks, bounds:bounds},
	{name:'Black Crown', src:'/img/frames/borderlessAlt/nickname/crownB.png', masks:masks, bounds:bounds},
	{name:'Red Crown', src:'/img/frames/borderlessAlt/nickname/crownR.png', masks:masks, bounds:bounds},
	{name:'Green Crown', src:'/img/frames/borderlessAlt/nickname/crownG.png', masks:masks, bounds:bounds},
	{name:'Multicolored Crown', src:'/img/frames/borderlessAlt/nickname/crownM.png', masks:masks, bounds:bounds},
	{name:'Artifact Crown', src:'/img/frames/borderlessAlt/nickname/crownA.png', masks:masks, bounds:bounds},
	{name:'Land Crown', src:'/img/frames/borderlessAlt/nickname/crownL.png', masks:masks, bounds:bounds},

	{name:'White Title', src:'/img/frames/borderlessAlt/nickname/titleW.png', masks:masks2, bounds:bounds2},
	{name:'Blue Title', src:'/img/frames/borderlessAlt/nickname/titleU.png', masks:masks2, bounds:bounds2},
	{name:'Black Title', src:'/img/frames/borderlessAlt/nickname/titleB.png', masks:masks2, bounds:bounds2},
	{name:'Red Title', src:'/img/frames/borderlessAlt/nickname/titleR.png', masks:masks2, bounds:bounds2},
	{name:'Green Title', src:'/img/frames/borderlessAlt/nickname/titleG.png', masks:masks2, bounds:bounds2},
	{name:'Multicolored Title', src:'/img/frames/borderlessAlt/nickname/titleM.png', masks:masks2, bounds:bounds2},
	{name:'Artifact Title', src:'/img/frames/borderlessAlt/nickname/titleA.png', masks:masks2, bounds:bounds2},
	{name:'Land Title', src:'/img/frames/borderlessAlt/nickname/titleL.png', masks:masks2, bounds:bounds2}
];
//disables/enables the "Load Frame Version" button
document.querySelector('#loadFrameVersion').disabled = true;
//defines process for loading this version, if applicable
document.querySelector('#loadFrameVersion').onclick = null;
//loads available frames
loadFramePack();