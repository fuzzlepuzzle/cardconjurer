// Eveleth Clean font for level number and name
// Overpass font for vault cost, rules text
// For SPELL, ABILITY, etc it's Eveleth Clean.
// For ANCESTRY, COMMUNITY, etc it's Overpass.



//Create objects for common properties across available frames
var masks = [];
var bounds = {x:1535/2010, y:2458/2814, width:373/2010, height:206/2814};
//defines available frames
availableFrames = [
	{name:'Ancestry', src:'/img/frames/daggerheart/ancestry.png', masks:masks},
	//{name:'Community', src:'/img/frames/daggerheart/community.png', masks:masks},
	//{name:'Transformation', src:'/img/frames/daggerheart/transformation.png', masks:masks},
	//{name:'Domain', src:'/img/frames/daggerheart/domain.png', masks:masks},
	//{name:'Class', src:'/img/frames/daggerheart/class.png', masks:masks},
	//{name:'Equipment', src:'/img/frames/daggerheart/equipment.png', masks:masks},
];
//disables/enables the "Load Frame Version" button
document.querySelector('#loadFrameVersion').disabled = false;
//defines process for loading this version, if applicable
document.querySelector('#loadFrameVersion').onclick = async function() {
	//resets things so that every frame doesn't have to
	await resetCardIrregularities();
	//sets card version
	card.version = 'daggerheart';
	card.hideBottomInfoBorder = false;
	//art bounds
	card.artBounds = {x:0, y:0, width:1, height:1443/2814};
	autoFitArt();
	//text
	loadTextOptions({
		name: {name:'Name', text:'', x:172/2010, y:1500/2814, width:1667/2010, height:153/2814, font:'Eveleth', size:0.0381, align:'left', allCaps:true},
		rules: {name:'Rules Text', text:'', x:0.086, y:1316/2100, width:0.828, height:0.2875, font:'Overpass', size:0.0362},
		domaintype: {name:'Domain Type', text:'', x:0.0854, y:1193/2100, width:0.8292, height:0.0543, oneLine:true, font:'Eveleth', size:0.0324},
		cardtype: {name:'Card Type', text:'', x:1480/2010, y:1443/2814, width:2010/2010, height:200/2814, oneLine:true, font:'Overpass', size:0.01, allCaps:true},
		level: {name:'Level', text:'', y:126/2100, width:1390/1500, height:71/2100, oneLine:true, font:'Eveleth', size:71/1638, align:'right'},
		vault: {name:'Vault Cost', text:'', x:1605/2010, y:2538/2814, width:0.1367, height:0.0372, oneLine:true, font:'Overpass', size:0.0372, align:'center'}
	});
}
//loads available frames
loadFramePack();