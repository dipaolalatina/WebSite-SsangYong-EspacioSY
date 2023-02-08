$('.item-version-1,.item-version-2,.item-version-3,.item-version-4,.item-version-5,.item-version-6,.item-version-7,.item-version-8,.item-version-9,.item-version-10').draggable({
    helper: 'clone'
});

$('.item-comp-1,.item-comp-2,.item-comp-3,.item-comp-4,.item-comp-5,.item-comp-6,.item-comp-7,.item-comp-8,.item-comp-9,.item-comp-10').draggable({
    helper: 'clone'
});

$('.tablaCom__landVersiones').droppable({
    accept: '.item-version-1,.item-version-2,.item-version-3,.item-version-4,.item-version-5,.item-version-6,.item-version-7,.item-version-8,.item-version-9,.item-version-10',
    hoverClass: 'hovering',
    drop: function (ev, ui) {
        ui.draggable.detach();
        $(this).append(ui.draggable);
        $('.tablaCom__listaVersiones').addClass('quitar');
        $('.item-v').addClass('quitar');
        $('.tablaCom__landVersiones').css("border", "0");
        $('.tablaCom__landVersiones').css("background-color", "#fff");

        if ($('.item-version-1').is('.ui-draggable-dragging')) {
            $('.auto-version-1').removeClass('quitar');
            $('.comp-1').removeClass('quitar');
            $('.tablaCom__landText-version').addClass('quitar');
        } else if ($('.item-version-2').is('.ui-draggable-dragging')) {
            $('.auto-version-2').removeClass('quitar');
            $('.comp-2').removeClass('quitar');
            $('.tablaCom__landText-version').addClass('quitar');
        } else if ($('.item-version-3').is('.ui-draggable-dragging')) {
            $('.auto-version-3').removeClass('quitar');
            $('.comp-3').removeClass('quitar');
            $('.tablaCom__landText-version').addClass('quitar');
        } else if ($('.item-version-4').is('.ui-draggable-dragging')) {
            $('.auto-version-4').removeClass('quitar');
            $('.comp-4').removeClass('quitar');
            $('.tablaCom__landText-version').addClass('quitar');
        } else if ($('.item-version-5').is('.ui-draggable-dragging')) {
            $('.auto-version-5').removeClass('quitar');
            $('.comp-5').removeClass('quitar');
            $('.tablaCom__landText-version').addClass('quitar');
        } else if ($('.item-version-6').is('.ui-draggable-dragging')) {
            $('.auto-version-6').removeClass('quitar');
            $('.comp-6').removeClass('quitar');
            $('.tablaCom__landText-version').addClass('quitar');
        } else if ($('.item-version-7').is('.ui-draggable-dragging')) {
            $('.auto-version-7').removeClass('quitar');
            $('.comp-7').removeClass('quitar');
            $('.tablaCom__landText-version').addClass('quitar');
        } else if ($('.item-version-8').is('.ui-draggable-dragging')) {
            $('.auto-version-8').removeClass('quitar');
            $('.comp-8').removeClass('quitar');
            $('.tablaCom__landText-version').addClass('quitar');
        } else if ($('.item-version-9').is('.ui-draggable-dragging')) {
            $('.auto-version-9').removeClass('quitar');
            $('.comp-9').removeClass('quitar');
            $('.tablaCom__landText-version').addClass('quitar');
        } else {
            $('.auto-version-10').removeClass('quitar');
            $('.comp-10').removeClass('quitar');
            $('.tablaCom__landText-version').addClass('quitar');
        }
    }
});

