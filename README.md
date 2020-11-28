# Serenity Skins - Themes for [Serenity Framework](https://github.com/volkanceylan/Serenity)

**!!! RIGHT NOW THESE SKINS ARE JUST FOR SERENE VERSION (FREE VERSION)**

**!!! STARTSHARP HAS NOT SUPPORTED YET**

**!!! STILL DEVELOPING, DON'T USE IT ON PRODUCTION**

## Demo

# SKINS: GLASS 001

**Style 001 Css Background Animation**             |  **Style 002 Image Background**
:-------------------------:|:-------------------------:
![Style 001 Css Background Animation](https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001-ver2/style01.gif?raw=true)  |  ![Style 002 Image Background](https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001-ver2/img-003.jpg?raw=true)

**Style 004 Css Background Animation**             |  **Style 005 Image Background**
:-------------------------:|:-------------------------:
![Style 004 Css Background Animation](https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001-ver2/style04.gif?raw=true)  |  ![Style 005 Image Background](https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001-ver2/img-005.jpg?raw=true)

**Style 006 Video Background**             |  **Style 007 Image Background**
:-------------------------:|:-------------------------:
![Style 006 Video Background](https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001-ver2/style06.gif?raw=true)  |  ![Style 007 Image Background](https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001-ver2/img-009.jpg?raw=true)

**Style 009 White**             |  **Style 011 Purple**
:-------------------------:|:-------------------------:
![Style 009 White](https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001-ver2/img-011.jpg?raw=true)  |  ![Style 011 Purple](https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001-ver2/img-013.jpg?raw=true)


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

In `/Modules/Texts.cs`, inside Site class > Layout class, add these lines
```csharp
public static LocalText Glass001Style1 = "Glass 001 Style 001";
public static LocalText Glass001Style2 = "Glass 001 Style 002";
public static LocalText Glass001Style3 = "Glass 001 Style 003";
public static LocalText Glass001Style4 = "Glass 001 Style 004";
public static LocalText Glass001Style5 = "Glass 001 Style 005";
public static LocalText Glass001Style6 = "Glass 001 Style 006";
public static LocalText Glass001Style7 = "Glass 001 Style 007";
public static LocalText Glass001Style8 = "Glass 001 Style 008";
public static LocalText Glass001Style9 = "Glass 001 Style 009";
public static LocalText Glass001Style10 = "Glass 001 Style 010";
```


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

Copy file `jquery.vide.js` from `wwwroot\Scripts` and modify `ScriptBundles.json` in `wwwroot\Scripts\site`

```json
"~/Scripts/adminlte/app.js",
"~/Scripts/jquery.vide.js", <==============
"~/Scripts/site/SerenitySkins.Web.js",
"dynamic://ColumnsBundle",
"dynamic://FormBundle",
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
