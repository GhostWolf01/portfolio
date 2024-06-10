import { ref } from "#imports";

export function useResize(width: number = 960) {
  const isMobile = ref(false);

  if (process.client && window.innerWidth < width) {
    isMobile.value = true;
  } else isMobile.value = false;

  return isMobile;
}