$('.tablaCom__landComp').droppable({
    accept: '.item-comp-1,.item-comp-2,.item-comp-3,.item-comp-4,.item-comp-5,.item-comp-6,.item-comp-7,.item-comp-8,.item-comp-9,.item-comp-10',
    hoverClass: 'hovering',
    drop: function (ev, ui) {
        ui.draggable.detach();
        $(this).append(ui.draggable);
        $('.tablaCom__landComp').css("border", "0");
        $('.tablaCom__landComp').css("background-color", "#fff");

        if ($('.competencia-v1-1').is('.ui-draggable-dragging')) {
            $('.auto-comp-v1-1').removeClass('quitar');
            $('.competencia-v1-1').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-1').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');

        } else if ($('.competencia-v1-2').is('.ui-draggable-dragging')) {
            $('.auto-comp-v1-2').removeClass('quitar');
            $('.competencia-v1-2').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-1').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');

        } else if ($('.competencia-v1-2').is('.ui-draggable-dragging')) {
            $('.auto-comp-v1-2').removeClass('quitar');
            $('.competencia-v1-2').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-1').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');

        } else if ($('.competencia-v1-3').is('.ui-draggable-dragging')) {
            $('.auto-comp-v1-3').removeClass('quitar');
            $('.competencia-v1-3').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-1').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');

        } else if ($('.competencia-v1-4').is('.ui-draggable-dragging')) {
            $('.auto-comp-v1-4').removeClass('quitar');
            $('.competencia-v1-4').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-1').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');

        } else if ($('.competencia-v1-5').is('.ui-draggable-dragging')) {
            $('.auto-comp-v1-5').removeClass('quitar');
            $('.competencia-v1-5').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-1').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');

        } else if ($('.competencia-v1-6').is('.ui-draggable-dragging')) {
            $('.auto-comp-v1-6').removeClass('quitar');
            $('.competencia-v1-6').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-1').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');

        } else if ($('.competencia-v1-7').is('.ui-draggable-dragging')) {
            $('.auto-comp-v1-7').removeClass('quitar');
            $('.competencia-v1-7').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-1').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');

        } else if ($('.competencia-v1-8').is('.ui-draggable-dragging')) {
            $('.auto-comp-v1-8').removeClass('quitar');
            $('.competencia-v1-8').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-1').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');

        } else if ($('.competencia-v1-9').is('.ui-draggable-dragging')) {
            $('.auto-comp-v1-9').removeClass('quitar');
            $('.competencia-v1-9').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-1').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');

        } else if ($('.competencia-v1-10').is('.ui-draggable-dragging')) {
            $('.auto-comp-v1-10').removeClass('quitar');
            $('.competencia-v1-10').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-1').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');

        } else if ($('.competencia-v2-1').is('.ui-draggable-dragging')) {
            $('.auto-comp-v2-1').removeClass('quitar');
            $('.competencia-v2-1').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-2').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');

        } else if ($('.competencia-v2-2').is('.ui-draggable-dragging')) {
            $('.auto-comp-v2-2').removeClass('quitar');
            $('.competencia-v2-2').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-2').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');

        } else if ($('.competencia-v2-3').is('.ui-draggable-dragging')) {
            $('.auto-comp-v2-3').removeClass('quitar');
            $('.competencia-v2-3').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-2').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');

        } else if ($('.competencia-v2-4').is('.ui-draggable-dragging')) {
            $('.auto-comp-v2-4').removeClass('quitar');
            $('.competencia-v2-4').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-2').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');

        } else if ($('.competencia-v2-5').is('.ui-draggable-dragging')) {
            $('.auto-comp-v2-5').removeClass('quitar');
            $('.competencia-v2-5').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-2').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');

        } else if ($('.competencia-v2-6').is('.ui-draggable-dragging')) {
            $('.auto-comp-v2-6').removeClass('quitar');
            $('.competencia-v2-6').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-2').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v2-7').is('.ui-draggable-dragging')) {
            $('.auto-comp-v2-7').removeClass('quitar');
            $('.competencia-v2-7').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-2').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v2-8').is('.ui-draggable-dragging')) {
            $('.auto-comp-v2-8').removeClass('quitar');
            $('.competencia-v2-8').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-2').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v2-9').is('.ui-draggable-dragging')) {
            $('.auto-comp-v2-9').removeClass('quitar');
            $('.competencia-v2-9').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-2').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v2-10').is('.ui-draggable-dragging')) {
            $('.auto-comp-v2-10').removeClass('quitar');
            $('.competencia-v2-10').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-2').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v3-1').is('.ui-draggable-dragging')) {
            $('.auto-comp-v3-1').removeClass('quitar');
            $('.competencia-v3-1').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-3').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v3-2').is('.ui-draggable-dragging')) {
            $('.auto-comp-v3-2').removeClass('quitar');
            $('.competencia-v3-2').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-3').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v3-3').is('.ui-draggable-dragging')) {
            $('.auto-comp-v3-3').removeClass('quitar');
            $('.competencia-v3-3').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-3').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v3-4').is('.ui-draggable-dragging')) {
            $('.auto-comp-v3-4').removeClass('quitar');
            $('.competencia-v3-4').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-3').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v3-5').is('.ui-draggable-dragging')) {
            $('.auto-comp-v3-5').removeClass('quitar');
            $('.competencia-v3-5').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-3').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v3-6').is('.ui-draggable-dragging')) {
            $('.auto-comp-v3-6').removeClass('quitar');
            $('.competencia-v3-6').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-3').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v3-7').is('.ui-draggable-dragging')) {
            $('.auto-comp-v3-7').removeClass('quitar');
            $('.competencia-v3-7').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-3').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v3-8').is('.ui-draggable-dragging')) {
            $('.auto-comp-v3-8').removeClass('quitar');
            $('.competencia-v3-8').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-3').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v3-9').is('.ui-draggable-dragging')) {
            $('.auto-comp-v3-9').removeClass('quitar');
            $('.competencia-v3-9').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-3').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v3-10').is('.ui-draggable-dragging')) {
            $('.auto-comp-v3-10').removeClass('quitar');
            $('.competencia-v3-10').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-3').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v4-1').is('.ui-draggable-dragging')) {
            $('.auto-comp-v4-1').removeClass('quitar');
            $('.competencia-v4-1').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-4').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v4-2').is('.ui-draggable-dragging')) {
            $('.auto-comp-v4-2').removeClass('quitar');
            $('.competencia-v4-2').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-4').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v4-3').is('.ui-draggable-dragging')) {
            $('.auto-comp-v4-3').removeClass('quitar');
            $('.competencia-v4-3').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-4').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v4-4').is('.ui-draggable-dragging')) {
            $('.auto-comp-v4-4').removeClass('quitar');
            $('.competencia-v4-4').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-4').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v4-5').is('.ui-draggable-dragging')) {
            $('.auto-comp-v4-5').removeClass('quitar');
            $('.competencia-v4-5').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-4').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v4-6').is('.ui-draggable-dragging')) {
            $('.auto-comp-v4-6').removeClass('quitar');
            $('.competencia-v4-6').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-4').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v4-7').is('.ui-draggable-dragging')) {
            $('.auto-comp-v4-7').removeClass('quitar');
            $('.competencia-v4-7').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-4').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v4-8').is('.ui-draggable-dragging')) {
            $('.auto-comp-v4-8').removeClass('quitar');
            $('.competencia-v4-8').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-4').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v4-9').is('.ui-draggable-dragging')) {
            $('.auto-comp-v4-9').removeClass('quitar');
            $('.competencia-v4-9').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-4').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v4-10').is('.ui-draggable-dragging')) {
            $('.auto-comp-v4-10').removeClass('quitar');
            $('.competencia-v4-10').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-4').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v5-1').is('.ui-draggable-dragging')) {
            $('.auto-comp-v5-1').removeClass('quitar');
            $('.competencia-v5-1').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-5').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v5-2').is('.ui-draggable-dragging')) {
            $('.auto-comp-v5-2').removeClass('quitar');
            $('.competencia-v5-2').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-5').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v5-3').is('.ui-draggable-dragging')) {
            $('.auto-comp-v5-3').removeClass('quitar');
            $('.competencia-v5-3').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-5').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v5-4').is('.ui-draggable-dragging')) {
            $('.auto-comp-v5-4').removeClass('quitar');
            $('.competencia-v5-4').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-5').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v5-5').is('.ui-draggable-dragging')) {
            $('.auto-comp-v5-5').removeClass('quitar');
            $('.competencia-v5-5').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-5').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v5-6').is('.ui-draggable-dragging')) {
            $('.auto-comp-v5-6').removeClass('quitar');
            $('.competencia-v5-6').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-5').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v5-7').is('.ui-draggable-dragging')) {
            $('.auto-comp-v5-7').removeClass('quitar');
            $('.competencia-v5-7').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-5').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v5-8').is('.ui-draggable-dragging')) {
            $('.auto-comp-v5-8').removeClass('quitar');
            $('.competencia-v5-8').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-5').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v5-9').is('.ui-draggable-dragging')) {
            $('.auto-comp-v5-9').removeClass('quitar');
            $('.competencia-v5-9').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-5').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v5-10').is('.ui-draggable-dragging')) {
            $('.auto-comp-v5-10').removeClass('quitar');
            $('.competencia-v5-10').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-5').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v6-1').is('.ui-draggable-dragging')) {
            $('.auto-comp-v6-1').removeClass('quitar');
            $('.competencia-v6-1').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-6').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v6-2').is('.ui-draggable-dragging')) {
            $('.auto-comp-v6-2').removeClass('quitar');
            $('.competencia-v6-2').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-6').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v6-3').is('.ui-draggable-dragging')) {
            $('.auto-comp-v6-3').removeClass('quitar');
            $('.competencia-v6-3').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-6').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v6-4').is('.ui-draggable-dragging')) {
            $('.auto-comp-v6-4').removeClass('quitar');
            $('.competencia-v6-4').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-6').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v6-5').is('.ui-draggable-dragging')) {
            $('.auto-comp-v6-5').removeClass('quitar');
            $('.competencia-v6-5').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-6').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v6-6').is('.ui-draggable-dragging')) {
            $('.auto-comp-v6-6').removeClass('quitar');
            $('.competencia-v6-6').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-6').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v6-7').is('.ui-draggable-dragging')) {
            $('.auto-comp-v6-7').removeClass('quitar');
            $('.competencia-v6-7').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-6').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v6-8').is('.ui-draggable-dragging')) {
            $('.auto-comp-v6-8').removeClass('quitar');
            $('.competencia-v6-8').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-6').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v6-9').is('.ui-draggable-dragging')) {
            $('.auto-comp-v6-9').removeClass('quitar');
            $('.competencia-v6-9').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-6').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v6-10').is('.ui-draggable-dragging')) {
            $('.auto-comp-v6-10').removeClass('quitar');
            $('.competencia-v6-10').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-6').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v7-1').is('.ui-draggable-dragging')) {
            $('.auto-comp-v7-1').removeClass('quitar');
            $('.competencia-v7-1').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-7').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v7-2').is('.ui-draggable-dragging')) {
            $('.auto-comp-v7-2').removeClass('quitar');
            $('.competencia-v7-2').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-7').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v7-3').is('.ui-draggable-dragging')) {
            $('.auto-comp-v7-3').removeClass('quitar');
            $('.competencia-v7-3').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-7').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v7-4').is('.ui-draggable-dragging')) {
            $('.auto-comp-v7-4').removeClass('quitar');
            $('.competencia-v7-4').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-7').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v7-5').is('.ui-draggable-dragging')) {
            $('.auto-comp-v7-5').removeClass('quitar');
            $('.competencia-v7-5').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-7').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v7-6').is('.ui-draggable-dragging')) {
            $('.auto-comp-v7-6').removeClass('quitar');
            $('.competencia-v7-6').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-7').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v7-7').is('.ui-draggable-dragging')) {
            $('.auto-comp-v7-7').removeClass('quitar');
            $('.competencia-v7-7').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-7').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v7-8').is('.ui-draggable-dragging')) {
            $('.auto-comp-v7-8').removeClass('quitar');
            $('.competencia-v7-8').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-7').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v7-9').is('.ui-draggable-dragging')) {
            $('.auto-comp-v7-9').removeClass('quitar');
            $('.competencia-v7-9').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-7').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v7-10').is('.ui-draggable-dragging')) {
            $('.auto-comp-v7-10').removeClass('quitar');
            $('.competencia-v7-10').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-7').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v8-1').is('.ui-draggable-dragging')) {
            $('.auto-comp-v8-1').removeClass('quitar');
            $('.competencia-v8-1').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-8').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v8-2').is('.ui-draggable-dragging')) {
            $('.auto-comp-v8-2').removeClass('quitar');
            $('.competencia-v8-2').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-8').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v8-3').is('.ui-draggable-dragging')) {
            $('.auto-comp-v8-3').removeClass('quitar');
            $('.competencia-v8-3').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-8').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v8-4').is('.ui-draggable-dragging')) {
            $('.auto-comp-v8-4').removeClass('quitar');
            $('.competencia-v8-4').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-8').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v8-5').is('.ui-draggable-dragging')) {
            $('.auto-comp-v8-5').removeClass('quitar');
            $('.competencia-v8-5').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-8').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v8-6').is('.ui-draggable-dragging')) {
            $('.auto-comp-v8-6').removeClass('quitar');
            $('.competencia-v8-6').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-8').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v8-7').is('.ui-draggable-dragging')) {
            $('.auto-comp-v8-7').removeClass('quitar');
            $('.competencia-v8-7').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-8').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v8-8').is('.ui-draggable-dragging')) {
            $('.auto-comp-v8-8').removeClass('quitar');
            $('.competencia-v8-8').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-8').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v8-9').is('.ui-draggable-dragging')) {
            $('.auto-comp-v8-9').removeClass('quitar');
            $('.competencia-v8-9').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-8').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v8-10').is('.ui-draggable-dragging')) {
            $('.auto-comp-v8-10').removeClass('quitar');
            $('.competencia-v8-10').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-8').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v9-1').is('.ui-draggable-dragging')) {
            $('.auto-comp-v9-1').removeClass('quitar');
            $('.competencia-v9-1').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-9').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v9-2').is('.ui-draggable-dragging')) {
            $('.auto-comp-v9-2').removeClass('quitar');
            $('.competencia-v9-2').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-9').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v9-3').is('.ui-draggable-dragging')) {
            $('.auto-comp-v9-3').removeClass('quitar');
            $('.competencia-v9-3').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-9').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v9-4').is('.ui-draggable-dragging')) {
            $('.auto-comp-v9-4').removeClass('quitar');
            $('.competencia-v9-4').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-9').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v9-5').is('.ui-draggable-dragging')) {
            $('.auto-comp-v9-5').removeClass('quitar');
            $('.competencia-v9-5').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-9').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v9-6').is('.ui-draggable-dragging')) {
            $('.auto-comp-v9-6').removeClass('quitar');
            $('.competencia-v9-6').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-9').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v9-7').is('.ui-draggable-dragging')) {
            $('.auto-comp-v9-7').removeClass('quitar');
            $('.competencia-v9-7').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-9').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v9-8').is('.ui-draggable-dragging')) {
            $('.auto-comp-v9-8').removeClass('quitar');
            $('.competencia-v9-8').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-9').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v9-9').is('.ui-draggable-dragging')) {
            $('.auto-comp-v9-9').removeClass('quitar');
            $('.competencia-v9-9').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-9').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v9-10').is('.ui-draggable-dragging')) {
            $('.auto-comp-v9-10').removeClass('quitar');
            $('.competencia-v9-10').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-9').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v10-1').is('.ui-draggable-dragging')) {
            $('.auto-comp-v10-1').removeClass('quitar');
            $('.competencia-v10-1').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-10').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v10-2').is('.ui-draggable-dragging')) {
            $('.auto-comp-v10-2').removeClass('quitar');
            $('.competencia-v10-2').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-10').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v10-3').is('.ui-draggable-dragging')) {
            $('.auto-comp-v10-3').removeClass('quitar');
            $('.competencia-v10-3').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-10').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v10-4').is('.ui-draggable-dragging')) {
            $('.auto-comp-v10-4').removeClass('quitar');
            $('.competencia-v10-4').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-10').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v10-5').is('.ui-draggable-dragging')) {
            $('.auto-comp-v10-5').removeClass('quitar');
            $('.competencia-v10-5').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-10').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v10-6').is('.ui-draggable-dragging')) {
            $('.auto-comp-v10-6').removeClass('quitar');
            $('.competencia-v10-6').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-10').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v10-7').is('.ui-draggable-dragging')) {
            $('.auto-comp-v10-7').removeClass('quitar');
            $('.competencia-v10-7').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-10').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v10-8').is('.ui-draggable-dragging')) {
            $('.auto-comp-v10-8').removeClass('quitar');
            $('.competencia-v10-8').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-10').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else if ($('.competencia-v10-9').is('.ui-draggable-dragging')) {
            $('.auto-comp-v10-9').removeClass('quitar');
            $('.competencia-v10-9').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-10').css("cursor", "no-drop");
            $('.tablaCom__landText-comp').addClass('quitar');
        } else {
            $('.auto-comp-v10-10').removeClass('quitar');
            $('.competencia-v10-10').addClass('quitar');
            $('.tablaCom__landComp').droppable('disable');
            $('.item-comp-10').css("cursor", "no-drop");
        }
    }
});

