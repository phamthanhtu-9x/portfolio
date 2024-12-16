import { defineStore } from "pinia";

export type ToastType = 'warning' | 'error' | 'success'

export const useToastStore = defineStore('toastStore', {
  state: () => ({
    isShow: false,
    type: '' as ToastType,
    message: '',
  }),

  actions: {
    showToast(type: ToastType, message: string) {
      this.isShow = true;
      this.type = type;
      this.message = message
    },

    closeToast() {
      this.isShow = false;
    }
  }
})
