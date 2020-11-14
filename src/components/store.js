import { writable } from 'svelte/store'

// values: home, layout, navigation, form, wiget, utils
export const currentTab = writable('home')
