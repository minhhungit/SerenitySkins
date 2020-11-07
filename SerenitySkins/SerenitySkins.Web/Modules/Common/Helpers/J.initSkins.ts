namespace J {

    export function initSkins() {

        let curSkinClass = $.cookie('ThemePreference', ) || "blue";
        switch (curSkinClass.toLowerCase().trim()) {
            case "dark-001":
                Serenity.DataGrid.defaultRowHeight = 30;
                Serenity.DataGrid.defaultHeaderHeight = 30;

                break;
            default:
        }
    }    
}