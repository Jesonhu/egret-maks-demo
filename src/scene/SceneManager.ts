class SceneManager extends egret.DisplayObjectContainer {
  constructor() {
    super();
  }

  private _rootStage: egret.DisplayObjectContainer;
  public set rootStage(rootStage) {
    this._rootStage = rootStage;
  }

  public start() {
    this.addGameScene();
  }


  private gameStage: PageStage = new PageStage;
  // private gameStage: PageMain = new PageMain;

  private addGameScene() {
    this._rootStage.addChild(this.gameStage);
  }
}