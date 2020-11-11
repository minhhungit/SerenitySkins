namespace J {

    export function initSkins(themeCookieName: string) {

        let curSkinClass = $.cookie(themeCookieName) || "blue";
        switch (curSkinClass.toLowerCase().trim()) {
            case "dark-001":
                Serenity.DataGrid.defaultRowHeight = 30;
                Serenity.DataGrid.defaultHeaderHeight = 30;

                break;
            case "glass-001-style-1":
            case "glass-001-style-2":
            case "glass-001-style-3":
            case "glass-001-style-4":
            case "glass-001-style-5":
            case "glass-001-style-6":
            case "glass-001-style-7":
            case "glass-001-style-8":
            case "glass-001-style-9":
            case "glass-001-style-10":
            case "glass-001-style-11":
            case "glass-001-style-12":
            case "glass-001-style-13":
            case "glass-001-style-14":
            case "glass-001-style-15":
            case "glass-001-style-16":
            case "glass-001-style-17":
            case "glass-001-style-18":
            case "glass-001-style-19":
            case "glass-001-style-20":

                $.datepicker.setDefaults({
                    buttonImage: null,
                    buttonImageOnly: false,
                    buttonText: '<i class="fa fa-calendar text-white"></i>'
                });

                Serenity.DataGrid.defaultRowHeight = 30;
                Serenity.DataGrid.defaultHeaderHeight = 30;

                break;
            default:
                break;
        }
    }    
}