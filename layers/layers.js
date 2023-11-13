var wms_layers = [];


        var lyr_blanco_0 = new ol.layer.Tile({
            'title': 'blanco',
            'type': 'base',
            'opacity': 0.100000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_SATELITAL_2 = new ol.layer.Tile({
            'title': 'SATELITAL',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_PPUU_3 = new ol.format.GeoJSON();
var features_PPUU_3 = format_PPUU_3.readFeatures(json_PPUU_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PPUU_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PPUU_3.addFeatures(features_PPUU_3);
var lyr_PPUU_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PPUU_3, 
                style: style_PPUU_3,
                interactive: true,
                title: '<img src="styles/legend/PPUU_3.png" /> PPUU'
            });
var format_DIVMEC1_4 = new ol.format.GeoJSON();
var features_DIVMEC1_4 = format_DIVMEC1_4.readFeatures(json_DIVMEC1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DIVMEC1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIVMEC1_4.addFeatures(features_DIVMEC1_4);
var lyr_DIVMEC1_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DIVMEC1_4, 
                style: style_DIVMEC1_4,
                interactive: true,
                title: '<img src="styles/legend/DIVMEC1_4.png" /> DIVMEC-1'
            });
var format_LAGOS_5 = new ol.format.GeoJSON();
var features_LAGOS_5 = format_LAGOS_5.readFeatures(json_LAGOS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAGOS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAGOS_5.addFeatures(features_LAGOS_5);
var lyr_LAGOS_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LAGOS_5, 
                style: style_LAGOS_5,
                interactive: true,
                title: '<img src="styles/legend/LAGOS_5.png" /> LAGOS'
            });
var format_RIOSSECUNDARIOS_6 = new ol.format.GeoJSON();
var features_RIOSSECUNDARIOS_6 = format_RIOSSECUNDARIOS_6.readFeatures(json_RIOSSECUNDARIOS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RIOSSECUNDARIOS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RIOSSECUNDARIOS_6.addFeatures(features_RIOSSECUNDARIOS_6);
var lyr_RIOSSECUNDARIOS_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RIOSSECUNDARIOS_6, 
                style: style_RIOSSECUNDARIOS_6,
                interactive: true,
                title: '<img src="styles/legend/RIOSSECUNDARIOS_6.png" /> RIOS SECUNDARIOS'
            });
var format_RIOSPRINCIPALES_7 = new ol.format.GeoJSON();
var features_RIOSPRINCIPALES_7 = format_RIOSPRINCIPALES_7.readFeatures(json_RIOSPRINCIPALES_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RIOSPRINCIPALES_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RIOSPRINCIPALES_7.addFeatures(features_RIOSPRINCIPALES_7);
var lyr_RIOSPRINCIPALES_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RIOSPRINCIPALES_7, 
                style: style_RIOSPRINCIPALES_7,
                interactive: true,
                title: '<img src="styles/legend/RIOSPRINCIPALES_7.png" /> RIOS PRINCIPALES'
            });
var format_VIASDECOMUNICACIN_8 = new ol.format.GeoJSON();
var features_VIASDECOMUNICACIN_8 = format_VIASDECOMUNICACIN_8.readFeatures(json_VIASDECOMUNICACIN_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIASDECOMUNICACIN_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIASDECOMUNICACIN_8.addFeatures(features_VIASDECOMUNICACIN_8);
var lyr_VIASDECOMUNICACIN_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VIASDECOMUNICACIN_8, 
                style: style_VIASDECOMUNICACIN_8,
                interactive: true,
                title: '<img src="styles/legend/VIASDECOMUNICACIN_8.png" /> VIAS DE COMUNICACIÓN'
            });
