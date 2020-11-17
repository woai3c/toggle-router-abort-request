import request from '@/utils/request'

export function fetchAData() {
    return request({
        url: 'https://api.github.com/users/woai3c?a=a',
    })
}

export function fetchBData() {
    return request({
        url: 'https://api.github.com/users/woai3c?b=b',
    })
}