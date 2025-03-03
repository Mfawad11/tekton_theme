import frappe

@frappe.whitelist()
def switch_theme(theme):
	if theme in ["Dark", "Light", "Automatic", "Tekton-blue"]:
		frappe.db.set_value("User", frappe.session.user, "desk_theme", theme)

import frappe

@frappe.whitelist()
def get_custom_sidebar_html():
    return frappe.render_template("tekton_theme/custom_templates/custom_sidebar.html")
