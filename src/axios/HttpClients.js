"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var antd_1 = require("antd");
function toType(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function filterNull(o) {
    Object.keys(o).map(function (key) {
        if (o[key] === null) {
            delete o[key];
        }
        if (toType(o[key]) === 'string') {
            o[key] = o[key].trim();
        }
        else if (toType(o[key]) === 'object') {
            o[key] = filterNull(o[key]);
        }
        else if (toType(o[key]) === 'array') {
            o[key] = filterNull(o[key]);
        }
    });
    return o;
}
function apiAxios(method, url, params) {
    if (params) {
        params = filterNull(params);
    }
    return new Promise(function (resolve, reject) {
        axios_1.default.defaults.headers.common.Authorization = localStorage.getItem('accessToken');
        axios_1.default({
            method: method,
            url: url,
            data: method === 'POST' || method === 'PUT' ? params : null,
            params: method === 'GET' || method === 'DELETE' || method === 'PATCH' ? params : null,
            withCredentials: false
        })
            .then(function (res) {
            if (res.data.msg === 'Token已过期') {
                antd_1.message.error('Token已过期');
                window.location.href = '/#/login';
            }
            if (res.status === 200) {
                resolve(res);
            }
            else {
                reject('Axios返回状态不对，查看请求处理过程．．．．');
            }
        }, function (err) {
            reject(err);
            var errCode = err.response.status;
            var msg = err.response.message;
            if (msg === 'Token已过期') {
                antd_1.message.error('身份过期，请重新登录');
                window.location.href = '#/login';
            }
            switch (errCode) {
                case 400:
                    console.log('错误请求');
                    break;
                case 401:
                    antd_1.message.error('请检查用户名和密码');
                    window.location.href = '#/login';
                    break;
                case 403:
                    antd_1.message.error('身份过期请重新登录', 3);
                    window.location.href = '#/login';
                    break;
                case 404:
                    antd_1.message.error('请求错误,未找到该资源');
                    console.log('请求错误,未找到该资源');
                    break;
                case 405:
                    console.log('请求方法未允许');
                    break;
                case 408:
                    console.log('请求超时');
                    break;
                case 500:
                    antd_1.message.error('服务器端出错');
                    console.log('服务器端出错');
                    break;
                case 501:
                    console.log('网络未实现');
                    break;
                case 502:
                    console.log('网络错误');
                    break;
                case 503:
                    console.log('服务不可用');
                    break;
                case 504:
                    console.log('网络超时');
                    break;
                default:
                    antd_1.message.error('未知错误');
            }
        })
            .catch(function (err) {
            var errInfo = { 'err': err.response };
            reject(errInfo);
        });
    });
}
exports.default = {
    get: function (url, params) {
        return apiAxios('GET', url, params);
    },
    post: function (url, params) {
        return apiAxios('POST', url, params);
    },
    put: function (url, params) {
        return apiAxios('PUT', url, params);
    },
    delete: function (url, params) {
        return apiAxios('DELETE', url, params);
    },
    patch: function (url, params) {
        return apiAxios('PATCH', url, params);
    }
};
//# sourceMappingURL=HttpClients.js.map