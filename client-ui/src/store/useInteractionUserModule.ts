import {
  InteractionUserUpdateInput,
  InteractionUserCreateInput,
  InteractionUser,
} from "./../../index";
import { defineStore } from "pinia";
import service from "@/service";
import { storeToRefs } from "pinia";
import { useBodyStore } from "@/store/useBodyModule";
import _ from "lodash";

interface IPagination {
  take?: number;
  skip?: number;
}
const { isLoading } = storeToRefs(useBodyStore());
const initialState:
  | InteractionUser
  | InteractionUserCreateInput
  | InteractionUserUpdateInput = {
  date: "2023-07-28T11:08:32.913Z",
  status: "",
  user2: { id: "" },
  users: { id: "" },
};
export const useInteractionUserStore = defineStore("interactionuser-store", {
  state: () => {
    return {
      interactionuserList: [] as Array<InteractionUser>,
      error: null as Object | any,
      isLoading: useBodyStore().isLoading,
      interactionuser: _.cloneDeep(initialState),
      interactionuserExcelFile: "" as string,
      interactionuserPagination: {
        skip: 0,
        take: Number(localStorage.getItem("take")) || 5,
        total: 0,
      },
    };
  },

  getters: {},

  actions: {
    async fetchInteractionUsers(payload?: IPagination) {
      try {
        const { data } = await service.api.interactionUserControllerFindMany({
          skip: payload?.skip ?? undefined,
          take: payload?.take ?? undefined,
        });
        this.interactionuserList = data.paginatedResult;

        this.interactionuserList.forEach((element) => {
          for (const [key, value] of Object.entries(element)) {
            if (typeof value == "object" && value) {
              element[key] = Object.values(value);
            }
          }
        });
        this.interactionuserPagination = {
          total: data.totalCount,
          skip: payload?.skip ?? 0,
          take: payload?.take ?? data.totalCount,
        };
        localStorage.setItem(
          "take",
          payload?.take?.toString() ?? data.totalCount.toString()
        );
        this.error = null;
      } catch (err: any) {
        this.interactionuserList = [];
        console.error("Error loading  ITEMS", err);
        this.error = err.error;
      } finally {
      }
    },
    async fetchDataExcelInteractionUsers() {
      try {
        const {
          data,
        } = await service.api.interactionUserControllerFindDataForExcel();
        this.interactionuserExcelFile = data.file;

        this.error = null;
      } catch (err: any) {
        console.error("Error loading  ITEMS", err);
        this.error = err.error;
      } finally {
        this.isLoading = false;
      }
    },
    async softDeleteInteractionUser(payload: string) {
      this.isLoading = true;
      try {
        const {
          data,
        } = await service.api.interactionUserControllerUpdate(payload, {
          deletedAt: new Date(),
        });
        this.error = null;
        this.fetchInteractionUsers({
          take: this.interactionuserPagination.take,
          skip: this.interactionuserPagination.skip,
        });
      } catch (err: any) {
        console.error("Error loading  ITEMS", err);
        this.error = err.error;
        this.isLoading = false;
      } finally {
        this.isLoading = false;
      }
    },
    async deleteInteractionUser(payload: string) {
      this.isLoading = true;
      try {
        const { data } = await service.api.interactionUserControllerDelete(
          payload
        );
        this.interactionuserList = this.interactionuserList.filter(
          (interactionuser) => interactionuser.id !== data.id
        );
        this.interactionuserPagination.total--;
        this.isLoading = false;
        this.error = null;
      } catch (err: any) {
        console.error("Error loading  ITEMS", err);
        this.error = err.error;
        this.isLoading = false;
      } finally {
        this.isLoading = false;
      }
    },
    async editInteractionUser(payload: {
      id: string;
      data?: InteractionUserUpdateInput;
    }) {
      this.isLoading = true;
      try {
        const { data } = await service.api.interactionUserControllerUpdate(
          payload.id,
          payload.data ?? this.interactionuser
        );
        this.interactionuserList = this.interactionuserList.map((item) =>
          item.id === payload.id ? { ...item, ...data } : item
        );
        this.error = null;
      } catch (err: any) {
        console.error("Error Update  ITEMS", err.error);
        this.error = err.error;
      } finally {
        this.isLoading = false;
      }
    } /*
      async editManyInteractionUser(payload: { data: InteractionUserUpdateInput; where: any }) {
        this.isLoading  = true;
        try {
          const { data } = await service.api.interactionUserControllerUpdateMany(
            payload.data,
            payload.where
           
          );
          this.interactionuserList = this.interactionuserList.map((item) =>
            item.id === payload.id ? { ...item, ...payload.data } : item
          );
          this.error = null;
        } catch (err:any) {
          console.error("Error Update  ITEMS", err.error);
          this.error = err.error;
        } finally {
          this.isLoading = false;
        }
      },*/,

    async getInteractionUserById(payload: string) {
      this.isLoading = true;
      try {
        const { data } = await service.api.interactionUserControllerFindOne(
          payload
        );
        this.interactionuser = data;
        this.error = null;
      } catch (err: any) {
        this.resetInteractionUser();
        console.error("Error Update  ITEMS", err.error);
        this.error = err.error;
      } finally {
        this.isLoading = false;
      }
    },
    async createInteractionUser(payload?: {
      data: InteractionUserCreateInput;
    }) {
      this.isLoading = true;
      try {
        const { data } = await service.api.interactionUserControllerCreate(
          payload?.data ?? (this.interactionuser as InteractionUserCreateInput)
        );
        this.interactionuserList = [...this.interactionuserList, data];
        this.error = null;
      } catch (err: any) {
        this.error = err.error;
      } finally {
        this.isLoading = false;
      }
    },
    async createManyInteractionUser(payload: any) {
      this.isLoading = true;
      try {
        const { data } = await service.api.interactionUserControllerCreateMany(
          payload
        );
        this.error = null;
      } catch (err: any) {
        this.error = err.error;
      } finally {
        this.isLoading = false;
      }
    },

    resetInteractionUser() {
      this.interactionuser = _.cloneDeep(initialState);
    },
  },
});
