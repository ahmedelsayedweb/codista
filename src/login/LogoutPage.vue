<template>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    created () {
        // reset login status
        this.logout();
    },
    methods: {
        ...mapActions('account', ['login', 'logout']),

    }
};
</script>