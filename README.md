# SerenitySkins

**!!! RIGHT NOW THESE SKINS ARE JUST FOR SERENE VERSION (FREE VERSION), STARTSHARP HAS NOT SUPPORTED YET**

**!!! STILL DEVELOPING, DON'T USE IT ON PRODUCTION**

## Demo

# SKINS: GLASS 001

**Glass 001 Style 001 Grid**             |  **Glass 001 Style 001 Dialog**
:-------------------------:|:-------------------------:
![Glass 001 Style 001 Grid](https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001-ver2/img-1.jpg?raw=true)  |  ![Glass 001 Style 001 Dialog](https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001-ver2/img-2.jpg?raw=true)

**Glass 001 Style 002 Grid**             |  **Glass 001 Style 002 Dialog**
:-------------------------:|:-------------------------:
![Glass 001 Style 002 Grid](https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001-ver2/img-3.jpg?raw=true)  |  ![Glass 001 Style 002 Dialog](https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001-ver2/img-4.jpg?raw=true)

**Glass 001 Style 005 Grid**             |  **Glass 001 Style 005 Dialog**
:-------------------------:|:-------------------------:
![Glass 001 Style 005 Grid](https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001-ver2/img-5.jpg?raw=true)  |  ![Glass 001 Style 005 Dialog](https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001-ver2/img-6.jpg?raw=true)

**Glass 001 Style 006 Grid**             |  **Glass 001 Style 006 Dialog**
:-------------------------:|:-------------------------:
![Glass 001 Style 006 Grid](https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001-ver2/img-7.jpg?raw=true)  |  ![Glass 001 Style 006 Dialog](https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001-ver2/img-8.jpg?raw=true)

**Glass 001 Style 007 Grid**             |  **Glass 001 Style 007 Dialog**
:-------------------------:|:-------------------------:
![Glass 001 Style 007 Grid](https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001-ver2/img-9.jpg?raw=true)  |  ![Glass 001 Style 007 Dialog](https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001-ver2/img-10.jpg?raw=true)

**Glass 001 Style 009 Grid**             |  **Glass 001 Style 009 Dialog**
:-------------------------:|:-------------------------:
![Glass 001 Style 009 Grid](https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001-ver2/img-11.jpg?raw=true)  |  ![Glass 001 Style 009 Dialog](https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001-ver2/img-12.jpg?raw=true)


## HOW TO SETUP

Copy `skins` folder from `/wwwroot/Content/` to your project (keep same path)

Copy `J.initSkins.ts` file from `Modules/Common/Helper/` to your project (keep same path)

Modify file `/wwwroot/Content/site/site.theme.less`, import `theme.less` like bellow
```javascript
@import "../adminlte/social-widgets.less";
@import "../adminlte/skins/_all-skins.less";
@import "../skins/glass001/theme.less"; /* <======================== */

@import "../adminlte/mailbox.less";
```


In `/Modules/Common/Navigation/ThemeSelection.ts`, add 

```javascript

let glassStyleIdx = 1;
while (glassStyleIdx <= 9) {
	Q.addOption(select, `glass-001-style-${glassStyleIdx}`, Q.text(`Site.Layout.Glass001Style${glassStyleIdx}`));
	glassStyleIdx++;
}
```

Then add `window.location.reload();` at end of `this.change` function to page can be refreshed after user select skin

Modify file `Modules/Common/ScriptInitialization.ts`, add this line:
```javascript
J.initSkins('ThemePreference');
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

    J.initSkins('ThemePreference'); // <==============

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

Copy file `Content\font-poppins.css` and modify `Content\site\CssBundles.json` to add font to `Base` element:

```json
{
  "Base": [
    "~/Content/font-open-sans-base64.css",
    "~/Content/font-awesome.css",
    "~/Content/font-poppins.css", <==================
    "~/Content/bootstrap.css",
    "~/Content/css/select2.css",
```
