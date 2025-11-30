// ============================================
// BASE DE DATOS DE PRODUCTOS ADAPTOHEAL
// Actualizado desde CSV - 2025-11-29
// ============================================

const productsDatabase = {
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
    'castano-de-indias': {
        name: 'Castaño de Indias 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/castano-de-indias-150-capsulas-500mg-adaptoheal/',
        regularPrice: 787.39,
        price: 629.91,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-castano-de-indias-desktop_2x_abcc33c2-e0f0-4830-8d7c-e3ca4aed93b0.png'
    },
    'chitosan-extracto': {
        name: 'Chitosan Extracto 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/chitosan-extracto-150-capsulas-500mg-adaptoheal/',
        regularPrice: 1244.18,
        price: 995.34,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-chitosan-desktop_2x_da884046-6df6-4b39-8c2c-9ce746e11043.png'
    },
    'citrato-de-magnesio': {
        name: 'Citrato de Magnesio 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/citrato-de-magnesio-150-capsulas-500mg-adaptoheal/',
        regularPrice: 741.63,
        price: 593.3,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-citrato-de-magnesio-desktop_2x_9ac117a0-056f-4ea1-9693-c5bf00ea2766.png'
    },
    'colageno-hidrolizado': {
        name: 'Colágeno Hidrolizado 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/colageno-hidrolizado-150-capsulas-500mg-adaptoheal/',
        regularPrice: 617.61,
        price: 494.09,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-colageno-hidrolizado-desktop_2x_7ad69402-1e33-4231-8eae-a0fd5eea1c89.png'
    },
    'cordyceps-extracto': {
        name: 'Cordyceps Extracto 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/cordyceps/',
        regularPrice: 1004.03,
        price: 803.22,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-cordyceps-desktop_2x_a043eaaa-d716-4daf-9aa0-040eb953046e.png'
    },
    'dhea': {
        name: 'DHEA 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/dhea/',
        regularPrice: 1724.44,
        price: 1379.55,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-dhea-desktop_2x_e47b086e-17ea-4c6d-b9e5-aba431bb8bc0.png'
    },
    'diente-de-leon': {
        name: 'Diente de León 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/diente-de-leon-150-capsulas-500mg-adaptoheal/',
        regularPrice: 528.98,
        price: 423.18,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-diente-de-leon-desktop_2x_1a6647a4-4597-447b-93cc-8f9aa57f6c02.png'
    },
    'dong-quai': {
        name: 'Dong Quai 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/dong-quai-150-capsulas-500mg-adaptoheal/',
        regularPrice: 791.38,
        price: 633.1,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-dong-quai-desktop_2x_4119e96a-de44-40dd-a5eb-9fc9137d53fc.png'
    },
    'equinacea-purpurea': {
        name: 'Equinácea Purpurea 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/equinacea-purpurea-150-capsulas-500mg-adaptoheal/',
        regularPrice: 703.73,
        price: 562.98,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-equinacea-desktop_2x_407cf3cf-99e9-4f6b-a4f5-cc8937d0bb97.png'
    },
    'espino-blanco': {
        name: 'Espino Blanco 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/espino-blanco-150-capsulas-500mg-adaptoheal/',
        regularPrice: 505.41,
        price: 404.33,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-espino-blanco-desktop_2x_b9b4bae5-5b83-41bc-aa8d-16957700a96f.png'
    },
    'gardevil': {
        name: 'Gardevil 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/gardevil-150-capsulas-500mg-adaptoheal/',
        regularPrice: 437.99,
        price: 350.39,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-una-del-diablo-gardevil-desktop_2x_1a9bc816-b998-48ac-b7dc-fcddfcc58bd1.png'
    },
    'ginkgo-biloba': {
        name: 'Ginkgo Biloba 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/ginko-biloba-150-capsulas-500mg-adaptoheal/',
        regularPrice: 629.62,
        price: 503.7,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-ginkgo-biloba-desktop_2x_403f3483-8335-4def-afb1-0477c7525fe5.png'
    },
    'ginseng-brasileno': {
        name: 'Ginseng Brasileño 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/ginseng-brasileno-150-capsulas-500mg-adaptoheal/',
        regularPrice: 757.57,
        price: 606.06,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-ginseng-brasileno-desktop_2x_b3024d87-bab1-477f-89f5-2101dda15792.png'
    },
    'ginseng-panax': {
        name: 'Ginseng Panax 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/ginseng-panax-150-capsulas-500mg-adaptoheal/',
        regularPrice: 663.77,
        price: 531.02,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-ginseng-panax-desktop_2x_8a9b0ccc-e3f1-4e91-91b3-3c127b30366c.png'
    },
    'ginseng-siberiano': {
        name: 'Ginseng Siberiano 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/ginseng-siberiano-150-capsulas-500mg-adaptoheal/',
        regularPrice: 1068.99,
        price: 855.19,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-ginseng-siberiano-desktop_2x_1.png'
    },
    'golden-seal': {
        name: 'Golden Seal 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/golden-seal-150-capsulas-500mg-adaptoheal/',
        regularPrice: 896.84,
        price: 717.47,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-golden-seal-desktop_2x_477e076b-baeb-4ba1-b106-ce6d2462a538.png'
    },
    'gotu-kola': {
        name: 'Gotu Kola 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/gotu-kola-150-capsulas-500mg-adaptoheal/',
        regularPrice: 596.73,
        price: 477.38,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-gotu-kola-desktop_2x_9d41c98b-7605-44f5-ac57-8c91cc9ef2d5.png'
    },
    'hierba-del-sapo': {
        name: 'Hierba del Sapo 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/hierba-del-sapo-150-capsulas-500mg-adaptoheal/',
        regularPrice: 862.01,
        price: 689.61,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-hierba-del-sapo-desktop_2x_e80b8374-13aa-433a-b0d4-35e0acf24530.png'
    },
    'leuzea-carthamoides': {
        name: 'Leuzea Carthamoides 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/leuzea-carthamoides-150-capsulas-500mg-adaptoheal/',
        regularPrice: 579.92,
        price: 463.94,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-leuzea-carthamoides-desktop_2x_f5d141f9-2fbf-4e1b-9029-ec1ffd798052.png'
    },
    'maca': {
        name: 'Maca 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/maca-150-capsulas-500mg-adaptoheal/',
        regularPrice: 580.21,
        price: 464.17,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-maca-desktop_2x_949db5fb-7568-4b4f-8410-7fe11e18db14.png'
    },
    'maitake': {
        name: 'Maitake 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/maitake-150-capsulas-500mg-adaptoheal/',
        regularPrice: 769.33,
        price: 615.46,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-maitake-desktop_2x_690bc9e6-c464-423e-9119-eb58747dafb7.png'
    },
    'melissa': {
        name: 'Melissa 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/melissa-150-capsulas-500mg-adaptoheal/',
        regularPrice: 713.58,
        price: 570.86,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-melissa-desktop_2x_73c1f87f-5a75-4480-bd3b-b34dc867f6af.png'
    },
    'name-silvestre': {
        name: 'Ñame Silvestre 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/name-silvestre-150-capsulas-500mg-adaptoheal/',
        regularPrice: 598.42,
        price: 478.74,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-name-silvestre-desktop_2x_ca84920f-40e7-42d7-9d75-203ece2957ac.png'
    },
    'noni': {
        name: 'Noni 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/noni-150-capsulas-500mg-adaptoheal/',
        regularPrice: 668.35,
        price: 534.68,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-noni-desktop_2x_478a7a6b-93ea-4032-bb19-4a314488acea.png'
    },
    'palo-de-arco': {
        name: 'Palo de Arco 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/palo-de-arco-150-capsulas-500mg-adaptoheal/',
        regularPrice: 589.07,
        price: 471.26,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-palo-de-arco-desktop_2x_94186e4b-75dc-494b-8a11-b306fb3e2008.png'
    },
    'proteina-de-suero-de-leche-hidrolizada-sabor-chai': {
        name: 'Proteína de Suero de Leche Hidrolizada sabor Chai 907 g | Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/proteina-de-suero-de-leche-hidrolizada-sabor-chai-907-g-adaptoheal/',
        regularPrice: 2099.64,
        price: 1259.78,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-chai-desktop_1x_cb3746ec-66a1-4435-b1d3-3160ae7cad06.png'
    },
    'reishi': {
        name: 'Reishi 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/reishi-150-capsulas-500mg-adaptoheal/',
        regularPrice: 812.0,
        price: 649.6,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-reishi-desktop_2x_79a2111f-6f2c-4cbe-b571-492804121f66.png'
    },
    'rhodiola-rosea': {
        name: 'Rhodiola Rosea 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/rhodiola-rosea-150-capsulas-500mg-adaptoheal/',
        regularPrice: 575.78,
        price: 460.62,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-rhodiola-desktop_2x_78e90373-db64-4580-b885-30c82427fbc6.png'
    },
    'salvia': {
        name: 'Salvia 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/salvia-150-capsulas-500mg-adaptoheal/',
        regularPrice: 531.64,
        price: 425.31,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-salvia-desktop_2x_82a323ff-70c5-46b2-9e80-2276ad041347.png'
    },
    'sauzgatillo': {
        name: 'Sauzgatillo 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/sauzgatillo-150-capsulas-500mg-adaptoheal/',
        regularPrice: 599.75,
        price: 479.8,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-vitex-desktop_2x_56763c15-b9d7-4ca7-b807-a1995432f792.png'
    },
    'saw-palmetto': {
        name: 'Saw Palmetto 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/saw-palmeto-150-capsulas-500mg-adaptoheal/',
        regularPrice: 906.93,
        price: 725.54,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-saw-palmetto-desktop_2x_11ad4939-e755-4589-b208-3888918b1a14.png'
    },
    'schizandra': {
        name: 'Schizandra 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/schizandra-150-capsulas-500mg-adaptoheal/',
        regularPrice: 693.1,
        price: 554.48,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-schizandra-desktop_2x_b8e0a7fb-8899-4afb-9250-c1f226ac741f.png'
    },
    'shiitake': {
        name: 'Shiitake 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/shiitake-150-capsulas-500mg-adaptoheal/',
        regularPrice: 662.68,
        price: 530.14,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-shiitake-desktop_2x_2993d3ba-adb1-4c05-a703-c1d6f29f797f.png'
    },
    'suma': {
        name: 'Suma 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/suma-150-capsulas-500mg-adaptoheal/',
        regularPrice: 898.95,
        price: 674.21,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-suma-desktop_2x_e3018dc9-7fa0-43a9-94b7-25059ef81f87.png'
    },
    'tribulus-terrestris': {
        name: 'Tribulus Terrestris 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/tribulus-terrestris-150-capsulas-500mg-adaptoheal/',
        regularPrice: 619.14,
        price: 495.31,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-tribulus-terrestris-desktop_2x_7f59b0bb-fa34-4c2a-b603-0ee5ba51ca31.png'
    },
    'una-de-gato': {
        name: 'Uña de Gato 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/una-de-gato-150-capsulas-500mg-adaptoheal/',
        regularPrice: 562.61,
        price: 450.09,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-una-de-gato-desktop_2x_2930f00a-3e7b-4c88-92c6-4c62615a385d.png'
    },
    'vitamina-d': {
        name: 'Vitamina D3 y K2 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/vitamina-d3-k2/',
        regularPrice: 1840.53,
        price: 1472.42,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-vitamina-d3-k2-desktop_2x_fc155acf-eb62-4400-82b9-f433d415e330.png'
    },
    'yerba-mate': {
        name: 'Yerba Mate 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/yerba-mate-150-capsulas-500mg-adaptoheal/',
        regularPrice: 562.78,
        price: 450.22,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-yerba-mate-desktop_2x_d643f9d8-3471-4ac2-9972-582e511eec21.png'
    },
    'zarzaparrilla': {
        name: 'Zarzaparrilla 150 cápsulas | 500mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/zazaparrilla-150-capsulas-500mg-adaptoheal/',
        regularPrice: 590.55,
        price: 472.44,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/05/adaptoheal-mexico-productos-suplemento-alimenticio-zarzaparrilla-desktop_2x_3b365e42-b9a3-4049-86e9-981a978f4d28.png'
    },
    'kaminax---damiana-de-california': {
        name: 'Kaminax - Damiana de California 60 Capsulas | 350mg Adaptoheal®',
        url: 'https://www.adaptohealmx.com/producto/kaminax/',
        regularPrice: 518.01,
        price: 414.41,
        image: 'https://www.adaptohealmx.com/wp-content/uploads/2025/08/Kaminax-Front.webp'
    },
}

// Exportar para uso en el sistema
if (typeof module !== 'undefined' && module.exports) {
    module.exports = productsDatabase;
}
