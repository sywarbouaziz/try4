<template>
  <el-form
    :model="interactionuser"
    label-width="120px"
    :rules="rules"
    ref="ruleFormRef"
  >
    <el-form-item label="date" prop="date">
      <el-date-picker
        v-model="interactionuser.date"
        type="date"
        placeholder="Pick a date"
        style="width: 100%"
        data-test="interactionuserFormdate"
      />
    </el-form-item>
    <el-form-item label="status" prop="status">
      <el-input
        v-model="interactionuser.status"
        data-test="interactionuserFormstatus"
      />
    </el-form-item>
    <el-form-item label="user2_id" prop="user2">
      <el-select
        v-model="interactionuser.user2.id"
        data-test="interactionuserFormuser2Id"
        class="m-2"
        placeholder="Select"
        size="large"
      >
        <el-option
          v-for="user in users"
          :data-test="user.id"
          :label="user.id"
          :key="user.id"
          :value="user.id"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="users_id" prop="users">
      <el-select
        v-model="interactionuser.users.id"
        data-test="interactionuserFormusersId"
        class="m-2"
        placeholder="Select"
        size="large"
      >
        <el-option
          v-for="user in users"
          :data-test="user.id"
          :label="user.id"
          :key="user.id"
          :value="user.id"
        />
      </el-select>
    </el-form-item>
    <div class="d-flex justify-content-end">
      <el-button
        data-test="interactionuserFormCancelButton"
        @click="resetForm(ruleFormRef)"
        >Cancel</el-button
      >
      <el-button
        data-test="interactionuserFormSubmitButton"
        type="primary"
        @click="onSubmit(ruleFormRef)"
        >{{ isEdit ? "Save" : "Create" }}</el-button
      >
    </div>
  </el-form>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { reactive, ref } from "vue";
import { storeToRefs } from "pinia";
import { supabase } from "@/core/services/SupabaseClientService";

import { useInteractionUserStore } from "@/store/useInteractionUserModule";
import { useRoute, useRouter } from "vue-router";
import type { ElForm } from "element-plus";
import { Components } from "@tekab-dev-team/storybook-devfactory";
import { t } from "@/core/i18n/translate";
import { useAuthStore } from "@/store/useAuth";
const { currentUser } = storeToRefs(useAuthStore());

const props = defineProps({
  isEdit: { type: Boolean, default: false },
});
let users = ref([]);
const { interactionuser, error } = storeToRefs(useInteractionUserStore());
const {
  getInteractionUserById,
  createInteractionUser,
  editInteractionUser,
  resetInteractionUser,
} = useInteractionUserStore();

const route = useRoute();
const router = useRouter();
const ruleFormRef = ref<InstanceType<typeof ElForm>>();
const isLoading = ref<boolean>(false);
const rules = reactive({
  interactionType: [
    {
      required: false,
      message: `${t("entityForm.validation.required")}`,
      trigger: "blur",
    },
  ],
  date: [
    {
      required: false,
      message: `${t("entityForm.validation.required")}`,
      trigger: "blur",
    },
  ],
  status: [
    {
      required: false,
      message: `${t("entityForm.validation.required")}`,
      trigger: "blur",
    },
  ],
  user2: [
    {
      required: false,
      message: `${t("entityForm.validation.required")}`,
      trigger: "blur",
    },
  ],
  users: [
    {
      required: false,
      message: `${t("entityForm.validation.required")}`,
      trigger: "blur",
    },
  ],
});

const handleSubmitForm = async () => {
  isLoading.value = true;
  if (props.isEdit) {
    const id = route?.params?.id as string;
    return await editInteractionUser({ id });
  } else await createInteractionUser();
};

const onSubmit = (formEl: InstanceType<typeof ElForm> | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      await handleSubmitForm();
      if (!!error.value) {
        Components.ElMessage.error(error.value?.message);
        console.log(error, "error");
      } else {
        router.push({ name: `${currentUser.value.role}-list-interactionuser` });
        resetInteractionUser();
      }
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
const resetForm = (formEl: InstanceType<typeof ElForm> | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
  resetInteractionUser();
};
const getCurrentInteractionUser = async (id: string) => {
  if (props.isEdit) {
    await getInteractionUserById(id);
  }
};

const getListOfUser = async () => {
  await supabase
    .from("User")
    .select("*")
    .then(({ data }) => {
      users.value = data;
    });
};

onMounted(async () => {
  const id = route.params.id as string;
  await getListOfUser();
  await getCurrentInteractionUser(id);
});
</script>
