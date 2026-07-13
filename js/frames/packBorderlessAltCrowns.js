//Create objects for common properties across available frames
var bounds = {x:0/3000, y:99/4200, width:3000/3000, height:446/4200};
//defines available frames
availableFrames = [
	{name:'White Legend Crown', src:'/img/frames/borderlessAlt/addons/crowns/w.png', bounds:bounds},
	{name:'Blue Legend Crown', src:'/img/frames/borderlessAlt/addons/crowns/u.png', bounds:bounds},
	{name:'Black Legend Crown', src:'/img/frames/borderlessAlt/addons/crowns/b.png', bounds:bounds},
	{name:'Red Legend Crown', src:'/img/frames/borderlessAlt/addons/crowns/r.png', bounds:bounds},
	{name:'Green Legend Crown', src:'/img/frames/borderlessAlt/addons/crowns/g.png', bounds:bounds},
	{name:'Multicolored Legend Crown', src:'/img/frames/borderlessAlt/addons/crowns/m.png', bounds:bounds},
	{name:'Artifact Legend Crown', src:'/img/frames/borderlessAlt/addons/crowns/a.png', bounds:bounds},
	{name:'Colorless Legend Crown', src:'/img/frames/borderlessAlt/addons/crowns/c.png', bounds:bounds},
	{name:'Land Legend Crown', src:'/img/frames/borderlessAlt/addons/crowns/l.png', bounds:bounds}
];
//disables/enables the "Load Frame Version" button
document.querySelector('#loadFrameVersion').disabled = true;
//defines process for loading this version, if applicable
document.querySelector('#loadFrameVersion').onclick = null;
//loads available frames
loadFramePack();