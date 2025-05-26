import { Language } from "./types";

interface OptionTranslation {
  title: string;
  description?: string;
}

// 定义翻译接口
export interface Translation {
  renameLayerButton: string;
  selectLayerFirst: string;
  settingsTitle: string;
  languageLabel: string;
  renameTargetsLabel: string;
  options: {
    instance: OptionTranslation;
    locked: OptionTranslation;
    hidden: OptionTranslation;
    renameCustomNames: OptionTranslation;
    showSpacing: OptionTranslation;
    usePascalCase: OptionTranslation;
  };
}

export const i18n: Record<Language, Translation> = {
  en: {
    renameLayerButton: "Rename Layers",
    selectLayerFirst: "Select layers first",
    settingsTitle: "🛠️ Settings",
    languageLabel: "🌐 Language",
    renameTargetsLabel: "Also rename the following layers:",
    options: {
      instance: {
        title: "Instance",
        // description: "Rename components inside instances",
      },
      locked: {
        title: "Locked",
        // description: "Rename locked layers",
      },
      hidden: {
        title: "Hidden",
        // description: "Rename hidden layers",
      },
      renameCustomNames: {
        title: "Custom Names",
        description:
          "Enable this option to rename layers with custom names. Disable this option to only rename Figma and plugin-generated layer names",
      },
      showSpacing: {
        title: "Show Spacing",
        description:
          "Grid spacing cannot be displayed, please wait for Figma to update",
      },
      usePascalCase: {
        title: "Use PascalCase",
        // description: "Use PascalCase for layer names",
      },
    },
  },
  zh: {
    renameLayerButton: "重命名图层",
    selectLayerFirst: "请先选择图层",
    settingsTitle: "🛠️ 设置",
    languageLabel: "🌐 语言",
    renameTargetsLabel: "除了基础图层以外，对以下图层也进行重命名 :",
    options: {
      instance: {
        title: "组件实例",
        // description: "重命名组件实例内的图层",
      },
      locked: {
        title: "锁定图层",
        // description: "重命名被锁定的图层",
      },
      hidden: {
        title: "隐藏图层",
        // description: "重命名被隐藏的图层",
      },
      renameCustomNames: {
        title: "大扫除模式",
        description:
          "启用此选项将重命名用户自定义的图层名称。禁用时，仅重命名 Figma 和插件自动生成的图层名称",
      },
      showSpacing: {
        title: "显示间距",
        description: "目前 grid 间距无法显示，请等待 Figma 更新",
      },
      usePascalCase: {
        title: "使用大驼峰命名",
        // description: "使用帕斯卡命名法命名图层",
      },
    },
  },
};
