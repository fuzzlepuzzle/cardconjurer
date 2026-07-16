//Create objects for common properties across available frames
var bounds = {x:-264/3000, y:-240/4200, width:3264/3000, height:4440/4200};
var ogBounds = {x:0, y:0, width:1, height:1};
//defines available frames
availableFrames = [
	{name:'Testing 2', src:'/img/frames/borderlessAlt/margin.png', ogBounds:ogBounds, bounds:bounds}
];
//disables/enables the "Load Frame Version" button
document.querySelector('#loadFrameVersion').disabled = false;

document.querySelector('#loadFrameVersion').onclick = async function() {
	loadMarginVersion();

	await resetCardIrregularities({canvas:[getStandardWidth(), getStandardHeight(), 264/3000, 240/4200], resetOthers:false});

	drawTextBuffer();
	drawFrames();
	bottomInfoEdited();
	watermarkEdited();
	drawNewGuidelines();
}
//loads available frames
loadFramePack();