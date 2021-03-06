/**
 * 融资管理模块下的所有接口
 */

import {Req} from '../Req';

// 融资申请摘要
export function GetStatisticalData(values) {
	return Req.post('/loan/management/getStatisticalData', {...values})
}

// 融资申请列表
export function GetFinanceList(values) {
    return Req.post('/loanV2/contract/search', {...values})
}

// 放款申请列表
export function GetLoanList(values) {
    return Req.post('/loanV2/applyLoanOut/search', {...values})
}

// 放款申请摘要
export function GetLoanOutStatisticalData() {
    return Req.post('/loanV2/management/getLoanOutStatisticalData', {})
}



// 放款详情
export function GetLoanDetail(loanId) {
    return Req.post('/loan/management/view/approveStep/'+loanId, {})
}


// 项目下载 企业列表
export function GetProFileList(values) {
    return Req.post('/loanV2/file/findProjectFile', {...values})
}

// 项目下载 保存
export function GetSaveFileList(values) {
    return Req.post('/loanV2/file/saveFileDesc', {...values})
}

//项目下载 下载
export function GetDownLoadFile(values) {
    return Req.post('/loanV2/file/forwardOperationEnd', {...values})
}
