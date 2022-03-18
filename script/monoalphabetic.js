function monoAlphabeticCipher(){

    is_upper = false;

    data = document.getElementById("plainText").value;

    check_sum = data.toUpperCase();

    if(data == check_sum)
    {
        is_upper = true;
    }

    else
    {
        data = check_sum;
    }

    key = +document.getElementById("key").value;
    
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

    document.getElementById("result").innerHTML = data;
    
    console.log(data);

    return data;
}

function monoAlphabeticDecipher(){

    is_upper = false;

    data = document.getElementById("cipherText").value;

    check_sum = data.toUpperCase();

    if(data == check_sum)
    {
        is_upper = true;
    }

    else
    {
        data = check_sum;
    }

    key = +document.getElementById("key").value;

    var temp_text = ""

    for(i=0; i<data.length; i++)
    {
        temp_value = data.charCodeAt(i) - key;

        if(temp_value < 65)
        {
            temp_value+=26
        }

        temp_text += String.fromCharCode(temp_value)
    }

    data = temp_text;

    document.getElementById("result").innerHTML = data;

    if(is_upper == false)
    {
        data = data.toLowerCase()
    }

    document.getElementById("result").innerHTML = data;
    
    console.log(data);

    return data;
}


/*
var data = "ABCZYXW";
var key = 3;

console.log(data);

data = monoAlphabeticCipher(data,key);
console.log(data);

data = monoAlphabeticDecipher(data,key);
console.log(data);
*/


