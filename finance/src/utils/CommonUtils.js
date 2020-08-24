import NP from 'number-precision';
import {Sessions} from 'utils';

const CommonUtils = {
    formatAmount(value) {
      value = value?value:0;
      value = NP.round(NP.divide(value,10000),2);
      return value;
    },
    formatRatio(value) {
      value = value?value:0;
      value = NP.round(NP.times(value,100),2);
      value = `${value}%`;
      return value;
    },
    formatToUrlPath(val) {
        if (!val) {
            return val;
        }
        if (val.length == 0) {
            return null;
        }
        if (val instanceof Array == true) {
            //单张图片
            if (val && val[0].response) {
                let urlPath = val[0].response.result;
                val = urlPath;
            } else {
                val = val[0].path;
            }
        } else {
            //多张图片
            if (val && val.response) {
                let urlPath = val.response.result;
                val = urlPath;
            } else {
                val = val.path;
            }
        }

        return val;
    },
    formatToFilelist(url, index) {
        let fileDomain = Sessions.get('fileDomain');
        let fileList;
        if (url) {
            fileList = [
                {
                    uid: `-1/${index}`,
                    status: 'done',
                    path: url,
                    url: fileDomain + url,
                },
            ];
        } else {
            fileList = [];
        }
        return fileList;
    },
    //给list添加key值
    addKey(list, keyStr = null) {
        if (list && list.length > 0) {
            list.map((item, index) => {
                item.key = keyStr ? keyStr : index;
                if (item.constructor == Array) {
                    this.addKey(item);
                }
            });
            return list;
        } else {
            return [];
        }
    },
    //解析url参数
    getUrlParams(url) {
        const str = url.substr(1).split('&');
        const obj = {};
        str.map((item) => {
            const arr = item.split('=');
            obj[arr[0]] = arr[1];
        });
        return obj;
    },

    /**
     * 文件下载响应处理,针对于response成功状态
     * @param responseBlob 响应的数据体，blob类型
     * @param fileName 文件下载名称（全名称，包括后缀）
     * @returns {boolean} 执行流程是否成功，但是成功并不代表下载成功，true为成功
     */
    downLoadFileResponseDispose(responseBlob, fileName) {
        let r = new FileReader();
        r.onload = function () {
            const link = document.createElement('a');
            link.style.display = 'none';
            link.href = URL.createObjectURL(responseBlob);
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
        r.readAsText(responseBlob);
        return true;
    },
};

export default CommonUtils;
