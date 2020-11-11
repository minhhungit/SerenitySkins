# SerenitySkins

## SKINS: GLASS 001

<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/001.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/003.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/005.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/007.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/009.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/011.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/013.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/015.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/017.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/019.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/021.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/023.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/025.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/027.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/029.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/031.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/033.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/035.png?raw=true" style="width: 100%;" />

## SKINS: DARK 001
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/dark-001/1.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/dark-001/2.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/dark-001/3.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/dark-001/4.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/dark-001/5.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/dark-001/6.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/dark-001/7.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/dark-001/8.png?raw=true" style="width: 100%;" />


### HOW TO SETUP

Copy `skins` folder from `/wwwroot/Content/` to your project (keep same path)

Copy `J.initSkins.ts` file from `Modules/Common/Helper/` to your project (keep same path)

Modify file `/wwwroot/Content/site/site.theme.less`, import `theme.less` like bellow
```css
@import "../adminlte/social-widgets.less";
@import "../adminlte/skins/_all-skins.less";
@import "../skins/dark001/theme.less"; /* <======================== */
@import "../skins/glass001/theme.less"; /* <======================== */

@import "../adminlte/mailbox.less";
```


In `/Modules/Common/Navigation/ThemeSelection.ts`, add 

```javascript
Q.addOption(select, 'dark-001', Q.text('Site.Layout.Dark001'));

let glassStyleIdx = 1;
while (glassStyleIdx <= 18) {
	Q.addOption(select, `glass-001-style-${glassStyleIdx}`, Q.text(`Site.Layout.Glass001Style${glassStyleIdx}`));
	glassStyleIdx++;
}
```

Then add `window.location.reload();` at end of `this.change` function to page can be refreshed after user select skin

Modify file `Modules/Common/ScriptInitialization.ts`, add this line:
```javascript
J.initSkins();
```

Remember to add `/// <reference path="Helpers/J.initSkins.ts" />` to top of file, your `ScriptInitialization.ts` should be like this

```javascript
/// <reference path="../Common/Helpers/LanguageList.ts" />
/// <reference path="Helpers/J.initSkins.ts" />

namespace SerenitySkins.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('SerenitySkins');
    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;

    if ($.fn['colorbox']) {
        $.fn['colorbox'].settings.maxWidth = "95%";
        $.fn['colorbox'].settings.maxHeight = "95%";
    }

    J.initSkins(); // <==============

    window.onerror = Q.ErrorHandling.runtimeErrorHandler;
}
```

In `/Modules/Texts.cs`, inside Site class > Layout class, add this line
>public static LocalText Dark001 = "Dark 001";


Add a helper function for navigation in `/Views/Shared/LeftNavigation.cshtml` to make slimScrollBar bigger => easy for dragging, like this:
```javascript
<script type="text/javascript">
	(function modifySlimScrollbar() {
		setTimeout(() => {
			if ($(".slimScrollBar") && $(".slimScrollBar").width() < 8) {
				$(".slimScrollBar").css("width", "8px");
				$(".slimScrollBar").css("background-color", "#3291c7");
				$(".slimScrollBar").css("margin-right", "1px");
				$(".slimScrollBar").hide(200);
			} else {
				modifySlimScrollbar();
			}
		}, 10);
	})();
</script>
```

Add new font into `/Views/Shared/_LayoutHead.cshtml`:

```c#
<link rel="home" id="ApplicationPath" href="~/" />
<link rel="icon" type="image/x-icon" href="~/favicon.ico" />	
@Html.StyleBundle("Base")
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"> @* <========== add this line*@
@Html.StyleBundle("Site")
```
