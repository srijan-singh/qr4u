function monoAlphabeticCipher(data, key){

    is_upper = false;
	key = parseInt(key)

    check_sum = data.toUpperCase();

    if(data == check_sum)
    {
        is_upper = true;
    }

    else
    {
        data = check_sum;
    }
    
    console.log("Recieved Data: ", data ,"Key: ",key);

    var temp_text = ""

    for(i=0; i<data.length; i++)
    {
        temp_value = data.charCodeAt(i) + key;

        if(temp_value >= 91)
        {
            temp_value-=26
        }

        temp_text += String.fromCharCode(temp_value)
    }

    data = temp_text;

    if(is_upper == false)
    {
        data = data.toLowerCase()
    }
    
    console.log(data);

    return data;
}

function main() {
    const generateBtnFree = document.getElementById("generateBtnFree");

    // Encryption
	const secret = document.getElementById("secret")
	//const key = document.getElementById("key");

    
    // Qr Display
	const qrdiv = document.getElementById("qrdiv");
    const qrdivClassName = "qrdiv";

	var QR_CODE = new QRCode("qrcode", {
		width: 260,
		height: 260,
		colorDark: "#000000",
		colorLight: "#ffffff",
		correctLevel: QRCode.CorrectLevel.H,
	});

    generateBtnFree.onclick = function (e) {

        // Fetching Data

        var data = "";
		
		//data = "\nSecret: "+ monoAlphabeticCipher(secret.value, key.value);
        data = "\nData: "+ secret.value;

		if (data) {
			generateQRCode(data);
		} else {
			markDataBoxError();
		}
	};

	function generateQRCode(data) {
		QR_CODE.clear();
		QR_CODE.makeCode(data);
		// Show QRCode div
		qrdiv.className = qrdivClassName;
	}

}

main();