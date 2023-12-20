import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#f99678",
          primaryDark: "#f98967",
          lightTextColour: "#fef2ee",
          grey: "#808080",
          danger: "#fe1911",
        },
      },
    },
  },
});

export default vuetify;
