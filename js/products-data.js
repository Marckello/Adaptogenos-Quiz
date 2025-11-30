// ============================================
// BASE DE DATOS DE PRODUCTOS ADAPTOHEAL
// Actualizado desde CSV - 2025-11-29
// ============================================

const productsDatabase = {
    // ADAPTÓGENOS PRINCIPALES
    '5htp': {
        name: '5HTP 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/5htp/',
        regularPrice: 1724.44,
        price: 1379.55,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-5htp-desktop_2x_89020100-4bda-4da2-930b-1b9e59e98105.png'
    },
    'arandano-negro': {
        name: 'Arándano Negro 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/arandano-negro-150-capsulas-500mg-adaptoheal/',
        regularPrice: 653.29,
        price: 522.63,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-arandano-negro-desktop_2x_431c463a-f694-4f2a-a964-97934c22f11c.png'
    },
    'ashwagandha': {
        name: 'Ashwagandha 150 cápsulas | 500mg AdaptoBalance®',
        url: 'https://www.adaptohealmx.com/producto/ashwagandha-150-capsulas-500mg-adaptoheal/',
        regularPrice: 575.78,
        price: 460.62,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/ASH-FRONT.webp'
    },
    'astragalus': {
        name: 'Astrágalus 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/astragalus-150-capsulas-500mg-adaptoheal/',
        regularPrice: 682.57,
        price: 546.06,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-astragalus-desktop_2x_9ea87636-3345-4b34-b868-7f5c207eaf76.png'
    },
    'cardo-mariano': {
        name: 'Cardo Mariano 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/cardo-mariano-150-capsulas-500mg-adaptoheal/',
        regularPrice: 676.13,
        price: 540.9,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-desktop_2x_623871f2-df8c-42c0-a2ec-c60079b0681e.png'
    },
    'chitosan': {
        name: 'Chitosan Extracto 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/chitosan-extracto-150-capsulas-500mg-adaptoheal/',
        regularPrice: 1244.18,
        price: 995.34,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-chitosan-desktop_2x_da884046-6df6-4b39-8c2c-9ce746e11043.png'
    },
    'colageno': {
        name: 'Colágeno Hidrolizado 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/colageno-hidrolizado-150-capsulas-500mg-adaptoheal/',
        regularPrice: 617.61,
        price: 494.09,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-colageno-hidrolizado-desktop_2x_7ad69402-1e33-4231-8eae-a0fd5eea1c89.png'
    },
    'cordyceps': {
        name: 'Cordyceps Extracto 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/cordyceps/',
        regularPrice: 1004.03,
        price: 803.22,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-cordyceps-desktop_2x_a043eaaa-d716-4daf-9aa0-040eb953046e.png'
    },
    'curcuma': {
        name: 'Cúrcuma 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/curcuma-150-capsulas-500mg-adaptoheal/',
        regularPrice: 709.02,
        price: 567.22,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-curcuma-desktop_2x_1ad8cae1-ea45-42b8-affc-84f32e12a8f0.png'
    },
    'dong-quai': {
        name: 'Dong Quai 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/dong-quai-150-capsulas-500mg-adaptoheal/',
        regularPrice: 791.38,
        price: 633.1,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-dong-quai-desktop_2x_4119e96a-de44-40dd-a5eb-9fc9137d53fc.png'
    },
    'ginseng-siberiano': {
        name: 'Eleutherococcus 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/eleutherococcus-ginseng-siberiano-150-capsulas-500mg-adaptoheal/',
        regularPrice: 730.06,
        price: 584.05,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-ginseng-siberiano-desktop_2x_52cea53b-8f64-4e90-be39-4a1c9f5b59da.png'
    },
    'espino-blanco': {
        name: 'Espino Blanco 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/espino-blanco-150-capsulas-500mg-adaptoheal/',
        regularPrice: 751.97,
        price: 601.58,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-espino-blanco-desktop_2x_fcd40c64-d7d8-4adc-a318-a30ea24c5c28.png'
    },
    'ginkgo': {
        name: 'Ginkgo Biloba 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/ginkgo-biloba-150-capsulas-500mg-adaptoheal/',
        regularPrice: 770.31,
        price: 616.25,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-ginkgo-biloba-desktop_2x_c5c28868-1f53-483e-b7d6-c15e07d8bbda.png'
    },
    'ginseng-panax': {
        name: 'Ginseng Coreano 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/ginseng-coreano-panax-150-capsulas-500mg-adaptoheal/',
        regularPrice: 923.62,
        price: 738.9,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-ginseng-coreano-desktop_2x_de9d1e9a-2406-4076-9cef-30e7e01e7f5f.png'
    },
    'gotu-kola': {
        name: 'Gotu Kola 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/gotu-kola-150-capsulas-500mg-adaptoheal/',
        regularPrice: 692.51,
        price: 554,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-gotu-kola-desktop_2x_eb5b1833-4e36-44fe-a5e4-c90f10feab90.png'
    },
    'leuzea': {
        name: 'Leuzea (Rhaponticum) 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/leuzea-rhaponticum-carthamoides-150-capsulas-500mg-adaptoheal/',
        regularPrice: 932.11,
        price: 745.69,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-leuzea-desktop_2x_6b23b8f4-cf3f-4f29-bf13-5d2ef5a5f13a.png'
    },
    'maca': {
        name: 'Maca Andina 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/maca-andina-150-capsulas-500mg-adaptoheal/',
        regularPrice: 623.76,
        price: 499.01,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-maca-andina-desktop_2x_95f05dc7-0c89-4d4e-847f-fd32eb7d3f82.png'
    },
    'magnesio': {
        name: 'Citrato de Magnesio 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/citrato-de-magnesio-150-capsulas-500mg-adaptoheal/',
        regularPrice: 741.63,
        price: 593.3,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-citrato-de-magnesio-desktop_2x_9ac117a0-056f-4ea1-9693-c5bf00ea2766.png'
    },
    'melissa': {
        name: 'Melisa (Toronjil) 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/melisa-toronjil-150-capsulas-500mg-adaptoheal/',
        regularPrice: 566.94,
        price: 453.55,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-melisa-toronjil-desktop_2x_0b24835b-9b03-465d-b57c-69f08d2c5c82.png'
    },
    'msm': {
        name: 'MSM 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/msm-150-capsulas-500mg-adaptoheal/',
        regularPrice: 709.02,
        price: 567.22,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-msm-desktop_2x_c30b8fc4-d165-4b98-a6f8-1269e43c6e59.png'
    },
    'pasiflora': {
        name: 'Pasiflora 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/pasiflora-150-capsulas-500mg-adaptoheal/',
        regularPrice: 680.21,
        price: 544.17,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-pasiflora-desktop_2x_3c0e85f7-7bda-4ecc-a86d-5fdba9b35e67.png'
    },
    'psyllium': {
        name: 'Psyllium 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/psyllium-plantago-ovata-150-capsulas-500mg-adaptoheal/',
        regularPrice: 595.87,
        price: 476.7,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-psyllium-plantago-ovata-desktop_2x_1f13e09f-f4c9-48d5-ac39-a4de19f5c1d9.png'
    },
    'reishi': {
        name: 'Reishi Extracto 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/reishi-extracto-150-capsulas-500mg-adaptoheal/',
        regularPrice: 1004.03,
        price: 803.22,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-reishi-desktop_2x_5d22dc43-beff-4e9c-b3ec-ab50e76c96ce.png'
    },
    'rhodiola': {
        name: 'Rhodiola Rosea 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/rhodiola-rosea-150-capsulas-500mg-adaptoheal/',
        regularPrice: 890,
        price: 712,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-rhodiola-desktop_2x_78e90373-db64-4580-b885-30c82427fbc6.png'
    },
    'saw-palmetto': {
        name: 'Saw Palmetto 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/saw-palmetto-150-capsulas-500mg-adaptoheal/',
        regularPrice: 910.34,
        price: 728.27,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-saw-palmetto-desktop_2x_d3a3ee95-c481-422f-b99b-d8e5e506fc2b.png'
    },
    'sauzgatillo': {
        name: 'Sauzgatillo 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/sauzgatillo-150-capsulas-500mg-adaptoheal/',
        regularPrice: 896.79,
        price: 717.43,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-sauzgatillo-desktop_2x_ca5cb3be-6a58-453e-ae1b-ce6993c97e41.png'
    },
    'schizandra': {
        name: 'Schizandra 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/schizandra-150-capsulas-500mg-adaptoheal/',
        regularPrice: 905.67,
        price: 724.54,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-schizandra-desktop_2x_e03a4d23-0f75-414a-bb4a-97f30e5607a7.png'
    },
    'suma': {
        name: 'Suma (Pfaffia) 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/suma-pfaffia-paniculata-150-capsulas-500mg-adaptoheal/',
        regularPrice: 773.49,
        price: 618.79,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-suma-desktop_2x_2be1768b-7cda-4c9f-9ff8-ede62a47c9cb.png'
    },
    'tribulus': {
        name: 'Tribulus Terrestris 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/tribulus-terrestris-150-capsulas-500mg-adaptoheal/',
        regularPrice: 837.92,
        price: 670.34,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-tribulus-desktop_2x_af61b8d1-1ba2-444a-9fee-d5ae33ccbee1.png'
    },
    'yerba-mate': {
        name: 'Yerba Mate 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/yerba-mate-150-capsulas-500mg-adaptoheal/',
        regularPrice: 637.01,
        price: 509.61,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-yerba-mate-desktop_2x_c80fb0ba-a3e7-47d5-b4b9-c37c33ce9c70.png'
    }
};