$('.reset-version').click(function () {
    $('.item-v').detach().appendTo('.tablaCom__listaVersiones');
    $('.item-comp-1').detach().appendTo('.comp-1');
    $('.item-comp-2').detach().appendTo('.comp-2');
    $('.item-comp-3').detach().appendTo('.comp-3');
    $('.item-comp-4').detach().appendTo('.comp-4');
    $('.item-comp-5').detach().appendTo('.comp-5');
    $('.item-comp-6').detach().appendTo('.comp-6');
    $('.item-comp-7').detach().appendTo('.comp-7');
    $('.item-comp-8').detach().appendTo('.comp-8');
    $('.item-comp-9').detach().appendTo('.comp-9');
    $('.item-comp-10').detach().appendTo('.comp-10');
    $('.tablaCom__landComp').droppable('enable');
    $('.tablaCom__listaVersiones').removeClass('quitar');
    $('.auto-version-1,.auto-version-2,.auto-version-3,.auto-version-4,.auto-version-5,.auto-version-6,.auto-version-7,.auto-version-8,.auto-version-9,.auto-version-10').addClass('quitar');
    $('.item-v').removeClass('quitar');
    $('.comp-1,.comp-2,.comp-3,.comp-4,.comp-5,.comp-6,.comp-7,.comp-8,.comp-9,.comp-10').addClass('quitar');
    $('.auto-comp-v1-1,.auto-comp-v1-2,.auto-comp-v1-3,.auto-comp-v1-4,.auto-comp-v1-5,.auto-comp-v1-6,.auto-comp-v1-7,.auto-comp-v1-8,.auto-comp-v1-9,.auto-comp-v1-10,.auto-comp-v2-1,.auto-comp-v2-2,.auto-comp-v2-3,.auto-comp-v2-4,.auto-comp-v2-5,.auto-comp-v2-6,.auto-comp-v2-7,.auto-comp-v2-8,.auto-comp-v2-9,.auto-comp-v2-10,.auto-comp-v3-1,.auto-comp-v3-2,.auto-comp-v3-3,.auto-comp-v3-4,.auto-comp-v3-5,.auto-comp-v3-6,.auto-comp-v3-7,.auto-comp-v3-8,.auto-comp-v3-9,.auto-comp-v3-10,.auto-comp-v4-1,.auto-comp-v4-2,.auto-comp-v4-3,.auto-comp-v4-4,.auto-comp-v4-5,.auto-comp-v4-6,.auto-comp-v4-7,.auto-comp-v4-8,.auto-comp-v4-9,.auto-comp-v4-10,.auto-comp-v5-1,.auto-comp-v5-2,.auto-comp-v5-3,.auto-comp-v5-4,.auto-comp-v5-5,.auto-comp-v5-6,.auto-comp-v5-7,.auto-comp-v5-8,.auto-comp-v5-9,.auto-comp-v5-10,.auto-comp-v6-1,.auto-comp-v6-2,.auto-comp-v6-3,.auto-comp-v6-4,.auto-comp-v6-5,.auto-comp-v6-6,.auto-comp-v6-7,.auto-comp-v6-8,.auto-comp-v6-9,.auto-comp-v6-10,.auto-comp-v7-1,.auto-comp-v7-2,.auto-comp-v7-3,.auto-comp-v7-4,.auto-comp-v7-5,.auto-comp-v7-6,.auto-comp-v7-7,.auto-comp-v7-8,.auto-comp-v7-9,.auto-comp-v7-10,.auto-comp-v8-1,.auto-comp-v8-2,.auto-comp-v8-3,.auto-comp-v8-4,.auto-comp-v8-5,.auto-comp-v8-6,.auto-comp-v8-7,.auto-comp-v8-8,.auto-comp-v8-9,.auto-comp-v8-10,.auto-comp-v9-1,.auto-comp-v9-2,.auto-comp-v9-3,.auto-comp-v9-4,.auto-comp-v9-5,.auto-comp-v9-6,.auto-comp-v9-7,.auto-comp-v9-8,.auto-comp-v9-9,.auto-comp-v9-10,.auto-comp-v10-1,.auto-comp-v10-2,.auto-comp-v10-3,.auto-comp-v10-4,.auto-comp-v10-5,.auto-comp-v10-6,.auto-comp-v10-7,.auto-comp-v10-8,.auto-comp-v10-9,.auto-comp-v10-10').addClass('quitar');
    $('.item-comp-1,.item-comp-2,item-comp-3,item-comp-4,item-comp-5,item-comp-6,item-comp-7,item-comp-8,item-comp-9,item-comp-10').removeClass('quitar');
    $('.item-comp-1,.item-comp-2,.item-comp-3,.item-comp-4,.item-comp-5,.item-comp-6,.item-comp-7,.item-comp-8,.item-comp-9,.item-comp-10').css("cursor", "pointer");
    $('.tablaCom__landVersiones').css("border", "5px dashed #001F4F");
    $('.tablaCom__landComp').css("border", "5px dashed #001F4F");
    $('.tablaCom__landVersiones').css("background-color", "#ddd");
    $('.tablaCom__landComp').css("background-color", "#ddd");
    $('.tablaCom__landText-version').removeClass('quitar');
    $('.tablaCom__landText-comp').removeClass('quitar');
});

