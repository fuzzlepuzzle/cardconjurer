//Create objects for common properties across available frames
var masks = [
	{src:'/img/frames/borderlessAlt/shortest/masks/maskPinlines.png', name:'Pinline'},
	{src:'/img/frames/borderlessAlt/shortest/masks/maskTitle.png', name:'Title'},
	{src:'/img/frames/borderlessAlt/shortest/masks/maskType.png', name:'Type'},
	{src:'/img/frames/borderlessAlt/shortest/masks/maskRules.png', name:'Rules'},
	{src:'/img/frames/borderlessAlt/shortest/masks/maskNoTitle.png', name:'No Title'},
	{src:'/img/frames/borderlessAlt/shortest/masks/maskNoBorder.png', name:'No Border'},
	{src:'/img/frames/borderlessAlt/shortest/masks/maskStraightBorder.png', name:'Straight Border'},
	{src:'/img/frames/borderlessAlt/shortest/masks/maskBorder.png', name:'Border'}
];
var bounds = {x:0.7573, y:0.8848, width:0.188, height:0.0733};
//defines available frames
availableFrames = [
	{name:'White Frame', src:'/img/frames/borderlessAlt/shortest/w.png', masks:masks, preserveAlpha:true},
	{name:'Blue Frame', src:'/img/frames/borderlessAlt/shortest/u.png', masks:masks, preserveAlpha:true},
	{name:'Black Frame', src:'/img/frames/borderlessAlt/shortest/b.png', masks:masks, preserveAlpha:true},
	{name:'Red Frame', src:'/img/frames/borderlessAlt/shortest/r.png', masks:masks, preserveAlpha:true},
	{name:'Green Frame', src:'/img/frames/borderlessAlt/shortest/g.png', masks:masks, preserveAlpha:true},
	{name:'Multicolored Frame', src:'/img/frames/borderlessAlt/shortest/m.png', masks:masks, preserveAlpha:true},
	{name:'Artifact Frame', src:'/img/frames/borderlessAlt/shortest/a.png', masks:masks, preserveAlpha:true},
	{name:'Colorless Frame', src:'/img/frames/borderlessAlt/shortest/c.png', masks:masks, preserveAlpha:true},
	{name:'Land Frame (No Inner Glow)', src:'/img/frames/borderlessAlt/shortest/l.png', masks:masks, preserveAlpha:true},
	
	
	{name:'Land Frame', src:'/img/frames/borderlessAlt/land/shortest/l.png', masks:masks, preserveAlpha:true},
	{name:'Land (Typeline Colored) Frame', src:'/img/frames/borderlessAlt/land/shortest/l2.png', masks:masks, preserveAlpha:true},
	{name:'White Land Frame', src:'/img/frames/borderlessAlt/land/shortest/w.png', masks:masks, preserveAlpha:true},
	{name:'Blue Land Frame', src:'/img/frames/borderlessAlt/land/shortest/u.png', masks:masks, preserveAlpha:true},
	{name:'Black Land Frame', src:'/img/frames/borderlessAlt/land/shortest/b.png', masks:masks, preserveAlpha:true},
	{name:'Red Land Frame', src:'/img/frames/borderlessAlt/land/shortest/r.png', masks:masks, preserveAlpha:true},
	{name:'Green Land Frame', src:'/img/frames/borderlessAlt/land/shortest/g.png', masks:masks, preserveAlpha:true},
	{name:'Multicolored Land Frame', src:'/img/frames/borderlessAlt/land/shortest/m.png', masks:masks, preserveAlpha:true},
	{name:'Artifact Land Frame', src:'/img/frames/borderlessAlt/land/shortest/a.png', masks:masks, preserveAlpha:true},
	{name:'Colorless Land Frame', src:'/img/frames/borderlessAlt/land/shortest/c.png', masks:masks, preserveAlpha:true}
];
//disables/enables the "Load Frame Version" button
document.querySelector('#loadFrameVersion').disabled = false;
//defines process for loading this version, if applicable
document.querySelector('#loadFrameVersion').onclick = async function() {
	//resets things so that every frame doesn't have to
	// also overrides canvas size cuz it's an HD frame
	var previousCardHeight = card.height
	await resetCardIrregularities({canvas:[3000, 4200, 0, 0]});
	//sets card version
	card.version = 'borderless';
	//art bounds
	card.artBounds = {x:0, y:0, width:1, height:0.9224};
	autoFitArt();
	//set symbol bounds
	card.setSymbolBounds = {x:0.9213, y:0.7272, width:0.12, height:0.0410, vertical:'center', horizontal: 'right'};
	resetSetSymbol();
	//watermark bounds
	card.watermarkBounds = {x:0.5, y:0.8415, width:0.75, height:0.1115};
	resetWatermark();
	//text
	loadTextOptions({
		mana: {name:'Mana Cost', text:'', y:0.0613, width:0.9292, height:71/2100, oneLine:true, size:71/1638, align:'right', shadowX:-0.001, shadowY:0.0029, manaCost:true, manaSpacing:0},
		title: {name:'Title', text:'', x:0.0854, y:0.0522, width:0.8292, height:0.0543, oneLine:true, font:'belerenb', size:0.0381, color:'white'},
		type: {name:'Type', text:'', x:0.0854, y:0.7024, width:0.8292, height:0.0543, oneLine:true, font:'belerenb', size:0.0324, color:'white'},
		rules: {name:'Rules Text', text:'', x:0.086, y:0.7647, width:0.828, height:0.1543, size:0.0362, color:'white'},
		pt: {name:'Power/Toughness', text:'', x:0.7928, y:0.902, width:0.1367, height:0.0372, size:0.0372, font:'belerenbsc', oneLine:true, align:'center', color:'white'}
	});
}
//loads available frames
loadFramePack();