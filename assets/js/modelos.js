//Colores Versiones
$(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();

    $(window).resize(function () {
        ResCarouselSize();
    });

    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }


    function ResCarousel(e, el, s) {
        var leftBtn = ('.leftLst');
        var rightBtn = ('.rightLst');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        }
        else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
    }

    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }
});

//Carrusel Versiones
$(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousel2');
    var itemsDiv = ('.MultiCarousel-inner2');
    var itemWidth = "";

    $('.leftLst2, .rightLst2').click(function () {
        var condition = $(this).hasClass("leftLst2");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();

    $(window).resize(function () {
        ResCarouselSize();
    });

    //this function define the size of the items
    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel2" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst2").addClass("over");
            $(".rightLst2").removeClass("over");

        });
    }


    //this function used to move the items
    function ResCarousel(e, el, s) {
        var leftBtn = ('.leftLst2');
        var rightBtn = ('.rightLst2');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        }
        else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }

});

//Versiones

$(document).ready(function () {
    $(".btn-version-1").click(function () {
        $(".btn-version-1").addClass("checked");
        $(".btn-version-2").removeClass("checked");
        $(".btn-version-3").removeClass("checked");
        $(".btn-version-4").removeClass("checked");
        $(".btn-version-5").removeClass("checked");
        $(".btn-version-6").removeClass("checked");
        $(".btn-version-7").removeClass("checked");
        $(".btn-version-8").removeClass("checked");
        $(".version-1").addClass("mostrar");
        $(".version-2").removeClass("mostrar");
        $(".version-3").removeClass("mostrar");
        $(".version-4").removeClass("mostrar");
        $(".version-5").removeClass("mostrar");
        $(".version-6").removeClass("mostrar");
        $(".version-7").removeClass("mostrar");
        $(".version-8").removeClass("mostrar");
    });

    $(".btn-version-2").click(function () {
        $(".btn-version-2").addClass("checked");
        $(".btn-version-1").removeClass("checked");
        $(".btn-version-3").removeClass("checked");
        $(".btn-version-4").removeClass("checked");
        $(".btn-version-5").removeClass("checked");
        $(".btn-version-6").removeClass("checked");
        $(".btn-version-7").removeClass("checked");
        $(".btn-version-8").removeClass("checked");
        $(".version-2").addClass("mostrar");
        $(".version-1").removeClass("mostrar");
        $(".version-3").removeClass("mostrar");
        $(".version-4").removeClass("mostrar");
        $(".version-5").removeClass("mostrar");
        $(".version-6").removeClass("mostrar");
        $(".version-7").removeClass("mostrar");
        $(".version-8").removeClass("mostrar");
    });

    $(".btn-version-3").click(function () {
        $(".btn-version-3").addClass("checked");
        $(".btn-version-2").removeClass("checked");
        $(".btn-version-1").removeClass("checked");
        $(".btn-version-4").removeClass("checked");
        $(".btn-version-5").removeClass("checked");
        $(".btn-version-6").removeClass("checked");
        $(".btn-version-7").removeClass("checked");
        $(".btn-version-8").removeClass("checked");
        $(".version-3").addClass("mostrar");
        $(".version-2").removeClass("mostrar");
        $(".version-1").removeClass("mostrar");
        $(".version-4").removeClass("mostrar");
        $(".version-5").removeClass("mostrar");
        $(".version-6").removeClass("mostrar");
        $(".version-7").removeClass("mostrar");
        $(".version-8").removeClass("mostrar");
    });

    $(".btn-version-4").click(function () {
        $(".btn-version-4").addClass("checked");
        $(".btn-version-2").removeClass("checked");
        $(".btn-version-3").removeClass("checked");
        $(".btn-version-1").removeClass("checked");
        $(".btn-version-5").removeClass("checked");
        $(".btn-version-6").removeClass("checked");
        $(".btn-version-7").removeClass("checked");
        $(".btn-version-8").removeClass("checked");
        $(".version-4").addClass("mostrar");
        $(".version-2").removeClass("mostrar");
        $(".version-3").removeClass("mostrar");
        $(".version-1").removeClass("mostrar");
        $(".version-5").removeClass("mostrar");
        $(".version-6").removeClass("mostrar");
        $(".version-7").removeClass("mostrar");
        $(".version-8").removeClass("mostrar");
    });

    $(".btn-version-5").click(function () {
        $(".btn-version-5").addClass("checked");
        $(".btn-version-2").removeClass("checked");
        $(".btn-version-3").removeClass("checked");
        $(".btn-version-4").removeClass("checked");
        $(".btn-version-1").removeClass("checked");
        $(".btn-version-6").removeClass("checked");
        $(".btn-version-7").removeClass("checked");
        $(".btn-version-8").removeClass("checked");
        $(".version-5").addClass("mostrar");
        $(".version-2").removeClass("mostrar");
        $(".version-3").removeClass("mostrar");
        $(".version-4").removeClass("mostrar");
        $(".version-1").removeClass("mostrar");
        $(".version-6").removeClass("mostrar");
        $(".version-7").removeClass("mostrar");
        $(".version-8").removeClass("mostrar");
    });

    $(".btn-version-6").click(function () {
        $(".btn-version-6").addClass("checked");
        $(".btn-version-2").removeClass("checked");
        $(".btn-version-3").removeClass("checked");
        $(".btn-version-4").removeClass("checked");
        $(".btn-version-5").removeClass("checked");
        $(".btn-version-1").removeClass("checked");
        $(".btn-version-7").removeClass("checked");
        $(".btn-version-8").removeClass("checked");
        $(".version-6").addClass("mostrar");
        $(".version-2").removeClass("mostrar");
        $(".version-3").removeClass("mostrar");
        $(".version-4").removeClass("mostrar");
        $(".version-5").removeClass("mostrar");
        $(".version-1").removeClass("mostrar");
        $(".version-7").removeClass("mostrar");
        $(".version-8").removeClass("mostrar");
    });

    $(".btn-version-7").click(function () {
        $(".btn-version-7").addClass("checked");
        $(".btn-version-2").removeClass("checked");
        $(".btn-version-3").removeClass("checked");
        $(".btn-version-4").removeClass("checked");
        $(".btn-version-5").removeClass("checked");
        $(".btn-version-6").removeClass("checked");
        $(".btn-version-1").removeClass("checked");
        $(".btn-version-8").removeClass("checked");
        $(".version-7").addClass("mostrar");
        $(".version-2").removeClass("mostrar");
        $(".version-3").removeClass("mostrar");
        $(".version-4").removeClass("mostrar");
        $(".version-5").removeClass("mostrar");
        $(".version-6").removeClass("mostrar");
        $(".version-1").removeClass("mostrar");
        $(".version-8").removeClass("mostrar");
    });

    $(".btn-version-8").click(function () {
        $(".btn-version-8").addClass("checked");
        $(".btn-version-2").removeClass("checked");
        $(".btn-version-3").removeClass("checked");
        $(".btn-version-4").removeClass("checked");
        $(".btn-version-5").removeClass("checked");
        $(".btn-version-6").removeClass("checked");
        $(".btn-version-7").removeClass("checked");
        $(".btn-version-1").removeClass("checked");
        $(".version-8").addClass("mostrar");
        $(".version-2").removeClass("mostrar");
        $(".version-3").removeClass("mostrar");
        $(".version-4").removeClass("mostrar");
        $(".version-5").removeClass("mostrar");
        $(".version-6").removeClass("mostrar");
        $(".version-7").removeClass("mostrar");
        $(".version-1").removeClass("mostrar");
    });
});

