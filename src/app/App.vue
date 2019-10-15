<template>
    <div class="bgMain">
        <div class="container">
            <div class="row">
                <div class="col-sm-10 mx-auto ">
                    <nav v-if="" class="navbar navbar-dark bg-dark">
                        <div class="col-sm-6 col-6 p-0">
                            <router-link class="routerLInk" to="/">Home</router-link>
                            <router-link class="routerLInk" to="/create">Create Ticket</router-link>
                        </div>
                        <div class="col-sm-6 col-6 text-right p-0">
                                <router-link class="routerLInk" to="/logout">Logout</router-link>
                        </div>
                    </nav>
                    <div class="pt-3">
                        <div v-if="alert.message && alert.message.msg" :class="`alert ${alert.type}`">{{alert.message.msg}}</div>
                        <div v-if="alert.message && !alert.message.msg" :class="`alert ${alert.type}`">{{alert.message}}</div>
                    <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .routerLInk{
        color: #FFffff;
        padding: 2%;
    }
    .routerLInk:hover{
        color: #FFffff;
    }
    .bgMain {
             background-color: #e9ecef;
             padding: 4rem 2rem;
         }
</style>
<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'app',
    computed: {
        ...mapState({
            alert: state => state.alert
        })
    },
    methods: {
        ...mapActions({
            clearAlert: 'alert/clear' 
        })
    },
    watch: {
        $route (to, from){
            // clear alert on location change
            this.clearAlert();
        }
    },

};
</script>