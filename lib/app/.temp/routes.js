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
    name: "v-1d745d54b64ad",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\README.md").then(comp => {
        Vue.component("v-1d745d54b64ad", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-c7419ec8f3f0b",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-c7419ec8f3f0b", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-77a1d31ea6346",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-77a1d31ea6346", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-f6cbc545d04c1",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-f6cbc545d04c1", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-a2c0fd8ce9544",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-a2c0fd8ce9544", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bb98fe21b940d",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-bb98fe21b940d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-578b58765d36d",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-578b58765d36d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-876a3bd201bc8",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-876a3bd201bc8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e96a90a6e8b7f",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-e96a90a6e8b7f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ca16efc88e458",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-ca16efc88e458", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2ed20254e8e1",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-2ed20254e8e1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-33f827970ff43",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-33f827970ff43", comp.default)
        next()
      })
    }
  },
  {
    name: "v-faee75268d1c3",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-faee75268d1c3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-2490f638f46ca",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-2490f638f46ca", comp.default)
        next()
      })
    }
  },
  {
    name: "v-74d31c5bc1295",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-74d31c5bc1295", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9eaf51a4326bc",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-9eaf51a4326bc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-179dd5b5f4d5b",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-179dd5b5f4d5b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-ee464ce9ea681",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-ee464ce9ea681", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-c61e6bab483dc",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-c61e6bab483dc", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-e65a5dfc3f226",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-e65a5dfc3f226", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-fc2c06d72dbb5",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-fc2c06d72dbb5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e94e4e9e91cc6",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-e94e4e9e91cc6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e85b842d8dc7f",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-e85b842d8dc7f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1035f066e91fe",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-1035f066e91fe", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0dfbe6b0a77a3",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-0dfbe6b0a77a3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-62d4a1b1fa31",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-62d4a1b1fa31", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4e24edf268718",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-4e24edf268718", comp.default)
        next()
      })
    }
  },
  {
    name: "v-271a167c4dd55",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-271a167c4dd55", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b9d2a3d901e0d",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-b9d2a3d901e0d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-316a45c024444",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-316a45c024444", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2459e9db36a68",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-2459e9db36a68", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2fc8227ad518",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-2fc8227ad518", comp.default)
        next()
      })
    }
  },
  {
    name: "v-60d5b08d69d33",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-60d5b08d69d33", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f1e4f28af1841",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-f1e4f28af1841", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-ebc6cf5b9fe83",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-ebc6cf5b9fe83", comp.default)
        next()
      })
    }
  },
  {
    name: "v-816a2f1d573f2",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-816a2f1d573f2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-bd6e9bb858e18",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-bd6e9bb858e18", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0d61ae5d7a518",
    path: "/zh/miniapp/mpvue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\miniapp\\mpvue.md").then(comp => {
        Vue.component("v-0d61ae5d7a518", comp.default)
        next()
      })
    }
  },
  {
    name: "v-291c51869b49c",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-291c51869b49c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-35722628b47fc",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-35722628b47fc", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-bdf4b959a2e14",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-bdf4b959a2e14", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-cdd968748c506",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-cdd968748c506", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-e1de799218189",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-e1de799218189", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-945d06fc0e3de",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-945d06fc0e3de", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9b5203d8af6df",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-9b5203d8af6df", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9a0616d83a3f5",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-9a0616d83a3f5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7f9bb0fbef121",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-7f9bb0fbef121", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-a69d4a716b52b",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-a69d4a716b52b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-143cd59a785a6",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-143cd59a785a6", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-fe6a42a7e2793",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-fe6a42a7e2793", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-860e66ddcc8e",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-860e66ddcc8e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-30e0fa9b0a08f",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-30e0fa9b0a08f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-402bdb0dee709",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-402bdb0dee709", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-18e521ed4ed61",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-18e521ed4ed61", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-2a01a5a45840b",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-2a01a5a45840b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-209c1c6109ec1",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-209c1c6109ec1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ceccc4d3e7123",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-ceccc4d3e7123", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a2b4a5d55a13c",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-a2b4a5d55a13c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f9765798b8e32",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-f9765798b8e32", comp.default)
        next()
      })
    }
  },
  {
    name: "v-044d04a93bca6",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-044d04a93bca6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5569a299d1a8c",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-5569a299d1a8c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8d36817b8fd98",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-8d36817b8fd98", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-9ee632f99eead",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-9ee632f99eead", comp.default)
        next()
      })
    }
  },
  {
    name: "v-14ab33f4e5fa5",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-14ab33f4e5fa5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-a6bb3e1f1953d",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-a6bb3e1f1953d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-8429bbe2668ac",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-8429bbe2668ac", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-417f852ba7aa",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-417f852ba7aa", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-ccea69ddf9a3a",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-ccea69ddf9a3a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-5e609c22b4b2f",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-5e609c22b4b2f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1af66cedcef4c",
    path: "/zh/vue/diff.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\diff.md").then(comp => {
        Vue.component("v-1af66cedcef4c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-edebfc207586a",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-edebfc207586a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f4dc454875edc",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\ASUS\\Desktop\\study\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-f4dc454875edc", comp.default)
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