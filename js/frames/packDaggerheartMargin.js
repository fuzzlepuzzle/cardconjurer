//Create objects for common properties across available frames
var bounds = {x:-88/2010, y:-80/2817, width:2187/2010, height:2978/2817};
var ogBounds = {x:0, y:0, width:1, height:1};
//defines available frames
availableFrames = [
	{name:'Ancestry Extension', src:'/img/frames/daggerheart/margin/ancestry.png', bounds:bounds, ogBounds:ogBounds},
	//{name:'Community Extension', src:'/img/frames/daggerheart/margin/community.png', bounds:bounds, ogBounds:ogBounds},
	//{name:'Transformation Extension', src:'/img/frames/daggerheart/margin/transformation.png', bounds:bounds, ogBounds:ogBounds},
	//{name:'Domain Extension', src:'/img/frames/daggerheart/margin/domain.png', bounds:bounds, ogBounds:ogBounds},
	//{name:'Class Extension', src:'/img/frames/daggerheart/margin/class.png', bounds:bounds, ogBounds:ogBounds},
	//{name:'Equipment Extension', src:'/img/frames/daggerheart/margin/equipment.png', bounds:bounds, ogBounds:ogBounds},
];
//disables/enables the "Load Frame Version" button
document.querySelector('#loadFrameVersion').disabled = false;
//defines process for loading this version, if applicable
document.querySelector('#loadFrameVersion').onclick = loadMarginVersion;
//loads available frames
loadFramePack();