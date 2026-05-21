var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_kecamatan_genteng_ar_1 = new ol.format.GeoJSON();
var features_kecamatan_genteng_ar_1 = format_kecamatan_genteng_ar_1.readFeatures(json_kecamatan_genteng_ar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kecamatan_genteng_ar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kecamatan_genteng_ar_1.addFeatures(features_kecamatan_genteng_ar_1);
var lyr_kecamatan_genteng_ar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kecamatan_genteng_ar_1, 
                style: style_kecamatan_genteng_ar_1,
                popuplayertitle: 'kecamatan_genteng_ar',
                interactive: true,
                title: '<img src="styles/legend/kecamatan_genteng_ar_1.png" /> kecamatan_genteng_ar'
            });
var format_Servicearealines_2 = new ol.format.GeoJSON();
var features_Servicearealines_2 = format_Servicearealines_2.readFeatures(json_Servicearealines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicearealines_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearealines_2.addFeatures(features_Servicearealines_2);
var lyr_Servicearealines_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servicearealines_2, 
                style: style_Servicearealines_2,
                popuplayertitle: 'Service area (lines)',
                interactive: true,
                title: '<img src="styles/legend/Servicearealines_2.png" /> Service area (lines)'
            });
var format_halte_pt_3 = new ol.format.GeoJSON();
var features_halte_pt_3 = format_halte_pt_3.readFeatures(json_halte_pt_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_halte_pt_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_halte_pt_3.addFeatures(features_halte_pt_3);
var lyr_halte_pt_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_halte_pt_3, 
                style: style_halte_pt_3,
                popuplayertitle: 'halte_pt',
                interactive: true,
                title: '<img src="styles/legend/halte_pt_3.png" /> halte_pt'
            });

lyr_Positron_0.setVisible(true);lyr_kecamatan_genteng_ar_1.setVisible(true);lyr_Servicearealines_2.setVisible(true);lyr_halte_pt_3.setVisible(true);
var layersList = [lyr_Positron_0,lyr_kecamatan_genteng_ar_1,lyr_Servicearealines_2,lyr_halte_pt_3];
lyr_kecamatan_genteng_ar_1.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Luas kel': 'Luas kel', 'Luas halte': 'Luas halte', '%Terjangka': '%Terjangka', '%tidak': '%tidak', });
lyr_Servicearealines_2.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', });
lyr_halte_pt_3.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'Informasi Halte__RUTE': 'Informasi Halte__RUTE', 'Informasi Halte__Destinasi': 'Informasi Halte__Destinasi', });
lyr_kecamatan_genteng_ar_1.set('fieldImages', {'full_id': '', 'Kecamatan': '', 'Kelurahan': '', 'Luas kel': '', 'Luas halte': '', '%Terjangka': '', '%tidak': '', });
lyr_Servicearealines_2.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'type': '', 'start': '', });
lyr_halte_pt_3.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'Informasi Halte__RUTE': 'TextEdit', 'Informasi Halte__Destinasi': 'TextEdit', });
lyr_kecamatan_genteng_ar_1.set('fieldLabels', {'full_id': 'no label', 'Kecamatan': 'inline label - always visible', 'Kelurahan': 'inline label - always visible', 'Luas kel': 'inline label - always visible', 'Luas halte': 'inline label - always visible', '%Terjangka': 'inline label - always visible', '%tidak': 'inline label - always visible', });
lyr_Servicearealines_2.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_halte_pt_3.set('fieldLabels', {'Nama_Halte': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'Sumber': 'inline label - always visible', 'Informasi Halte__RUTE': 'inline label - always visible', 'Informasi Halte__Destinasi': 'inline label - always visible', });
lyr_halte_pt_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});