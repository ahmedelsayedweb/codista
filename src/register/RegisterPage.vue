<template>
    <div>
        <h2>Register</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label htmlFor="name"> Name</label>
                <input type="text" v-model="user.name" v-validate="required" name="name" class="form-control" :class="{ 'is-invalid': (submitted && errors.has('name')) || (alert.message && alert.message.name ) }" />
                <div v-if="submitted && errors.has('name')" class="invalid-feedback">{{ errors.first('name') }}</div>
                <div v-if="alert.message && alert.message.name " class="invalid-feedback">{{alert.message.name[0]}}</div>
            </div>
            <div class="form-group">
                <label htmlFor="email">email</label>
                <input type="text" v-model="user.email" v-validate="required" name="email" class="form-control" :class="{ 'is-invalid': (submitted && errors.has('email')) || (alert.message && alert.message.email ) }" />
                <div v-if="submitted && errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div>
                <div v-if="alert.message && alert.message.email " class="invalid-feedback">{{alert.message.email[0]}}</div>
            </div>
            <div class="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" v-model="user.password" v-validate="{ required: true, min: 6 }" name="password" class="form-control" :class="{ 'is-invalid': (submitted && errors.has('password'))|| (alert.message && alert.message.password) }"  ref="password"/>
                <div v-if="submitted && errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</div>
                <div v-if="alert.message && alert.message.password " class="invalid-feedback">{{alert.message.password[0]}}</div>
            </div>
            <div class="form-group">
                <label htmlFor="password_confirmation">password confirmation</label>
                <input type="password" v-model="user.password_confirmation" v-validate="'required|confirmed:password'" name="password_confirmation"  class="form-control" :class="{ 'is-invalid': submitted && errors.has('password_confirmation') }" />
                <div v-if="submitted && errors.has('password_confirmation')" class="invalid-feedback">{{ errors.first('password_confirmation') }}</div>
<!--                <div v-if="alert.message && alert.message.password " class="invalid-feedback">{{alert.message.password[0]}}</div>-->
            </div>
            <div class="form-group">
                <button class="btn btn-primary" :disabled="status.registering">Register</button>
                <img v-show="status.registering" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                <router-link to="/login" class="btn btn-link">Cancel</router-link>
            </div>
        </form>

    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    data () {
        return {
            user: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
            submitted: false
        }
    },
    props: ['massages'],
    computed: {
        ...mapState('account', ['status']),
        ...mapState({
            alert: state => state.alert
        })
    },
    methods: {
        ...mapActions('account', ['register']),
        handleSubmit(e) {
            this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.register(this.user);
                }
            });
        }
    }

};
</script>