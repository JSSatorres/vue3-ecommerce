<script setup>
import BasicLayout from '../layout/BasicLayout.vue'
import { schemaRegisterForm } from '../utils/yup'
import { useRouter } from 'vue-router'
import { registerApi } from '../api/user'
import { ref, onMounted } from 'vue'
import { getTokenApi, setTokenApi } from '../api/token'

let formData = ref({})
let formError = ref({})
let loading = ref(false)
const router = useRouter()
const token = getTokenApi()

onMounted(() => {
  if (token) router.push('/')
})

const register = async () => {
  console.log(formData.value)
  formError.value = {}
  loading.value = true

  try {
    await schemaRegisterForm.validate(formData.value, { abortEarly: false })
    console.log(formData.value)
    const payload = {
      userName: formData.value.username,
      email: formData.value.email,
      password: formData.value.password
    }
    console.log(payload)
    try {
      const response = await registerApi(payload)
      if (!response?.jwt) throw 'data are not correct'
      setTokenApi(response?.jwt)
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  } catch (error) {
    console.log(error)
    error.inner.forEach((err) => {
      formError.value[err.path] = err.message
    })
  }
  loading.value = false
}
</script>

<template>
  <BasicLayout>
    <div class="register">
      <h2>Register</h2>
      <form class="ui form" @submit.prevent="register">
        <div class="field">
          <input
            type="text"
            placeholder="User name"
            v-model="formData.username"
            :class="{ error: formError.username }"
          />
        </div>
        <div v-if="formError.email" class="error-message">{{ formError.username.message }}</div>
        <div class="field">
          <input
            type="text"
            placeholder="Email"
            v-model="formData.email"
            :class="{ error: formError.email }"
          />
        </div>
        <div class="field">
          <input
            type="password"
            placeholder="Password"
            v-model="formData.password"
            :class="{ error: formError.password }"
          />
          <p v-if="formError?.password?.message" class="error-message">
            {{ formError?.password?.message }}
          </p>
        </div>

        <button type="submit" class="ui button fluid primary" :class="{ loading }">Register</button>
      </form>

      <router-link to="/login"> Login </router-link>
    </div>
  </BasicLayout>
</template>

<style lang="scss" scoped>
.register {
  text-align: center;
  > h2 {
    margin: 50px 0 30px 0;
  }

  .ui.form {
    max-width: 300px !important;
    margin: 0 auto;
    margin-bottom: 10px;
    input.error {
      border-color: #faa;
      background-color: #ffeded;
    }
  }
}
</style>
