class PageStage extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
		// this.skinName = 'PageStageSkin';
		this.skinName = 'resource/mySkins/pageStageSkin.exml';
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();

		// this.animateGroup1.play();
		this.bg_jpg.mask = this.rect_red;

		this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnTap, this);

	}

	public bg_jpg:eui.Image;
  public rect_red:eui.Rect;
	public btn:eui.Button;

	public animateGroup1: egret.tween.TweenGroup

	onBtnTap() {
		this.animateGroup1.play(0);
	}
}