export const admin_router = {
  path: "/admin",
  name: "admin",
  meta: {
    requiresAuth: true,
  },
  component: () =>
    import(
      /* webpackChunkName: "layout" */ "@/components/layouts/mainLayout/adminLayout.vue"
    ),
  children: [
    {
      path: "appconfigs",
      meta: {
        requiresAuth: true,
      },
      component: () =>
        import(
          /* webpackChunkName: "layout" */ "@/components/layouts/mainLayout/Layout.vue"
        ),
      children: [
        {
          path: "",
          name: "admin-list-appconfig",
          component: () =>
            import(
              /* webpackChunkName: "list-appConfig" */ "@/views/main/appConfig/AppConfigList.vue"
            ),
        },
        {
          path: "create",
          name: "admin-create-appconfig",
          component: () =>
            import(
              /* webpackChunkName: "create-appConfig" */ "@/views/main/appConfig/AppConfigCreate.vue"
            ),
        },
        {
          path: "edit/:id",
          name: "admin-edit-appconfig",
          component: () =>
            import(
              /* webpackChunkName: "edit-appConfig" */ "@/views/main/appConfig/AppConfigEdit.vue"
            ),
        },
        {
          path: ":id",
          name: "admin-detail-appconfig",
          component: () =>
            import(
              /* webpackChunkName: "detail-appConfig" */ "@/views/main/appConfig/AppConfigDetail.vue"
            ),
        },
        {
          path: "import",
          name: "admin-import-data-appconfig",
          component: () =>
            import(
              /* webpackChunkName: "import-data-appConfig" */ "@/views/main/appConfig/AppConfigImportData.vue"
            ),
        },
      ],
    },
    {
      path: "users",
      meta: {
        requiresAuth: true,
      },
      component: () =>
        import(
          /* webpackChunkName: "layout" */ "@/components/layouts/mainLayout/Layout.vue"
        ),
      children: [
        {
          path: "",
          name: "admin-list-user",
          component: () =>
            import(
              /* webpackChunkName: "list-user" */ "@/views/main/user/UserList.vue"
            ),
        },
        {
          path: "create",
          name: "admin-create-user",
          component: () =>
            import(
              /* webpackChunkName: "create-user" */ "@/views/main/user/UserCreate.vue"
            ),
        },
        {
          path: "edit/:id",
          name: "admin-edit-user",
          component: () =>
            import(
              /* webpackChunkName: "edit-user" */ "@/views/main/user/UserEdit.vue"
            ),
        },
        {
          path: ":id",
          name: "admin-detail-user",
          component: () =>
            import(
              /* webpackChunkName: "detail-user" */ "@/views/main/user/UserDetail.vue"
            ),
        },
        {
          path: "import",
          name: "admin-import-data-user",
          component: () =>
            import(
              /* webpackChunkName: "import-data-user" */ "@/views/main/user/UserImportData.vue"
            ),
        },
      ],
    },
    {
      path: "annonces",
      meta: {
        requiresAuth: true,
      },
      component: () =>
        import(
          /* webpackChunkName: "layout" */ "@/components/layouts/mainLayout/Layout.vue"
        ),
      children: [
        {
          path: "",
          name: "admin-list-annonce",
          component: () =>
            import(
              /* webpackChunkName: "list-annonce" */ "@/views/main/annonce/AnnonceList.vue"
            ),
        },
        {
          path: "create",
          name: "admin-create-annonce",
          component: () =>
            import(
              /* webpackChunkName: "create-annonce" */ "@/views/main/annonce/AnnonceCreate.vue"
            ),
        },
        {
          path: "edit/:id",
          name: "admin-edit-annonce",
          component: () =>
            import(
              /* webpackChunkName: "edit-annonce" */ "@/views/main/annonce/AnnonceEdit.vue"
            ),
        },
        {
          path: ":id",
          name: "admin-detail-annonce",
          component: () =>
            import(
              /* webpackChunkName: "detail-annonce" */ "@/views/main/annonce/AnnonceDetail.vue"
            ),
        },
        {
          path: "import",
          name: "admin-import-data-annonce",
          component: () =>
            import(
              /* webpackChunkName: "import-data-annonce" */ "@/views/main/annonce/AnnonceImportData.vue"
            ),
        },
      ],
    },
    {
      path: "interactions",
      meta: {
        requiresAuth: true,
      },
      component: () =>
        import(
          /* webpackChunkName: "layout" */ "@/components/layouts/mainLayout/Layout.vue"
        ),
      children: [
        {
          path: "",
          name: "admin-list-interaction",
          component: () =>
            import(
              /* webpackChunkName: "list-interaction" */ "@/views/main/interaction/InteractionList.vue"
            ),
        },
        {
          path: "create",
          name: "admin-create-interaction",
          component: () =>
            import(
              /* webpackChunkName: "create-interaction" */ "@/views/main/interaction/InteractionCreate.vue"
            ),
        },
        {
          path: "edit/:id",
          name: "admin-edit-interaction",
          component: () =>
            import(
              /* webpackChunkName: "edit-interaction" */ "@/views/main/interaction/InteractionEdit.vue"
            ),
        },
        {
          path: ":id",
          name: "admin-detail-interaction",
          component: () =>
            import(
              /* webpackChunkName: "detail-interaction" */ "@/views/main/interaction/InteractionDetail.vue"
            ),
        },
        {
          path: "import",
          name: "admin-import-data-interaction",
          component: () =>
            import(
              /* webpackChunkName: "import-data-interaction" */ "@/views/main/interaction/InteractionImportData.vue"
            ),
        },
      ],
    },
    {
      path: "interactionusers",
      meta: {
        requiresAuth: true,
      },
      component: () =>
        import(
          /* webpackChunkName: "layout" */ "@/components/layouts/mainLayout/Layout.vue"
        ),
      children: [
        {
          path: "",
          name: "admin-list-interactionuser",
          component: () =>
            import(
              /* webpackChunkName: "list-interactionUser" */ "@/views/main/interactionUser/InteractionUserList.vue"
            ),
        },
        {
          path: "create",
          name: "admin-create-interactionuser",
          component: () =>
            import(
              /* webpackChunkName: "create-interactionUser" */ "@/views/main/interactionUser/InteractionUserCreate.vue"
            ),
        },
        {
          path: "edit/:id",
          name: "admin-edit-interactionuser",
          component: () =>
            import(
              /* webpackChunkName: "edit-interactionUser" */ "@/views/main/interactionUser/InteractionUserEdit.vue"
            ),
        },
        {
          path: ":id",
          name: "admin-detail-interactionuser",
          component: () =>
            import(
              /* webpackChunkName: "detail-interactionUser" */ "@/views/main/interactionUser/InteractionUserDetail.vue"
            ),
        },
        {
          path: "import",
          name: "admin-import-data-interactionuser",
          component: () =>
            import(
              /* webpackChunkName: "import-data-interactionUser" */ "@/views/main/interactionUser/InteractionUserImportData.vue"
            ),
        },
      ],
    },
  ],
};
