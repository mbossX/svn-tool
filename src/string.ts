var string_s = {
    "zh-cn": {
        VALID_PATH: "svn程序路径未配置， 默认使用系统路径！",
        VALID_URL: "URL未配置或不正确！",
        VALID_UNAME: "URL未配置或不正确！",
        VALID_PWD: "URL未配置或不正确！",
        ERROR: "发生错误！",
        CP_CHECKOUT: "检出完成！",
        CP_COMMIT: "提交成功！",
        CP_UPDATE: "更新完成！"
    },
    "default": {
        VALID_PATH: "svn path is not config corrected, use sys PATH!",
        VALID_URL: "url is not set or empty!",
        VALID_UNAME: "username is not set or empty!",
        VALID_PWD: "password is not set or empty!",
        ERROR: "svntool: error！",
        CP_CHECKOUT: "svntool: checkout complete!",
        CP_COMMIT: "svntool: commit complete!",
        CP_UPDATE: "svntool: update complete!"
    }
}

var exp = function (lang) {
    if (lang == "zh-cn") {
        return string_s["zh-cn"];
    }
    return string_s["default"];
}
export default exp;