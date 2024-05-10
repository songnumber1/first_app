<template>
  <div class="d-flex gap-1 align-items-center">
    <div class="langs">
      <div class="btn-group">
        <button
          type="button"
          class="dropdown-toggle bi bi-translate m-0 bg-transparent border-0"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></button>
        <ul
          class="dropdown-menu bsdbwidth dropdown-menu-end p-0 m-0 bg-transparent border-0 animate slideIn"
        >
          <li v-for="lang in availableLocales" :key="lang">
            <a class="dropdown-item text-end" href="#" @click="changing(lang)">
              {{ lang }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="h-100 p-2">
      <span>{{ t('header.initBtn1') }}</span>
    </div>
  </div>

  <el-select v-model="value" placeholder="Select" size="large" style="width: 240px">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>

  <el-form :model="form" label-width="auto" style="max-width: 600px">
    <el-form-item label="Selectd Value">
      <el-input v-model="value"></el-input>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const value = ref('')
const { availableLocales, locale } = useI18n()

const changing = (la) => {
  locale.value = la
  labelChange()
}

const labelChange = () => {
  options.value = [
    {
      value: '1',
      label: t('header.initBtn1')
    },
    {
      value: '2',
      label: t('header.initBtn2')
    }
  ]
}

let options = ref([
  {
    value: '1',
    label: t('header.initBtn1')
  },
  {
    value: '2',
    label: t('header.initBtn2')
  }
])
</script>
