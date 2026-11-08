const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.Audio,
		C3.Plugins.Browser,
		C3.Behaviors.Sin,
		C3.Plugins.Mouse,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Browser.Acts.Close,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.AddVar,
		C3.Behaviors.Sin.Acts.SetPeriod,
		C3.Plugins.System.Exps.max,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Cnds.CompareVar
	];
};
self.C3_JsPropNameTable = [
	{BG1: 0},
	{BG2: 0},
	{BG3: 0},
	{TextPetunjuk: 0},
	{TombolMulai: 0},
	{TombolKELUAR: 0},
	{Audio: 0},
	{Browser: 0},
	{BAR: 0},
	{ZONAHIJAU: 0},
	{Sine: 0},
	{PAKU: 0},
	{TextSKOR: 0},
	{TextINFO: 0},
	{Mouse: 0},
	{FotoPROFIL: 0},
	{Text: 0},
	{Skor: 0}
];

self.InstanceType = {
	BG1: class extends self.ISpriteInstance {},
	BG2: class extends self.ISpriteInstance {},
	BG3: class extends self.ISpriteInstance {},
	TextPetunjuk: class extends self.ITextInstance {},
	TombolMulai: class extends self.IButtonInstance {},
	TombolKELUAR: class extends self.IButtonInstance {},
	Audio: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	BAR: class extends self.ISpriteInstance {},
	ZONAHIJAU: class extends self.ISpriteInstance {},
	PAKU: class extends self.ISpriteInstance {},
	TextSKOR: class extends self.ITextInstance {},
	TextINFO: class extends self.ITextInstance {},
	Mouse: class extends self.IInstance {},
	FotoPROFIL: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {}
}