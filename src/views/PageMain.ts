class PageMain extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		this.skinName = 'PageMainSkin';
		// this.skinName = 'resource/mySkins/PageMainSkin.exml';
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}