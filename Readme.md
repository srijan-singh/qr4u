# qr4u

qr4u or "QR Code For You" is a product which is developed to help people in there day to day life!

The product can encrypt and decrypt the message so you can securely communicate with your friends and families.

It can help you to create a QR Code which can store your emergency data; such that when the QR code will be scan the data would be fetched which contains the necessary information of the user.

## Software Architecture

### HTML

1. [Index](https://github.com/srijan-singh/qr4u/blob/main/index.html)
    - [Qr Index](https://github.com/srijan-singh/qr4u/blob/main/qr_index.html) : Index for Qr Generation
    - [Cipher](https://github.com/srijan-singh/qr4u/blob/main/cipher.html) : Index for Encrption
    - [Decipher](https://github.com/srijan-singh/qr4u/blob/main/decipher.html) : Index for Decryption

    <br>

2. [QR Index](https://github.com/srijan-singh/qr4u/blob/main/qr_index.html)
    - [Qr Template](https://github.com/srijan-singh/qr4u/blob/main/qr_temp.html) : Generation of Qr in predefined template
    - [Qr Free](https://github.com/srijan-singh/qr4u/blob/main/qr_free.html) : Generation of Qr in paragraph character limit is 30 

### Javascript
1. [Qr Code](https://github.com/srijan-singh/qr4u/blob/main/script/qrcode.js) : Responsible for Qr Generation

2. [Script](https://github.com/srijan-singh/qr4u/blob/main/script/script.js) : Responsible for Implementation of Qr in Qr Template

3. [Script Free](https://github.com/srijan-singh/qr4u/blob/main/script/script_free.js) : Responsible for Implementation of Qr in Qr Free

4. [Monoalphabetic](https://github.com/srijan-singh/qr4u/blob/main/script/monoalphabetic.js) : Responsible for Cipher and Decipher (Ceasar Cipher Technique)

5. [Secure](https://github.com/srijan-singh/qr4u/blob/main/script/secure.js) : Prevents inspection and Developer Tools
