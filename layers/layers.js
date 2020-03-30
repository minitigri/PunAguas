var wms_layers = [];

var format_NUMERO_0 = new ol.format.GeoJSON();
var features_NUMERO_0 = format_NUMERO_0.readFeatures(json_NUMERO_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NUMERO_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NUMERO_0.addFeatures(features_NUMERO_0);
var lyr_NUMERO_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NUMERO_0, 
                style: style_NUMERO_0,
                interactive: true,
    title: 'NUMERO<br />\
    <img src="styles/legend/NUMERO_0_0.png" /> 0 - 0<br />\
    <img src="styles/legend/NUMERO_0_1.png" /> 0 - 4<br />\
    <img src="styles/legend/NUMERO_0_2.png" /> 4 - 6<br />\
    <img src="styles/legend/NUMERO_0_3.png" /> 6 - 8<br />\
    <img src="styles/legend/NUMERO_0_4.png" /> 8 - 10<br />\
    <img src="styles/legend/NUMERO_0_5.png" /> 10 - 12<br />\
    <img src="styles/legend/NUMERO_0_6.png" /> 12 - 13<br />'
        });
var format_COMBINADO_1 = new ol.format.GeoJSON();
var features_COMBINADO_1 = format_COMBINADO_1.readFeatures(json_COMBINADO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMBINADO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMBINADO_1.addFeatures(features_COMBINADO_1);
var lyr_COMBINADO_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COMBINADO_1, 
                style: style_COMBINADO_1,
                interactive: false,
                title: '<img src="styles/legend/COMBINADO_1.png" /> COMBINADO'
            });

