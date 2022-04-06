function selectElementContents(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}
String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};
Number.prototype.format = function (n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};

function encode_utf8(s) {
    return unescape(encodeURIComponent(s));
}

function decode_utf8(s) {
    return decodeURIComponent(escape(s));
}

function js_ConnectToAPI(URL, DATA,data_type) {
    var obj;
    $.ajax({
        async: false,
        url: URL,
        data: DATA,
        cache: false,
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: data_type,
        success: function (data) {
            obj = data;
        },
        error: function (reponse) {
            alert("error : " + reponse);
        }
    });
    return obj;
}

function js_ConnectToAPIGET(URL, DATA) {
    var obj;
    $.ajax({
        async: false,
        url: URL,
        data: DATA,
        cache: false,
        method: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            obj = data;
        },
        error: function (reponse) {
            alert("error : " + reponse);
        }
    });
    return obj;
}
