# SerenitySkins

## SKINS: DARK 001

### HOW TO SETUP

Create new folder called `skins` in `/wwwroot/Content/` and copy `dark001.less` to, the full path will be like this: `/wwwroot/Content/skins/dark001.less`

Modify file `/wwwroot/Content/site/site.theme.less`, add this line bellow `_all-skins.less";`, for example:
```css
@import "../adminlte/social-widgets.less";
@import "../adminlte/skins/_all-skins.less";
@import "../skins/dark001.less"; /* <======================== */

@import "../adminlte/mailbox.less";
```

In `/Modules/Common/Navigation/ThemeSelection.ts`, add 

```javascript
Q.addOption(select, 'dark-001', Q.text('Site.Layout.Dark001'));
```

In `/Modules/Texts.cs`, inside class Site/Layout add this line
>public static LocalText Dark001 = "Dark 001";


Change row height of slickgrid to 30
```javascript
protected getSlickOptions() {
	let opt = super.getSlickOptions();
	opt.rowHeight = 30;
	return opt;
}
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

