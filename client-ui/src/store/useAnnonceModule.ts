import { AnnonceUpdateInput, AnnonceCreateInput, Annonce } from "./../../index";
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
const initialState: Annonce | AnnonceCreateInput | AnnonceUpdateInput = {
  title: "",
  content: "",
  endDate: "2023-07-28T11:08:32.912Z",
  longitude: 0,
  latitude: 0,
  users: { id: "" },
};
export const useAnnonceStore = defineStore("annonce-store", {
  state: () => {
    return {
      annonceList: [] as Array<Annonce>,
      error: null as Object | any,
      isLoading: useBodyStore().isLoading,
      annonce: _.cloneDeep(initialState),
      annonceExcelFile: "" as string,
      annoncePagination: {
        skip: 0,
        take: Number(localStorage.getItem("take")) || 5,
        total: 0,
      },
    };
  },

  getters: {},

  actions: {
    async fetchAnnonces(payload?: IPagination) {
      try {
        const { data } = await service.api.annonceControllerFindMany({
          skip: payload?.skip ?? undefined,
          take: payload?.take ?? undefined,
        });
        this.annonceList = data.paginatedResult;

        this.annonceList.forEach((element) => {
          for (const [key, value] of Object.entries(element)) {
            if (typeof value == "object" && value) {
              element[key] = Object.values(value);
            }
          }
        });
        this.annoncePagination = {
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
        this.annonceList = [];
        console.error("Error loading  ITEMS", err);
        this.error = err.error;
      } finally {
      }
    },
    async fetchDataExcelAnnonces() {
      try {
        const { data } = await service.api.annonceControllerFindDataForExcel();
        this.annonceExcelFile = data.file;

        this.error = null;
      } catch (err: any) {
        console.error("Error loading  ITEMS", err);
        this.error = err.error;
      } finally {
        this.isLoading = false;
      }
    },
    async softDeleteAnnonce(payload: string) {
      this.isLoading = true;
      try {
        const { data } = await service.api.annonceControllerUpdate(payload, {
          deletedAt: new Date(),
        });
        this.error = null;
        this.fetchAnnonces({
          take: this.annoncePagination.take,
          skip: this.annoncePagination.skip,
        });
      } catch (err: any) {
        console.error("Error loading  ITEMS", err);
        this.error = err.error;
        this.isLoading = false;
      } finally {
        this.isLoading = false;
      }
    },
    async deleteAnnonce(payload: string) {
      this.isLoading = true;
      try {
        const { data } = await service.api.annonceControllerDelete(payload);
        this.annonceList = this.annonceList.filter(
          (annonce) => annonce.id !== data.id
        );
        this.annoncePagination.total--;
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
    async editAnnonce(payload: { id: string; data?: AnnonceUpdateInput }) {
      this.isLoading = true;
      try {
        const { data } = await service.api.annonceControllerUpdate(
          payload.id,
          payload.data ?? this.annonce
        );
        this.annonceList = this.annonceList.map((item) =>
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
      async editManyAnnonce(payload: { data: AnnonceUpdateInput; where: any }) {
        this.isLoading  = true;
        try {
          const { data } = await service.api.annonceControllerUpdateMany(
            payload.data,
            payload.where
           
          );
          this.annonceList = this.annonceList.map((item) =>
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

    async getAnnonceById(payload: string) {
      this.isLoading = true;
      try {
        const { data } = await service.api.annonceControllerFindOne(payload);
        this.annonce = data;
        this.error = null;
      } catch (err: any) {
        this.resetAnnonce();
        console.error("Error Update  ITEMS", err.error);
        this.error = err.error;
      } finally {
        this.isLoading = false;
      }
    },
    async createAnnonce(payload?: { data: AnnonceCreateInput }) {
      this.isLoading = true;
      try {
        const { data } = await service.api.annonceControllerCreate(
          payload?.data ?? (this.annonce as AnnonceCreateInput)
        );
        this.annonceList = [...this.annonceList, data];
        this.error = null;
      } catch (err: any) {
        this.error = err.error;
      } finally {
        this.isLoading = false;
      }
    },
    async createManyAnnonce(payload: any) {
      this.isLoading = true;
      try {
        const { data } = await service.api.annonceControllerCreateMany(payload);
        this.error = null;
      } catch (err: any) {
        this.error = err.error;
      } finally {
        this.isLoading = false;
      }
    },

    resetAnnonce() {
      this.annonce = _.cloneDeep(initialState);
    },
  },
});
