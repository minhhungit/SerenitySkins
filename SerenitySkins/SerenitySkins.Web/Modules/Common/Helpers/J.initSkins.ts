namespace J {

    export function initSkins(themeCookieName: string) {

        let findSidebarForm = function () {
            setTimeout(() => {
                if ($('form.sidebar-form')) {
                    $('form.sidebar-form').insertAfter("a.sidebar-toggle");
                    $('form.sidebar-form').addClass("must-show-search-bar").css("display", "inline-flex");

                    let sidebarToggleHeight = $(".sidebar-toggle").height();
                    $('form.sidebar-form')
                        .css("padding", "0")
                        .css("margin", "0")
                        .css("margin-top", `${sidebarToggleHeight / 2 - 16}px`);

                    $(".sidebar-menu > li > a").first().css("height", "50px").css("line-height", "40px");
                }
                else {
                    findSidebarForm();
                }
            }, 10);
        };

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
            case "glass-001-style-10":
            case "glass-001-style-11":

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

        //if (curSkinClass.toLowerCase().trim() == "glass-001-style-10") {
        //    $(document).ready(function () {
                
        //        $("body").append(`<div id="video-background-container" />`);

        //        ($('#video-background-container') as any).vide({
        //            mp4: '/Content/skins/glass001/assets/y-vbg/vbg06.mp4',
        //            //webm: '/Content/skins/glass001/assets/y-vbg/bg006.webm',
        //            //ogv: '/Content/skins/glass001/assets/bg006.ogv',
        //            poster: '/Content/skins/glass001/assets/navy.png'
        //        }, {
        //            loop: true,
        //            muted: true,
        //            autoplay: true,
        //            bgColor: 'transparent',
        //            posterType: 'jpg',
        //            className: "video-background-wrapper"
        //        });

        //        let player = $('#video-background-container video')[0];
        //        player.onpause = function () {
        //            try {
        //                (player as any).play();
        //            } catch{

        //            }
        //        };
        //    });
        //}

        if (curSkinClass.toLowerCase().trim() == "glass-001-style-1" || curSkinClass.toLowerCase().trim() == "glass-001-style-3") {
            $(document).ready(function () {
                $("body").append(`<div class="bg-animation-firefly"></div>
                    <div class="bg-animation-firefly"></div>
                    <div class="bg-animation-firefly"></div>
                    <div class="bg-animation-firefly"></div>
                    <div class="bg-animation-firefly"></div>
                    <div class="bg-animation-firefly"></div>
                    <div class="bg-animation-firefly"></div>
                    <div class="bg-animation-firefly"></div>
                    <div class="bg-animation-firefly"></div>
                    <div class="bg-animation-firefly"></div>
                    <div class="bg-animation-firefly"></div>
                    <div class="bg-animation-firefly"></div>
                    <div class="bg-animation-firefly"></div>
                    <div class="bg-animation-firefly"></div>
                    <div class="bg-animation-firefly"></div>`);
            });
        }

        if (curSkinClass.toLowerCase().trim() == "glass-001-style-1" ||
            curSkinClass.toLowerCase().trim() == "glass-001-style-3" ||
            curSkinClass.toLowerCase().trim() == "glass-001-style-9" ||
            curSkinClass.toLowerCase().trim() == "glass-001-style-10" || 
            curSkinClass.toLowerCase().trim() == "glass-001-style-11") {
            $(document).ready(function () { findSidebarForm(); });
        }

        if (curSkinClass.toLowerCase().trim() == "glass-001-style-4") {
            $(document).ready(function () {
                $("body").append(`<ul class="bg-animation-box"><li class="circle-box"></li><li class="corners-box-20"></li><li class="circle-box"></li><li class="corners-box-20"></li><li></li><li class="corners-box-35"></li><li class="circle-box"></li><li></li></ul>`);
            });
        }

        
    }    
}