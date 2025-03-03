(() => {
  // ../tekton_theme/tekton_theme/public/js/theme-switcher.js
  frappe.provide("frappe.ui");
  frappe.ui.ThemeSwitcher = class CustomThemeSwitcher extends frappe.ui.ThemeSwitcher {
    constructor() {
      super();
    }
    fetch_themes() {
      return new Promise((resolve) => {
        this.themes = [
          {
            name: "light",
            label: "Frappe Light",
            info: "Light Theme"
          },
          {
            name: "dark",
            label: "Timeless Night",
            info: "Dark Theme"
          },
          {
            name: "automatic",
            label: "Automatic",
            info: "Uses system's theme to switch between light and dark mode"
          },
          {
            name: "tekton-blue",
            label: "Tekton-Blue",
            info: "Tekton Blue"
          }
        ];
        resolve(this.themes);
      });
    }
  };

  // ../tekton_theme/tekton_theme/public/js/custom_sidebar.js
  frappe.provide("frappe.ui");
  frappe.ui.setup_custom_sidebar = function() {
    frappe.call({
      method: "tekton_theme.api.api.get_custom_sidebar_html",
      callback: function(response) {
        $(".layout-side-section").html(response.message);
      }
    });
  };
  frappe.ui.toolbar.setup_sidebar = function() {
    frappe.ui.setup_custom_sidebar();
  };

  // ../tekton_theme/tekton_theme/public/js/tekton.bundle.js
  console.log("INJECTED FILE");
})();
//# sourceMappingURL=tekton.bundle.LOS6ZUJ5.js.map
