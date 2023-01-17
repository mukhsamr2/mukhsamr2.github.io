$(document).ready(function () {

    // Hide button ulangi
    $('.ulangi').hide()

    $('.salah').click(function () {
        const minus = $(this).data('minus')
        const badge = $(this).find('span').text()

        const hasil = parseInt($('#total').text()) - minus
        hasil <= 0
            ? $('#total').text(0)
            : $('#total').text(hasil);

        $(this).find('span').text(parseInt(badge) + 1)

        // Show button ulangi
        if (parseInt(badge) + 1 > 0) {
            $(this).siblings().show()
        }
    });


    $('.ulangi').click(function () {
        const plus = $(this).data('plus')
        const badge = $(this).siblings().find('span').text()

        console.log(badge)

        const hasil = parseInt($('#total').text()) + plus
        hasil >= 100
            ? $('#total').text(100)
            : $('#total').text(hasil);

        $(this).siblings().find('span').text(parseInt(badge) - 1)

        // Hide button ulangi
        if (parseInt(badge) - 1 <= 0) {
            $(this).hide()
        }
    });
});