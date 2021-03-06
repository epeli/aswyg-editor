
var $ = require("jquery");
var Viewmaster = require("viewmaster");

var Toolbar = Viewmaster.extend({

    className: "bb-toolbar",

    template: require("./Toolbar.hbs"),

    initialize: function() {
        var self = this;
        self.listenTo(self.model, "change", this.renderDirty.bind(this));

    },

    renderDirty: function() {
        if (this.model.hasUnpublishedChanges()) {
            this.$publish.addClass("dirty");
        } else {
            this.$publish.removeClass("dirty");
        }

        if (this.model.get("dirty")) {
            this.$saveDraft.addClass("dirty");
        } else {
            this.$saveDraft.removeClass("dirty");
        }
    },

    afterTemplate: function() {
        this.$publish = this.$(".publish");
        this.$saveDraft = this.$(".saveDraft");
        this.renderDirty();
    },

    context: function() {
        return {
            buttons: [
                {
                    title: "New",
                    action: "new",
                    buttonClass: "new fa fa-file"
                },
                {
                    title: "Open",
                    action: "open",
                    buttonClass: "fa fa-folder-open"
                },
                {
                    title: "Save draft",
                    action: "saveDraft",
                    buttonClass: "fa fa-save"
                },

                {
                    title: "Publish",
                    action: "publish",
                    buttonClass: "fa fa-cloud-upload"
                },

                {
                    title: "Preview in external window",
                    action: "externalPreview",
                    buttonClass: "fa fa-share-square-o"
                },

                {
                    title: "Delete",
                    action: "delete",
                    buttonClass: "fa fa-trash-o"
                },

                {
                    label: "H1",
                    title: "Heading 1",
                    action: "heading1",
                },

                {
                    label: "H2",
                    title: "Heading 2",
                    action: "heading2",
                },

                {
                    label: "H3",
                    title: "Heading 3",
                    action: "heading3",
                },

                {
                    title: "Bold",
                    action: "bold",
                    buttonClass: "fa fa-bold"
                },

                {
                    title: "Italics",
                    action: "italics",
                    buttonClass: "fa fa-italic"
                },

                {
                    title: "List",
                    action: "ul",
                    buttonClass: "fa fa-list"
                },

                {
                    title: "Numbered list",
                    action: "ol",
                    buttonClass: "fa fa-list-ol"
                },

                {
                    title: "Table",
                    action: "table",
                    buttonClass: "fa fa-table"
                },

                {
                    title: "Link",
                    action: "link",
                    buttonClass: "fa fa-link"
                },

                {
                    title: "Image",
                    action: "image",
                    buttonClass: "fa fa-camera"
                },


                {
                    title: "Help",
                    action: "help",
                    buttonClass: "fa fa-question"
                },

                {
                    title: "Logout",
                    action: "logout",
                    buttonClass: "fa fa-sign-out"
                }

            ]
        };
    },

    events: {
        "click button": function(e) {
            this.bubble($(e.target).data("action"), e);

        }
    }


});


module.exports = Toolbar;
