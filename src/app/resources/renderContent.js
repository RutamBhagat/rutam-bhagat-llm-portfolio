import {
  about,
  blog,
  fullstack,
  home,
  newsletter,
  person,
  social,
  work,
} from "./content";

import { createI18nContent } from "./content-i18n";
import { i18n } from "./config";

const renderContent = (t) => {
  if (i18n) {
    return createI18nContent(t);
  } else {
    return {
      person,
      social,
      newsletter,
      home,
      about,
      blog,
      work,
      fullstack,
    };
  }
};

export { renderContent };
