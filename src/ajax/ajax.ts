
interface Config {
    type: string;
    url: string;
    data?: string;
    dataType: string;
}

//原生js封装的ajax 
function ajax(config: Config) {

    var xhr = new XMLHttpRequest();

    xhr.open(config.type, config.url, true);

    xhr.send(config.data);

    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log('chengong');


            if (config.dataType == 'json') {

                console.log(JSON.parse(xhr.responseText));
            } else {
                console.log(xhr.responseText)

            }


        }
    }
}


