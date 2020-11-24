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

        if (curSkinClass.toLowerCase().trim() == "glass-001-style-6") {
            $(document).ready(function () {

                $("body").append(`<div id="video-background-container" />`);

                ($('#video-background-container') as any).vide({
                    //mp4: '/Content/skins/glass001/assets/bg006.mp4',
                    webm: '/Content/skins/glass001/assets/bg006.webm',
                    //ogv: '/Content/skins/glass001/assets/bg006.ogv',
                    poster: '/Content/skins/glass001/assets/navy.png'
                }, {
                    loop: true,
                    muted: true,
                    autoplay: true,
                    bgColor: 'transparent',
                    posterType: 'jpg',
                    className: "video-background-wrapper"
                });

                let player = $('#video-background-container video')[0];
                player.onpause = function () {
                    try {
                        (player as any).play();
                    } catch{
                        
                    }
                };
            });
        }
    }    
}