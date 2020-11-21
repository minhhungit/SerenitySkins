namespace J {

    export function initSkins(themeCookieName: string) {

        let curSkinClass = $.cookie(themeCookieName) || "blue";
        console.log(curSkinClass);

        switch (curSkinClass.toLowerCase().trim()) {
            
            case "glass-001-style-1":
            case "glass-001-style-2":
            case "glass-001-style-3":
            case "glass-001-style-4":
            case "glass-001-style-5":
            case "glass-001-style-6":
            case "glass-001-style-7":
            case "glass-001-style-8":
            case "glass-001-style-9":

                $.datepicker.setDefaults({
                    buttonImage: null,
                    buttonImageOnly: false,
                    buttonText: '<i class="fa fa-calendar j-skin-text-color"></i>'
                });

                Serenity.DataGrid.defaultRowHeight = 30;
                Serenity.DataGrid.defaultHeaderHeight = 30;

                break;
            default:
                break;
        }
    }    
}