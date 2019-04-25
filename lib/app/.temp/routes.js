import Vue from 'vue'
Vue.component("Bit", () => import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\.vuepress\\components\\Bit.vue"))
import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-9cd9cfc36ccc6",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\README.md").then(comp => {
        Vue.component("v-9cd9cfc36ccc6", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-0401a3c179734",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-0401a3c179734", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-d56ab120a43ec",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-d56ab120a43ec", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-e7cb1e24f3f08",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-e7cb1e24f3f08", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-01035a1cf7a78",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-01035a1cf7a78", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f5378c562b485",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-f5378c562b485", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d0403e4680104",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-d0403e4680104", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c16d1fec24c03",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-c16d1fec24c03", comp.default)
        next()
      })
    }
  },
  {
    name: "v-69dbf4e275d7",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-69dbf4e275d7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7c3840469c484",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-7c3840469c484", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0098f61eb3d69",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-0098f61eb3d69", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1a40c2ca461ab",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-1a40c2ca461ab", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8a4d6ed7d7ba8",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-8a4d6ed7d7ba8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-34a14c7798f63",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-34a14c7798f63", comp.default)
        next()
      })
    }
  },
  {
    name: "v-29ff80fd1bec",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-29ff80fd1bec", comp.default)
        next()
      })
    }
  },
  {
    name: "v-597709c556bde",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-597709c556bde", comp.default)
        next()
      })
    }
  },
  {
    name: "v-43d317e480bf9",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-43d317e480bf9", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-02d031d1ca823",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-02d031d1ca823", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-ab64e8334bb95",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-ab64e8334bb95", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-56c50bdfb209",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-56c50bdfb209", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-f8bd75d65ca93",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-f8bd75d65ca93", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1f00570dbc268",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-1f00570dbc268", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e5988686afc7b",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-e5988686afc7b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7a8ee992ab794",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-7a8ee992ab794", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9b168802b4412",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-9b168802b4412", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4ca29e51b7a08",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-4ca29e51b7a08", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3fc525de2f2dd",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-3fc525de2f2dd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-22a638b517f81",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-22a638b517f81", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f4c865e3a1f6",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-f4c865e3a1f6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e395291751937",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-e395291751937", comp.default)
        next()
      })
    }
  },
  {
    name: "v-720858f75c16f",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-720858f75c16f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-09f36f956d74b",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-09f36f956d74b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a5531b8e2d17e",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-a5531b8e2d17e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b7fcae3a921c6",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-b7fcae3a921c6", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-4c43ac661602c",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-4c43ac661602c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8d4909c9ececc",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-8d4909c9ececc", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-2a55dab2b65f6",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-2a55dab2b65f6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-90cf39ee4232f",
    path: "/zh/miniapp/mpvue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\miniapp\\mpvue.md").then(comp => {
        Vue.component("v-90cf39ee4232f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bbd1130b320e3",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-bbd1130b320e3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-7b7cb45bf1a07",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-7b7cb45bf1a07", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-2992fb29079a4",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-2992fb29079a4", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-31de3f099c3dd",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-31de3f099c3dd", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-fe99f814b9a61",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-fe99f814b9a61", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-874fa0905114c",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-874fa0905114c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-14002d1eea6cc",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-14002d1eea6cc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b64227993bbac",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-b64227993bbac", comp.default)
        next()
      })
    }
  },
  {
    name: "v-14a47b27513a7",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-14a47b27513a7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-d7aaa714dd2f8",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-d7aaa714dd2f8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-625498449447f",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-625498449447f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-184396f5b2d59",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-184396f5b2d59", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-14c68536a917b",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-14c68536a917b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e06ecc304a1f1",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-e06ecc304a1f1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-0639180ddeb7a",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-0639180ddeb7a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-686b917a96c25",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-686b917a96c25", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-45f1dfc35376a",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-45f1dfc35376a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6b81bad4e5942",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-6b81bad4e5942", comp.default)
        next()
      })
    }
  },
  {
    name: "v-03a722b9080e9",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-03a722b9080e9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-af541a2aefa86",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-af541a2aefa86", comp.default)
        next()
      })
    }
  },
  {
    name: "v-31debd329575",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-31debd329575", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a83116762bacc",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-a83116762bacc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-01d46108e291d",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-01d46108e291d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7b04bbbb1cfb8",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-7b04bbbb1cfb8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-2d6e9e6cece2b",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-2d6e9e6cece2b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-50cae583c29ad",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-50cae583c29ad", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-04988abd7a435",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-04988abd7a435", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-dd1911a587b87",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-dd1911a587b87", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-f979a648d71",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-f979a648d71", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-5252c19b05c74",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-5252c19b05c74", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-6fb31072c15ba",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-6fb31072c15ba", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d458a68884bb3",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-d458a68884bb3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e26996f33939f",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-e26996f33939f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/vue钩子函数.html",
    redirect: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html"
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]