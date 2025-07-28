// data.js
// This module simulates fetching data from an API.
// In a real application, these would be actual fetch calls to a backend.

export const categoriesData = [
    {
        id: 'disinfectants',
        name_en: 'Disinfectants',
        name_ar: 'المطهرات',
        image: 'https://placehold.co/400x300/1a1a1a/00ff88?text=Disinfectants',
        description_en: 'Powerful disinfectants for a hygienic environment, ensuring cleanliness and safety.',
        description_ar: 'مطهرات قوية لبيئة صحية، تضمن النظافة والأمان.'
    },
    {
        id: 'detergents',
        name_en: 'Detergents',
        name_ar: 'المنظفات',
        image: 'https://placehold.co/400x300/1a1a1a/00ff88?text=Detergents',
        description_en: 'A wide range of high-quality detergents for all your cleaning and laundry needs.',
        description_ar: 'مجموعة واسعة من المنظفات عالية الجودة لجميع احتياجات التنظيف والغسيل.'
    },
    {
        id: 'paper-products',
        name_en: 'Paper Products',
        name_ar: 'المنتجات الورقية',
        image: 'https://placehold.co/400x300/1a1a1a/00ff88?text=Paper+Products',
        description_en: 'High-quality paper products for daily use, including tissues, rolls, and cups.',
        description_ar: 'منتجات ورقية عالية الجودة للاستخدام اليومي، بما في ذلك المناديل، اللفائف، والأكواب.'
    },
    {
        id: 'plastics-packaging',
        name_en: 'Plastics & Packaging',
        name_ar: 'البلاستيك والتغليف',
        image: 'https://placehold.co/400x300/1a1a1a/00ff88?text=Plastics+and+Packaging',
        description_en: 'A wide range of plastic items and packaging solutions for various needs.',
        description_ar: 'مجموعة واسعة من المواد البلاستيكية وحلول التعبئة والتغليف لمختلف الاحتياجات.'
    },
    {
        id: 'disposables-cutlery',
        name_en: 'Disposable Cutlery & Containers',
        name_ar: 'أدوات المائدة والحاويات القابلة للتصرف',
        image: 'https://placehold.co/400x300/1a1a1a/00ff88?text=Disposables',
        description_en: 'Convenient disposable cutlery and food containers for events, catering, and everyday use.',
        description_ar: 'أدوات مائدة وحاويات طعام مريحة للاستخدام مرة واحدة للمناسبات، خدمات الطعام، والاستخدام اليومي.'
    },
    {
        id: 'air-fresheners',
        name_en: 'Air Fresheners',
        name_ar: 'معطرات الجو',
        image: 'https://placehold.co/400x300/1a1a1a/00ff88?text=Air+Fresheners',
        description_en: 'Aromatic solutions to keep your spaces fresh and inviting.',
        description_ar: 'حلول عطرية للحفاظ على مساحاتك منعشة وجذابة.'
    },
    {
        id: 'waste-management',
        name_en: 'Waste Management',
        name_ar: 'إدارة النفايات',
        image: 'https://placehold.co/400x300/1a1a1a/00ff88?text=Waste+Management',
        description_en: 'Comprehensive solutions for efficient and hygienic waste disposal.',
        description_ar: 'حلول شاملة للتخلص الفعال والصحي من النفايات.'
    },
    {
        id: 'safety-products',
        name_en: 'Safety Products',
        name_ar: 'منتجات السلامة',
        image: 'https://placehold.co/400x300/1a1a1a/00ff88?text=Safety+Products',
        description_en: 'Essential products for personal protection and safety in various environments.',
        description_ar: 'منتجات أساسية للحماية الشخصية والسلامة في مختلف البيئات.'
    }
];

