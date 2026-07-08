//Create objects for common properties across available frames
var bounds = {x:-0.044, y:-1/35, width:1.088, height:37/35};
var ogBounds = {x:0, y:0, width:1, height:1};
//defines available frames
availableFrames = [
	{name:'Ancestry Extension', src:'/img/frames/daggerheart/margin/ancestry.png', bounds:bounds},
	//{name:'Community Extension', src:'/img/frames/daggerheart/margin/community.png', bounds:bounds},
	//{name:'Transformation Extension', src:'/img/frames/daggerheart/margin/transformation.png', bounds:bounds},
	//{name:'Domain Extension', src:'/img/frames/daggerheart/margin/domain.png', bounds:bounds},
	//{name:'Class Extension', src:'/img/frames/daggerheart/margin/class.png', bounds:bounds},
	//{name:'Equipment Extension', src:'/img/frames/daggerheart/margin/equipment.png', bounds:bounds},
];
//disables/enables the "Load Frame Version" button
document.querySelector('#loadFrameVersion').disabled = false;
//defines process for loading this version, if applicable
document.querySelector('#loadFrameVersion').onclick = loadMarginVersion;
//loads available frames
loadFramePack();