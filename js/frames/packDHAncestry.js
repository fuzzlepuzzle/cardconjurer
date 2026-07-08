// Eveleth Clean font for level number and name
// Overpass font for vault cost, rules text
// For SPELL, ABILITY, etc it's Eveleth Clean.
// For ANCESTRY, COMMUNITY, etc it's Overpass.



//Create objects for common properties across available frames
var masks = [];
var bounds = {x:1535/2010, y:2458/2814, width:373/2010, height:206/2814};
//defines available frames
availableFrames = [
	{name:'Ancestry', src:'/img/frames/daggerheart/ancestry.png', masks:masks}
];
//disables/enables the "Load Frame Version" button
document.querySelector('#loadFrameVersion').disabled = false;
//defines process for loading this version, if applicable
document.querySelector('#loadFrameVersion').onclick = async function() {
	//resets things so that every frame doesn't have to
	await resetCardIrregularities();
	//sets card version
	card.version = 'daggerheart';
	card.hideBottomInfoBorder = true;
	//art bounds
	card.artBounds = {x:0, y:0, width:1, height:1443/2814};
	autoFitArt();
	//text
	loadTextOptions({
		name: {name:'Name', text:'', x:172/2010, y:1500/2814, width:1667/2010, height:153/2814, font:'Eveleth', size:0.0381, align:'left', allCaps:true},
		rules: {name:'Rules Text', text:'', x:0.086, y:1316/2100, width:0.828, height:0.2875, font:'Overpass', size:0.0362},
		cardtype: {name:'Card Type', text:'', x:1480/2010, y:1443/2814, width:2010/2010, height:200/2814, oneLine:true, font:'Overpass', size:0.01, allCaps:true},
	});
}
//loads available frames
loadFramePack();