export const productsData = {
    'disinfectants': [
        {
            id: 'dettol-disinfectant',
            name_en: 'Dettol Disinfectant',
            name_ar: 'مطهر ديتول',
            description_en: 'A powerful and versatile disinfectant that kills 99.9% of germs, suitable for various surfaces and household use.',
            description_ar: 'مطهر قوي ومتعدد الاستخدامات يقتل 99.9% من الجراثيم، مناسب لمختلف الأسطح والاستخدام المنزلي.',
            images: [
                'https://placehold.co/600x400/1a1a1a/00ff88?text=Dettol+Disinfectant',
                'https://placehold.co/600x400/1a1a1a/00ff88?text=Dettol+Bottle+1L',
                'https://placehold.co/600x400/1a1a1a/00ff88?text=Dettol+Bottle+4L'
            ],
            variants: [
                { size_en: '125 ml', size_ar: '125 مل', specs_en: ['Volume: 125 ml', 'Type: Liquid', 'Usage: General disinfection'], specs_ar: ['الحجم: 125 مل', 'النوع: سائل', 'الاستخدام: تطهير عام'] },
                { size_en: '500 ml', size_ar: '500 مل', specs_en: ['Volume: 500 ml', 'Type: Liquid', 'Usage: General disinfection'], specs_ar: ['الحجم: 500 مل', 'النوع: سائل', 'الاستخدام: تطهير عام'] },
                { size_en: '750 ml', size_ar: '750 مل', specs_en: ['Volume: 750 ml', 'Type: Liquid', 'Usage: General disinfection'], specs_ar: ['الحجم: 750 مل', 'النوع: سائل', 'الاستخدام: تطهير عام'] },
                { size_en: '1 Liter', size_ar: '1 لتر', specs_en: ['Volume: 1 Liter', 'Type: Liquid', 'Usage: General disinfection'], specs_ar: ['الحجم: 1 لتر', 'النوع: سائل', 'الاستخدام: تطهير عام'] },
                { size_en: '2 Liters', size_ar: '2 لتر', specs_en: ['Volume: 2 Liters', 'Type: Liquid', 'Usage: General disinfection'], specs_ar: ['الحجم: 2 لتر', 'النوع: سائل', 'الاستخدام: تطهير عام'] },
                { size_en: '4 Liters', size_ar: '4 لتر', specs_en: ['Volume: 4 Liters', 'Type: Liquid', 'Usage: General disinfection'], specs_ar: ['الحجم: 4 لتر', 'النوع: سائل', 'الاستخدام: تطهير عام'] }
            ]
        },
        {
            id: 'dettol-surface-cleaner',
            name_en: 'Dettol Surface Disinfectant',
            name_ar: 'مطهر ديتول للأسطح',
            description_en: 'Specifically formulated to clean and disinfect various surfaces, leaving them sparkling clean and germ-free.',
            description_ar: 'تركيبة خاصة لتنظيف وتطهير الأسطح المختلفة، مما يتركها نظيفة ولامعة وخالية من الجراثيم.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Dettol+Surface+Cleaner'],
            variants: [
                { size_en: '500 ml', size_ar: '500 مل', specs_en: ['Volume: 500 ml', 'Type: Spray', 'Usage: Surface cleaning and disinfection'], specs_ar: ['الحجم: 500 مل', 'النوع: بخاخ', 'الاستخدام: تنظيف وتطهير الأسطح'] }
            ]
        },
        {
            id: 'dettol-kitchen-cleaner',
            name_en: 'Dettol Kitchen Cleaner',
            name_ar: 'منظف ديتول للمطبخ',
            description_en: 'Powerful kitchen cleaner designed to tackle grease and grime, ensuring a hygienic cooking environment.',
            description_ar: 'منظف مطبخ قوي مصمم لمعالجة الشحوم والأوساخ، مما يضمن بيئة طهي صحية.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Dettol+Kitchen+Cleaner'],
            variants: [
                { size_en: '500 ml', size_ar: '500 مل', specs_en: ['Volume: 500 ml', 'Type: Spray', 'Usage: Kitchen cleaning'], specs_ar: ['الحجم: 500 مل', 'النوع: بخاخ', 'الاستخدام: تنظيف المطبخ'] }
            ]
        },
        {
            id: 'dettol-glass-cleaner',
            name_en: 'Dettol Glass Cleaner',
            name_ar: 'منظف ديتول للزجاج',
            description_en: 'Streak-free glass cleaner for crystal clear windows and shiny surfaces.',
            description_ar: 'منظف زجاج لا يترك خطوطًا لزجاج شفاف وأسطح لامعة.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Dettol+Glass+Cleaner'],
            variants: [
                { size_en: '500 ml', size_ar: '500 مل', specs_en: ['Volume: 500 ml', 'Type: Spray', 'Usage: Glass and window cleaning'], specs_ar: ['الحجم: 500 مل', 'النوع: بخاخ', 'الاستخدام: تنظيف الزجاج والنوافذ'] }
            ]
        },
        {
            id: 'al-saif-disinfectant',
            name_en: 'Al-Saif Disinfectant',
            name_ar: 'مطهر السيف',
            description_en: 'An effective and safe disinfectant for various surfaces, leaving a fresh and clean scent.',
            description_ar: 'مطهر فعال وآمن لمختلف الأسطح، يترك رائحة منعشة ونظيفة.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Al-Saif+Disinfectant'],
            variants: [
                { size_en: '500 ml', size_ar: '500 مل', specs_en: ['Volume: 500 ml', 'Type: Liquid', 'Usage: Multi-surface disinfection'], specs_ar: ['الحجم: 500 مل', 'النوع: سائل', 'الاستخدام: تطهير متعدد الأسطح'] },
                { size_en: '750 ml', size_ar: '750 مل', specs_en: ['Volume: 750 ml', 'Type: Liquid', 'Usage: Multi-surface disinfection'], specs_ar: ['الحجم: 750 ml', 'النوع: سائل', 'الاستخدام: تطهير متعدد الأسطح'] },
                { size_en: '4 Liters', size_ar: '4 لتر', specs_en: ['Volume: 4 Liters', 'Type: Liquid', 'Usage: Multi-surface disinfection'], specs_ar: ['الحجم: 4 لتر', 'النوع: سائل', 'الاستخدام: تطهير متعدد الأسطح'] }
            ]
        },
        {
            id: 'mobi-disinfectant-fruits',
            name_en: 'Mobi Fruits Disinfectant',
            name_ar: 'مطهر موبي فواكة',
            description_en: 'Large volume disinfectant with a pleasant fruit scent, ideal for large areas and industrial use.',
            description_ar: 'مطهر بحجم كبير برائحة فواكه منعشة، مثالي للمساحات الكبيرة والاستخدام الصناعي.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Mobi+Fruits+Disinfectant'],
            variants: [
                { size_en: '20 Liters', size_ar: '20 لتر', specs_en: ['Volume: 20 Liters', 'Scent: Fruits', 'Usage: Large area disinfection'], specs_ar: ['الحجم: 20 لتر', 'الرائحة: فواكه', 'الاستخدام: تطهير المساحات الكبيرة'] }
            ]
        },
        {
            id: 'mobi-disinfectant-pine',
            name_en: 'Mobi Pine Disinfectant',
            name_ar: 'مطهر موبي صنوبر',
            description_en: 'Pine-scented disinfectant for deep cleaning and germ protection, suitable for various surfaces.',
            description_ar: 'مطهر برائحة الصنوبر للتنظيف العميق والحماية من الجراثيم، مناسب لمختلف الأسطح.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Mobi+Pine+Disinfectant'],
            variants: [
                { size_en: '20 Liters', size_ar: '20 لتر', specs_en: ['Volume: 20 Liters', 'Scent: Pine', 'Usage: Large area disinfection'], specs_ar: ['الحجم: 20 لتر', 'الرائحة: صنوبر', 'الاستخدام: تطهير المساحات الكبيرة'] }
            ]
        },
        {
            id: 'mobi-disinfectant-rose',
            name_en: 'Mobi Rose Disinfectant',
            name_ar: 'مطهر موبي ورد',
            description_en: 'Rose-scented disinfectant for a pleasant aroma while ensuring effective germ killing.',
            description_ar: 'مطهر برائحة الورد لعطر لطيف مع ضمان قتل الجراثيم بفعالية.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Mobi+Rose+Disinfectant'],
            variants: [
                { size_en: '20 Liters', size_ar: '20 لتر', specs_en: ['Volume: 20 Liters', 'Scent: Rose', 'Usage: Large area disinfection'], specs_ar: ['الحجم: 20 لتر', 'الرائحة: ورد', 'الاستخدام: تطهير المساحات الكبيرة'] }
            ]
        },
        {
            id: 'clorox-bleach',
            name_en: 'Clorox Bleach',
            name_ar: 'كلوركس مبيض',
            description_en: 'Powerful bleach for whitening clothes and disinfecting surfaces, leaving them bright and hygienic.',
            description_ar: 'مبيض قوي لتبييض الملابس وتطهير الأسطح، يتركها مشرقة وصحية.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Clorox+Bleach'],
            variants: [
                { size_en: '470 ml', size_ar: '470 مل', specs_en: ['Volume: 470 ml', 'Type: Liquid', 'Usage: Bleaching, Disinfection'], specs_ar: ['الحجم: 470 مل', 'النوع: سائل', 'الاستخدام: تبييض، تطهير'] },
                { size_en: '950 ml', size_ar: '950 مل', specs_en: ['Volume: 950 ml', 'Type: Liquid', 'Usage: Bleaching, Disinfection'], specs_ar: ['الحجم: 950 ml', 'النوع: سائل', 'الاستخدام: تبييض، تطهير'] },
                { size_en: '3.78 Liters', size_ar: '3.78 لتر', specs_en: ['Volume: 3.78 Liters', 'Type: Liquid', 'Usage: Bleaching, Disinfection'], specs_ar: ['الحجم: 3.78 لتر', 'النوع: سائل', 'الاستخدام: تبييض، تطهير'] }
            ]
        },
        {
            id: 'clorox-floor-cleaner-lavender',
            name_en: 'Clorox Floor Cleaner Lavender Scent',
            name_ar: 'كلوركس منظف الأرضيات برائحة اللافندر',
            description_en: 'Floor cleaner with a soothing lavender scent, effectively cleans and leaves a lasting fragrance.',
            description_ar: 'منظف أرضيات برائحة اللافندر المهدئة، ينظف بفعالية ويترك عطرًا يدوم طويلاً.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Clorox+Lavender+Floor'],
            variants: [
                { size_en: '3 Liters', size_ar: '3 لتر', specs_en: ['Volume: 3 Liters', 'Scent: Lavender', 'Usage: Floor cleaning'], specs_ar: ['الحجم: 3 لتر', 'الرائحة: لافندر', 'الاستخدام: تنظيف الأرضيات'] }
            ]
        },
        {
            id: 'clorox-floor-cleaner-sea-breeze',
            name_en: 'Clorox Floor Cleaner Sea Breeze Scent',
            name_ar: 'كلوركس منظف الأرضيات برائحة نسيم البحر',
            description_en: 'Invigorating sea breeze scented floor cleaner for a fresh and clean home.',
            description_ar: 'منظف أرضيات برائحة نسيم البحر المنعشة لمنزل نظيف ومنعش.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Clorox+Sea+Breeze+Floor'],
            variants: [
                { size_en: '3 Liters', size_ar: '3 لتر', specs_en: ['Volume: 3 Liters', 'Scent: Sea Breeze', 'Usage: Floor cleaning'], specs_ar: ['الحجم: 3 لتر', 'الرائحة: نسيم البحر', 'الاستخدام: تنظيف الأرضيات'] }
            ]
        }
    ],
    'detergents': [
        {
            id: 'tide-washing-powder',
            name_en: 'Tide Washing Powder',
            name_ar: 'مسحوق غسيل تايد',
            description_en: 'High-performance washing powder that delivers outstanding cleaning results and a fresh scent.',
            description_ar: 'مسحوق غسيل عالي الأداء يوفر نتائج تنظيف ممتازة ورائحة منعشة.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Tide+Washing+Powder'],
            variants: [
                { size_en: '10 kg', size_ar: '10 كيلو', specs_en: ['Weight: 10 kg', 'Type: Powder', 'Usage: Laundry'], specs_ar: ['الوزن: 10 كيلو', 'النوع: مسحوق', 'الاستخدام: غسيل الملابس'] },
                { size_en: '21 kg', size_ar: '21 كيلو', specs_en: ['Weight: 21 kg', 'Type: Powder', 'Usage: Laundry'], specs_ar: ['الوزن: 21 كيلو', 'النوع: مسحوق', 'الاستخدام: غسيل الملابس'] }
            ]
        },
        {
            id: 'ariel-washing-powder',
            name_en: 'Ariel Washing Powder',
            name_ar: 'مسحوق غسيل اريال',
            description_en: 'Advanced washing powder for brilliant cleaning and stain removal, even in tough conditions.',
            description_ar: 'مسحوق غسيل متطور لتنظيف رائع وإزالة البقع، حتى في الظروف الصعبة.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Ariel+Washing+Powder'],
            variants: [
                { size_en: '5 kg', size_ar: '5 كيلو', specs_en: ['Weight: 5 kg', 'Type: Powder', 'Usage: Laundry'], specs_ar: ['الوزن: 5 كيلو', 'النوع: مسحوق', 'الاستخدام: غسيل الملابس'] }
            ]
        },
        {
            id: 'mobi-washing-powder',
            name_en: 'Mobi Washing Powder',
            name_ar: 'مسحوق غسيل موبي',
            description_en: 'Effective washing powder for everyday laundry, providing clean and fresh clothes.',
            description_ar: 'مسحوق غسيل فعال للغسيل اليومي، يوفر ملابس نظيفة ومنعشة.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Mobi+Washing+Powder'],
            variants: [
                { size_en: '10 kg', size_ar: '10 كيلو', specs_en: ['Weight: 10 kg', 'Type: Powder', 'Usage: Laundry'], specs_ar: ['الوزن: 10 كيلو', 'النوع: مسحوق', 'الاستخدام: غسيل الملابس'] }
            ]
        },
        {
            id: 'tide-regular-soap',
            name_en: 'Tide Regular Soap',
            name_ar: 'صابون تايد عادي',
            description_en: 'Classic Tide soap for hand washing and tough stains, known for its powerful cleaning action.',
            description_ar: 'صابون تايد الكلاسيكي للغسيل اليدوي والبقع الصعبة، معروف بقوته في التنظيف.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Tide+Regular+Soap'],
            variants: [
                { size_en: '5 kg', size_ar: '5 كيلو', specs_en: ['Weight: 5 kg', 'Type: Bar/Solid Soap', 'Usage: Hand wash, Stain treatment'], specs_ar: ['الوزن: 5 كيلو', 'النوع: صابون صلب', 'الاستخدام: غسيل يدوي، معالجة البقع'] }
            ]
        },
        {
            id: 'extra-automatic-soap',
            name_en: 'Extra Automatic Soap',
            name_ar: 'صابون اكسترا اوتوماتيك',
            description_en: 'High-efficiency automatic washing machine soap, designed for optimal performance without excessive foam.',
            description_ar: 'صابون غسالة أوتوماتيكية عالي الكفاءة، مصمم لأداء أمثل بدون رغوة زائدة.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Extra+Automatic+Soap'],
            variants: [
                { size_en: '25 kg', size_ar: '25 كيلو', specs_en: ['Weight: 25 kg', 'Type: Powder', 'Usage: Automatic washing machines'], specs_ar: ['الوزن: 25 كيلو', 'النوع: مسحوق', 'الاستخدام: غسالات أوتوماتيكية'] }
            ]
        },
        {
            id: 'extra-regular-soap',
            name_en: 'Extra Regular Soap',
            name_ar: 'صابون اكسترا عادي',
            description_en: 'Versatile regular soap for general laundry and household cleaning needs.',
            description_ar: 'صابون عادي متعدد الاستخدامات للغسيل العام واحتياجات التنظيف المنزلية.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Extra+Regular+Soap'],
            variants: [
                { size_en: '25 kg', size_ar: '25 كيلو', specs_en: ['Weight: 25 kg', 'Type: Powder', 'Usage: Hand wash, General cleaning'], specs_ar: ['الوزن: 25 كيلو', 'النوع: مسحوق', 'الاستخدام: غسيل يدوي، تنظيف عام'] }
            ]
        },
        {
            id: 'persil-abaya-shampoo',
            name_en: 'Persil Abaya Shampoo',
            name_ar: 'شامبو برسيل للعبايات',
            description_en: 'Specially formulated shampoo to care for abayas, preserving their color and fabric quality.',
            description_ar: 'شامبو مصمم خصيصًا للعناية بالعبايات، يحافظ على لونها وجودة قماشها.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Persil+Abaya+Shampoo'],
            variants: [
                { size_en: '2.9 L + 900 ml Free', size_ar: '2.9 لتر + 900 مل مجاناً', specs_en: ['Volume: 2.9 L + 900 ml', 'Type: Liquid', 'Usage: Abaya washing'], specs_ar: ['الحجم: 2.9 لتر + 900 مل', 'النوع: سائل', 'الاستخدام: غسيل العبايات'] }
            ]
        },
        {
            id: 'persil-baby-clothes-wash',
            name_en: 'Persil Baby Clothes Wash',
            name_ar: 'غسيل ملابس اطفال برسيل',
            description_en: 'Gentle and effective wash for baby clothes, ensuring cleanliness while being soft on delicate skin.',
            description_ar: 'غسيل لطيف وفعال لملابس الأطفال، يضمن النظافة ويكون لطيفًا على البشرة الحساسة.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Persil+Baby+Wash'],
            variants: [
                { size_en: '3 L + 1 L Free', size_ar: '3 لتر + 1 لتر مجاناً', specs_en: ['Volume: 3 L + 1 L', 'Type: Liquid', 'Usage: Baby clothes washing'], specs_ar: ['الحجم: 3 لتر + 1 لتر', 'النوع: سائل', 'الاستخدام: غسيل ملابس الأطفال'] }
            ]
        },
        {
            id: 'persil-oud-washing-gel',
            name_en: 'Persil Oud Washing Gel',
            name_ar: 'جل غسيل برسيل عود',
            description_en: 'Washing gel with a luxurious oud scent, providing deep cleaning and a lasting fragrance.',
            description_ar: 'جل غسيل برائحة العود الفاخرة، يوفر تنظيفًا عميقًا وعطرًا يدوم طويلاً.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Persil+Oud+Gel'],
            variants: [
                { size_en: '950 ml + 950 ml Free', size_ar: '950 مل + 950 مل مجاناً', specs_en: ['Volume: 950 ml + 950 ml', 'Type: Gel', 'Usage: Laundry'], specs_ar: ['الحجم: 950 مل + 950 مل', 'النوع: جل', 'الاستخدام: غسيل الملابس'] }
            ]
        },
        {
            id: 'downy-fabric-softener',
            name_en: 'Downy Fabric Softener',
            name_ar: 'ملين ملابس داوني',
            description_en: 'Fabric softener that leaves clothes incredibly soft, fresh, and easy to iron, with a variety of delightful scents.',
            description_ar: 'ملين أقمشة يترك الملابس ناعمة بشكل لا يصدق، ومنعشة، وسهلة الكي، مع مجموعة متنوعة من الروائح الرائعة.',
            images: [
                'https://placehold.co/600x400/1a1a1a/00ff88?text=Downy+Main',
                'https://placehold.co/600x400/1a1a1a/00ff88?text=Downy+Valley+Breeze',
                'https://placehold.co/600x400/1a1a1a/00ff88?text=Downy+Relaxing+Sensation',
                'https://placehold.co/600x400/1a1a1a/00ff88?text=Downy+Incense',
                'https://placehold.co/600x400/1a1a1a/00ff88?text=Downy+Dream+Garden'
            ],
            variants: [
                { size_en: '1 Liter', size_ar: '1 لتر', specs_en: ['Volume: 1 Liter', 'Scent: Original', 'Usage: Fabric softening'], specs_ar: ['الحجم: 1 لتر', 'الرائحة: الأصلي', 'الاستخدام: تليين الأقمشة'] },
                { size_en: '2 Liters', size_ar: '2 لتر', specs_en: ['Volume: 2 Liters', 'Scent: Original', 'Usage: Fabric softening'], specs_ar: ['الحجم: 2 لتر', 'الرائحة: الأصلي', 'الاستخدام: تليين الأقمشة'] },
                { size_en: '1 Liter (Valley Breeze)', size_ar: '1 لتر (نسيم الوادي)', specs_en: ['Volume: 1 Liter', 'Scent: Valley Breeze', 'Usage: Fabric softening'], specs_ar: ['الحجم: 1 لتر', 'الرائحة: نسيم الوادي', 'الاستخدام: تليين الأقمشة'] },
                { size_en: '1 Liter (Relaxing Sensation)', size_ar: '1 لتر (إحساس الاسترخاء)', specs_en: ['Volume: 1 Liter', 'Scent: Relaxing Sensation', 'Usage: Fabric softening'], specs_ar: ['الحجم: 1 لتر', 'الرائحة: إحساس الاسترخاء', 'الاستخدام: تليين الأقمشة'] },
                { size_en: '1 Liter (Incense)', size_ar: '1 لتر (بخور)', specs_en: ['Volume: 1 Liter', 'Scent: Incense', 'Usage: Fabric softening'], specs_ar: ['الحجم: 1 لتر', 'الرائحة: بخور', 'الاستخدام: تليين الأقمشة'] },
                { size_en: '1 Liter (Dream Garden)', size_ar: '1 لتر (حديقة الأحلام)', specs_en: ['Volume: 1 Liter', 'Scent: Dream Garden', 'Usage: Fabric softening'], specs_ar: ['الحجم: 1 لتر', 'الرائحة: حديقة الأحلام', 'الاستخدام: تليين الأقمشة'] }
            ]
        },
        {
            id: 'finish-stain-remover',
            name_en: 'Finish Stain Remover',
            name_ar: 'فنش مزيل بقع',
            description_en: 'Powerful stain remover that effectively tackles tough stains on various fabrics, ensuring spotless results.',
            description_ar: 'مزيل بقع قوي يعالج البقع الصعبة بفعacité على مختلف الأقمشة، مما يضمن نتائج خالية من البقع.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Finish+Stain+Remover'],
            variants: [
                { size_en: '900 ml', size_ar: '900 مل', specs_en: ['Volume: 900 ml', 'Type: Liquid', 'Usage: Stain removal'], specs_ar: ['الحجم: 900 مل', 'النوع: سائل', 'الاستخدام: إزالة البقع'] }
            ]
        },
        {
            id: 'finish-multi-power-clothes',
            name_en: 'Finish Multi-Power for Clothes',
            name_ar: 'فنش القوة المتعددة للملابس',
            description_en: 'Multi-power formula for clothes that not only removes stains but also brightens and freshens fabrics.',
            description_ar: 'تركيبة متعددة القوى للملابس لا تزيل البقع فحسب، بل تضيء الأقمشة وتنعشها.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Finish+Multi-Power'],
            variants: [
                { size_en: '1000 grams', size_ar: '1000 جرام', specs_en: ['Weight: 1000 grams', 'Type: Powder', 'Usage: Stain removal, Fabric booster'], specs_ar: ['الوزن: 1000 جرام', 'النوع: مسحوق', 'الاستخدام: إزالة البقع، معزز للأقمشة'] }
            ]
        },
        {
            id: 'finish-white-clothes',
            name_en: 'Finish White Clothes',
            name_ar: 'فنش للملابس البيضاء',
            description_en: 'Specialized formula for white clothes, ensuring dazzling whiteness and effective stain removal.',
            description_ar: 'تركيبة متخصصة للملابس البيضاء، تضمن بياضًا ناصعًا وإزالة فعالة للبقع.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Finish+White+Clothes'],
            variants: [
                { size_en: '1.8 Liters', size_ar: '1.8 لتر', specs_en: ['Volume: 1.8 Liters', 'Type: Liquid', 'Usage: White clothes cleaning'], specs_ar: ['الحجم: 1.8 لتر', 'النوع: سائل', 'الاستخدام: تنظيف الملابس البيضاء'] }
            ]
        },
        {
            id: 'finish-white-clothes-stain-remover',
            name_en: 'Finish White Clothes Stain Remover',
            name_ar: 'فنش مزيل بقع للملابس البيضاء',
            description_en: 'Targeted stain remover for white garments, effectively lifting tough stains without damaging fabric.',
            description_ar: 'مزيل بقع مستهدف للملابس البيضاء، يزيل البقع الصعبة بفعالية دون الإضرار بالقماش.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Finish+White+Stain+Remover'],
            variants: [
                { size_en: '450 grams', size_ar: '450 جرام', specs_en: ['Weight: 450 grams', 'Type: Powder', 'Usage: White clothes stain removal'], specs_ar: ['الوزن: 450 جرام', 'النوع: مسحوق', 'الاستخدام: إزالة بقع الملابس البيضاء'] }
            ]
        },
        {
            id: 'mobi-clothes-shampoo',
            name_en: 'Mobi Clothes Shampoo',
            name_ar: 'موبي شامبو ملابس',
            description_en: 'Liquid detergent for clothes, effective in cleaning and maintaining fabric quality.',
            description_ar: 'سائل غسيل للملابس، فعال في التنظيف والحفاظ على جودة الأقمشة.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Mobi+Clothes+Shampoo'],
            variants: [
                { size_en: '20 Liters', size_ar: '20 لتر', specs_en: ['Volume: 20 Liters', 'Usage: Clothes washing'], specs_ar: ['الحجم: 20 لتر', 'الاستخدام: غسيل الملابس'] }
            ]
        },
        {
            id: 'al-wazir-shredded-soap',
            name_en: 'Al-Wazir Shredded Soap',
            name_ar: 'صابون الوزير مبشور',
            description_en: 'Traditional shredded soap, versatile for various cleaning purposes, known for its gentle yet effective cleaning.',
            description_ar: 'صابون مبشور تقليدي، متعدد الاستخدامات لأغراض التنظيف المختلفة، معروف بتنظيفه اللطيف والفعال.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Al-Wazir+Shredded+Soap'],
            variants: [
                { size_en: '900 Liters', size_ar: '900 لتر', specs_en: ['Volume: 900 Liters', 'Type: Shredded Soap', 'Usage: Multipurpose cleaning'], specs_ar: ['الحجم: 900 لتر', 'النوع: صابون مبشور', 'الاستخدام: تنظيف متعدد الأغراض'] }
            ]
        },
        {
            id: 'one-touch-carpet-shampoo',
            name_en: 'One Touch Carpet Shampoo',
            name_ar: 'شامبو سجاد ون تاتش',
            description_en: 'Carpet shampoo designed for deep cleaning and refreshing carpets, removing dirt and odors effectively.',
            description_ar: 'شامبو سجاد مصمم لتنظيف السجاد بعمق وإنعاشه، يزيل الأوساخ والروائح بفعacité des sols.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=One+Touch+Carpet+Shampoo'],
            variants: [
                { size_en: '1 Liter', size_ar: '1 لتر', specs_en: ['Volume: 1 Liter', 'Type: Liquid', 'Usage: Carpet cleaning'], specs_ar: ['الحجم: 1 لتر', 'النوع: سائل', 'الاستخدام: تنظيف السجاد'] }
            ]
        }
    ],
    'safety-products': [
        {
            id: 'vinyl-gloves',
            name_en: 'Vinyl Gloves',
            name_ar: 'قفازات فنيل',
            description_en: 'Disposable vinyl gloves for examination and general protection, providing a comfortable fit and excellent tactile sensitivity.',
            description_ar: 'قفازات فينيل للاستخدام مرة واحدة للفحص والحماية العامة، توفر ملاءمة مريحة وحساسية لمس ممتازة.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Vinyl+Gloves'],
            variants: [
                { size_en: 'Small (80 pieces)', size_ar: 'صغير (80 حبة)', specs_en: ['Material: Vinyl', 'Size: Small', 'Quantity: 80 pieces', 'Usage: Examination, General protection'], specs_ar: ['المادة: فينيل', 'الحجم: صغير', 'الكمية: 80 حبة', 'الاستخدام: الفحص، الحماية العامة'] },
                { size_en: 'Medium (80 pieces)', size_ar: 'متوسط (80 حبة)', specs_en: ['Material: Vinyl', 'Size: Medium', 'Quantity: 80 pieces', 'Usage: Examination, General protection'], specs_ar: ['المادة: فينيل', 'الحجم: متوسط', 'الكمية: 80 حبة', 'الاستخدام: الفحص، الحماية العامة'] },
                { size_en: 'Large (80 pieces)', size_ar: 'كبير (80 حبة)', specs_en: ['Material: Vinyl', 'Size: Large', 'Quantity: 80 pieces', 'Usage: Examination, General protection'], specs_ar: ['المادة: فينيل', 'الحجم: كبير', 'الكمية: 80 حبة', 'الاستخدام: الفحص، الحماية العامة'] },
                { size_en: 'XL (80 pieces)', size_ar: 'كبير جداً (80 حبة)', specs_en: ['Material: Vinyl', 'Size: XL', 'Quantity: 80 pieces', 'Usage: Examination, General protection'], specs_ar: ['المادة: فينيل', 'الحجم: كبير جداً', 'الكمية: 80 حبة', 'الاستخدام: الفحص، الحماية العامة'] }
            ]
        },
        {
            id: 'plastic-gloves',
            name_en: 'Plastic Gloves',
            name_ar: 'قفازات بلاستيك',
            description_en: 'Lightweight and convenient plastic gloves for various tasks, ensuring hygiene and protection.',
            description_ar: 'قفازات بلاستيكية خفيفة الوزن ومريحة لمختلف المهام، تضمن النظافة والحماية.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Plastic+Gloves'],
            variants: [
                { size_en: 'Medium', size_ar: 'متوسط', specs_en: ['Material: Plastic', 'Size: Medium', 'Usage: Food handling, Cleaning'], specs_ar: ['المادة: بلاستيك', 'الحجم: متوسط', 'الاستخدام: التعامل مع الطعام، التنظيف'] },
                { size_en: 'Large', size_ar: 'كبير', specs_en: ['Material: Plastic', 'Size: Large', 'Usage: Food handling, Cleaning'], specs_ar: ['المادة: بلاستik', 'الحجم: كبير', 'الاستخدام: التعامل مع الطعام، التنظيف'] },
                { size_en: 'XL', size_ar: 'كبير جداً', specs_en: ['Material: Plastic', 'Size: XL', 'Usage: Food handling, Cleaning'], specs_ar: ['المادة: بلاستيك', 'الحجم: كبير جداً', 'الاستخدام: التعامل مع الطعام، التنظيف'] }
            ]
        },
        {
            id: 'blue-face-mask',
            name_en: 'Blue Face Mask',
            name_ar: 'كمامات زرقاء',
            description_en: 'Disposable blue face masks for respiratory protection, comfortable and breathable.',
            description_ar: 'كمامات وجه زرقاء للاستخدام مرة واحدة للحماية التنفسية، مريحة وقابلة للتنفس.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Blue+Mask'],
            variants: [
                { size_en: 'Standard', size_ar: 'قياسي', specs_en: ['Color: Blue', 'Type: Disposable', 'Usage: Respiratory protection'], specs_ar: ['اللون: أزرق', 'النوع: للاستخدام مرة واحدة', 'الاستخدام: حماية الجهاز التنفسي'] }
            ]
        },
        {
            id: 'blue-hair-net',
            name_en: 'Blue Hair Net',
            name_ar: 'غطاء رأس أزرق',
            description_en: 'Disposable blue hair nets for hygiene in food service, medical, and industrial settings.',
            description_ar: 'أغطية رأس زرقاء للاستخدام مرة واحدة للنظافة في خدمات الطعام، البيئات الطبية، والصناعية.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Blue+Hair+Net'],
            variants: [
                { size_en: 'Standard', size_ar: 'قياسي', specs_en: ['Color: Blue', 'Type: Disposable', 'Usage: Hygiene, Hair containment'], specs_ar: ['اللون: أزرق', 'النوع: للاستخدام مرة واحدة', 'الاستخدام: النظافة، تغطية الشعر'] }
            ]
        },
        {
            id: 'black-face-mask',
            name_en: 'Black Face Mask',
            name_ar: 'كمامات سوداء',
            description_en: 'Stylish and protective black face masks, ideal for daily use.',
            description_ar: 'كمامات وجه سوداء أنيقة وواقية، مثالية للاستخدام اليومي.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Black+Mask'],
            variants: [
                { size_en: 'Standard', size_ar: 'قياسي', specs_en: ['Color: Black', 'Type: Disposable', 'Usage: Respiratory protection'], specs_ar: ['اللون: أسود', 'النوع: للاستخدام مرة واحدة', 'الاستخدام: حماية الجهاز التنفسي'] }
            ]
        },
        {
            id: 'black-hair-net',
            name_en: 'Black Hair Net',
            name_ar: 'غطاء رأس أسود',
            description_en: 'Disposable black hair nets for hygiene and a professional appearance.',
            description_ar: 'أغطية رأس سوداء للاستخدام مرة واحدة للنظافة والمظهر الاحتراffel.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Black+Hair+Net'],
            variants: [
                { size_en: 'Standard', size_ar: 'قياسي', specs_en: ['Color: Black', 'Type: Disposable', 'Usage: Hygiene, Hair containment'], specs_ar: ['اللون: أسود', 'النوع: للاستخدام مرة واحدة', 'الاستخدام: النظافة، تغطية الشعر'] }
            ]
        },
        {
            id: 'plastic-apron',
            name_en: 'Plastic Apron',
            name_ar: 'مريول بلاستيك',
            description_en: 'Disposable plastic aprons for protection against spills and splashes, ideal for various tasks.',
            description_ar: 'مرايل بلاستيكية للاستخدام مرة واحدة للحماية من الانسكابات والرذاذ، مثالية لمختلف المهام.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Plastic+Apron'],
            variants: [
                { size_en: 'Standard', size_ar: 'قياسي', specs_en: ['Material: Plastic', 'Type: Disposable', 'Usage: Protection against spills'], specs_ar: ['المادة: بلاستيك', 'النوع: للاستخدام مرة واحدة', 'الاستخدام: الحماية من الانسكابات'] }
            ]
        },
        {
            id: 'plastic-sleeve-cover',
            name_en: 'Plastic Sleeve Cover',
            name_ar: 'غطاء زراع بلاستيك',
            description_en: 'Disposable plastic sleeve covers for arm protection in various work environments.',
            description_ar: 'أغطية أذرع بلاستيكية للاستخدام مرة واحدة لحماية الذراعين في بيئات العمل المختلفة.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Plastic+Sleeve+Cover'],
            variants: [
                { size_en: 'Standard', size_ar: 'قياسي', specs_en: ['Material: Plastic', 'Type: Disposable', 'Usage: Arm protection'], specs_ar: ['المادة: بلاستيك', 'النوع: للاستخدام مرة واحدة', 'الاستخدام: حماية الذراعين'] }
            ]
        },
        {
            id: 'hand-sanitizer',
            name_en: 'Hand Sanitizer',
            name_ar: 'معقم',
            description_en: 'Effective hand sanitizer for quick and convenient germ killing, available in various sizes.',
            description_ar: 'معقم يدين فعال لقتل الجراثيم بسرعة وسهولة، متوفر بأحجام متنوعة.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Hand+Sanitizer'],
            variants: [
                { size_en: '500 ml', size_ar: '500 مل', specs_en: ['Type: Gel/Liquid', 'Alcohol Content: Varies', 'Volume: 500 ml', 'Usage: Hand hygiene'], specs_ar: ['النوع: جل/سائل', 'محتol الكحول: متنوع', 'الحجم: 500 مل', 'الاستخدام: نظافة اليدين'] },
                { size_en: '1 Liter', size_ar: '1 لتر', specs_en: ['Type: Gel/Liquid', 'Alcohol Content: Varies', 'Volume: 1 Liter', 'Usage: Hand hygiene'], specs_ar: ['النوع: جل/سائل', 'محتوى الكحول: متنوع', 'الحجم: 1 لتر', 'الاستخدام: نظافة اليدين'] }
            ]
        }
    ],
    'paper-products': [
        {
            id: 'coffee-cups',
            name_en: 'Coffee Cups',
            name_ar: 'أكواب قهوة',
            description_en: 'Disposable paper coffee cups, perfect for hot beverages on the go.',
            description_ar: 'أكواب قهوة ورقية للاستخدام مرة واحدة، مثالية للمشروبات الساخنة أثناء التنقل.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Coffee+Cups'],
            variants: [
                { size_en: '8 oz', size_ar: '8 اونز', specs_en: ['Material: Paper', 'Usage: Hot beverages', 'Size: 8 oz'], specs_ar: ['المادة: ورق', 'الاستخدام: مشروبات ساخنة', 'الحجم: 8 اونز'] },
                { size_en: '12 oz', size_ar: '12 اونز', specs_en: ['Material: Paper', 'Usage: Hot beverages', 'Size: 12 oz'], specs_ar: ['المادة: ورق', 'الاستخدام: مشروبات ساخنة', 'الحجم: 12 اونز'] }
            ]
        },
        {
            id: 'paper-roll',
            name_en: 'Paper Roll',
            name_ar: 'رول ورقية',
            description_en: 'Versatile paper rolls for various uses, from cleaning to packaging.',
            description_ar: 'لفائف ورقية متعددة الاستخدامات، من التنظيف إلى التعبئة والتغليف.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Paper+Roll'],
            variants: [
                { size_en: 'Standard', size_ar: 'قياسي', specs_en: ['Material: Paper', 'Usage: Cleaning, Packaging'], specs_ar: ['المادة: ورق', 'الاستخدام: التنظيف، التعبئة والتغليف'] }
            ]
        },
        {
            id: 'paper-cups',
            name_en: 'Paper Cups',
            name_ar: 'اكواب ورقية',
            description_en: 'Disposable paper cups for cold drinks and general use, eco-friendly option.',
            description_ar: 'أكواب ورقية للاستخدام مرة واحدة للمشروبات الباردة والاستخدام العام، خيار صديق للبيئة.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Paper+Cups'],
            variants: [
                { size_en: '8 oz', size_ar: '8 اونز', specs_en: ['Material: Paper', 'Usage: Cold beverages', 'Size: 8 oz'], specs_ar: ['المادة: ورق', 'الاستخدام: مشروبات باردة', 'الحجم: 8 اونز'] },
                { size_en: '16 oz', size_ar: '16 اونز', specs_en: ['Material: Paper', 'Usage: Cold beverages', 'Size: 16 oz'], specs_ar: ['المادة: ورق', 'الاستخدام: مشروبات باردة', 'الحجم: 16 اونز'] }
            ]
        },
        {
            id: 'cup-holder',
            name_en: 'Cup Holder',
            name_ar: 'حامل اكواب',
            description_en: 'Convenient cup holders for carrying multiple beverages safely.',
            description_ar: 'حوامل أكواب مريحة لحمل عدة مشروبات بأمان.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Cup+Holder'],
            variants: [
                { size_en: 'Standard', size_ar: 'قياسي', specs_en: ['Material: Cardboard', 'Capacity: Multiple cups', 'Usage: Beverage transport'], specs_ar: ['المادة: كرتون', 'السعة: عدة أكواب', 'الاستخدام: نقل المشروبات'] }
            ]
        },
        {
            id: 'plastic-glass',
            name_en: 'Plastic Glass',
            name_ar: 'كاسات بلاستيك',
            description_en: 'Durable and clear plastic glasses for cold drinks, ideal for events.',
            description_ar: 'كاسات بلاستيكية متينة وشفافة للمشروبات الباردة، مثالية للمناسبات.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Plastic+Glass'],
            variants: [
                { size_en: '9 oz', size_ar: '9 اونز', specs_en: ['Material: Plastic', 'Usage: Cold beverages', 'Size: 9 oz'], specs_ar: ['المادة: بلاستيك', 'الاستخدام: مشروبات باردة', 'الحجم: 9 اونز'] },
                { size_en: '12 oz', size_ar: '12 اونز', specs_en: ['Material: Plastic', 'Usage: Cold beverages', 'Size: 12 oz'], specs_ar: ['المادة: بلاستيك', 'الاستخدام: مشروبات باردة', 'الحجم: 12 اونز'] }
            ]
        },
        {
            id: 'auto-cut-tissues',
            name_en: 'Auto Cut Tissues',
            name_ar: 'مناديل أوتوكات',
            description_en: 'High-quality auto-cut tissues for dispensers, ensuring hygiene and controlled usage.',
            description_ar: 'مناديل أوتوكات عالية الجودة للموزعات، تضمن النظافة والاستخدام المتحكم به.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Auto+Cut+Tissues'],
            variants: [
                { size_en: 'Standard roll', size_ar: 'رول قياسي', specs_en: ['Type: Roll', 'Usage: Auto dispenser', 'Material: Paper'], specs_ar: ['النوع: رول', 'الاستخدام: موزع أوتوماتيكي', 'المادة: ورق'] }
            ]
        },
        {
            id: 'white-table-napkins',
            name_en: 'White Table Napkins',
            name_ar: 'مناديل سفرة بيضاء',
            description_en: 'Soft and absorbent white table napkins, perfect for dining and events.',
            description_ar: 'مناديل سفرة بيضاء ناعمة وممتصة، مثالية لتناول الطعام والمناسبات.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Table+Napkins'],
            variants: [
                { size_en: 'Standard pack', size_ar: 'عبوة قياسية', specs_en: ['Color: White', 'Material: Paper', 'Usage: Dining, Events'], specs_ar: ['اللون: أبيض', 'المادة: ورق', 'الاستخدام: تناول الطعام، المناسبات'] }
            ]
        },
        {
            id: 'paper-bags',
            name_en: 'Paper Bags',
            name_ar: 'أكياس ورقية',
            description_en: 'Durable paper bags for various uses, including shopping and packaging.',
            description_ar: 'أكياس ورقية متينة لمختلف الاستخدامات، بما في ذلك التسوق والتعبئة والتغليف.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Paper+Bags'],
            variants: [
                { size_en: 'Small', size_ar: 'صغير', specs_en: ['Material: Paper', 'Usage: Shopping, Packaging', 'Size: Small'], specs_ar: ['المادة: ورق', 'الاستخدام: التسوق، التعبئة والتغليف', 'الحجم: صغير'] },
                { size_en: 'Medium', size_ar: 'متوسط', specs_en: ['Material: Paper', 'Usage: Shopping, Packaging', 'Size: Medium'], specs_ar: ['المادة: ورق', 'الاستخدام: التسوق، التعبئة والتغليف', 'الحجم: متوسط'] },
                { size_en: 'Large', size_ar: 'كبير', specs_en: ['Material: Paper', 'Usage: Shopping, Packaging', 'Size: Large'], specs_ar: ['المادة: ورق', 'الاستخدام: التسوق، التعبئة والتغليف', 'الحجم: كبير'] }
            ]
        }
    ],
    'plastics-packaging': [
        {
            id: 'cling-film-alpha-care',
            name_en: 'Cling Film Alpha Care',
            name_ar: 'رول تغليف الفا كير',
            description_en: 'High-quality cling film for food wrapping and preservation, ensuring freshness.',
            description_ar: 'فيلم تغليف عالي الجودة لتغليف الطعام وحفظه، يضمن النضارة.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Cling+Film'],
            variants: [
                { size_en: '45 cm, 5 kg', size_ar: '45 سم، 5 كيلو', specs_en: ['Width: 45 cm', 'Weight: 5 kg', 'Usage: Food wrapping, Preservation'], specs_ar: ['العرض: 45 سم', 'الوزن: 5 كيلو', 'الاستخدام: تغليف الطعام، الحفظ'] }
            ]
        },
        {
            id: 'trash-bags-10kg',
            name_en: 'Trash Bags 10kg',
            name_ar: 'اكياس بلدية 10 كيلو',
            description_en: 'Durable trash bags for household and commercial waste, available in various sizes and strengths.',
            description_ar: 'أكياس قمامة متينة للنفايات المنزلية والتجارية، متوفرة بأحجام وقوى متنوعة.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Trash+Bags'],
            variants: [
                { size_en: '55 cm', size_ar: '55 سم', specs_en: ['Weight: 10 kg', 'Size: 55 cm', 'Usage: Waste disposal'], specs_ar: ['الوزن: 10 كيلو', 'الحجم: 55 سم', 'الاستخدام: التخلص من النفايات'] },
                { size_en: '70 cm', size_ar: '70 سم', specs_en: ['Weight: 10 kg', 'Size: 70 cm', 'Usage: Waste disposal'], specs_ar: ['الوزن: 10 كيلو', 'الحجم: 70 سم', 'الاستخدام: التخلص من النفايات'] },
                { size_en: '90 cm', size_ar: '90 سم', specs_en: ['Weight: 10 kg', 'Size: 90 cm', 'Usage: Waste disposal'], specs_ar: ['الوزن: 10 كيلو', 'الحجم: 90 سم', 'الاستخدام: التخلص من النفايات'] }
            ]
        },
        {
            id: 'table-cover',
            name_en: 'Table Cover',
            name_ar: 'مفارش سفرة',
            description_en: 'Disposable table covers for events and daily use, protecting surfaces and enhancing aesthetics.',
            description_ar: 'أغطية طاولات للاستخدام مرة واحدة للمناسبات والاستخدام اليومي، تحمي الأسطح وتعزز الجماليات.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Table+Cover'],
            variants: [
                { size_en: 'Standard', size_ar: 'قياسي', specs_en: ['Material: Plastic/Paper', 'Type: Disposable', 'Usage: Table protection, Events'], specs_ar: ['المادة: بلاستيك/ورق', 'النوع: للاستخدام مرة واحدة', 'الاستخدام: حماية الطاولة، المناسبات'] }
            ]
        },
        {
            id: 'hand-bags',
            name_en: 'Hand Bags',
            name_ar: 'أكياس تعليق',
            description_en: 'Convenient hand bags for various purposes, available in different sizes.',
            description_ar: 'أكياس يدوية مريحة لأغراض متنوعة، متوفرة بأحجام مختلفة.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Hand+Bags'],
            variants: [
                { size_en: 'Small', size_ar: 'صغير', specs_en: ['Material: Plastic', 'Size: Small', 'Usage: Carrying items'], specs_ar: ['المادة: بلاستيك', 'الحجم: صغير', 'الاستخدام: حمل الأشياء'] },
                { size_en: 'Medium', size_ar: 'متوسط', specs_en: ['Material: Plastic', 'Size: Medium', 'Usage: Carrying items'], specs_ar: ['المادة: بلاستيك', 'الحجم: متوسط', 'الاستخدام: حمل الأشياء'] },
                { size_en: 'Large', size_ar: 'كبير', specs_en: ['Material: Plastic', 'Size: Large', 'Usage: Carrying items'], specs_ar: ['المادة: بلاستيك', 'الحجم: كبير', 'الاستخدام: حمل الأشياء'] }
            ]
        },
        {
            id: 'aluminum-roll',
            name_en: 'Aluminum Roll',
            name_ar: 'رول قصدير',
            description_en: 'Versatile aluminum foil roll for cooking, baking, and food storage.',
            description_ar: 'لفة قصدير ألومنيوم متعددة الاستخدامات للطهي، الخبز، وتخزين الطعام.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Aluminum+Roll'],
            variants: [
                { size_en: 'Standard', size_ar: 'قياسي', specs_en: ['Material: Aluminum', 'Usage: Cooking, Baking, Food storage'], specs_ar: ['المادة: ألومنيوم', 'الاستخدام: الطهي، الخبز، تخزين الطعام'] }
            ]
        },
        {
            id: 'nylon-bags',
            name_en: 'Nylon Bags',
            name_ar: 'أكياس نايلون',
            description_en: 'Durable nylon bags for various packaging and carrying needs.',
            description_ar: 'أكياس نايلون متينة لمختلف احتياجات التعبئة والحمل.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Nylon+Bags'],
            variants: [
                { size_en: 'Small', size_ar: 'صغير', specs_en: ['Material: Nylon', 'Usage: Packaging, Carrying', 'Size: Small'], specs_ar: ['المادة: نايلون', 'الاستخدام: التعبئة والتغليف، الحمل', 'الحجم: صغير'] },
                { size_en: 'Medium', size_ar: 'متوسط', specs_en: ['Material: Nylon', 'Usage: Packaging, Carrying', 'Size: Medium'], specs_ar: ['المادة: نايلون', 'الاستخدام: التعبئة والتغليف، الحمل', 'الحجم: متوسط'] }
            ]
        }
    ],
    'disposables-cutlery': [
        {
            id: 'microwave-plates',
            name_en: 'Microwave Plates',
            name_ar: 'أطباق ميكرويف',
            description_en: 'Microwave-safe disposable plates, perfect for heating and serving meals.',
            description_ar: 'أطباق للاستخدام مرة واحدة آمنة للاستخدام في الميكروويف، مثالية لتسخين وتقديم الوجبات.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Microwave+Plates'],
            variants: [
                { size_en: 'Small', size_ar: 'صغير', specs_en: ['Material: Plastic', 'Usage: Microwave, Serving meals', 'Size: Small'], specs_ar: ['المادة: بلاستيك', 'الاستخدام: ميكروويف، تقديم الوجبات', 'الحجم: صغير'] },
                { size_en: 'Large', size_ar: 'كبير', specs_en: ['Material: Plastic', 'Usage: Microwave, Serving meals', 'Size: Large'], specs_ar: ['المادة: بلاستيك', 'الاستخدام: ميكروويف، تقديم الوجبات', 'الحجم: كبير'] }
            ]
        },
        {
            id: 'sushi-rectangle-plates',
            name_en: 'Sushi Rectangle Plates',
            name_ar: 'صحن سوشي مستطيل',
            description_en: 'Rectangular sushi plates, designed for elegant presentation of sushi and other appetizers.',
            description_ar: 'أطباق سوشي مستطيلة، مصممة لتقديم أنيق للسوشي والمقبلات الأخرى.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Sushi+Plates'],
            variants: [
                { size_en: 'Small', size_ar: 'صغير', specs_en: ['Material: Plastic', 'Shape: Rectangle', 'Usage: Sushi, Appetizers', 'Size: Small'], specs_ar: ['المادة: بلاستيك', 'الشكل: مستطيل', 'الاستخدام: سوشي، مقبلات', 'الحجم: صغير'] },
                { size_en: 'Large', size_ar: 'كبير', specs_en: ['Material: Plastic', 'Shape: Rectangle', 'Usage: Sushi, Appetizers', 'Size: Large'], specs_ar: ['المادة: بلاستيك', 'الشكل: مستطيل', 'الاستخدام: سوشي، مقبلات', 'الحجم: كبير'] }
            ]
        },
        {
            id: 'rectangle-salad-plates',
            name_en: 'Rectangle Salad Plates',
            name_ar: 'علبة سلطة مستطيلة',
            description_en: 'Rectangular salad containers, ideal for packaging and serving fresh salads.',
            description_ar: 'حاويات سلطة مستطيلة، مثالية لتعبئة وتقديم السلطات الطازجة.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Salad+Plates'],
            variants: [
                { size_en: 'Standard', size_ar: 'قياسي', specs_en: ['Material: Plastic', 'Shape: Rectangle', 'Usage: Salads, Food packaging'], specs_ar: ['المادة: بلاستيك', 'الشكل: مستطيل', 'الاستخدام: سلطات، تغليف طعام'] }
            ]
        },
        {
            id: 'disposable-forks',
            name_en: 'Disposable Forks',
            name_ar: 'شوك',
            description_en: 'Convenient disposable forks for events, picnics, and takeout meals.',
            description_ar: 'شوك للاستخدام مرة واحدة مriha للمناسبات، النزهات، ووجبات السفري.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Disposable+Forks'],
            variants: [
                { size_en: 'Standard', size_ar: 'قياسي', specs_en: ['Material: Plastic', 'Type: Disposable', 'Usage: Eating utensils'], specs_ar: ['المادة: بلاستيك', 'النوع: للاستخدام مرة واحدة', 'الاستخدام: أدوات طعام'] }
            ]
        },
        {
            id: 'disposable-spoons',
            name_en: 'Disposable Spoons',
            name_ar: 'ملاعق',
            description_en: 'Convenient disposable spoons for events, picnics, and takeout meals.',
            description_ar: 'ملاعق للاستخدام مرة واحدة مريحة للمناسبات، النزهات، ووجبات السفري.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Disposable+Spoons'],
            variants: [
                { size_en: 'Standard', size_ar: 'قياسي', specs_en: ['Material: Plastic', 'Type: Disposable', 'Usage: Eating utensils'], specs_ar: ['المادة: بلاستيك', 'النوع: للاستخدام مرة واحدة', 'الاستخدام: أدوات طعام'] }
            ]
        },
        {
            id: 'disposable-knives',
            name_en: 'Disposable Knives',
            name_ar: 'سكاكين',
            description_en: 'Convenient disposable knives for events, picnics, and takeout meals.',
            description_ar: 'سكاكين للاستخدام مرة واحدة مريحة للمناسبات، النزهات، ووجبات السفري.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Disposable+Knives'],
            variants: [
                { size_en: 'Standard', size_ar: 'قياسي', specs_en: ['Material: Plastic', 'Type: Disposable', 'Usage: Eating utensils'], specs_ar: ['المادة: بلاستيك', 'النوع: للاستخدام مرة واحدة', 'الاستخدام: أدوات طعام'] }
            ]
        }
    ],
    'air-fresheners': [
        {
            id: 'goldy-home-freshener',
            name_en: 'Goldy Home Freshener',
            name_ar: 'معطر منزلي جولدي',
            description_en: 'Premium home freshener with a long-lasting pleasant scent, perfect for living spaces.',
            description_ar: 'معطر منزلي فاخر برائحة تدوم طويلاً، مثالي للمساحات المعيشية.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Goldy+Freshener'],
            variants: [
                { size_en: '500 ml', size_ar: '500 مل', specs_en: ['Volume: 500 ml', 'Scent: Floral', 'Usage: Home, Office'], specs_ar: ['الحجم: 500 مل', 'الرائحة: زهور', 'الاستخدام: المنزل، المكتب'] }
            ]
        },
        {
            id: 'mobi-jasmine-air-freshener',
            name_en: 'Mobi Jasmine Air Freshener Spray',
            name_ar: 'معطر جو موبي بخاخ ياسمين',
            description_en: 'Aerosol air freshener with a delightful jasmine scent, quickly freshens any room.',
            description_ar: 'معطر جو بخاخ برائحة الياسمين الرائعة، ينعش أي غرفة بسرعة.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Mobi+Jasmine'],
            variants: [
                { size_en: '300 ml', size_ar: '300 مل', specs_en: ['Volume: 300 ml', 'Scent: Jasmine', 'Type: Spray'], specs_ar: ['الحجم: 300 مل', 'الرائحة: ياسمين', 'النوع: بخاخ'] }
            ]
        }
    ],
    'waste-management': [
        {
            id: 'medical-waste-bags',
            name_en: 'Medical Waste Bags',
            name_ar: 'نفايات طبي',
            description_en: 'Specialized bags for medical waste, ensuring safe and hygienic disposal. Durable and tear-resistant.',
            description_ar: 'أكياس متخصصة للنفايات الطبية، تضمن التخلص الآمن والصحي. متينة ومقاومة للتمزق.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Medical+Waste+Bags'],
            variants: [
                { size_en: '10 Gallon (10 kg)', size_ar: '10 جالون (10 كيلو)', specs_en: ['Capacity: 10 Gallon', 'Weight: 10 kg', 'Type: Medical Waste'], specs_ar: ['السعة: 10 جالون', 'الوزن: 10 كيلو', 'النوع: نفايات طبية'] },
                { size_en: '20 Gallon (10 kg)', size_ar: '20 جالون (10 كيلو)', specs_en: ['Capacity: 20 Gallon', 'Weight: 10 kg', 'Type: Medical Waste'], specs_ar: ['السعة: 20 جالون', 'الوزن: 10 كيلو', 'النوع: نفايات طبية'] }
            ]
        },
        {
            id: 'shams-waste-bags',
            name_en: 'Shams Waste Bags',
            name_ar: 'نفايات شمس',
            description_en: 'Standard waste bags for general use, strong and reliable for daily disposal needs.',
            description_ar: 'أكياس نفايات قياسية للاستخدام العام، قوية وموثوقة لاحتياجات التخلص اليومية.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Shams+Waste+Bags'],
            variants: [
                { size_en: '20 Gallon (6 kg)', size_ar: '20 جالون (6 كيلو)', specs_en: ['Capacity: 20 Gallon', 'Weight: 6 kg', 'Usage: General Waste'], specs_ar: ['السعة: 20 جالون', 'الوزن: 6 كيلو', 'الاستخدام: نفايات عامة'] }
            ]
        },
        {
            id: 'waste-bin-black',
            name_en: 'Black Waste Bin',
            name_ar: 'سطل نفايات اسود',
            description_en: 'Large capacity black waste bin, durable and suitable for commercial and industrial use.',
            description_ar: 'سلة نفايات سوداء بسعة كبيرة، متينة ومناسبة للاستخدام التجاري والصناعي.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Black+Waste+Bin'],
            variants: [
                { size_en: '60 Liters', size_ar: '60 لتر', specs_en: ['Capacity: 60 Liters', 'Color: Black', 'Material: Plastic'], specs_ar: ['السعة: 60 لتر', 'اللون: أسود', 'المادة: بلاستيك'] }
            ]
        },
        {
            id: 'cleaning-trolley',
            name_en: 'Cleaning Trolley',
            name_ar: 'عربة نظافة',
            description_en: 'Efficient cleaning trolley with a 32-liter capacity, ideal for professional cleaning tasks.',
            description_ar: 'عربة تنظيف فعالة بسعة 32 لتر، مثالية لمهام التنظيف الاحترافية.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Cleaning+Trolley'],
            variants: [
                { size_en: '32 Liters', size_ar: '32 لتر', specs_en: ['Capacity: 32 Liters', 'Wheels: Yes', 'Usage: Commercial Cleaning'], specs_ar: ['السعة: 32 لتر', 'العجلات: نعم', 'الاستخدام: تنظيف تجاري'] }
            ]
        },
        {
            id: 'floor-squeegee',
            name_en: 'Plastic Floor Squeegee',
            name_ar: 'مساحة بلاستيك ابو سهم',
            description_en: 'Durable plastic floor squeegee for effective water and liquid removal from floors.',
            description_ar: 'ممسحة أرضيات بلاستيكية متينة لإزالة الماء والسوils b efficace des sols.',
            images: ['https://placehold.co/600x400/1a1a1a/00ff88?text=Floor+Squeegee'],
            variants: [
                { size_en: '43 cm', size_ar: '43 سم', specs_en: ['Width: 43 cm', 'Material: Plastic', 'Usage: Floor drying'], specs_ar: ['العرض: 43 سم', 'المادة: بلاستيك', 'الاستخدام: تجفيف الأرضيات'] }
            ]
        }
    ]
};

