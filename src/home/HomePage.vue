<template>
    <div>
        <h1 class="text-center mt-4">Hi {{account.user.data.name}}!</h1>
        <h3 class="mb-4">View All Tinkets</h3>
        <em v-if="posts.loading">Loading Tickets...</em>
        <span v-if="posts.error" class="text-danger">ERROR: {{posts.error}}</span>
        <table class="table table-dark table-striped" v-if="posts.items">
            <thead>
            <tr class="text-center">
                <th>id</th>
                <th>movie_name</th>
                <th>Seats</th>
                <th>Date Time</th>
                <th>Friendly date time</th>
                <th>Created at</th>
                <th>Total</th>
                <th>Links</th>
            </tr>
            </thead>
            <tbody class="text-center">
            <tr v-for="item in posts.items" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.movie_name }}</td>
                <td>{{ item.seats }}</td>
                <td>{{ item.date_time }}</td>
                <td>{{ item.friendly_date_time }}</td>
                <td>{{ item.created_at }}</td>
                <td>{{ item.total }}</td>
                <td> <router-link class="routerLInk" :to="{ path: '/tickets/' + item.id , params:  { id: item.id }}" >Link</router-link></td>
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
        }),
    },
    created () {
        this.getAllPosts();
    },
    methods: {
        ...mapActions('posts', {
            getAllPosts: 'getAllPosts'
        }),
    },

};

</script>