var format_VEGETACION_9 = new ol.format.GeoJSON();
var features_VEGETACION_9 = format_VEGETACION_9.readFeatures(json_VEGETACION_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VEGETACION_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VEGETACION_9.addFeatures(features_VEGETACION_9);
var lyr_VEGETACION_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VEGETACION_9, 
                style: style_VEGETACION_9,
                interactive: true,
    title: 'VEGETACION<br />\
    <img src="styles/legend/VEGETACION_9_0.png" /> Bosque denso semi siempre verde<br />\
    <img src="styles/legend/VEGETACION_9_1.png" /> Bosque denso siempre verde<br />\
    <img src="styles/legend/VEGETACION_9_2.png" /> Herbacea graminoide<br />\
    <img src="styles/legend/VEGETACION_9_3.png" /> Herbacea graminoide baja<br />\
    <img src="styles/legend/VEGETACION_9_4.png" /> Herbacea graminoide baja estacional<br />\
    <img src="styles/legend/VEGETACION_9_5.png" /> Herbacea graminoide baja estacional, Matorral deciduo<br />\
    <img src="styles/legend/VEGETACION_9_6.png" /> Herbacea graminoide intermedia<br />\
    <img src="styles/legend/VEGETACION_9_7.png" /> Hidromorfica de agua dulce, Matorral deciduo<br />\
    <img src="styles/legend/VEGETACION_9_8.png" /> Matorral deciduo<br />\
    <img src="styles/legend/VEGETACION_9_9.png" /> Matorral deciduo, Herbacea graminoide baja<br />\
    <img src="styles/legend/VEGETACION_9_10.png" /> Matorral deciduo, hidromorfica de agua dulce<br />\
    <img src="styles/legend/VEGETACION_9_11.png" /> Matorral deciduo, Matorral enano siempre verde<br />\
    <img src="styles/legend/VEGETACION_9_12.png" /> Matorral enano deciduo<br />\
    <img src="styles/legend/VEGETACION_9_13.png" /> Matorral enano siempre verde<br />\
    <img src="styles/legend/VEGETACION_9_14.png" /> Matorral enano siempre verde, Herbacea graminoide baja<br />\
    <img src="styles/legend/VEGETACION_9_15.png" /> Matorral ralo deciduo<br />\
    <img src="styles/legend/VEGETACION_9_16.png" /> <br />'
        });
var format_POBLACIONESnombres_10 = new ol.format.GeoJSON();
var features_POBLACIONESnombres_10 = format_POBLACIONESnombres_10.readFeatures(json_POBLACIONESnombres_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POBLACIONESnombres_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POBLACIONESnombres_10.addFeatures(features_POBLACIONESnombres_10);
var lyr_POBLACIONESnombres_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POBLACIONESnombres_10, 
                style: style_POBLACIONESnombres_10,
                interactive: true,
                title: '<img src="styles/legend/POBLACIONESnombres_10.png" /> POBLACIONES (nombres)'
            });
var format_POBLACIONES_11 = new ol.format.GeoJSON();
var features_POBLACIONES_11 = format_POBLACIONES_11.readFeatures(json_POBLACIONES_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POBLACIONES_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POBLACIONES_11.addFeatures(features_POBLACIONES_11);
var lyr_POBLACIONES_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POBLACIONES_11, 
                style: style_POBLACIONES_11,
                interactive: true,
                title: '<img src="styles/legend/POBLACIONES_11.png" /> POBLACIONES'
            });
var group_DRENAJES = new ol.layer.Group({
                                layers: [lyr_LAGOS_5,lyr_RIOSSECUNDARIOS_6,lyr_RIOSPRINCIPALES_7,],
                                title: "DRENAJES"});
var group_LIMITES = new ol.layer.Group({
                                layers: [lyr_PPUU_3,lyr_DIVMEC1_4,],
                                title: "LIMITES"});
var group_MAPABASE = new ol.layer.Group({
                                layers: [lyr_blanco_0,lyr_OpenStreetMap_1,lyr_SATELITAL_2,],
                                title: "MAPA BASE"});

