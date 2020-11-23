# SerenitySkins

**!!! RIGHT NOW THESE SKINS ARE JUST FOR SERENE VERSION (FREE VERSION), STARTSHARP HAS NOT SUPPORTED YET**

**!!! STILL DEVELOPING, DON'T USE IT ON PRODUCTION**
## SKINS: GLASS 001

<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/Image 001.jpg?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/Image 003.jpg?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/Image 005.jpg?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/Image 007.jpg?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/Image 009.jpg?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/Image 011.jpg?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/Image 013.jpg?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/Image 015.jpg?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/Image 017.jpg?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/Image 019.jpg?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/Image 021.jpg?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/Image 023.jpg?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/Image 025.jpg?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/Image 027.jpg?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/Image 029.jpg?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/Image 031.jpg?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/Image 033.jpg?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/Image 035.jpg?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/Image 036.jpg?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/Image 037.jpg?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/Image 038.jpg?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/glass-001/Image 039.jpg?raw=true" style="width: 100%;" />

## SKINS: DARK 001
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/dark-001/2.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/dark-001/3.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/dark-001/4.png?raw=true" style="width: 100%;" />
<img src="https://github.com/minhhungit/SerenitySkins/blob/main/assets/images/dark-001/5.png?raw=true" style="width: 100%;" />

### HOW TO SETUP

Copy `skins` folder from `/wwwroot/Content/` to your project (keep same path)

Copy `J.initSkins.ts` file from `Modules/Common/Helper/` to your project (keep same path)

Modify file `/wwwroot/Content/site/site.theme.less`, import `theme.less` like bellow
```javascript
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
