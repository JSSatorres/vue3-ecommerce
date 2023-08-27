<script setup>
import BasicLayout from '../layout/BasicLayout.vue'
import { schemaRegisterForm } from '../utils/yup'
// import { useRouter } from 'vue-router'
import { registerApi } from '../api/user'
import { ref } from 'vue'

let formData = ref({})
let formError = ref({})
let loading = ref(false)
// const router = useRouter()

const register = async () => {
  console.log(formData.value)
  formError.value = {}
  loading.value = true

  try {
    await schemaRegisterForm.validate(formData.value, { abortEarly: false })
    try {
      const response = await registerApi(formData.value)
      // const result = response.json()
      console.log(response)
      // router.push('/login')
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
      <h2>Registro de usuario</h2>
      <form class="ui form" @submit.prevent="register">
        <div class="field">
          <input
            type="text"
            placeholder="Nombre de usuario"
            v-model="formData.username"
            :class="{ error: formError.username }"
          />
        </div>
        <div v-if="formError.email" class="error-message">{{ formError.username.message }}</div>
        <div class="field">
          <input
            type="text"
            placeholder="Correo electronico"
            v-model="formData.email"
            :class="{ error: formError.email }"
          />
        </div>
        <div class="field">
          <input type="password" placeholder="Contraseña" v-model="formData.password" />
          <p v-if="formError?.email?.message" class="error-message">
            {{ formError?.email?.message }}
          </p>
        </div>

        <button type="submit" class="ui button fluid primary" :class="{ loading }">
          Crear usuario
        </button>
      </form>

      <router-link to="/login"> Iniciar sesión </router-link>
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
