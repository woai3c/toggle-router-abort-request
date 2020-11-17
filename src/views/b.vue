<template>
    <div class="about">
        <h1>This is an b page</h1>
    </div>
</template>

<script>
import { fetchBData } from '@/api'

export default {
    created() {
        fetchBData().then(res => {
            console.log('b 路由请求完成')
        })
    }
}
</script>
