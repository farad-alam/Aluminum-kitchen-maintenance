export type ServiceData = {
  slug: string;
  title: string;
  description: string;
  content: string[];
  benefits: string[];
  process: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
};

export const getServices = (locale: string): ServiceData[] => {
  const isAr = locale === 'ar';

  return [
    {
      slug: 'aluminum-kitchen-maintenance',
      title: isAr ? 'صيانة مطابخ ألمنيوم' : 'Aluminum Kitchen Maintenance',
      description: isAr 
        ? 'خدمة صيانة شاملة لمطابخ الألمنيوم في الرياض، تشمل إصلاح الأبواب، تغيير المفصلات، وحل كافة المشاكل.'
        : 'Comprehensive maintenance service for aluminum kitchens in Riyadh, including door repair, hinge replacement, and troubleshooting.',
      content: [
        isAr 
          ? 'تعتبر مطابخ الألمنيوم من أكثر الخيارات شيوعاً بفضل متانتها ومقاومتها للرطوبة، ولكن مع الاستخدام اليومي قد تتعرض بعض الأجزاء للتلف. نحن نقدم خدمة صيانة متكاملة تعيد مطبخك كالجديد.' 
          : 'Aluminum kitchens are highly popular due to their durability and moisture resistance. However, daily use can lead to wear and tear. We provide a complete maintenance service that restores your kitchen to pristine condition.',
        isAr
          ? 'تشمل خدماتنا إصلاح الأبواب المتساقطة، استبدال المفصلات التالفة بأخرى أصلية عالية الجودة، وإصلاح الأدراج لتعمل بسلاسة. كما نقوم بفحص الهيكل الأساسي لضمان عدم وجود تآكل أو تلف.'
          : 'Our services include fixing sagging doors, replacing damaged hinges with high-quality original parts, and repairing drawers for smooth operation. We also inspect the core structure to ensure there is no corrosion or hidden damage.'
      ],
      benefits: isAr 
        ? ['توفير تكلفة استبدال المطبخ بالكامل', 'استخدام قطع غيار أصلية بضمان', 'سرعة في الإنجاز ونظافة في العمل']
        : ['Save the cost of full kitchen replacement', 'Use of guaranteed original spare parts', 'Fast execution and clean work environment'],
      process: isAr 
        ? [
            { title: 'الفحص', desc: 'نقوم بزيارة الموقع وفحص المطبخ وتحديد المشاكل.' },
            { title: 'التقييم', desc: 'نقدم تقريراً بالتكلفة وقطع الغيار المطلوبة.' },
            { title: 'الصيانة', desc: 'يقوم فريقنا بإصلاح واستبدال القطع التالفة.' },
            { title: 'التسليم', desc: 'نختبر جميع الأبواب والأدراج قبل التسليم.' }
          ]
        : [
            { title: 'Inspection', desc: 'We visit the site, inspect the kitchen, and identify issues.' },
            { title: 'Evaluation', desc: 'We provide a report of the cost and required spare parts.' },
            { title: 'Maintenance', desc: 'Our team repairs and replaces damaged parts.' },
            { title: 'Delivery', desc: 'We test all doors and drawers before final handover.' }
          ],
      faqs: isAr
        ? [
            { q: 'هل توفرون مفصلات هيدروليك؟', a: 'نعم، نوفر مفصلات هيدروليك عالية الجودة تمنع الارتطام.' },
            { q: 'كم تستغرق عملية الصيانة؟', a: 'غالباً يتم الإنجاز في نفس اليوم أو خلال 24 ساعة.' }
          ]
        : [
            { q: 'Do you provide hydraulic hinges?', a: 'Yes, we provide high-quality soft-close hydraulic hinges.' },
            { q: 'How long does maintenance take?', a: 'Usually, it is completed on the same day or within 24 hours.' }
          ]
    },
    {
      slug: 'aluminum-kitchen-installation',
      title: isAr ? 'تركيب مطابخ ألمنيوم' : 'Aluminum Kitchen Installation',
      description: isAr 
        ? 'تركيب احترافي لمطابخ الألمنيوم الجديدة بضمان الجودة والالتزام بالمواعيد.'
        : 'Professional installation of new aluminum kitchens with guaranteed quality and punctuality.',
      content: [
        isAr 
          ? 'تركيب المطبخ هو الخطوة الأهم لضمان عمر افتراضي طويل. فريقنا المتخصص يقوم بتركيب مطابخ الألمنيوم بدقة متناهية، مع مراعاة تفاصيل التوازن وتثبيت الخزائن بشكل آمن وقوي.'
          : 'Kitchen installation is the most crucial step to ensure longevity. Our specialized team installs aluminum kitchens with extreme precision, paying attention to leveling and secure cabinet mounting.',
        isAr
          ? 'نحن نستخدم أفضل أدوات التثبيت والمواد اللاصقة والسيليكون لضمان عزل تام للماء ولمنع أي تسربات. كما نقوم بتوصيل الأجهزة وتركيب الأسطح بدقة واحترافية.'
          : 'We use the best mounting hardware, adhesives, and silicone to ensure complete water insulation and prevent leaks. We also handle appliance integration and countertop installation with professional care.'
      ],
      benefits: isAr 
        ? ['تركيب دقيق وموزون', 'تثبيت قوي يضمن الأمان', 'تشطيب نهائي نظيف واحترافي']
        : ['Precise and perfectly leveled installation', 'Strong mounting for guaranteed safety', 'Clean and professional final finishing'],
      process: isAr 
        ? [
            { title: 'القياس', desc: 'التأكد من مطابقة القياسات مع التصميم.' },
            { title: 'التجهيز', desc: 'تجهيز الجدران والأرضيات للتركيب.' },
            { title: 'التركيب', desc: 'تثبيت الوحدات السفلية والعلوية بدقة.' },
            { title: 'التشطيب', desc: 'إضافة السيليكون العازل والتأكد من الأبواب.' }
          ]
        : [
            { title: 'Measurement', desc: 'Verifying measurements against the design.' },
            { title: 'Preparation', desc: 'Preparing walls and floors for installation.' },
            { title: 'Installation', desc: 'Mounting base and wall units precisely.' },
            { title: 'Finishing', desc: 'Applying sealing silicone and adjusting doors.' }
          ],
      faqs: isAr
        ? [
            { q: 'هل تركبون جميع أنواع المطابخ؟', a: 'نعم، نركب جميع تصاميم وأنواع مطابخ الألمنيوم.' },
            { q: 'هل يشمل التركيب أسطح الرخام؟', a: 'نعم، يمكننا تنسيق وتركيب الأسطح بأنواعها.' }
          ]
        : [
            { q: 'Do you install all types of kitchens?', a: 'Yes, we install all designs and types of aluminum kitchens.' },
            { q: 'Does installation include marble countertops?', a: 'Yes, we can coordinate and install various types of countertops.' }
          ]
    },
    {
      slug: 'aluminum-kitchen-dismantling',
      title: isAr ? 'فك مطابخ ألمنيوم' : 'Aluminum Kitchen Dismantling',
      description: isAr 
        ? 'خدمة فك المطابخ بعناية تامة للنقل أو التجديد بدون إلحاق أي أضرار بالخزائن أو الرخام.'
        : 'Careful kitchen dismantling service for relocation or renovation without damaging cabinets or countertops.',
      content: [
        isAr 
          ? 'سواء كنت تنتقل لمنزل جديد أو ترغب في تجديد مطبخك الحالي، فإن عملية الفك تتطلب دقة وخبرة لتجنب كسر الرخام أو إتلاف مفصلات الألمنيوم. نحن نوفر فريقاً متخصصاً لفك مطبخك بأمان تام.'
          : 'Whether moving to a new home or renovating your current one, the dismantling process requires precision and expertise to avoid breaking marble or damaging aluminum hinges. We provide a specialized team to dismantle your kitchen safely.',
        isAr
          ? 'نقوم بترقيم القطع وتغليفها (حسب الطلب) لضمان سهولة إعادة تركيبها لاحقاً بنفس الهيكل والدقة.'
          : 'We number the parts and package them (upon request) to ensure easy re-installation later with the exact same structure and precision.'
      ],
      benefits: isAr 
        ? ['حماية الرخام من الكسر', 'فك احترافي بدون خدوش', 'ترقيم القطع لسهولة إعادة التركيب']
        : ['Protecting marble from breaking', 'Professional dismantling without scratches', 'Numbering parts for easy re-installation'],
      process: isAr 
        ? [
            { title: 'فصل التمديدات', desc: 'فصل الكهرباء والسباكة بأمان.' },
            { title: 'فك الرخام', desc: 'إزالة أسطح الرخام بحذر شديد.' },
            { title: 'فك الوحدات', desc: 'إزالة الخزائن العلوية والسفلية.' },
            { title: 'الترتيب', desc: 'تجميع القطع والمسامير للحفظ.' }
          ]
        : [
            { title: 'Disconnecting', desc: 'Safely disconnecting electricals and plumbing.' },
            { title: 'Marble Removal', desc: 'Removing marble countertops with extreme care.' },
            { title: 'Unit Dismantling', desc: 'Removing wall and base cabinets.' },
            { title: 'Organizing', desc: 'Collecting parts and screws for safekeeping.' }
          ],
      faqs: isAr
        ? [
            { q: 'هل تضمنون عدم كسر الرخام؟', a: 'نبذل قصارى جهدنا ونستخدم أدوات متخصصة لفك الرخام بأمان عالي.' },
            { q: 'هل توفرون خدمة الفك والتركيب والنقل؟', a: 'نعم، نقدم الخدمة الشاملة لنقل المطبخ بالكامل.' }
          ]
        : [
            { q: 'Do you guarantee marble will not break?', a: 'We do our utmost and use specialized tools to remove marble safely.' },
            { q: 'Do you offer dismantle, transport, and reinstall services?', a: 'Yes, we offer comprehensive kitchen relocation services.' }
          ]
    },
    {
      slug: 'aluminum-repair',
      title: isAr ? 'إصلاح الألمنيوم' : 'Aluminum Repair',
      description: isAr 
        ? 'إصلاح متخصص لجميع هياكل وإطارات الألمنيوم المنزلية والتجارية.'
        : 'Specialized repair for all domestic and commercial aluminum structures and frames.',
      content: [
        isAr 
          ? 'الألمنيوم مادة متينة، لكنها قد تتعرض للطعجات، الالتواء، أو مشاكل في المجرى والمفصلات بمرور الوقت. نحن نصلح كل ذلك.'
          : 'Aluminum is a durable material, but it can suffer from dents, bending, or track and hinge issues over time. We repair it all.',
        isAr
          ? 'نقدم خدمة إصلاح للأبواب، النوافذ، وإطارات المطابخ، مع التركيز على استعادة الشكل الوظيفي والجمالي للقطعة بدون الحاجة لاستبدالها بالكامل.'
          : 'We offer repair services for doors, windows, and kitchen frames, focusing on restoring the functional and aesthetic shape of the piece without the need for full replacement.'
      ],
      benefits: isAr 
        ? ['توفير المال', 'حلول سريعة', 'استعادة الكفاءة الوظيفية']
        : ['Money saving', 'Quick solutions', 'Restoration of functional efficiency'],
      process: isAr 
        ? [
            { title: 'المعاينة', desc: 'تحديد حجم الضرر.' },
            { title: 'التقويم', desc: 'تعديل الألمنيوم المطعوج أو الملتوي.' },
            { title: 'تغيير القطع', desc: 'استبدال العجلات أو المفصلات.' },
            { title: 'الاختبار', desc: 'التأكد من الانسيابية التامة.' }
          ]
        : [
            { title: 'Inspection', desc: 'Identifying the extent of the damage.' },
            { title: 'Straightening', desc: 'Adjusting dented or bent aluminum.' },
            { title: 'Part Replacement', desc: 'Replacing wheels or hinges.' },
            { title: 'Testing', desc: 'Ensuring perfect smoothness.' }
          ],
      faqs: isAr
        ? [
            { q: 'هل تصلحون أبواب السحب الألمنيوم؟', a: 'نعم، نقوم بإصلاح وتغيير عجلات أبواب ونوافذ السحب.' }
          ]
        : [
            { q: 'Do you repair aluminum sliding doors?', a: 'Yes, we repair and replace wheels for sliding doors and windows.' }
          ]
    },
    {
      slug: 'kitchen-renovation',
      title: isAr ? 'تجديد المطابخ' : 'Kitchen Renovation',
      description: isAr 
        ? 'تجديد كامل لمظهر مطبخك بتغيير الأبواب، الألوان، وإضافة إكسسوارات حديثة.'
        : 'Complete renovation of your kitchen\'s look by changing doors, colors, and adding modern accessories.',
      content: [
        isAr 
          ? 'هل مللت من لون مطبخك القديم؟ لا داعي لشراء مطبخ جديد بالكامل. يمكننا تجديد مطبخك الحالي وتحديثه بأقل التكاليف.'
          : 'Tired of your old kitchen\'s color? No need to buy an entirely new kitchen. We can renovate and modernize your current kitchen at a fraction of the cost.',
        isAr
          ? 'نقوم بتغيير ألوان الأبواب (كلادينج، فورميكا)، تغيير المسكات، وإضافة إضاءة مخفية وإكسسوارات حديثة تجعل مطبخك يبدو عصرياً وجديداً.'
          : 'We change door colors (Cladding, Formica), replace handles, and add hidden lighting and modern accessories to make your kitchen look contemporary and brand new.'
      ],
      benefits: isAr 
        ? ['تغيير جذري للمظهر', 'تكلفة أقل بكثير من المطبخ الجديد', 'مواكبة أحدث التصاميم']
        : ['Radical change of appearance', 'Much lower cost than a new kitchen', 'Keeping up with modern designs'],
      process: isAr 
        ? [
            { title: 'التصميم', desc: 'اختيار الألوان والخامات الجديدة.' },
            { title: 'الفك', desc: 'إزالة الأبواب والإكسسوارات القديمة.' },
            { title: 'التجديد', desc: 'تركيب الأبواب والواجهات الجديدة.' },
            { title: 'اللمسات', desc: 'تركيب المسكات والإضاءة.' }
          ]
        : [
            { title: 'Design', desc: 'Selecting new colors and materials.' },
            { title: 'Dismantling', desc: 'Removing old doors and accessories.' },
            { title: 'Renovation', desc: 'Installing new doors and facades.' },
            { title: 'Finishing Touches', desc: 'Installing handles and lighting.' }
          ],
      faqs: isAr
        ? [
            { q: 'هل يمكن تغيير مطبخ خشب إلى ألمنيوم؟', a: 'يمكننا استبدال الأبواب الخشبية بأبواب ألمنيوم حديثة وتركيبها على نفس الهيكل إذا كان سليماً.' }
          ]
        : [
            { q: 'Can a wood kitchen be changed to aluminum?', a: 'We can replace wooden doors with modern aluminum doors and mount them on the same frame if it is sound.' }
          ]
    },
    {
      slug: 'interior-aluminum-work',
      title: isAr ? 'أعمال ألمنيوم داخلية' : 'Interior Aluminum Work',
      description: isAr 
        ? 'تصميم وتركيب القواطع، الخزائن، والرفوف الألمنيوم داخل المنزل.'
        : 'Design and installation of aluminum partitions, cabinets, and shelves inside the home.',
      content: [
        isAr 
          ? 'نقدم حلولاً مبتكرة للمساحات الداخلية باستخدام الألمنيوم، مثل القواطع الداخلية للغرف، خزائن الملابس الجدارية، ورفوف التخزين.'
          : 'We offer innovative solutions for interior spaces using aluminum, such as room partitions, built-in wardrobes, and storage shelves.',
        isAr
          ? 'يتميز الألمنيوم بمقاومته للرطوبة، مما يجعله مثالياً لخزائن الغسيل والمخازن. نقدم تصاميم عصرية تناسب ديكور منزلك.'
          : 'Aluminum is known for its moisture resistance, making it ideal for laundry cabinets and pantries. We offer modern designs that complement your home decor.'
      ],
      benefits: isAr 
        ? ['مقاومة للماء والرطوبة', 'تصاميم مرنة حسب المساحة', 'عمر افتراضي طويل بدون صدأ']
        : ['Water and moisture resistance', 'Flexible designs adapted to the space', 'Long lifespan without rust'],
      process: isAr 
        ? [
            { title: 'أخذ المقاسات', desc: 'رفع المقاسات بدقة.' },
            { title: 'التفصيل', desc: 'تفصيل الألمنيوم في الورشة.' },
            { title: 'التركيب', desc: 'تثبيت القطع في الموقع.' },
            { title: 'التنظيف', desc: 'تسليم الموقع نظيفاً.' }
          ]
        : [
            { title: 'Measuring', desc: 'Taking accurate measurements.' },
            { title: 'Fabrication', desc: 'Fabricating aluminum in the workshop.' },
            { title: 'Installation', desc: 'Installing the pieces on site.' },
            { title: 'Cleaning', desc: 'Delivering the site clean.' }
          ],
      faqs: isAr
        ? [
            { q: 'هل الألمنيوم مناسب لغرف النوم؟', a: 'نعم، نوفر قطاعات ألمنيوم بألوان وتصاميم خشبية أنيقة تناسب غرف النوم.' }
          ]
        : [
            { q: 'Is aluminum suitable for bedrooms?', a: 'Yes, we provide aluminum sections with elegant wood-like colors and designs suitable for bedrooms.' }
          ]
    }
  ];
};