$('.reset-comp').click(function () {
    $('.item-comp-1').detach().appendTo('.comp-1');
    $('.item-comp-2').detach().appendTo('.comp-2');
    $('.item-comp-3').detach().appendTo('.comp-3');
    $('.item-comp-4').detach().appendTo('.comp-4');
    $('.item-comp-5').detach().appendTo('.comp-5');
    $('.item-comp-6').detach().appendTo('.comp-6');
    $('.item-comp-7').detach().appendTo('.comp-7');
    $('.item-comp-8').detach().appendTo('.comp-8');
    $('.item-comp-9').detach().appendTo('.comp-9');
    $('.item-comp-10').detach().appendTo('.comp-10');
    $('.tablaCom__landComp').droppable('enable');
    $('.auto-comp-v1-1,.auto-comp-v1-2,.auto-comp-v1-3,.auto-comp-v1-4,.auto-comp-v1-5,.auto-comp-v1-6,.auto-comp-v1-7,.auto-comp-v1-8,.auto-comp-v1-9,.auto-comp-v1-10,.auto-comp-v2-1,.auto-comp-v2-2,.auto-comp-v2-3,.auto-comp-v2-4,.auto-comp-v2-5,.auto-comp-v2-6,.auto-comp-v2-7,.auto-comp-v2-8,.auto-comp-v2-9,.auto-comp-v2-10,.auto-comp-v3-1,.auto-comp-v3-2,.auto-comp-v3-3,.auto-comp-v3-4,.auto-comp-v3-5,.auto-comp-v3-6,.auto-comp-v3-7,.auto-comp-v3-8,.auto-comp-v3-9,.auto-comp-v3-10,.auto-comp-v4-1,.auto-comp-v4-2,.auto-comp-v4-3,.auto-comp-v4-4,.auto-comp-v4-5,.auto-comp-v4-6,.auto-comp-v4-7,.auto-comp-v4-8,.auto-comp-v4-9,.auto-comp-v4-10,.auto-comp-v5-1,.auto-comp-v5-2,.auto-comp-v5-3,.auto-comp-v5-4,.auto-comp-v5-5,.auto-comp-v5-6,.auto-comp-v5-7,.auto-comp-v5-8,.auto-comp-v5-9,.auto-comp-v5-10,.auto-comp-v6-1,.auto-comp-v6-2,.auto-comp-v6-3,.auto-comp-v6-4,.auto-comp-v6-5,.auto-comp-v6-6,.auto-comp-v6-7,.auto-comp-v6-8,.auto-comp-v6-9,.auto-comp-v6-10,.auto-comp-v7-1,.auto-comp-v7-2,.auto-comp-v7-3,.auto-comp-v7-4,.auto-comp-v7-5,.auto-comp-v7-6,.auto-comp-v7-7,.auto-comp-v7-8,.auto-comp-v7-9,.auto-comp-v7-10,.auto-comp-v8-1,.auto-comp-v8-2,.auto-comp-v8-3,.auto-comp-v8-4,.auto-comp-v8-5,.auto-comp-v8-6,.auto-comp-v8-7,.auto-comp-v8-8,.auto-comp-v8-9,.auto-comp-v8-10,.auto-comp-v9-1,.auto-comp-v9-2,.auto-comp-v9-3,.auto-comp-v9-4,.auto-comp-v9-5,.auto-comp-v9-6,.auto-comp-v9-7,.auto-comp-v9-8,.auto-comp-v9-9,.auto-comp-v9-10,.auto-comp-v10-1,.auto-comp-v10-2,.auto-comp-v10-3,.auto-comp-v10-4,.auto-comp-v10-5,.auto-comp-v10-6,.auto-comp-v10-7,.auto-comp-v10-8,.auto-comp-v10-9,.auto-comp-v10-10').addClass('quitar');
    $('.item-comp-1,.item-comp-2,.item-comp-3,.item-comp-4,.item-comp-5,.item-comp-6,.item-comp-7,.item-comp-8,.item-comp-9,.item-comp-10').removeClass('quitar');
    $('.item-comp-1,.item-comp-2,.item-comp-3,.item-comp-4,.item-comp-5,.item-comp-6,.item-comp-7,.item-comp-8,.item-comp-9,.item-comp-10').css("cursor", "pointer");
    $('.tablaCom__landComp').css("border", "5px dashed #001F4F");
    $('.tablaCom__landComp').css("background-color", "#ddd");
    $('.tablaCom__landText-comp').removeClass('quitar');
});