lyr_NUMERO_0.setVisible(true);lyr_COMBINADO_1.setVisible(true);
var layersList = [lyr_NUMERO_0,lyr_COMBINADO_1];
lyr_NUMERO_0.set('fieldAliases', {'fid': 'ID', 'OBJECTID': 'FID', 'codigo_mun': 'CODIGO MUN', 'nombre_mun': 'Municipio', 'GlobalID': 'GID', 'Shape__Are': 'AREA', 'Shape__Len': 'PER', 'NUMPOINTS': 'Número de puntos', });
lyr_COMBINADO_1.set('fieldAliases', {'Nombre': 'Nombre', 'Ubicación': 'Ubicación', 'CUENCA_ANH': 'CUENCA_ANH', 'TIPO DE PU': 'TIPO DE PU', 'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', 'LONGITUD (': 'LONGITUD (', 'LATITUD (Y': 'LATITUD (Y', 'COTA (msnm': 'COTA (msnm', 'SISTEMA DE': 'SISTEMA DE', 'ORIGEN': 'ORIGEN', 'CUENCA HID': 'CUENCA HID', 'PROVINCIA': 'PROVINCIA', 'SISTEMA AC': 'SISTEMA AC', 'CAUDAL CAP': 'CAUDAL CAP', 'TIPO DE US': 'TIPO DE US', 'CAPACIDAD': 'CAPACIDAD', 'TRANSMISIV': 'TRANSMISIV', 'COEFICIENT': 'COEFICIENT', 'CONDUCTIVI': 'CONDUCTIVI', 'adicionale': 'adicionale', 'field_23': 'field_23', 'field_24': 'field_24', 'field_25': 'field_25', 'field_26': 'field_26', 'field_27': 'field_27', 'field_28': 'field_28', 'field_29': 'field_29', 'field_30': 'field_30', 'field_31': 'field_31', 'field_32': 'field_32', 'id': 'id', 'Inventario': 'Inventario', 'Inventar_1': 'Inventar_1', 'Inventar_2': 'Inventar_2', 'Inventar_3': 'Inventar_3', 'Inventar_4': 'Inventar_4', 'Inventar_5': 'Inventar_5', 'Inventar_6': 'Inventar_6', 'Inventar_7': 'Inventar_7', 'Inventar_8': 'Inventar_8', 'Inventar_9': 'Inventar_9', 'Inventar10': 'Inventar10', 'Inventar11': 'Inventar11', 'Inventar12': 'Inventar12', 'Inventar13': 'Inventar13', 'Inventar14': 'Inventar14', 'Inventar15': 'Inventar15', 'Inventar16': 'Inventar16', 'Inventar17': 'Inventar17', 'Inventar18': 'Inventar18', 'Inventar19': 'Inventar19', 'Inventar20': 'Inventar20', 'Inventar21': 'Inventar21', 'Inventar22': 'Inventar22', 'Inventar23': 'Inventar23', 'Inventar24': 'Inventar24', 'Inventar25': 'Inventar25', 'Inventar26': 'Inventar26', 'Inventar27': 'Inventar27', 'Inventar28': 'Inventar28', 'Inventar29': 'Inventar29', 'Inventar30': 'Inventar30', 'layer': 'layer', 'path': 'path', });
lyr_NUMERO_0.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'codigo_mun': 'Hidden', 'nombre_mun': 'TextEdit', 'GlobalID': 'Hidden', 'Shape__Are': 'Hidden', 'Shape__Len': 'Hidden', 'NUMPOINTS': 'TextEdit', });
lyr_COMBINADO_1.set('fieldImages', {'Nombre': 'TextEdit', 'Ubicación': 'TextEdit', 'CUENCA_ANH': 'TextEdit', 'TIPO DE PU': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'LONGITUD (': 'TextEdit', 'LATITUD (Y': 'TextEdit', 'COTA (msnm': 'TextEdit', 'SISTEMA DE': 'TextEdit', 'ORIGEN': 'TextEdit', 'CUENCA HID': 'TextEdit', 'PROVINCIA': 'TextEdit', 'SISTEMA AC': 'TextEdit', 'CAUDAL CAP': 'TextEdit', 'TIPO DE US': 'TextEdit', 'CAPACIDAD': 'TextEdit', 'TRANSMISIV': 'TextEdit', 'COEFICIENT': 'TextEdit', 'CONDUCTIVI': 'TextEdit', 'adicionale': 'TextEdit', 'field_23': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', 'field_26': 'TextEdit', 'field_27': 'TextEdit', 'field_28': 'TextEdit', 'field_29': 'TextEdit', 'field_30': 'TextEdit', 'field_31': 'TextEdit', 'field_32': 'TextEdit', 'id': 'TextEdit', 'Inventario': 'TextEdit', 'Inventar_1': 'TextEdit', 'Inventar_2': 'TextEdit', 'Inventar_3': 'TextEdit', 'Inventar_4': 'TextEdit', 'Inventar_5': 'TextEdit', 'Inventar_6': 'TextEdit', 'Inventar_7': 'TextEdit', 'Inventar_8': 'TextEdit', 'Inventar_9': 'TextEdit', 'Inventar10': 'TextEdit', 'Inventar11': 'TextEdit', 'Inventar12': 'TextEdit', 'Inventar13': 'TextEdit', 'Inventar14': 'TextEdit', 'Inventar15': 'TextEdit', 'Inventar16': 'TextEdit', 'Inventar17': 'TextEdit', 'Inventar18': 'TextEdit', 'Inventar19': 'TextEdit', 'Inventar20': 'TextEdit', 'Inventar21': 'TextEdit', 'Inventar22': 'TextEdit', 'Inventar23': 'TextEdit', 'Inventar24': 'TextEdit', 'Inventar25': 'TextEdit', 'Inventar26': 'TextEdit', 'Inventar27': 'TextEdit', 'Inventar28': 'TextEdit', 'Inventar29': 'TextEdit', 'Inventar30': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_NUMERO_0.set('fieldLabels', {'nombre_mun': 'inline label', 'NUMPOINTS': 'header label', });
lyr_COMBINADO_1.set('fieldLabels', {'Nombre': 'no label', 'Ubicación': 'no label', 'CUENCA_ANH': 'no label', 'TIPO DE PU': 'no label', 'DEPARTAMEN': 'no label', 'MUNICIPIO': 'no label', 'LONGITUD (': 'no label', 'LATITUD (Y': 'no label', 'COTA (msnm': 'no label', 'SISTEMA DE': 'no label', 'ORIGEN': 'no label', 'CUENCA HID': 'no label', 'PROVINCIA': 'no label', 'SISTEMA AC': 'no label', 'CAUDAL CAP': 'no label', 'TIPO DE US': 'no label', 'CAPACIDAD': 'no label', 'TRANSMISIV': 'no label', 'COEFICIENT': 'no label', 'CONDUCTIVI': 'no label', 'adicionale': 'no label', 'field_23': 'no label', 'field_24': 'no label', 'field_25': 'no label', 'field_26': 'no label', 'field_27': 'no label', 'field_28': 'no label', 'field_29': 'no label', 'field_30': 'no label', 'field_31': 'no label', 'field_32': 'no label', 'id': 'no label', 'Inventario': 'no label', 'Inventar_1': 'no label', 'Inventar_2': 'no label', 'Inventar_3': 'no label', 'Inventar_4': 'no label', 'Inventar_5': 'no label', 'Inventar_6': 'no label', 'Inventar_7': 'no label', 'Inventar_8': 'no label', 'Inventar_9': 'no label', 'Inventar10': 'no label', 'Inventar11': 'no label', 'Inventar12': 'no label', 'Inventar13': 'no label', 'Inventar14': 'no label', 'Inventar15': 'no label', 'Inventar16': 'no label', 'Inventar17': 'no label', 'Inventar18': 'no label', 'Inventar19': 'no label', 'Inventar20': 'no label', 'Inventar21': 'no label', 'Inventar22': 'no label', 'Inventar23': 'no label', 'Inventar24': 'no label', 'Inventar25': 'no label', 'Inventar26': 'no label', 'Inventar27': 'no label', 'Inventar28': 'no label', 'Inventar29': 'no label', 'Inventar30': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_COMBINADO_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});