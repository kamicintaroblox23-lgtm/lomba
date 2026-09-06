/*!
 * YJ Store v1.0
 * Copyright (c) 2026 Team RyKAD
 * Licensed under MIT (https://github.com/team-rykad/yj-store/blob/main/LICENSE)
 */
/* ========================================================== */
/* 1. DICTIONARY TERJEMAHAN MULTI-BAHASA (ID, EN, MS, ZH)     */
/* ========================================================== */
const i18nDictionary = {
  id: {
    modalLangTitle: 'Pilih Bahasa Anda',
    modalLangSub: 'Pilih bahasa tampilan web yang Anda inginkan.',
    modalRegionTitle: 'Mana Negara / Wilayah Anda?',
    modalRegionSub: 'Pilih wilayah belanja untuk penyesuaian mata uang dan opsi pengiriman.',
    continueBtn: 'Lanjutkan',
    searchPlaceholder: 'Cari produk, merek, atau kategori...',
    bannerTitle: 'Pilihan Terbaik Hari Ini',
    bannerSub: 'Produk Berkualitas Tinggi Langsung Dalam Satu Klik',
    bannerCta: 'Jelajahi Promo',
    recommendTitle: 'Pilihan Terbaik Hari Ini',
    productHeadphone: 'Headphone Noise Cancelling Wireless',
    productSmartwatch: 'Smartwatch Premium Amoled Display',
    productGaming: 'Headset Gaming Surround 7.1',
    productSneakers: 'Sepatu Olahraga Running Sporty',
    soldText: 'Terjual',
    menuHome: 'Beranda',
    menuCart: 'Keranjang',
    menuOrders: 'Keranjang',
    navCart: 'Keranjang',
    menuChangeLang: 'Ganti Bahasa',
    menuChangeRegion: 'Pilih Negara / Wilayah',
    catElectronics: 'Elektronik',
    catAppliances: 'Peralatan Rumah Tangga',
    catAccessories: 'Aksesoris',
    catKecantikan: 'Kecantikan',
    catCleaners: 'Sanitasi Dan Perawatan Diri',
    catStationery: 'Alat Tulis Kantor',
    foot: 'Alas kaki',
    catUtensils: 'Peralatan Masak',
    catF: 'Pakaian',
    catBuku: 'Buku',
    catSnack: 'Cemilan',
    oleh: 'Buku & Komik',
    tas: 'Tas',
    catHealth: 'Kesehatan',
    bed: 'Perlengkapan tempat tidur',
    games: 'Perangkat gaming',
    menuSettings: "Pengaturan",
    menuAbout: "Tentang Kami",
    aboutTagline: "Belanja Cerdas, Hidup Mudah",
    aboutDesc: "YJ Store adalah platform belanja pintar yang menghubungkan Anda dengan produk terbaik dari marketplace terpercaya di Indonesia dan Malaysia. Kami menggunakan teknologi AI untuk memberikan rekomendasi personal yang sesuai dengan kebutuhan Anda.",
    aboutFeature1Title: "AI Shopping Assistant",
    aboutFeature1Desc: "Rekomendasi cerdas berdasarkan kebutuhan Anda",
    aboutFeature2Title: "Multi-Region",
    aboutFeature2Desc: "Belanja dari Indonesia dan Malaysia dalam satu tempat",
    settingsTitle: "Pengaturan",
    settingsSub: "Sesuaikan preferensi pencarian dan sistem Anda.",
    settingsHistoryEnable: "Aktifkan Riwayat Pencarian",
    settingsHistoryDesc: "Menyimpan kata kunci pencarian selamanya di perangkat ini.",
    settingsHistorySaved: "Riwayat Tersimpan",
    settingsHistoryClear: "Hapus Semua Search History",
    confirmClearHistory: "Yakin ingin menghapus seluruh riwayat pencarian? Tindakan ini tidak dapat dibatalkan.",
    closeBtn: "Tutup",
    cancelBtn: "Batal",
    clearBtn: "Hapus",
    aiButtonLabel: 'Tanya AI',
    aiButtonAria: 'Tanya AI Asisten',
    aiChatTitle: 'YJ Store AI V1.05',
    aiChatEmpty: 'Kotak percakapan AI akan ada di sini...',
    searchResultsTitle: 'Hasil Pencarian',
    searchResultsMeta: 'Produk yang cocok dengan pencarian Anda.',
    searchResultsEmpty: 'Tidak ada produk yang cocok dengan pencarian Anda.',
    marketplaceSource: 'Toko',
    sourceNote: 'Sumber',
    searchResultsFor: 'Hasil untuk',
    viewProductBtn: 'Lihat Detail',
    addToCart: '+ Keranjang',
    addedToCart: 'Berhasil ditambahkan ke keranjang!',
    imageWarning: 'Gagal mendapatkan gambar produk. Gambar yang ditampilkan mungkin tidak sesuai dengan produk asli. Silakan cek detail produk di marketplace.',
    cartTitle: 'Keranjang Belanja',
    cartEmptyTitle: 'Keranjang Anda Masih Kosong',
    cartEmptySub: 'Yuk, temukan produk terbaik pilihan Anda dan tambahkan ke sini!',
    orderSummary: 'Ringkasan Belanja',
    subtotal: 'Subtotal',
    shipping: 'Pengiriman',
    freeShipping: 'GRATIS ONGKIR',
    shippingUnknown: 'Tidak Diketahui',
    totalPrice: 'Total Harga',
    checkoutBtn: 'Checkout (Work in Progress)',
    clearCartBtn: '🗑️ Kosongkan Keranjang',
    viewOriginalProduct: 'Lihat Produk Asli',
    itemsCount: 'item dalam keranjang',
    qtyLabel: 'Jumlah',
    confirmClearCart: 'Yakin ingin mengosongkan seluruh keranjang belanja?',
    checkoutSuccessMsg: 'Terima kasih! Pesanan Anda sedang diproses.',
    viewInStore: 'Lihat di',
    badgeLocal: 'PILIHAN LOKAL',
    badgeBestSeller: 'BEST SELLER',
    badgePromo: 'PROMO',
    badgeFreeShipping: 'GRATIS ONGKIR',
    historyTitle: 'Pencarian Terakhir',
    aiGreeting: 'Halo! Saya asisten belanja pintar YJ Store. Tanyakan rekomendasi barang, perbandingan harga, atau cari promo terbaik hari ini!',
    aiInputPlaceholder: 'Tanya AI seputar produk...',
    aiClearChatConfirm: 'Bersihkan seluruh riwayat percakapan AI?',
    aiViewMoreBtn: 'Lihat Semua Hasil Pencarian',
    aiChipPhone: '📱 Rekomendasi HP',
    aiChipShoes: '👟 Sepatu Running',
    aiChipHealth: '💊 Promo Kesehatan',
    aiChipLaptop: '💻 Laptop Kuliah',
    aiPromptPhone: 'Rekomendasikan smartphone terbaik bergaransi resmi toko official',
    aiPromptShoes: 'Cari rekomendasi sepatu lari running yang nyaman dan awet',
    aiPromptHealth: 'Rekomendasi obat batuk dan suplemen daya tahan tubuh resmi',
    aiPromptLaptop: 'Rekomendasi laptop terbaik untuk kerja dan kuliah',
    aiReasonLabel: 'Alasan:',
    aiOfficialLabel: 'Official Store'
  },
  en: {
    modalLangTitle: 'Select Your Language',
    modalLangSub: 'Choose your preferred language for the website.',
    modalRegionTitle: 'Where is your location / region?',
    modalRegionSub: 'Choose shopping region to adjust currency and delivery options.',
    continueBtn: 'Continue',
    searchPlaceholder: 'Search products, brands, or categories...',
    bannerTitle: "Today's Featured Deals",
    bannerSub: 'High-Value Products Just One Click Away',
    bannerCta: 'Explore Deals',
    recommendTitle: 'Today’s Best Picks',
    productHeadphone: 'Wireless Noise Cancelling Headphones',
    productSmartwatch: 'Premium Smartwatch Amoled Display',
    productGaming: 'Gaming Headset Surround 7.1',
    productSneakers: 'Sporty Running Shoes',
    soldText: 'Sold',
    menuHome: 'Home',
    menuCart: 'Cart',
    menuOrders: 'Cart',
    navCart: 'Cart',
    menuChangeLang: 'Change Language',
    menuChangeRegion: 'Select Country / Region',
    catElectronics: 'Electronics',
    catAppliances: 'Home Appliances',
    catAccessories: 'Accessories',
    catKecantikan: 'Cosmetics',
    catCleaners: 'Sanitation and Care',
    catStationery: 'Office Supplies',
    foot: 'Footwear',
    catUtensils: 'Cooking Utensils',
    catF: 'Fashion',
    catBuku: 'Books',
    oleh: 'Books & Comics',
    catSnack: 'Snacks',
    tas: 'Bags',
    bed: 'Bedding',
    catHealth: 'Health',
    games: 'Gaming Gear',
    menuSettings: "Settings",
    menuAbout: "About Us",
    aboutTagline: "Smart Shopping, Easy Living",
    aboutDesc: "YJ Store is a smart shopping platform connecting you with the best products from trusted marketplaces in Indonesia and Malaysia. We use AI technology to deliver personalized recommendations tailored to your needs.",
    aboutFeature1Title: "AI Shopping Assistant",
    aboutFeature1Desc: "Smart recommendations based on your needs",
    aboutFeature2Title: "Multi-Region",
    aboutFeature2Desc: "Shop from Indonesia and Malaysia in one place",
    settingsTitle: "Settings",
    settingsSub: "Adjust your search preferences and system.",
    settingsHistoryEnable: "Enable Search History",
    settingsHistoryDesc: "Save search keywords permanently on this device.",
    settingsHistorySaved: "Saved History",
    settingsHistoryClear: "Clear All Search History",
    confirmClearHistory: "Are you sure you want to clear all search history? This action cannot be undone.",
    closeBtn: "Close",
    cancelBtn: "Cancel",
    clearBtn: "Clear",
    aiButtonLabel: 'Ask AI',
    aiButtonAria: 'Ask AI Assistant',
    aiChatTitle: 'YJ Store AI V1.05',
    aiChatEmpty: 'The AI conversation box will appear here...',
    searchResultsTitle: 'Search Results',
    searchResultsMeta: 'Products matching your search.',
    searchResultsEmpty: 'No products match your search.',
    marketplaceSource: 'Store',
    sourceNote: 'Source',
    searchResultsFor: 'Results for',
    viewProductBtn: 'View Details',
    addToCart: '+ Add to Cart',
    addedToCart: 'Successfully added to cart!',
    imageWarning: 'Failed to get the product image. The image may not match the original product. Please check the product detail on the marketplace.',
    cartTitle: 'Shopping Cart',
    cartEmptyTitle: 'Your Cart is Empty',
    cartEmptySub: 'Explore our top featured products and add them to your cart!',
    orderSummary: 'Order Summary',
    subtotal: 'Subtotal',
    shipping: 'Shipping',
    freeShipping: 'FREE SHIPPING',
    shippingUnknown: 'Unknown',
    totalPrice: 'Total Price',
    checkoutBtn: 'Checkout (Work in Progress)',
    clearCartBtn: '🗑️ Clear Cart',
    viewOriginalProduct: 'View Original Product',
    itemsCount: 'items in cart',
    qtyLabel: 'Qty',
    confirmClearCart: 'Are you sure you want to clear all items in your cart?',
    checkoutSuccessMsg: 'Thank you! Your order is being processed.',
    viewInStore: 'View on',
    badgeLocal: 'LOCAL CHOICE',
    badgeBestSeller: 'BEST SELLER',
    badgePromo: 'PROMO',
    badgeFreeShipping: 'FREE SHIPPING',
    historyTitle: 'Recent Searches',
    aiGreeting: 'Hello! I am your YJ Store Smart Shopping Assistant. Ask for product recommendations, price comparisons, or the best deals today!',
    aiInputPlaceholder: 'Ask AI about products, deals...',
    aiClearChatConfirm: 'Clear AI conversation history?',
    aiViewMoreBtn: 'View All Search Results',
    aiChipPhone: '📱 Smartphone Picks',
    aiChipShoes: '👟 Running Shoes',
    aiChipHealth: '💊 Health & Vitamins',
    aiChipLaptop: '💻 Work & Study Laptops',
    aiPromptPhone: 'Recommend the best official store smartphones with top value',
    aiPromptShoes: 'Find comfortable and durable running shoes recommendations',
    aiPromptHealth: 'Recommend pharmacy-certified cough medicines and vitamins',
    aiPromptLaptop: 'Recommend the best lightweight laptops for work and study',
    aiReasonLabel: 'Why this pick:',
    aiOfficialLabel: 'Official Store'
  },
  ms: {
    modalLangTitle: 'Pilih Bahasa Anda',
    modalLangSub: 'Pilih bahasa paparan laman web pilihan anda.',
    modalRegionTitle: 'Di manakah Lokasi / Wilayah Anda?',
    modalRegionSub: 'Pilih wilayah membeli-belah untuk penyelarasan mata wang.',
    continueBtn: 'Meneruskan',
    searchPlaceholder: 'Cari produk, jenama, atau kategori...',
    bannerTitle: 'Tawaran Hebat Hari Ini',
    bannerSub: 'Produk Berkualiti Tinggi Dalam Satu Klik',
    bannerCta: 'Terokai Tawaran',
    recommendTitle: 'Pilihan Terbaik Hari Ini',
    productHeadphone: 'Fon Telinga Pembatal Bunyi Tanpa Wayar',
    productSmartwatch: 'Jam Tangan Pintar Skrin Amoled',
    productGaming: 'Fon Telinga Permainan 7.1',
    productSneakers: 'Kasut Sukan Running',
    soldText: 'Terjual',
    menuHome: 'Utama',
    menuCart: 'Troli',
    menuOrders: 'Troli',
    navCart: 'Troli',
    menuChangeLang: 'Tukar Bahasa',
    menuChangeRegion: 'Pilih Negara / Wilayah',
    catElectronics: 'Elektronik',
    catAppliances: 'Peralatan Rumah',
    catAccessories: 'Aksesori',
    catKecantikan: 'Produk Kecantikan',
    catCleaners: 'Sanitasi dan Penjagaan Diri',
    catStationery: 'Alat Tulis Pejabat',
    foot: 'Alas Kaki',
    catUtensils: 'Peralatan Memasak',
    catF: 'Fesyen',
    catBuku: 'Buku',
    oleh: 'Buku & Komik',
    catSnack: 'Snek',
    tas: 'Beg',
    catHealth: 'Kesihatan',
    bed: 'Alatan Tempat Tidur',
    games: 'Peralatan Gaming',
    menuSettings: "Tetapan",
    menuAbout: "Tentang Kami",
    aboutTagline: "Membeli-belah Pintar, Hidup Mudah",
    aboutDesc: "YJ Store ialah platform membeli-belah pintar yang menghubungkan anda dengan produk terbaik dari marketplace dipercayai di Indonesia dan Malaysia. Kami menggunakan teknologi AI untuk memberi cadangan peribadi yang sesuai dengan keperluan anda.",
    aboutFeature1Title: "Pembantu AI Membeli-belah",
    aboutFeature1Desc: "Cadangan pintar berdasarkan keperluan anda",
    aboutFeature2Title: "Multi-Wilayah",
    aboutFeature2Desc: "Membeli-belah dari Indonesia dan Malaysia di satu tempat",
    settingsTitle: "Tetapan",
    settingsSub: "Sesuaikan keutamaan carian dan sistem anda.",
    settingsHistoryEnable: "Aktifkan Sejarah Carian",
    settingsHistoryDesc: "Simpan kata kunci carian selama-lamanya pada peranti ini.",
    settingsHistorySaved: "Sejarah Tersimpan",
    settingsHistoryClear: "Padam Semua Sejarah Carian",
    confirmClearHistory: "Adakah anda pasti mahu memadam semua sejarah carian? Tindakan ini tidak boleh ditarik balik.",
    closeBtn: "Tutup",
    cancelBtn: "Batal",
    clearBtn: "Padam",
    aiButtonLabel: 'Tanya AI',
    aiButtonAria: 'Tanya AI Pembantu',
    aiChatTitle: 'YJ Store AI V1.05',
    aiChatEmpty: 'Kotak perbualan AI akan muncul di sini...',
    searchResultsTitle: 'Hasil Carian',
    searchResultsMeta: 'Produk yang sepadan dengan carian anda.',
    searchResultsEmpty: 'Tiada produk yang sepadan dengan carian anda.',
    marketplaceSource: 'Kedai',
    sourceNote: 'Sumber',
    searchResultsFor: 'Hasil untuk',
    viewProductBtn: 'Lihat Terperinci',
    addToCart: '+ Tambah ke Troli',
    addedToCart: 'Berjaya ditambah ke troli!',
    imageWarning: 'Gagal mendapatkan gambar produk. Gambar yang dipaparkan mungkin tidak sesuai dengan produk asal. Sila semak butiran produk di marketplace.',
    cartTitle: 'Troli Membeli-belah',
    cartEmptyTitle: 'Troli Anda Masih Kosong',
    cartEmptySub: 'Mari terokai produk kami dan tambah ke sini!',
    orderSummary: 'Ringkasan Pesanan',
    subtotal: 'Subjumlah',
    shipping: 'Penghantaran',
    freeShipping: 'PENGHANTARAN PERCUMA',
    shippingUnknown: 'Tidak Diketahui',
    totalPrice: 'Jumlah Harga',
    checkoutBtn: 'Checkout (Work in Progress)',
    clearCartBtn: '🗑️ Kosongkan Troli',
    viewOriginalProduct: 'Lihat Produk Asal',
    itemsCount: 'barangan dalam troli',
    qtyLabel: 'Kuantiti',
    confirmClearCart: 'Adakah anda pasti mahu mengosongkan semua barangan dalam troli?',
    checkoutSuccessMsg: 'Terima kasih! Pesanan anda sedang diproses.',
    viewInStore: 'Lihat di',
    badgeLocal: 'PILIHAN TEMPATAN',
    badgeBestSeller: 'TERLARIS',
    badgePromo: 'PROMO',
    badgeFreeShipping: 'PENGHANTARAN PERCUMA',
    historyTitle: 'Carian Terkini',
    aiGreeting: 'Halo! Saya pembantu pintar YJ Store. Tanya saya cadangan produk, perbandingan harga, atau promosi terbaik hari ini!',
    aiInputPlaceholder: 'Tanya AI tentang produk...',
    aiClearChatConfirm: 'Padam seluruh sejarah perbualan AI?',
    aiViewMoreBtn: 'Lihat Semua Hasil Carian',
    aiChipPhone: '📱 Syor Telefon Pintar',
    aiChipShoes: '👟 Kasut Running',
    aiChipHealth: '💊 Kesihatan & Vitamin',
    aiChipLaptop: '💻 Laptop Belajar & Kerja',
    aiPromptPhone: 'Sila cadangkan telefon pintar terbaik berbaloi dengan jaminan kedai rasmi',
    aiPromptShoes: 'Cari cadangan kasut larian yang selesa dan tahan lama',
    aiPromptHealth: 'Cadangan ubat batuk berkesan dan suplemen kesihatan kedai rasmi',
    aiPromptLaptop: 'Cadangan komputer riba terbaik untuk urusan kerja dan pembelajaran',
    aiReasonLabel: 'Sebab pilihan:',
    aiOfficialLabel: 'Kedai Rasmi'
  },
  zh: {
    modalLangTitle: '选择您的语言',
    modalLangSub: '选择您偏好的网站显示语言。',
    modalRegionTitle: '请选择您所在的国家/地区',
    modalRegionSub: '选择购物地区以调整货币和配送选项。',
    continueBtn: '继续',
    searchPlaceholder: '搜索商品、品牌、类目...',
    bannerTitle: '今日精选好物',
    bannerSub: '高性价比商品一键直达',
    bannerCta: '探索优惠',
    recommendTitle: '今日精选推荐',
    productHeadphone: '无线降噪头戴耳机',
    productSmartwatch: '高清AMOLED智能手表',
    productGaming: '7.1环绕声电竞耳机',
    productSneakers: '时尚透气运动跑鞋',
    soldText: '已售',
    menuHome: '首页',
    menuCart: '购物车',
    menuOrders: '购物车',
    navCart: '购物车',
    menuChangeLang: '切换语言',
    menuChangeRegion: '选择国家 / 地区',
    catElectronics: '数码电子',
    catAppliances: '家用电器',
    catAccessories: '数码配件',
    catKecantikan: '美妆护肤',
    catCleaners: '清洁个护',
    catStationery: '办公文具',
    foot: '鞋靴鞋履',
    catUtensils: '厨房炊具',
    catF: '潮流服饰',
    catBuku: '书籍读物',
    oleh: '图书漫画',
    catSnack: '休闲零食',
    tas: '箱包配饰',
    catHealth: '健康保健',
    bed: '床上家纺',
    games: '游戏装备',
    menuSettings: "设置",
    menuAbout: "关于我们",
    aboutTagline: "智能购物，轻松生活",
    aboutDesc: "YJ Store 是一个智能购物平台，为您连接印度尼西亚和马来西亚可信赖商城的优质商品。我们运用AI技术，为您提供量身定制的个性化推荐。",
    aboutFeature1Title: "AI购物助手",
    aboutFeature1Desc: "基于您需求的智能推荐",
    aboutFeature2Title: "多地区",
    aboutFeature2Desc: "在一个平台畅购印尼和马来西亚",
    settingsTitle: "设置",
    settingsSub: "调整您的搜索首选项和系统。",
    settingsHistoryEnable: "启用搜索历史",
    settingsHistoryDesc: "在此设备上永久保存搜索关键字。",
    settingsHistorySaved: "已保存的历史记录",
    settingsHistoryClear: "清除所有搜索历史",
    confirmClearHistory: "确定要清除所有搜索历史吗？此操作无法撤销。",
    closeBtn: "关闭",
    cancelBtn: "取消",
    clearBtn: "清除",
    aiButtonLabel: '问 AI',
    aiButtonAria: '询问 AI 助手',
    aiChatTitle: 'YJ Store AI V1.05',
    aiChatEmpty: 'AI 对话框将显示在这里...',
    searchResultsTitle: '搜索结果',
    searchResultsMeta: '与搜索相关的商品。',
    searchResultsEmpty: '没有符合您搜索条件的商品。',
    marketplaceSource: '店铺',
    sourceNote: '来源',
    searchResultsFor: '搜索结果：',
    viewProductBtn: '查看详情',
    addToCart: '+ 加入购物车',
    addedToCart: '已成功加入购物车！',
    imageWarning: '未能获取产品图片。当前显示的图片可能与原始产品不完全一致。请在平台详情页核对商品信息。',
    cartTitle: '我的购物车',
    cartEmptyTitle: '购物车空空如也',
    cartEmptySub: '快去探索今日精选好物，把它带回家吧！',
    orderSummary: '订单摘要',
    subtotal: '商品小计',
    shipping: '运费',
    freeShipping: '全场包邮',
    shippingUnknown: '未知',
    totalPrice: '合计总额',
    checkoutBtn: 'Checkout (Work in Progress)',
    clearCartBtn: '🗑️ 清空购物车',
    viewOriginalProduct: '查看原商品页面',
    itemsCount: '件商品',
    qtyLabel: '数量',
    confirmClearCart: '确定要清空购物车中的所有商品吗？',
    checkoutSuccessMsg: '感谢您的订购！订单正在处理中。',
    viewInStore: '在平台查看',
    badgeLocal: '本地精选',
    badgeBestSeller: '热卖爆款',
    badgePromo: '限时特惠',
    badgeFreeShipping: '全场包邮',
    historyTitle: '最近搜索',
    aiGreeting: '您好！我是 YJ Store 智能导购助手。随时向我咨询商品推荐、比价建议或今日限时优惠！',
    aiInputPlaceholder: '向 AI 咨询商品、优惠...',
    aiClearChatConfirm: '确定要清空所有 AI 对话记录吗？',
    aiViewMoreBtn: '查看全部搜索结果',
    aiChipPhone: '📱 推荐热销手机',
    aiChipShoes: '👟 舒适跑鞋推荐',
    aiChipHealth: '💊 健康保健特惠',
    aiChipLaptop: '💻 办公学习笔记本',
    aiPromptPhone: '请推荐几款当前最值得购买的高性价比官方正品手机',
    aiPromptShoes: '请推荐几款舒适透气且缓震出色的专业跑步鞋',
    aiPromptHealth: '请推荐官方药房常备的止咳化痰药与增强免疫力保健品',
    aiPromptLaptop: '请推荐适合学生党和上班族的高性能轻薄笔记本电脑',
    aiReasonLabel: '推荐理由:',
    aiOfficialLabel: '官方正品'
  }
};

/* ========================================================== */
/* 2. DICTIONARY MATA UANG & REGION                            */
/* ========================================================== */
const regionDictionary = {
  id: { currency: 'Rp', rate: 1, name: 'Indonesia' },
  sg: { currency: 'S$', rate: 0.000085, name: 'Singapore' },
  my: { currency: 'RM', rate: 0.00028, name: 'Malaysia' },
  cn: { currency: '¥', rate: 0.00045, name: 'China' }
};

function formatCurrency(amount, regionKey = null) {
  const region = regionKey || getCurrentRegion();
  const regionData = regionDictionary[region] || regionDictionary.id;
  const num = Number(amount || 0);

  if (region === 'my') {
    // If the price is already in RM (e.g. from MY_PRODUCT_CATALOG), format directly
    if (num > 0 && num < 10000) {
      const formatted = num >= 100 ? Math.round(num).toLocaleString() : (num % 1 === 0 ? num.toString() : num.toFixed(2));
      return `RM ${formatted}`;
    }
    const converted = num * regionData.rate;
    const formatted = converted >= 100 ? Math.round(converted).toLocaleString() : (converted % 1 === 0 ? Math.round(converted).toString() : converted.toFixed(2));
    return `RM ${formatted}`;
  }

  const converted = Math.round(num * regionData.rate);
  return `${regionData.currency} ${converted.toLocaleString()}`;
}


function getClientDirectMarketplaceUrl(marketplace, productName, itemId = '', region = null) {
  const activeRegion = region || (typeof getCurrentRegion === 'function' ? getCurrentRegion() : 'id');
  const enc = encodeURIComponent(productName || 'product');
  const mp = (marketplace || 'Shopee').toLowerCase();
  const slug = String(productName || 'product')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 70) || 'product';
  const rawItemId = String(itemId || '');
  const numericId = Number(rawItemId.replace(/\D/g, '')) || 0;
  const isLikelyRealProductId = rawItemId.length > 4 && numericId >= 1000 && !rawItemId.toLowerCase().startsWith('dyn-') && !rawItemId.toLowerCase().startsWith('serp-') && !rawItemId.toLowerCase().includes('kitkat') && !rawItemId.toLowerCase().includes('indomie') && !rawItemId.toLowerCase().includes('headphone') && !rawItemId.toLowerCase().includes('smartwatch') && !rawItemId.toLowerCase().includes('sepatu') && !rawItemId.toLowerCase().includes('tas');

  // --- Malaysia region: route to MY marketplaces ---
  if (activeRegion === 'my') {
    if (mp.includes('shopee')) return `https://shopee.com.my/search?keyword=${enc}`;
    if (mp.includes('lazada')) return `https://www.lazada.com.my/catalog/?q=${enc}`;
    if (mp.includes('mudah')) return `https://www.mudah.my/malaysia/search?q=${enc}`;
    // Tokopedia not available in MY — fallback to Shopee MY
    return `https://shopee.com.my/search?keyword=${enc}`;
  }

  // --- Indonesia region (default) ---
  if (mp.includes('shopee')) {
    return isLikelyRealProductId
      ? `https://shopee.co.id/product/${numericId}/item?title=${enc}`
      : `https://shopee.co.id/search?keyword=${enc}`;
  } else if (mp.includes('tokopedia')) {
    return isLikelyRealProductId
      ? `https://www.tokopedia.com/${slug}-${numericId}`
      : `https://www.tokopedia.com/search?st=product&q=${encodeURIComponent(productName || 'product')}`;
  } else if (mp.includes('lazada')) {
    return isLikelyRealProductId
      ? `https://www.lazada.co.id/products/${slug}-i${numericId}.html`
      : `https://www.lazada.co.id/catalog/?q=${encodeURIComponent(productName || 'product')}`;
  } else {
    return isLikelyRealProductId
      ? `https://shopee.co.id/product/${numericId}/item?title=${enc}`
      : `https://shopee.co.id/search?keyword=${enc}`;
  }
}

/* Category Smart Fallback Images (No watch for shoes or food!) */
function getCategoryFallbackImage(category = '', keywords = []) {
  const cat = String(category).toLowerCase();
  const kw = (keywords || []).join(' ').toLowerCase();
  const combined = `${cat} ${kw}`;

  if (/phone|hp|smartphone|laptop|tablet|electronics|elektronik/.test(combined)) return 'assets/phone1.png';
  if (/watch|smartwatch|wearable|jam tangan/.test(combined)) return 'assets/phone2.png';
  if (/audio|headphone|earphone|headset|speaker/.test(combined)) return 'assets/Accessories1.png';
  if (/shoe|sepatu|sneaker|running|sandal|footwear/.test(combined)) return 'assets/foot.png';
  if (/bag|tas|backpack|ransel/.test(combined)) return 'assets/tas.png';
  if (/food|snack|makanan|indomie|mie|cokelat/.test(combined)) return 'assets/snacknobg.png';
  if (/health|obat|vitamin|suplemen|kesehatan/.test(combined)) return 'assets/obat.png';
  if (/beauty|skincare|serum|sunscreen|kecantikan/.test(combined)) return 'assets/kecatikan1.png';
  if (/home|dapur|kitchen|wajan|panci/.test(combined)) return 'assets/utensils.png';
  if (/sleep|bed|kasur|bantal|sprei/.test(combined)) return 'assets/bed.png';
  if (/book|buku|novel|komik/.test(combined)) return 'assets/books.png';
  if (/fashion|baju|kaos|pakaian/.test(combined)) return 'assets/fashion.png';
  return 'assets/Accessories1.png';
}


function getQueryImageByCategory(query = '', category = '') {
  const q = String(query || '').toLowerCase();
  const cat = String(category || '').toLowerCase();
  const combined = `${q} ${cat}`.trim();

  if (/\bwatch\b|smartwatch|jam\s+tangan|huawei\s+watch|apple\s+watch|garmin|fitbit|gt\s*5\s*pro|gt5\s*pro|watch\s+gt/.test(combined) || cat.includes('wearable')) {
      return 'assets/placeholder.svg';
  }
  if (/skincare|serum|moisturizer|beauty|sunscreen|cream|face\s*wash|facial\s*wash|facial|cleanser|sabun|kecantikan/.test(combined) || cat.includes('skincare') || cat.includes('beauty')) {
    return 'assets/placeholder.svg';
  }
  if (/flashdisk|flash\s*drive|usb\s*drive|pendrive|pen\s*drive|thumb\s*drive|otg|micro\s*sd|sd\s*card|memory\s*card|harddisk|hdd|ssd/.test(combined)) {
    return 'assets/placeholder.svg';
  }
  if (/phone|hp|handphone|smartphone|xiaomi|samsung|iphone|android|galaxy|oppo|vivo|realme/.test(combined) || cat.includes('electronics')) {
    return 'assets/placeholder.svg';
  }

  if (/camera|kamera|dslr|mirrorless|canon|nikon|sony/.test(combined) || cat.includes('camera')) {
    return 'assets/placeholder.svg';
  }
  if (/laptop|notebook|komputer|macbook/.test(combined)) {
    return 'assets/placeholder.svg';
  }
  if (/tablet|ipad/.test(combined)) {
    return 'assets/placeholder.svg';
  }
  if (/headphone|earphone|headset|speaker|bluetooth|tws|audio|mic/.test(combined) || cat.includes('audio')) {
    return 'assets/placeholder.svg';
  }
  if (/skincare|serum|moisturizer|beauty|sunscreen|cream|face wash|kecantikan/.test(combined) || cat.includes('skincare')) {
    return 'assets/placeholder.svg';
  }
  if (/sepatu|shoes|sneaker|running|sandals|kasut|sport/.test(combined) || cat.includes('shoes')) {
    return 'assets/placeholder.svg';
  }
  if (/tas|bag|backpack|ransel|selempang/.test(combined) || cat.includes('bag')) {
    return 'assets/placeholder.svg';
  }
  if (/indomie|mie\s+goreng|mi\s+goreng|mie\s+kuah|mi\s+kuah|mie instan|mi instan/.test(combined)) {
    return 'assets/placeholder.svg';
  }
  if (/kitkat|snack|food|cokelat|wafer/.test(combined) || cat.includes('food')) {
    return 'assets/placeholder.svg';
  }

  return '';
}

function showImageWarningNotice(productName = '') {
  const lang = getCurrentLang();
  const text = (i18nDictionary[lang] && i18nDictionary[lang].imageWarning) || 'Failed to get the product image. The image may not match the original product. Please check the product detail on the marketplace.';

  const toast = document.getElementById('cartToast');
  const msgEl = document.getElementById('cartToastMsg');
  if (toast && msgEl) {
    msgEl.innerText = text;
    toast.classList.add('show');
    clearTimeout(toast._warningTimeout);
    toast._warningTimeout = setTimeout(() => toast.classList.remove('show'), 3600);
  } else {
    console.warn(`[IMAGE] ${productName || 'Product'} image could not be loaded: ${text}`);
  }
}

// Ultimate fallback: inline SVG placeholder (always works, no network needed)
const PLACEHOLDER_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f0f0f0'/%3E%3Crect x='150' y='80' width='100' height='80' rx='8' fill='%23d0d0d0'/%3E%3Ccircle cx='200' cy='75' r='20' fill='%23d0d0d0'/%3E%3Ctext x='200' y='200' text-anchor='middle' fill='%23999' font-size='14' font-family='sans-serif'%3EGambar Tidak Tersedia%3C/text%3E%3C/svg%3E`;

function handleProductImageError(img, fallbackUrl, productName = '', category = '') {
  if (!img) return;
  // Prevent infinite error loops: track which URLs we've already tried
  if (!img._triedUrls) img._triedUrls = new Set();
  const currentSrc = img.getAttribute('src') || '';
  img._triedUrls.add(currentSrc);

  if (!img._unsplashRequested && window.location.protocol.startsWith('http')) {
    img._unsplashRequested = true;
    const imageQuery = `${productName} ${category}`.trim();
    fetch(`/api/image-search?q=${encodeURIComponent(imageQuery)}`)
      .then(response => response.ok ? response.json() : null)
      .then(data => {
        const unsplashUrl = data && isUsableProductImage(data.image) ? data.image : '';
        if (unsplashUrl && !img._triedUrls.has(unsplashUrl)) {
          img._triedUrls.add(unsplashUrl);
          const renderedUrl = window.location.protocol.startsWith('http')
            ? `/api/image-proxy?url=${encodeURIComponent(unsplashUrl)}`
            : unsplashUrl;
          img.setAttribute('src', renderedUrl);
          setUnsplashAttribution(img, data);
          return;
        }
        useStaticImageFallback();
      })
      .catch(() => useStaticImageFallback());
    return;
  }

  useStaticImageFallback();

  function useStaticImageFallback() {
    // Product cards must never substitute a category asset for a missing product image.
    const chain = [fallbackUrl].filter(Boolean);

    const nextUrl = chain.find(url => !img._triedUrls.has(url));

    if (nextUrl) {
      img._triedUrls.add(nextUrl);
      img.setAttribute('src', nextUrl);
    } else {
      img.removeEventListener('error', img._errorHandler);
      img.removeAttribute('src');
      img.classList.add('image-unavailable');
    }
  }
}

function setUnsplashAttribution(img, imageData) {
  const host = img.closest('.product-img-box') || img.parentElement;
  if (!host) return;
  if (getComputedStyle(host).position === 'static') host.style.position = 'relative';
  // Get photographer name from data or image-search response
  const name = imageData?.photographerName || imageData?.photographer || img.getAttribute('data-photographer') || '';
  if (!name) return;
  let attribution = host.querySelector('.image-attribution');
  if (!attribution) {
    attribution = document.createElement('div');
    attribution.className = 'image-attribution';
    host.appendChild(attribution);
  }
  attribution.innerHTML = `Photo by <strong>${name}</strong> on <em>Unsplash</em>`;
  attribution.style.cssText = 'position:absolute;bottom:4px;left:4px;right:4px;z-index:10;padding:3px 6px;border-radius:4px;background:rgba(0,0,0,0.7);color:#fff;font-size:9px;line-height:1.3;text-align:center;pointer-events:none;';
}

function hydrateProductImages(root = document) {
  if (!window.location.protocol.startsWith('http')) return;
  const catMap = { food: 'snack food', electronics: 'smartphone', fashion: 'fashion shoes', beauty: 'skincare', health: 'supplements', home: 'kitchen', gaming: 'gaming', books: 'books', accessories: 'accessories', general: 'product' };
  const imgs = root.querySelectorAll('img[data-needs-image="true"]');
  imgs.forEach(img => {
    if (img._apiImageRequested) return;
    // Check cache first
    const cat = img.getAttribute('data-category') || '';
    const cached = window._imageCache?.[cat];
    if (cached) {
      img.src = cached.url;
      img.removeAttribute('data-needs-image');
      setUnsplashAttribution(img, cached.data);
      return;
    }
    img._apiImageRequested = true;
    const query = catMap[cat] || cat || img.getAttribute('alt') || '';
    if (!query) return;
    fetch(`/api/image-search?q=${encodeURIComponent(query)}`)
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data && data.image) {
          const proxyUrl = `/api/image-proxy?url=${encodeURIComponent(data.image)}`;
          if (!window._imageCache) window._imageCache = {};
          window._imageCache[cat] = { url: proxyUrl, data };
          img.src = proxyUrl;
          img.removeAttribute('data-needs-image');
          setUnsplashAttribution(img, data);
        }
      })
      .catch(() => {});
  });
}

function hydrateSearchImages(root = document) {
  if (!window.location.protocol.startsWith('http')) return;
  root.querySelectorAll('img[data-search-image="true"]').forEach(img => {
    if (img.dataset.imageRequested === 'true') return;
    if (img.src && !img.src.includes('data:image/gif')) return; // already has a real image
    img.dataset.imageRequested = 'true';
    const query = img.dataset.name || '';
    if (!query) return;
    fetch(`/api/image-search?q=${encodeURIComponent(query)}`)
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data && data.image) {
          img.src = `/api/image-proxy?url=${encodeURIComponent(data.image)}`;
          setUnsplashAttribution(img, data);
        }
      })
      .catch(() => {});
  });
}

/* ========================================================== */
/* 3a. KATALOG MALAYSIA (MY) — Shopee MY & Lazada MY         */
/* ========================================================== */
const MY_PRODUCT_CATALOG = [
  // ── ELECTRONICS ─────────────────────────────────────────────
  {
    id: 'my-phone-01',
    category: 'electronics',
    name: 'Samsung Galaxy S24 FE 5G 8/256GB Official Warranty Malaysia',
    name_id: 'Samsung Galaxy S24 FE 5G 8/256GB Garansi Resmi Malaysia',
    name_en: 'Samsung Galaxy S24 FE 5G 8/256GB Official Warranty Malaysia',
    name_ms: 'Samsung Galaxy S24 FE 5G 8/256GB Waranti Rasmi Malaysia',
    name_zh: '三星 Galaxy S24 FE 5G 8/256GB 马来西亚官方保修',
    image: 'assets/placeholder.svg',
    keywords: ['samsung', 'galaxy', 's24', 'fe', '5g', 'smartphone', 'android', 'hp', 'phone'],
    price: 1899,
    originalPrice: 2199,
    rating: 4.8,
    sold: 3200,
    isPromo: true,
    shop: 'Samsung Malaysia Official',
    marketplace: 'Shopee MY',
    location: 'Kuala Lumpur',
    isOfficial: true,
    brand: 'samsung',
    url: 'https://shopee.com.my/search?keyword=Samsung+Galaxy+S24+FE+5G'
  },
  {
    id: 'my-phone-02',
    category: 'electronics',
    name: 'Xiaomi 14T Pro 5G 12/512GB Leica Camera Official MY Set',
    name_id: 'Xiaomi 14T Pro 5G 12/512GB Kamera Leica Set Resmi MY',
    name_en: 'Xiaomi 14T Pro 5G 12/512GB Leica Camera Official MY Set',
    name_ms: 'Xiaomi 14T Pro 5G 12/512GB Kamera Leica Set Rasmi MY',
    name_zh: '小米 14T Pro 5G 12/512GB 徕卡镜头 大马行货',
    image: 'assets/placeholder.svg',
    keywords: ['xiaomi', '14t', 'pro', '5g', 'leica', 'smartphone', 'phone', 'hp', 'android'],
    price: 2199,
    originalPrice: 2499,
    rating: 4.9,
    sold: 1800,
    isPromo: true,
    shop: 'Xiaomi Malaysia Official',
    marketplace: 'Shopee MY',
    location: 'Petaling Jaya',
    isOfficial: true,
    brand: 'xiaomi',
    url: 'https://shopee.com.my/search?keyword=Xiaomi+14T+Pro'
  },
  {
    id: 'my-phone-03',
    category: 'electronics',
    name: 'Apple iPhone 15 128GB Original Malaysia Warranty',
    name_id: 'Apple iPhone 15 128GB Garansi Resmi Malaysia',
    name_en: 'Apple iPhone 15 128GB Original Malaysia Warranty',
    name_ms: 'Apple iPhone 15 128GB Waranti Asal Malaysia',
    name_zh: '苹果 iPhone 15 128GB 马来西亚正品行货',
    image: 'assets/placeholder.svg',
    keywords: ['apple', 'iphone', '15', 'ios', 'smartphone', 'phone'],
    price: 3799,
    originalPrice: 4099,
    rating: 4.9,
    sold: 2100,
    isPromo: true,
    shop: 'Apple Malaysia Authorised Reseller',
    marketplace: 'Shopee MY',
    location: 'Kuala Lumpur',
    isOfficial: true,
    brand: 'apple',
    url: 'https://shopee.com.my/search?keyword=Apple+iPhone+15'
  },
  {
    id: 'my-laptop-01',
    category: 'electronics',
    name: 'ASUS Vivobook 15X OLED Intel Core i5-12500H 16GB 512GB SSD',
    name_id: 'ASUS Vivobook 15X OLED Intel Core i5 16GB 512GB SSD',
    name_en: 'ASUS Vivobook 15X OLED Intel Core i5-12500H 16GB 512GB SSD',
    name_ms: 'ASUS Vivobook 15X OLED Intel Core i5 16GB 512GB SSD',
    name_zh: '华硕 Vivobook 15X OLED i5 16GB 512GB 固态硬盘',
    image: 'assets/placeholder.svg',
    keywords: ['asus', 'vivobook', 'laptop', 'notebook', 'oled', 'i5', 'intel'],
    price: 2999,
    originalPrice: 3499,
    rating: 4.7,
    sold: 950,
    isPromo: true,
    shop: 'ASUS Malaysia Official',
    marketplace: 'Lazada MY',
    location: 'Shah Alam',
    isOfficial: true,
    brand: 'asus',
    url: 'https://www.lazada.com.my/catalog/?q=ASUS+Vivobook+15X+OLED'
  },
  {
    id: 'my-laptop-02',
    category: 'electronics',
    name: 'Lenovo IdeaPad Slim 5 AMD Ryzen 5 16GB 512GB Official MY',
    name_id: 'Lenovo IdeaPad Slim 5 AMD Ryzen 5 16GB 512GB Resmi MY',
    name_en: 'Lenovo IdeaPad Slim 5 AMD Ryzen 5 16GB 512GB Official MY',
    name_ms: 'Lenovo IdeaPad Slim 5 AMD Ryzen 5 16GB 512GB Rasmi MY',
    name_zh: '联想 IdeaPad Slim 5 AMD Ryzen 5 16GB 大马行货',
    image: 'assets/placeholder.svg',
    keywords: ['lenovo', 'ideapad', 'slim', 'laptop', 'amd', 'ryzen', 'notebook'],
    price: 2599,
    originalPrice: 2999,
    rating: 4.6,
    sold: 720,
    isPromo: true,
    shop: 'Lenovo Malaysia Official',
    marketplace: 'Shopee MY',
    location: 'Kuala Lumpur',
    isOfficial: true,
    brand: 'lenovo',
    url: 'https://shopee.com.my/search?keyword=Lenovo+IdeaPad+Slim+5'
  },
  {
    id: 'my-headphone-01',
    category: 'electronics',
    name: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphone Official MY',
    name_id: 'Sony WH-1000XM5 Headphone Noise Cancelling Garansi Resmi MY',
    name_en: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphone Official MY',
    name_ms: 'Sony WH-1000XM5 Fon Kepala Penghapus Bising Waranti Rasmi MY',
    name_zh: '索尼 WH-1000XM5 无线降噪耳机 马来西亚行货',
    image: 'assets/placeholder.svg',
    keywords: ['sony', 'wh1000xm5', 'headphone', 'noise cancelling', 'wireless', 'bluetooth', 'audio'],
    price: 1299,
    originalPrice: 1499,
    rating: 4.9,
    sold: 2400,
    isPromo: true,
    shop: 'Sony Malaysia Official',
    marketplace: 'Shopee MY',
    location: 'Kuala Lumpur',
    isOfficial: true,
    url: 'https://shopee.com.my/search?keyword=Sony+WH-1000XM5'
  },
  {
    id: 'my-tws-01',
    category: 'electronics',
    name: 'Samsung Galaxy Buds3 Pro True Wireless Noise Cancelling MY',
    name_id: 'Samsung Galaxy Buds3 Pro TWS Noise Cancelling Resmi MY',
    name_en: 'Samsung Galaxy Buds3 Pro True Wireless Noise Cancelling MY',
    name_ms: 'Samsung Galaxy Buds3 Pro Wayarles Sebenar Penghapus Bising',
    name_zh: '三星 Galaxy Buds3 Pro 真无线降噪耳机 大马版',
    image: 'assets/placeholder.svg',
    keywords: ['samsung', 'galaxy buds', 'tws', 'earbuds', 'wireless', 'noise cancelling', 'bluetooth'],
    price: 699,
    originalPrice: 849,
    rating: 4.8,
    sold: 1850,
    isPromo: true,
    shop: 'Samsung Malaysia Official',
    marketplace: 'Shopee MY',
    location: 'Petaling Jaya',
    isOfficial: true,
    brand: 'samsung',
    url: 'https://shopee.com.my/search?keyword=Samsung+Galaxy+Buds3+Pro'
  },
  {
    id: 'my-watch-01',
    category: 'electronics',
    name: 'Huawei Watch GT 4 46mm AMOLED GPS Smart Watch MY',
    name_id: 'Huawei Watch GT 4 46mm AMOLED GPS Smartwatch Resmi MY',
    name_en: 'Huawei Watch GT 4 46mm AMOLED GPS Smart Watch MY',
    name_ms: 'Huawei Watch GT 4 46mm AMOLED GPS Jam Tangan Pintar MY',
    name_zh: '华为 Watch GT 4 46mm AMOLED GPS 智能手表 大马版',
    image: 'assets/placeholder.svg',
    keywords: ['huawei', 'watch', 'gt4', 'smartwatch', 'amoled', 'gps', 'jam tangan'],
    price: 799,
    originalPrice: 949,
    rating: 4.7,
    sold: 1200,
    isPromo: true,
    shop: 'Huawei Malaysia Official',
    marketplace: 'Shopee MY',
    location: 'Kuala Lumpur',
    isOfficial: true,
    url: 'https://shopee.com.my/search?keyword=Huawei+Watch+GT+4'
  },
  // ── FOOD & BEVERAGE ──────────────────────────────────────────
  {
    id: 'my-food-01',
    category: 'food',
    name: 'Mamee Monster Noodle Snack Original 24 Packs Malaysia',
    name_id: 'Mamee Monster Snack Noodle Original 24 Packs Malaysia',
    name_en: 'Mamee Monster Noodle Snack Original 24 Packs Malaysia',
    name_ms: 'Mamee Monster Mee Ringan Asli 24 Bungkus Malaysia',
    name_zh: '马来西亚 Mamee 怪兽面零食 原味 24包装',
    image: 'assets/placeholder.svg',
    keywords: ['mamee', 'monster', 'noodle', 'snack', 'mee', 'malaysia', 'jajan'],
    price: 18.9,
    originalPrice: 22.9,
    rating: 4.9,
    sold: 25000,
    isPromo: true,
    shop: 'Mamee Official Store MY',
    marketplace: 'Shopee MY',
    location: 'Selangor',
    isOfficial: true,
    url: 'https://shopee.com.my/search?keyword=Mamee+Monster+Noodle+Snack'
  },
  {
    id: 'my-food-02',
    category: 'food',
    name: 'Milo Activ-Go Chocolate Malt Drink 1kg Tin Malaysia',
    name_id: 'Milo Activ-Go Minuman Cokelat Malt 1kg Tin Malaysia',
    name_en: 'Milo Activ-Go Chocolate Malt Drink 1kg Tin Malaysia',
    name_ms: 'Milo Activ-Go Minuman Coklat Malt 1kg Tin Malaysia',
    name_zh: '美禄 Milo 巧克力麦芽饮料 1公斤罐装 大马版',
    image: 'assets/placeholder.svg',
    keywords: ['milo', 'chocolate', 'malt', 'drink', 'minuman', 'coklat', 'tin', 'nestle'],
    price: 24.9,
    originalPrice: 28.9,
    rating: 4.9,
    sold: 38000,
    isPromo: true,
    shop: 'Nestle Malaysia Official',
    marketplace: 'Shopee MY',
    location: 'Petaling Jaya',
    isOfficial: true,
    url: 'https://shopee.com.my/search?keyword=Milo+Activ+Go+1kg'
  },
  {
    id: 'my-food-03',
    category: 'food',
    name: 'Gardenia Original Classic Bread 400g Fresh Daily Malaysia',
    name_id: 'Gardenia Roti Tawar Original 400g Segar Harian Malaysia',
    name_en: 'Gardenia Original Classic Bread 400g Fresh Daily Malaysia',
    name_ms: 'Gardenia Roti Original Klasik 400g Segar Harian Malaysia',
    name_zh: '家利 Gardenia 经典原味面包 400g 每日新鲜',
    image: 'assets/placeholder.svg',
    keywords: ['gardenia', 'bread', 'roti', 'tawar', 'original', 'fresh', 'daily'],
    price: 3.5,
    originalPrice: 3.9,
    rating: 4.8,
    sold: 55000,
    isPromo: false,
    shop: 'Gardenia Malaysia Official',
    marketplace: 'Shopee MY',
    location: 'Shah Alam',
    isOfficial: true,
    url: 'https://shopee.com.my/search?keyword=Gardenia+Original+Bread'
  },
  {
    id: 'my-food-04',
    category: 'food',
    name: 'Old Town White Coffee 3-in-1 Original 30 Sachets Malaysia',
    name_id: 'Old Town White Coffee 3-in-1 Original 30 Sachet Malaysia',
    name_en: 'Old Town White Coffee 3-in-1 Original 30 Sachets Malaysia',
    name_ms: 'Old Town White Coffee 3-dalam-1 Asli 30 Sachet Malaysia',
    name_zh: '旧街场白咖啡 三合一原味 30小包装 大马正品',
    image: 'assets/placeholder.svg',
    keywords: ['old town', 'white coffee', 'kopi', 'coffee', '3in1', 'malaysia', 'ipoh'],
    price: 22.9,
    originalPrice: 26.9,
    rating: 4.9,
    sold: 42000,
    isPromo: true,
    shop: 'Old Town Official MY',
    marketplace: 'Shopee MY',
    location: 'Ipoh, Perak',
    isOfficial: true,
    url: 'https://shopee.com.my/search?keyword=Old+Town+White+Coffee+30+sachets'
  },
  {
    id: 'my-food-05',
    category: 'food',
    name: 'Twisties Cheese 80g Party Pack Malaysia Snack',
    name_id: 'Twisties Keju 80g Snack Pesta Malaysia',
    name_en: 'Twisties Cheese 80g Party Pack Malaysia Snack',
    name_ms: 'Twisties Keju 80g Pek Parti Snek Malaysia',
    name_zh: '马来西亚 Twisties 芝士薯片 80g 派对装',
    image: 'assets/placeholder.svg',
    keywords: ['twisties', 'cheese', 'keju', 'snack', 'jajan', 'crisps', 'chips', 'malaysia'],
    price: 5.9,
    originalPrice: 6.9,
    rating: 4.8,
    sold: 18500,
    isPromo: false,
    shop: 'Twisties Official MY',
    marketplace: 'Lazada MY',
    location: 'Selangor',
    isOfficial: true,
    url: 'https://www.lazada.com.my/catalog/?q=Twisties+Cheese+80g'
  },
  // ── BEAUTY & SKINCARE ─────────────────────────────────────────
  {
    id: 'my-beauty-01',
    category: 'beauty',
    name: "L'Oreal Paris UV Defender Sunscreen SPF 50+ 50ml Malaysia",
    name_id: "L'Oreal Paris UV Defender Sunscreen SPF 50+ 50ml Malaysia",
    name_en: "L'Oreal Paris UV Defender Sunscreen SPF 50+ 50ml Malaysia",
    name_ms: "L'Oreal Paris UV Defender Pelindung Suria SPF 50+ 50ml",
    name_zh: '巴黎欧莱雅 UV Defender 防晒霜 SPF50+ 50ml 大马版',
    image: 'assets/placeholder.svg',
    keywords: ['loreal', 'l\'oreal', 'sunscreen', 'spf50', 'uv defender', 'skincare', 'kecantikan'],
    price: 52.9,
    originalPrice: 62.9,
    rating: 4.7,
    sold: 8500,
    isPromo: true,
    shop: "L'Oreal Malaysia Official",
    marketplace: 'Shopee MY',
    location: 'Kuala Lumpur',
    isOfficial: true,
    url: "https://shopee.com.my/search?keyword=L'Oreal+UV+Defender+SPF50"
  },
  {
    id: 'my-beauty-02',
    category: 'beauty',
    name: 'Cetaphil Gentle Skin Cleanser 500ml Original Malaysia',
    name_id: 'Cetaphil Gentle Skin Cleanser 500ml Original Malaysia',
    name_en: 'Cetaphil Gentle Skin Cleanser 500ml Original Malaysia',
    name_ms: 'Cetaphil Pembersih Kulit Lembut 500ml Asal Malaysia',
    name_zh: '丝塔芙 Cetaphil 温和洁面乳 500ml 大马正品',
    image: 'assets/placeholder.svg',
    keywords: ['cetaphil', 'cleanser', 'facial wash', 'sabun muka', 'skincare', 'gentle'],
    price: 42.9,
    originalPrice: 49.9,
    rating: 4.8,
    sold: 12500,
    isPromo: true,
    shop: 'Cetaphil Malaysia Official',
    marketplace: 'Shopee MY',
    location: 'Kuala Lumpur',
    isOfficial: true,
    url: 'https://shopee.com.my/search?keyword=Cetaphil+Gentle+Cleanser+500ml'
  },
  {
    id: 'my-beauty-03',
    category: 'beauty',
    name: "Watsons Own Brand Tea Tree Face Wash 150ml Malaysia",
    name_id: "Watsons Tea Tree Face Wash 150ml Malaysia",
    name_en: "Watsons Own Brand Tea Tree Face Wash 150ml Malaysia",
    name_ms: "Watsons Pencuci Muka Pokok Teh 150ml Malaysia",
    name_zh: '屈臣氏 茶树洗面奶 150ml 大马版',
    image: 'assets/placeholder.svg',
    keywords: ['watsons', 'tea tree', 'face wash', 'cleanser', 'sabun muka', 'skincare'],
    price: 15.9,
    originalPrice: 19.9,
    rating: 4.5,
    sold: 7200,
    isPromo: true,
    shop: 'Watsons Malaysia Official',
    marketplace: 'Lazada MY',
    location: 'Kuala Lumpur',
    isOfficial: true,
    url: 'https://www.lazada.com.my/catalog/?q=Watsons+Tea+Tree+Face+Wash'
  },
  // ── HEALTH & WELLNESS ─────────────────────────────────────────
  {
    id: 'my-health-01',
    category: 'health',
    name: "Brand's Chicken Essence 6 Bottles x 70ml Original Malaysia",
    name_id: "Brand's Chicken Essence 6 Botol x 70ml Asli Malaysia",
    name_en: "Brand's Chicken Essence 6 Bottles x 70ml Original Malaysia",
    name_ms: "Brand's Sari Ayam 6 Botol x 70ml Asli Malaysia",
    name_zh: "白兰氏 Brand's 鸡精 6瓶装 x70ml 马来西亚正品",
    image: 'assets/placeholder.svg',
    keywords: ["brand's", 'chicken essence', 'sari ayam', 'health', 'kesihatan', 'supplement'],
    price: 52.9,
    originalPrice: 59.9,
    rating: 4.9,
    sold: 15600,
    isPromo: true,
    shop: "Brand's Malaysia Official",
    marketplace: 'Shopee MY',
    location: 'Kuala Lumpur',
    isOfficial: true,
    url: "https://shopee.com.my/search?keyword=Brand's+Chicken+Essence+6+bottles"
  },
  {
    id: 'my-health-02',
    category: 'health',
    name: "Scott's Emulsion DHA Original 400ml Malaysia",
    name_id: "Scott's Emulsion DHA Original 400ml Malaysia",
    name_en: "Scott's Emulsion DHA Original 400ml Malaysia",
    name_ms: "Scott's Emulsion DHA Asli 400ml Malaysia",
    name_zh: "斯科特鳕鱼肝油乳液 DHA 原味 400ml 大马版",
    image: 'assets/placeholder.svg',
    keywords: ["scott's", 'emulsion', 'dha', 'vitamin', 'ikan', 'cod liver', 'supplement'],
    price: 24.9,
    originalPrice: 28.9,
    rating: 4.8,
    sold: 9800,
    isPromo: false,
    shop: "Scott's Malaysia Official",
    marketplace: 'Shopee MY',
    location: 'Selangor',
    isOfficial: true,
    url: "https://shopee.com.my/search?keyword=Scott's+Emulsion+DHA+400ml"
  },
  {
    id: 'my-health-03',
    category: 'health',
    name: 'Clarinase Repetabs 12 Tablets Allergy Relief Malaysia',
    name_id: 'Clarinase Repetabs 12 Tablet Alergi Malaysia',
    name_en: 'Clarinase Repetabs 12 Tablets Allergy Relief Malaysia',
    name_ms: 'Clarinase Repetabs 12 Tablet Ubat Alahan Malaysia',
    name_zh: '克敏能 Clarinase 缓释片 12片 过敏药 大马版',
    image: 'assets/placeholder.svg',
    keywords: ['clarinase', 'allergy', 'alergi', 'tablet', 'ubat', 'obat', 'medicine', 'pharmacy'],
    price: 16.9,
    originalPrice: 19.9,
    rating: 4.7,
    sold: 6700,
    isPromo: false,
    shop: 'Guardian Pharmacy Official',
    marketplace: 'Shopee MY',
    location: 'Kuala Lumpur',
    isOfficial: true,
    url: 'https://shopee.com.my/search?keyword=Clarinase+Repetabs+Allergy'
  },
  {
    id: 'my-health-04',
    category: 'health',
    name: 'Blackmores Bio C 1000mg Vitamin C 31 Tablets Malaysia',
    name_id: 'Blackmores Bio C 1000mg Vitamin C 31 Tablet Malaysia',
    name_en: 'Blackmores Bio C 1000mg Vitamin C 31 Tablets Malaysia',
    name_ms: 'Blackmores Bio C 1000mg Vitamin C 31 Tablet Malaysia',
    name_zh: '澳佳宝 Blackmores Bio C 1000mg 维生素C 31片 大马版',
    image: 'assets/placeholder.svg',
    keywords: ['blackmores', 'vitamin c', 'bio c', 'supplement', 'tablet', 'immune', 'daya tahan'],
    price: 29.9,
    originalPrice: 35.9,
    rating: 4.8,
    sold: 11200,
    isPromo: true,
    shop: 'Blackmores Malaysia Official',
    marketplace: 'Lazada MY',
    location: 'Kuala Lumpur',
    isOfficial: true,
    url: 'https://www.lazada.com.my/catalog/?q=Blackmores+Bio+C+1000mg'
  },
  // ── FASHION & FOOTWEAR ───────────────────────────────────────
  {
    id: 'my-shoe-01',
    category: 'fashion',
    name: 'Nike Air Max 270 React Men Running Shoes Original Malaysia',
    name_id: 'Nike Air Max 270 React Pria Sepatu Running Asli Malaysia',
    name_en: 'Nike Air Max 270 React Men Running Shoes Original Malaysia',
    name_ms: 'Nike Air Max 270 React Kasut Lelaki Asli Malaysia',
    name_zh: '耐克 Nike Air Max 270 React 男款跑步鞋 马来西亚正品',
    image: 'assets/placeholder.svg',
    keywords: ['nike', 'air max', '270', 'react', 'shoes', 'kasut', 'running', 'sneaker'],
    price: 449,
    originalPrice: 529,
    rating: 4.8,
    sold: 2800,
    isPromo: true,
    shop: 'Nike Malaysia Official',
    marketplace: 'Shopee MY',
    location: 'Kuala Lumpur',
    isOfficial: true,
    brand: 'nike',
    url: 'https://shopee.com.my/search?keyword=Nike+Air+Max+270+React'
  },
  {
    id: 'my-shoe-02',
    category: 'fashion',
    name: 'Bata Comfit Casual Shoes Men Leather Malaysia Original',
    name_id: 'Bata Comfit Sepatu Kasual Pria Kulit Malaysia',
    name_en: 'Bata Comfit Casual Shoes Men Leather Malaysia Original',
    name_ms: 'Bata Comfit Kasut Santai Lelaki Kulit Malaysia Asli',
    name_zh: '拔佳 Bata Comfit 男款休闲皮鞋 马来西亚正品',
    image: 'assets/placeholder.svg',
    keywords: ['bata', 'comfit', 'shoes', 'kasut', 'casual', 'leather', 'men', 'malaysia'],
    price: 149,
    originalPrice: 179,
    rating: 4.6,
    sold: 3500,
    isPromo: false,
    shop: 'Bata Malaysia Official',
    marketplace: 'Shopee MY',
    location: 'Selangor',
    isOfficial: true,
    brand: 'bata',
    url: 'https://shopee.com.my/search?keyword=Bata+Comfit+Casual+Shoes'
  },
  {
    id: 'my-fashion-01',
    category: 'fashion',
    name: 'Padini Authentic Slim Fit Chino Pants Men Malaysia',
    name_id: 'Padini Authentic Slim Fit Celana Chino Pria Malaysia',
    name_en: 'Padini Authentic Slim Fit Chino Pants Men Malaysia',
    name_ms: 'Padini Authentic Seluar Chino Slim Fit Lelaki Malaysia',
    name_zh: '马来西亚 Padini Authentic 男款修身西裤',
    image: 'assets/placeholder.svg',
    keywords: ['padini', 'chino', 'pants', 'seluar', 'slim fit', 'fashion', 'pakaian', 'men'],
    price: 89.9,
    originalPrice: 109.9,
    rating: 4.6,
    sold: 4200,
    isPromo: true,
    shop: 'Padini Malaysia Official',
    marketplace: 'Lazada MY',
    location: 'Kuala Lumpur',
    isOfficial: true,
    url: 'https://www.lazada.com.my/catalog/?q=Padini+Authentic+Slim+Chino'
  },
  // ── HOME & LIFESTYLE ─────────────────────────────────────────
  {
    id: 'my-home-01',
    category: 'home',
    name: 'Philips Air Purifier AC1215 HEPA True Filter Malaysia',
    name_id: 'Philips Air Purifier AC1215 Filter HEPA True Malaysia',
    name_en: 'Philips Air Purifier AC1215 HEPA True Filter Malaysia',
    name_ms: 'Philips Penapis Udara AC1215 Penapis HEPA Sejati Malaysia',
    name_zh: '飞利浦 Philips 空气净化器 AC1215 真HEPA滤网 大马版',
    image: 'assets/placeholder.svg',
    keywords: ['philips', 'air purifier', 'hepa', 'penapis udara', 'home', 'rumah', 'clean air'],
    price: 499,
    originalPrice: 599,
    rating: 4.7,
    sold: 1800,
    isPromo: true,
    shop: 'Philips Malaysia Official',
    marketplace: 'Shopee MY',
    location: 'Kuala Lumpur',
    isOfficial: true,
    url: 'https://shopee.com.my/search?keyword=Philips+Air+Purifier+AC1215'
  },
  {
    id: 'my-home-02',
    category: 'home',
    name: 'Panasonic Rice Cooker 1.8L Fuzzy Logic Official Malaysia',
    name_id: 'Panasonic Rice Cooker 1.8L Fuzzy Logic Resmi Malaysia',
    name_en: 'Panasonic Rice Cooker 1.8L Fuzzy Logic Official Malaysia',
    name_ms: 'Panasonic Periuk Nasi 1.8L Fuzzy Logic Rasmi Malaysia',
    name_zh: '松下 Panasonic 电饭煲 1.8升 模糊逻辑 大马行货',
    image: 'assets/placeholder.svg',
    keywords: ['panasonic', 'rice cooker', 'periuk nasi', 'fuzzy logic', '1.8l', 'home', 'kitchen'],
    price: 249,
    originalPrice: 299,
    rating: 4.8,
    sold: 3600,
    isPromo: true,
    shop: 'Panasonic Malaysia Official',
    marketplace: 'Lazada MY',
    location: 'Shah Alam',
    isOfficial: true,
    url: 'https://www.lazada.com.my/catalog/?q=Panasonic+Rice+Cooker+1.8L'
  },
  // ── ACCESSORIES ──────────────────────────────────────────────
  {
    id: 'my-acc-01',
    category: 'accessories',
    name: 'Anker PowerCore 20000mAh Power Bank USB-C Official MY',
    name_id: 'Anker PowerCore 20000mAh Power Bank USB-C Resmi MY',
    name_en: 'Anker PowerCore 20000mAh Power Bank USB-C Official MY',
    name_ms: 'Anker PowerCore 20000mAh Kuasa Bank USB-C Rasmi MY',
    name_zh: 'Anker PowerCore 20000mAh 充电宝 USB-C 大马官方',
    image: 'assets/placeholder.svg',
    keywords: ['anker', 'powercore', 'power bank', '20000mah', 'usb-c', 'charging', 'battery'],
    price: 129,
    originalPrice: 159,
    rating: 4.8,
    sold: 5600,
    isPromo: true,
    shop: 'Anker Malaysia Official',
    marketplace: 'Shopee MY',
    location: 'Kuala Lumpur',
    isOfficial: true,
    url: 'https://shopee.com.my/search?keyword=Anker+PowerCore+20000mAh'
  },
  {
    id: 'my-acc-02',
    category: 'accessories',
    name: 'Baseus 65W GaN USB-C Fast Charger Adapter Malaysia',
    name_id: 'Baseus 65W GaN USB-C Fast Charger Adapter Malaysia',
    name_en: 'Baseus 65W GaN USB-C Fast Charger Adapter Malaysia',
    name_ms: 'Baseus 65W GaN USB-C Pengecas Cepat Penyesuai Malaysia',
    name_zh: 'Baseus 65W GaN USB-C 快充充电器 大马版',
    image: 'assets/placeholder.svg',
    keywords: ['baseus', '65w', 'gan', 'charger', 'usb-c', 'fast charging', 'pengecas', 'adapter'],
    price: 89,
    originalPrice: 109,
    rating: 4.7,
    sold: 7800,
    isPromo: true,
    shop: 'Baseus Malaysia Official',
    marketplace: 'Shopee MY',
    location: 'Petaling Jaya',
    isOfficial: true,
    url: 'https://shopee.com.my/search?keyword=Baseus+65W+GaN+Charger'
  }
];

/* ─────────────────────────────────────────────────────────────── */
/* Helper: return the right catalog based on current region        */
/* ─────────────────────────────────────────────────────────────── */
function getActiveCatalog() {
  const region = typeof getCurrentRegion === 'function' ? getCurrentRegion() : 'id';
  return region === 'my' ? MY_PRODUCT_CATALOG : fallbackMarketplaceCatalog;
}

function searchCatalogByKeyword(query) {
  const q = String(query || '').toLowerCase().trim();
  const qWords = q.split(/\s+/).filter(w => w.length > 2);
  if (qWords.length === 0) return [];
  const catalog = getActiveCatalog();
  const scored = catalog.map(item => {
    const itemText = (item.name + ' ' + (item.name_id || '') + ' ' + (item.name_en || '') + ' ' + (item.keywords || []).join(' ')).toLowerCase();
    const score = qWords.filter(w => itemText.includes(w)).length;
    return { item, score };
  }).filter(x => x.score > 0).sort((a, b) => b.score - a.score);
  return scored.slice(0, 12).map(x => x.item);
}

/* ========================================================== */
/* 3. CATALOG DENGAN NAMA MULTI-BAHASA LENGKAP               */
/* ========================================================== */
const fallbackMarketplaceCatalog = [

  // ── KITKAT ──────────────────────────────────────────────────────────────
  {
    id: 'kitkat-01',
    category: 'food',
    name: 'KitKat Jepang Matcha Green Tea Isi 10 Pcs Original Import',
    name_id: 'KitKat Jepang Matcha Green Tea Isi 10 Pcs Original Import',
    name_en: 'KitKat Japan Matcha Green Tea 10 Pcs Original Import',
    name_ms: 'KitKat Jepun Teh Hijau Matcha 10 Keping Asli Import',
    name_zh: '日本原装 KitKat 宇治抹茶巧克力威化 10条装',
    image: 'assets/placeholder.svg',
    keywords: ['kitkat', 'kit kat', 'jepang', 'japan', 'matcha', 'green tea', 'cokelat', 'snack', 'import', 'teh hijau', '抹茶', '巧克力', '零食'],
    price: 52000,
    originalPrice: 58000,
    rating: 4.9,
    sold: 12500,
    isPromo: true,
    shop: 'Tokyo Snack Official',
    marketplace: 'Shopee',
    location: 'Jakarta Pusat',
    url: getClientDirectMarketplaceUrl('Shopee', 'KitKat Jepang isi 10', 'kitkat-01')
  },
  {
    id: 'kitkat-02',
    category: 'food',
    name: 'KitKat Chocolate 4-Fingers 38g Original Nestle Pack',
    name_id: 'KitKat Chocolate 4-Fingers 38g Original Nestle Pack',
    name_en: 'KitKat Chocolate 4-Fingers 38g Original Nestle Pack',
    name_ms: 'KitKat Coklat 4-Jari 38g Pek Nestle Asli',
    name_zh: '雀巢 KitKat 经典4指牛奶巧克力威化 38g 原装正品',
    image: 'assets/placeholder.svg',
    keywords: ['kitkat', 'kit kat', 'cokelat', 'snack', 'nestle', 'wafer', 'cemilan', '4 finger', 'chocolate', '雀巢', '威化'],
    price: 11500,
    originalPrice: 14000,
    rating: 4.9,
    sold: 35000,
    isPromo: true,
    shop: 'Nestle Indonesia Official',
    marketplace: 'Shopee',
    location: 'Kab. Bogor',
    url: getClientDirectMarketplaceUrl('Shopee', 'KitKat 4 finger nestle original', 'kitkat-02')
  },
  {
    id: 'kitkat-03',
    category: 'food',
    name: 'KitKat Chunky Peanut Butter 38g Import Australia',
    name_id: 'KitKat Chunky Peanut Butter 38g Import Australia',
    name_en: 'KitKat Chunky Peanut Butter 38g Australia Import',
    name_ms: 'KitKat Chunky Mentega Kacang 38g Import Australia',
    name_zh: 'KitKat Chunky 花生酱厚切巧克力 38g 澳洲进口',
    image: 'assets/placeholder.svg',
    keywords: ['kitkat', 'kit kat', 'chunky', 'peanut butter', 'cokelat', 'snack', 'australia', 'kacang', '花生酱'],
    price: 18000,
    originalPrice: 22000,
    rating: 4.8,
    sold: 7800,
    isPromo: true,
    shop: 'Snack Import Australia',
    marketplace: 'Tokopedia',
    location: 'Bandung',
    url: getClientDirectMarketplaceUrl('Tokopedia', 'KitKat Chunky Peanut Butter 38g', 'kitkat-03')
  },
  {
    id: 'kitkat-04',
    category: 'food',
    name: 'KitKat Dark Chocolate 70% Cacao Bitter Sweet 4-Finger',
    name_id: 'KitKat Dark Chocolate 70% Cacao Bitter Sweet 4-Finger',
    name_en: 'KitKat Dark Chocolate 70% Cacao Bitter Sweet 4-Finger',
    name_ms: 'KitKat Coklat Gelap 70% Koko Manis Pahit 4-Jari',
    name_zh: 'KitKat 70%黑巧纯可可微苦醇香威化 4指装',
    image: 'assets/placeholder.svg',
    keywords: ['kitkat', 'kit kat', 'dark chocolate', 'cacao', 'coklat', 'snack', 'dark', 'hitam', '黑巧克力'],
    price: 16500,
    originalPrice: 20000,
    rating: 4.8,
    sold: 8100,
    isPromo: true,
    shop: 'Choco Premium Mart',
    marketplace: 'Lazada',
    location: 'Surabaya',
    url: getClientDirectMarketplaceUrl('Lazada', 'KitKat Dark Chocolate 70% Cacao', 'kitkat-04')
  },
  {
    id: 'kitkat-05',
    category: 'food',
    name: 'KitKat Gold Caramelized White Chocolate Crispy Wafer 45g',
    name_id: 'KitKat Gold Caramelized White Chocolate Crispy Wafer 45g',
    name_en: 'KitKat Gold Caramelized White Chocolate Crispy Wafer 45g',
    name_ms: 'KitKat Gold Karamel Coklat Putih Rangup 45g',
    name_zh: 'KitKat Gold 黄金焦糖白巧克力脆心威化 45g',
    image: 'assets/placeholder.svg',
    keywords: ['kitkat', 'kit kat', 'gold', 'caramel', 'white chocolate', 'snack', 'cokelat', 'nestle', 'karamel', '焦糖'],
    price: 19500,
    originalPrice: 24000,
    rating: 4.7,
    sold: 5400,
    isPromo: true,
    shop: 'Global Snack Hub',
    marketplace: 'Shopee',
    location: 'Jakarta Barat',
    url: getClientDirectMarketplaceUrl('Shopee', 'KitKat Gold Caramel White Chocolate', 'kitkat-05')
  },

  // ── INDOMIE ─────────────────────────────────────────────────────────────
  {
    id: 'indomie-01',
    category: 'food',
    name: 'Indomie Goreng Original Paket Hemat 10 Pcs Lengkap Bumbu',
    name_id: 'Indomie Goreng Original Paket Hemat 10 Pcs Lengkap Bumbu',
    name_en: 'Indomie Fried Noodles Original Value Pack 10 Pcs',
    name_ms: 'Indomie Mi Goreng Asli Pek Jimat 10 Keping',
    name_zh: '印尼营多捞面 Indomie 原味经典炒面 10包超值装',
    image: 'assets/placeholder.svg',
    keywords: ['indomie', 'mie instan', 'mi instan', 'instan', 'makanan', 'noodle', 'goreng', 'rebus', 'fried noodles', '炒面', '方便面'],
    price: 29500,
    originalPrice: 34000,
    rating: 4.9,
    sold: 45000,
    isPromo: true,
    shop: 'Indomie Official Store',
    marketplace: 'Shopee',
    location: 'Kab. Bogor',
    url: getClientDirectMarketplaceUrl('Shopee', 'Indomie Goreng Original Paket Hemat', 'indomie-01')
  },
  {
    id: 'indomie-02',
    category: 'food',
    name: 'Indomie Mie Kuah Ayam Bawang 75g (Isi 5 Pcs Fresh)',
    name_id: 'Indomie Mie Kuah Ayam Bawang 75g (Isi 5 Pcs Fresh)',
    name_en: 'Indomie Onion Chicken Soup Noodles 75g (5 Pcs Pack)',
    name_ms: 'Indomie Mi Sup Ayam Bawang 75g (Pek 5 Keping)',
    name_zh: 'Indomie 营多葱香鸡汤风味方便面 75g (5包连装)',
    image: 'assets/placeholder.svg',
    keywords: ['indomie', 'mie instan', 'instan', 'makanan', 'kuah', 'ayam bawang', 'noodle', '5pcs', 'soup', '鸡汤面'],
    price: 15500,
    originalPrice: 18000,
    rating: 4.9,
    sold: 18000,
    isPromo: true,
    shop: 'Warung Mie Laris Bogor',
    marketplace: 'Shopee',
    location: 'Bogor',
    url: getClientDirectMarketplaceUrl('Shopee', 'Indomie Kuah Ayam Bawang 5pcs', 'indomie-02')
  },
  {
    id: 'indomie-03',
    category: 'food',
    name: 'Indomie All Variant Campur 1 Dus (Isi 40 Pcs) Garansi Murah',
    name_id: 'Indomie All Variant Campur 1 Dus (Isi 40 Pcs) Garansi Murah',
    name_en: 'Indomie All Variants Mix 1 Box (40 Pcs) Best Value',
    name_ms: 'Indomie Pelbagai Perisa 1 Kotak (40 Keping) Harga Murah',
    name_zh: 'Indomie 营多全口味混合装整箱 (40包大容量)',
    image: 'assets/placeholder.svg',
    keywords: ['indomie', 'dus', 'box', 'all variant', 'campur', 'mie instan', 'makanan', 'grosir', '40 pcs', '整箱'],
    price: 124000,
    originalPrice: 145000,
    rating: 4.9,
    sold: 62000,
    isPromo: true,
    shop: 'Toko Sembako Grosir',
    marketplace: 'Tokopedia',
    location: 'Jakarta Barat',
    url: getClientDirectMarketplaceUrl('Tokopedia', 'Indomie All Variant 1 Dus 40 Pcs', 'indomie-03')
  },

  // ── AUDIO & HEADPHONES ───────────────────────────────────────────────────
  {
    id: 'headphone-01',
    category: 'audio',
    name: 'Sony WH-1000XM5 Wireless Noise Cancelling Over-Ear Headphones',
    name_id: 'Sony WH-1000XM5 Wireless Noise Cancelling Over-Ear Headphones',
    name_en: 'Sony WH-1000XM5 Wireless Noise Cancelling Over-Ear Headphones',
    name_ms: 'Sony WH-1000XM5 Fon Kepala Tanpa Wayar Pembatal Bunyi',
    name_zh: '索尼 Sony WH-1000XM5 头戴式无线主动降噪蓝牙耳机',
    image: 'assets/placeholder.svg',
    keywords: ['headphone', 'earphone', 'headset', 'audio', 'wireless', 'bluetooth', 'anc', 'musik', 'sony', 'fon telinga', '耳机', '降噪'],
    price: 4299000,
    originalPrice: 4999000,
    rating: 4.9,
    sold: 1200,
    isPromo: true,
    shop: 'Sony Store Official',
    marketplace: 'Tokopedia',
    location: 'Jakarta Pusat',
    url: getClientDirectMarketplaceUrl('Tokopedia', 'Sony WH-1000XM5 Noise Cancelling', 'headphone-01')
  },
  {
    id: 'headphone-02',
    category: 'audio',
    name: 'Headphone Wireless Bluetooth 5.3 Over-Ear Deep Bass 30H Battery',
    name_id: 'Headphone Wireless Bluetooth 5.3 Over-Ear Deep Bass 30H Battery',
    name_en: 'Wireless Bluetooth 5.3 Over-Ear Headphones Deep Bass 30H',
    name_ms: 'Fon Kepala Bluetooth 5.3 Tanpa Wayar Bass Padu 30 Jam',
    name_zh: '无线高保真蓝牙5.3头戴式耳机 重低音超长30小时续航',
    image: 'assets/placeholder.svg',
    keywords: ['headphone', 'wireless', 'bluetooth', 'anc', 'musik', 'audio', 'over ear', 'earphone', 'bass', '蓝牙耳机'],
    price: 199000,
    originalPrice: 280000,
    rating: 4.8,
    sold: 8400,
    isPromo: true,
    shop: 'AudioTech Official Store',
    marketplace: 'Shopee',
    location: 'Surabaya',
    url: getClientDirectMarketplaceUrl('Shopee', 'Headphone Wireless Bluetooth 5.3', 'headphone-02')
  },
  {
    id: 'headphone-03',
    category: 'audio',
    name: 'Headset Gaming Surround 7.1 RGB Detachable Mic PS5 PC Xbox',
    name_id: 'Headset Gaming Surround 7.1 RGB Detachable Mic PS5 PC Xbox',
    name_en: 'Gaming Headset Surround 7.1 RGB Detachable Mic PS5 PC',
    name_ms: 'Fon Kepala Permainan Surround 7.1 RGB Mikrofon Boleh Cabut',
    name_zh: '专业7.1环绕声RGB炫光电竞游戏耳机 降噪麦克风 电脑主机通用',
    image: 'assets/placeholder.svg',
    keywords: ['gaming', 'headset', 'headphone', 'rgb', 'surround', 'pc', 'game', 'ps5', 'audio', '电竞耳机', '游戏耳机'],
    price: 320000,
    originalPrice: 450000,
    rating: 4.9,
    sold: 2400,
    isPromo: true,
    shop: 'Gaming Republic ID',
    marketplace: 'Shopee',
    location: 'Bandung',
    url: getClientDirectMarketplaceUrl('Shopee', 'Headset Gaming Surround 7.1 RGB', 'headphone-03')
  },

  // ── SMARTWATCH ────────────────────────────────────────────────────────────
  {
    id: 'smartwatch-01',
    category: 'wearable',
    name: 'Xiaomi Smart Band 9 AMOLED Display IP68 Waterproof 21-Day Battery',
    name_id: 'Xiaomi Smart Band 9 AMOLED Display IP68 Waterproof 21-Day Battery',
    name_en: 'Xiaomi Smart Band 9 AMOLED Display IP68 Waterproof 21-Day Battery',
    name_ms: 'Xiaomi Smart Band 9 Paparan AMOLED Kalis Air IP68 Bateri 21 Hari',
    name_zh: '小米手环9 高清AMOLED炫彩大屏 50米防水 21天超长续航',
    image: 'assets/placeholder.svg',
    keywords: ['smartwatch', 'smart band', 'xiaomi', 'jam', 'tracker', 'fitness', 'amoled', 'waterproof', 'jam tangan', '手环', '智能手表'],
    price: 519000,
    originalPrice: 629000,
    rating: 4.9,
    sold: 4200,
    isPromo: true,
    shop: 'Xiaomi Official Store ID',
    marketplace: 'Shopee',
    location: 'Jakarta',
    url: getClientDirectMarketplaceUrl('Shopee', 'Xiaomi Smart Band 9 AMOLED', 'smartwatch-01')
  },
  {
    id: 'smartwatch-02',
    category: 'wearable',
    name: 'Smartwatch AMOLED Full HD Screen IP68 Waterproof Multi-Sport Mode',
    name_id: 'Smartwatch AMOLED Full HD Screen IP68 Waterproof Multi-Sport Mode',
    name_en: 'Smartwatch AMOLED Full HD Screen IP68 Waterproof Multi-Sport Mode',
    name_ms: 'Jam Tangan Pintar Skrin AMOLED Kalis Air IP68 Mod Sukan',
    name_zh: '智能高清AMOLED圆形触控手表 运动健康监测 IP68级防水',
    image: 'assets/placeholder.svg',
    keywords: ['smartwatch', 'jam tangan', 'amoled', 'waterproof', 'sport', 'wearable', 'jam', '手表'],
    price: 450000,
    originalPrice: 650000,
    rating: 4.8,
    sold: 1850,
    isPromo: true,
    shop: 'Wear Time Official',
    marketplace: 'Tokopedia',
    location: 'Surabaya',
    url: getClientDirectMarketplaceUrl('Tokopedia', 'Smartwatch AMOLED Screen IP68', 'smartwatch-02')
  },

  // ── SHOES / FOOTWEAR ─────────────────────────────────────────────────────
  {
    id: 'sepatu-01',
    category: 'shoes',
    name: 'Sepatu Running Nike Air Max 270 Breathable Sport Original',
    name_id: 'Sepatu Running Nike Air Max 270 Breathable Sport Original',
    name_en: 'Nike Air Max 270 Breathable Running Sport Shoes Original',
    name_ms: 'Kasut Lari Nike Air Max 270 Sporty Bernafas Asli',
    name_zh: '耐克 Nike Air Max 270 透气缓震气垫跑步鞋 正品男鞋女鞋',
    image: 'assets/placeholder.svg',
    keywords: ['sepatu', 'sneakers', 'nike', 'running', 'olahraga', 'sport', 'shoes', 'air max', 'alas kaki', 'kasut', '跑步鞋', '运动鞋'],
    price: 1299000,
    originalPrice: 1599000,
    rating: 4.8,
    sold: 2100,
    isPromo: true,
    shop: 'Nike Indonesia Official',
    marketplace: 'Shopee',
    location: 'Jakarta',
    url: getClientDirectMarketplaceUrl('Shopee', 'Sepatu Nike Air Max 270', 'sepatu-01')
  },
  {
    id: 'sepatu-02',
    category: 'shoes',
    name: 'Sepatu Olahraga Running Ultra Boost Mesh Anti-Slip Pria Wanita',
    name_id: 'Sepatu Olahraga Running Ultra Boost Mesh Anti-Slip Pria Wanita',
    name_en: 'Ultra Boost Mesh Running Sports Shoes Anti-Slip Unisex',
    name_ms: 'Kasut Sukan Running Ultra Boost Mesh Anti-Gelincir Unisex',
    name_zh: 'Ultra Boost 轻量网面飞织跑步鞋 防滑耐磨运动鞋 情侣款',
    image: 'assets/placeholder.svg',
    keywords: ['sepatu', 'sneakers', 'running', 'olahraga', 'sport', 'shoes', 'breathable', 'alas kaki', 'kasut lari', '运动跑鞋'],
    price: 275000,
    originalPrice: 380000,
    rating: 4.8,
    sold: 5600,
    isPromo: true,
    shop: 'Sport Station Store',
    marketplace: 'Tokopedia',
    location: 'Surabaya',
    url: getClientDirectMarketplaceUrl('Tokopedia', 'Sepatu Olahraga Running Ultra Boost', 'sepatu-02')
  },
  {
    id: 'sepatu-03',
    category: 'shoes',
    name: 'Sneakers Canvas Low Top Casual Streetwear Pria Wanita',
    name_id: 'Sneakers Canvas Low Top Casual Streetwear Pria Wanita',
    name_en: 'Classic Canvas Low Top Casual Streetwear Sneakers Unisex',
    name_ms: 'Kasut Sneakers Kanvas Low Top Kasual Streetwear',
    name_zh: '百搭经典低帮帆布鞋 休闲百搭板鞋 学生情侣款',
    image: 'assets/placeholder.svg',
    keywords: ['sepatu', 'sneakers', 'canvas', 'casual', 'shoes', 'streetwear', 'alas kaki', '帆布鞋'],
    price: 199000,
    originalPrice: 260000,
    rating: 4.9,
    sold: 3800,
    isPromo: true,
    shop: 'Streetwear Canvas ID',
    marketplace: 'Lazada',
    location: 'Jakarta Selatan',
    url: getClientDirectMarketplaceUrl('Lazada', 'Sneakers Canvas Low Top Casual', 'sepatu-03')
  },

  // ── BAGS ─────────────────────────────────────────────────────────────────
  {
    id: 'tas-01',
    category: 'bag',
    name: 'Tas Ransel Laptop Anti Air Waterproof USB Charging Port 40L',
    name_id: 'Tas Ransel Laptop Anti Air Waterproof USB Charging Port 40L',
    name_en: 'Waterproof Laptop Backpack with USB Charging Port 40L',
    name_ms: 'Beg Galas Komputer Riba Kalis Air Port USB 40L',
    name_zh: '多功能商务防水双肩包 笔记本电脑包 带外置USB充电口 40L大容量',
    image: 'assets/placeholder.svg',
    keywords: ['tas', 'ransel', 'backpack', 'bag', 'laptop', 'waterproof', 'anti air', 'usb', 'beg', '双肩包', '电脑包', '背包'],
    price: 175000,
    originalPrice: 250000,
    rating: 4.9,
    sold: 3200,
    isPromo: true,
    shop: 'Bag Pack Official',
    marketplace: 'Shopee',
    location: 'Jakarta Utara',
    url: getClientDirectMarketplaceUrl('Shopee', 'Tas Ransel Laptop Anti Air USB 40L', 'tas-01')
  },
  {
    id: 'tas-02',
    category: 'bag',
    name: 'Tas Selempang Sling Bag Pria Casual Anti Maling RFID Blocking',
    name_id: 'Tas Selempang Sling Bag Pria Casual Anti Maling RFID Blocking',
    name_en: 'Men Casual Anti-Theft RFID Sling Bag Shoulder Bag',
    name_ms: 'Beg Silang Lelaki Kasual Anti Kecurian RFID',
    name_zh: '男士时尚防盗胸包 单肩斜挎包 防消磁RFID功能',
    image: 'assets/placeholder.svg',
    keywords: ['tas', 'selempang', 'slingbag', 'bag', 'pria', 'anti maling', 'rfid', 'beg silang', '斜挎包', '胸包'],
    price: 85000,
    originalPrice: 120000,
    rating: 4.8,
    sold: 7400,
    isPromo: true,
    shop: 'Urban Bag Store',
    marketplace: 'Tokopedia',
    location: 'Medan',
    url: getClientDirectMarketplaceUrl('Tokopedia', 'Tas Selempang Sling Bag Pria', 'tas-02')
  },

  // ── BEAUTY / SKINCARE ────────────────────────────────────────────────────
  {
    id: 'skincare-01',
    category: 'skincare',
    name: 'Serum Wajah Brightening Niacinamide 10% + Zinc Glow Skin 30ml',
    name_id: 'Serum Wajah Brightening Niacinamide 10% + Zinc Glow Skin 30ml',
    name_en: 'Brightening Facial Serum Niacinamide 10% + Zinc Glow Skin 30ml',
    name_ms: 'Serum Muka Mencerahkan Niacinamide 10% + Zinc Glow Skin 30ml',
    name_zh: '烟酰胺10%+锌 焕白提亮抗氧化精华原液 30ml 补水淡斑',
    image: 'assets/placeholder.svg',
    keywords: ['skincare', 'serum', 'niacinamide', 'kecantikan', 'beauty', 'wajah', 'glow', 'zinc', '精华液', '美白'],
    price: 89000,
    originalPrice: 120000,
    rating: 4.9,
    sold: 6400,
    isPromo: true,
    shop: 'Somethinc Official Store',
    marketplace: 'Shopee',
    location: 'Jakarta',
    url: getClientDirectMarketplaceUrl('Shopee', 'Serum Niacinamide 10% Zinc', 'skincare-01')
  },

  // ── BOOKS ────────────────────────────────────────────────────────────────
  {
    id: 'buku-01',
    category: 'books',
    name: 'Buku Pemrograman Web Modern Fullstack JavaScript & Python',
    name_id: 'Buku Pemrograman Web Modern Fullstack JavaScript & Python',
    name_en: 'Modern Fullstack Web Development Book JavaScript & Python',
    name_ms: 'Buku Pengaturcaraan Web Moden Fullstack JavaScript & Python',
    name_zh: '现代全栈Web开发实战教程 JavaScript与Python 从入门到精通',
    image: 'assets/placeholder.svg',
    keywords: ['buku', 'book', 'novel', 'pemrograman', 'coding', 'komik', 'edukasi', 'javascript', 'python', '书籍', '编程'],
    price: 120000,
    originalPrice: 145000,
    rating: 4.8,
    sold: 820,
    isPromo: true,
    shop: 'Gramedia Official',
    marketplace: 'Shopee',
    location: 'Jakarta',
    url: getClientDirectMarketplaceUrl('Shopee', 'Buku Pemrograman Web Modern', 'buku-01')
  }
];

/* ========================================================== */
/* 4. MULTI-LANGUAGE PRODUCT NAME RESOLVER                   */
/* ========================================================== */
function getProductLocalizedName(product, langKey = null) {
  const lang = langKey || getCurrentLang();
  if (!product) return '';

  if (lang === 'zh' && product.name_zh) return product.name_zh;
  if (lang === 'en' && product.name_en) return product.name_en;
  if (lang === 'ms' && product.name_ms) return product.name_ms;
  if (lang === 'id' && product.name_id) return product.name_id;

  return product[`name_${lang}`] || product.name || '';
}

function getMarketplaceSearchName(product, fallback = '') {
  return String(product?.marketplaceSearchName || product?.name_en || product?.name_id || product?.name || fallback).trim();
}

function getProductImageQuery(product, fallback = '') {
  const name = String(product?.imageQuery || product?.name_en || product?.name_id || product?.marketplaceSearchName || product?.name || fallback).trim();
  const category = String(product?.category || '').toLowerCase();
  // Use short, focused queries (2-4 words) for better Unsplash results
  const categoryHint = category.includes('wearable') ? 'smartwatch'
    : category.includes('audio') ? 'headphones'
      : category.includes('food') ? 'snack food'
        : category.includes('shoes') || category.includes('footwear') ? 'running shoes'
          : category.includes('bag') ? 'backpack bag'
            : category.includes('electronics') ? 'smartphone'
              : category.includes('skincare') || category.includes('beauty') ? 'skincare beauty'
                : category.includes('health') ? 'health supplement'
                  : category.includes('sleep') || category.includes('bed') ? 'bedding pillow'
                    : category.includes('home') || category.includes('kitchen') ? 'kitchen appliance'
                      : category.includes('fashion') ? 'fashion clothing'
                        : category.includes('books') ? 'books'
                          : '';
  // Take first 3-4 meaningful words from the product name
  const nameWords = name.split(/\s+/).slice(0, 3).join(' ');
  return `${nameWords} ${categoryHint}`.trim();
}

function getSearchImageUrl(product) {
  const image = product?.image || '';
  return isUsableProductImage(image) && /unsplash\.com/i.test(image) ? image : '';
}

function generateDynamicLocalizedProducts(query, langKey = null) {
  const q = String(query || '').trim();
  if (!q) return [];

  const lang = langKey || getCurrentLang();
  const qLower = q.toLowerCase();

  const categorySignals = [
    { regex: /flashdisk|flash\s*drive|usb\s*drive|pendrive|pen\s*drive|thumb\s*drive|otg|micro\s*sd|sd\s*card|memory\s*card|harddisk|hdd|ssd|flash\s*disk/i, category: 'storage', basePrice: 65000, image: 'assets/placeholder.svg' },
    { regex: /case|casing|charger|kabel|power\s*bank|tempered\s*glass|holder\s*hp|aksesoris|accessories/i, category: 'accessories', basePrice: 45000, image: 'assets/placeholder.svg' },
    { regex: /huawei|watch|smartwatch|jam tangan|garmin|apple watch|gt 5|gt5|smart band|wearable/i, category: 'wearable', basePrice: 3200000, image: 'assets/placeholder.svg' },
    { regex: /phone|hp|handphone|smartphone|samsung|xiaomi|redmi|poco|iphone|android|galaxy|oppo|vivo|realme|mobile|手机/i, category: 'electronics', basePrice: 2100000, image: 'assets/placeholder.svg' },
    { regex: /camera|dslr|kamera|mirrorless|canon|nikon|sony cam|action cam|相机|摄像头/i, category: 'camera', basePrice: 5600000, image: 'assets/placeholder.svg' },
    { regex: /audio|headphone|earphone|headset|tws|speaker|sound|mic|耳机|bluetooth|airpods/i, category: 'audio', basePrice: 195000, image: 'assets/placeholder.svg' },
    { regex: /sepatu|sneaker|shoes|running|sandal|kasut|鞋|sport/i, category: 'shoes', basePrice: 240000, image: 'assets/placeholder.svg' },
    { regex: /skincare|serum|cream|beauty|sunscreen|sabun|parfum|美妆|护肤/i, category: 'skincare', basePrice: 85000, image: 'assets/placeholder.svg' },
    { regex: /vitamin|suplemen|kesehatan|health|obat|multivitamin|probiotik|immune|supplement|imun|vit c|vitamin c|minyak ikan/i, category: 'health', basePrice: 90000, image: 'assets/placeholder.svg' },
    { regex: /kasur|bantal|sprei|selimut|guling|bed\s*cover|tempat\s*tidur|sleep/i, category: 'sleep', basePrice: 150000, image: 'assets/placeholder.svg' },
    { regex: /wajan|panci|blender|air\s*fryer|dapur|kitchen|peralatan\s*masak|rumah\s*tangga/i, category: 'home', basePrice: 120000, image: 'assets/placeholder.svg' },
    { regex: /kaos|baju|hoodie|celana|jaket|dress|kemeja|pakaian|fashion/i, category: 'fashion', basePrice: 85000, image: 'assets/placeholder.svg' },
    { regex: /buku|book|novel|komik|bacaan/i, category: 'books', basePrice: 75000, image: 'assets/placeholder.svg' },
    { regex: /tas|backpack|ransel|bag|selempang|beg|包|laptop bag/i, category: 'bag', basePrice: 115000, image: 'assets/placeholder.svg' },
    { regex: /choc|kitkat|snack|wafer|biskuit|makan|food|cake|kue|permen|mie|indomie|cemilan|零食|面/i, category: 'food', basePrice: 12000, image: 'assets/placeholder.svg' }
  ];

  const matchedCategory = categorySignals.find(signal => signal.regex.test(qLower)) || { category: 'general', basePrice: 65000, image: getCategoryFallbackImage('', [qLower]) };
  const category = matchedCategory.category;
  const basePrice = matchedCategory.basePrice;
  const img = '';

  const isMY = (typeof getCurrentRegion === 'function' ? getCurrentRegion() : 'id') === 'my';
  const shopsID = [
    { shop: 'Official Store Mall', marketplace: 'Shopee', location: 'Jakarta Pusat' },
    { shop: 'Star Seller Premium', marketplace: 'Tokopedia', location: 'Kab. Bogor' },
    { shop: 'Flagship Store ID', marketplace: 'Lazada', location: 'Surabaya' },
    { shop: 'Mall Official Store', marketplace: 'Shopee', location: 'Bandung' },
    { shop: 'Toko Lokal Terpercaya', marketplace: 'Shopee', location: 'Medan' },
    { shop: 'Super Seller Store', marketplace: 'Tokopedia', location: 'Bekasi' },
    { shop: 'Mega Store Indonesia', marketplace: 'Lazada', location: 'Tangerang' },
    { shop: 'Power Merchant Pro', marketplace: 'Tokopedia', location: 'Jakarta Barat' },
    { shop: 'Star+ Seller ID', marketplace: 'Shopee', location: 'Semarang' },
    { shop: 'Exclusive Store Official', marketplace: 'Lazada', location: 'Jakarta Selatan' },
    { shop: 'Pusat Grosir Murah', marketplace: 'Tokopedia', location: 'Yogyakarta' },
    { shop: 'Official Brand Store', marketplace: 'Shopee', location: 'Surakarta' }
  ];

  const shopsMY = [
    { shop: 'Shopee Mall Official MY', marketplace: 'Shopee MY', location: 'Kuala Lumpur' },
    { shop: 'LazMall Flagship Store MY', marketplace: 'Lazada MY', location: 'Petaling Jaya' },
    { shop: 'Preferred+ Seller MY', marketplace: 'Shopee MY', location: 'Selangor' },
    { shop: 'Official Brand Store Malaysia', marketplace: 'Shopee MY', location: 'Shah Alam' },
    { shop: 'Lazada Authorised Reseller', marketplace: 'Lazada MY', location: 'Kuala Lumpur' },
    { shop: 'Star Seller Malaysia', marketplace: 'Shopee MY', location: 'Penang' },
    { shop: 'Mega Store Malaysia', marketplace: 'Lazada MY', location: 'Johor Bahru' },
    { shop: 'Shopee Choice MY', marketplace: 'Shopee MY', location: 'Subang Jaya' },
    { shop: 'Flagship Store MY', marketplace: 'Lazada MY', location: 'Klang' },
    { shop: 'Direct Official MY', marketplace: 'Shopee MY', location: 'Cheras' },
    { shop: 'Premier Mall MY', marketplace: 'Lazada MY', location: 'Putrajaya' },
    { shop: 'Authentic Store MY', marketplace: 'Shopee MY', location: 'Cyberjaya' }
  ];

  const shops = isMY ? shopsMY : shopsID;

  const brand = /samsung|galaxy/i.test(qLower) ? 'Samsung ' : /xiaomi|redmi|poco/i.test(qLower) ? 'Xiaomi ' : /huawei|watch/i.test(qLower) ? 'Huawei ' : /iphone|apple/i.test(qLower) ? 'Apple ' : /case|casing|xundd/i.test(qLower) ? 'Xundd ' : /indomie|mie/i.test(qLower) ? (isMY ? 'Mamee ' : 'Indomie ') : /power bank/i.test(qLower) ? 'Xiaomi ' : '';
  const suffix = /watch|smartwatch|jam tangan/i.test(qLower) ? 'Smart Watch' : /phone|hp|handphone|smartphone|galaxy/i.test(qLower) ? 'Smartphone' : /headphone|earphone|tws/i.test(qLower) ? 'Audio' : '';
  const capitalizedQ = q.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const localizedQuery = lang === 'zh'
    ? (/handphone|phone|hp|smartphone|ponsel/i.test(q) ? '手机' : /laptop|notebook|komputer/i.test(q) ? '笔记本电脑' : /snack|cemilan|makanan/i.test(q) ? '零食' : capitalizedQ)
    : capitalizedQ;
  const localizedSuffix = lang === 'zh'
    ? (/phone|hp|smartphone|handphone/i.test(q) ? '智能手机' : /watch|smartwatch|jam tangan/i.test(q) ? '智能手表' : suffix)
    : suffix;

  let specificNames = null;
  if (/case|casing|xundd/i.test(qLower)) {
    specificNames = ['Xundd Casing Poco F7 Pro Clear Anti Shock', 'Xundd Casing Poco F7 Pro Magnetic Ring', 'Xundd Poco F7 Pro Premium Soft Case', 'Casing Poco F7 Pro Anti Gores Original', 'Tempered Glass Poco F7 Pro Full Cover', 'Xundd Case Poco F7 Pro Carbon Fiber'];
  } else if (/indomie|mie|mamee/i.test(qLower)) {
    specificNames = isMY ? ['Mamee Monster Noodle Snack Original 24 Packs', 'Mamee Chef Curry Laksa 4 Packs', 'Mamee Double Decker Prawn Crackers', 'Mamee Monster BBQ Flavor Family Box', 'Mamee Express Cup Tom Yam 6 Cups', 'Mamee Gold Instant Noodles Extra Spicy'] : ['Indomie Goreng Original 85g Pack 5 Pcs', 'Indomie Kuah Ayam Bawang 5 Pcs', 'Indomie Goreng Rendang Premium', 'Indomie Mi Goreng Jumbo 121g', 'Indomie Soto Lamongan Pack Hemat', 'Indomie Hot & Spicy 5 Pcs'];
  } else if (/power bank/i.test(qLower)) {
    specificNames = ['Power Bank Xiaomi 20000mAh Fast Charging', 'Xiaomi Power Bank 10000mAh Original', 'Power Bank Xiaomi 22.5W USB-C', 'Xiaomi Redmi Power Bank 20000mAh', 'Power Bank Xiaomi Slim Dual Port', 'Anker PowerCore 20000mAh Fast Charge'];
  } else if (/poco|xiaomi.*smartphone|smartphone.*xiaomi/i.test(qLower)) {
    specificNames = ['Xiaomi Poco F7 Pro 5G 12/256GB Garansi Resmi', 'Xiaomi Poco X7 Pro 5G AMOLED NFC', 'Xiaomi Redmi Note 14 Pro 5G', 'Xiaomi Poco F6 Snapdragon 8s Gen 3', 'Xiaomi Redmi Note 14 8/256GB', 'Xiaomi 14T Pro 5G Leica Camera 12/512GB'];
  } else if (/phone|hp|handphone|smartphone|ponsel/i.test(qLower)) {
    specificNames = isMY ? ['Samsung Galaxy S24 FE 5G Official MY', 'Xiaomi 14T Pro 5G Official MY', 'Apple iPhone 15 Official MY', 'OPPO Reno 12 5G Official MY', 'vivo V40 5G Official MY', 'Motorola Edge 50 Fusion MY', 'Redmi Note 14 Pro 5G MY', 'realme 13 Pro 5G MY', 'HONOR 200 5G MY', 'OnePlus Nord 4 MY', 'ASUS Zenfone 11 MY', 'Google Pixel 9 Official MY'] : ['Samsung Galaxy A55 5G Garansi Resmi', 'Xiaomi Redmi Note 13 Pro 5G Garansi Resmi', 'Apple iPhone 13 128GB iBox', 'OPPO Reno 12 5G Garansi Resmi', 'vivo V40 5G Garansi Resmi', 'Motorola Edge 50 Fusion', 'realme 13 Pro+ 5G Garansi Resmi', 'Infinix Note 40 Pro+', 'HONOR 200 5G Garansi Resmi', 'OnePlus Nord CE4', 'ASUS Zenfone 11', 'Google Pixel 8a Official Store'];
  } else if (/snack|cemilan|makanan|food|jajanan/i.test(qLower)) {
    specificNames = isMY ? ['Mamee Monster Noodle Snack 24 Packs', 'Milo Activ-Go Chocolate Malt 1kg', 'Twisties Cheese Party Pack', 'Gardenia Original Classic Bread 400g', 'OldTown White Coffee 3-in-1', 'KitKat Chocolate 4-Fingers', 'Maggi Instant Noodles 5 Pack', 'Oreo Original Sandwich Cookies'] : ['Indomie Goreng Original 5 Pcs', 'KitKat Chocolate 4-Fingers Nestle', 'Chitato Potato Chips Original', 'Oreo Sandwich Cookies Original', 'Roma Malkist Crackers', 'SilverQueen Chocolate Almond', 'Qtela Cassava Chips Balado', 'Tango Wafer Chocolate'];
  }

  const templates = {
    id: [
      `${brand}${localizedQuery} ${suffix} Original Resmi`.trim(),
      `${brand}${localizedQuery} Varian Terbaru Lengkap`.trim(),
      `${localizedQuery} [FREE ONGKIR] Stok Baru Resmi`.trim(),
      `${brand}${localizedQuery} Paket Hemat & Best Seller`.trim(),
      `${localizedQuery} Edisi Spesial Promo Diskon`.trim(),
      `${localizedQuery} Original 100% Kualitas Terpercaya`.trim(),
      `${brand}${localizedQuery} Edisi Pro Fast & Durable`.trim(),
      `${localizedQuery} Official Store Garansi Resmi`.trim(),
      `${brand}${localizedQuery} Bundle Promo Cashback Ekstra`.trim(),
      `${localizedQuery} Seri Terpopuler Rating 4.9`.trim(),
      `${localizedQuery} High Quality Import Grade`.trim(),
      `${brand}${localizedQuery} Plus Varian Eksklusif`.trim()
    ],
    en: [
      `${brand}${capitalizedQ} ${suffix} Premium Original`.trim(),
      `${brand}${capitalizedQ} Latest Variant Full Selection`.trim(),
      `${capitalizedQ} [FREE SHIPPING] Brand New Stock Official`.trim(),
      `${brand}${capitalizedQ} Best Value Pack & Best Seller`.trim(),
      `${capitalizedQ} Special Edition Mega Promo Deal`.trim(),
      `${capitalizedQ} 100% Original Trusted Choice`.trim(),
      `${brand}${capitalizedQ} Pro Ultra Edition Fast & Durable`.trim(),
      `${capitalizedQ} Official Store 1-Year Warranty`.trim(),
      `${brand}${capitalizedQ} Bundle Promo Extra Cashback`.trim(),
      `${capitalizedQ} Top Rated 4.9 Best Seller Series`.trim(),
      `${capitalizedQ} High Quality Import Grade Original`.trim(),
      `${brand}${capitalizedQ} Plus Exclusive Full Variant`.trim()
    ],
    ms: [
      `${brand}${capitalizedQ} ${suffix} Premium Asli`.trim(),
      `${brand}${capitalizedQ} Varian Terbaru Pilihan Lengkap`.trim(),
      `${capitalizedQ} [PENGHANTARAN PERCUMA] Stok Baharu Rasmi`.trim(),
      `${brand}${capitalizedQ} Pek Jimat & Terlaris`.trim(),
      `${capitalizedQ} Edisi Khas Promo Diskaun Besar`.trim(),
      `${capitalizedQ} Asli 100% Tempatan Dipercayai`.trim(),
      `${brand}${capitalizedQ} Edisi Pro Pantas & Tahan`.trim(),
      `${capitalizedQ} Kedai Rasmi Jaminan 1 Tahun`.trim(),
      `${brand}${capitalizedQ} Pakej Jimat Rebat Tambahan`.trim(),
      `${capitalizedQ} Siri Terlaris Rating 4.9 Ramai Peminat`.trim(),
      `${capitalizedQ} Kualiti Tinggi Gred Import Asli`.trim(),
      `${brand}${capitalizedQ} Plus Varian Eksklusif Terkini`.trim()
    ],
    zh: [
      `${brand}${localizedQuery} ${localizedSuffix} 正品热销精选`.trim(),
      `${brand}${localizedQuery} 全新多规格官方正品`.trim(),
      `${localizedQuery} 【包邮】官方新品现货保障`.trim(),
      `${brand}${localizedQuery} 超值装热卖好评精选`.trim(),
      `${localizedQuery} 特别限时优惠特价活动`.trim(),
      `${localizedQuery} 100%正品可信赖精选`.trim(),
      `${brand}${localizedQuery} Pro旗舰版 高性能持久`.trim(),
      `${localizedQuery} 官方正品 全国联保1年`.trim(),
      `${brand}${localizedQuery} 套装超值组合 返现特惠`.trim(),
      `${localizedQuery} 爆款推荐 4.9高评分热卖`.trim(),
      `${localizedQuery} 高品质进口原装正品`.trim(),
      `${brand}${localizedQuery} Plus尊享版 全型号现货`.trim()
    ]
  };

  if (specificNames) {
    templates.id = specificNames;
    templates.en = specificNames;
    templates.ms = specificNames;
    templates.zh = specificNames;
  }

  const mults = [1.0, 0.88, 1.16, 0.7, 0.94, 1.1, 1.05, 0.82, 1.25, 0.9, 1.12, 0.78];
  const soldList = [4200, 8400, 18000, 32000, 14000, 5400, 9200, 21000, 6800, 15500, 3800, 27000];

  return shops.map((sInfo, i) => {
    const price = Math.round(basePrice * mults[i]);
    const origPrice = Math.round(price * 1.22);
    const prodId = `dyn-${encodeURIComponent(qLower)}-${i}`;
    const nameId = templates.id[i % templates.id.length];
    const nameEn = templates.en[i % templates.en.length];
    const nameMs = templates.ms[i % templates.ms.length];
    const nameZh = templates.zh[i % templates.zh.length];
    const chosenName = templates[lang] ? templates[lang][i % templates[lang].length] : nameId;
    const finalImage = '';

    return {
      id: prodId,
      name: chosenName,
      name_id: nameId,
      name_en: nameEn,
      name_ms: nameMs,
      name_zh: nameZh,
      marketplaceSearchName: q,
      category,
      image: finalImage,
      keywords: [qLower, category],
      price,
      originalPrice: origPrice,
      rating: 4.6 + (i % 4) * 0.1,
      sold: soldList[i],
      isPromo: i % 2 === 0,
      ...sInfo,
      url: getClientDirectMarketplaceUrl(sInfo.marketplace, q, prodId),
      priceVerified: false,
      imageSource: 'unsplash-only'
    };
  });
}

/* ========================================================== */
/* 5. FAST SEARCH ENGINE (CLIENT + BACKEND HYBRID)           */
/* ========================================================== */
const clientSearchCache = new Map();
const CLIENT_SEARCH_CACHE_MAX = 120;
const CLIENT_SEARCH_CACHE_TTL = 30 * 60 * 1000;

function getClientSearchCache(key) {
  const entry = clientSearchCache.get(key);
  if (!entry) return null;
  if (Date.now() - entry.ts > CLIENT_SEARCH_CACHE_TTL) {
    clientSearchCache.delete(key);
    return null;
  }
  return entry.data;
}

function setClientSearchCache(key, data) {
  if (clientSearchCache.size >= CLIENT_SEARCH_CACHE_MAX) {
    clientSearchCache.delete(clientSearchCache.keys().next().value);
  }
  clientSearchCache.set(key, { data, ts: Date.now() });
}

function isRestrictedProductQuery(query = '') {
  return /\b(weapon|firearm|gun|pistol|rifle|ammo|ammunition|explosive|bomb|grenade|narcotic|cocaine|heroin|meth|fentanyl|carding|stolen card|counterfeit money|fake id|malware|ransomware|keylogger|phishing kit|senjata|bom|peluru|bahan peledak|obat terlarang|sabu|kokain|heroin|kartu curian|uang palsu|ktp palsu)\b/i.test(query);
}

function expandMultilingualProductQuery(query = '') {
  const aliases = {
    '手机': 'phone smartphone hp', '手表': 'watch smartwatch jam tangan', '智能手表': 'smartwatch watch',
    '零食': 'snack food makanan', '食品': 'food makanan', '鞋': 'shoes sepatu kasut', '包': 'bag tas',
    '电脑': 'computer laptop', '耳机': 'headphone earphone', '相机': 'camera kamera',
    '药品': 'medicine obat', '购物': 'shopping product', '跑鞋': 'running shoes sepatu',
    '手机壳': 'phone case casing', '充电器': 'charger', '笔记本': 'laptop notebook',
    '美妆': 'beauty skincare', '防晒': 'sunscreen', '维生素': 'vitamin', '巧克力': 'chocolate cokelat',
    'telefon': 'phone smartphone', 'handphone': 'phone smartphone hp', 'ponsel': 'phone smartphone',
    'kasut': 'shoes sepatu', 'snek': 'snack food', 'coklat': 'chocolate cokelat',
    'beg': 'bag tas', 'ubat': 'medicine obat', 'komputer riba': 'laptop notebook'
  };
  const text = String(query || '').trim();
  return [text, ...Object.entries(aliases).filter(([term]) => text.includes(term)).map(([, value]) => value)].join(' ');
}
const searchFeedState = {
  query: '',
  products: [],
  visibleCount: 0,
  nextStart: 0,
  isLoading: false,
  hasMore: true,
  requestId: 0,
  error: ''
};

const SEARCH_INITIAL_SIZE = 8;
const SEARCH_BATCH_SIZE = 12;

async function loadMoreSearchResults(reset = false) {
  const query = (searchFeedState.query || searchInput?.value || '').trim();
  if (!query || searchFeedState.isLoading) { console.log('[SEARCH] blocked:', !query ? 'no query' : 'already loading'); return; }

  if (reset) {
    searchFeedState.requestId += 1;
    searchFeedState.query = query;
    searchFeedState.products = [];
    searchFeedState.visibleCount = 0;
    searchFeedState.nextStart = 0;
    searchFeedState.hasMore = true;
    searchFeedState.error = '';
    showDoomEnd('search', false);
  }
  if (!searchFeedState.hasMore) { console.log('[SEARCH] no more'); return; }

  const requestId = searchFeedState.requestId;
  const requestQuery = query;
  searchFeedState.isLoading = true;
  showDoomLoader('search', true);
  console.log('[SEARCH] fetching:', query);

  let pageProducts = [];
  try {
    pageProducts = await fetchMarketplaceProducts(query, searchFeedState.nextStart);
    console.log('[SEARCH] got:', pageProducts.length, 'products');
  } catch (err) {
    console.error('[SEARCH] fetch error:', err);
    pageProducts = searchCatalogByKeyword(query);
    console.log('[SEARCH] fallback:', pageProducts.length, 'products');
  }

  if (requestId !== searchFeedState.requestId || requestQuery !== searchFeedState.query) {
    console.log('[SEARCH] stale request, aborting');
    searchFeedState.isLoading = false;
    showDoomLoader('search', false);
    return;
  }
  const knownKeys = new Set(searchFeedState.products.map(getRecommendationProductKey));

  pageProducts.forEach(product => {
    const key = getRecommendationProductKey(product);
    if (!knownKeys.has(key)) {
      knownKeys.add(key);
      searchFeedState.products.push(product);
    }
  });

  searchFeedState.nextStart += pageProducts.length || SEARCH_BATCH_SIZE;
  const incrementSize = searchFeedState.visibleCount === 0 ? SEARCH_INITIAL_SIZE : SEARCH_BATCH_SIZE;
  searchFeedState.visibleCount = Math.min(
    searchFeedState.products.length,
    searchFeedState.visibleCount + incrementSize
  );
  searchFeedState.hasMore = pageProducts.length > 0;
  searchFeedState.isLoading = false;
  showDoomLoader('search', false);

  try {
    await renderMarketplaceResults(query, searchFeedState.products.slice(0, searchFeedState.visibleCount), true);
  } catch (err) {
    console.error('[SEARCH] render error:', err);
  }

  if (!searchFeedState.hasMore) {
    showDoomEnd('search', true);
  }
}

function filterResultsByRequestedBrand(products = [], query = '') {
  const q = String(query || '').toLowerCase();
  const brandRules = [
    { pattern: /\bhuawei\b/, terms: ['huawei'] },
    { pattern: /\bxiaomi\b|\bredmi\b|\bpoco\b/, terms: ['xiaomi', 'redmi', 'poco'] },
    { pattern: /\bapple\b|\biphone\b|\bipad\b/, terms: ['apple', 'iphone', 'ipad'] },
    { pattern: /\bsamsung\b|\bgalaxy\b/, terms: ['samsung', 'galaxy'] },
    { pattern: /\bgarmin\b/, terms: ['garmin'] }
  ];
  const requestedBrand = brandRules.find(rule => rule.pattern.test(q));
  if (!requestedBrand) return products;

  return products.filter(product => {
    const productText = [
      product.name,
      product.name_id,
      product.name_en,
      product.name_ms,
      product.name_zh,
      ...(Array.isArray(product.keywords) ? product.keywords : [])
    ].join(' ').toLowerCase();
    return requestedBrand.terms.some(term => productText.includes(term));
  });
}

function filterResultsByRequestedIntent(products = [], query = '') {
  const q = String(query || '').toLowerCase();
  const intentRules = [
    { pattern: /smart\s*band|mi\s*band|fitness\s*band|fitness\s*tracker/, terms: ['smart band', 'smartband', 'mi band', 'fitness band', 'fitness tracker', 'band', 'tracker'] },
    { pattern: /\bwatch\b|smartwatch|jam\s+tangan|wearable|garmin|fitbit|gt\s*5\s*pro/, terms: ['watch', 'smartwatch', 'jam tangan', 'wearable'] },
    { pattern: /smartphone|handphone|\bphone\b|\bhp\b|android/, terms: ['smartphone', 'handphone', 'phone', 'hp', 'android'] },
    { pattern: /laptop|notebook|macbook|komputer/, terms: ['laptop', 'notebook', 'macbook', 'komputer'] },
    { pattern: /camera|kamera|dslr|mirrorless/, terms: ['camera', 'kamera', 'dslr', 'mirrorless'] },
    { pattern: /headphone|earphone|headset|speaker|tws|audio/, terms: ['headphone', 'earphone', 'headset', 'speaker', 'tws', 'audio'] },
    { pattern: /sepatu|shoes|sneaker|running|sandal|kasut/, terms: ['sepatu', 'shoes', 'sneaker', 'running', 'sandal', 'kasut'] },
    { pattern: /skincare|serum|moisturizer|beauty|sunscreen|cream|parfum/, terms: ['skincare', 'serum', 'moisturizer', 'beauty', 'sunscreen', 'cream', 'parfum'] },
    { pattern: /indomie|mie\s+instan|mi\s+instan|snack|kitkat|cokelat|wafer/, terms: ['indomie', 'mie', 'mi instan', 'snack', 'kitkat', 'cokelat', 'wafer'] },
    { pattern: /charger|casing|case|kabel|power\s*bank|tempered|holder/, terms: ['charger', 'casing', 'case', 'kabel', 'power bank', 'tempered', 'holder', 'accessories'] }
  ];
  const requestedIntent = intentRules.find(rule => rule.pattern.test(q));
  if (!requestedIntent) return products;

  return products.filter(product => {
    const productText = [product.name, product.name_id, product.name_en, product.name_ms, product.name_zh, product.category, ...(Array.isArray(product.keywords) ? product.keywords : [])]
      .join(' ').toLowerCase();
    const isBag = /\b(tas|bag|backpack|ransel|sling)\b/.test(productText);
    if (/laptop|notebook|macbook|komputer/.test(q) && (isBag || !/laptop|notebook|macbook|komputer|vivobook|ideapad|thinkpad/.test(productText))) return false;
    if (/smartphone|handphone|\bphone\b|\bhp\b|android/.test(q) && (isBag || /case|casing|charger|power bank|tas laptop/.test(productText) || !/smartphone|handphone|\bphone\b|\bhp\b|android|iphone|galaxy|xiaomi|samsung|oppo|vivo|realme/.test(productText))) return false;
    return requestedIntent.terms.some(term => productText.includes(term));
  });
}

async function fetchMarketplaceProducts(query, pageStart = 0) {
  const searchQuery = (query || '').trim();
  if (!searchQuery) return [];

  // Check cache (only use non-empty cache)
  const cacheKey = `${searchQuery.toLowerCase()}::${pageStart}::${getCurrentRegion()}`;
  const cached = getClientSearchCache(cacheKey);
  if (cached && cached.length > 0) { console.log('[FETCH] cache hit:', cached.length); return cached; }

  // Fetch from server
  console.log('[FETCH] calling server...');
  try {
    const resp = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}&start=${pageStart}&region=${getCurrentRegion()}`);
    console.log('[FETCH] server response:', resp.status);
    if (resp.ok) {
      const data = await resp.json();
      console.log('[FETCH] parsed:', data.length, 'products');
      if (Array.isArray(data) && data.length > 0) {
        setClientSearchCache(cacheKey, data);
        return data;
      }
    }
  } catch (e) {
    console.error('[FETCH] error:', e);
  }

  // Server returned nothing — try local catalog
  const local = searchCatalogByKeyword(searchQuery);
  console.log('[FETCH] local fallback:', local.length);
  if (local.length > 0) {
    setClientSearchCache(cacheKey, local);
    return local;
  }

  return [];
}

const recommendationState = {
  products: [],
  loadedQueries: new Set(),
  queryPage: 0,
  queryCursor: 0,
  queryCycle: 0,
  visibleCount: 0,
  isLoading: false,
  hasMore: true,
  requestId: 0
};

const categoryFeedState = {
  products: [],
  categoryKey: '',
  query: '',
  visibleCount: 0,
  batch: 0,
  isLoading: false
};

function getRecommendationProfile() {
  try {
    const storedProfile = JSON.parse(localStorage.getItem('yj_recommendation_profile')) || {};
    return {
      searches: storedProfile.searches || {},
      cart: storedProfile.cart || {},
      clicks: storedProfile.clicks || {},
      recentSearches: Array.isArray(storedProfile.recentSearches) ? storedProfile.recentSearches : []
    };
  } catch {
    return { searches: {}, cart: {}, clicks: {} };
  }
}

function saveRecommendationProfile(profile) {
  localStorage.setItem('yj_recommendation_profile', JSON.stringify(profile));
}

function inferRecommendationCategory(value = '') {
  const text = String(value).toLowerCase();
  const categoryRules = [
    ['snack', ['snack', 'cemilan', 'makanan', 'kue', 'minuman', 'kopi', 'cokelat']],
    ['electronics', ['elektronik', 'hp', 'handphone', 'smartphone', 'laptop', 'komputer', 'tablet', 'kamera', 'earphone', 'headphone', 'smartwatch']],
    ['beauty', ['skincare', 'kosmetik', 'makeup', 'kecantikan', 'serum', 'sunscreen', 'parfum']],
    ['sleep', ['tidur', 'kasur', 'bantal', 'selimut', 'sprei', 'bed']],
    ['fashion', ['baju', 'pakaian', 'sepatu', 'sandal', 'tas', 'fashion']],
    ['home', ['rumah', 'dapur', 'masak', 'peralatan', 'alat tulis', 'sanitasi', 'bersih']]
  ];

  return categoryRules.find(([, keywords]) => keywords.some(keyword => text.includes(keyword)))?.[0] || 'general';
}

function recordRecommendationSignal(type, value, amount = 1) {
  const category = inferRecommendationCategory(value);
  const profile = getRecommendationProfile();
  profile[type][category] = (profile[type][category] || 0) + amount;
  if (type === 'searches') {
    const query = String(value || '').trim();
    profile.recentSearches = [query, ...(profile.recentSearches || []).filter(item => item !== query)].slice(0, 8);
  }
  saveRecommendationProfile(profile);
}

function getRecommendationQueries() {
  const profile = getRecommendationProfile();
  const cartSignals = {};
  getCart().forEach(item => {
    const category = inferRecommendationCategory(`${item.category || ''} ${item.name || ''}`);
    cartSignals[category] = (cartSignals[category] || 0) + (Number(item.qty) || 1);
  });
  const scores = {};
  const addScores = (values, multiplier) => {
    Object.entries(values || {}).forEach(([category, score]) => {
      scores[category] = (scores[category] || 0) + (Number(score) || 0) * multiplier;
    });
  };

  addScores(profile.searches, 3);
  addScores({ ...profile.cart, ...cartSignals }, 4);
  addScores(profile.clicks, 2);

  const isMY = (typeof getCurrentRegion === 'function' ? getCurrentRegion() : 'id') === 'my';

  const categoryQueryMapID = {
    snack: ['Indomie Goreng Pack', 'KitKat Chocolate Box', 'Biskuit Marie Regal', 'Keripik Kentang Balado'],
    electronics: ['Xiaomi Poco F7 Pro', 'Laptop ASUS Vivobook', 'Headphone Wireless Bluetooth', 'Smartwatch AMOLED IP68', 'Kamera Mirrorless 4K', 'Monitor Gaming 27 Inch'],
    beauty: ['Serum Niacinamide 10%', 'Sunscreen SPF 50 Lightweight', 'Moisturizer Ceramide Barrier', 'Facial Wash Gentle Cleanser'],
    sleep: ['Kasur Busa Orthopedic', 'Bantal Memory Foam Ergonomis', 'Sprei Katun Jepang', 'Selimut Fleece Hangat'],
    fashion: ['Kaos Cotton Combed Unisex', 'Hoodie Fleece Oversize', 'Celana Cargo Parasut', 'Sepatu Sneakers Running', 'Tas Ransel Laptop'],
    home: ['Wajan Anti Lengket Granite', 'Panci Stainless Steel', 'Blender Portable Juicer', 'Air Fryer Digital 4L'],
    health: ['Vitamin C 1000mg Imun Booster', 'Omega 3 Fish Oil 1000mg', 'Multivitamin Daily Complete']
  };

  const categoryQueryMapMY = {
    snack: ['Mamee Monster Noodle', 'Milo Activ-Go 1kg', 'Old Town White Coffee', 'Twisties Cheese', 'Gardenia Original Bread'],
    electronics: ['Samsung Galaxy S24 FE', 'Xiaomi 14T Pro Leica', 'Apple iPhone 15 Malaysia', 'Sony WH-1000XM5', 'ASUS Vivobook 15X OLED', 'Huawei Watch GT 4'],
    beauty: ["L'Oreal Paris UV Defender", 'Cetaphil Gentle Skin Cleanser', 'Watsons Tea Tree Face Wash'],
    sleep: ['Kasur Busa Orthopedic', 'Bantal Memory Foam Ergonomis', 'Sprei Katun Jepang', 'Selimut Fleece Hangat'],
    fashion: ['Nike Air Max 270 React', 'Bata Comfit Casual Shoes', 'Padini Authentic Chino Pants'],
    home: ['Philips Air Purifier AC1215', 'Panasonic Rice Cooker 1.8L'],
    health: ["Brand's Chicken Essence", "Scott's Emulsion DHA", 'Clarinase Repetabs Allergy', 'Blackmores Bio C 1000mg']
  };

  const categoryQueryMap = isMY ? categoryQueryMapMY : categoryQueryMapID;


  const ranked = Object.entries(scores)
    .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
    .map(([category]) => category);
  const meaningfulRanked = ranked.filter(category => category !== 'general' && categoryQueryMap[category]);
  const defaultCategories = ['electronics', 'snack', 'beauty', 'sleep', 'fashion', 'home', 'health'];
  const rankedCategories = [...meaningfulRanked, ...defaultCategories.filter(category => !meaningfulRanked.includes(category))];

  // Use the user's actual recent search queries for personalized recommendations
  const recentSearches = Array.isArray(profile.recentSearches) ? profile.recentSearches : [];
  const personalizedQueries = recentSearches.filter(q => q && q.trim().length > 1);
  return [...new Set([...personalizedQueries, ...rankedCategories.flatMap(category => categoryQueryMap[category] || [])])];
}

function isTrustedRecommendationProduct(product) {
  if (!product || product.isOfficial === false) return false;
  const shopText = `${product.shop || ''} ${product.marketplace || ''}`;
  return product.isOfficial === true || /official|mall|flagship|trusted|star seller|preferred|premium|power merchant|authorized|authorised/i.test(shopText);
}

function getRecommendationQualityScore(product) {
  const price = Number(product.price) || 0;
  const originalPrice = Number(product.originalPrice) || 0;
  const discount = originalPrice > price ? (1 - price / originalPrice) * 100 : 0;
  const rating = Number(product.rating) || 0;
  const sold = Number(product.sold) || 0;
  return (isTrustedRecommendationProduct(product) ? 40 : 0) + discount * 2 + rating * 8 + Math.log10(sold + 1) * 4;
}

function getRecommendationCatalogFallback(query = '') {
  const value = String(query).toLowerCase();
  const category = /health|vitamin|suplemen|obat|kesehatan/.test(value) ? 'health'
    : /phone|hp|smartphone|laptop|headphone|watch|elektronik/.test(value) ? 'electronics'
      : /sepatu|shoes|running|sneaker/.test(value) ? 'shoes'
        : /tas|bag|backpack/.test(value) ? 'bag'
          : /snack|makanan|indomie|kitkat/.test(value) ? 'food'
            : /serum|skincare|sunscreen|beauty/.test(value) ? 'skincare'
              : /kasur|bantal|sprei|selimut/.test(value) ? 'sleep'
                : /wajan|panci|blender|dapur/.test(value) ? 'home'
                  : null;
  if (!category) return [];
  return getActiveCatalog().filter(product => product.category === category && product.isOfficial !== false);
}

function getRecommendationInitialSize() {
  return window.matchMedia?.('(max-width: 640px)').matches ? 8 : 12;
}

function normalizeProductIdentityText(value = '') {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function getRecommendationProductKey(product) {
  const name = normalizeProductIdentityText(product.name_id || product.name_en || product.name_ms || product.name_zh || product.name || 'unnamed');
  const shop = normalizeProductIdentityText(product.shop || product.marketplace || 'unknown shop');
  const marketplace = normalizeProductIdentityText(product.marketplace || 'unknown marketplace');
  const price = Math.round(Number(product.price) || 0);
  return `${name}|${shop}|${marketplace}|${price}`;
}

function deduplicateProducts(products = []) {
  const seen = new Set();
  return (Array.isArray(products) ? products : []).filter(product => {
    const key = getRecommendationProductKey(product);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function isUsableProductImage(imageUrl = '') {
  return typeof imageUrl === 'string'
    && /^https?:\/\//i.test(imageUrl)
    && !/placeholder|pixel|avatar|logo|icon/i.test(imageUrl);
}

function getProductSpecificImage(productName = '') {
  const name = String(productName).toLowerCase();
  if (/power bank|powerbank|portable charger/.test(name)) return 'assets/placeholder.svg';
  if (/poco|xiaomi|redmi|android|smartphone|handphone|\bphone\b/.test(name)) return 'assets/placeholder.svg';
  if (/galaxy tab|samsung.*tab/.test(name)) return 'assets/placeholder.svg';
  if (/iphone|ipad|apple/.test(name)) return 'assets/placeholder.svg';
  return '';
}

function getSemanticProductImage(productName = '', category = '') {
  const name = String(productName || '').toLowerCase();
  const cat = String(category || '').toLowerCase();

  // 0a. Storage & Flashdisks (Checked first to prevent brand names like Xiaomi/Samsung flashdisk matching phone)
  if (/flashdisk|flash\s*drive|usb\s*drive|pendrive|pen\s*drive|thumb\s*drive|otg|micro\s*sd|sd\s*card|memory\s*card|harddisk|hdd|ssd/.test(name)) {
    return 'assets/placeholder.svg';
  }

  // 0b. Smartphones (Checked first to prevent phone names being tagged as watches/accessories)
  if (/poco|redmi|xiaomi|samsung|iphone|smartphone|handphone|\bhp\b|android|galaxy/i.test(name) && !/case|casing|softcase|hardcase|anti\s*shock|xundd|tempered|charger|kabel|holder|power\s*bank|flashdisk|flash\s*drive|usb|pendrive|otg|sd\s*card|memory|ssd|hdd/i.test(name)) {
    return 'assets/placeholder.svg';
  }

  // 1. Wearables & Watches
  if (/smart\s*band|mi\s*band|fitness\s*band|fitness\s*tracker/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/\bwatch\b|smartwatch|jam\s+tangan|garmin|fitbit|gt\s*5\s*pro|apple\s*watch|galaxy\s*watch/.test(name) && !/poco|redmi|xiaomi\s*14|iphone|galaxy\s*s\d+/i.test(name)) {
    return 'assets/placeholder.svg';
  }

  // 2. Computers, Monitors & Cameras
  if (/laptop|notebook|macbook|thinkpad|vivobook|komputer/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/monitor|layar\s*monitor|gaming\s*monitor/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/keyboard|mouse\s*gaming|mechanical\s*keyboard/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/camera|kamera|dslr|mirrorless|canon|nikon|sony\s*alpha/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/tablet|ipad|galaxy\s*tab/.test(name)) {
    return 'assets/placeholder.svg';
  }

  // 3. Audio & Gaming Headset
  if (/headset\s*gaming|gaming\s*headset/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/headphone|over-ear/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/earphone|earbuds|tws|airpods|in-ear/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/speaker|soundbar|bluetooth\s*speaker/.test(name)) {
    return 'assets/placeholder.svg';
  }

  // 4. Mobile Accessories
  if (/power\s*bank|powerbank/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/case|casing|softcase|hardcase|anti\s*shock|xundd/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/tempered\s*glass|screen\s*protector|anti\s*gores/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/charger|adapter|fast\s*charging\s*25w|adaptor/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/kabel\s*data|usb-c\s*cable|cable\s*type-c|kabel\s*charger/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/holder\s*hp|phone\s*holder|magnetic\s*mount/.test(name)) {
    return 'assets/placeholder.svg';
  }

  // 5. Smartphones (checked after accessories)
  if (/poco|redmi|xiaomi|samsung|iphone|smartphone|handphone|\bhp\b|android|galaxy/.test(name)) {
    return 'assets/placeholder.svg';
  }

  // 6. Fashion & Footwear
  if (/sepatu|sneaker|running|sport\s*shoes/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/sandal|selop|flip\s*flop/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/tas\s*selempang|sling\s*bag|shoulder\s*bag/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/tas|backpack|ransel|daypack/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/hoodie|sweater/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/celana|cargo|pants|jeans|trousers/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/kemeja|linen\s*casual|shirt/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/jaket|varsity|bomber|jacket/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/dress|gaun|midi\s*dress/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/kaos|t-shirt|tshirt/.test(name)) {
    return 'assets/placeholder.svg';
  }

  // 7. Skincare & Beauty
  if (/sunscreen|tabir\s*surya|sunblock/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/moisturizer|ceramide|pelembab/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/facial\s*wash|cleanser|sabun\s*cuci\s*muka/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/lip\s*tint|lipstick|lip\s*matte/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/micellar\s*water|cleansing\s*water/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/serum|niacinamide|brightening|retinol/.test(name)) {
    return 'assets/placeholder.svg';
  }

  // 8. Food & Beverages
  if (/indomie|mie\s+goreng|mi\s+goreng|mie\s+kuah|mi\s+kuah|mie\s+instan|mi\s+instan/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/biskuit|marie|regal|cookies/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/keripik|chips|snack\s*kentang/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/kopi|coffee|kopi\s*susu/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/kitkat|cokelat|chocolate|wafer|snack|cemilan/.test(name)) {
    return 'assets/placeholder.svg';
  }

  // 9. Health & Supplements
  if (/omega\s*3|minyak\s*ikan|fish\s*oil/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/probiotik|probiotic|pencernaan/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/zinc|daya\s*tahan/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/vitamin\s*c|vit\s*c|paracetamol|obat|tablet|kapsul|multivitamin|suplemen/.test(name)) {
    return 'assets/placeholder.svg';
  }

  // 10. Home & Kitchen
  if (/wajan|frying\s*pan|teflon/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/panci|pot\s*stainless|cooking\s*pot/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/blender|juicer/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/air\s*fryer/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/rak\s*dapur|kitchen\s*rack|organizer/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/pisau\s*dapur|kitchen\s*knife|set\s*pisau/.test(name)) {
    return 'assets/placeholder.svg';
  }

  // 11. Bedding & Sleep
  if (/kasur|matras|mattress|tempat\s*tidur/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/bantal|pillow|guling|bolster/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/sprei|bed\s*sheet|bedsheet/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/selimut|blanket/.test(name)) {
    return 'assets/placeholder.svg';
  }
  if (/bed\s*cover|bedcover/.test(name)) {
    return 'assets/placeholder.svg';
  }

  // 12. Books
  if (/buku|book|novel|komik/.test(name)) {
    return 'assets/placeholder.svg';
  }

  // Category based fallbacks if no keyword matched
  if (cat.includes('wearable')) return 'assets/placeholder.svg';
  if (cat.includes('audio')) return 'assets/placeholder.svg';
  if (cat.includes('shoes')) return 'assets/placeholder.svg';
  if (cat.includes('bag')) return 'assets/placeholder.svg';
  if (cat.includes('food')) return 'assets/placeholder.svg';
  if (cat.includes('health')) return 'assets/placeholder.svg';
  if (cat.includes('sleep') || cat.includes('bed')) return 'assets/placeholder.svg';
  if (cat.includes('home') || cat.includes('kitchen')) return 'assets/placeholder.svg';
  if (cat.includes('fashion')) return 'assets/placeholder.svg';
  if (cat.includes('beauty') || cat.includes('skincare')) return 'assets/placeholder.svg';
  if (cat.includes('accessories')) return 'assets/placeholder.svg';
  return '';
}

function getPreferredProductImage(productName = '', category = '', originalImage = '', searchQuery = '') {
  if (isUsableProductImage(originalImage)) {
    return window.location.protocol.startsWith('http')
      ? `/api/image-proxy?url=${encodeURIComponent(originalImage)}`
      : originalImage;
  }
  const semanticImage = getSemanticProductImage(productName, category);
  if (semanticImage && semanticImage !== 'assets/placeholder.svg') return semanticImage;
  const specificImage = getProductSpecificImage(productName);
  if (specificImage && specificImage !== 'assets/placeholder.svg') return specificImage;
  return getQueryImageByCategory(`${searchQuery} ${productName}`, category);
}

// Transparent 1x1 placeholder — keeps <img> alive so hydrateSearchImages can replace it later
const IMG_PLACEHOLDER = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

function getPreferredSearchImage(product) {
  const image = product?.image || '';
  if (image && image.startsWith('http')) {
    return `/api/image-proxy?url=${encodeURIComponent(image)}`;
  }
  return 'assets/placeholder.svg';
}

function getSafeMarketplaceUrl(productUrl, marketplace, productName, productId) {
  if (getCurrentRegion() === 'my') {
    return getClientDirectMarketplaceUrl('Shopee MY', productName, productId, 'my');
  }
  const fallbackUrl = getClientDirectMarketplaceUrl(marketplace, productName, productId);
  try {
    const parsedUrl = new URL(productUrl || fallbackUrl, window.location.origin);
    const allowedHost = /(^|\.)shopee\.co\.id$|(^|\.)tokopedia\.com$|(^|\.)lazada\.co\.id$/i.test(parsedUrl.hostname);
    return parsedUrl.protocol === 'https:' && allowedHost ? parsedUrl.href : fallbackUrl;
  } catch {
    return fallbackUrl;
  }
}

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatSafeAiText(value = '') {
  return escapeHtml(String(value || ''))
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n[\*-]/g, '<br>• ')
    .replace(/\n/g, '<br>');
}

function renderRecommendationCards(products, append = false) {
  const container = document.getElementById('homeRecommendGrid');
  if (!container) return;
  const lang = getCurrentLang();
  const region = getCurrentRegion();
  const langData = i18nDictionary[lang] || i18nDictionary.id;
  const uniqueProducts = deduplicateProducts(products);

  // In append mode, skip products already rendered
  let productsToRender = uniqueProducts;
  if (append) {
    const existingIds = new Set();
    container.querySelectorAll('[data-product-id]').forEach(el => existingIds.add(el.dataset.productId));
    productsToRender = uniqueProducts.filter(p => !existingIds.has(String(p.id)));
    if (productsToRender.length === 0) return;
  }

  const cardHtml = productsToRender.map((product, index) => {
    let displayName = getProductLocalizedName(product, lang);
    if (/poco|xiaomi\s*poco/i.test(displayName) && /smartwatch|strap/i.test(displayName)) {
      displayName = displayName.replace(/smartwatch\s*strap\s*silicone\s*premium/gi, '5G 12/256GB Garansi Resmi TAM').replace(/smartwatch\s*strap/gi, '5G').replace(/smartwatch/gi, '5G');
      product.category = 'electronics';
    }
    const safeDisplayName = escapeHtml(displayName);
    const productKeywords = Array.isArray(product.keywords) ? product.keywords.join(' ') : '';
    const imageQuery = `${getProductImageQuery(product, displayName)} ${product.category || ''} ${productKeywords}`;
    let price = Number(product.price) || 0;
    if (price < 500000 && /poco\s*f7|poco\s*x7|xiaomi\s*14|samsung\s*galaxy\s*s/i.test(displayName)) {
      price = 6899000;
    }
    const image = getPreferredSearchImage(product);
    const marketplace = product.marketplace || 'Marketplace';
    const displayMarketplace = region === 'my' ? 'Shopee MY' : marketplace;
    const safeMarketplace = escapeHtml(displayMarketplace);
    const marketplaceLower = displayMarketplace.toLowerCase();
    const sourceClass = marketplaceLower.includes('shopee') ? 'source-shopee'
      : marketplaceLower.includes('tokopedia') ? 'source-tokopedia'
      : marketplaceLower.includes('lazada') ? 'source-lazada'
      : 'source-default';
    const marketplaceName = getMarketplaceSearchName(product, displayName);
    const marketplaceUrl = getSafeMarketplaceUrl(product.url, displayMarketplace, marketplaceName, product.id);
    
    const rating = Number(product.rating) || (4.7 + (index % 3) * 0.1);
    const soldCount = product.sold ? (typeof product.sold === 'number' ? (product.sold >= 1000 ? `${(product.sold / 1000).toFixed(1)}rb` : product.sold) : product.sold) : `${1.2 + (index % 5) * 0.8}rb`;
    const origPrice = product.originalPrice && product.originalPrice > price ? product.originalPrice : Math.round(price * 1.2);
    const discountPct = Math.round(((origPrice - price) / origPrice) * 100);

    const cachedEntry = window._imageCache?.[product.category || ''];
    const cachedImg = cachedEntry?.url || '';
    const imgSrc = cachedImg || 'assets/placeholder.svg';
    const needsImage = cachedImg ? 'false' : 'true';
    const cachedPhotographer = cachedEntry?.data?.photographerName || '';
    return `
      <article class="product-card recommend-prod-card" data-product-id="${escapeHtml(product.id)}" data-recommendation-product="true">
        <div class="product-img-box prod-click-detail" data-product-id="${escapeHtml(product.id)}" data-marketplace-url="${escapeHtml(marketplaceUrl)}" title="${escapeHtml(langData.viewInStore || 'Lihat di')} ${escapeHtml(marketplace)}">
          <span class="product-badge">${discountPct > 0 ? `-${discountPct}%` : 'HOT'}</span>
          <img src="${escapeHtml(imgSrc)}" alt="${safeDisplayName}" class="prod-img search-product-img" data-needs-image="${needsImage}" data-category="${escapeHtml(product.category || '')}" data-photographer="${escapeHtml(cachedPhotographer)}">
        </div>
        <div class="product-info">
          <div class="prod-meta-row">
            <span class="source-tag ${sourceClass}" title="${escapeHtml(langData.viewInStore || 'Lihat di')} ${safeMarketplace}">${safeMarketplace}</span>
            <span class="prod-rating">★ ${rating.toFixed(1)}</span>
            <span class="prod-sold">${soldCount} ${langData.soldText || 'terjual'}</span>
          </div>
          <div class="comparison-heading prod-click-detail" data-product-id="${escapeHtml(product.id)}" data-marketplace-url="${escapeHtml(marketplaceUrl)}">
            <h4 title="${safeDisplayName}">${safeDisplayName}</h4>
          </div>
          <div class="product-price">
            <span class="price" data-base-price="${price}">${formatCurrency(price, region)}</span>
            ${origPrice ? `<span class="price-original" data-base-price="${origPrice}">${formatCurrency(origPrice, region)}</span>` : ''}
            ${discountPct > 5 ? `<span class="price-discount-pct">-${discountPct}%</span>` : ''}
          </div>
          <div class="prod-actions-row">
            <button class="quick-add-cart-btn recommendation-add-cart-btn" data-product-id="${escapeHtml(product.id)}" data-mp="${marketplaceLower}" title="${langData.addToCart || 'Tambah ke Keranjang'}" aria-label="${langData.addToCart || 'Tambah ke Keranjang'}">
              <div class="cart-btn-icon-wrapper">
                <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </div>
              <span class="cart-corner-plus">+</span>
            </button>
            <a class="shop-link recommendation-shop-link" data-mp="${marketplaceLower}" href="${escapeHtml(marketplaceUrl)}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(langData.viewInStore || 'Lihat di')} ${safeMarketplace}">
              <span>${langData.viewInStore || 'Lihat di'} ${safeMarketplace}</span><span class="shop-link-icon" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </article>`;
  }).join('');

  if (append) {
    container.insertAdjacentHTML('beforeend', cardHtml);
  } else {
    container.innerHTML = cardHtml;
  }

  container.querySelectorAll('.prod-img').forEach(img => {
    img.addEventListener('error', () => {
      if (img.dataset.searchImage === 'true') return;
      handleProductImageError(img, img.dataset.fallback, img.dataset.name || '', img.dataset.category || '');
    });
    // Set attribution for cached images that already have a real src
    if (img.src && !img.src.includes('placeholder') && img.dataset.photographer) {
      setUnsplashAttribution(img, { photographerName: img.dataset.photographer });
    }
  });

  // Clicking anywhere on the card (except the add-to-cart button) opens the marketplace website directly
  container.querySelectorAll('.recommend-prod-card').forEach(card => {
    card.addEventListener('click', event => {
      if (event.target.closest('.recommendation-add-cart-btn') || event.target.closest('.quick-add-cart-btn')) {
        return;
      }
      event.preventDefault();
      const product = recommendationState.products.find(item => String(item.id) === card.dataset.productId);
      const targetUrl = card.querySelector('.shop-link')?.getAttribute('href') || (product ? getSafeMarketplaceUrl(product.url, product.marketplace, product.name, product.id) : null);
      if (targetUrl) {
        window.open(targetUrl, '_blank', 'noopener,noreferrer');
      }
    });
  });

  container.querySelectorAll('.recommendation-add-cart-btn').forEach(btn => {
    btn.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      const product = recommendationState.products.find(item => String(item.id) === btn.dataset.productId);
      if (product) addToCart(product, 1, btn);
    });
  });

  container.querySelectorAll('img[data-search-image="true"]').forEach(img => {
    img.addEventListener('error', () => {
      img.classList.remove('image-unavailable');
      img.src = getQueryImageByCategory(img.dataset.name || '', img.dataset.category || '');
    });
  });
  setTimeout(() => hydrateProductImages(container), 100);
}

function getCategoryBatchProducts(categoryKey, categoryQuery, batchNumber) {
  if (categoryKey === 'electronics' && batchNumber > 0) {
    const extraElectronics = [
      ['Xiaomi Redmi Note 14 Pro 5G 12/512GB', 'electronics', 'assets/placeholder.svg'],
      ['Lenovo IdeaPad Slim 3 Ryzen 5 16GB 512GB', 'electronics', 'assets/placeholder.svg'],
      ['Canon EOS Mirrorless 4K WiFi dengan Lensa Kit', 'camera', 'assets/placeholder.svg'],
      ['Samsung Galaxy Tab S8 WiFi 128GB', 'electronics', 'assets/placeholder.svg'],
      ['Anker PowerCore 20000mAh USB-C Power Bank', 'electronics', 'assets/placeholder.svg'],
      ['Sony WH-1000XM5 Wireless Noise Cancelling', 'audio', 'assets/placeholder.svg'],
      ['Huawei Watch GT 5 AMOLED GPS', 'wearable', 'assets/placeholder.svg'],
      ['LG UltraGear Gaming Monitor 27 Inch 165Hz', 'electronics', 'assets/placeholder.svg']
    ];
    return extraElectronics.map(([name, category, image], index) => ({
      id: `category-electronics-${batchNumber}-${index}`,
      name,
      name_id: name,
      name_en: name,
      name_ms: name,
      name_zh: name,
      category,
      image: getPreferredProductImage(name, category, image, categoryQuery),
      keywords: ['elektronik', category],
      price: 199000 + (index * 175000),
      rating: 4.7 + (index % 3) * 0.1,
      sold: 900 + index * 710,
      marketplace: ['Shopee', 'Tokopedia', 'Lazada'][index % 3],
      shop: 'Official Electronics Store',
      url: getClientDirectMarketplaceUrl(['Shopee', 'Tokopedia', 'Lazada'][index % 3], name, `category-electronics-${batchNumber}-${index}`)
    }));
  }
  const baseProducts = getCategoryProducts(categoryKey, categoryQuery);
  const batchProducts = batchNumber === 0
    ? baseProducts
    : generateDynamicLocalizedProducts(`${categoryQuery} ${batchNumber}`);
  const existingKeys = new Set(categoryFeedState.products.map(getRecommendationProductKey));
  return batchProducts.filter(product => {
    const key = getRecommendationProductKey(product);
    if (existingKeys.has(key)) return false;
    existingKeys.add(key);
    return true;
  });
}

async function loadMoreCategoryResults(reset = false) {
  if (categoryFeedState.isLoading) return;
  const categoryKey = categoryFeedState.categoryKey;
  const categoryQuery = categoryFeedState.query;
  if (!categoryKey || !categoryQuery) return;

  categoryFeedState.isLoading = true;
  showDoomLoader('search', true);
  if (reset) {
    categoryFeedState.products = [];
    categoryFeedState.visibleCount = 0;
    categoryFeedState.batch = 0;
    showDoomEnd('search', false);
  }

  const nextProducts = getCategoryBatchProducts(categoryKey, categoryQuery, categoryFeedState.batch);
  categoryFeedState.products.push(...nextProducts);
  categoryFeedState.batch += 1;
  categoryFeedState.visibleCount = categoryFeedState.products.length;
  renderMarketplaceResults(categoryKey === 'electronics' ? 'elektronik' : categoryQuery, categoryFeedState.products);
  categoryFeedState.isLoading = false;
  showDoomLoader('search', false);
  if (nextProducts.length === 0) {
    showDoomEnd('search', true);
  }
}

async function loadMoreRecommendations(reset = false) {
  const container = document.getElementById('homeRecommendGrid');
  if (!container || recommendationState.isLoading || (!recommendationState.hasMore && !reset)) return;

  const requestId = ++recommendationState.requestId;
  recommendationState.isLoading = true;
  showDoomLoader('recommend', true);
  showDoomEnd('recommend', false);

  if (reset) {
    recommendationState.products = [];
    recommendationState.loadedQueries.clear();
    recommendationState.queryPage = 0;
    recommendationState.queryCursor = 0;
    recommendationState.queryCycle = 0;
    recommendationState.visibleCount = 0;
    recommendationState.hasMore = true;
  }

  const batchSize = getRecommendationInitialSize();
  const queries = getRecommendationQueries();
  const targetCount = reset ? batchSize : recommendationState.visibleCount + batchSize;
  const existingKeys = new Set(recommendationState.products.map(getRecommendationProductKey));

  let fetchAttempts = 0;
  let addedProducts = 0;
  let emptyCycles = 0;
  while (recommendationState.products.length < targetCount && fetchAttempts < 8) {
    if (recommendationState.queryCursor >= queries.length) {
      recommendationState.queryCursor = 0;
      recommendationState.queryCycle += 1;
      if (addedProducts === 0) emptyCycles += 1;
      if (emptyCycles >= 3) break;
    }
    const baseQuery = queries[recommendationState.queryCursor++];
    const query = baseQuery;
    fetchAttempts += 1;
    const queryPage = recommendationState.queryPage + recommendationState.queryCycle;
    const queryKey = `${query}::${queryPage}`;
    if (recommendationState.loadedQueries.has(queryKey)) continue;
    const products = await fetchMarketplaceProducts(query, queryPage * SEARCH_BATCH_SIZE);
    if (requestId !== recommendationState.requestId) {
      recommendationState.isLoading = false;
      showDoomLoader('recommend', false);
      return;
    }
    const categoryFallback = getRecommendationCatalogFallback(query);
    const catalogFallback = [...categoryFallback, ...getActiveCatalog()]
      .filter(product => product && product.isOfficial !== false && !existingKeys.has(getRecommendationProductKey(product)))
      .filter((product, index, productsList) => productsList.findIndex(candidate => getRecommendationProductKey(candidate) === getRecommendationProductKey(product)) === index);
    const batchProducts = [...products, ...catalogFallback];
    batchProducts.filter(product => product && product.isOfficial !== false).forEach(product => {
      const key = getRecommendationProductKey(product);
      if (!existingKeys.has(key)) {
        existingKeys.add(key);
        recommendationState.products.push(product);
        addedProducts += 1;
      }
    });
    recommendationState.loadedQueries.add(queryKey);
  }

  recommendationState.visibleCount = Math.min(targetCount, recommendationState.products.length);
  if (addedProducts === 0 && emptyCycles >= 3) {
    recommendationState.hasMore = false;
  }
  recommendationState.products.sort((a, b) => getRecommendationQualityScore(b) - getRecommendationQualityScore(a));
  renderRecommendationCards(recommendationState.products.slice(0, recommendationState.visibleCount), !reset);
  recommendationState.isLoading = false;
  showDoomLoader('recommend', false);

  if (!recommendationState.hasMore) {
    showDoomEnd('recommend', true);
  }
}

function showDoomLoader(section, show) {
  const el = document.getElementById(section === 'recommend' ? 'recommendScrollLoader' : 'searchScrollLoader');
  if (el) el.hidden = !show;
}

function showDoomEnd(section, show) {
  const el = document.getElementById(section === 'recommend' ? 'recommendScrollEnd' : 'searchScrollEnd');
  if (el) {
    el.hidden = !show;
    if (show) el.textContent = section === 'recommend' ? 'Semua produk sudah ditampilkan' : 'Tidak ada hasil lagi';
  }
}

function initRecommendations() {
  loadMoreRecommendations(true);
  let scrollRafId = 0;
  window.addEventListener('scroll', () => {
    if (scrollRafId) return;
    scrollRafId = requestAnimationFrame(() => {
      scrollRafId = 0;
      const grid = document.getElementById('homeRecommendGrid');
      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 800;
      if (document.body.classList.contains('search-mode-active')) {
        if (nearBottom) {
          if (new URLSearchParams(window.location.search).has('category')) {
            loadMoreCategoryResults();
          } else {
            loadMoreSearchResults();
          }
        }
        return;
      }
      if (!grid || document.body.classList.contains('cart-mode-active')) return;
      if (nearBottom) {
        loadMoreRecommendations();
      }
    });
  }, { passive: true });
}

/* ========================================================== */
/* 6. KERANJANG BELANJA (CART SYSTEM)                         */
/* ========================================================== */
function getCartStorageKey() {
  const region = typeof getCurrentRegion === 'function' ? getCurrentRegion() : 'id';
  return `yj_cart_items_${region}`;
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(getCartStorageKey())) || [];
  } catch {
    return [];
  }
}

function saveCart(cartItems) {
  localStorage.setItem(getCartStorageKey(), JSON.stringify(cartItems));
  updateCartBadge();
}

function registerUnseenCartAddition(amount) {
  const region = typeof getCurrentRegion === 'function' ? getCurrentRegion() : 'id';
  const seenKey = `yj_cart_seen_signature_${region}`;
  const unseenKey = `yj_cart_unseen_count_${region}`;
  if (!localStorage.getItem(seenKey) || amount <= 0) return;
  const currentUnseen = Number(localStorage.getItem(unseenKey)) || 0;
  localStorage.setItem(unseenKey, String(currentUnseen + amount));
  updateCartBadge();
}

function getCartNotificationSignature(cart = getCart()) {
  return JSON.stringify(cart.map(item => ({
    id: item.id,
    qty: Number(item.qty) || 1
  })));
}

function initializeCartNotificationState() {
  const region = typeof getCurrentRegion === 'function' ? getCurrentRegion() : 'id';
  const notificationVersion = '2';
  const versionKey = `yj_cart_notification_version_${region}`;
  const seenKey = `yj_cart_seen_signature_${region}`;
  const unseenKey = `yj_cart_unseen_count_${region}`;
  if (localStorage.getItem(versionKey) !== notificationVersion) {
    localStorage.setItem(versionKey, notificationVersion);
    localStorage.setItem(seenKey, getCartNotificationSignature());
    localStorage.setItem(unseenKey, '0');
    return;
  }
  if (!localStorage.getItem(seenKey)) {
    localStorage.setItem(seenKey, getCartNotificationSignature());
    localStorage.setItem(unseenKey, '0');
  }
}

function markCartNotificationSeen() {
  const region = typeof getCurrentRegion === 'function' ? getCurrentRegion() : 'id';
  localStorage.setItem(`yj_cart_seen_signature_${region}`, getCartNotificationSignature());
  localStorage.setItem(`yj_cart_unseen_count_${region}`, '0');
  updateCartBadge();
}

function updateCartBadge() {
  const region = typeof getCurrentRegion === 'function' ? getCurrentRegion() : 'id';
  const seenKey = `yj_cart_seen_signature_${region}`;
  const unseenKey = `yj_cart_unseen_count_${region}`;
  const cart = getCart();
  const totalQty = cart.reduce((sum, item) => sum + (Number(item.qty) || 1), 0);
  const hasBeenViewed = Boolean(localStorage.getItem(seenKey));
  const unseenCount = hasBeenViewed
    ? Number(localStorage.getItem(unseenKey)) || 0
    : totalQty;
  const badgeText = unseenCount > 9 ? '9+' : String(unseenCount);
  const hasUnseenCartChange = unseenCount > 0;

  const logoBadge = document.getElementById('logoCartBadge');
  if (logoBadge) {
    logoBadge.innerText = badgeText;
    logoBadge.hidden = !hasUnseenCartChange;
    logoBadge.setAttribute('aria-label', `${unseenCount} item baru dalam keranjang`);
    logoBadge.classList.remove('pop');
    if (hasUnseenCartChange) {
      void logoBadge.offsetWidth;
      logoBadge.classList.add('pop');
    }
  }
  
  const navBadge = document.getElementById('navCartBadge');
  if (navBadge) {
    navBadge.innerText = badgeText;
    navBadge.hidden = !hasUnseenCartChange;
    navBadge.classList.remove('pop');
    void navBadge.offsetWidth;
    navBadge.classList.add('pop');
  }

  const dropdownBadge = document.getElementById('dropdownCartBadge');
  if (dropdownBadge) {
    dropdownBadge.innerText = badgeText;
    dropdownBadge.hidden = !hasUnseenCartChange;
    dropdownBadge.classList.remove('pop');
    void dropdownBadge.offsetWidth;
    dropdownBadge.classList.add('pop');
  }

  const itemsSubtitleCount = document.getElementById('cartTotalItemsCount');
  if (itemsSubtitleCount) {
    itemsSubtitleCount.innerText = totalQty;
  }
}

function showCartToast(message = '') {
  const toast = document.getElementById('cartToast');
  const msgEl = document.getElementById('cartToastMsg');
  const lang = getCurrentLang();
  const langData = i18nDictionary[lang] || i18nDictionary.id;

  if (msgEl) {
    msgEl.innerText = message || langData.addedToCart || 'Barang berhasil ditambahkan ke keranjang!';
  }
  if (toast) {
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
}

function hideCartToast() {
  const toast = document.getElementById('cartToast');
  if (!toast) return;
  clearTimeout(toast._timeout);
  toast.classList.remove('show');
}

function triggerFlyToLogo(sourceElement, product) {
  const targetLogo = document.getElementById('logoBtn') || document.getElementById('mainLogo');
  if (!targetLogo) return;

  let startRect = null;
  let imgSrc = null;

  if (sourceElement && sourceElement instanceof HTMLElement) {
    const cardEl = sourceElement.closest('.recommend-prod-card') || sourceElement.closest('.marketplace-prod-card') || sourceElement.closest('.product-detail-modal-card') || sourceElement.closest('.ai-product-mini-card') || sourceElement;
    const imgInside = cardEl.querySelector('img') || (sourceElement.tagName === 'IMG' ? sourceElement : null);
    if (imgInside) {
      startRect = imgInside.getBoundingClientRect();
      imgSrc = imgInside.src;
    } else {
      startRect = sourceElement.getBoundingClientRect();
    }
  }

  if (!imgSrc && product) {
    const lang = getCurrentLang();
    imgSrc = getPreferredProductImage(getProductLocalizedName(product, lang), product.category || '', product.image, '');
  }

  if (!startRect || startRect.width === 0 || startRect.height === 0) {
    startRect = {
      left: window.innerWidth / 2 - 40,
      top: window.innerHeight / 2 - 40,
      width: 80,
      height: 80
    };
  }

  const endRect = targetLogo.getBoundingClientRect();
  const flyer = document.createElement('img');
  flyer.className = 'flying-cart-element';
  flyer.src = imgSrc || 'assets/logo_dark.png';

  const w = Math.max(48, Math.min(startRect.width, 100));
  const h = Math.max(48, Math.min(startRect.height, 100));

  flyer.style.width = `${w}px`;
  flyer.style.height = `${h}px`;
  flyer.style.left = `${startRect.left}px`;
  flyer.style.top = `${startRect.top}px`;
  flyer.style.transform = 'translate3d(0, 0, 0) scale(1) rotate(0deg)';
  flyer.style.opacity = '1';
  flyer.style.transition = 'transform 0.68s cubic-bezier(0.2, 0.8, 0.25, 1), opacity 0.68s ease-in';

  document.body.appendChild(flyer);

  requestAnimationFrame(() => {
    const targetX = endRect.left + (endRect.width / 2) - (w / 2);
    const targetY = endRect.top + (endRect.height / 2) - (h / 2);
    const deltaX = targetX - startRect.left;
    const deltaY = targetY - startRect.top;

    flyer.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0) scale(0.18) rotate(-22deg)`;
    flyer.style.opacity = '0.5';

    setTimeout(() => {
      if (flyer.parentNode) flyer.remove();

      // Haptic logo bounce animation
      targetLogo.classList.remove('logo-bounce');
      void targetLogo.offsetWidth;
      targetLogo.classList.add('logo-bounce');

      // Pop logo badge
      const logoBadge = document.getElementById('logoCartBadge');
      if (logoBadge) {
        logoBadge.classList.remove('badge-pop');
        void logoBadge.offsetWidth;
        logoBadge.classList.add('badge-pop');
      }

      // Show toast notification right when product enters logo!
      if (!document.body.classList.contains('cart-mode-active')) showCartToast();
    }, 680);
  });
}

function addToCart(product, qty = 1, sourceElement = null) {
  if (!product) return;
  recordRecommendationSignal('cart', `${product.category || ''} ${product.name || ''}`, qty);
  const cart = getCart();
  const existingIdx = cart.findIndex(item => item.id === product.id);

  if (existingIdx > -1) {
    cart[existingIdx].qty = (cart[existingIdx].qty || 1) + qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      name_id: product.name_id || product.name,
      name_en: product.name_en || product.name,
      name_ms: product.name_ms || product.name,
      name_zh: product.name_zh || product.name,
      image: getPreferredProductImage(getProductLocalizedName(product, getCurrentLang()), product.category || '', product.image, ''),
      price: Number(product.price) || 0,
      marketplace: product.marketplace || 'Shopee',
      shop: product.shop || 'Official Store',
      url: product.url || getClientDirectMarketplaceUrl(product.marketplace, product.name, product.id),
      category: product.category || 'general',
      qty: qty
    });
  }

  saveCart(cart);
  registerUnseenCartAddition(qty);
  triggerFlyToLogo(sourceElement, product);
  
  if (document.body.classList.contains('cart-mode-active') || document.body.classList.contains('orders-mode-active')) {
    renderCartView();
  }
}

function updateCartQty(productId, delta) {
  let cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty = (item.qty || 1) + delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  saveCart(cart);
  if (delta > 0) registerUnseenCartAddition(delta);
  renderCartView();
}

function setCartQty(productId, exactQty) {
  let cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  const parsed = parseInt(exactQty, 10);
  if (isNaN(parsed) || parsed <= 0) {
    cart = cart.filter(i => i.id !== productId);
  } else {
    item.qty = Math.min(999, parsed);
  }

  saveCart(cart);
  renderCartView();
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(i => i.id !== productId);
  saveCart(cart);
  renderCartView();
}

function clearCart() {
  const lang = getCurrentLang();
  const langData = i18nDictionary[lang] || i18nDictionary.id;
  if (confirm(langData.confirmClearCart || 'Yakin ingin mengosongkan keranjang?')) {
    saveCart([]);
    renderCartView();
  }
}

function renderCartView() {
  const container = document.getElementById('cartItemsContainer');
  const summaryCol = document.getElementById('cartSummaryColumn');
  const clearBtn = document.getElementById('clearCartBtn');
  const subtotalEl = document.getElementById('cartSubtotalVal');
  const totalEl = document.getElementById('cartTotalVal');
  
  if (!container) return;

  const cart = getCart();
  const lang = getCurrentLang();
  const langData = i18nDictionary[lang] || i18nDictionary.id;
  const region = getCurrentRegion();
  const regionData = regionDictionary[region] || regionDictionary.id;

  if (cart.length === 0) {
    if (clearBtn) clearBtn.style.display = 'none';
    if (summaryCol) summaryCol.style.display = 'none';

    container.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">🛒</div>
        <h3>${langData.cartEmptyTitle || 'Keranjang Anda Masih Kosong'}</h3>
        <p>${langData.cartEmptySub || 'Yuk, temukan produk terbaik pilihan Anda dan tambahkan ke sini!'}</p>
      </div>
    `;

    return;
  }

  if (clearBtn) clearBtn.style.display = 'inline-flex';
  if (summaryCol) summaryCol.style.display = 'block';

  let subtotalIDR = 0;

  const itemsHtml = cart.map(item => {
    const itemQty = Number(item.qty) || 1;
    const itemUnitPrice = Number(item.price) || 0;
    const itemTotalPrice = itemUnitPrice * itemQty;
    subtotalIDR += itemTotalPrice;

    const displayName = getProductLocalizedName(item, lang);
    const safeDisplayName = escapeHtml(displayName);
    const unitPriceFmt = formatCurrency(itemUnitPrice, region);
    const totalPriceFmt = formatCurrency(itemTotalPrice, region);

    const mpLower = (item.marketplace || 'Shopee').toLowerCase();
    const sourceClass = mpLower.includes('shopee') ? 'source-shopee'
      : mpLower.includes('tokopedia') ? 'source-tokopedia'
      : mpLower.includes('lazada') ? 'source-lazada'
      : 'source-default';

    const fallbackImg = getSemanticProductImage(displayName, item.category || '') || getQueryImageByCategory(displayName, item.category || '');
    const cartImage = getPreferredProductImage(displayName, item.category || '', item.image, '');
    const cartUrl = getSafeMarketplaceUrl(item.url, item.marketplace, displayName, item.id);

    return `
      <div class="cart-item-card" data-product-id="${escapeHtml(item.id)}">
        <div class="cart-item-thumb-box cart-open-detail" data-product-id="${escapeHtml(item.id)}" title="${escapeHtml(langData.viewProductBtn || 'Lihat Detail')}">
          <img src="${escapeHtml(cartImage)}" alt="${safeDisplayName}" class="cart-item-img" data-fallback="${escapeHtml(fallbackImg)}" data-name="${safeDisplayName}" data-category="${escapeHtml(item.category || '')}">
        </div>

        <div class="cart-item-details">
          <h4 class="cart-item-title cart-open-detail" data-product-id="${escapeHtml(item.id)}" title="${safeDisplayName}">${safeDisplayName}</h4>
          <div class="cart-item-meta">
            <span class="${sourceClass}">${escapeHtml(item.marketplace || 'Shopee')}</span>
            <span class="cart-item-shop">🏪 ${escapeHtml(item.shop || 'Official Store')}</span>
          </div>
          <div class="cart-item-price-unit">${unitPriceFmt}</div>

          <div class="cart-item-actions-row">
            <a href="${escapeHtml(cartUrl)}" target="_blank" rel="noopener noreferrer" class="cart-direct-link-btn" title="${escapeHtml(langData.viewOriginalProduct || 'Lihat Produk Asli')}">
              <span>${langData.viewOriginalProduct || 'Lihat Produk Asli'}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="cart-item-controls">
          <button class="cart-item-delete-btn" data-delete-id="${escapeHtml(item.id)}" title="${escapeHtml(langData.clearBtn || 'Hapus')}">🗑️</button>
          
          <div class="cart-stepper">
            <button class="stepper-btn stepper-minus" data-id="${escapeHtml(item.id)}" aria-label="Kurangi jumlah">-</button>
            <input type="number" min="1" max="999" class="stepper-val-input" data-id="${escapeHtml(item.id)}" value="${itemQty}" aria-label="Jumlah beli">
            <button class="stepper-btn stepper-plus" data-id="${escapeHtml(item.id)}" aria-label="Tambah jumlah">+</button>
          </div>

          <div class="cart-item-total-price">${totalPriceFmt}</div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = itemsHtml;

  const totalFormatted = formatCurrency(subtotalIDR, region);
  if (subtotalEl) subtotalEl.innerText = totalFormatted;
  if (totalEl) totalEl.innerText = totalFormatted;

  // Bind Stepper & Action Listeners
  container.querySelectorAll('.stepper-minus').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateCartQty(btn.getAttribute('data-id'), -1);
    });
  });

  container.querySelectorAll('.stepper-plus').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateCartQty(btn.getAttribute('data-id'), 1);
    });
  });

  container.querySelectorAll('.stepper-val-input').forEach(input => {
    input.addEventListener('click', (e) => e.stopPropagation());
    input.addEventListener('change', (e) => {
      e.stopPropagation();
      setCartQty(input.getAttribute('data-id'), input.value);
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        input.blur();
      }
    });
  });

  container.querySelectorAll('.cart-item-delete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      removeFromCart(btn.getAttribute('data-delete-id'));
    });
  });

  container.querySelectorAll('.cart-open-detail').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const pId = el.getAttribute('data-product-id');
      const cartItem = cart.find(i => i.id === pId);
      if (cartItem) {
        openProductModal(cartItem);
      }
    });
  });
}

/* ========================================================== */
/* 7. PRODUCT DETAIL MODAL                                    */
/* ========================================================== */
let currentModalProduct = null;

function openProductModal(product) {
  if (!product) return;
  recordRecommendationSignal('clicks', `${product.category || ''} ${product.name || ''}`);
  currentModalProduct = product;

  const modal = document.getElementById('productDetailModal');
  const body = document.getElementById('productModalBody');
  if (!modal || !body) return;

  const lang = getCurrentLang();
  const langData = i18nDictionary[lang] || i18nDictionary.id;
  const region = getCurrentRegion();
  const regionData = regionDictionary[region] || regionDictionary.id;

  const displayName = getProductLocalizedName(product, lang);
  const safeDisplayName = escapeHtml(displayName);
  const fallbackImg = getQueryImageByCategory(displayName, product.category || '');
  const image = getPreferredProductImage(displayName, product.category || '', product.image, '');
  const modalUrl = getSafeMarketplaceUrl(product.url, product.marketplace, displayName, product.id);
  const price = Number(product.price) || 0;
  const formattedPrice = formatCurrency(price, region);
  const rating = Number(product.rating) || 4.9;
  const sold = product.sold ? Number(product.sold).toLocaleString() : '1,000+';

  const mpLower = (product.marketplace || 'Shopee').toLowerCase();
  const sourceClass = mpLower.includes('shopee') ? 'source-shopee'
    : mpLower.includes('tokopedia') ? 'source-tokopedia'
    : mpLower.includes('lazada') ? 'source-lazada'
    : 'source-default';

  body.innerHTML = `
    <div class="product-detail-grid">
      <div class="product-detail-img-box">
        <img src="${escapeHtml(image)}" alt="${safeDisplayName}" class="product-detail-img" data-fallback="${escapeHtml(fallbackImg)}" data-name="${safeDisplayName}" data-category="${escapeHtml(product.category || '')}">
      </div>
      <div class="product-detail-info">
        <div class="product-detail-meta">
          <span class="${sourceClass}">${escapeHtml(product.marketplace || 'Shopee')}</span>
          <span style="color:#fbbf24; font-weight:700;">★ ${rating.toFixed(1)}</span>
          <span style="color:#94a3b8; font-size:0.85rem;">· ${sold} ${langData.soldText || 'Terjual'}</span>
        </div>

        <h3>${safeDisplayName}</h3>

        <div class="product-detail-price">
          <span>${formattedPrice}</span>
          ${product.originalPrice ? `<span class="price-original">${formatCurrency(product.originalPrice, region)}</span>` : ''}
        </div>

        <p class="product-detail-desc">
          🏪 <strong>${escapeHtml(product.shop || 'Official Store')}</strong> ${product.location ? `· 📍 ${escapeHtml(product.location)}` : ''}<br>
          ✨ ${langData.freeShipping || 'GRATIS ONGKIR'} · ${lang === 'en' ? '100% Authentic & Trusted Guarantee.' : lang === 'zh' ? '100% 正品保障 可信赖。' : lang === 'ms' ? 'Jaminan 100% Produk Asli & Dipercayai.' : 'Garansi 100% Produk Asli & Terpercaya.'}
        </p>

        <div class="product-detail-actions">
          <button id="modalAddToCartBtn" class="modal-add-cart-btn">
            <span>🛒</span> <span>${langData.addToCart || '+ Keranjang'}</span>
          </button>
          <a href="${escapeHtml(modalUrl)}" target="_blank" rel="noopener noreferrer" class="modal-direct-marketplace-btn">
            <span>🔗</span> <span>${escapeHtml(langData.viewInStore || 'Lihat di')} ${escapeHtml(product.marketplace || 'Shopee')}</span>
          </a>
        </div>
      </div>
    </div>
  `;

  const modalAddBtn = document.getElementById('modalAddToCartBtn');
  modalAddBtn?.addEventListener('click', () => {
    addToCart(product, 1, modalAddBtn);
  });

  const modalImg = body.querySelector('.product-detail-img');
  modalImg?.addEventListener('error', () => {
    handleProductImageError(modalImg, modalImg.dataset.fallback || fallbackImg, modalImg.dataset.name || displayName, modalImg.dataset.category || product.category || '');
  });

  const cartImg = container?.querySelectorAll?.('.cart-item-img');
  cartImg?.forEach(img => {
    img.addEventListener('error', () => {
      handleProductImageError(img, img.dataset.fallback || getQueryImageByCategory(img.dataset.name || '', img.dataset.category || ''), img.dataset.name || '', img.dataset.category || '');
    });
  });

  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
}

function closeProductModal() {
  const modal = document.getElementById('productDetailModal');
  if (modal) {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  }
}

/* ========================================================== */
/* 8. RENDER SEARCH RESULTS & PRODUCT CLICK FIX               */
/* ========================================================== */
async function renderMarketplaceResults(query = '', productsOverride = null, skipLoading = false) {
  const container = document.getElementById('searchResultsGrid');
  const meta = document.getElementById('searchResultsMeta');
  if (!container) { console.log('[RENDER] No container'); return; }

  const normalizedQuery = (query || '').trim();
  const lang = getCurrentLang();
  const langData = i18nDictionary[lang] || i18nDictionary.id;

  if (!normalizedQuery) {
    container.innerHTML = '';
    if (meta) {
      meta.innerText = langData.searchResultsMeta || 'Produk yang cocok dengan pencarian Anda.';
    }
    return;
  }

  if (meta) {
    // Use searchInput value (clean display name) when available, fallback to query
    const displayQuery = (searchInput && searchInput.value.trim()) || normalizedQuery;
    meta.innerText = `${langData.searchResultsFor || 'Hasil untuk'} "${displayQuery}"`;
    if (searchFeedState.error === 'rate_limit') {
      meta.innerText += ' · Layanan live sedang dibatasi, menampilkan katalog lokal.';
    }
  }

  // Show the skeleton only for a fresh query, not for an appended batch.
  if (!skipLoading) container.innerHTML = Array(4).fill(0).map(() => `
    <div class="search-skeleton-card">
      <div class="skeleton-shimmer" style="height: 180px; margin-bottom: 12px;"></div>
      <div class="skeleton-shimmer" style="height: 20px; width: 85%; margin-bottom: 8px;"></div>
      <div class="skeleton-shimmer" style="height: 16px; width: 50%; margin-bottom: 12px;"></div>
      <div class="skeleton-shimmer" style="height: 36px; width: 100%;"></div>
    </div>
  `).join('');

  const matchedProducts = deduplicateProducts(productsOverride || await fetchMarketplaceProducts(normalizedQuery));
  console.log('[RENDER] Products:', matchedProducts.length, 'query:', normalizedQuery);

  if (matchedProducts.length === 0) {
    const isRateLimited = searchFeedState.error === 'rate_limit';
    container.innerHTML = `
      <div class="search-empty-state">
        <div class="search-empty-icon">${isRateLimited ? '⚠️' : '🔎'}</div>
        <h4>${isRateLimited ? 'API kuota habis. Silakan coba lagi nanti.' : (langData.searchResultsEmpty || 'Tidak ada produk yang cocok dengan pencarian Anda.')}</h4>
      </div>
    `;
    return;
  }

  const region = getCurrentRegion();
  const regionData = regionDictionary[region] || regionDictionary.id;

  const comparisonCards = matchedProducts.map((product, index) => {
    const displayName = getProductLocalizedName(product, lang);
    const safeDisplayName = escapeHtml(displayName);
    const fallbackImg = getQueryImageByCategory(displayName, product.category || '');
    const image = getPreferredSearchImage(product);

    const price = Number(product.price) || 0;
    const shop = product.shop || 'Official Store';
    const marketplace = product.marketplace || 'Shopee';
    const rating = Number(product.rating) || 4.8;
    const sold = Number(product.sold) || 0;
    const displayMarketplace = region === 'my' ? 'Shopee MY' : marketplace;
    const marketplaceName = getMarketplaceSearchName(product, displayName);
    const url = getSafeMarketplaceUrl(product.url, displayMarketplace, marketplaceName, product.id);
    const location = product.location || '';
    const safeShop = escapeHtml(shop);
    const safeMarketplace = escapeHtml(displayMarketplace);

    const finalPrice = formatCurrency(price, region);
    const priceVerified = product.priceVerified !== false;
    const unavailablePriceText = lang === 'zh' ? '暂无实时价格' : lang === 'en' ? 'Live price unavailable' : lang === 'ms' ? 'Harga langsung tidak tersedia' : 'Harga live tidak tersedia';
    
    const marketplaceLower = displayMarketplace.toLowerCase();
    const sourceClass = marketplaceLower.includes('shopee') ? 'source-shopee'
      : marketplaceLower.includes('tokopedia') ? 'source-tokopedia'
      : marketplaceLower.includes('lazada') ? 'source-lazada'
      : 'source-default';

    const soldText = sold >= 1000 ? `${(sold / 1000).toFixed(1).replace(/\.0$/, '')}rb` : String(sold || '100');

    let badgeText = '';
    let badgeClass = '';
    if (index === 0) { badgeText = langData.badgeBestSeller || 'BEST SELLER'; badgeClass = 'badge-bestseller'; }
    else if (rating >= 4.9 && sold >= 5000) { badgeText = 'TOP RATED'; badgeClass = 'badge-toprated'; }
    else if (product.isPromo) { badgeText = langData.badgePromo || 'PROMO'; badgeClass = 'badge-promo'; }
    else if (index % 3 === 1) { badgeText = langData.badgeLocal || 'PILIHAN LOKAL'; badgeClass = 'badge-local'; }
    else if (index % 5 === 2) { badgeText = langData.badgeFreeShipping || 'GRATIS ONGKIR'; badgeClass = 'badge-free'; }

    const hasDiscount = product.originalPrice && product.originalPrice > price;
    const discountPct = hasDiscount ? Math.round((1 - price / product.originalPrice) * 100) : 0;
    const origPriceHtml = hasDiscount
      ? `<span class="price-original" data-base-price="${product.originalPrice}">${formatCurrency(product.originalPrice, region)}</span><span class="price-discount-pct">-${discountPct}%</span>`
      : '';

    const searchCachedEntry = window._imageCache?.[product.category || ''];
    const searchCachedImg = searchCachedEntry?.url || '';
    const searchImgSrc = searchCachedImg || (product.image && product.image.startsWith('http') ? `/api/image-proxy?url=${encodeURIComponent(product.image)}` : 'assets/placeholder.svg');
    const searchNeedsImage = (searchCachedImg || (product.image && product.image.startsWith('http'))) ? 'false' : 'true';
    const searchPhotographer = product.photographer || searchCachedEntry?.data?.photographerName || '';

    return `
      <article class="search-result-card comparison-card product-card search-item-card" data-product-id="${escapeHtml(product.id)}" data-marketplace="${safeMarketplace}">
        <div class="product-img-box prod-click-detail" data-product-id="${escapeHtml(product.id)}" title="${safeDisplayName}">
          ${badgeText ? `<span class="product-badge ${badgeClass}">${badgeText}</span>` : ''}
          <img src="${escapeHtml(searchImgSrc)}" alt="${safeDisplayName}" class="prod-img search-product-img" data-needs-image="${searchNeedsImage}" data-category="${escapeHtml(product.category || '')}" data-photographer="${escapeHtml(searchPhotographer)}">
        </div>
        <div class="product-info">
          <div class="comparison-heading prod-click-detail" data-product-id="${escapeHtml(product.id)}">
            <h4 title="${safeDisplayName}">${safeDisplayName}</h4>
          </div>
          <div class="product-price">
            <span class="price${priceVerified ? '' : ' price-unverified'}" data-base-price="${price}">${priceVerified ? finalPrice : unavailablePriceText}</span>
            ${priceVerified ? origPriceHtml : ''}
            <span class="sold"><span class="star-rating">★</span> ${rating.toFixed(1)} · ${soldText} <span class="sold-unit">${langData.soldText || 'Terjual'}</span></span>
          </div>
          <div class="shop-meta-row">
            <div class="shop-name-wrap">
              <span class="shop-label">${langData.marketplaceSource || 'Toko'}</span>
              <strong>${safeShop}</strong>
              ${location ? `<span class="shop-location">📍 ${escapeHtml(location)}</span>` : ''}
            </div>
            <span class="source-below-price ${sourceClass}">${safeMarketplace}</span>
          </div>
          
          <div class="prod-actions-row">
            <button class="quick-add-cart-btn search-add-cart-btn" data-product-id="${escapeHtml(product.id)}" data-mp="${marketplaceLower}" title="${langData.addToCart || 'Tambah ke Keranjang'}" aria-label="${langData.addToCart || 'Tambah ke Keranjang'}">
              <div class="cart-btn-icon-wrapper">
                <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </div>
              <span class="cart-corner-plus">+</span>
            </button>
            <a class="shop-link" data-mp="${marketplaceLower}" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(langData.viewProductBtn || 'Lihat Detail')}">
              <span>${langData.viewInStore || 'Lihat di'} ${safeMarketplace}</span><span class="shop-link-icon" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');

  container.innerHTML = comparisonCards;

  container.querySelectorAll('.prod-img').forEach(img => {
    img.addEventListener('error', () => {
      if (img.dataset.searchImage === 'true') {
        img.classList.remove('image-unavailable');
        img.src = getQueryImageByCategory(img.dataset.name || '', img.dataset.category || '');
        return;
      }
      handleProductImageError(img, img.dataset.fallback || getQueryImageByCategory(img.dataset.name || '', img.dataset.category || ''), img.dataset.name || '', img.dataset.category || '');
    });
  });

  // Search results — error fallback and attribution for server-provided images
  container.querySelectorAll('.prod-img').forEach(img => {
    img.addEventListener('error', () => {
      if (!img.src.endsWith('assets/placeholder.svg')) {
        img.src = 'assets/placeholder.svg';
      }
    });
    // Set attribution immediately for images that already have a src (from server)
    if (img.src && !img.src.includes('placeholder') && img.dataset.photographer) {
      setUnsplashAttribution(img, { photographerName: img.dataset.photographer });
    }
  });
  // Use setTimeout to ensure DOM is fully rendered before hydrating
  setTimeout(() => hydrateProductImages(container), 100);

  // Bind Card Click to Open Marketplace Website directly (anywhere on the card except cart button)
  container.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.search-add-cart-btn') || e.target.closest('.quick-add-cart-btn')) {
        return;
      }
      e.preventDefault();
      const pId = card.getAttribute('data-product-id');
      const prod = matchedProducts.find(p => p.id === pId);
      const targetUrl = card.querySelector('.shop-link')?.getAttribute('href') || (prod ? getSafeMarketplaceUrl(prod.url, prod.marketplace, prod.name, prod.id) : null);
      if (targetUrl) {
        window.open(targetUrl, '_blank', 'noopener,noreferrer');
      }
    });
  });

  // Bind Quick Add to Cart
  container.querySelectorAll('.search-add-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const pId = btn.getAttribute('data-product-id');
      const prod = matchedProducts.find(p => p.id === pId);
      if (prod) addToCart(prod, 1, btn);
    });
  });
}

/* ========================================================== */
/* 9. VIEW CONTROLLERS (SEARCH, CART, HOME)                   */
/* ========================================================== */
function getCurrentLang() {
  return localStorage.getItem('selected_lang') || 'id';
}

function getCurrentRegion() {
  const region = localStorage.getItem('selected_region') || 'id';
  return region === 'id' || region === 'my' ? region : 'id';
}

function activateSearchMode(query) {
  if (!query || query.trim() === '') return;
  const trimmedQuery = query.trim();

  saveSearchKeyword(trimmedQuery);
  recordRecommendationSignal('searches', trimmedQuery);
  closeSearchHistoryDropdown();

  if (searchInput) searchInput.value = trimmedQuery;

  document.body.classList.remove('cart-mode-active');
  document.body.classList.remove('orders-mode-active');
  document.body.classList.add('search-mode-active');
  
  // Always go through loadMoreSearchResults — it handles everything
  searchFeedState.query = trimmedQuery;
  loadMoreSearchResults(true);

  const lang = getCurrentLang();
  const region = getCurrentRegion();
  const params = new URLSearchParams(window.location.search);
  params.set('lang', lang);
  params.set('region', region);
  params.set('search', trimmedQuery);
  params.delete('category');
  params.delete('q');
  params.delete('page');

  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.pushState({ path: newUrl, search: trimmedQuery }, '', newUrl);

  applyLanguageUI(lang);
  applyRegionUI(region);
  if (recommendationState.products.length > 0) {
    renderRecommendationCards(recommendationState.products);
  } else {
    loadMoreRecommendations(true);
  }
}

function getCategoryProducts(categoryKey, categoryQuery) {
  if (categoryKey === 'electronics') {
    const electronicsSeed = [
      ['Xiaomi Poco F7 Pro 5G 12/256GB Garansi Resmi', 'electronics', 'assets/placeholder.svg'],
      ['Laptop ASUS Vivobook 14 Intel Core i5 16GB 512GB SSD', 'electronics', 'assets/placeholder.svg'],
      ['Kamera Mirrorless Sony Alpha APS-C 4K Original', 'camera', 'assets/placeholder.svg'],
      ['Samsung Galaxy Tab S8', 'electronics', 'assets/placeholder.svg'],
      ['Power Bank Xiaomi 20000mAh Fast Charging USB-C', 'electronics', 'assets/placeholder.svg'],
      ['Headphone Wireless Noise Cancelling Bluetooth 5.3', 'audio', 'assets/placeholder.svg'],
      ['Smartwatch AMOLED IP68 Multi Sport GPS', 'wearable', 'assets/placeholder.svg'],
      ['Monitor Gaming 27 Inch 165Hz IPS Full HD', 'electronics', 'assets/placeholder.svg']
    ];
    return electronicsSeed.map(([name, category, image], index) => ({
      id: `category-electronics-${index}`,
      name,
      name_id: name,
      name_en: name,
      name_ms: name,
      name_zh: name,
      category,
      image,
      keywords: ['elektronik', category, name.toLowerCase()],
      price: [8999000, 7499000, 6299000, 3999000, 329000, 1299000, 899000, 2799000][index],
      rating: 4.7 + (index % 3) * 0.1,
      sold: 1200 + index * 830,
      marketplace: ['Shopee', 'Tokopedia', 'Lazada'][index % 3],
      shop: 'Official Electronics Store',
      url: getClientDirectMarketplaceUrl(['Shopee', 'Tokopedia', 'Lazada'][index % 3], name, `category-electronics-${index}`)
    }));
  }
  const categorySeeds = {
    health: [
      ['Vitamin C 1000mg Immune Support 30 Tablets', 'health', 'assets/placeholder.svg'],
      ['Multivitamin Daily Complete A-Z', 'health', 'assets/placeholder.svg'],
      ['Paracetamol 500mg Strip 10 Tablets', 'health', 'assets/placeholder.svg'],
      ['Omega 3 Fish Oil 1000mg', 'health', 'assets/placeholder.svg'],
      ['Probiotik Pencernaan 10 Billion CFU', 'health', 'assets/placeholder.svg'],
      ['Suplemen Zinc 20mg untuk Daya Tahan', 'health', 'assets/placeholder.svg']
    ],
    beauty: [
      ['Serum Niacinamide 10% Brightening 30ml', 'skincare', 'assets/placeholder.svg'],
      ['Sunscreen SPF 50 PA++++ Lightweight', 'skincare', 'assets/placeholder.svg'],
      ['Moisturizer Ceramide Barrier Repair', 'skincare', 'assets/placeholder.svg'],
      ['Facial Wash Gentle Hydrating Cleanser', 'skincare', 'assets/placeholder.svg'],
      ['Lip Tint Velvet Long Lasting', 'beauty', 'assets/placeholder.svg'],
      ['Micellar Water Cleansing 400ml', 'beauty', 'assets/placeholder.svg']
    ],
    food: [
      ['Indomie Goreng Original Pack 5 Pcs', 'food', 'assets/placeholder.svg'],
      ['KitKat Chocolate 4 Fingers Box', 'food', 'assets/placeholder.svg'],
      ['Biskuit Marie Regal Original 250g', 'food', 'assets/placeholder.svg'],
      ['Keripik Kentang Balado Premium', 'food', 'assets/placeholder.svg'],
      ['Kopi Susu Sachet Pack 10', 'food', 'assets/placeholder.svg'],
      ['Cokelat Wafer Crispy Family Pack', 'food', 'assets/placeholder.svg']
    ],
    sleep: [
      ['Kasur Busa Orthopedic Queen 160x200', 'sleep', 'assets/placeholder.svg'],
      ['Bantal Memory Foam Ergonomis', 'sleep', 'assets/placeholder.svg'],
      ['Sprei Katun Jepang King Size', 'sleep', 'assets/placeholder.svg'],
      ['Selimut Fleece Hangat Premium', 'sleep', 'assets/placeholder.svg'],
      ['Bed Cover Motif Minimalis', 'sleep', 'assets/placeholder.svg'],
      ['Guling Dakron Lembut Anti Kempes', 'sleep', 'assets/placeholder.svg']
    ],
    accessories: [
      ['Xundd Casing Poco F7 Pro Clear Anti Shock', 'accessories', 'assets/placeholder.svg'],
      ['Power Bank Xiaomi 20000mAh USB-C', 'accessories', 'assets/placeholder.svg'],
      ['Charger USB-C 25W Fast Charging Original', 'accessories', 'assets/placeholder.svg'],
      ['Kabel Data Type-C 1 Meter Nylon', 'accessories', 'assets/placeholder.svg'],
      ['Tempered Glass Poco F7 Pro Full Cover', 'accessories', 'assets/placeholder.svg'],
      ['Holder HP Mobil Magnetic', 'accessories', 'assets/placeholder.svg']
    ],
    home: [
      ['Wajan Anti Lengket Granite 28cm', 'home', 'assets/placeholder.svg'],
      ['Panci Stainless Steel 24cm', 'home', 'assets/placeholder.svg'],
      ['Blender Portable Juicer Cup', 'home', 'assets/placeholder.svg'],
      ['Rak Dapur 3 Tingkat Minimalis', 'home', 'assets/placeholder.svg'],
      ['Set Pisau Dapur Stainless 6 Pcs', 'home', 'assets/placeholder.svg'],
      ['Air Fryer Digital 4 Liter', 'home', 'assets/placeholder.svg']
    ],
    fashion: [
      ['Kaos Cotton Combed T-Shirt Premium Unisex', 'fashion', 'assets/placeholder.svg'],
      ['Hoodie Fleece Oversize Basic', 'fashion', 'assets/placeholder.svg'],
      ['Celana Cargo Parasut Pria', 'fashion', 'assets/placeholder.svg'],
      ['Kemeja Linen Casual Wanita', 'fashion', 'assets/placeholder.svg'],
      ['Jaket Varsity Bomber Premium', 'fashion', 'assets/placeholder.svg'],
      ['Dress Midi Korean Style', 'fashion', 'assets/placeholder.svg']
    ]
  };
  const categoryTerms = {
    electronics: ['electronics', 'audio', 'wearable', 'phone', 'hp', 'laptop', 'smartphone', 'headphone', 'smartwatch', 'kamera'],
    home: ['home', 'dapur', 'masak', 'wajan', 'peralatan', 'purifier', 'cooker', 'rice cooker'],
    accessories: ['accessories', 'case', 'charger', 'cable', 'powerbank', 'power bank', 'tas', 'gan'],
    beauty: ['skincare', 'beauty', 'serum', 'sunscreen', 'cleanser', 'face wash'],
    health: ['health', 'obat', 'vitamin', 'kesehatan', 'chicken essence', 'emulsion', 'dha', 'clarinase', 'blackmores'],
    fashion: ['fashion', 'shoes', 'bag', 'sepatu', 'pakaian', 'kasut', 'chino', 'pants'],
    food: ['food', 'snack', 'indomie', 'kitkat', 'mie', 'mamee', 'milo', 'gardenia', 'twisties', 'coffee'],
    sleep: ['sleep', 'bed', 'bantal', 'kasur', 'selimut']
  };
  const terms = categoryTerms[categoryKey] || [categoryKey];
  const products = getActiveCatalog().filter(product => {
    const searchable = `${product.category || ''} ${product.name || ''} ${(product.keywords || []).join(' ')}`.toLowerCase();
    return terms.some(term => searchable.includes(term)) && !(categoryKey === 'electronics' && product.category === 'bag');
  });
  if (products.length >= 2) return products;
  if (categorySeeds[categoryKey]) {
    return categorySeeds[categoryKey].map(([name, category, seedImage], index) => ({
      id: `category-${categoryKey}-${index}`,
      name,
      name_id: name,
      name_en: name,
      name_ms: name,
      name_zh: name,
      category,
      image: getPreferredProductImage(name, category, seedImage || '', categoryQuery),
      keywords: [categoryKey, category, name.toLowerCase()],
      price: 45000 + index * 27500,
      rating: 4.7 + (index % 3) * 0.1,
      sold: 1100 + index * 620,
      marketplace: ['Shopee', 'Tokopedia', 'Lazada'][index % 3],
      shop: 'Official Store',
      url: getClientDirectMarketplaceUrl(['Shopee', 'Tokopedia', 'Lazada'][index % 3], name, `category-${categoryKey}-${index}`)
    }));
  }
  return generateDynamicLocalizedProducts(categoryQuery);
}


function activateCategoryMode(categoryKey, categoryQuery, displayQuery = categoryKey) {
  if (!categoryQuery) return;
  saveSearchKeyword(categoryQuery);
  recordRecommendationSignal('searches', categoryQuery);
  closeSearchHistoryDropdown();
  if (searchInput) searchInput.value = displayQuery;
  document.body.classList.remove('cart-mode-active', 'orders-mode-active');
  document.body.classList.add('search-mode-active');
  categoryFeedState.categoryKey = categoryKey;
  categoryFeedState.query = categoryQuery;
  loadMoreCategoryResults(true);

  const params = new URLSearchParams(window.location.search);
  params.set('lang', getCurrentLang());
  params.set('region', getCurrentRegion());
  params.set('search', displayQuery);
  params.set('category', categoryKey);
  params.delete('page');
  window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);
}

function deactivateSearchMode() {
  document.body.classList.remove('search-mode-active');
  document.body.classList.remove('cart-mode-active');
  document.body.classList.remove('orders-mode-active');
  showDoomLoader('search', false);
  showDoomEnd('search', false);
  
  if (searchInput) searchInput.value = '';
  if (clearSearchBtn) clearSearchBtn.classList.remove('show');
  if (searchBtn) searchBtn.classList.remove('active');
  renderMarketplaceResults('');

  // Only render recommendations if grid is empty (first time or after clear)
  const grid = document.getElementById('homeRecommendGrid');
  if (grid && grid.children.length === 0) {
    if (recommendationState.products.length > 0) {
      renderRecommendationCards(recommendationState.products.slice(0, recommendationState.visibleCount || getRecommendationInitialSize()));
    } else {
      loadMoreRecommendations(true);
    }
  }

  const lang = getCurrentLang();
  const region = getCurrentRegion();
  const newUrl = `${window.location.pathname}?lang=${lang}&region=${region}`;
  window.history.pushState({}, '', newUrl);

  applyLanguageUI(lang);
  applyRegionUI(region);
}

function activateCartMode() {
  hideCartToast();
  markCartNotificationSeen();
  document.body.classList.remove('search-mode-active');
  document.body.classList.add('cart-mode-active');
  document.body.classList.add('orders-mode-active'); // backward compatibility

  if (searchInput) searchInput.value = '';
  if (clearSearchBtn) clearSearchBtn.classList.remove('show');
  if (searchBtn) searchBtn.classList.remove('active');

  const lang = getCurrentLang();
  const region = getCurrentRegion();
  const params = new URLSearchParams(window.location.search);
  
  params.set('lang', lang);
  params.set('region', region);
  params.set('page', 'cart'); 
  params.delete('search');
  params.delete('q');

  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.pushState({ path: newUrl, page: 'cart' }, '', newUrl);

  renderCartView();
  applyLanguageUI(lang);
  applyRegionUI(region);
}

function deactivateCartMode() {
  document.body.classList.remove('cart-mode-active');
  document.body.classList.remove('orders-mode-active');
  
  const lang = getCurrentLang();
  const region = getCurrentRegion();
  const newUrl = `${window.location.pathname}?lang=${lang}&region=${region}`;
  window.history.pushState({}, '', newUrl);

  applyLanguageUI(lang);
  applyRegionUI(region);
}

function updateURL(lang, region, searchQuery = '') {
  const params = new URLSearchParams(window.location.search);
  params.set('lang', lang);
  params.set('region', region);

  if (searchQuery) {
    params.set('search', searchQuery);
    params.delete('q');
    params.delete('page');
  } else if (!params.has('page')) {
    params.delete('search');
    params.delete('q');
  }

  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.pushState({ path: newUrl }, '', newUrl);

  localStorage.setItem('selected_lang', lang);
  localStorage.setItem('selected_region', region);

  applyLanguageUI(lang);
  applyRegionUI(region);
}

/* ========================================================== */
/* 10. MULTI-LANGUAGE & REGION UI UPDATER (INSTANT REACTIVITY)*/
/* ========================================================== */
function applyLanguageUI(langKey) {
  const lang = langKey || getCurrentLang();
  const langData = i18nDictionary[lang] || i18nDictionary['id'];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (langData[key]) {
      el.innerText = langData[key];
    }
  });

  if (searchInput) {
    searchInput.placeholder = langData.searchPlaceholder || 'Cari produk...';
  }

  const aiAssistantBtn = document.getElementById('aiAssistantBtn');
  if (aiAssistantBtn) {
    const aiText = aiAssistantBtn.querySelector('.ai-text');
    if (aiText && langData.aiButtonLabel) {
      aiText.innerText = langData.aiButtonLabel;
    }
    aiAssistantBtn.setAttribute('aria-label', langData.aiButtonAria || 'Tanya AI Asisten');
  }

  const aiUserInput = document.getElementById('aiUserInput');
  if (aiUserInput) {
    aiUserInput.placeholder = langData.aiInputPlaceholder || 'Tanya AI seputar produk...';
  }

  // Sync AI prompt chips with current language
  document.querySelectorAll('.ai-prompt-chip').forEach(chip => {
    const pKey = chip.getAttribute('data-prompt-key');
    if (pKey && langData[pKey]) {
      chip.setAttribute('data-ai-prompt', langData[pKey]);
    }
  });

  const searchResultsMeta = document.getElementById('searchResultsMeta');
  if (searchResultsMeta) {
    const query = (searchInput && searchInput.value.trim()) || '';
    if (query) {
      searchResultsMeta.innerText = `${langData.searchResultsFor || 'Hasil untuk'} "${query}"`;
    } else {
      searchResultsMeta.innerText = langData.searchResultsMeta || 'Produk yang cocok dengan pencarian Anda.';
    }
  }

  if (isHistoryDOMBuilt) {
    renderHistoryDOM();
  }

  // Re-render active view immediately
  if (document.body.classList.contains('cart-mode-active') || document.body.classList.contains('orders-mode-active')) {
    renderCartView();
  } else if (document.body.classList.contains('search-mode-active')) {
    const currentSearch = searchInput ? searchInput.value.trim() : '';
    if (currentSearch) {
      const activeCategory = new URLSearchParams(window.location.search).get('category');
      const categoryLabels = {
        electronics: 'elektronik',
        home: 'peralatan rumah tangga',
        accessories: 'aksesoris',
        beauty: 'kecantikan',
        health: 'kesehatan',
        food: 'cemilan',
        sleep: 'tempat tidur'
      };
      if (activeCategory) {
        const categoryLabel = categoryLabels[activeCategory] || activeCategory;
        renderMarketplaceResults(currentSearch, getCategoryProducts(activeCategory, categorySearchQueries[categoryLabel] || currentSearch));
      } else {
        renderMarketplaceResults(currentSearch);
      }
    }
  } else {
    // Home view — don't re-render cards (preserves loaded images)
  }
}

function applyRegionUI(regionKey) {
  const region = regionKey || getCurrentRegion();

  // Re-render active view with the newly selected currency rate
  if (document.body.classList.contains('cart-mode-active') || document.body.classList.contains('orders-mode-active')) {
    renderCartView();
  } else if (document.body.classList.contains('search-mode-active')) {
    const currentSearch = searchInput ? searchInput.value.trim() : '';
    if (currentSearch) {
      const activeCategory = new URLSearchParams(window.location.search).get('category');
      const categoryLabels = {
        electronics: 'elektronik',
        home: 'peralatan rumah tangga',
        accessories: 'aksesoris',
        beauty: 'kecantikan',
        health: 'kesehatan',
        food: 'cemilan',
        sleep: 'tempat tidur'
      };
      if (activeCategory) {
        const categoryLabel = categoryLabels[activeCategory] || activeCategory;
        renderMarketplaceResults(currentSearch, getCategoryProducts(activeCategory, categorySearchQueries[categoryLabel] || currentSearch));
      } else {
        renderMarketplaceResults(currentSearch);
      }
    }
  } else {
    // Home view — don't re-render cards (preserves loaded images)
  }
}

/* ========================================================== */
/* 11. DROPDOWN & LOGO ACTIONS                                */
/* ========================================================== */
const logoBtn = document.getElementById('logoBtn');
const mainLogo = document.getElementById('mainLogo');
const logoDropdown = document.getElementById('logoDropdown');
const themeToggle = document.getElementById('themeToggle');
const searchInput = document.querySelector('.search-input') || document.getElementById('searchInput');
const searchHistoryDropdown = document.querySelector('.search-history-dropdown') || document.getElementById('searchHistoryDropdown');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const searchBtn = document.getElementById('searchBtn');
const heroBanner = document.getElementById('heroBanner');
const bannerCtaBtn = document.getElementById('bannerCtaBtn');

const categorySearchQueries = {
  elektronik: 'elektronik hp smartphone laptop tablet kamera',
  'peralatan rumah tangga': 'peralatan rumah tangga dapur alat masak',
  aksesoris: 'aksesoris phone case charger kabel power bank',
  kecantikan: 'skincare kosmetik serum sunscreen kecantikan',
  sanitasi: 'sanitasi perawatan diri sabun shampoo kebersihan',
  'alat tulis kantor': 'alat tulis kantor stationery buku catatan',
  kesehatan: 'kesehatan vitamin obat suplemen',
  'peralatan masak': 'peralatan masak wajan panci kitchen',
  pakaian: 'pakaian fashion baju hoodie kaos',
  buku: 'buku novel komik bacaan',
  snack: 'snack cemilan makanan indomie cokelat',
  cemilan: 'snack cemilan makanan indomie cokelat',
  'buku & komik': 'buku komik novel bacaan',
  tas: 'tas ransel backpack selempang',
  'alas kaki': 'sepatu sneakers sandal footwear',
  'tempat tidur': 'tempat tidur kasur bantal selimut sprei',
  game: 'gaming headset keyboard mouse game'
};

const navCartBtn = document.getElementById('navCartBtn');
const cartDropdownBtn = document.getElementById('cartDropdownBtn');
const clearCartBtn = document.getElementById('clearCartBtn');
const cartCheckoutBtn = document.getElementById('cartCheckoutBtn');

const langModal = document.getElementById('languageModal');
const regionModal = document.getElementById('regionModal');
const modalLangTitle = document.getElementById('modalLangTitle');
const modalLangSub = document.getElementById('modalLangSub');
const modalLangContinueBtn = document.getElementById('modalLangContinueBtn');
const modalRegionContinueBtn = document.getElementById('modalRegionContinueBtn');
const changeLangDropdownBtn = document.getElementById('changeLangDropdownBtn');
const changeRegionDropdownBtn = document.getElementById('changeRegionDropdownBtn');

const productDetailModal = document.getElementById('productDetailModal');
const closeProductModalBtn = document.getElementById('closeProductModalBtn');

function setLogoTheme(isLight) {
  if (mainLogo) {
    mainLogo.src = isLight ? 'assets/logo_light.png' : 'assets/logo_dark.png';
  }
  const aboutLogo = document.getElementById('aboutLogo');
  if (aboutLogo) {
    aboutLogo.src = isLight ? 'assets/logo_light.png' : 'assets/logo_dark.png';
  }
}

if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
  if (themeToggle) themeToggle.checked = true;
  setLogoTheme(true);
} else {
  setLogoTheme(false);
}

if (localStorage.getItem('yj_easter_egg') === 'true') {
  document.body.classList.add('easter-egg-mode');
}

themeToggle?.addEventListener('change', () => {
  if (themeToggle.checked) {
    document.body.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
    setLogoTheme(true);
  } else {
    document.body.classList.remove('light-mode');
    localStorage.setItem('theme', 'dark');
    setLogoTheme(false);
  }
});

function closeSearchHistoryDropdown() {
  if (searchHistoryDropdown) {
    searchHistoryDropdown.classList.remove('show');
  }
}

if (logoBtn) {
  logoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeSearchHistoryDropdown();
    logoDropdown?.classList.toggle('show');
  });
}

document.addEventListener('click', (e) => {
  const target = e.target;
  if (!target) return;

  if (logoDropdown && logoBtn && !logoDropdown.contains(target) && !logoBtn.contains(target)) {
    logoDropdown.classList.remove('show');
  }
});

// Home click in dropdown
document.querySelectorAll('[data-i18n="menuHome"]').forEach(homeEl => {
  const target = homeEl.closest('.dropdown-item') || homeEl;
  target.addEventListener('click', (e) => {
    e.preventDefault();
    logoDropdown?.classList.remove('show');
    deactivateSearchMode();
    deactivateCartMode();
  });
});

// Cart triggers (Header button & Dropdown item)
navCartBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  closeSearchHistoryDropdown();
  logoDropdown?.classList.remove('show');
  activateCartMode();
});

cartDropdownBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  logoDropdown?.classList.remove('show');
  closeSearchHistoryDropdown();
  activateCartMode();
});

clearCartBtn?.addEventListener('click', () => {
  clearCart();
});

if (cartCheckoutBtn) {
  cartCheckoutBtn.disabled = true;
  cartCheckoutBtn.setAttribute('aria-hidden', 'false');
  cartCheckoutBtn.setAttribute('aria-disabled', 'true');
  cartCheckoutBtn.title = 'Checkout (Work in Progress)';
  cartCheckoutBtn.style.opacity = '0.7';
  cartCheckoutBtn.style.cursor = 'not-allowed';
  cartCheckoutBtn.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
}

// Product detail modal close
closeProductModalBtn?.addEventListener('click', closeProductModal);
productDetailModal?.addEventListener('click', (e) => {
  if (e.target === productDetailModal) {
    closeProductModal();
  }
});

// Category grid click handlers
document.querySelectorAll('.cat-item').forEach(catEl => {
  catEl.addEventListener('click', () => {
    const q = catEl.getAttribute('data-category-search') || catEl.querySelector('span')?.innerText || '';
    const normalizedCategory = q.toLowerCase();
    const categoryKey = normalizedCategory === 'elektronik' ? 'electronics'
      : normalizedCategory === 'peralatan rumah tangga' ? 'home'
      : normalizedCategory === 'aksesoris' ? 'accessories'
      : normalizedCategory === 'kecantikan' ? 'beauty'
      : normalizedCategory === 'kesehatan' ? 'health'
      : normalizedCategory === 'cemilan' || normalizedCategory === 'snack' ? 'food'
      : normalizedCategory === 'tempat tidur' ? 'sleep'
      : normalizedCategory === 'sepatu' ? 'fashion'
      : normalizedCategory === 'oleh oleh' ? 'food'
      : normalizedCategory;
    const categoryQuery = categorySearchQueries[normalizedCategory] || q;
    if (categoryQuery) {
      activateCategoryMode(categoryKey, categoryQuery, q);
    }
  });
});

// Home recommendation quick add buttons
document.querySelectorAll('#homeRecommendGrid .recommend-prod-card').forEach(card => {
  const pId = card.getAttribute('data-product-id');
  const pName = card.getAttribute('data-name');
  const pPrice = parseFloat(card.getAttribute('data-price')) || 199000;
  const pMp = card.getAttribute('data-marketplace') || 'Shopee';
  const pShop = card.getAttribute('data-shop') || 'Official Store';
  const pImg = card.getAttribute('data-image') || '';

  const prodObj = {
    id: pId,
    name: pName,
    price: pPrice,
    marketplace: pMp,
    shop: pShop,
    image: pImg,
    url: getClientDirectMarketplaceUrl(pMp, pName, pId)
  };

  card.querySelector('.product-img-box')?.addEventListener('click', () => {
    openProductModal(prodObj);
  });

  card.querySelector('.product-info h4')?.addEventListener('click', () => {
    openProductModal(prodObj);
  });

  card.querySelector('.quick-add-cart-btn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    addToCart(prodObj, 1);
  });
});

/* ========================================================== */
/* 12. SEARCH INPUT & HISTORY                                 */
/* ========================================================== */
let isHistoryDOMBuilt = false;

function renderHistoryDOM() {
  let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
  if (!searchHistoryDropdown) return;

  if (history.length === 0) {
    searchHistoryDropdown.classList.remove('show');
    searchHistoryDropdown.innerHTML = '';
    isHistoryDOMBuilt = false;
    return;
  }

  const lang = getCurrentLang();
  const langData = i18nDictionary[lang] || i18nDictionary.id;
  let html = `<div style="padding: 6px 12px; font-size: 11px; color: #94a3b8; font-weight: 600;">${escapeHtml(langData.historyTitle || 'Pencarian Terakhir')}</div>`;
  const maxDisplay = 5;

  history.slice(0, maxDisplay).forEach((item) => {
    const safeItem = escapeHtml(item);
    html += `
      <div class="search-history-item" data-keyword="${safeItem}">
        <div class="history-item-left">
          <img src="assets/clockdark.png" alt="History Dark" class="history-clock-icon clock-dark">
          <img src="assets/clocklight.png" alt="History Light" class="history-clock-icon clock-light">
          <span title="${safeItem}">${safeItem}</span>
        </div>
        <span class="delete-item-text" title="Hapus riwayat">&times;</span>
      </div>
    `;
  });

  searchHistoryDropdown.innerHTML = html;
  isHistoryDOMBuilt = true;
}

function filterSearchHistory(filterQuery = '') {
  if (!searchHistoryDropdown) return;
  const query = filterQuery.trim().toLowerCase();
  const items = searchHistoryDropdown.querySelectorAll('.search-history-item');
  let visibleCount = 0;

  items.forEach((el) => {
    const keyword = el.getAttribute('data-keyword')?.toLowerCase() || '';
    const isMatch = query === '' || keyword.startsWith(query);

    if (isMatch) {
      el.classList.remove('hide-item');
      visibleCount++;
    } else {
      el.classList.add('hide-item');
    }
  });

  if (visibleCount > 0) {
    searchHistoryDropdown.classList.add('show');
  } else {
    searchHistoryDropdown.classList.remove('show');
  }
}

function openSearchHistory() {
  if (!isHistoryDOMBuilt) renderHistoryDOM();
  requestAnimationFrame(() => {
    filterSearchHistory(searchInput ? searchInput.value : '');
  });
}

function saveSearchKeyword(keyword) {
  if (localStorage.getItem('disableSearchHistory') === 'true') return;
  if (!keyword || keyword.trim() === '') return;

  let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
  history = history.filter(item => item.toLowerCase() !== keyword.toLowerCase());
  history.unshift(keyword.trim());
  if (history.length > 15) history.pop();
  
  localStorage.setItem('searchHistory', JSON.stringify(history));
  isHistoryDOMBuilt = false;
}

if (searchInput) {
  searchInput.addEventListener('focus', openSearchHistory);
  searchInput.addEventListener('click', openSearchHistory);

  searchInput.addEventListener('input', (e) => {
    const val = e.target.value;
    if (clearSearchBtn) {
      if (val.trim().length > 0) clearSearchBtn.classList.add('show');
      else clearSearchBtn.classList.remove('show');
    }
    if (searchBtn) {
      if (val.trim().length > 0) searchBtn.classList.add('active');
      else searchBtn.classList.remove('active');
    }
    filterSearchHistory(val);
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query !== '') activateSearchMode(query);
    }
  });
}

clearSearchBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  if (searchInput) {
    searchInput.value = '';
    searchInput.focus();
  }
  clearSearchBtn.classList.remove('show');
  if (searchBtn) searchBtn.classList.remove('active');
  openSearchHistory();
});

searchBtn?.addEventListener('click', () => {
  if (searchInput) {
    const query = searchInput.value.trim();
    if (query !== '') activateSearchMode(query);
  }
});

document.addEventListener('click', (e) => {
  const target = e.target;
  if (!target) return;

  const deleteBtn = target.closest('.delete-item-text');
  if (deleteBtn) {
    e.preventDefault();
    e.stopPropagation();
    const historyItem = deleteBtn.closest('.search-history-item');
    const keywordToDelete = historyItem?.getAttribute('data-keyword');
    if (keywordToDelete && historyItem) {
      let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
      history = history.filter(item => item.toLowerCase() !== keywordToDelete.toLowerCase());
      localStorage.setItem('searchHistory', JSON.stringify(history));
      historyItem.remove();
      if (history.length === 0 && searchHistoryDropdown) {
        searchHistoryDropdown.classList.remove('show');
      }
    }
    return;
  }

  const historyItemEl = target.closest('.search-history-item');
  if (historyItemEl) {
    const keyword = historyItemEl.getAttribute('data-keyword');
    if (keyword) {
      closeSearchHistoryDropdown();
      activateSearchMode(keyword);
    }
    return;
  }

  const searchBox = document.getElementById('searchBoxContainer');
  if (searchBox && !searchBox.contains(target) && searchHistoryDropdown) {
    closeSearchHistoryDropdown();
  }
});

/* ========================================================== */
/* 13. MODALS (LANGUAGE, REGION, SETTINGS)                    */
/* ========================================================== */
changeLangDropdownBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  if (logoDropdown) logoDropdown.classList.remove('show');
  if (langModal) langModal.classList.add('show');
});

changeRegionDropdownBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  if (logoDropdown) logoDropdown.classList.remove('show');
  if (regionModal) regionModal.classList.add('show');
});

document.querySelectorAll('input[name="modalLang"]').forEach(radio => {
  radio.addEventListener('change', (e) => {
    const targetLang = e.target.value;
    const langData = i18nDictionary[targetLang];
    if (langData) {
      if (modalLangTitle) modalLangTitle.innerText = langData.modalLangTitle;
      if (modalLangSub) modalLangSub.innerText = langData.modalLangSub;
      if (modalLangContinueBtn) modalLangContinueBtn.innerText = langData.continueBtn;
    }
  });
});

modalLangContinueBtn?.addEventListener('click', () => {
  const selectedRadio = document.querySelector('input[name="modalLang"]:checked');
  const selectedLang = selectedRadio ? selectedRadio.value : getCurrentLang();
  localStorage.setItem('selected_lang', selectedLang);

  const params = new URLSearchParams(window.location.search);
  params.set('lang', selectedLang);
  if (!params.has('region')) {
    params.set('region', getCurrentRegion());
  }
  params.delete('page');
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.location.href = newUrl;
});


modalRegionContinueBtn?.addEventListener('click', () => {
  const selectedRadio = document.querySelector('input[name="modalRegion"]:checked');
  const selectedRegion = selectedRadio?.value === 'my' ? 'my' : 'id';
  localStorage.setItem('selected_region', selectedRegion);

  const params = new URLSearchParams(window.location.search);
  params.set('region', selectedRegion);
  if (!params.has('lang')) {
    params.set('lang', getCurrentLang());
  }
  params.delete('page');
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.location.href = newUrl;
});

// Click outside modal overlay to dismiss
[langModal, regionModal].forEach(modal => {
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
});


/* Settings Modal */
const settingsBtn = document.getElementById('settingsDropdownBtn');
const settingsModal = document.getElementById('settingsModal');
const closeSettingsBtn = document.getElementById('closeSettingsModalBtn');

if (settingsBtn && settingsModal) {
  settingsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (logoDropdown) logoDropdown.classList.remove('show');
    settingsModal.classList.add('show');
  });
}

if (closeSettingsBtn && settingsModal) {
  closeSettingsBtn.addEventListener('click', () => {
    settingsModal.classList.remove('show');
  });
}

/* About Me Modal */
const aboutBtn = document.getElementById('aboutDropdownBtn');
const aboutModal = document.getElementById('aboutModal');
const closeAboutBtn = document.getElementById('closeAboutModalBtn');

if (aboutBtn && aboutModal) {
  aboutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (logoDropdown) logoDropdown.classList.remove('show');
    aboutModal.classList.add('show');
  });
}

if (aboutModal) {
  // Click overlay background to close
  aboutModal.addEventListener('click', (e) => {
    if (e.target === aboutModal) aboutModal.classList.remove('show');
  });
}

if (closeAboutBtn && aboutModal) {
  closeAboutBtn.addEventListener('click', () => {
    aboutModal.classList.remove('show');
  });
}

const aiAssistantBtn = document.getElementById('aiAssistantBtn');
const aiChatPanel = document.getElementById('aiChatPanel');
const closeAiPanelBtn = document.getElementById('closeAiPanelBtn');

if (aiAssistantBtn && aiChatPanel) {
  aiAssistantBtn.addEventListener('click', (e) => {
    e.preventDefault();
    aiChatPanel.classList.toggle('active');
  });
}

if (closeAiPanelBtn && aiChatPanel) {
  closeAiPanelBtn.addEventListener('click', () => {
    aiChatPanel.classList.remove('active');
  });
}

function initializeAiAssistant() {
  const promptButtons = document.querySelectorAll('.ai-prompt-chip');
  const messagesBox = document.getElementById('aiChatMessages');
  const chatForm = document.getElementById('aiChatInputForm');
  const userInput = document.getElementById('aiUserInput');
  const clearChatBtn = document.getElementById('clearAiChatBtn');

  if (!messagesBox) return;

  const AI_HISTORY_KEY = 'yj_ai_chat_history';
  const AI_HISTORY_VERSION_KEY = 'yj_ai_chat_history_version';
  const AI_SESSION_KEY = 'yj_ai_session_state';

  const scrollToBottom = () => {
    messagesBox.scrollTop = messagesBox.scrollHeight;
  };

  // Save all messages (except typing indicator) to localStorage
  const saveChatHistory = () => {
    const msgs = [];
    messagesBox.querySelectorAll('.ai-message:not(.ai-typing-wrapper)').forEach(el => {
      msgs.push({
        role: el.classList.contains('user') ? 'user' : 'assistant',
        html: el.innerHTML,
        products: Array.isArray(el._productList) ? el._productList : []
      });
    });
    try { localStorage.setItem(AI_HISTORY_KEY, JSON.stringify(msgs)); } catch(e) {}
  };

  // Bind interactive elements on restored/new assistant messages
  const bindCardListeners = (msgEl, productList) => {
    msgEl.querySelectorAll('.ai-product-mini-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.ai-quick-cart') || e.target.closest('.ai-cart-btn')) return;
        const pid = card.getAttribute('data-product-id');
        const prod = (productList && productList.find(p => p.id === pid))
          || getActiveCatalog().find(p => p.id === pid)
          || AI_PRODUCT_DATABASE.find(p => p.id === pid);
        const targetUrl = prod ? getSafeMarketplaceUrl(prod.url, prod.marketplace, prod.name, prod.id) : null;
        if (targetUrl) window.open(targetUrl, '_blank', 'noopener,noreferrer');
      });
    });
    msgEl.querySelectorAll('.ai-quick-cart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const pid = btn.getAttribute('data-product-id');
        const prod = (productList && productList.find(p => p.id === pid))
          || getActiveCatalog().find(p => p.id === pid)
          || AI_PRODUCT_DATABASE.find(p => p.id === pid);
        if (prod) addToCart(prod, 1, btn);
      });
    });
    msgEl.querySelectorAll('.ai-trigger-search').forEach(btn => {
      btn.addEventListener('click', () => {
        const query = btn.getAttribute('data-search');
        if (query) {
          if (aiChatPanel) aiChatPanel.classList.remove('active');
          activateSearchMode(query);
        }
      });
    });
  };

  const addMessage = (role, htmlContent, skipSave, productList = []) => {
    const wrapper = document.createElement('div');
    wrapper.className = `ai-message ${role}`;
    if (role === 'assistant') {
      wrapper.innerHTML = `
        <div class="ai-msg-avatar">🤖</div>
        <div class="ai-msg-content">${htmlContent}</div>
      `;
    } else {
      wrapper.innerHTML = `
        <div class="ai-msg-content">${escapeHtml(htmlContent)}</div>
      `;
    }
    if (role === 'assistant') wrapper._productList = Array.isArray(productList) ? productList : [];
    messagesBox.appendChild(wrapper);
    scrollToBottom();
    if (!skipSave) saveChatHistory();
    return wrapper;
  };

  // Restore chat history from localStorage on init
  const restoreChatHistory = () => {
    try {
      if (localStorage.getItem(AI_HISTORY_VERSION_KEY) !== '3') {
        localStorage.removeItem(AI_HISTORY_KEY);
        localStorage.setItem(AI_HISTORY_VERSION_KEY, '3');
        return false;
      }
      const saved = localStorage.getItem(AI_HISTORY_KEY);
      if (!saved) return false;
      const msgs = JSON.parse(saved);
      if (!Array.isArray(msgs) || msgs.length === 0) return false;
      messagesBox.innerHTML = '';
      msgs.forEach(m => {
        const wrapper = document.createElement('div');
        wrapper.className = `ai-message ${m.role}`;
        if (m.role === 'assistant' && m.html && m.html.includes('ai-product-mini-card')) {
          wrapper.innerHTML = m.html;
        } else {
          wrapper.innerHTML = `<div class="ai-msg-content">${formatSafeAiText(String(m.html || '').replace(/<[^>]*>/g, ' '))}</div>`;
        }
        messagesBox.appendChild(wrapper);
        if (m.role === 'assistant') {
          wrapper._productList = Array.isArray(m.products) ? m.products : [];
          bindCardListeners(wrapper, wrapper._productList);
          hydrateSearchImages(wrapper);
        }
      });
      scrollToBottom();
      return true;
    } catch(e) { return false; }
  };

  // Try restoring chat messages from localStorage on init
  const restored = restoreChatHistory();

  const showTypingIndicator = (initialText = 'Menganalisis kebutuhan & kriteria belanja...') => {
    const wrapper = document.createElement('div');
    wrapper.className = 'ai-message assistant ai-typing-wrapper';
    wrapper.innerHTML = `
      <div class="ai-msg-avatar">🤖</div>
      <div class="ai-msg-content ai-typing-indicator">
        <div class="ai-typing-dots">
          <div class="ai-typing-dot"></div>
          <div class="ai-typing-dot"></div>
          <div class="ai-typing-dot"></div>
        </div>
        <div class="ai-thinking-text">${escapeHtml(initialText)}</div>
      </div>
    `;
    messagesBox.appendChild(wrapper);
    scrollToBottom();
    return wrapper;
  };

  const updateTypingText = (typingWrapper, newText) => {
    if (!typingWrapper) return;
    const textEl = typingWrapper.querySelector('.ai-thinking-text');
    if (textEl) textEl.textContent = newText;
    scrollToBottom();
  };

  const AI_PRODUCT_DATABASE = [
    // --- SMARTPHONES: FLAGSHIP 2026 (NEWEST) ---
    {
      id: 'ai-s26-ultra',
      name: 'Samsung Galaxy S26 Ultra 5G 16/1TB Titanium Platinum 2026',
      name_en: 'Samsung Galaxy S26 Ultra 5G 16/1TB Titanium Platinum 2026',
      name_ms: 'Samsung Galaxy S26 Ultra 5G 16/1TB Titanium Platinum 2026',
      name_zh: '三星 Samsung Galaxy S26 Ultra 5G 16/1TB 2026年新款旗舰',
      category: 'electronics',
      brand: 'samsung',
      tier: 'flagship',
      isOfficial: true,
      price: 27999000,
      originalPrice: 29999000,
      rating: 5.0,
      sold: 2150,
      shop: 'Samsung Official Store',
      marketplace: 'Shopee',
      image: 'assets/placeholder.svg',
      keywords: ['samsung', 'galaxy', 's26', 'ultra', '2026', 'flagship', 'hp', 'smartphone', 'terbaru'],
      reason_id: 'Flagship 2026 terkini dengan Snapdragon 8 Gen 4, layar AMOLED 6.9" 200Hz, kamera 300MP AI zoom 10x, dan AI Galaxy Copilot generasi baru.',
      reason_en: '2026 latest flagship with Snapdragon 8 Gen 4, 200Hz AMOLED display, 300MP AI 10x zoom, and new Galaxy Copilot.',
      reason_ms: 'Flagship 2026 terkini dengan Snapdragon 8 Gen 4, skrin AMOLED 200Hz, kamera AI 300MP dan Galaxy Copilot baru.',
      reason_zh: '2026年最新旗舰，搭载骁龙8 Gen 4、200Hz AMOLED屏、3亿像素AI 10倍变焦与全新Galaxy Copilot智能助手。'
    },
    {
      id: 'ai-ip17-pro-max',
      name: 'Apple iPhone 17 Pro Max 512GB Desert Titanium 2026 Official',
      name_en: 'Apple iPhone 17 Pro Max 512GB Desert Titanium 2026 Official',
      name_ms: 'Apple iPhone 17 Pro Max 512GB Desert Titanium 2026 Rasmi',
      name_zh: '苹果 Apple iPhone 17 Pro Max 512GB 沙漠钛金属 2026年最新',
      category: 'electronics',
      brand: 'apple',
      tier: 'flagship',
      isOfficial: true,
      price: 29499000,
      originalPrice: 31999000,
      rating: 5.0,
      sold: 3420,
      shop: 'iBox Official Shop',
      marketplace: 'Shopee',
      image: 'assets/placeholder.svg',
      keywords: ['iphone', 'apple', '17 pro max', 'iphone 17', '2026', 'pro max', 'hp', 'smartphone', 'terbaru'],
      reason_id: 'iPhone 2026 terbaru dengan chip A20 Pro Max super canggih, kamera periscope 48MP zoom optik 5x, dan AI Apple Intelligence terdepan.',
      reason_en: '2026 iPhone with A20 Pro Max chip, 48MP periscope 5x zoom camera, and advanced Apple Intelligence AI.',
      reason_ms: 'iPhone 2026 dengan cip A20 Pro Max, kamera periskop 48MP zoom 5x, dan Apple Intelligence AI canggih.',
      reason_zh: '2026年iPhone新旗舰，搭载A20 Pro Max芯片、48MP潜望长焦、双杜比视界录制与最先进Apple Intelligence。'
    },
    {
      id: 'ai-mi17-ultra',
      name: 'Xiaomi 17 Ultra 5G 16/1TB Leica Master Series 2026',
      name_en: 'Xiaomi 17 Ultra 5G 16/1TB Leica Master Series 2026',
      name_ms: 'Xiaomi 17 Ultra 5G 16/1TB Siri Leica Master 2026',
      name_zh: '小米 Xiaomi 17 Ultra 5G 16/1TB 徕卡大师系列 2026年新款',
      category: 'electronics',
      brand: 'xiaomi',
      tier: 'flagship',
      isOfficial: true,
      price: 23999000,
      originalPrice: 25999000,
      rating: 4.95,
      sold: 1580,
      shop: 'Xiaomi Official Store',
      marketplace: 'Tokopedia',
      image: 'assets/placeholder.svg',
      keywords: ['xiaomi', '17 ultra', 'leica', '2026', 'hp', 'smartphone', 'flagship', 'kamera', 'terbaru'],
      reason_id: 'Flagship fotografi 2026 dengan Leica Summilux 1-inci f/1.3 optik, sensor 200MP + 48MP periscope, Snapdragon 8 Gen 4, dan HyperOS AI terbaru.',
      reason_en: '2026 photography flagship with Leica Summilux 1-inch f/1.3, 200MP + 48MP periscope, Snapdragon 8 Gen 4, latest HyperOS AI.',
      reason_ms: 'Flagship fotografi 2026 dengan Leica Summilux 1-inci f/1.3, sensor 200MP + 48MP periskop, Snapdragon 8 Gen 4.',
      reason_zh: '2026年影像旗舰，配备徕卡Summilux 1英寸f/1.3大光圈、2亿像素+4800万潜望长焦、骁龙8 Gen 4与最新HyperOS AI。'
    },

    // --- SMARTPHONES: FLAGSHIP (2025) ---
    {
      id: 'ai-s25-ultra',
      name: 'Samsung Galaxy S25 Ultra 5G 12/512GB Titanium Black',
      name_en: 'Samsung Galaxy S25 Ultra 5G 12/512GB Titanium Black',
      name_ms: 'Samsung Galaxy S25 Ultra 5G 12/512GB Titanium Black',
      name_zh: '三星 Samsung Galaxy S25 Ultra 5G 旗舰手机 12/512GB',
      category: 'electronics',
      brand: 'samsung',
      tier: 'flagship',
      isOfficial: true,
      price: 21999000,
      originalPrice: 23999000,
      rating: 5.0,
      sold: 1420,
      shop: 'Samsung Official Store',
      marketplace: 'Shopee',
      image: 'assets/placeholder.svg',
      keywords: ['samsung', 'galaxy', 's25', 'ultra', 'flagship', 'hp', 'smartphone', 'samsung s25', 'kamera'],
      reason_id: 'Flagship Android tertangguh 2025 dengan Snapdragon 8 Elite, bodi titanium, kamera 200MP zoom optik 5x, dan fitur Galaxy AI terlengkap.',
      reason_en: 'Ultimate 2025 flagship with Snapdragon 8 Elite, titanium frame, 200MP camera, and complete Galaxy AI suite.',
      reason_ms: 'Telefon pintar flagship 2025 dengan Snapdragon 8 Elite, bingkai titanium, kamera 200MP dan ciri Galaxy AI lengkap.',
      reason_zh: '2025安卓机皇，搭载骁龙8 Elite、钛金属机身、2亿像素5倍潜望长焦与最全Galaxy AI生态。'
    },
    {
      id: 'ai-ip16-pro',
      name: 'Apple iPhone 16 Pro Max 256GB Desert Titanium Garansi Resmi iBox',
      name_en: 'Apple iPhone 16 Pro Max 256GB Desert Titanium Official Warranty',
      name_ms: 'Apple iPhone 16 Pro Max 256GB Desert Titanium Jaminan Rasmi',
      name_zh: '苹果 Apple iPhone 16 Pro Max 256GB 沙漠钛金属 国行正品',
      category: 'electronics',
      brand: 'apple',
      tier: 'flagship',
      isOfficial: true,
      price: 24499000,
      originalPrice: 25999000,
      rating: 5.0,
      sold: 2890,
      shop: 'iBox Official Shop',
      marketplace: 'Shopee',
      image: 'assets/placeholder.svg',
      keywords: ['iphone', 'apple', '16 pro', 'iphone 16', 'pro max', 'hp', 'smartphone', 'ios', 'ibox'],
      reason_id: 'Performa chip A18 Pro terdepan untuk rendering & video 4K 120fps Dolby Vision, bodi titanium grade 5 ringan, dan ekosistem Apple paling stabil.',
      reason_en: 'Leading A18 Pro chip performance for 4K 120fps Dolby Vision video and ultra-stable Apple ecosystem.',
      reason_ms: 'Prestasi cip A18 Pro terhebat untuk video 4K 120fps Dolby Vision dan ekosistem iOS paling stabil.',
      reason_zh: '搭载顶级A18 Pro芯片，支持4K 120fps杜比视界拍摄，5级钛金属轻盈坚固，官方正品iBox联保。'
    },
    {
      id: 'ai-mi15-ultra',
      name: 'Xiaomi 15 Ultra 5G Leica Quad Camera 16/512GB Ceramic Black',
      name_en: 'Xiaomi 15 Ultra 5G Leica Quad Camera 16/512GB Ceramic Black',
      name_ms: 'Xiaomi 15 Ultra 5G Kamera Leica 16/512GB Ceramic Black',
      name_zh: '小米 Xiaomi 15 Ultra 5G 徕卡四摄 16/512GB 陶瓷黑',
      category: 'electronics',
      brand: 'xiaomi',
      tier: 'flagship',
      isOfficial: true,
      price: 18499000,
      originalPrice: 19999000,
      rating: 4.9,
      sold: 980,
      shop: 'Xiaomi Official Store',
      marketplace: 'Tokopedia',
      image: 'assets/placeholder.svg',
      keywords: ['xiaomi', '15 ultra', 'leica', 'hp', 'smartphone', 'flagship', 'kamera'],
      reason_id: 'Juara fotografi mobile dengan quad-camera optik Leica 1-inci, sensor telefoto 200MP, dan performa Snapdragon 8 Elite ultra kencang.',
      reason_en: 'Mobile photography king featuring Leica 1-inch optics, 200MP telephoto sensor, and Snapdragon 8 Elite power.',
      reason_ms: 'Juara fotografi mudah alih dengan optik Leica 1-inci dan sensor telefoto 200MP berkuasa tinggi.',
      reason_zh: '顶级影像机皇，搭载徕卡一英寸大底主摄、2亿像素潜望长焦与骁龙8 Elite巅峰性能。'
    },
    {
      id: 'ai-poco-f7-pro',
      name: 'Xiaomi Poco F7 Pro 5G Flagship Killer 12/512GB Snapdragon 8 Gen 3',
      name_en: 'Xiaomi Poco F7 Pro 5G Flagship Killer 12/512GB Snapdragon 8 Gen 3',
      name_ms: 'Xiaomi Poco F7 Pro 5G 12/512GB Snapdragon 8 Gen 3',
      name_zh: '小米 Poco F7 Pro 5G 旗舰性能 12/512GB',
      category: 'electronics',
      brand: 'xiaomi',
      tier: 'flagship',
      isOfficial: true,
      price: 7999000,
      originalPrice: 8499000,
      rating: 4.9,
      sold: 6300,
      shop: 'POCO Official Store ID',
      marketplace: 'Shopee',
      image: 'assets/placeholder.svg',
      keywords: ['poco', 'f7', 'f7 pro', 'xiaomi', 'poco f7 pro', 'hp', 'smartphone', 'flagship'],
      reason_id: 'Flagship killer paling bertenaga di bawah 8 juta dengan Snapdragon 8 Gen 3 dan layar 2K AMOLED 120Hz.',
      reason_en: 'Most powerful flagship killer under 8M with Snapdragon 8 Gen 3 and 2K AMOLED 120Hz display.',
      reason_ms: 'Flagship killer paling berkuasa bawah 8 juta dengan Snapdragon 8 Gen 3 dan skrin 2K AMOLED.',
      reason_zh: '800万内最强性能旗舰杀手，搭载骁龙8 Gen 3及2K 120Hz超清高刷屏。'
    },

    // --- SMARTPHONES: XIAOMI / POCO 8-11 JUTAAN (10 JUTA) ---
    {
      id: 'ai-mi14',
      name: 'Xiaomi 14 5G 12/256GB Leica Summilux Lens Snapdragon 8 Gen 3',
      name_en: 'Xiaomi 14 5G 12/256GB Leica Summilux Lens Snapdragon 8 Gen 3',
      name_ms: 'Xiaomi 14 5G 12/256GB Lensa Leica Summilux Snapdragon 8 Gen 3',
      name_zh: '小米 Xiaomi 14 5G 徕卡光学镜头 骁龙8 Gen 3 旗舰 12/256GB',
      category: 'electronics',
      brand: 'xiaomi',
      isOfficial: true,
      price: 10499000,
      originalPrice: 11999000,
      rating: 4.9,
      sold: 5300,
      shop: 'Xiaomi Official Store',
      marketplace: 'Shopee',
      image: 'assets/placeholder.svg',
      keywords: ['xiaomi', '14', 'xiaomi 14', '10 juta', '10 jutaan', 'leica', 'snapdragon', 'hp', 'smartphone', 'flagship'],
      reason_id: 'Flagship kompak terbaik di 10 jutaan dengan Snapdragon 8 Gen 3, optik Leica Summilux, dan bodi ergonomis nyaman digenggam.',
      reason_en: 'Best compact 10M flagship with Snapdragon 8 Gen 3, Leica Summilux lens, and ergonomic one-hand design.',
      reason_ms: 'Flagship kompak 10 jutaan terbaik dengan Snapdragon 8 Gen 3 dan lensa Leica Summilux.',
      reason_zh: '1000万档位最佳小屏旗舰，搭载骁龙8 Gen 3与徕卡Summilux大光圈镜头。'
    },
    {
      id: 'ai-mi-14t-pro',
      name: 'Xiaomi 14T Pro 5G 12/512GB Leica Summilux 144Hz Dimensity 9300+',
      name_en: 'Xiaomi 14T Pro 5G 12/512GB Leica Summilux 144Hz Dimensity 9300+',
      name_ms: 'Xiaomi 14T Pro 5G 12/512GB Optik Leica 144Hz Dimensity 9300+',
      name_zh: '小米 Xiaomi 14T Pro 5G 徕卡三摄 144Hz 天玑9300+ 12/512GB',
      category: 'electronics',
      brand: 'xiaomi',
      isOfficial: true,
      price: 8999000,
      originalPrice: 9999000,
      rating: 4.9,
      sold: 7200,
      shop: 'Xiaomi Official Store',
      marketplace: 'Tokopedia',
      image: 'assets/placeholder.svg',
      keywords: ['xiaomi', '14t pro', '8 juta', '9 juta', '10 juta', '10 jutaan', 'hp', 'smartphone', 'kamera'],
      reason_id: 'Performa super kencang Dimensity 9300+, layar 144Hz AI, pengisian super cepat 120W HyperCharge, dan kamera Leica pro.',
      reason_en: 'High-end Dimensity 9300+ performance, 144Hz AI display, 120W HyperCharge, and Leica optics.',
      reason_ms: 'Prestasi pantas Dimensity 9300+, skrin 144Hz, pengecasan pantas 120W dan optik Leica.',
      reason_zh: '天玑9300+旗舰芯结合144Hz高刷屏、120W秒充与专业徕卡影像。'
    },
    {
      id: 'ai-samsung-s24-fe',
      name: 'Samsung Galaxy S24 FE 5G 8/256GB Galaxy AI Awesome Mint',
      name_en: 'Samsung Galaxy S24 FE 5G 8/256GB Galaxy AI Awesome Mint',
      name_ms: 'Samsung Galaxy S24 FE 5G 8/256GB Galaxy AI Jaminan Rasmi',
      name_zh: '三星 Samsung Galaxy S24 FE 5G 8/256GB AI 旗舰手机',
      category: 'electronics',
      brand: 'samsung',
      isOfficial: true,
      price: 9499000,
      originalPrice: 10499000,
      rating: 4.9,
      sold: 6100,
      shop: 'Samsung Official Store',
      marketplace: 'Shopee',
      image: 'assets/placeholder.svg',
      keywords: ['samsung', 'galaxy', 's24 fe', '9 juta', '10 juta', '10 jutaan', 'hp', 'smartphone'],
      reason_id: 'Pilihan Samsung paling worth-it di 9-10 jutaan dengan fitur Galaxy AI lengkap, layar Dynamic AMOLED 2X 120Hz, dan update OS 7 tahun.',
      reason_en: 'Best value Samsung in the 9-10M range featuring full Galaxy AI suite, Dynamic AMOLED 2X, and 7-year OS updates.',
      reason_ms: 'Pilihan Samsung 9-10 jutaan paling berbaloi dengan Galaxy AI penuh dan sokongan kemas kini 7 tahun.',
      reason_zh: '900-1000万区间三星高性价比之选，具备完整Galaxy AI功能、动态AMOLED 2X屏及7年系统更新保证。'
    },

    // --- SMARTPHONES: XIAOMI / POCO 4-6 JUTAAN (5 JUTA) ---
    {
      id: 'ai-poco-f6',
      name: 'Xiaomi Poco F6 5G 12/512GB Snapdragon 8s Gen 3 Garansi Resmi',
      name_en: 'Xiaomi Poco F6 5G 12/512GB Snapdragon 8s Gen 3 Official',
      name_ms: 'Xiaomi Poco F6 5G 12/512GB Snapdragon 8s Gen 3 Jaminan Rasmi',
      name_zh: '小米 Poco F6 5G 骁龙 8s Gen 3 旗舰性能 12/512GB',
      category: 'electronics',
      brand: 'xiaomi',
      isOfficial: true,
      price: 5499000,
      originalPrice: 5999000,
      rating: 4.9,
      sold: 14500,
      shop: 'POCO Official Store ID',
      marketplace: 'Shopee',
      image: 'assets/placeholder.svg',
      keywords: ['xiaomi', 'poco', 'f6', '5 juta', '5 jutaan', 'gaming', 'snapdragon', 'hp', 'smartphone'],
      reason_id: 'Juara performa gaming 5 jutaan berkat Snapdragon 8s Gen 3, sistem pendingin LiquidCool 4.0, dan turbo charging 90W.',
      reason_en: 'Gaming performance champion in 5M tier featuring Snapdragon 8s Gen 3 and 90W turbo charge.',
      reason_ms: 'Juara prestasi gaming 5 jutaan dengan cip Snapdragon 8s Gen 3 dan pengecasan 90W.',
      reason_zh: '500万档位性能与游戏绝对王者，骁龙8s Gen 3次旗舰芯配合90W极速闪充。'
    },
    {
      id: 'ai-mi-14t',
      name: 'Xiaomi 14T 5G 12/256GB Leica Professional Optics 144Hz AMOLED',
      name_en: 'Xiaomi 14T 5G 12/256GB Leica Professional Optics 144Hz AMOLED',
      name_ms: 'Xiaomi 14T 5G 12/256GB Optik Leica 144Hz AMOLED',
      name_zh: '小米 Xiaomi 14T 5G 徕卡光学镜头 144Hz 高刷屏 12/256GB',
      category: 'electronics',
      brand: 'xiaomi',
      isOfficial: true,
      price: 6499000,
      originalPrice: 6999000,
      rating: 4.9,
      sold: 8700,
      shop: 'Xiaomi Official Store',
      marketplace: 'Tokopedia',
      image: 'assets/placeholder.svg',
      keywords: ['xiaomi', '14t', 'leica', '5 juta', '6 juta', '5 jutaan', 'hp', 'smartphone', 'kamera'],
      reason_id: 'Smartphone kamera terbaik di 5-6 jutaan dengan racikan lensa Leica Summilux, sensor Sony IMX906, dan layar 144Hz CrystalRes.',
      reason_en: 'Best camera phone in 5-6M range featuring Leica Summilux lenses, Sony IMX906 sensor, and 144Hz CrystalRes display.',
      reason_ms: 'Telefon kamera terbaik julat 5-6 jutaan dengan optik Leica Summilux dan skrin 144Hz.',
      reason_zh: '500-600万价位拍照最佳机型，配备徕卡Summilux镜头、索尼大底传感器与144Hz超清屏。'
    },
    {
      id: 'ai-poco-x6-pro',
      name: 'Xiaomi Poco X6 Pro 5G 12/512GB Dimensity 8300-Ultra Flow AMOLED',
      name_en: 'Xiaomi Poco X6 Pro 5G 12/512GB Dimensity 8300-Ultra Flow AMOLED',
      name_ms: 'Xiaomi Poco X6 Pro 5G 12/512GB Dimensity 8300-Ultra AMOLED',
      name_zh: '小米 Poco X6 Pro 5G 天玑8300-Ultra 12/512GB 高性能手机',
      category: 'electronics',
      brand: 'xiaomi',
      isOfficial: true,
      price: 4699000,
      originalPrice: 4999000,
      rating: 4.9,
      sold: 21300,
      shop: 'POCO Official Store ID',
      marketplace: 'Shopee',
      image: 'assets/placeholder.svg',
      keywords: ['xiaomi', 'poco', 'x6 pro', '4 juta', '5 juta', '5 jutaan', 'hp', 'smartphone'],
      reason_id: 'Performa skor Antutu tembus 1.4 juta di harga 4 jutaan dengan Dimensity 8300-Ultra dan memori 512GB UFS 4.0.',
      reason_en: '1.4M+ Antutu benchmark power at 4M price tier with Dimensity 8300-Ultra and 512GB UFS 4.0 storage.',
      reason_ms: 'Prestasi Antutu 1.4 juta pada harga 4 jutaan dengan Dimensity 8300-Ultra dan storan 512GB.',
      reason_zh: '400万预算跑分超140万的性价比神机，天玑8300-Ultra配合512GB超大存储。'
    },
    {
      id: 'ai-redmi-note13-proplus',
      name: 'Xiaomi Redmi Note 13 Pro+ 5G 12/512GB 200MP OIS Curved AMOLED IP68',
      name_en: 'Xiaomi Redmi Note 13 Pro+ 5G 12/512GB 200MP OIS Curved AMOLED',
      name_ms: 'Xiaomi Redmi Note 13 Pro+ 5G 12/512GB 200MP Skrin Melengkung',
      name_zh: '小米 Redmi Note 13 Pro+ 5G 2亿像素 潜望长焦 曲面屏 12/512GB',
      category: 'electronics',
      brand: 'xiaomi',
      isOfficial: true,
      price: 5799000,
      originalPrice: 5999000,
      rating: 4.9,
      sold: 16800,
      shop: 'Xiaomi Official Store',
      marketplace: 'Shopee',
      image: 'assets/placeholder.svg',
      keywords: ['xiaomi', 'redmi', 'note 13 pro+', '5 juta', '5 jutaan', 'kamera', 'hp', 'smartphone'],
      reason_id: 'Desain layar lengkung premium, kamera 200MP OIS jernih, sertifikasi tahan air IP68, dan 120W HyperCharge.',
      reason_en: 'Premium curved screen design, 200MP OIS camera, IP68 water resistance, and 120W HyperCharge.',
      reason_ms: 'Skrin melengkung premium, kamera 200MP OIS, kalis air IP68 dan pengecasan 120W.',
      reason_zh: '高端双曲面屏设计，2亿像素OIS高清防抖，IP68防尘防水及120W超级秒充。'
    },

    // --- SMARTPHONES: SAMSUNG 4-6 JUTAAN ---
    {
      id: 'ai-samsung-a55',
      name: 'Samsung Galaxy A55 5G 8/256GB Awesome Navy Super AMOLED 120Hz',
      name_en: 'Samsung Galaxy A55 5G 8/256GB Awesome Navy 120Hz AMOLED',
      name_ms: 'Samsung Galaxy A55 5G 8/256GB Super AMOLED 120Hz Jaminan Rasmi',
      name_zh: '三星 Samsung Galaxy A55 5G 8/256GB 潮流高清三摄',
      category: 'electronics',
      brand: 'samsung',
      isOfficial: true,
      price: 5699000,
      originalPrice: 5999000,
      rating: 4.9,
      sold: 18200,
      shop: 'Samsung Official Store',
      marketplace: 'Shopee',
      image: 'assets/placeholder.svg',
      keywords: ['samsung', 'galaxy', 'a55', '5 juta', '5 jutaan', 'hp', 'smartphone'],
      reason_id: 'Juara build quality bodi metal & kaca dengan ketahanan air IP67, layar Super AMOLED 120Hz super cerah, dan keamanan Knox Vault.',
      reason_en: 'Top build quality with metal/glass body, IP67 water resistance, vibrant 120Hz Super AMOLED, and Knox Vault security.',
      reason_ms: 'Binaan logam dan kaca premium, kalis air IP67, skrin Super AMOLED 120Hz cerah dan keselamatan Knox Vault.',
      reason_zh: '金属中框配双面玻璃旗舰质感，IP67防尘防水，120Hz高亮Super AMOLED屏及4年系统大版本升级。'
    },
    {
      id: 'ai-samsung-a35',
      name: 'Samsung Galaxy A35 5G 8/256GB Awesome Lilac Nightography OIS',
      name_en: 'Samsung Galaxy A35 5G 8/256GB Awesome Lilac Nightography OIS',
      name_ms: 'Samsung Galaxy A35 5G 8/256GB Nightography OIS',
      name_zh: '三星 Samsung Galaxy A35 5G 8/256GB 幻彩防抖手机',
      category: 'electronics',
      brand: 'samsung',
      isOfficial: true,
      price: 4699000,
      originalPrice: 4999000,
      rating: 4.8,
      sold: 9400,
      shop: 'Samsung Official Store',
      marketplace: 'Tokopedia',
      image: 'assets/placeholder.svg',
      keywords: ['samsung', 'galaxy', 'a35', '4 juta', '5 juta', '5 jutaan', 'hp', 'smartphone'],
      reason_id: 'Pilihan seimbang harga 4 jutaan dengan kamera 50MP OIS Nightography, layar Super AMOLED 120Hz, dan speaker stereo jernih.',
      reason_en: 'Well-balanced 4M phone with 50MP OIS Nightography camera, 120Hz Super AMOLED, and stereo speakers.',
      reason_ms: 'Pilihan seimbang 4 jutaan dengan kamera 50MP OIS dan skrin Super AMOLED 120Hz.',
      reason_zh: '400万价位均衡稳妥之选，5000万像素OIS夜景防抖与120Hz三星原厂高刷屏。'
    },

    // --- SMARTPHONES: BUDGET 2-3 JUTAAN ---
    {
      id: 'ai-samsung-a15',
      name: 'Samsung Galaxy A15 5G 8/256GB Super AMOLED 90Hz 5000mAh',
      name_en: 'Samsung Galaxy A15 5G 8/256GB Super AMOLED 90Hz 5000mAh',
      name_ms: 'Samsung Galaxy A15 5G 8/256GB Super AMOLED 90Hz',
      name_zh: '三星 Samsung Galaxy A15 5G 8/256GB 超清大屏长续航',
      category: 'electronics',
      brand: 'samsung',
      isOfficial: true,
      price: 2999000,
      originalPrice: 3299000,
      rating: 4.8,
      sold: 23100,
      shop: 'Samsung Official Store',
      marketplace: 'Tokopedia',
      image: 'assets/placeholder.svg',
      keywords: ['samsung', 'a15', '2 juta', '3 juta', '2 jutaan', '3 jutaan', 'hp', 'smartphone'],
      reason_id: 'Layar Super AMOLED 90Hz termurah dari Samsung dengan baterai 5000mAh awet dan jaminan update 4 tahun.',
      reason_en: 'Most affordable Super AMOLED 90Hz phone from Samsung with durable 5000mAh battery.',
      reason_ms: 'Telefon Super AMOLED 90Hz Samsung paling mampu milik dengan bateri 5000mAh.',
      reason_zh: '三星最具性价比的Super AMOLED 90Hz屏幕手机，5000mAh大电池持久续航。'
    },
    {
      id: 'ai-redmi-note13-4g',
      name: 'Xiaomi Redmi Note 13 8/256GB 108MP Triple Camera AMOLED 120Hz',
      name_en: 'Xiaomi Redmi Note 13 8/256GB 108MP Triple Camera AMOLED 120Hz',
      name_ms: 'Xiaomi Redmi Note 13 8/256GB 108MP Tiga Kamera AMOLED',
      name_zh: '小米 Redmi Note 13 8/256GB 1亿像素 120Hz 高清护眼屏',
      category: 'electronics',
      brand: 'xiaomi',
      isOfficial: true,
      price: 2399000,
      originalPrice: 2599000,
      rating: 4.9,
      sold: 34000,
      shop: 'Xiaomi Official Store',
      marketplace: 'Shopee',
      image: 'assets/placeholder.svg',
      keywords: ['xiaomi', 'redmi', 'note 13', '2 juta', '2 jutaan', 'hp', 'smartphone'],
      reason_id: 'Pilihan terbaik di 2 jutaan dengan kamera 108MP, layar AMOLED 120Hz bezel ultra tipis, dan memori lega 256GB.',
      reason_en: 'Best value under 2.5M with 108MP camera, 120Hz AMOLED slim bezels, and 256GB storage.',
      reason_ms: 'Pilihan terbaik 2 jutaan dengan kamera 108MP dan skrin AMOLED 120Hz bingkai nipis.',
      reason_zh: '200万档位高配千元机，1亿像素超清主摄、超窄边框120Hz AMOLED屏与256G大存储。'
    },

    // --- SMARTPHONES: IPHONE MID TIER (8 - 14 JUTA) ---
    {
      id: 'ai-ip14',
      name: 'Apple iPhone 14 128GB Midnight Garansi Resmi iBox Indonesia',
      name_en: 'Apple iPhone 14 128GB Midnight Official iBox Indonesia',
      name_ms: 'Apple iPhone 14 128GB Midnight Jaminan Rasmi Apple',
      name_zh: '苹果 Apple iPhone 14 128GB 午夜色 国行正品全国联保',
      category: 'electronics',
      brand: 'apple',
      isOfficial: true,
      price: 11499000,
      originalPrice: 12499000,
      rating: 4.9,
      sold: 15400,
      shop: 'iBox Official Shop',
      marketplace: 'Shopee',
      image: 'assets/placeholder.svg',
      keywords: ['iphone', 'apple', 'iphone 14', '10 juta', '11 juta', '10 jutaan', 'hp', 'smartphone'],
      reason_id: 'Pilihan iPhone resmi iBox paling stabil di 11 jutaan dengan kamera Photonic Engine dan daya tahan baterai seharian.',
      reason_en: 'Most reliable official iBox iPhone around 11M with Photonic Engine camera and all-day battery.',
      reason_ms: 'iPhone rasmi iBox paling stabil sekitar 11 jutaan dengan kamera Photonic Engine.',
      reason_zh: '1100万价位官方正品iBox热销机型，光像引擎双摄与全天候持久电池。'
    },
    {
      id: 'ai-ip13',
      name: 'Apple iPhone 13 128GB Starlight Garansi Resmi iBox Indonesia',
      name_en: 'Apple iPhone 13 128GB Starlight Official iBox Indonesia',
      name_ms: 'Apple iPhone 13 128GB Starlight Jaminan Rasmi Apple',
      name_zh: '苹果 Apple iPhone 13 128GB 星光色 官方正品',
      category: 'electronics',
      brand: 'apple',
      isOfficial: true,
      price: 9499000,
      originalPrice: 10299000,
      rating: 4.9,
      sold: 42000,
      shop: 'iBox Official Shop',
      marketplace: 'Tokopedia',
      image: 'assets/placeholder.svg',
      keywords: ['iphone', 'apple', 'iphone 13', '9 juta', '10 juta', '9 jutaan', 'hp', 'smartphone'],
      reason_id: 'Best seller iPhone di bawah 10 juta dengan chip A15 Bionic bertenaga dan dukungan update iOS jangka panjang.',
      reason_en: 'Best-selling iPhone under 10M with powerful A15 Bionic chip and long-term iOS updates.',
      reason_ms: 'iPhone terlaris bawah 10 juta dengan cip A15 Bionic dan sokongan iOS jangka panjang.',
      reason_zh: '1000万以内最受欢迎苹果手机，A15仿生芯片强劲流畅，长期iOS更新支持。'
    },

    // --- HEALTH, PHARMACY & COUGH MEDICINES ---
    {
      id: 'ai-obh-combi',
      name: 'OBH Combi Batuk Berdahak Menthol Sirup 100ml Original',
      name_en: 'OBH Combi Expectorant Cough Syrup Menthol 100ml',
      name_ms: 'OBH Combi Sirap Batuk Berkahak Menthol 100ml',
      name_zh: 'OBH Combi 止咳化痰薄荷糖浆 100ml 清凉润喉',
      category: 'health',
      brand: 'obh',
      isOfficial: true,
      price: 21500,
      originalPrice: 24000,
      rating: 4.9,
      sold: 38200,
      shop: 'Apotek K-24 Official',
      marketplace: 'Shopee',
      image: 'assets/placeholder.svg',
      keywords: ['obat', 'batuk', 'obat batuk', 'berdahak', 'flu', 'obh', 'combi', 'sirup', 'apotek', 'kesehatan'],
      reason_id: 'Formula ekspektoran Succus Liquiritiae + Menthol hangat, efektif mencairkan dahak kental dan melegakan tenggorokan.',
      reason_en: 'Expectorant formula with Succus Liquiritiae & warm menthol to liquefy stubborn phlegm and soothe airways.',
      reason_ms: 'Formula ekspektoran Succus Liquiritiae dan menthol hangat untuk mencairkan kahak pekat.',
      reason_zh: '经典草本甘草浸膏配合清凉薄荷，强效稀释浓痰并舒缓咽喉肿痛，官方正品药房直供。'
    },
    {
      id: 'ai-siladex-mucolytic',
      name: 'Siladex Mucolytic & Expectorant Obat Batuk Berdahak Sirup 100ml Bebas Gula',
      name_en: 'Siladex Mucolytic & Expectorant Cough Syrup Sugar Free 100ml',
      name_ms: 'Siladex Sirap Batuk Berkahak Tanpa Gula 100ml',
      name_zh: 'Siladex 无糖化痰祛痰止咳糖浆 100ml 舒缓喉咙',
      category: 'health',
      brand: 'siladex',
      isOfficial: true,
      price: 18900,
      originalPrice: 21000,
      rating: 4.8,
      sold: 29400,
      shop: 'Century Healthcare Official',
      marketplace: 'Tokopedia',
      image: 'assets/placeholder.svg',
      keywords: ['obat', 'batuk', 'obat batuk', 'berdahak', 'siladex', 'sirup', 'bebas gula', 'kesehatan'],
      reason_id: 'Kombinasi Bromhexine & Guaifenesin 100% bebas gula & tanpa alkohol, aman untuk diabetes dan tidak menyebabkan kantuk.',
      reason_en: 'Bromhexine & Guaifenesin sugar-free and alcohol-free formula, non-drowsy and diabetic-safe.',
      reason_ms: 'Bromhexine & Guaifenesin tanpa gula dan tanpa alkohol, tidak mengantuk dan selamat untuk pesakit diabetes.',
      reason_zh: '双重化痰成分无糖无酒精配方，清爽不嗜睡，糖尿病患者亦可安心服用。'
    },
    {
      id: 'ai-bisolvon-extra',
      name: 'Bisolvon Extra Sirup Obat Batuk Berdahak Bromhexine Guaifenesin 60ml',
      name_en: 'Bisolvon Extra Mucolytic Expectorant Cough Syrup 60ml',
      name_ms: 'Bisolvon Extra Sirap Batuk Berkahak 60ml',
      name_zh: 'Bisolvon Extra 强效双重化痰止咳水 60ml',
      category: 'health',
      brand: 'bisolvon',
      isOfficial: true,
      price: 54000,
      originalPrice: 59000,
      rating: 4.9,
      sold: 19800,
      shop: 'Apotek Roxy Official',
      marketplace: 'Shopee',
      image: 'assets/placeholder.svg',
      keywords: ['obat', 'batuk', 'obat batuk', 'berdahak', 'bisolvon', 'sirup', 'kesehatan'],
      reason_id: 'Formula mukolitik ganda berlisensi resmi yang bekerja aktif mengencerkan lendir dan memudahkan pengeluaran dahak.',
      reason_en: 'Dual mucolytic formula clinically proven to thin heavy mucus and clear respiratory passages quickly.',
      reason_ms: 'Formula mukolitik berganda yang melarutkan lendir saluran pernafasan dengan pantas.',
      reason_zh: '官方认证双效化痰止咳剂，能快速分解呼吸道浓痰，畅通气管。'
    },
    {
      id: 'ai-komix-herbal',
      name: 'Komix Herbal Jeruk Nipis Obat Batuk Herbal Box 4 Tube x 15ml',
      name_en: 'Komix Herbal Lime Natural Cough Relief 4 Tubes x 15ml',
      name_ms: 'Komix Herbal Limau Nipis Ubat Batuk Semulajadi 4 Tube',
      name_zh: 'Komix 草本青柠天然止咳口服液 4支便携装',
      category: 'health',
      brand: 'komix',
      isOfficial: true,
      price: 12500,
      originalPrice: 15000,
      rating: 4.8,
      sold: 45000,
      shop: 'Apotek Guardian Official',
      marketplace: 'Shopee',
      image: 'assets/placeholder.svg',
      keywords: ['obat', 'batuk', 'obat batuk', 'komix', 'herbal', 'jeruk nipis', 'kesehatan'],
      reason_id: 'Kandungan alami daun lagundi & jahe merah dalam kemasan tube praktis langsung minum saat bepergian.',
      reason_en: 'Natural Lagundi leaf & red ginger extract in convenient on-the-go single-serve tubes.',
      reason_ms: 'Ekstrak daun lagundi dan halia merah dalam tiub mudah alih yang praktikal.',
      reason_zh: '黄荆叶与红姜天然草本提取，独立便携支装，出门随身携带即开即饮。'
    },
    {
      id: 'ai-panadol-extra',
      name: 'Panadol Extra Paracetamol Obat Sakit Kepala & Demam 10 Kaplet',
      name_en: 'Panadol Extra Paracetamol Pain & Headache Relief 10 Caplets',
      name_ms: 'Panadol Extra Paracetamol Ubat Sakit Kepala & Demam 10 Kaplet',
      name_zh: '必理痛 Panadol Extra 快速止痛退烧红片 10粒装',
      category: 'health',
      brand: 'panadol',
      isOfficial: true,
      price: 15000,
      originalPrice: 17500,
      rating: 4.9,
      sold: 62000,
      shop: 'Apotek K-24 Official',
      marketplace: 'Tokopedia',
      image: 'assets/placeholder.svg',
      keywords: ['panadol', 'obat', 'sakit kepala', 'demam', 'pusing', 'paracetamol', 'kesehatan'],
      reason_id: 'Kombinasi Paracetamol + Kafein cepat diserap untuk meredakan sakit kepala membandel dan demam tanpa mengiritasi lambung.',
      reason_en: 'Fast-acting Paracetamol + Caffeine to relieve stubborn headaches and fever quickly.',
      reason_ms: 'Kombinasi Paracetamol dan Kafein bertindak pantas melegakan sakit kepala dan demam.',
      reason_zh: '对乙酰氨基酚加咖啡因速效止痛配方，快速缓解顽固偏头痛及发烧，温和不伤胃。'
    },
    {
      id: 'ai-tolak-angin',
      name: 'Tolak Angin Cair Herbal Masuk Angin & Daya Tahan Tubuh Box 12 Sachet Sido Muncul',
      name_en: 'Tolak Angin Herbal Liquid Immune Support Box 12 Sachets',
      name_ms: 'Tolak Angin Cecair Herba Masuk Angin Kotak 12 Pek',
      name_zh: '印尼国宝级草本 Tolak Angin 驱风防感冒口服液 12支礼盒装',
      category: 'health',
      brand: 'tolakangin',
      isOfficial: true,
      price: 42000,
      originalPrice: 46000,
      rating: 5.0,
      sold: 88000,
      shop: 'Sido Muncul Official Store',
      marketplace: 'Shopee',
      image: 'assets/placeholder.svg',
      keywords: ['tolak angin', 'masuk angin', 'herbal', 'kesehatan', 'flu', 'daya tahan'],
      reason_id: 'Obat herbal berstandar OHT dengan ekstrak adas, kayu ules, cengkeh & madu terbukti klinis meningkatkan sel T kekebalan tubuh.',
      reason_en: 'Standardized herbal remedy clinically proven to boost immune T-cells and relieve body chills/fatigue.',
      reason_ms: 'Ubat herba berstandard terbukti klinikal meningkatkan imuniti dan melegakan ketidakselesaan badan.',
      reason_zh: '印尼官方认证标准草本药品，含茴香、丁香及纯蜂蜜，临床证实有效增强T细胞免疫力。'
    },
    {
      id: 'ai-enervon-c',
      name: 'Enervon-C Multivitamin Daya Tahan Tubuh Botol 30 Tablet',
      name_en: 'Enervon-C Multivitamin & Mineral Daily Immune Support 30 Tablets',
      name_ms: 'Enervon-C Multivitamin Kesihatan Imuniti 30 Tablet',
      name_zh: 'Enervon-C 复合维生素C及锌片 增强免疫力 30片瓶装',
      category: 'health',
      brand: 'enervonc',
      isOfficial: true,
      price: 45000,
      originalPrice: 50000,
      rating: 4.9,
      sold: 31000,
      shop: 'Darya-Varia Official Store',
      marketplace: 'Shopee',
      image: 'assets/placeholder.svg',
      keywords: ['vitamin', 'enervon', 'enervon-c', 'daya tahan', 'suplemen', 'kesehatan'],
      reason_id: 'Kombinasi Vitamin C 500mg dan Vitamin B Kompleks dosis pas untuk menjaga stamina dan memulihkan tubuh lelah.',
      reason_en: 'High-potency 500mg Vitamin C + B-Complex to maintain all-day energy and speed up recovery.',
      reason_ms: 'Vitamin C 500mg dan Vitamin B Kompleks untuk mengekalkan tenaga dan kecergasan harian.',
      reason_zh: '500mg高含量维生素C与复合维生素B精准配比，强效抗疲劳、增强日常抗病能力。'
    },

    // --- LAPTOPS ---
    {
      id: 'ai-asus-vivobook14',
      name: 'ASUS Vivobook 14 A1404 Intel Core i5-1335U 16GB SSD 512GB FHD IPS',
      name_en: 'ASUS Vivobook 14 A1404 Intel Core i5-1335U 16GB SSD 512GB FHD IPS',
      name_ms: 'ASUS Vivobook 14 Intel Core i5-1335U 16GB 512GB SSD FHD IPS',
      name_zh: '华硕 ASUS Vivobook 14 英特尔酷睿 i5 16G 512G 轻薄笔记本',
      category: 'electronics',
      brand: 'asus',
      isOfficial: true,
      price: 8499000,
      originalPrice: 9199000,
      rating: 4.9,
      sold: 4200,
      shop: 'ASUS Official Store',
      marketplace: 'Shopee',
      image: 'assets/placeholder.svg',
      keywords: ['asus', 'vivobook', 'laptop', 'core i5', 'kuliah', 'kerja', '8 juta'],
      reason_id: 'Laptop kerja & kuliah kencang dengan Intel Core i5 generasi 13, RAM 16GB dual channel, dan layar FHD IPS anti-glare.',
      reason_en: 'High-speed work & study laptop with 13th Gen Core i5, 16GB RAM, and anti-glare FHD IPS screen.',
      reason_ms: 'Komputer riba kerja & belajar dengan Intel Core i5 Gen-13, RAM 16GB dan skrin FHD IPS.',
      reason_zh: '办公学习全能轻薄本，13代酷睿i5处理器搭配16G双通道内存与FHD防眩光IPS护眼屏。'
    },
    {
      id: 'ai-macbook-air-m2',
      name: 'Apple MacBook Air 13 Inch M2 Chip 8GB 256GB SSD Space Gray',
      name_en: 'Apple MacBook Air 13 Inch M2 Chip 8GB 256GB SSD Space Gray',
      name_ms: 'Apple MacBook Air 13 Inci Cip M2 8GB 256GB SSD Space Gray',
      name_zh: '苹果 Apple MacBook Air 13 英寸 M2 芯片 8G 256G 深空灰',
      category: 'electronics',
      brand: 'apple',
      isOfficial: true,
      price: 13999000,
      originalPrice: 15499000,
      rating: 5.0,
      sold: 6800,
      shop: 'iBox Official Shop',
      marketplace: 'Tokopedia',
      image: 'assets/placeholder.svg',
      keywords: ['macbook', 'apple', 'm2', 'laptop', 'macbook air', '13 juta', '14 juta'],
      reason_id: 'Baterai tahan hingga 18 jam, bodi aluminium ultra tipis tanpa kipas (hening), dan layar Liquid Retina tajam.',
      reason_en: 'Up to 18 hours battery life, ultra-thin fanless design, and brilliant Liquid Retina display.',
      reason_ms: 'Bateri tahan sehingga 18 jam, rekaan aluminium nipis senyap dan paparan Liquid Retina.',
      reason_zh: '长达18小时惊人续航，全铝极简无风扇静音设计，绚丽Liquid视网膜显示屏。'
    },
    {
      id: 'ai-lenovo-ideapad',
      name: 'Lenovo IdeaPad Slim 3 14 Core i5-12450H 16GB SSD 512GB FHD',
      name_en: 'Lenovo IdeaPad Slim 3 14 Core i5-12450H 16GB SSD 512GB FHD',
      name_ms: 'Lenovo IdeaPad Slim 3 14 Core i5 16GB 512GB SSD FHD',
      name_zh: '联想 Lenovo 联想小新 IdeaPad Slim 3 酷睿 i5 16G 512G',
      category: 'electronics',
      brand: 'lenovo',
      isOfficial: true,
      price: 7799000,
      originalPrice: 8399000,
      rating: 4.8,
      sold: 5100,
      shop: 'Lenovo Official Store',
      marketplace: 'Tokopedia',
      image: 'assets/placeholder.svg',
      keywords: ['lenovo', 'ideapad', 'laptop', 'core i5', '7 juta', '8 juta'],
      reason_id: 'Prosesor kencang seri H (Core i5-12450H), RAM 16GB, dan durabilitas standar militer MIL-STD-810H di harga 7 jutaan.',
      reason_en: 'High-performance H-series Core i5-12450H CPU, 16GB RAM, and MIL-STD-810H military durability.',
      reason_ms: 'Pemproses berprestasi tinggi siri H, RAM 16GB dan ketahanan standard ketenteraan MIL-STD-810H.',
      reason_zh: '700万档位搭载标压H系列酷睿i5-12450H强芯，通过MIL-STD-810H军规级坚固认证。'
    },

    // --- RUNNING SHOES ---
    {
      id: 'ai-nike-pegasus',
      name: 'Nike Air Zoom Pegasus 40 Road Running Shoes Black White Original',
      name_en: 'Nike Air Zoom Pegasus 40 Road Running Shoes Black White Original',
      name_ms: 'Nike Air Zoom Pegasus 40 Kasut Lari Jalanan Black White',
      name_zh: '耐克 Nike Air Zoom Pegasus 40 飞马40专业缓震跑鞋 黑白',
      category: 'footwear',
      brand: 'nike',
      isOfficial: true,
      price: 1649000,
      originalPrice: 1899000,
      rating: 4.9,
      sold: 8400,
      shop: 'Nike Official Store ID',
      marketplace: 'Shopee',
      image: 'assets/placeholder.svg',
      keywords: ['nike', 'pegasus', 'sepatu', 'running', 'sepatu lari', 'sneakers'],
      reason_id: 'Kombinasi bantalan foam React ganda & unit Zoom Air di tumit dan depan kaki untuk kenyamanan lari harian dan maraton.',
      reason_en: 'Dual React foam and dual Zoom Air units for balanced responsiveness and long-distance durability.',
      reason_ms: 'Kusyen buih React berganda dan unit Zoom Air untuk keselesaan larian harian dan maraton.',
      reason_zh: 'React泡绵结合前后掌双Zoom Air气垫，缓震回弹性能卓越，经典日常慢跑与马拉松必选。'
    },
    {
      id: 'ai-adidas-duramo',
      name: 'Adidas Duramo Speed Running Shoes Cloud White Core Black Unisex',
      name_en: 'Adidas Duramo Speed Running Shoes Cloud White Core Black Unisex',
      name_ms: 'Adidas Duramo Speed Kasut Lari Cloud White Core Black',
      name_zh: '阿迪达斯 Adidas Duramo Speed 极速轻量透气跑鞋',
      category: 'footwear',
      brand: 'adidas',
      isOfficial: true,
      price: 899000,
      originalPrice: 1100000,
      rating: 4.8,
      sold: 12100,
      shop: 'Adidas Indonesia Official',
      marketplace: 'Tokopedia',
      image: 'assets/placeholder.svg',
      keywords: ['adidas', 'duramo', 'sepatu', 'running', 'sepatu lari', 'under 1 juta', 'dibawah 1 juta'],
      reason_id: 'Sepatu lari ringan dengan midsole Lightmotion empuk di bawah 1 juta, cocok untuk pemula dan gym.',
      reason_en: 'Lightweight Lightmotion midsole running shoe under 1M, perfect for daily fitness and jogging.',
      reason_ms: 'Kasut lari ringan dengan tapak tengah Lightmotion bawah 1 juta, sesuai untuk pemula dan gim.',
      reason_zh: '100万以内超高性价比，Lightmotion轻量缓震中底，初跑者与健身训练极佳之选。'
    },
    {
      id: 'ai-ortus-hyperdrive',
      name: 'Ortuseight Hyperdrive 2.0 Carbon Plate Running Shoes Neon Mint',
      name_en: 'Ortuseight Hyperdrive 2.0 Carbon Plate Running Shoes Neon Mint',
      name_ms: 'Ortuseight Hyperdrive 2.0 Kasut Lari Plat Karbon',
      name_zh: 'Ortuseight Hyperdrive 2.0 碳板竞速专业马拉松跑鞋',
      category: 'footwear',
      brand: 'ortuseight',
      isOfficial: true,
      price: 699000,
      originalPrice: 799000,
      rating: 4.9,
      sold: 9800,
      shop: 'Ortuseight Official Store',
      marketplace: 'Shopee',
      image: 'assets/placeholder.svg',
      keywords: ['ortuseight', 'ortus', 'hyperdrive', 'sepatu', 'running', 'sepatu lari', 'marathon', 'murah'],
      reason_id: 'Sepatu lari pelat karbon (carbon plate) paling terjangkau dengan bantalan Cumulus Foam untuk pace lari kencang.',
      reason_en: 'Most affordable carbon-plated racer with Cumulus Foam for fast-paced tempo and race days.',
      reason_ms: 'Kasut lari plat karbon paling mampu milik dengan kusyen Cumulus Foam untuk kelajuan tinggi.',
      reason_zh: '最具性价比的碳板竞速跑鞋，搭载Cumulus高回弹泡绵，专为提速破速而生。'
    }
  ];

  const aiConversationSession = {
    category: null,
    isPhone: false,
    isShoe: false,
    isLaptop: false,
    isHealth: false,
    isSnack: false,
    isWatch: false,
    brand: null,
    minBudget: 0,
    maxBudget: Infinity,
    budgetLabel: ''
  };

  // Restore session state (must be after aiConversationSession is declared)
  try {
    const savedSession = localStorage.getItem(AI_SESSION_KEY);
    if (savedSession) {
      const sess = JSON.parse(savedSession);
      Object.assign(aiConversationSession, sess);
      if (aiConversationSession.maxBudget === null) aiConversationSession.maxBudget = Infinity;
    }
  } catch(e) {}

  const detectUserQueryLanguage = (userQuery, fallbackLang = 'id') => {
    const q = String(userQuery || '').trim();
    if (/[\u4e00-\u9fa5]/.test(q)) return 'zh';
    if (/\b(recommend|recommendation|recommendations|best|phone|smartphone|phones|shoes|shoe|running|cheap|budget|under|for|give me|what is|which|medicine|cough|vitamin|vitamins|laptop|laptops|headphone|headphones|watch|price|deal|deals|discount|good|specs|where to buy|how much|i need|i want|help)\b/i.test(q)) {
      return 'en';
    }
    if (/\b(cadangan|cadangkan|syorkan|syor|ubat|kasut|telefon|pintar|tengok|tolong|beli|harga|berapakah|bajet|nak|saya nak|kedai|terbaik)\b/i.test(q)) {
      return 'ms';
    }
    if (/\b(rekomendasi|rekomendasikan|hp|ponsel|sepatu|obat|batuk|berdahak|juta|jutaan|ribu|kalo|mau|maunya|dibawah|yang|buat|apa|dong|tolong|gimana|kenapa|pilihan|terbaik|beli|toko)\b/i.test(q)) {
      return 'id';
    }
    return fallbackLang || 'id';
  };

  // ─── DISEASE SYMPTOM & MEDICINE DATABASE ───
  const SYMPTOM_MEDICINE_DATABASE = {
    id: {
      demam: {
        symptoms: ['demam', 'panas', 'suhu tinggi', 'badan panas'],
        medicines: [
          { name: 'Paracetamol 500mg Tablet', keywords: ['paracetamol', 'parasetamol', 'tylenol'] },
          { name: 'Ibuprofen 400mg Tablet', keywords: ['ibuprofen', 'ibu'] },
          { name: 'Acetaminophen Sirup', keywords: ['acetaminophen'] }
        ],
        advice: '💊 Untuk demam, istirahat cukup, minum banyak air, dan gunakan obat penurun panas seperti paracetamol atau ibuprofen. Jika demam > 39°C atau berlangsung > 3 hari, segera ke dokter!'
      },
      batuk: {
        symptoms: ['batuk', 'batuk kering', 'batuk berdahak', 'batuk pilek'],
        medicines: [
          { name: 'Siladex Sirup Batuk 100ml', keywords: ['siladex', 'batuk berdahak'] },
          { name: 'Bisolvon Extra Sirup 60ml', keywords: ['bisolvon'] },
          { name: 'Komix Herbal Jeruk Nipis', keywords: ['komix'] }
        ],
        advice: '💊 Untuk batuk, cukupi asupan air hangat, istirahat, dan gunakan obat batuk sesuai jenis (kering vs berdahak). Jika batuk tidak hilang > 2 minggu, konsultasi ke dokter!'
      },
      pilek: {
        symptoms: ['pilek', 'hidung berair', 'hidung mampet', 'flu', 'selesma'],
        medicines: [
          { name: 'Decolgen Tablet Flu', keywords: ['decolgen'] },
          { name: 'Polyhistine DM Sirup', keywords: ['polyhistine', 'polyhistin'] },
          { name: 'Bodrex Extra Tablet', keywords: ['bodrex'] }
        ],
        advice: '💊 Untuk pilek/flu, istirahat cukup, minum vitamin C, gunakan obat pilek yang tepat. Hindari area ramai agar tidak menular. Jika disertai demam tinggi, segera ke dokter!'
      },
      sakit_kepala: {
        symptoms: ['sakit kepala', 'migrain', 'pusing', 'kepala berat', 'sakit kepala tegang'],
        medicines: [
          { name: 'Aspirin 500mg Tablet', keywords: ['aspirin'] },
          { name: 'Paracetamol 500mg Tablet', keywords: ['paracetamol'] },
          { name: 'Ibuprofen 400mg Tablet', keywords: ['ibuprofen'] }
        ],
        advice: '💊 Untuk sakit kepala, istirahatlah di tempat sejuk, minum banyak air, hindari stress. Gunakan analgesik ringan. Jika sakit kepala persisten, konsultasi ke dokter!'
      },
      sakit_perut: {
        symptoms: ['sakit perut', 'perut kembung', 'diare', 'sakit lambung', 'mual'],
        medicines: [
          { name: 'Mylanta Antasid Gel', keywords: ['mylanta'] },
          { name: 'Omeprazole Tablet', keywords: ['omeprazole'] },
          { name: 'Loperamide Tablet Diare', keywords: ['loperamide', 'diare'] }
        ],
        advice: '💊 Untuk sakit perut, hindari makanan berat/berlemak, minum air hangat, istirahat. Gunakan antasid untuk lambung. Jika diare persisten > 2 hari, segera konsultasi dokter!'
      },
      sariawan: {
        symptoms: ['sariawan', 'ulser mulut', 'luka di mulut', 'karang gigi'],
        medicines: [
          { name: 'Oramedic Gel Sariawan', keywords: ['oramedic', 'sariawan'] },
          { name: 'Klorheksidin Obat Kumur', keywords: ['klorheksidin'] },
          { name: 'Panthenol Spray Oral', keywords: ['panthenol'] }
        ],
        advice: '💊 Untuk sariawan, jaga kebersihan mulut, hindari makanan pedas/asam, gunakan obat sariawan. Jika tidak hilang > 1 minggu atau sangat sakit, konsultasi dokter!'
      },
      batuk_pilek: {
        symptoms: ['batuk pilek', 'flu biasa', 'batuk dan pilek', 'batuk flu'],
        medicines: [
          { name: 'Bodrex Extra Tablet Flu Lengkap', keywords: ['bodrex'] },
          { name: 'Paracetamol + Dekongestan', keywords: ['paracetamol'] },
          { name: 'Siladex Sirup Batuk', keywords: ['siladex'] }
        ],
        advice: '💊 Untuk batuk pilek, istirahat, minum air hangat, gunakan obat flu lengkap yang mengandung paracetamol + dekongestan. Hindari area ramai, jaga kebersihan tangan!'
      }
    },
    en: {
      fever: {
        symptoms: ['fever', 'high temperature', 'body hot', 'high temp'],
        medicines: [
          { name: 'Paracetamol 500mg Tablet', keywords: ['paracetamol', 'acetaminophen', 'tylenol'] },
          { name: 'Ibuprofen 400mg Tablet', keywords: ['ibuprofen', 'ibu'] },
          { name: 'Acetaminophen Syrup', keywords: ['acetaminophen'] }
        ],
        advice: '💊 For fever, rest well, drink plenty of water, use fever-reducing medicine like paracetamol or ibuprofen. If fever > 39°C or lasts > 3 days, see a doctor immediately!'
      },
      cough: {
        symptoms: ['cough', 'dry cough', 'cough with phlegm', 'coughing', 'cold cough'],
        medicines: [
          { name: 'Siladex Cough Syrup 100ml', keywords: ['siladex'] },
          { name: 'Bisolvon Extra Syrup 60ml', keywords: ['bisolvon'] },
          { name: 'Komix Herbal Cough Relief', keywords: ['komix'] }
        ],
        advice: '💊 For cough, drink warm water, rest, use appropriate cough medicine (dry vs wet). If cough persists > 2 weeks, consult a doctor!'
      },
      cold: {
        symptoms: ['cold', 'runny nose', 'nasal congestion', 'flu', 'stuffy nose'],
        medicines: [
          { name: 'Decolgen Cold Tablet', keywords: ['decolgen'] },
          { name: 'Polyhistine DM Syrup', keywords: ['polyhistine'] },
          { name: 'Bodrex Extra Tablet', keywords: ['bodrex'] }
        ],
        advice: '💊 For cold/flu, rest well, take vitamin C, use appropriate cold medicine. Avoid crowds to prevent spreading. If accompanied by high fever, see a doctor!'
      },
      headache: {
        symptoms: ['headache', 'migraine', 'dizzy', 'head pain', 'headaches'],
        medicines: [
          { name: 'Aspirin 500mg Tablet', keywords: ['aspirin'] },
          { name: 'Paracetamol 500mg Tablet', keywords: ['paracetamol'] },
          { name: 'Ibuprofen 400mg Tablet', keywords: ['ibuprofen'] }
        ],
        advice: '💊 For headache, rest in a cool place, drink plenty of water, avoid stress. Use mild pain reliever. If persistent headache, consult a doctor!'
      },
      stomachache: {
        symptoms: ['stomach ache', 'belly pain', 'abdominal pain', 'stomach cramps', 'indigestion'],
        medicines: [
          { name: 'Mylanta Antacid Gel', keywords: ['mylanta'] },
          { name: 'Omeprazole Tablet', keywords: ['omeprazole'] },
          { name: 'Loperamide Diarrhea Tablet', keywords: ['loperamide', 'diarrhea'] }
        ],
        advice: '💊 For stomach ache, avoid heavy/fatty food, drink warm water, rest. Use antacid for stomach. If diarrhea persists > 2 days, consult a doctor immediately!'
      }
    },
    ms: {
      demam: {
        symptoms: ['demam', 'panas', 'suhu tinggi', 'badan panas', 'sakit demam'],
        medicines: [
          { name: 'Paracetamol 500mg Tablet', keywords: ['paracetamol', 'parasetamol'] },
          { name: 'Ibuprofen 400mg Tablet', keywords: ['ibuprofen'] },
          { name: 'Acetaminophen Sirop', keywords: ['acetaminophen'] }
        ],
        advice: '💊 Untuk demam, berehat cukup, minum banyak air, gunakan ubat penurun panas seperti paracetamol. Jika demam > 39°C atau berlangsung > 3 hari, pergi ke doktor!'
      },
      batuk: {
        symptoms: ['batuk', 'batuk kering', 'batuk berkahak', 'batuk dan selesma'],
        medicines: [
          { name: 'Siladex Sirop Batuk 100ml', keywords: ['siladex'] },
          { name: 'Bisolvon Extra Sirop 60ml', keywords: ['bisolvon'] },
          { name: 'Komix Herbal Ubat Batuk', keywords: ['komix'] }
        ],
        advice: '💊 Untuk batuk, minum air hangat banyak-banyak, berehat, gunakan ubat batuk yang sesuai. Jika batuk tidak hilang > 2 minggu, jumpa doktor!'
      }
    },
    zh: {
      fever: {
        symptoms: ['发烧', '发热', '高烧', '温度高', '身体热', '生病', '发烧了'],
        medicines: [
          { name: '扑热息痛 500mg 片剂', keywords: ['扑热息痛', '退烧药'] },
          { name: '布洛芬 400mg 片剂', keywords: ['布洛芬', '消炎止痛'] },
          { name: '退烧糖浆', keywords: ['糖浆', '退烧'] }
        ],
        advice: '💊 发烧时要充分休息、多喝水、服用退烧药如扑热息痛或布洛芬。如果烧到39°C以上或烧了超过3天，需立即就医！'
      },
      cough: {
        symptoms: ['咳嗽', '干咳', '咳嗽有痰', '咳痰', '合并咳嗽', '一直咳嗽'],
        medicines: [
          { name: '西力达糖浆 100ml', keywords: ['西力达', '止咳糖浆'] },
          { name: '必可舒喷剂 60ml', keywords: ['必可舒', '化痰'] },
          { name: '康咪斯草本糖浆', keywords: ['康咪斯'] }
        ],
        advice: '💊 咳嗽时要喝温水、充分休息、用合适的止咳药（干咳或湿咳）。如咳嗽超2周不好转需就医！'
      }
    }
  };

  const detectSymptomAndRecommendMedicine = (userQuery, lang) => {
    const q = userQuery.toLowerCase().trim();
    const symptoms = SYMPTOM_MEDICINE_DATABASE[lang] || SYMPTOM_MEDICINE_DATABASE.id;
    
    for (const [symptomKey, symptomData] of Object.entries(symptoms)) {
      for (const symptom of symptomData.symptoms) {
        if (q.includes(symptom)) {
          return { symptomKey, ...symptomData };
        }
      }
    }
    return null;
  };

  const searchLocalAiProducts = (query, lang) => {
    const q = query.toLowerCase().trim();
    const qWords = q.split(/\s+/).filter(w => w.length > 2);
    if (qWords.length === 0) return [];

    // Detect brand, category, and budget from query
    const brandMap = {
      samsung: ['samsung', 'galaxy'], apple: ['apple', 'iphone', 'ipad'],
      xiaomi: ['xiaomi', 'redmi', 'poco', 'mi '], asus: ['asus', 'rog', 'zenfone'],
      huawei: ['huawei'], lenovo: ['lenovo'], sony: ['sony'], oppo: ['oppo'],
      vivo: ['vivo'], realme: ['realme'], nike: ['nike'], adidas: ['adidas'],
      newbalance: ['new balance', 'newbalance'], apple_watch: ['apple watch']
    };
    let detectedBrand = null;
    for (const [brand, tokens] of Object.entries(brandMap)) {
      if (tokens.some(t => q.includes(t))) { detectedBrand = brand; break; }
    }

    const catDetect = {
      phone: /hp|phone|smartphone|handphone|ponsel|android|iphone|samsung|galaxy|poco|xiaomi|redmi|oppo|vivo|realme|asus/i.test(q),
      laptop: /laptop|notebook|komputer|computer|macbook|thinkpad|chromebook/i.test(q),
      headphone: /headphone|earphone|headset|tws|airpods|speaker|audio/i.test(q),
      watch: /watch|smartwatch|jam tangan|fitness|band|wearable/i.test(q),
      shoe: /sepatu|shoes|sneaker|running|sandal|boots|footwear/i.test(q),
      health: /obat|vitamin|suplemen|kesehatan|health|medicine|sakit|batuk|flu|demam|probiotik/i.test(q),
      snack: /snack|makanan|food|cemilan|cokelat|wafer|biskuit|chocolate/i.test(q),
      beauty: /skincare|beauty|makeup|kosmetik|serum|cream|sunscreen|moisturizer|kecantikan/i.test(q),
      bag: /tas|bag|backpack|ransel|selempang/i.test(q),
      fashion: /baju|kaos|celana|jaket|hoodie|dress|fashion|pakaian/i.test(q)
    };
    const activeCats = Object.entries(catDetect).filter(([, v]) => v).map(([k]) => k);
    if (activeCats.length === 0 && !detectedBrand) {
      // Generic keyword search
      const scored = AI_PRODUCT_DATABASE.map(item => {
        const itemText = (item.name + ' ' + (item.keywords || []).join(' ')).toLowerCase();
        const score = qWords.filter(w => itemText.includes(w)).length;
        return { item, score };
      }).filter(x => x.score > 0).sort((a, b) => b.score - a.score);
      return scored.slice(0, 5).map(x => x.item);
    }

    let pool = AI_PRODUCT_DATABASE.filter(item => {
      if (detectedBrand && item.brand !== detectedBrand) return false;
      if (activeCats.length === 0) return true;
      const kw = (item.keywords || []).join(' ').toLowerCase();
      const nm = (item.name || '').toLowerCase();
      if (activeCats.includes('phone') && item.category === 'electronics' && !kw.includes('laptop')) return true;
      if (activeCats.includes('laptop') && (kw.includes('laptop') || nm.includes('laptop'))) return true;
      if (activeCats.includes('headphone') && /headphone|earphone|headset|tws|speaker/.test(nm + ' ' + kw)) return true;
      if (activeCats.includes('watch') && /watch|smartwatch|band|wearable/.test(nm + ' ' + kw)) return true;
      if (activeCats.includes('shoe') && (item.category === 'fashion' || item.category === 'footwear' || /sepatu|shoes|sneaker/.test(nm))) return true;
      if (activeCats.includes('health') && item.category === 'health') return true;
      if (activeCats.includes('snack') && item.category === 'food') return true;
      if (activeCats.includes('beauty') && item.category === 'beauty') return true;
      if (activeCats.includes('bag') && /tas|bag|backpack/.test(nm)) return true;
      if (activeCats.includes('fashion') && item.category === 'fashion') return true;
      return false;
    });

    // Sort by name relevance to query words
    pool.sort((a, b) => {
      const aText = (a.name + ' ' + (a.keywords || []).join(' ')).toLowerCase();
      const bText = (b.name + ' ' + (b.keywords || []).join(' ')).toLowerCase();
      const aScore = qWords.filter(w => aText.includes(w)).length;
      const bScore = qWords.filter(w => bText.includes(w)).length;
      return bScore - aScore;
    });

    return pool.slice(0, 5);
  };

  const generateAssistantResponse = async (userQuery, typingEl) => {
    const qLower = userQuery.toLowerCase().trim();
    const defaultSiteLang = getCurrentLang();
    const lang = detectUserQueryLanguage(userQuery, defaultSiteLang);
    const region = getCurrentRegion();
    const langData = i18nDictionary[lang] || i18nDictionary.id;

    if (isRestrictedProductQuery(userQuery)) {
      const restrictedText = lang === 'en'
        ? 'I cannot help find or recommend dangerous or illegal products.'
        : lang === 'ms'
          ? 'Saya tidak boleh membantu mencari atau mengesyorkan produk berbahaya atau menyalahi undang-undang.'
          : lang === 'zh'
            ? '我不能帮助寻找或推荐危险或非法商品。'
            : 'Saya tidak bisa membantu mencari atau merekomendasikan produk berbahaya atau ilegal.';
      return { text: restrictedText, products: [], searchQuery: '', responseLang: lang };
    }

    if (typingEl) {
      const step1Texts = {
        id: '🤖 Menganalisis kebutuhan & kriteria resmi produk...',
        en: '🤖 Analyzing official specs and recommendations...',
        ms: '🤖 Menganalisis spesifikasi & kriteria rasmi...',
        zh: '🤖 正在分析官方正品参数与推荐理由...'
      };
      updateTypingText(typingEl, step1Texts[lang] || step1Texts.id);
    }
    await new Promise(r => setTimeout(r, 650));

    if (/^(halo|hai|hi|hello|hey|pagi|siang|sore|malam|assalamu|permisi|test|tes|你好|早安|halo ai)/i.test(qLower)) {
      // ─── DYNAMIC GREETING BASED ON TIME & TRENDING ───────
      const now = new Date();
      const dayOfWeek = now.getDay();
      const hour = now.getHours();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      
      const categoryRotation = ['elektronik', 'sepatu lari', 'laptop', 'kesehatan', 'elektronik', 'sepatu lari', 'aksesoris'];
      const trendingCategory = categoryRotation[dayOfWeek];
      
      const greetingsByTime = {
        id: {
          morning: `🌅 Selamat pagi! Produk trending hari ini fokus pada <strong>${trendingCategory}</strong>. Mari cari barang impian Anda!`,
          afternoon: `☀️ Siang! Cek rekomendasi eksklusif hari ini dengan harga terbaru dari <strong>Official Store</strong> & dapatkan diskon spesial!`,
          evening: `🌙 Malam! Temukan produk pilihan trending di kategori <strong>${trendingCategory}</strong> dengan penawaran terbaik hari ini.`,
          weekend: `🎉 Weekend vibes! Promo spesial & bestseller minggu ini menanti Anda dengan berbagai keuntungan eksklusif!`
        },
        en: {
          morning: `🌅 Good morning! Today's trending products feature <strong>${trendingCategory}</strong>. Let's find your perfect pick!`,
          afternoon: `☀️ Good afternoon! Check exclusive recommendations with latest prices from <strong>Official Stores</strong> & enjoy special discounts!`,
          evening: `🌙 Good evening! Discover today's trending <strong>${trendingCategory}</strong> with the best deals available!`,
          weekend: `🎉 Weekend magic! Special promos & bestsellers of the week await with exclusive benefits!`
        },
        ms: {
          morning: `🌅 Selamat pagi! Produk trending hari ini pada <strong>${trendingCategory}</strong>. Mari cari pilihan terbaik anda!`,
          afternoon: `☀️ Tengah hari! Semak syor eksklusif dengan harga terkini dari <strong>Kedai Rasmi</strong> & nikmati diskaun istimewa!`,
          evening: `🌙 Malam! Temui pilihan trending hari ini dalam kategori <strong>${trendingCategory}</strong> dengan tawaran terbaik.`,
          weekend: `🎉 Semangat hujung minggu! Promosi istimewa & produk terlaris minggu ini dengan faedah eksklusif menanti!`
        },
        zh: {
          morning: `🌅 早上好！今日热销重点推荐<strong>${trendingCategory}</strong>。快来淘宝贝吧！`,
          afternoon: `☀️ 午好！为您精选官方旗舰店最新特价，享受今日限时优惠！`,
          evening: `🌙 晚上好！发现今日<strong>${trendingCategory}</strong>热销爆品，尽享最佳价格！`,
          weekend: `🎉 周末特惠！本周热销商品与限时优惠精选，惊喜优先！`
        }
      };
      
      const timeOfDay = isWeekend ? 'weekend' :
                        hour >= 5 && hour < 12 ? 'morning' :
                        hour >= 12 && hour < 17 ? 'afternoon' : 'evening';
      
      const dynamicGreeting = greetingsByTime[lang]?.[timeOfDay] || greetingsByTime.id[timeOfDay];
      return { text: dynamicGreeting, products: [], searchQuery: '', responseLang: lang };
    }

    if (/promo|diskon|voucher|cashback|gratis ongkir|free shipping|potongan|sale|flash sale|hemat|trending|populer|hot|bestseller|优惠|折扣|包邮|热销/i.test(qLower)) {
      const activeCat = getActiveCatalog();
      const wantsPhonePromo = /hp|phone|smartphone|handphone|ponsel|iphone|samsung|xiaomi|poco|galaxy/i.test(qLower);
      const promoProducts = activeCat
        .filter(p => p.isPromo || Number(p.originalPrice) > Number(p.price))
        .filter(p => !wantsPhonePromo || /phone|smartphone|handphone|iphone|samsung|xiaomi|poco|galaxy|android/i.test(`${p.name || ''} ${p.category || ''}`))
        .sort((a, b) => ((Number(b.originalPrice) - Number(b.price)) / Math.max(Number(b.originalPrice), 1)) - ((Number(a.originalPrice) - Number(a.price)) / Math.max(Number(a.originalPrice), 1)))
        .slice(0, 3);
      const promoTexts = {
        id: 'Berdasarkan pemindaian promo aktif hari ini di YJ Store, berikut produk terpilih dengan diskon tertinggi dari <strong>Official Store</strong>:',
        en: 'Based on today’s promo scan, here are top discounted picks from <strong>Official Stores</strong>:',
        ms: 'Berdasarkan promosi aktif hari ini, berikut produk pilihan dengan potongan harga tertinggi dari <strong>Kedai Rasmi</strong>:',
        zh: '为您精选以下来自<strong>官方旗舰店</strong>的高折扣与包邮特惠好物：'
      };
      return { text: promoTexts[lang] || promoTexts.id, products: promoProducts, searchQuery: wantsPhonePromo ? 'smartphone promo' : 'promo', responseLang: lang };
    }

    // ─── CLOUD AI CALL (Primary Generative Shopping Assistant) ───────
    try {
      const historyContext = (function() {
        try {
          const saved = localStorage.getItem(AI_HISTORY_KEY);
          if (!saved) return [];
          const raw = JSON.parse(saved);
          return raw.slice(-4).map(m => ({
            role: m.role,
            text: String(m.html || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
          }));
        } catch(e) { return []; }
      })();

      const cloudResp = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userQuery,
          lang,
          region,
          conversationHistory: historyContext
        })
      });

      if (cloudResp.ok) {
        const cloudData = await cloudResp.json();
        if (cloudData && cloudData.status === 'ok' && (cloudData.source === 'shopping_guard' || cloudData.source === 'restricted_guard') && cloudData.text) {
          return {
            text: escapeHtml(cloudData.text),
            products: [],
            searchQuery: '',
            responseLang: cloudData.language || lang
          };
        }
        if (cloudData && cloudData.status === 'ok' && cloudData.source === 'no_product') {
          // SerpAPI exhausted — try local product database
          const localProducts = searchLocalAiProducts(userQuery, lang);
          if (localProducts.length > 0) {
            const localText = lang === 'en'
              ? `I found ${localProducts.length} products matching your request from our local catalog:`
              : lang === 'ms'
                ? `Saya menemui ${localProducts.length} produk yang sepadan dari katalog tempatan kami:`
                : lang === 'zh'
                  ? `从本地目录中找到 ${localProducts.length} 个匹配商品：`
                  : `Saya menemukan ${localProducts.length} produk yang sesuai dari katalog lokal kami:`;
            return {
              text: localText,
              products: localProducts,
              searchQuery: userQuery,
              responseLang: lang
            };
          }
          return {
            text: escapeHtml(cloudData.text || 'Tidak menemukan produk yang sesuai.'),
            products: [],
            searchQuery: '',
            responseLang: cloudData.language || lang
          };
        }
        if (cloudData && cloudData.source === 'gemini_unavailable') {
          const reasonText = cloudData.error && /missing_token|invalid_response|network_error|timeout/i.test(cloudData.error)
            ? ` (${cloudData.error.replace(/^Gemini request failed:\s*/i, '')})`
            : '';
          return {
            text: escapeHtml(`Gemini sedang tidak tersedia${reasonText}. Produk lokal tidak digunakan karena belum terverifikasi.`),
            products: [],
            searchQuery: '',
            responseLang: lang
          };
        }
        if (cloudData && cloudData.status === 'ok' && cloudData.source === 'cloud_gemini' && cloudData.text) {
          const formattedText = formatSafeAiText(cloudData.text);

          // If Gemini responded but SerpAPI had no products, match from local database
          let products = Array.isArray(cloudData.products) ? cloudData.products : [];
          if (products.length === 0 && cloudData.needsLocalProducts) {
            products = searchLocalAiProducts(userQuery, lang);
          }

          return {
            text: formattedText,
            products,
            searchQuery: cloudData.searchQuery || userQuery,
            responseLang: cloudData.language || lang,
            quickActions: cloudData.quickActions || []
          };
        }
        // Only gemini_quota_exhausted is allowed to continue to local fallback.
        if (cloudData && cloudData.source !== 'gemini_quota_exhausted') {
          return {
            text: escapeHtml('Gemini gagal memproses permintaan. Rekomendasi lokal tidak digunakan.'),
            products: [],
            searchQuery: '',
            responseLang: lang
          };
        }
      } else {
        return {
          text: escapeHtml('Gemini sedang tidak tersedia. Rekomendasi lokal tidak digunakan.'),
          products: [],
          searchQuery: '',
          responseLang: lang
        };
      }
    } catch (e) {
      return {
        text: escapeHtml('Gemini sedang tidak tersedia. Rekomendasi lokal tidak digunakan.'),
        products: [],
        searchQuery: '',
        responseLang: lang
      };
    }

    // ─── LOCAL SYMPTOM FALLBACK ───────
    // Gemini gets the first chance to answer health questions; use this only when it is unavailable.
    const symptomData = detectSymptomAndRecommendMedicine(userQuery, lang);
    if (symptomData) {
      const activeCat = getActiveCatalog();
      const healthProducts = activeCat.filter(p => p.category === 'health').slice(0, 3);
      let responseText = symptomData.advice + '<br><br>';
      responseText += '🏥 <strong>' + (lang === 'id' ? 'Rekomendasi Obat:' : lang === 'en' ? 'Recommended Medicines:' : 'Ubat yang Disyorkan:') + '</strong><br>';
      symptomData.medicines.forEach(med => {
        responseText += `✓ ${med.name}<br>`;
      });
      return {
        text: responseText,
        products: healthProducts,
        searchQuery: symptomData.symptomKey,
        responseLang: lang
      };
    }

    if (typingEl) {
      const step2Texts = {
        id: '🔍 Memeriksa garansi resmi & menyusun alasan rekomendasi...',
        en: '🔍 Verifying official warranties & drafting rationale...',
        ms: '🔍 Menyemak jaminan rasmi & menyusun sebab pilihan...',
        zh: '🔍 正在核验官方旗舰店货源并生成深度选品理由...'
      };
      updateTypingText(typingEl, step2Texts[lang] || step2Texts.id);
    }
    await new Promise(r => setTimeout(r, 750));

    const wantsSecondHand = /\b(second|bekas|preloved|bekasan|pihak ke[- ]?3|toko biasa)\b/i.test(qLower);

    let detectedBrand = null;
    if (/\b(xiaomi|poco|redmi|mi)\b/i.test(qLower)) detectedBrand = 'xiaomi';
    else if (/\b(samsung|galaxy)\b/i.test(qLower)) detectedBrand = 'samsung';
    else if (/\b(apple|iphone|ios|macbook|ipad)\b/i.test(qLower)) detectedBrand = 'apple';
    else if (/\b(asus|rog|vivobook|zenbook)\b/i.test(qLower)) detectedBrand = 'asus';
    else if (/\b(lenovo|ideapad|thinkpad|loq|legion)\b/i.test(qLower)) detectedBrand = 'lenovo';
    else if (/\b(nike|pegasus|jordan)\b/i.test(qLower)) detectedBrand = 'nike';
    else if (/\b(adidas|samba|duramo|ultraboost)\b/i.test(qLower)) detectedBrand = 'adidas';
    else if (/\b(ortuseight|ortus)\b/i.test(qLower)) detectedBrand = 'ortuseight';

    // Health always wins over phone if both are somehow matched (e.g. "obat sakit kepala hp"-type queries)
    // queryIsHealth MUST be declared first
    const queryIsHealth = /\b(obat|ubat|batuk|berdahak|flu|pilek|demam|pusing|sakit kepala|vitamin|suplemen|kesehatan|health|medicine|paracetamol|obh|siladex|bisolvon|komix|tolak angin|enervon|sirup)\b/i.test(qLower);
    const queryIsPhone = !queryIsHealth && (/\b(hp|smartphone|handphone|ponsel|telepon|phone|telefon|android|ios|s25|iphone|poco|galaxy|5g|snapdragon)\b/i.test(qLower) || detectedBrand === 'xiaomi' || detectedBrand === 'samsung' || detectedBrand === 'apple');
    const queryIsLaptop = !queryIsHealth && /\b(laptop|notebook|macbook|pc|komputer|asus|lenovo|vivobook|ideapad)\b/i.test(qLower);
    const queryIsShoe = !queryIsHealth && /\b(sepatu|shoes|sneakers|running|lari|footwear|kasut|nike|adidas|ortus)\b/i.test(qLower);
    const queryIsSnack = !queryIsHealth && /\b(snacks?|cemilan|makan|food|cokelat|choc|wafer|kue|permen|indomie|mie|makanan|makan\-makan|jajanan|camilan)\b/i.test(qLower);
    const queryIsWatch = !queryIsHealth && /\b(watch|smartwatch|jam|jam tangan|smart band|garmin|fitbit)\b/i.test(qLower);

    let detectedMinBudget = 0;
    let detectedMaxBudget = Infinity;
    let detectedBudgetLabel = '';

    const rmMatch = qLower.match(/(?:rm|ringgit|bajet|budget)?\s*(\d+(?:[.,]\d+)?)\s*(?:rm|ringgit)/i);
    const jtMatch = qLower.match(/(?:budget|harga|dibawah|kurang dari|under|sekitar|range|jadi|ke)?\s*(\d+(?:[.,]\d+)?)\s*(?:jt|juta|jutaan|million)/i);
    const rbMatch = qLower.match(/(?:budget|harga|dibawah|under|jadi|ke)?\s*(\d+)\s*(?:rb|ribu|k)/i);

    if (rmMatch && region === 'my') {
      const num = parseFloat(rmMatch[1].replace(',', '.'));
      detectedMinBudget = 0;
      detectedMaxBudget = num * 1.15;
      detectedBudgetLabel = `RM ${num}`;
    } else if (jtMatch) {

      const num = parseFloat(jtMatch[1].replace(',', '.'));
      if (num <= 2.5) {
        detectedMinBudget = 0;
        detectedMaxBudget = 3200000;
        detectedBudgetLabel = `${num} jutaan`;
      } else if (num <= 4) {
        detectedMinBudget = 2500000;
        detectedMaxBudget = 4500000;
        detectedBudgetLabel = `${num} jutaan`;
      } else if (num <= 6.5) {
        detectedMinBudget = 4200000;
        detectedMaxBudget = 6800000;
        detectedBudgetLabel = `${num} jutaan`;
      } else if (num <= 10) {
        detectedMinBudget = 7500000;
        detectedMaxBudget = 11500000;
        detectedBudgetLabel = `${num} jutaan`;
      } else {
        detectedMinBudget = (num * 1000000) * 0.8;
        detectedMaxBudget = (num * 1000000) * 1.25;
        detectedBudgetLabel = `${num} jutaan`;
      }
    } else if (rbMatch) {
      const num = parseInt(rbMatch[1], 10);
      detectedMinBudget = 0;
      detectedMaxBudget = (num * 1000) * 1.2;
      detectedBudgetLabel = `di bawah ${num} ribu`;
    }

    // --- IMPORTANT: Always override session category flags when a new category is detected ---
    // This prevents old session state (e.g. isPhone) bleeding into new unrelated queries
    if (queryIsHealth) {
      // HEALTH wins first — always reset everything else
      aiConversationSession.category = 'health';
      aiConversationSession.isHealth = true;
      aiConversationSession.isPhone = false;
      aiConversationSession.isShoe = false;
      aiConversationSession.isLaptop = false;
      aiConversationSession.isSnack = false;
      aiConversationSession.isWatch = false;
      aiConversationSession.brand = null;     // medicine has no brand
      aiConversationSession.minBudget = 0;
      aiConversationSession.maxBudget = Infinity;
      aiConversationSession.budgetLabel = '';
    } else if (queryIsPhone) {
      aiConversationSession.category = 'electronics';
      aiConversationSession.isPhone = true;
      aiConversationSession.isShoe = false;
      aiConversationSession.isLaptop = false;
      aiConversationSession.isHealth = false;
      aiConversationSession.isSnack = false;
      aiConversationSession.isWatch = false;
      // Reset brand if switching FROM non-phone category
      if (!aiConversationSession.isPhone) aiConversationSession.brand = null;
    } else if (queryIsShoe) {
      aiConversationSession.category = 'fashion';
      aiConversationSession.isShoe = true;
      aiConversationSession.isPhone = false;
      aiConversationSession.isLaptop = false;
      aiConversationSession.isHealth = false;
      aiConversationSession.isSnack = false;
      aiConversationSession.isWatch = false;
      aiConversationSession.brand = null; // shoe brand detected from current query, not old
      aiConversationSession.minBudget = 0;
      aiConversationSession.maxBudget = Infinity;
      aiConversationSession.budgetLabel = '';
    } else if (queryIsLaptop) {
      aiConversationSession.category = 'electronics';
      aiConversationSession.isLaptop = true;
      aiConversationSession.isPhone = false;
      aiConversationSession.isShoe = false;
      aiConversationSession.isHealth = false;
      aiConversationSession.isSnack = false;
      aiConversationSession.isWatch = false;
      if (!aiConversationSession.isLaptop) aiConversationSession.brand = null;
    } else if (queryIsSnack) {
      aiConversationSession.category = 'food';
      aiConversationSession.isSnack = true;
      aiConversationSession.isWatch = false;
      aiConversationSession.isPhone = false;
      aiConversationSession.isShoe = false;
      aiConversationSession.isLaptop = false;
      aiConversationSession.isHealth = false;
      aiConversationSession.brand = null;
      aiConversationSession.minBudget = 0;
      aiConversationSession.maxBudget = Infinity;
      aiConversationSession.budgetLabel = '';
    } else if (queryIsWatch) {
      aiConversationSession.category = 'wearable';
      aiConversationSession.isWatch = true;
      aiConversationSession.isSnack = false;
      aiConversationSession.isPhone = false;
      aiConversationSession.isShoe = false;
      aiConversationSession.isLaptop = false;
      aiConversationSession.isHealth = false;
      aiConversationSession.brand = null;
      aiConversationSession.minBudget = 0;
      aiConversationSession.maxBudget = Infinity;
      aiConversationSession.budgetLabel = '';
    } else {
      // No clear category keyword in this message
      // If it has a budget/brand refinement → keep current session category (follow-up)
      // If it has NOTHING recognizable → reset everything (user changed topic)
      const isBudgetRefinement = detectedBudgetLabel !== '' || detectedBrand !== null;
      if (!isBudgetRefinement) {
        // Unknown topic — reset session so we don't bleed old HP/etc context
        aiConversationSession.category = null;
        aiConversationSession.isPhone = false;
        aiConversationSession.isShoe = false;
        aiConversationSession.isLaptop = false;
        aiConversationSession.isHealth = false;
        aiConversationSession.isSnack = false;
        aiConversationSession.isWatch = false;
        aiConversationSession.brand = null;
        aiConversationSession.minBudget = 0;
        aiConversationSession.maxBudget = Infinity;
        aiConversationSession.budgetLabel = '';
      }
      // If it IS a refinement, keep existing session state (budget/brand will be updated below)
    }

    if (detectedBrand) aiConversationSession.brand = detectedBrand;
    if (detectedBudgetLabel) {
      aiConversationSession.minBudget = detectedMinBudget;
      aiConversationSession.maxBudget = detectedMaxBudget;
      aiConversationSession.budgetLabel = detectedBudgetLabel;
    }

    const effectiveBrand = aiConversationSession.brand;
    const effectiveBudgetLabel = aiConversationSession.budgetLabel;
    const effectiveMinBudget = aiConversationSession.minBudget || 0;
    const effectiveMaxBudget = aiConversationSession.maxBudget || Infinity;
    const effectiveIsPhone = aiConversationSession.isPhone;
    const effectiveIsShoe = aiConversationSession.isShoe;
    const effectiveIsLaptop = aiConversationSession.isLaptop;
    const effectiveIsHealth = aiConversationSession.isHealth;
    const effectiveIsSnack = aiConversationSession.isSnack;
    const effectiveIsWatch = aiConversationSession.isWatch;

    // Only apply strict category filters if current query confirms the category,
    // OR if there's a budget/brand refinement that carries the session context forward.
    // This prevents old session state (isPhone=true) from bleeding into unrelated queries.
    const hasCurrentCategorySignal = queryIsPhone || queryIsHealth || queryIsLaptop || queryIsShoe || queryIsSnack || queryIsWatch;
    const hasBudgetOrBrand = detectedBudgetLabel !== '' || detectedBrand !== null;
    const applyPhoneFilter = effectiveIsPhone && (queryIsPhone || (hasBudgetOrBrand && !hasCurrentCategorySignal));
    const applyHealthFilter = effectiveIsHealth && (queryIsHealth || (hasBudgetOrBrand && !hasCurrentCategorySignal));
    const applyShoeFilter = effectiveIsShoe && (queryIsShoe || (hasBudgetOrBrand && !hasCurrentCategorySignal));
    const applyLaptopFilter = effectiveIsLaptop && (queryIsLaptop || (hasBudgetOrBrand && !hasCurrentCategorySignal));
    const applySnackFilter = queryIsSnack || (effectiveIsSnack && hasBudgetOrBrand && !hasCurrentCategorySignal);
    const applyWatchFilter = queryIsWatch || (effectiveIsWatch && hasBudgetOrBrand && !hasCurrentCategorySignal);

    let matched = AI_PRODUCT_DATABASE.filter(item => {
      if (!wantsSecondHand && item.isOfficial === false) return false;
      if (applyHealthFilter && item.category !== 'health') return false;
      if (applyPhoneFilter && item.category !== 'electronics') return false;
      if (applyShoeFilter && item.category !== 'fashion' && item.category !== 'footwear') return false;
      if (applyLaptopFilter && (item.category !== 'electronics' || !item.keywords.includes('laptop'))) return false;
      if (applySnackFilter && item.category !== 'food') return false;
      if (applyWatchFilter && !((item.category === 'accessories' || item.category === 'electronics' || item.category === 'wearable') && /smartwatch|smart\s*band|watch|jam\s*tangan|wearable|fitness\s*band|\bband\b/i.test((item.name || '') + ' ' + (item.keywords || []).join(' ')))) return false;

      if (effectiveBrand && item.brand !== effectiveBrand) return false;
      if (effectiveBudgetLabel && !applyHealthFilter) {
        if (item.price < effectiveMinBudget || item.price > effectiveMaxBudget) return false;
      }
      return true;
    });

    if (effectiveIsPhone && !effectiveBrand && matched.length > 0) {
      const brandGroups = {};
      matched.forEach(p => {
        if (!brandGroups[p.brand]) brandGroups[p.brand] = [];
        brandGroups[p.brand].push(p);
      });
      const balancedList = [];
      const brandOrder = ['samsung', 'xiaomi', 'apple', 'asus', 'lenovo'];
      for (const b of brandOrder) {
        if (brandGroups[b] && brandGroups[b].length > 0 && balancedList.length < 3) {
          balancedList.push(brandGroups[b][0]);
        }
      }
      matched.forEach(p => {
        if (!balancedList.includes(p) && balancedList.length < 3) balancedList.push(p);
      });
      matched = balancedList;
    }

    // --- FALLBACK 1: Category-based broad search (ignore budget if no results) ---
    if (matched.length === 0 && (effectiveIsHealth || effectiveIsPhone || effectiveIsLaptop || effectiveIsShoe || effectiveIsSnack || effectiveIsWatch || effectiveBrand)) {
      matched = AI_PRODUCT_DATABASE.filter(item => {
        if (!wantsSecondHand && item.isOfficial === false) return false;
        if (effectiveIsHealth && item.category === 'health') return true;
        if (effectiveBrand && item.brand === effectiveBrand) return true;
        if (effectiveIsPhone && item.category === 'electronics' && !item.keywords.includes('laptop')) return true;
        if (effectiveIsShoe && (item.category === 'fashion' || item.category === 'footwear')) return true;
        if (effectiveIsLaptop && item.keywords.includes('laptop')) return true;
        if (effectiveIsSnack && item.category === 'food') return true;
        if (effectiveIsWatch && (item.category === 'accessories' || item.category === 'electronics' || item.category === 'wearable') && /smartwatch|smart\s*band|watch|jam\s*tangan|wearable|fitness\s*band|\bband\b/i.test((item.name || '') + ' ' + (item.keywords || []).join(' '))) return true;
        return false;
      }).slice(0, 3);
    }

    // --- FALLBACK 2: Keyword search on product name/keywords when still 0 results ---
    // This handles specific product requests like "Xiaomi 14T Pro" or "Nike Pegasus 41"
    if (matched.length === 0) {
      const queryWords = qLower.split(/\s+/).filter(w => w.length > 2);
      matched = AI_PRODUCT_DATABASE.filter(item => {
        if (!wantsSecondHand && item.isOfficial === false) return false;
        const itemText = (item.name + ' ' + (item.keywords || []).join(' ')).toLowerCase();
        // Score: how many query words match the product
        const matchCount = queryWords.filter(w => itemText.includes(w)).length;
        return matchCount >= 1;
      });
      // Sort by relevance (most matching words first)
      const queryWords2 = qLower.split(/\s+/).filter(w => w.length > 2);
      matched.sort((a, b) => {
        const aText = (a.name + ' ' + (a.keywords || []).join(' ')).toLowerCase();
        const bText = (b.name + ' ' + (b.keywords || []).join(' ')).toLowerCase();
        const aScore = queryWords2.filter(w => aText.includes(w)).length;
        const bScore = queryWords2.filter(w => bText.includes(w)).length;
        return bScore - aScore;
      });
      matched = matched.slice(0, 3);
    }

    let topProducts = matched.length <= 2 ? matched : matched.slice(0, 3);
    const count = topProducts.length;
    const storeTypeLabel = wantsSecondHand ? 'Toko Pihak Ketiga' : (lang === 'zh' ? '官方旗舰店' : lang === 'en' ? 'Official Store' : lang === 'ms' ? 'Kedai Rasmi' : 'Official Store');

    let adviceText = '';
    const isCough = /batuk|berdahak/i.test(qLower);

    if (effectiveIsHealth) {
      if (isCough) {
        const textId = `Untuk meredakan <strong>batuk berdahak maupun batuk kering</strong>, berikut ${count} obat batuk pilihan dari ${storeTypeLabel} (resmi BPOM) beserta alasan formulanya:`;
        const textEn = `To relieve <strong>coughs & phlegm</strong>, here are ${count} pharmacy-certified choices from ${storeTypeLabel}:`;
        const textMs = `Untuk melegakan <strong>batuk berkahak</strong>, berikut ${count} ubat batuk disahkan BPOM dari ${storeTypeLabel}:`;
        const textZh = `针对<strong>止咳化痰</strong>，精选以下 ${count} 款来自<strong>官方药房旗舰店</strong>的正品药品及推荐理由：`;
        adviceText = lang === 'en' ? textEn : lang === 'ms' ? textMs : lang === 'zh' ? textZh : textId;
      } else {
        const textId = `Berikut ${count} produk <strong>kesehatan & multivitamin</strong> terbaik dari ${storeTypeLabel} untuk daya tahan tubuh Anda:`;
        const textEn = `Here are ${count} top <strong>health & vitamin products</strong> from ${storeTypeLabel}:`;
        const textMs = `Berikut ${count} pilihan <strong>kesihatan & multivitamin</strong> dari ${storeTypeLabel}:`;
        const textZh = `精选以下 ${count} 款来自<strong>官方旗舰店</strong>的正品常备健康保健品：`;
        adviceText = lang === 'en' ? textEn : lang === 'ms' ? textMs : lang === 'zh' ? textZh : textId;
      }
    } else if (effectiveBrand === 'xiaomi' && (effectiveBudgetLabel.includes('10') || effectiveMinBudget >= 7000000)) {
      const textId = `Untuk <strong>Xiaomi</strong> di kelas <strong>${effectiveBudgetLabel || '10 Jutaan'}</strong>, berikut ${count} model resmi terbaik dari ${storeTypeLabel} beserta alasan spesifikasinya:`;
      const textEn = `For <strong>Xiaomi</strong> around <strong>${effectiveBudgetLabel || '~10M'}</strong>, here are the top ${count} models from ${storeTypeLabel}:`;
      const textMs = `Untuk <strong>Xiaomi</strong> julat <strong>${effectiveBudgetLabel || '10 Jutaan'}</strong>, berikut ${count} model rasmi terbaik dari ${storeTypeLabel}:`;
      const textZh = `针对 <strong>小米 (Xiaomi)</strong> 在 <strong>${effectiveBudgetLabel || '1000万左右'}</strong> 预算，精选以下 ${count} 款<strong>官方旗舰店正品</strong>及推荐理由：`;
      adviceText = lang === 'en' ? textEn : lang === 'ms' ? textMs : lang === 'zh' ? textZh : textId;
    } else if (effectiveBrand === 'xiaomi' && effectiveBudgetLabel) {
      const textId = `Berdasarkan analisis brand <strong>Xiaomi</strong> pada budget <strong>${effectiveBudgetLabel}</strong>, berikut ${count} model paling *worth-it* dari ${storeTypeLabel}:`;
      const textEn = `Based on our analysis for <strong>Xiaomi</strong> in <strong>${effectiveBudgetLabel}</strong>, here are ${count} top picks from ${storeTypeLabel}:`;
      const textMs = `Berdasarkan analisis jenama <strong>Xiaomi</strong> pada bajet <strong>${effectiveBudgetLabel}</strong>, berikut ${count} model terbaik dari ${storeTypeLabel}:`;
      const textZh = `针对 <strong>小米</strong> 在 <strong>${effectiveBudgetLabel}</strong> 预算区间，为您精选以下 ${count} 款<strong>官方旗舰店</strong>最佳机型：`;
      adviceText = lang === 'en' ? textEn : lang === 'ms' ? textMs : lang === 'zh' ? textZh : textId;
    } else if (effectiveBrand === 'samsung' && effectiveBudgetLabel) {
      const textId = `Mengikuti budget <strong>${effectiveBudgetLabel}</strong> sebelumnya, untuk <strong>Samsung</strong> berikut ${count} model terbaik dari ${storeTypeLabel}:`;
      const textEn = `Following your <strong>${effectiveBudgetLabel}</strong> budget, for <strong>Samsung</strong> here are ${count} top picks from ${storeTypeLabel}:`;
      const textMs = `Mengikut bajet <strong>${effectiveBudgetLabel}</strong> anda, untuk <strong>Samsung</strong> berikut ${count} pilihan terbaik dari ${storeTypeLabel}:`;
      const textZh = `已沿用 <strong>${effectiveBudgetLabel}</strong> 预算，为您推荐以下 ${count} 款来自<strong>三星官方旗舰店</strong>的优选机型：`;
      adviceText = lang === 'en' ? textEn : lang === 'ms' ? textMs : lang === 'zh' ? textZh : textId;
    } else if (effectiveIsPhone && effectiveBudgetLabel && !effectiveBrand) {
      const textId = `Untuk budget <strong>${effectiveBudgetLabel}</strong>, berikut ${count} smartphone <strong>juara lintas brand</strong> dari ${storeTypeLabel} beserta alasan keunggulannya:`;
      const textEn = `For a <strong>${effectiveBudgetLabel}</strong> budget, here is the comparison of the top ${count} champion phones from ${storeTypeLabel}:`;
      const textMs = `Untuk bajet <strong>${effectiveBudgetLabel}</strong>, berikut ${count} telefon terbaik merentasi jenama dari ${storeTypeLabel}:`;
      const textZh = `针对 <strong>${effectiveBudgetLabel}</strong> 预算，精选以下 ${count} 款来自<strong>官方旗舰店</strong>的跨品牌王牌手机综合比对：`;
      adviceText = lang === 'en' ? textEn : lang === 'ms' ? textMs : lang === 'zh' ? textZh : textId;
    } else if (effectiveIsPhone && (effectiveBrand || effectiveBudgetLabel)) {
      const targetBrandStr = effectiveBrand ? effectiveBrand.toUpperCase() : 'Smartphone';
      const textId = `Hasil analisis AI untuk <strong>${targetBrandStr}</strong> kriteria <strong>${effectiveBudgetLabel || 'Pilihan Terbaik'}</strong> dari ${storeTypeLabel}:`;
      const textEn = `AI analysis results for <strong>${targetBrandStr}</strong> matching <strong>${effectiveBudgetLabel || 'Best Choice'}</strong> from ${storeTypeLabel}:`;
      const textMs = `Hasil analisis AI untuk <strong>${targetBrandStr}</strong> dengan kriteria <strong>${effectiveBudgetLabel || 'Pilihan Terbaik'}</strong> dari ${storeTypeLabel}:`;
      const textZh = `针对 <strong>${targetBrandStr}</strong> 及 <strong>${effectiveBudgetLabel || '优选方案'}</strong>，精选以下 ${count} 款<strong>官方正品</strong>机型：`;
      adviceText = lang === 'en' ? textEn : lang === 'ms' ? textMs : lang === 'zh' ? textZh : textId;
    } else if (effectiveIsPhone) {
      const textId = `Berikut perbandingan ${count} smartphone <strong>Flagship Resmi Terbaik</strong> dari ${storeTypeLabel} beserta alasan spesifikasinya:`;
      const textEn = `Here is today's best ${count} flagship smartphone comparison from ${storeTypeLabel}:`;
      const textMs = `Berikut perbandingan ${count} telefon pintar Flagship terbaik dari ${storeTypeLabel}:`;
      const textZh = `为您精选 ${count} 款来自<strong>官方正品专营店</strong>的顶级旗舰手机比对：`;
      adviceText = lang === 'en' ? textEn : lang === 'ms' ? textMs : lang === 'zh' ? textZh : textId;
    } else if (effectiveIsShoe) {
      const textId = `Berdasarkan kenyamanan bantalan dan durabilitas, berikut ${count} rekomendasi sepatu lari terbaik dari ${storeTypeLabel}:`;
      const textEn = `Based on cushioning and durability, here are ${count} top running shoes from ${storeTypeLabel}:`;
      const textMs = `Berdasarkan kusyen dan ketahanan larian, berikut ${count} kasut terbaik dari ${storeTypeLabel}:`;
      const textZh = `结合缓震回弹与透气包裹性，精选以下 ${count} 款来自<strong>品牌官方旗舰店</strong>的专业跑鞋：`;
      adviceText = lang === 'en' ? textEn : lang === 'ms' ? textMs : lang === 'zh' ? textZh : textId;
    } else if (effectiveIsLaptop) {
      const textId = `Untuk laptop kerja & kuliah, berikut ${count} model pilihan dari ${storeTypeLabel} beserta alasan performanya:`;
      const textEn = `For work and study laptops, here are ${count} top models from ${storeTypeLabel}:`;
      const textMs = `Untuk komputer riba kerja dan belajar, berikut ${count} model pilihan dari ${storeTypeLabel}:`;
      const textZh = `为您推荐以下 ${count} 款来自<strong>官方旗舰店</strong>的高性能轻薄笔记本：`;
      adviceText = lang === 'en' ? textEn : lang === 'ms' ? textMs : lang === 'zh' ? textZh : textId;
    } else {
      const textId = `Setelah menganalisis katalog untuk pencarian <strong>"${escapeHtml(userQuery)}"</strong>, berikut ${count} produk pilihan paling relevan dari ${storeTypeLabel}:`;
      const textEn = `After evaluating products for <strong>"${escapeHtml(userQuery)}"</strong>, here are ${count} verified picks from ${storeTypeLabel}:`;
      const textMs = `Selepas menganalisis carian <strong>"${escapeHtml(userQuery)}"</strong>, berikut ${count} produk paling relevan dari ${storeTypeLabel}:`;
      const textZh = `根据您的咨询 <strong>"${escapeHtml(userQuery)}"</strong>，匹配到以下 ${count} 款来自<strong>官方正品店铺</strong>的精选商品：`;
      adviceText = lang === 'en' ? textEn : lang === 'ms' ? textMs : lang === 'zh' ? textZh : textId;
    }

    // If nothing matched and no specific category detected, give a helpful "not understood" response
    if (topProducts.length === 0 && !effectiveIsHealth && !effectiveIsPhone && !effectiveIsShoe && !effectiveIsLaptop && !effectiveIsSnack && !effectiveIsWatch && !effectiveBrand) {
      const noMatchTexts = {
        id: `Maaf, saya belum bisa memahami permintaan "<strong>${escapeHtml(userQuery)}</strong>" sepenuhnya. Saya ahli di rekomendasi <strong>HP, laptop, sepatu lari, obat, dan vitamin</strong>. Coba tanyakan salah satu dari kategori tersebut ya!`,
        en: `Sorry, I couldn't fully understand "<strong>${escapeHtml(userQuery)}</strong>". I specialize in recommending <strong>phones, laptops, running shoes, medicines, and vitamins</strong>. Try asking about one of those categories!`,
        ms: `Maaf, saya tidak dapat memahami "<strong>${escapeHtml(userQuery)}</strong>" sepenuhnya. Saya pakar dalam <strong>telefon, laptop, kasut lari, ubat, dan vitamin</strong>. Cuba tanya salah satu kategori tersebut!`,
        zh: `抱歉，我未能完全理解"<strong>${escapeHtml(userQuery)}</strong>"。我擅长推荐<strong>手机、笔记本、跑鞋、药品和维生素</strong>，请尝试询问上述类别！`
      };
      return { text: noMatchTexts[lang] || noMatchTexts.id, products: [], searchQuery: '', responseLang: lang };
    }

    return { text: adviceText, products: topProducts, searchQuery: userQuery, responseLang: lang };
  };

  const handleUserSubmission = async (text) => {
    if (!text || text.trim() === '') return;
    const cleanText = text.trim();
    if (userInput) userInput.value = '';

    addMessage('user', cleanText);
    const typingEl = showTypingIndicator();

    try {
      const response = await generateAssistantResponse(cleanText, typingEl);
      if (typingEl && typingEl.parentNode) {
        typingEl.remove();
      }

      const respLang = response.responseLang || detectUserQueryLanguage(cleanText, getCurrentLang());
      const region = getCurrentRegion();
      const langData = i18nDictionary[respLang] || i18nDictionary.id;

      let responseHtml = `<p>${response.text}</p>`;

      if (response.products && response.products.length > 0) {
        responseHtml += `<div class="ai-product-mini-list">`;
        response.products.forEach(p => {
          const displayName = getProductLocalizedName(p, respLang === 'zh' ? 'id' : respLang);
          const safeName = escapeHtml(displayName);
          const priceFormatted = formatCurrency(p.price, region);
          const safeMp = escapeHtml(getCurrentRegion() === 'my' ? 'Shopee MY' : (p.marketplace || 'Shopee'));
          const mpLower = safeMp.toLowerCase();
          const sourceClass = mpLower.includes('shopee') ? 'source-shopee'
            : mpLower.includes('tokopedia') ? 'source-tokopedia'
            : mpLower.includes('lazada') ? 'source-lazada'
            : 'source-default';
          const imageQuery = `${displayName} ${p.category || ''} ${(p.keywords || []).join(' ')}`;
          const reasonText = p['reason_' + respLang] || p.reason_id || p.description || '';
          const isOfficialStore = p.isOfficial || (p.shop && /official/i.test(p.shop));

          responseHtml += `
            <div class="ai-product-mini-card" data-product-id="${escapeHtml(p.id)}">
              <div class="ai-card-top-row">
                <img src="${IMG_PLACEHOLDER}" alt="${safeName}" class="ai-prod-thumb search-product-img image-unavailable" loading="lazy" data-search-image="true" data-name="${escapeHtml(imageQuery)}" data-category="${escapeHtml(p.category || '')}">
                <div class="ai-prod-info">
                  <div class="ai-prod-name" title="${safeName}">${safeName}</div>
                  <div class="ai-prod-price-row">
                    <span class="ai-prod-price">${priceFormatted}</span>
                    <span class="${sourceClass} ai-prod-mp">${safeMp}</span>
                    ${isOfficialStore ? `<span class="ai-official-tag">✓ ${escapeHtml(langData.aiOfficialLabel || 'Official Store')}</span>` : ''}
                  </div>
                </div>
                <div class="ai-prod-actions">
                  <button class="ai-cart-btn ai-quick-cart" data-product-id="${escapeHtml(p.id)}" title="${escapeHtml(langData.addToCart || '+ Keranjang')}">
                    🛒 +
                  </button>
                </div>
              </div>
              ${reasonText ? `<div class="ai-prod-reason">💡 <strong>${escapeHtml(langData.aiReasonLabel || 'Alasan:')}</strong> ${escapeHtml(reasonText)}</div>` : ''}
            </div>
          `;
        });
        responseHtml += `</div>`;

        if (response.searchQuery) {
          responseHtml += `
            <button class="ai-action-btn ai-trigger-search" data-search="${escapeHtml(response.searchQuery)}">
              🔍 ${langData.aiViewMoreBtn || 'Lihat Semua Hasil Pencarian'}
            </button>
          `;
        }
      }

      const assistantMsgEl = addMessage('assistant', responseHtml, false, response.products);

      if (assistantMsgEl) {
        bindCardListeners(assistantMsgEl, response.products);
        hydrateSearchImages(assistantMsgEl);
        // Save session state after each exchange
        try {
          const sessionToSave = Object.assign({}, aiConversationSession, { maxBudget: isFinite(aiConversationSession.maxBudget) ? aiConversationSession.maxBudget : null });
          localStorage.setItem(AI_SESSION_KEY, JSON.stringify(sessionToSave));
        } catch(e) {}
      }
    } catch (err) {
      if (typingEl && typingEl.parentNode) typingEl.remove();
      addMessage('assistant', 'Maaf, terjadi kendala saat memproses jawaban. Silakan coba tanyakan kembali.');
    }
  };

  chatForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (userInput) {
      handleUserSubmission(userInput.value);
    }
  });

  const promptList = document.getElementById('aiPromptList');
  if (promptList) {
    promptList.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        promptList.scrollLeft += e.deltaY * 0.9;
      }
    }, { passive: false });

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let hasDragged = false;

    promptList.addEventListener('mousedown', (e) => {
      isDown = true;
      hasDragged = false;
      startX = e.pageX - promptList.offsetLeft;
      scrollLeft = promptList.scrollLeft;
    });

    promptList.addEventListener('mouseleave', () => {
      isDown = false;
    });

    promptList.addEventListener('mouseup', () => {
      isDown = false;
    });

    promptList.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      const x = e.pageX - promptList.offsetLeft;
      const walk = (x - startX) * 1.5;
      if (Math.abs(walk) > 4) {
        hasDragged = true;
      }
      promptList.scrollLeft = scrollLeft - walk;
    });

    promptList.addEventListener('click', (e) => {
      if (hasDragged) {
        hasDragged = false;
        return;
      }
      const chip = e.target.closest('.ai-prompt-chip');
      if (chip) {
        const currentLang = getCurrentLang();
        const langDict = i18nDictionary[currentLang] || i18nDictionary.id;
        const promptKey = chip.getAttribute('data-prompt-key');
        const prompt = (promptKey && langDict[promptKey]) || chip.getAttribute('data-ai-prompt') || chip.textContent.trim();
        handleUserSubmission(prompt);
      }
    });
  }

  clearChatBtn?.addEventListener('click', () => {
    const lang = getCurrentLang();
    const langData = i18nDictionary[lang] || i18nDictionary.id;
    if (confirm(langData.aiClearChatConfirm || 'Bersihkan seluruh riwayat percakapan AI?')) {
      aiConversationSession.category = null;
      aiConversationSession.isPhone = false;
      aiConversationSession.isShoe = false;
      aiConversationSession.isLaptop = false;
      aiConversationSession.isHealth = false;
      aiConversationSession.brand = null;
      aiConversationSession.minBudget = 0;
      aiConversationSession.maxBudget = Infinity;
      aiConversationSession.budgetLabel = '';

      // Clear localStorage
      try {
        localStorage.removeItem(AI_HISTORY_KEY);
        localStorage.removeItem(AI_SESSION_KEY);
      } catch(e) {}

      messagesBox.innerHTML = `
        <div class="ai-message assistant">
          <div class="ai-msg-avatar">🤖</div>
          <div class="ai-msg-content" data-i18n="aiGreeting">
            ${escapeHtml(langData.aiGreeting || 'Halo! Saya asisten belanja pintar YJ Store. Tanyakan rekomendasi barang, perbandingan harga, atau cari promo terbaik hari ini!')}
          </div>
        </div>
      `;
    }
  });
}

const historyToggle = document.getElementById('historyToggle');
if (historyToggle) {
  const isHistoryDisabled = localStorage.getItem('disableSearchHistory') === 'true';
  historyToggle.checked = !isHistoryDisabled;
  historyToggle.addEventListener('change', () => {
    localStorage.setItem('disableSearchHistory', !historyToggle.checked);
  });
}

const easterEggToggle = document.getElementById('easterEggToggle');
if (easterEggToggle) {
  const isEasterEgg = localStorage.getItem('yj_easter_egg') === 'true';
  easterEggToggle.checked = isEasterEgg;
  if (isEasterEgg) document.body.classList.add('easter-egg-mode');
  easterEggToggle.addEventListener('change', () => {
    localStorage.setItem('yj_easter_egg', easterEggToggle.checked);
    document.body.classList.toggle('easter-egg-mode', easterEggToggle.checked);
  });
}

const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const confirmClearModal = document.getElementById('confirmClearModal');
const cancelClearBtn = document.getElementById('cancelClearBtn');
const confirmClearBtn = document.getElementById('confirmClearBtn');

clearHistoryBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  if (settingsModal) settingsModal.classList.remove('show');
  if (confirmClearModal) confirmClearModal.classList.add('show');
});

cancelClearBtn?.addEventListener('click', () => {
  if (confirmClearModal) confirmClearModal.classList.remove('show');
  if (settingsModal) settingsModal.classList.add('show');
});

confirmClearBtn?.addEventListener('click', () => {
  localStorage.removeItem('searchHistory');
  isHistoryDOMBuilt = false;
  if (searchHistoryDropdown) {
    searchHistoryDropdown.classList.remove('show');
    searchHistoryDropdown.innerHTML = '';
  }
  if (confirmClearModal) confirmClearModal.classList.remove('show');
});

bannerCtaBtn?.addEventListener('click', () => {
  activateSearchMode('promo');
});

/* ========================================================== */
/* 14. CATEGORY SLIDERS & SHIMMER                             */
/* ========================================================== */
function initCategorySliders() {
  const sliders = document.querySelectorAll('.cat-icon-slider');
  if (!sliders || sliders.length === 0) return;

  const intervals = [];
  sliders.forEach(slider => {
    const slides = slider.querySelectorAll('.cat-slide-img');
    if (slides.length <= 1) return;

    let currentIndex = 0;
    const id = setInterval(() => {
      slides[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add('active');
    }, 2500);
    intervals.push(id);
  });

  // Pause sliders when tab is hidden to save CPU
  document.addEventListener('visibilitychange', () => {
    intervals.forEach(id => {
      if (document.hidden) clearInterval(id);
    });
  });
}

/* ========================================================== */
/* 15. INITIALIZATION ON DOM READY                            */
/* ========================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  const urlRegion = urlParams.get('region');
  const urlQuery = urlParams.get('search') || urlParams.get('q');
  const urlCategory = urlParams.get('category');
  const urlPage = urlParams.get('page');

  const activeLang = urlLang || localStorage.getItem('selected_lang') || 'id';
  const activeRegion = urlRegion || localStorage.getItem('selected_region') || 'id';

  const activeLangRadio = document.querySelector(`input[name="modalLang"][value="${activeLang}"]`);
  if (activeLangRadio) activeLangRadio.checked = true;

  const activeRegionRadio = document.querySelector(`input[name="modalRegion"][value="${activeRegion}"]`);
  if (activeRegionRadio) activeRegionRadio.checked = true;

  initializeCartNotificationState();
  updateCartBadge();
  initCategorySliders();
  initRecommendations();

  const categoryLabels = {
    electronics: 'elektronik',
    home: 'peralatan rumah tangga',
    accessories: 'aksesoris',
    beauty: 'kecantikan',
    health: 'kesehatan',
    food: 'cemilan',
    sleep: 'tempat tidur'
  };

  if (urlCategory && urlQuery && searchInput) {
    const categoryLabel = categoryLabels[urlCategory] || urlCategory;
    const categoryQuery = categorySearchQueries[categoryLabel] || urlQuery;
    const categoryKey = urlCategory === 'electronics' ? 'electronics'
      : urlCategory === 'home' ? 'home'
      : urlCategory === 'accessories' ? 'accessories'
      : urlCategory === 'beauty' ? 'beauty'
      : urlCategory === 'health' ? 'health'
      : urlCategory === 'food' ? 'food'
      : urlCategory === 'sleep' ? 'sleep'
      : urlCategory;
    searchInput.value = urlQuery;
    if (clearSearchBtn) clearSearchBtn.classList.add('show');
    if (searchBtn) searchBtn.classList.add('active');
    document.body.classList.add('search-mode-active');
    categoryFeedState.categoryKey = categoryKey;
    categoryFeedState.query = categoryQuery;
    loadMoreCategoryResults(true);
  } else if (urlQuery && searchInput) {
    searchInput.value = urlQuery;
    if (clearSearchBtn) clearSearchBtn.classList.add('show');
    if (searchBtn) searchBtn.classList.add('active');
    document.body.classList.add('search-mode-active');
    searchFeedState.query = urlQuery;
    loadMoreSearchResults(true);
  } else if (urlPage === 'cart' || urlPage === 'orders') {
    activateCartMode();
  }

  applyLanguageUI(activeLang);
  applyRegionUI(activeRegion);
  initializeAiAssistant();
  hydrateProductImages();

  // Make static HTML product cards (in index.html) clickable to open marketplace
  document.querySelectorAll('.product-card.recommend-prod-card').forEach(card => {
    if (card.dataset.staticClickBound) return;
    card.dataset.staticClickBound = '1';
    card.addEventListener('click', (e) => {
      if (e.target.closest('.quick-add-cart-btn') || e.target.closest('[class*="cart"]')) return;
      const mp = (card.dataset.marketplace || 'Shopee').toLowerCase();
      const productName = card.dataset.name || card.querySelector('h4')?.textContent || '';
      const url = getSafeMarketplaceUrl('', mp, productName, card.dataset.productId || '');
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });
});

window.addEventListener('popstate', () => {
  const params = new URLSearchParams(window.location.search);
  const searchQuery = params.get('search') || params.get('q');
  const pageQuery = params.get('page');

  document.body.classList.remove('search-mode-active');
  document.body.classList.remove('cart-mode-active');
  document.body.classList.remove('orders-mode-active');

  if (searchQuery) {
    document.body.classList.add('search-mode-active');
    if (searchInput) searchInput.value = searchQuery;
    searchFeedState.query = searchQuery;
    loadMoreSearchResults(true);
  } else if (pageQuery === 'cart' || pageQuery === 'orders') {
    document.body.classList.add('cart-mode-active');
    renderCartView();
  } else {
    if (searchInput) searchInput.value = '';
    renderMarketplaceResults('');
    if (recommendationState.products.length > 0) {
      renderRecommendationCards(recommendationState.products);
    } else {
      loadMoreRecommendations(true);
    }
  }
});