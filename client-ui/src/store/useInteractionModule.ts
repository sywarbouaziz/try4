import {
  InteractionUpdateInput,
  InteractionCreateInput,
  Interaction,
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
  | Interaction
  | InteractionCreateInput
  | InteractionUpdateInput = { user: { id: "" }, annonce: { id: "" } };
export const useInteractionStore = defineStore("interaction-store", {
  state: () => {
    return {
      interactionList: [] as Array<Interaction>,
      error: null as Object | any,
      isLoading: useBodyStore().isLoading,
      interaction: _.cloneDeep(initialState),
      interactionExcelFile: "" as string,
      interactionPagination: {
        skip: 0,
        take: Number(localStorage.getItem("take")) || 5,
        total: 0,
      },
    };
  },

  getters: {},

  actions: {
    async fetchInteractions(payload?: IPagination) {
      try {
        const { data } = await service.api.interactionControllerFindMany({
          skip: payload?.skip ?? undefined,
          take: payload?.take ?? undefined,
        });
        this.interactionList = data.paginatedResult;

        this.interactionList.forEach((element) => {
          for (const [key, value] of Object.entries(element)) {
            if (typeof value == "object" && value) {
              element[key] = Object.values(value);
            }
          }
        });
        this.interactionPagination = {
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
        this.interactionList = [];
        console.error("Error loading  ITEMS", err);
        this.error = err.error;
      } finally {
      }
    },
    async fetchDataExcelInteractions() {
      try {
        const {
          data,
        } = await service.api.interactionControllerFindDataForExcel();
        this.interactionExcelFile = data.file;

        this.error = null;
      } catch (err: any) {
        console.error("Error loading  ITEMS", err);
        this.error = err.error;
      } finally {
        this.isLoading = false;
      }
    },
    async softDeleteInteraction(payload: string) {
      this.isLoading = true;
      try {
        const { data } = await service.api.interactionControllerUpdate(
          payload,
          { deletedAt: new Date() }
        );
        this.error = null;
        this.fetchInteractions({
          take: this.interactionPagination.take,
          skip: this.interactionPagination.skip,
        });
      } catch (err: any) {
        console.error("Error loading  ITEMS", err);
        this.error = err.error;
        this.isLoading = false;
      } finally {
        this.isLoading = false;
      }
    },
    async deleteInteraction(payload: string) {
      this.isLoading = true;
      try {
        const { data } = await service.api.interactionControllerDelete(payload);
        this.interactionList = this.interactionList.filter(
          (interaction) => interaction.id !== data.id
        );
        this.interactionPagination.total--;
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
    async editInteraction(payload: {
      id: string;
      data?: InteractionUpdateInput;
    }) {
      this.isLoading = true;
      try {
        const { data } = await service.api.interactionControllerUpdate(
          payload.id,
          payload.data ?? this.interaction
        );
        this.interactionList = this.interactionList.map((item) =>
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
      async editManyInteraction(payload: { data: InteractionUpdateInput; where: any }) {
        this.isLoading  = true;
        try {
          const { data } = await service.api.interactionControllerUpdateMany(
            payload.data,
            payload.where
           
          );
          this.interactionList = this.interactionList.map((item) =>
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

    async getInteractionById(payload: string) {
      this.isLoading = true;
      try {
        const { data } = await service.api.interactionControllerFindOne(
          payload
        );
        this.interaction = data;
        this.error = null;
      } catch (err: any) {
        this.resetInteraction();
        console.error("Error Update  ITEMS", err.error);
        this.error = err.error;
      } finally {
        this.isLoading = false;
      }
    },
    async createInteraction(payload?: { data: InteractionCreateInput }) {
      this.isLoading = true;
      try {
        const { data } = await service.api.interactionControllerCreate(
          payload?.data ?? (this.interaction as InteractionCreateInput)
        );
        this.interactionList = [...this.interactionList, data];
        this.error = null;
      } catch (err: any) {
        this.error = err.error;
      } finally {
        this.isLoading = false;
      }
    },
    async createManyInteraction(payload: any) {
      this.isLoading = true;
      try {
        const { data } = await service.api.interactionControllerCreateMany(
          payload
        );
        this.error = null;
      } catch (err: any) {
        this.error = err.error;
      } finally {
        this.isLoading = false;
      }
    },

    resetInteraction() {
      this.interaction = _.cloneDeep(initialState);
    },
  },
});
