import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        step: 0, // Step 0 - Enter phone, Step 1 - Enter Otp
        phone: null,
        otp: null,
        isLoading: false,
        lastError: null,
    }),
    getters: {
        showPhoneInput (state){
            return state.step === 0;
        },
        showOtpInput (state){
            return state.step === 1;
        }
    },
    actions: {
        nextStep() {
            this.step += 1;
        }
    }
})