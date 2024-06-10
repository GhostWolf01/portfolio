import vcolors, { grey as vgrey, lightGreen as vlightGreen } from 'vuetify/util/colors'; // green as vgreen

export const grey = {
  ...vgrey,
  darken5: '#0c0c0c',
  darken6: '#171819',
  darken7: '#2d2f33',
} as const;

export const lightGreen = {
  ...vlightGreen,
  accent5: '#10CB8A',
} as const;

export default {
  ...vcolors,
  grey,
  lightGreen,
} as const;
