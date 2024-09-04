<template>
  <div>
    <Navbar />
    <slot />
  </div>
</template>

<script lang="ts" setup>
import Navbar from "../components/Home/Navbar.vue";

const modes = [
  { icon: "lucide:sun", title: "Light", value: "light" },
  { icon: "lucide:moon", title: "Dark", value: "dark" },
  { icon: "lucide:laptop", title: "System", value: "system" },
];

const colorMode = useColorMode();
const setTheme = (val: string) => {
  colorMode.preference = val;
};

const currentIcon = computed(() => {
  return modes.find((m) => m.value === colorMode?.preference)?.icon;
});
</script>