lyr_blanco_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_SATELITAL_2.setVisible(true);lyr_PPUU_3.setVisible(true);lyr_DIVMEC1_4.setVisible(true);lyr_LAGOS_5.setVisible(false);lyr_RIOSSECUNDARIOS_6.setVisible(false);lyr_RIOSPRINCIPALES_7.setVisible(false);lyr_VIASDECOMUNICACIN_8.setVisible(false);lyr_VEGETACION_9.setVisible(false);lyr_POBLACIONESnombres_10.setVisible(false);lyr_POBLACIONES_11.setVisible(false);
var layersList = [group_MAPABASE,group_LIMITES,group_DRENAJES,lyr_VIASDECOMUNICACIN_8,lyr_VEGETACION_9,lyr_POBLACIONESnombres_10,lyr_POBLACIONES_11];
lyr_PPUU_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PPUUCC': 'PPUUCC', 'GGUUCC': 'GGUUCC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_DIVMEC1_4.set('fieldAliases', {'GGUUCC': 'GGUUCC', });
lyr_LAGOS_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'HYP': 'HYP', 'COD_HYP': 'COD_HYP', 'OBJETO': 'OBJETO', 'COD_OBJETO': 'COD_OBJETO', 'TEMA': 'TEMA', 'COD_TEMA': 'COD_TEMA', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'NOMBRE': 'NOMBRE', 'ALTURA': 'ALTURA', 'OBSERVACIO': 'OBSERVACIO', });
lyr_RIOSSECUNDARIOS_6.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'TEMA': 'TEMA', 'COD_HYP': 'COD_HYP', 'TIPO_HYP': 'TIPO_HYP', 'COD_TEMA': 'COD_TEMA', 'COD_OBJETO': 'COD_OBJETO', 'OBJETO': 'OBJETO', 'SHAPE_LENG': 'SHAPE_LENG', 'NAM': 'NAM', 'NM3': 'NM3', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Asignacion': 'Asignacion', 'NOMBRE': 'NOMBRE', });
lyr_RIOSPRINCIPALES_7.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'FolderPath': 'FolderPath', 'Shape_Leng': 'Shape_Leng', 'COD_OBJETO': 'COD_OBJETO', 'TEMA': 'TEMA', 'COD_HYP': 'COD_HYP', 'TYPO_HYP': 'TYPO_HYP', 'COD_TEMA': 'COD_TEMA', 'NMA': 'NMA', 'NM3': 'NM3', 'OBJETO': 'OBJETO', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'NOMBRE': 'NOMBRE', });
lyr_VIASDECOMUNICACIN_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OBJECTID_2': 'OBJECTID_2', 'Tipo': 'Tipo', 'Longitud': 'Longitud', 'LTN': 'LTN', 'COD_RST': 'COD_RST', 'TIPO_RST': 'TIPO_RST', 'WD1': 'WD1', 'COD_COS': 'COD_COS', 'AHA': 'AHA', 'OBJETO': 'OBJETO', 'COD_TEMA': 'COD_TEMA', 'TEMA': 'TEMA', 'NM3': 'NM3', 'COD_OBJETO': 'COD_OBJETO', 'CLASE': 'CLASE', 'NAM': 'NAM', 'Codigo': 'Codigo', 'Shape_Leng': 'Shape_Leng', });
lyr_VEGETACION_9.set('fieldAliases', {'gml_id': 'gml_id', 'CODVEG': 'CODVEG', 'TIPOS_VEG': 'TIPOS_VEG', 'ID_C': 'ID_C', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_POBLACIONESnombres_10.set('fieldAliases', {'nombre_dep': 'nombre_dep', 'nombre_c_1': 'nombre_c_1', 'id_unico': 'id_unico', 'tipo_area': 'tipo_area', 'poblacion_': 'poblacion_', 'viviendas_': 'viviendas_', 'Cat_A': 'Cat_A', 'Cat_B': 'Cat_B', 'tipo_pobla': 'tipo_pobla', 'nombre_c_2': 'nombre_c_2', 'poblacion1': 'poblacion1', 'clas_hab': 'clas_hab', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_POBLACIONES_11.set('fieldAliases', {'nombre_dep': 'nombre_dep', 'nombre_c_1': 'nombre_c_1', 'id_unico': 'id_unico', 'tipo_area': 'tipo_area', 'poblacion_': 'poblacion_', 'viviendas_': 'viviendas_', 'Cat_A': 'Cat_A', 'Cat_B': 'Cat_B', 'tipo_pobla': 'tipo_pobla', 'nombre_c_2': 'nombre_c_2', 'poblacion1': 'poblacion1', 'clas_hab': 'clas_hab', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_PPUU_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'PPUUCC': 'TextEdit', 'GGUUCC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_DIVMEC1_4.set('fieldImages', {'GGUUCC': 'TextEdit', });
lyr_LAGOS_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'HYP': 'TextEdit', 'COD_HYP': 'TextEdit', 'OBJETO': 'TextEdit', 'COD_OBJETO': 'TextEdit', 'TEMA': 'TextEdit', 'COD_TEMA': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'NOMBRE': 'TextEdit', 'ALTURA': 'TextEdit', 'OBSERVACIO': 'TextEdit', });
lyr_RIOSSECUNDARIOS_6.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'TEMA': 'TextEdit', 'COD_HYP': 'TextEdit', 'TIPO_HYP': 'TextEdit', 'COD_TEMA': 'TextEdit', 'COD_OBJETO': 'TextEdit', 'OBJETO': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'NAM': 'TextEdit', 'NM3': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Asignacion': 'Range', 'NOMBRE': 'TextEdit', });
lyr_RIOSPRINCIPALES_7.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'FolderPath': 'TextEdit', 'Shape_Leng': 'TextEdit', 'COD_OBJETO': 'TextEdit', 'TEMA': 'TextEdit', 'COD_HYP': 'TextEdit', 'TYPO_HYP': 'TextEdit', 'COD_TEMA': 'TextEdit', 'NMA': 'TextEdit', 'NM3': 'TextEdit', 'OBJETO': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_VIASDECOMUNICACIN_8.set('fieldImages', {'OBJECTID': '', 'OBJECTID_2': '', 'Tipo': '', 'Longitud': '', 'LTN': '', 'COD_RST': '', 'TIPO_RST': '', 'WD1': '', 'COD_COS': '', 'AHA': '', 'OBJETO': '', 'COD_TEMA': '', 'TEMA': '', 'NM3': '', 'COD_OBJETO': '', 'CLASE': '', 'NAM': '', 'Codigo': '', 'Shape_Leng': '', });
lyr_VEGETACION_9.set('fieldImages', {'gml_id': 'TextEdit', 'CODVEG': 'TextEdit', 'TIPOS_VEG': 'TextEdit', 'ID_C': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_POBLACIONESnombres_10.set('fieldImages', {'nombre_dep': 'TextEdit', 'nombre_c_1': 'TextEdit', 'id_unico': 'TextEdit', 'tipo_area': 'TextEdit', 'poblacion_': 'TextEdit', 'viviendas_': 'TextEdit', 'Cat_A': 'TextEdit', 'Cat_B': 'Range', 'tipo_pobla': 'TextEdit', 'nombre_c_2': 'TextEdit', 'poblacion1': 'TextEdit', 'clas_hab': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_POBLACIONES_11.set('fieldImages', {'nombre_dep': 'TextEdit', 'nombre_c_1': 'TextEdit', 'id_unico': 'TextEdit', 'tipo_area': 'TextEdit', 'poblacion_': 'TextEdit', 'viviendas_': 'TextEdit', 'Cat_A': 'TextEdit', 'Cat_B': 'Range', 'tipo_pobla': 'TextEdit', 'nombre_c_2': 'TextEdit', 'poblacion1': 'TextEdit', 'clas_hab': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_PPUU_3.set('fieldLabels', {});
lyr_DIVMEC1_4.set('fieldLabels', {});
lyr_LAGOS_5.set('fieldLabels', {});
lyr_RIOSSECUNDARIOS_6.set('fieldLabels', {});
lyr_RIOSPRINCIPALES_7.set('fieldLabels', {});
lyr_VIASDECOMUNICACIN_8.set('fieldLabels', {'OBJECTID': 'no label', 'OBJECTID_2': 'no label', 'Tipo': 'inline label', 'Longitud': 'no label', 'LTN': 'no label', 'COD_RST': 'no label', 'TIPO_RST': 'no label', 'WD1': 'no label', 'COD_COS': 'no label', 'AHA': 'no label', 'OBJETO': 'no label', 'COD_TEMA': 'no label', 'TEMA': 'no label', 'NM3': 'no label', 'COD_OBJETO': 'no label', 'CLASE': 'no label', 'NAM': 'no label', 'Codigo': 'no label', 'Shape_Leng': 'no label', });
lyr_VEGETACION_9.set('fieldLabels', {'gml_id': 'no label', 'CODVEG': 'no label', 'TIPOS_VEG': 'inline label', 'ID_C': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_POBLACIONESnombres_10.set('fieldLabels', {'nombre_dep': 'no label', 'nombre_c_1': 'inline label', 'id_unico': 'no label', 'tipo_area': 'no label', 'poblacion_': 'no label', 'viviendas_': 'no label', 'Cat_A': 'no label', 'Cat_B': 'no label', 'tipo_pobla': 'no label', 'nombre_c_2': 'no label', 'poblacion1': 'no label', 'clas_hab': 'no label', 'LAT': 'no label', 'LONG': 'no label', });
lyr_POBLACIONES_11.set('fieldLabels', {'nombre_dep': 'no label', 'nombre_c_1': 'inline label', 'id_unico': 'no label', 'tipo_area': 'no label', 'poblacion_': 'no label', 'viviendas_': 'no label', 'Cat_A': 'no label', 'Cat_B': 'no label', 'tipo_pobla': 'no label', 'nombre_c_2': 'no label', 'poblacion1': 'no label', 'clas_hab': 'no label', 'LAT': 'no label', 'LONG': 'no label', });
lyr_POBLACIONES_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});