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
    name: "v-f449a770a663e",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\README.md").then(comp => {
        Vue.component("v-f449a770a663e", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-5f134ebd5b9df",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-5f134ebd5b9df", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-98a21221a937d",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-98a21221a937d", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-2df3a8af50fdd",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-2df3a8af50fdd", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-de29b9b7fcda3",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-de29b9b7fcda3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-016b885c1c1de",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-016b885c1c1de", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0bd6b2233e6a3",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-0bd6b2233e6a3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-534d2f4346192",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-534d2f4346192", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b851f4c71baa",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-b851f4c71baa", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dec214280dc1b",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-dec214280dc1b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e4e21b18a32ed",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-e4e21b18a32ed", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7db4f08fd5851",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-7db4f08fd5851", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7bbbbbb6afb78",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-7bbbbbb6afb78", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-81b4d2f1cd934",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-81b4d2f1cd934", comp.default)
        next()
      })
    }
  },
  {
    name: "v-121aa7f0534f4",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-121aa7f0534f4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-185482f08c832",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-185482f08c832", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9f451f2d3312a",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-9f451f2d3312a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-f9309726b9601",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-f9309726b9601", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-06e9b29ae0a3",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-06e9b29ae0a3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-1faa701750f0a",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-1faa701750f0a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-6d2897df7b6a2",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-6d2897df7b6a2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bd3de52250101",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-bd3de52250101", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7f38cfd9dd4fc",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-7f38cfd9dd4fc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cbf581e3dc75f",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-cbf581e3dc75f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-52ba1bfe6ad24",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-52ba1bfe6ad24", comp.default)
        next()
      })
    }
  },
  {
    name: "v-46d9897c83c4b",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-46d9897c83c4b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-68e63d10c778b",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-68e63d10c778b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7eb391bbbc09b",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-7eb391bbbc09b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a3fea8efafc35",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-a3fea8efafc35", comp.default)
        next()
      })
    }
  },
  {
    name: "v-422b5b33195f1",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-422b5b33195f1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-88985026bedf5",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-88985026bedf5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b8d904e5a2649",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-b8d904e5a2649", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7d377d6b054a3",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-7d377d6b054a3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-aed6ae3a0309f",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-aed6ae3a0309f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-7e516aa76f38b",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-7e516aa76f38b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b5356232b8257",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-b5356232b8257", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-7817c685237b6",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-7817c685237b6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3e758908634a",
    path: "/zh/miniapp/mpvue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\miniapp\\mpvue.md").then(comp => {
        Vue.component("v-3e758908634a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-60ab92cfec239",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-60ab92cfec239", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-2bf9e3eba3d12",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-2bf9e3eba3d12", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-4a6166feaa87a",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-4a6166feaa87a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-71d04256ac595",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-71d04256ac595", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-f4abd069c3697",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-f4abd069c3697", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-cb0aed727bbc",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-cb0aed727bbc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1cc86c4cea04a",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-1cc86c4cea04a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5190518557e66",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-5190518557e66", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1543193579a6",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-1543193579a6", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-cf44a41cf930c",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-cf44a41cf930c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-db0a9cba42efa",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-db0a9cba42efa", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-186253f09656c",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-186253f09656c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-44552413987a7",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-44552413987a7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f9d22c631ec78",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-f9d22c631ec78", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-e108e3dbedfaf",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-e108e3dbedfaf", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-ee5571ef88e96",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-ee5571ef88e96", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-da80fd97de984",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-da80fd97de984", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b57d42717df6b",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-b57d42717df6b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8b5b3ba8e57b8",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-8b5b3ba8e57b8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e44effa17571c",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-e44effa17571c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-33ce8ed0b6249",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-33ce8ed0b6249", comp.default)
        next()
      })
    }
  },
  {
    name: "v-abe3b7517387f",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-abe3b7517387f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7e9b3806fa6fa",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-7e9b3806fa6fa", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3b01972bbb3e",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-3b01972bbb3e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-d6d638d21cbe8",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-d6d638d21cbe8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ffada1cf90167",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-ffada1cf90167", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-8be991301f46f",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-8be991301f46f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-f81dceea3b088",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-f81dceea3b088", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-b2e7038bef71e",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-b2e7038bef71e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-cf040459e688e",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-cf040459e688e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-c6d301f9b9f4f",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-c6d301f9b9f4f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e2bc305085ca",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-e2bc305085ca", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fc16d5c4bc4a5",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-fc16d5c4bc4a5", comp.default)
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