var WIDTH = 1280;
var HEIGHT = 720;
var renderer = PIXI.autoDetectRenderer(WIDTH, HEIGHT, {antialiasing: false, transparent: false, resolution: 1});
var stage = new PIXI.Container();
renderer.backgroundColor = 0xFF00FF;
document.getElementById("game").appendChild(renderer.view);
var fontConfig = {font: "30px 'rockfire'", fill: "#000000", align: "left"};

var cBack = new PIXI.Container();
var cMiddle = new PIXI.Container();
var cFront = new PIXI.Container();
var cGui = new PIXI.Container();

stage.addChild(cBack);
stage.addChild(cMiddle);
stage.addChild(cFront);
stage.addChild(cGui);

var versionText = new PIXI.Text("Version 0.01d", fontConfig);
cGui.addChild(versionText);

var loadKey = keyboard(65);
loadKey.press=function(){
    versionText.text="loading";
};
var unloadKey = keyboard(68);
unloadKey.press=function(){
    versionText.text="unloading";
};

var gameState = new State();

/*

PIXI.loader
    .add("..");

*/


function setup(){
    renderStage();
}

function State(){
    this.level = 0;
    this.name = "";
    this.mistakes = 0;
}

function renderStage(){
    requestAnimationFrame(renderStage);
    renderLoop();
    renderer.render(stage);
}

function renderLoop(){

}

// Start Rendering
setup();
