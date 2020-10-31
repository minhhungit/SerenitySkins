# SerenitySkins

## SKINS: DARK 001

### HOW TO SETUP

Copy this folder `/wwwroot/Content/skins/dark001/` to your project (keep same path)

Copy `J.initSkins.ts` file from `Modules/Common/Helper/` to your project (keep same path)

Modify file `/wwwroot/Content/site/site.theme.less`, import `theme.less` like bellow
```css
@import "../adminlte/social-widgets.less";
@import "../adminlte/skins/_all-skins.less";
@import "../skins/dark001/theme.less"; /* <======================== */

@import "../adminlte/mailbox.less";
```


In `/Modules/Common/Navigation/ThemeSelection.ts`, add 

```javascript
Q.addOption(select, 'dark-001', Q.text('Site.Layout.Dark001'));
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

    J.initSkins();

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

In `/Views/Shared/_Layout.cshtml` change default skin name to `dark-001`:
>var theme = !themeCookie.IsEmptyOrNull() ? themeCookie : "dark-001";

Add new font into `/Views/Shared/_LayoutHead.cshtml`:

```c#
<link rel="home" id="ApplicationPath" href="~/" />
<link rel="icon" type="image/x-icon" href="~/favicon.ico" />	
@Html.StyleBundle("Base")
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"> @* <========== add this line*@
@Html.StyleBundle("Site")
```
### Screenshot

<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/1.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/2.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/3.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/4.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/5.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/6.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/7.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/8.png?raw=true" style="width: 100%;" />

