<template>
    <div>
        <h1 class="text-center mt-4">Hi {{account.user.data.name}}!</h1>
        <h3 class="mb-4">Single Tinkets</h3>
        <em v-if="posts.loading">Loading users...</em>
        <span v-if="posts.error" class="text-danger">ERROR: {{posts.error}}</span>
<!--        <span class="text-danger">ERROR: {{ posts.items.id }}</span>-->
<!--        <span class="text-danger">ERROR: {{ posts.items.movie_name }}</span>-->
        <table class="table table-dark table-striped">
            <thead>
            <tr class="text-center">
                <th>id</th>
                <th>movie_name</th>
                <th>Seats</th>
                <th>Date Time</th>
                <th>Friendly date time</th>
                <th>Created at</th>
                <th>Total</th>
            </tr>
            </thead>
            <tbody class="text-center">
            <tr v-if="posts.items" :key="posts.items.id">
                <td>{{ posts.items.id }}</td>
                <td>{{ posts.items.movie_name }}</td>
                <td>{{ posts.items.seats }}</td>
                <td>{{ posts.items.date_time }}</td>
                <td>{{ posts.items.friendly_date_time }}</td>
                <td>{{ posts.items.created_at }}</td>
                <td>{{ posts.items.total }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    computed: {
        ...mapState({
            account: state => state.account,
            posts: state => state.posts.all
        })
    },
    created () {
        this.getTicketById();
    },
    methods: {
        ...mapActions('posts', {
            getTicketById: 'getTicketById'
        }),
    }

};
</script>