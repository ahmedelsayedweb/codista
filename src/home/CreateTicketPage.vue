<template>
    <div>
        <h2 class="text-center h1">Create Ticket</h2>
        <form @submit.prevent="handleSubmit2">
            <div class="form-group">
                <label class="font-weight-bold" htmlFor="movie_name">Name Movie</label>
                <input type="text" v-model="ticket.movie_name" v-validate="'required'" name="movie_name" class="form-control" :class="{ 'is-invalid': (submitted && errors.has('movie_name')) || (alert.message && alert.message.movie_name ) }" />
                <div v-if="submitted && errors.has('Name Movie')" class="invalid-feedback">{{ errors.first('movie_name') }}</div>
                <div v-if="alert.message && alert.message.movie_name " class="invalid-feedback">{{alert.message.movie_name[0]}}</div>
            </div>
            <div class="form-group">
                <label class="font-weight-bold" htmlFor="seats">Seats</label>
                <input type="number" v-model="ticket.seats" v-validate="'required'" name="seats" class="form-control" :class="{ 'is-invalid': (submitted && errors.has('seats')) || (alert.message && alert.message.seats ) }" />
                <div v-if="submitted && errors.has('seats')" class="invalid-feedback">{{ errors.first('seats') }}</div>
                <div v-if="alert.message && alert.message.seats " class="invalid-feedback">{{alert.message.seats[0]}}</div>
            </div>
            <div class="form-group">
                <label class="font-weight-bold" htmlFor="date_time">Date Time</label>
                <input type="datetime" v-model="ticket.date_time" v-validate="'required'" name="date_time" class="form-control" :class="{ 'is-invalid': (submitted && errors.has('date_time')) || (alert.message && alert.message.date_time ) }" />
                <div v-if="submitted && errors.has('date_time')" class="invalid-feedback">{{ errors.first('date_time') }}</div>
                <div v-if="alert.message && alert.message.date_time " class="invalid-feedback">{{alert.message.date_time[0]}}</div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Create Ticket</button>
<!--                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />-->
                <router-link to="/" class="btn btn-link">Cancel</router-link>
            </div>
<!--            <div class="form-group">-->
<!--                <button class="btn btn-primary" :disabled="status.registering222">Create Ticket</button>-->
<!--                <img v-show="status.registering222" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />-->
<!--                <router-link to="/" class="btn btn-link">Cancel</router-link>-->
<!--            </div>-->
        </form>

    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    data () {
        return {
            ticket: {
                movie_name: '',
                seats: '',
                date_time: '',
            },
            submitted: false
        }
    },
    computed: {
        ...mapState('posts', ['status']),
        ...mapState({
            alert: state => state.alert
        })
    },
    methods: {
        ...mapActions('posts', ['createTickets']),
        handleSubmit2(e) {
            this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.createTickets(this.ticket);
                }
            });
        }
    }

};
</script>