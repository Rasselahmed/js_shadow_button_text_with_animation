


$(document).ready(function () {
    $('#animatebtn').click(function () {
        var box = $('.box');
        box.animate({ height: '300px' }, 1000);
        box.animate({ width: '300px' }, 1000);
        box.animate({ height: '100px' }, 1000);
        box.animate({ width: '100px' }, 1000);
        box.animate({ height: '150px' }, 1000);
        box.animate({ width: '150px' }, 1000);
        box.animate({ height: '250px' }, 1000);
        box.animate({ width: '250px' }, 1000);
        box.animate({ height: '100px' }, 1000);
        box.animate({ width: '100px' }, 1000);
        box.animate({ height: '400px' }, 1000);
        box.animate({ width: '400px' }, 1000);
    });
});