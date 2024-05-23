/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRecordStore = defineStore('record', () => {
  const records = ref([])

  const setRecords = (evt: any) => {
    records.value = evt
  }

  const recordServices = ref([])

  const setRecordServices = (evt: any) => {
    recordServices.value = evt
  }

  const recordRequests = ref([])

  const setRecordRequests = (evt: any) => {
    recordRequests.value = evt
  }

  const recordInvoices = ref([])

  const setRecordInvoices = (evt: any) => {
    recordInvoices.value = evt
  }

  return {
    records,
    setRecords,
    recordServices,
    setRecordServices,
    recordRequests,
    setRecordRequests,
    recordInvoices,
    setRecordInvoices
  }
})