//Colores

$(document).ready(function () {
    $(".color-1").click(function () {
        $(".color-1").addClass("con-borde");
        $(".color-2").removeClass("con-borde");
        $(".color-3").removeClass("con-borde");
        $(".color-4").removeClass("con-borde");
        $(".color-5").removeClass("con-borde");
        $(".color-6").removeClass("con-borde");
        $(".color-7").removeClass("con-borde");
        $(".color-8").removeClass("con-borde");
        $(".color-9").removeClass("con-borde");
        $(".color-10").removeClass("con-borde");
        $(".color-11").removeClass("con-borde");
        $(".color-12").removeClass("con-borde");
        $(".auto-1").addClass("mostrar");
        $(".auto-2").removeClass("mostrar");
        $(".auto-3").removeClass("mostrar");
        $(".auto-4").removeClass("mostrar");
        $(".auto-5").removeClass("mostrar");
        $(".auto-6").removeClass("mostrar");
        $(".auto-7").removeClass("mostrar");
        $(".auto-8").removeClass("mostrar");
        $(".auto-9").removeClass("mostrar");
        $(".auto-10").removeClass("mostrar");
        $(".auto-11").removeClass("mostrar");
        $(".auto-12").removeClass("mostrar");
    });

    $(".color-2").click(function () {
        $(".color-2").addClass("con-borde");
        $(".color-1").removeClass("con-borde");
        $(".color-3").removeClass("con-borde");
        $(".color-4").removeClass("con-borde");
        $(".color-5").removeClass("con-borde");
        $(".color-6").removeClass("con-borde");
        $(".color-7").removeClass("con-borde");
        $(".color-8").removeClass("con-borde");
        $(".color-9").removeClass("con-borde");
        $(".color-10").removeClass("con-borde");
        $(".color-11").removeClass("con-borde");
        $(".color-12").removeClass("con-borde");
        $(".auto-2").addClass("mostrar");
        $(".auto-1").removeClass("mostrar");
        $(".auto-3").removeClass("mostrar");
        $(".auto-4").removeClass("mostrar");
        $(".auto-5").removeClass("mostrar");
        $(".auto-6").removeClass("mostrar");
        $(".auto-7").removeClass("mostrar");        
        $(".auto-8").removeClass("mostrar");
        $(".auto-9").removeClass("mostrar");
        $(".auto-10").removeClass("mostrar");
        $(".auto-11").removeClass("mostrar");
        $(".auto-12").removeClass("mostrar");
    });

    $(".color-3").click(function () {
        $(".color-3").addClass("con-borde");
        $(".color-2").removeClass("con-borde");
        $(".color-1").removeClass("con-borde");
        $(".color-4").removeClass("con-borde");
        $(".color-5").removeClass("con-borde");
        $(".color-6").removeClass("con-borde");
        $(".color-7").removeClass("con-borde");
        $(".color-8").removeClass("con-borde");
        $(".color-9").removeClass("con-borde");
        $(".color-10").removeClass("con-borde");
        $(".color-11").removeClass("con-borde");
        $(".color-12").removeClass("con-borde");
        $(".auto-3").addClass("mostrar");
        $(".auto-2").removeClass("mostrar");
        $(".auto-1").removeClass("mostrar");
        $(".auto-4").removeClass("mostrar");
        $(".auto-5").removeClass("mostrar");
        $(".auto-6").removeClass("mostrar");
        $(".auto-7").removeClass("mostrar");        
        $(".auto-8").removeClass("mostrar");
        $(".auto-9").removeClass("mostrar");
        $(".auto-10").removeClass("mostrar");
        $(".auto-11").removeClass("mostrar");
        $(".auto-12").removeClass("mostrar");
    });

    $(".color-4").click(function () {
        $(".color-4").addClass("con-borde");
        $(".color-2").removeClass("con-borde");
        $(".color-3").removeClass("con-borde");
        $(".color-1").removeClass("con-borde");
        $(".color-5").removeClass("con-borde");
        $(".color-6").removeClass("con-borde");
        $(".color-7").removeClass("con-borde");
        $(".color-8").removeClass("con-borde");
        $(".color-9").removeClass("con-borde");
        $(".color-10").removeClass("con-borde");
        $(".color-11").removeClass("con-borde");
        $(".color-12").removeClass("con-borde");
        $(".auto-4").addClass("mostrar");
        $(".auto-2").removeClass("mostrar");
        $(".auto-3").removeClass("mostrar");
        $(".auto-1").removeClass("mostrar");
        $(".auto-5").removeClass("mostrar");
        $(".auto-6").removeClass("mostrar");
        $(".auto-7").removeClass("mostrar");        
        $(".auto-8").removeClass("mostrar");
        $(".auto-9").removeClass("mostrar");
        $(".auto-10").removeClass("mostrar");
        $(".auto-11").removeClass("mostrar");
        $(".auto-12").removeClass("mostrar");
    });

    $(".color-5").click(function () {
        $(".color-5").addClass("con-borde");
        $(".color-2").removeClass("con-borde");
        $(".color-3").removeClass("con-borde");
        $(".color-4").removeClass("con-borde");
        $(".color-1").removeClass("con-borde");
        $(".color-6").removeClass("con-borde");
        $(".color-7").removeClass("con-borde");
        $(".color-8").removeClass("con-borde");
        $(".color-9").removeClass("con-borde");
        $(".color-10").removeClass("con-borde");
        $(".color-11").removeClass("con-borde");
        $(".color-12").removeClass("con-borde");
        $(".auto-5").addClass("mostrar");
        $(".auto-2").removeClass("mostrar");
        $(".auto-3").removeClass("mostrar");
        $(".auto-4").removeClass("mostrar");
        $(".auto-1").removeClass("mostrar");
        $(".auto-6").removeClass("mostrar");
        $(".auto-7").removeClass("mostrar");        
        $(".auto-8").removeClass("mostrar");
        $(".auto-9").removeClass("mostrar");
        $(".auto-10").removeClass("mostrar");
        $(".auto-11").removeClass("mostrar");
        $(".auto-12").removeClass("mostrar");
    });

    $(".color-6").click(function () {
        $(".color-6").addClass("con-borde");
        $(".color-2").removeClass("con-borde");
        $(".color-3").removeClass("con-borde");
        $(".color-4").removeClass("con-borde");
        $(".color-1").removeClass("con-borde");
        $(".color-5").removeClass("con-borde");
        $(".color-7").removeClass("con-borde");
        $(".color-8").removeClass("con-borde");
        $(".color-9").removeClass("con-borde");
        $(".color-10").removeClass("con-borde");
        $(".color-11").removeClass("con-borde");
        $(".color-12").removeClass("con-borde");
        $(".auto-6").addClass("mostrar");
        $(".auto-2").removeClass("mostrar");
        $(".auto-3").removeClass("mostrar");
        $(".auto-4").removeClass("mostrar");
        $(".auto-5").removeClass("mostrar");
        $(".auto-1").removeClass("mostrar");
        $(".auto-7").removeClass("mostrar");        
        $(".auto-8").removeClass("mostrar");
        $(".auto-9").removeClass("mostrar");
        $(".auto-10").removeClass("mostrar");
        $(".auto-11").removeClass("mostrar");
        $(".auto-12").removeClass("mostrar");
    });
    $(".color-7").click(function () {
        $(".color-7").addClass("con-borde");
        $(".color-6").removeClass("con-borde");
        $(".color-2").removeClass("con-borde");
        $(".color-3").removeClass("con-borde");
        $(".color-4").removeClass("con-borde");
        $(".color-1").removeClass("con-borde");
        $(".color-5").removeClass("con-borde");
        $(".color-8").removeClass("con-borde");
        $(".color-9").removeClass("con-borde");
        $(".color-10").removeClass("con-borde");
        $(".color-11").removeClass("con-borde");
        $(".color-12").removeClass("con-borde");
        $(".auto-7").addClass("mostrar");
        $(".auto-2").removeClass("mostrar");
        $(".auto-3").removeClass("mostrar");
        $(".auto-4").removeClass("mostrar");
        $(".auto-5").removeClass("mostrar");
        $(".auto-1").removeClass("mostrar");
        $(".auto-6").removeClass("mostrar");        
        $(".auto-8").removeClass("mostrar");
        $(".auto-9").removeClass("mostrar");
        $(".auto-10").removeClass("mostrar");
        $(".auto-11").removeClass("mostrar");
        $(".auto-12").removeClass("mostrar");
    });
    $(".color-8").click(function () {
        $(".color-8").addClass("con-borde");
        $(".color-7").removeClass("con-borde");
        $(".color-6").removeClass("con-borde");
        $(".color-2").removeClass("con-borde");
        $(".color-3").removeClass("con-borde");
        $(".color-4").removeClass("con-borde");
        $(".color-1").removeClass("con-borde");
        $(".color-5").removeClass("con-borde");
        $(".color-9").removeClass("con-borde");
        $(".color-10").removeClass("con-borde");
        $(".color-11").removeClass("con-borde");
        $(".color-12").removeClass("con-borde");
        $(".auto-8").addClass("mostrar");
        $(".auto-2").removeClass("mostrar");
        $(".auto-3").removeClass("mostrar");
        $(".auto-4").removeClass("mostrar");
        $(".auto-5").removeClass("mostrar");
        $(".auto-1").removeClass("mostrar");
        $(".auto-6").removeClass("mostrar");
        $(".auto-7").removeClass("mostrar");        
        $(".auto-9").removeClass("mostrar");
        $(".auto-10").removeClass("mostrar");
        $(".auto-11").removeClass("mostrar");
        $(".auto-12").removeClass("mostrar");
    });
    $(".color-9").click(function () {
        $(".color-9").addClass("con-borde");
        $(".color-8").removeClass("con-borde");
        $(".color-7").removeClass("con-borde");
        $(".color-6").removeClass("con-borde");
        $(".color-2").removeClass("con-borde");
        $(".color-3").removeClass("con-borde");
        $(".color-4").removeClass("con-borde");
        $(".color-1").removeClass("con-borde");
        $(".color-5").removeClass("con-borde");
        $(".color-10").removeClass("con-borde");
        $(".color-11").removeClass("con-borde");
        $(".color-12").removeClass("con-borde");
        $(".auto-9").addClass("mostrar");
        $(".auto-2").removeClass("mostrar");
        $(".auto-3").removeClass("mostrar");
        $(".auto-4").removeClass("mostrar");
        $(".auto-5").removeClass("mostrar");
        $(".auto-1").removeClass("mostrar");
        $(".auto-6").removeClass("mostrar");
        $(".auto-7").removeClass("mostrar");
        $(".auto-8").removeClass("mostrar");        
        $(".auto-10").removeClass("mostrar");
        $(".auto-11").removeClass("mostrar");
        $(".auto-12").removeClass("mostrar");
    });
    $(".color-10").click(function () {
        $(".color-10").addClass("con-borde");
        $(".color-9").removeClass("con-borde");
        $(".color-8").removeClass("con-borde");
        $(".color-7").removeClass("con-borde");
        $(".color-6").removeClass("con-borde");
        $(".color-2").removeClass("con-borde");
        $(".color-3").removeClass("con-borde");
        $(".color-4").removeClass("con-borde");
        $(".color-1").removeClass("con-borde");
        $(".color-5").removeClass("con-borde");        
        $(".color-11").removeClass("con-borde");
        $(".color-12").removeClass("con-borde");
        $(".auto-10").addClass("mostrar");
        $(".auto-2").removeClass("mostrar");
        $(".auto-3").removeClass("mostrar");
        $(".auto-4").removeClass("mostrar");
        $(".auto-5").removeClass("mostrar");
        $(".auto-1").removeClass("mostrar");
        $(".auto-6").removeClass("mostrar");
        $(".auto-7").removeClass("mostrar");
        $(".auto-8").removeClass("mostrar");
        $(".auto-9").removeClass("mostrar");
        $(".auto-12").removeClass("mostrar");
        $(".auto-11").removeClass("mostrar");
    });
    $(".color-11").click(function () {
        $(".color-11").addClass("con-borde");
        $(".color-12").removeClass("con-borde");
        $(".color-10").removeClass("con-borde");
        $(".color-9").removeClass("con-borde");
        $(".color-8").removeClass("con-borde");
        $(".color-7").removeClass("con-borde");
        $(".color-6").removeClass("con-borde");
        $(".color-2").removeClass("con-borde");
        $(".color-3").removeClass("con-borde");
        $(".color-4").removeClass("con-borde");
        $(".color-1").removeClass("con-borde");
        $(".color-5").removeClass("con-borde");
        $(".auto-11").addClass("mostrar");
        $(".auto-2").removeClass("mostrar");
        $(".auto-3").removeClass("mostrar");
        $(".auto-4").removeClass("mostrar");
        $(".auto-5").removeClass("mostrar");
        $(".auto-1").removeClass("mostrar");
        $(".auto-6").removeClass("mostrar");
        $(".auto-7").removeClass("mostrar");
        $(".auto-8").removeClass("mostrar");
        $(".auto-9").removeClass("mostrar");
        $(".auto-10").removeClass("mostrar");
        $(".auto-12").removeClass("mostrar");
    });
    $(".color-12").click(function () {
        $(".color-12").addClass("con-borde");
        $(".color-11").removeClass("con-borde");
        $(".color-10").removeClass("con-borde");
        $(".color-9").removeClass("con-borde");
        $(".color-8").removeClass("con-borde");
        $(".color-7").removeClass("con-borde");
        $(".color-6").removeClass("con-borde");
        $(".color-2").removeClass("con-borde");
        $(".color-3").removeClass("con-borde");
        $(".color-4").removeClass("con-borde");
        $(".color-1").removeClass("con-borde");
        $(".color-5").removeClass("con-borde");
        $(".auto-12").addClass("mostrar");
        $(".auto-2").removeClass("mostrar");
        $(".auto-3").removeClass("mostrar");
        $(".auto-4").removeClass("mostrar");
        $(".auto-5").removeClass("mostrar");
        $(".auto-1").removeClass("mostrar");
        $(".auto-6").removeClass("mostrar");
        $(".auto-7").removeClass("mostrar");
        $(".auto-8").removeClass("mostrar");
        $(".auto-9").removeClass("mostrar");
        $(".auto-10").removeClass("mostrar");
        $(".auto-11").removeClass("mostrar");
    });
});