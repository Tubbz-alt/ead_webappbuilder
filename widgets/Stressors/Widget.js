define([
    "dojo/_base/declare",
    "dijit/_WidgetsInTemplateMixin",
    "jimu/BaseWidget",
    "jimu/dijit/TabContainer",
    "./List",
    "jimu/utils",
    "esri/config",
    "esri/urlUtils",
    "dijit/ProgressBar",
    "dijit/form/NumberSpinner",
    "dojo/_base/lang",
    "dojo/on",
    "dojo/dom",
    "dojo/dom-style",
    "dijit/form/Select",
    "dijit/form/TextBox",
    "esri/geometry/jsonUtils",
    "dojo/_base/array",
    "dojo/_base/html",
    "dojo/query",
    "dojo/dom-construct"
],
    function (declare, _WidgetsInTemplateMixin, BaseWidget, TabContainer, List, utils, esriConfig, urlUtils, 
        ProgressBar, NumberSpinner, lang, on, dom, domStyle, Select, TextBox, jsonUtils, array, html, query, domConstruct, FacilitiesPane) {
        return declare([BaseWidget, _WidgetsInTemplateMixin], {
            // DemoWidget code goes here

            //please note that this property is be set by the framework when widget is loaded.
            //templateString: template,

            baseClass: 'jimu-widget-stressors',
            name: 'Stressors',
            

            //wigdget control events
            onChangeCalculateBy: function (newValue) {

                this.config.StressorURL;
            },

            onClearBtnClicked: function () {
                //this.map.removeAll();
            },            

            convertTime: function (unix_timestamp) {

            },

            onSolve: function (evt) {
                
            },

            postCreate: function () {
                this.inherited(arguments);
            },

            startup: function () {
                this.inherited(arguments);

                this.tabContainer = new TabContainer({
                    tabs: [
                        {
                            title: this.nls.tabStressor,
                            content: this.tabNode1
                        }
                    ],
                    selected: this.nls.conditions
                }, this.tabStressor);
                this.tabContainer.startup();

                var option = [];
                option[0] = {};
                option[0].label = "Chemical";
                option[0].value = "Chemical";

                option[1] = {};
                option[1].label = "Placard";
                option[1].value = "Placard";

                this.calculateBy.addOption(option);

                //switch layer
                this.own(on(this.calculateBy, "change", lang.hitch(this, this.onChangeCalculateBy)));
            },

            onOpen: function () {
                console.log('onOpen');
            },

            onClose: function () {
                console.log('onClose');
            },

            onMinimize: function () {
                console.log('onMinimize');
            },

            onMaximize: function () {
                console.log('onMaximize');
            },

            onSignIn: function (credential) {
                /* jshint unused:false*/
                console.log('onSignIn');
            },

            onSignOut: function () {
                console.log('onSignOut');
            },

            destroy: function () {
            }
        });
    });