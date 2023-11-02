// 对外暴露配置路由（常量路由）全部用户可以访问
// 对外暴露配置路由（常量路由）全部用户可以访问
export const constantRoute = [
  // 登录
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login",
    meta: {
      title: "登录", //菜单标题
      hidden: true, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏,
      icon: "Promotion",
    },
  },
  {
    //  登录成功展示数据的路由
    path: "/",
    component: () => import("@/layout/index.vue"),
    name: "layout",
    meta: {
      title: "",
      hidden: false,
      icon: "",
    },
    redirect: "/home",
    children: [
      {
        path: "/home",
        meta: {
          title: "首页",
          icon: "HomeFilled",
        },
        component: () => import("@/views/home/index.vue"),
      },
    ],
  },
  {
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    meta: {
      title: "404",
      hidden: true,
      icon: "DocumentDelete",
    },
  },
  {
    path: "/screen",
    component: () => import("@/views/screen/index.vue"),
    name: "screen",
    meta: {
      hidden: true,
      title: "数据大屏",
      icon: "Platform",
    },
  },
  {
    path: "/:pathMatch(.*)",

    redirect: "/",
    name: "any",
    meta: {
      title: "任意路由",
      hidden: true,
      icon: "Dataline",
    },
  },
  {
    path: "/acl",
    component: () => import("../layout/index.vue"),
    name: "Acl",
    redirect: "/user",
    meta: {
      title: "权限管理",
      hidden: false,
      icon: "Lock",
    },
    children: [
      {
        path: "/user",
        component: () => import("../layout/acl/user/index.vue"),
        name: "user",
        meta: {
          title: "用户管理",
          hidden: false,
          icon: "User",
        },
      },
      {
        path: "/role",
        component: () => import("@/layout/acl/role/index.vue"),
        name: "Role",
        meta: {
          title: "角色管理",
          hidden: false,
          icon: "UserFilled",
        },
      },
      {
        path: "/premssion",
        component: () => import("../layout/acl/permssion/index.vue"),
        name: "Premssion",
        meta: {
          title: "菜单管理",
          hidden: false,
          icon: "Document",
        },
      },
    ],
  },
  {
    path: "/product",
    component: () => import("../layout/index.vue"),
    name: "Product",
    redirect: "/trademakerk",
    meta: {
      title: "商品管理",
      hidden: false,
      icon: "DataBoard",
    },
    children: [
      {
        path: "/trademakerk",
        component: () => import("../views/product/trade/index.vue"),
        name: "Trademark",
        meta: {
          title: "品牌管理",
          hidden: false,
          icon: "DataBoard",
        },
      },
      {
        path: "/attr",
        component: () => import("../views/product/attr/index.vue"),
        name: "Attr",
        meta: {
          title: "属性管理",
          hidden: false,
          icon: "DataBoard",
        },
      },
      {
        path: "/spu",
        component: () => import("../views/product/spu/index.vue"),
        name: "Spu",
        meta: {
          title: "Spu管理",
          hidden: false,
          icon: "DataBoard",
        },
      },
      {
        path: "/sku",
        component: () => import("../views/product/sku/index.vue"),
        name: "SKU",
        meta: {
          title: "Sku管理",
          hidden: false,
          icon: "DataBoard",
        },
      },
    ],
  },
];
