<script setup>
import BasicLayout from '../layout/BasicLayout.vue'
import { schemaLoginForm } from '../utils/yup'
import { useRouter } from 'vue-router'
import { loginApi } from '../api/user'
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

const login = async () => {
  console.log(formData.value)
  formError.value = {}
  loading.value = true

  try {
    await schemaLoginForm.validate(formData.value, { abortEarly: false })
    console.log(formData.value)

    const payload = {
      identifier: formData.value.username,
      password: formData.value.password
    }

    try {
      const response = await loginApi(payload)
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
    <div class="login">
      <h2>Login</h2>
      <form class="ui form" @submit.prevent="login">
        <div class="field">
          <input
            type="text"
            placeholder="User name"
            v-model="formData.username"
            :class="{ error: formError.username }"
          />
        </div>
        <div v-if="formError.username" class="error-message">{{ formError.username.message }}</div>
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

        <button type="submit" class="ui button fluid primary" :class="{ loading }">Login</button>
      </form>
      <p>you don't have an account<router-link to="/register"> Register </router-link></p>
    </div>
  </BasicLayout>
</template>

<style lang="scss" scoped>
.login {
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
