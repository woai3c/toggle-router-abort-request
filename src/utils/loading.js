import { Loading } from 'element-ui'

let loadingCounter = 0
let loading
export function showLoading() {
    if (loadingCounter === 0) {
        loading = Loading.service({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)',
        })
    }

    loadingCounter++
}

export function closeLoading() {
    loadingCounter--
    if (loadingCounter <= 0) {
        loadingCounter = 0
        loading.close()
    }
}