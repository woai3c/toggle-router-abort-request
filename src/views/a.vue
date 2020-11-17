<template>
    <div class="about">
        <h1>This is an a page</h1>
    </div>
</template>

<script>
import { fetchAData } from '@/api'

export default {
    created() {
        fetchAData().then(res => {
            console.log('a 路由请求完成')
        })
    }
}
</script>
