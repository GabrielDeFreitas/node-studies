const QRCode = require('qrcode');

QRCode.toFile('./output-file-path/file.png', 'Encode this text in QR code', {
    errorCorrectionLevel: 'H'
}, function (err) {
    if (err) throw err;
    console.log('QR code saved!');
});