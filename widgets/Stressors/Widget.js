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
    "esri/layers/ArcGISDynamicMapServiceLayer",
    'jimu/PanelManager',
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
        ProgressBar, NumberSpinner,ArcGISDynamicMapServiceLayer,  PanelManager,lang, on, dom, domStyle, Select, TextBox, jsonUtils, array, html, query,domConstruct) {
        return declare([BaseWidget, _WidgetsInTemplateMixin], {
            // DemoWidget code goes here

            //please note that this property is be set by the framework when widget is loaded.
            //templateString: template,

            baseClass: 'jimu-widget-stressors',
            name: 'Stressors',
            eadlayer: '',

            //wigdget control events
            onChangeCalculateBy: function (newValue) {
                //this.eadlayer.setVisibleLayers([]);
                this.eadlayer.setVisibleLayers([newValue]);
            },

            onClearBtnClicked: function () {
                /*array.forEach(this.map.layerIds, function(layerId) {
                  var layer = this.map.getLayer(layerId);
                  if (layerId == 'ead_stressor') {
                    this.map.removeLayer(layer);
                  } 
                }, this);*/
                //this.eadlayer.setVisibleLayers([]);
                if(this.eadlayer != ''){
                    this.map.removeLayer(this.eadlayer);
                }
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
                option[0].label = "Petroleum - Floating, Non-Persistant";
                option[0].value = 0;
                option[1] = {};
                option[1].label = "Petroleum - Floating, Persistant";
                option[1].value = 1;
                option[2] = {};
                option[2].label = "Petroleum - Non-Floating";
                option[2].value = 2;
                option[3] = {};
                option[3].label = "Chemical - Floating";
                option[3].value = 3;
                option[4] = {};
                option[4].label = "Chemical - Non-Floating";
                option[4].value = 4;
                option[5] = {};
                option[5].label = "Chemical - Dissolved";
                option[5].value = 5;
                option[6] = {};
                option[6].label = "Habitat Loss";
                option[6].value = 6;
                option[7] = {};
                option[7].label = "Thermal Change";
                option[7].value = 7;
                option[8] = {};
                option[8].label = "Sedimentation";
                option[8].value = 8;
                option[9] = {};
                option[9].label = "Terrigenous Pollution";
                option[9].value = 9;
                option[10] = {};
                option[10].label = "Invasive Species";
                option[10].value = 10;
                option[11] = {};
                option[11].label = "Eutrophication";
                option[11].value = 11;
                option[12] = {};
                option[12].label = "Over Exploitation of Resources";
                option[12].value = 12;
                option[13] = {};
                option[13].label = "Sea Level Rise";
                option[13].value = 13;
                option[14] = {};
                option[14].label = "Metals/Trace Elements";
                option[14].value = 14;
                option[15] = {};
                option[15].label = "Salinity Change";
                option[15].value = 15;
                option[16] = {};
                option[16].label = "Harmful Algae Blooms";
                option[16].value = 16;
                option[17] = {};
                option[17].label = "Dissolved Oxygen";
                option[17].value = 17;
                option[18] = {};
                option[18].label = "Turbidity";
                option[18].value = 18;

                //this.calculateBy.addOption(option);

                //switch layer
                //this.own(on(this.calculateBy, "change", lang.hitch(this, this.onChangeCalculateBy)));
            },
            onSolve: function(){

                this.eadlayer = new ArcGISDynamicMapServiceLayer(this.config.StressorURL, {id:"ead_stressor"});
                this.map.addLayer(this.eadlayer);
                //var t = WidgetManager.getInstance().getAllWidgets();
                //WidgetManager.getInstance().loadWidget(t);
                var t = {
                    "uri": "widgets/LayerList/Widget",
                    "version": "1.3",
                    "id": "widgets_LayerList_Widget_17",
                    "name": "LayerList",
                    "label": "Layer List",
                    "index": 2
                  }
                //PanelManager.getInstance().getAllPanels();
                PanelManager.getInstance().showPanel(t);
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