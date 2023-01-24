$(document).ready(function () {

    // Hide button ulangi
    $('.ulangi').hide()

    // Salah
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

    // Ulangi
    $('.ulangi').click(function () {
        const plus = $(this).data('plus')
        const badge = $(this).siblings().find('span').text()

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

    // Tampilkan Gambar
    const page = localStorage.getItem('page')
    if (page) {
        $('#gambar').attr('src', 'images/' + page + '.png')
    }
});