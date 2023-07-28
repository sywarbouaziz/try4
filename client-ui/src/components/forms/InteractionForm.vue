<template>
  <el-form
    :model="interaction"
    label-width="120px"
    :rules="rules"
    ref="ruleFormRef"
  >
    <el-form-item label="user_id" prop="user">
      <el-select
        v-model="interaction.user.id"
        data-test="interactionFormuserId"
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
    <el-form-item label="annonce_id" prop="annonce">
      <el-select
        v-model="interaction.annonce.id"
        data-test="interactionFormannonceId"
        class="m-2"
        placeholder="Select"
        size="large"
      >
        <el-option
          v-for="annonce in annonces"
          :data-test="annonce.id"
          :label="annonce.id"
          :key="annonce.id"
          :value="annonce.id"
        />
      </el-select>
    </el-form-item>
    <div class="d-flex justify-content-end">
      <el-button
        data-test="interactionFormCancelButton"
        @click="resetForm(ruleFormRef)"
        >Cancel</el-button
      >
      <el-button
        data-test="interactionFormSubmitButton"
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

import { useInteractionStore } from "@/store/useInteractionModule";
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
let annonces = ref([]);
const { interaction, error } = storeToRefs(useInteractionStore());
const {
  getInteractionById,
  createInteraction,
  editInteraction,
  resetInteraction,
} = useInteractionStore();

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
  user: [
    {
      required: false,
      message: `${t("entityForm.validation.required")}`,
      trigger: "blur",
    },
  ],
  annonce: [
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
    return await editInteraction({ id });
  } else await createInteraction();
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
        router.push({ name: `${currentUser.value.role}-list-interaction` });
        resetInteraction();
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
  resetInteraction();
};
const getCurrentInteraction = async (id: string) => {
  if (props.isEdit) {
    await getInteractionById(id);
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
const getListOfAnnonce = async () => {
  await supabase
    .from("Annonce")
    .select("*")
    .then(({ data }) => {
      annonces.value = data;
    });
};

onMounted(async () => {
  const id = route.params.id as string;
  await getListOfUser();
  await getListOfAnnonce();
  await getCurrentInteraction(id);
});
</script>
