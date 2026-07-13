//Create objects for common properties across available frames
var bounds = {x:0.764, y:0.8861904761904762, width:0.18266666666666666, height:0.06666666666666667};
//defines available frames
availableFrames = [
	{name:'White Power/Toughness', src:'/img/frames/borderlessAlt/addons/pt/w.png', bounds:bounds},
	{name:'Blue Power/Toughness', src:'/img/frames/borderlessAlt/addons/pt/u.png', bounds:bounds},
	{name:'Black Power/Toughness', src:'/img/frames/borderlessAlt/addons/pt/b.png', bounds:bounds},
	{name:'Red Power/Toughness', src:'/img/frames/borderlessAlt/addons/pt/r.png', bounds:bounds},
	{name:'Green Power/Toughness', src:'/img/frames/borderlessAlt/addons/pt/g.png', bounds:bounds},
	{name:'Multicolored Power/Toughness', src:'/img/frames/borderlessAlt/addons/pt/m.png', bounds:bounds},
	{name:'Artifact Power/Toughness', src:'/img/frames/borderlessAlt/addons/pt/a.png', bounds:bounds},
	{name:'Colorless Power/Toughness', src:'/img/frames/borderlessAlt/addons/pt/c.png', bounds:bounds},
	{name:'Land Power/Toughness', src:'/img/frames/borderlessAlt/addons/pt/l.png', bounds:bounds},
	{name:'Vehicle Power/Toughness', src:'/img/frames/borderlessAlt/addons/pt/v.png', bounds:bounds},
];
//disables/enables the "Load Frame Version" button
document.querySelector('#loadFrameVersion').disabled = true;
//defines process for loading this version, if applicable
document.querySelector('#loadFrameVersion').onclick = null;
//loads available frames
loadFramePack();