export const translations = {
    en: {
        home: 'Home',
        categories: 'Categories',
        contact: 'Contact',
        heroTitle: 'Discover Our Exceptional Collection',
        heroSlogan: 'Innovation and Superior Quality at Your Fingertips',
        exploreButton: 'Explore Catalogue',
        categoriesTitle: 'Our Product Categories',
        backToCategories: 'Back to Categories',
        specificationsTitle: 'Specifications:',
        availableSizes: 'Available Sizes:',
        contactForInfo: 'Contact for more info',
        contactTitle: 'Contact Us',
        contactSlogan: 'We are here to answer all your questions.',
        email: 'Email:',
        phone: 'Phone:',
        socialMedia: 'Social Media:',
        productName: 'Product Name',
        productSize: 'Size',
        viewDetails: 'View Details',
        multipleSizes: 'Multiple Sizes Available',
        noProducts: 'No products found in this category.',
        searchPlaceholder: 'Search...',
        noSearchResults: 'No results found for your search.'
    },
    ar: {
        home: 'الرئيسية',
        categories: 'الفئات',
        contact: 'اتصل بنا',
        heroTitle: 'اكتشف مجموعتنا الاستثنائية',
        heroSlogan: 'الابتكار والجودة الفائقة في متناول يدك',
        exploreButton: 'تصفح الكتالوج',
        categoriesTitle: 'فئات منتجاتنا',
        backToCategories: 'العودة للفئات',
        specificationsTitle: 'المواصفات:',
        availableSizes: 'الأحجام المتوفرة:',
        contactForInfo: 'للاستفسار تواصل معنا',
        contactTitle: 'تواصل معنا',
        contactSlogan: 'نحن هنا للإجابة على جميع أسئلتك.',
        email: 'البريد الإلكتروني:',
        phone: 'الهاتف:',
        socialMedia: 'وسائل التواصل الاجتماعي:',
        productName: 'اسم المنتج',
        productSize: 'الحجم',
        viewDetails: 'عرض التفاصيل',
        multipleSizes: 'أحجام متعددة متوفرة',
        noProducts: 'لا توجد منتجات في هذه الفئة.',
        searchPlaceholder: 'بحث...',
        noSearchResults: 'لا توجد نتائج لبحثك.'
    }
};

export let currentLang = 'en'; // Default language

export const setCurrentLang = (lang) => {
    currentLang = lang;
    console.log(`Language set to: ${currentLang}`); // Debugging log
};
