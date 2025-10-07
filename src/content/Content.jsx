const translations = {
  hu: {
    header: {
      name: 'Szuper Vendégház',
      contact: {
        phoneLabel: 'Tel.',
        phoneNumber: '+36 30 123 4567',
        phoneHref: 'tel:+36301234567'
      }
    },
    hero: {
      kicker: 'Természet közelében',
      title: 'Pihenés az erdő szélén',
      subtitle:
        'Fedezd fel a tökéletes menekülést a természet ölelésében. Modern kényelem találkozik a rusztikus bájjal.',
      ctaLabel: 'Foglalj most!',
      ctaHref: '#'
    },
    intro: {
      subtitle: 'Üdvözlünk a Természet Ölelésében',
      title: 'Csendes erdőszélen, ősfák árnyékában',
      questions: [
        { text: 'Elbújnál?', emoji: '🌿' },
        { text: 'Túráznál?', emoji: '🥾' },
        { text: 'Chilleznél?', emoji: '🍹' },
        { text: 'Wellnesseznél?', emoji: '🛁' },
        { text: 'Mindez egyben?', emoji: '', isBold: true }
      ],
      description:
        'Várunk szeretettel a falu végén, nyugodt környezetben, ahol a természet és a kényelem találkozik.'
    },
    features: {
      kicker: 'Minden, amire szükséged van',
      title: 'Kényelem és élmény egy helyen',
      subtitle: 'Gondoskodunk róla, hogy minden pillanatod emlékezetes legyen',
      items: [
        { emoji: '🛁', label: 'Wellness pihenés', description: 'Relaxálj a szabadtéri jacuzziban a csillagos ég alatt' },
        { emoji: '🚴', label: 'Aktív kikapcsolódás', description: 'Fedezd fel a környéket elektromos kerékpárokkal' },
        { emoji: '📺', label: 'Szórakozás', description: 'Smart TV streaming szolgáltatásokkal és játékkonzollal' },
        { emoji: '🍖', label: 'Grill élmények', description: 'Készíts finom ételeket a modern grillsütőn' },
        { emoji: '☕', label: 'Felszerelt konyha', description: 'Minden eszköz kéznél a főzéshez és kávézáshoz' },
        { emoji: '🔥', label: 'Tábortűz', description: 'Élvezd a tűz melegét és a természet hangját' },
        { emoji: '🛏️', label: 'Kényelmes ágyak', description: 'Pihentető alvás minőségi matracokkal' },
        { emoji: '🚗', label: 'Biztonságos parkolás', description: 'Saját garázs az autódnak' },
        { emoji: '🌞', label: 'Napozó terasz', description: 'Sütkérezz a napon a természet ölelésében' }
      ]
    },
    reviews: {
      kicker: 'Vélemények',
      title: 'Mit mondanak vendégeink',
      subtitle: 'Olvasd el korábbi vendégeink tapasztalatait',
      linkText: 'Összes értékelés a Google-on',
      showMoreText: 'További vélemények',
      googleLink: 'https://www.google.com/',
      items: [
        {
          name: 'Kovács Anna',
          date: '2024. június 15.',
          text: 'Csodálatos hétvégét töltöttünk itt! A vendégház tiszta, kényelmes és minden apró részletre odafigyeltek. A jacuzzi este varázslatos volt. Mindenképpen visszajövünk!',
          avatar: null
        },
        {
          name: 'Nagy Péter',
          date: '2024. május 28.',
          text: 'Tökéletes hely pihenésre! A környék gyönyörű, az elektromos kerékpárokkal remek túrát tettünk. A háziak nagyon barátságosak voltak. Csak ajánlani tudom!',
          avatar: null
        },
        {
          name: 'Szabó Katalin',
          date: '2024. május 10.',
          text: 'Fantasztikus élmény volt! A konyha teljesen felszerelt, a Netflix este nagy kedvenc volt. A természet hangjai között aludni csodálatos. 5 csillag!',
          avatar: null
        },
        {
          name: 'Tóth Gábor',
          date: '2024. április 22.',
          text: 'Nagyszerű szállás, modern felszereltség, csendes környezet. A tűzrakóhely mellett töltött este felejthetetlen volt. Mindenkinek ajánlom!',
          avatar: null
        },
        {
          name: 'Varga Éva',
          date: '2024. április 8.',
          text: 'Kiváló ár-érték arány! Tiszta, tágas, minden megvan ami kell. A tulajdonosok kedvesek és segítőkészek. Biztosan visszatérünk!',
          avatar: null
        },
        {
          name: 'Molnár István',
          date: '2024. március 25.',
          text: 'Remek hely családi kikapcsolódásra! A gyerekek imádták a PS4-et, mi pedig a jacuzzit. A környék tele van túraútvonalakkal. Nagyon ajánlom!',
          avatar: null
        }
      ]
    },
    faq: {
      kicker: 'Gyakori kérdések',
      title: 'Kérdésed van? Itt a válasz!',
      subtitle: 'Minden, amit tudnod kell a foglalás és a tartózkodás előtt',
      contactText: 'Nem találod a választ? Lépj velünk kapcsolatba!',
      contactLabel: 'Írj nekünk',
      contactHref: 'mailto:info@vendegház.hu',
      items: [
        {
          emoji: '📅',
          question: 'Hogyan tudok foglalni?',
          answer: 'Foglalni telefonon vagy e-mailben tudsz. Keress minket bizalommal, és segítünk kiválasztani a számodra legmegfelelőbb időpontot.'
        },
        {
          emoji: '🕐',
          question: 'Mikor van a bejelentkezés és a kijelentkezés?',
          answer: 'Bejelentkezés 15:00-tól, kijelentkezés 11:00-ig. Ha más időpont kell, egyeztess velünk előre, igyekszünk rugalmasan kezelni a kéréseket.'
        },
        {
          emoji: '🐕',
          question: 'Vihetek háziállatot?',
          answer: 'Igen, háziállatok szeretettel vártak! Kérjük, előzetesen jelezd, hogy négylábú társaddal érkezel, és gondoskodj róla, hogy ne károsítsa a bútorokat.'
        },
        {
          emoji: '🅿️',
          question: 'Van-e parkolási lehetőség?',
          answer: 'Igen, van egy saját, zárt garázs, ahol biztonságosan tárolhatod az autódat a tartózkodás alatt.'
        },
        {
          emoji: '🍳',
          question: 'Milyen konyhai felszerelés áll rendelkezésre?',
          answer: 'A konyha teljesen felszerelt: sütő, főzőlap, hűtő, mikró, kávéfőző, vízforraló, kenyérpirító és minden szükséges eszköz a főzéshez.'
        },
        {
          emoji: '👥',
          question: 'Hány fő szállása biztosított?',
          answer: 'A vendégház kényelmesen elszállásol 4-6 főt. Van egy franciaágy és további hálóhelyek is rendelkezésre állnak.'
        },
        {
          emoji: '📶',
          question: 'Van-e WiFi és TV?',
          answer: 'Igen, ingyenes WiFi és Smart TV is van Netflix, Disney+, HBO Max és egyéb streaming szolgáltatásokkal.'
        },
        {
          emoji: '🥾',
          question: 'Milyen túrázási lehetőségek vannak a környéken?',
          answer: 'A környék tele van erdei túraútvonalakkal és kerékpárutakkal. Elektromos kerékpárokat is biztosítunk a környék felfedezéséhez.'
        }
      ]
    },
    footer: {
      name: 'Szuper Vendégház',
      description: 'Fedezd fel a tökéletes kikapcsolódást a természet ölelésében, ahol a modern kényelem találkozik a rusztikus bájjal.',
      contactTitle: 'Kapcsolat',
      linksTitle: 'Hasznos linkek',
      links: {
        booking: 'Foglalás',
        faq: 'Gyakori kérdések',
        gallery: 'Galéria',
        contact: 'Kapcsolat'
      },
      socialLabels: {
        facebook: 'Facebook',
        instagram: 'Instagram',
        youtube: 'YouTube',
        tripadvisor: 'TripAdvisor'
      },
      legal: {
        privacy: 'Adatvédelem',
        terms: 'Felhasználási feltételek',
        conditions: 'ÁSZF'
      },
      copyright: '© 2024 Szuper Vendégház. Minden jog fenntartva.'
    }
  },
  en: {
    header: {
      name: 'Super Guesthouse',
      contact: {
        phoneLabel: 'Phone',
        phoneNumber: '+36 30 123 4567',
        phoneHref: 'tel:+36301234567'
      }
    },
    hero: {
      kicker: 'Close to nature',
      title: 'Retreat at the forest edge',
      subtitle:
        'Discover the perfect escape in nature\'s embrace. Modern comfort meets rustic charm.',
      ctaLabel: 'Book your stay',
      ctaHref: '#'
    },
    intro: {
      subtitle: 'Welcome to Nature\'s Embrace',
      title: 'Quiet forest edge, beneath ancient trees',
      questions: [
        { text: 'Hide away?', emoji: '🌿' },
        { text: 'Go hiking?', emoji: '🥾' },
        { text: 'Chill out?', emoji: '🍹' },
        { text: 'Get spa treatment?', emoji: '🛁' },
        { text: 'All in one?', emoji: '', isBold: true }
      ],
      description:
        'We welcome you at the edge of the village, in a peaceful setting where nature meets comfort.'
    },
    features: {
      kicker: 'Everything you need',
      title: 'Comfort and experience in one place',
      subtitle: 'We ensure every moment is memorable',
      items: [
        { emoji: '🛁', label: 'Wellness relaxation', description: 'Relax in the outdoor jacuzzi under the stars' },
        { emoji: '🚴', label: 'Active recreation', description: 'Explore the area with electric bicycles' },
        { emoji: '📺', label: 'Entertainment', description: 'Smart TV with streaming services and game console' },
        { emoji: '🍖', label: 'Grilling experience', description: 'Cook delicious meals on the modern grill' },
        { emoji: '☕', label: 'Equipped kitchen', description: 'All tools at hand for cooking and coffee' },
        { emoji: '🔥', label: 'Campfire', description: 'Enjoy the warmth of fire and nature\'s sounds' },
        { emoji: '🛏️', label: 'Comfortable beds', description: 'Restful sleep with quality mattresses' },
        { emoji: '🚗', label: 'Secure parking', description: 'Private garage for your car' },
        { emoji: '🌞', label: 'Sun terrace', description: 'Sunbathe in nature\'s embrace' }
      ]
    },
    reviews: {
      kicker: 'Reviews',
      title: 'What our guests say',
      subtitle: 'Read experiences from our previous guests',
      linkText: 'All reviews on Google',
      showMoreText: 'Show more reviews',
      googleLink: 'https://www.google.com/',
      items: [
        {
          name: 'Anna Smith',
          date: 'June 15, 2024',
          text: 'Amazing weekend getaway! The guesthouse is clean, comfortable, and every detail is taken care of. The evening jacuzzi was magical. We will definitely come back!',
          avatar: null
        },
        {
          name: 'Peter Johnson',
          date: 'May 28, 2024',
          text: 'Perfect place to relax! Beautiful surroundings, great bike tours with the e-bikes. The hosts were very friendly. Highly recommend!',
          avatar: null
        },
        {
          name: 'Kate Wilson',
          date: 'May 10, 2024',
          text: 'Fantastic experience! Fully equipped kitchen, Netflix in the evening was a favorite. Sleeping to nature sounds was wonderful. 5 stars!',
          avatar: null
        },
        {
          name: 'Gabriel Brown',
          date: 'April 22, 2024',
          text: 'Great accommodation, modern equipment, quiet environment. The evening by the campfire was unforgettable. I recommend it to everyone!',
          avatar: null
        },
        {
          name: 'Eva Martinez',
          date: 'April 8, 2024',
          text: 'Excellent value for money! Clean, spacious, everything you need. The owners are kind and helpful. We will definitely return!',
          avatar: null
        },
        {
          name: 'Steven Davis',
          date: 'March 25, 2024',
          text: 'Great place for family relaxation! Kids loved the PS4, we loved the jacuzzi. The area is full of hiking trails. Highly recommend!',
          avatar: null
        }
      ]
    },
    faq: {
      kicker: 'Frequently Asked Questions',
      title: 'Got questions? Here are answers!',
      subtitle: 'Everything you need to know before booking and staying',
      contactText: 'Can\'t find the answer? Contact us!',
      contactLabel: 'Send us a message',
      contactHref: 'mailto:info@guesthouse.com',
      items: [
        {
          emoji: '📅',
          question: 'How can I book?',
          answer: 'You can book by phone or email. Contact us with confidence, and we\'ll help you choose the most suitable time for you.'
        },
        {
          emoji: '🕐',
          question: 'What are the check-in and check-out times?',
          answer: 'Check-in from 3:00 PM, check-out until 11:00 AM. If you need different times, please coordinate with us in advance - we try to be flexible with requests.'
        },
        {
          emoji: '🐕',
          question: 'Can I bring a pet?',
          answer: 'Yes, pets are welcome! Please let us know in advance that you\'re arriving with your four-legged companion, and ensure they don\'t damage the furniture.'
        },
        {
          emoji: '🅿️',
          question: 'Is there parking available?',
          answer: 'Yes, there is a private, closed garage where you can safely store your car during your stay.'
        },
        {
          emoji: '🍳',
          question: 'What kitchen equipment is available?',
          answer: 'The kitchen is fully equipped: oven, stove, fridge, microwave, coffee maker, kettle, toaster, and all necessary cooking utensils.'
        },
        {
          emoji: '👥',
          question: 'How many people can stay?',
          answer: 'The guesthouse comfortably accommodates 4-6 people. There is a French bed and additional sleeping arrangements available.'
        },
        {
          emoji: '📶',
          question: 'Is there WiFi and TV?',
          answer: 'Yes, there is free WiFi and a Smart TV with Netflix, Disney+, HBO Max, and other streaming services.'
        },
        {
          emoji: '🥾',
          question: 'What hiking opportunities are there nearby?',
          answer: 'The area is full of forest hiking trails and bike paths. We also provide electric bicycles for exploring the surroundings.'
        }
      ]
    },
    footer: {
      name: 'Super Guesthouse',
      description: 'Discover the perfect getaway in nature\'s embrace, where modern comfort meets rustic charm.',
      contactTitle: 'Contact',
      linksTitle: 'Useful Links',
      links: {
        booking: 'Booking',
        faq: 'FAQ',
        gallery: 'Gallery',
        contact: 'Contact'
      },
      socialLabels: {
        facebook: 'Facebook',
        instagram: 'Instagram',
        youtube: 'YouTube',
        tripadvisor: 'TripAdvisor'
      },
      legal: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Use',
        conditions: 'Terms & Conditions'
      },
      copyright: '© 2024 Super Guesthouse. All rights reserved.'
    }
  },
  de: {
    header: {
      name: 'Super Gästehaus',
      contact: {
        phoneLabel: 'Tel.',
        phoneNumber: '+36 30 123 4567',
        phoneHref: 'tel:+36301234567'
      }
    },
    hero: {
      kicker: 'Nah an der Natur',
      title: 'Rückzugsort am Waldrand',
      subtitle:
        'Entdecken Sie die perfekte Auszeit in der Umarmung der Natur. Moderner Komfort trifft auf rustikalen Charme.',
      ctaLabel: 'Jetzt buchen',
      ctaHref: '#'
    },
    intro: {
      subtitle: 'Willkommen in der Umarmung der Natur',
      title: 'Ruhiger Waldrand, unter uralten Bäumen',
      questions: [
        { text: 'Verstecken?', emoji: '🌿' },
        { text: 'Wandern?', emoji: '🥾' },
        { text: 'Entspannen?', emoji: '🍹' },
        { text: 'Wellness?', emoji: '🛁' },
        { text: 'Alles zusammen?', emoji: '', isBold: true }
      ],
      description:
        'Wir empfangen Sie am Dorfrand, in ruhiger Umgebung, wo Natur auf Komfort trifft.'
    },
    features: {
      kicker: 'Alles was Sie brauchen',
      title: 'Komfort und Erlebnis an einem Ort',
      subtitle: 'Wir sorgen dafür, dass jeder Moment unvergesslich ist',
      items: [
        { emoji: '🛁', label: 'Wellness-Entspannung', description: 'Entspannen Sie im Outdoor-Whirlpool unter den Sternen' },
        { emoji: '🚴', label: 'Aktive Erholung', description: 'Erkunden Sie die Gegend mit Elektrofahrrädern' },
        { emoji: '📺', label: 'Unterhaltung', description: 'Smart TV mit Streaming-Diensten und Spielkonsole' },
        { emoji: '🍖', label: 'Grillerlebnis', description: 'Kochen Sie leckere Gerichte auf dem modernen Grill' },
        { emoji: '☕', label: 'Ausgestattete Küche', description: 'Alle Werkzeuge zum Kochen und Kaffee' },
        { emoji: '🔥', label: 'Lagerfeuer', description: 'Genießen Sie die Wärme des Feuers und die Klänge der Natur' },
        { emoji: '🛏️', label: 'Bequeme Betten', description: 'Erholsamer Schlaf mit Qualitätsmatratzen' },
        { emoji: '🚗', label: 'Sicherer Parkplatz', description: 'Private Garage für Ihr Auto' },
        { emoji: '🌞', label: 'Sonnenterrasse', description: 'Sonnen Sie sich in der Umarmung der Natur' }
      ]
    },
    reviews: {
      kicker: 'Bewertungen',
      title: 'Was unsere Gäste sagen',
      subtitle: 'Lesen Sie Erfahrungen unserer früheren Gäste',
      linkText: 'Alle Bewertungen auf Google',
      showMoreText: 'Mehr Bewertungen anzeigen',
      googleLink: 'https://www.google.com/',
      items: [
        {
          name: 'Anna Schmidt',
          date: '15. Juni 2024',
          text: 'Erstaunliches Wochenende! Das Gästehaus ist sauber, komfortabel und jedes Detail ist berücksichtigt. Der Abend-Whirlpool war magisch. Wir kommen definitiv zurück!',
          avatar: null
        },
        {
          name: 'Peter Müller',
          date: '28. Mai 2024',
          text: 'Perfekter Ort zum Entspannen! Schöne Umgebung, tolle Radtouren mit den E-Bikes. Die Gastgeber waren sehr freundlich. Sehr zu empfehlen!',
          avatar: null
        },
        {
          name: 'Katrin Weber',
          date: '10. Mai 2024',
          text: 'Fantastische Erfahrung! Voll ausgestattete Küche, Netflix am Abend war ein Favorit. Bei Naturgeräuschen schlafen war wunderbar. 5 Sterne!',
          avatar: null
        },
        {
          name: 'Gabriel Fischer',
          date: '22. April 2024',
          text: 'Tolle Unterkunft, moderne Ausstattung, ruhige Umgebung. Der Abend am Lagerfeuer war unvergesslich. Ich empfehle es jedem!',
          avatar: null
        },
        {
          name: 'Eva Wagner',
          date: '8. April 2024',
          text: 'Ausgezeichnetes Preis-Leistungs-Verhältnis! Sauber, geräumig, alles was man braucht. Die Besitzer sind freundlich und hilfsbereit. Wir kommen definitiv zurück!',
          avatar: null
        },
        {
          name: 'Stefan Becker',
          date: '25. März 2024',
          text: 'Toller Ort für Familienentspannung! Kinder liebten die PS4, wir liebten den Whirlpool. Die Gegend ist voll von Wanderwegen. Sehr zu empfehlen!',
          avatar: null
        }
      ]
    },
    faq: {
      kicker: 'Häufig gestellte Fragen',
      title: 'Haben Sie Fragen? Hier sind die Antworten!',
      subtitle: 'Alles, was Sie vor der Buchung und dem Aufenthalt wissen müssen',
      contactText: 'Finden Sie keine Antwort? Kontaktieren Sie uns!',
      contactLabel: 'Schreiben Sie uns',
      contactHref: 'mailto:info@gaestehaus.de',
      items: [
        {
          emoji: '📅',
          question: 'Wie kann ich buchen?',
          answer: 'Sie können telefonisch oder per E-Mail buchen. Kontaktieren Sie uns vertrauensvoll, und wir helfen Ihnen, die passendste Zeit für Sie zu wählen.'
        },
        {
          emoji: '🕐',
          question: 'Wann ist Check-in und Check-out?',
          answer: 'Check-in ab 15:00 Uhr, Check-out bis 11:00 Uhr. Wenn Sie andere Zeiten benötigen, stimmen Sie dies bitte im Voraus mit uns ab - wir versuchen flexibel auf Anfragen zu reagieren.'
        },
        {
          emoji: '🐕',
          question: 'Kann ich ein Haustier mitbringen?',
          answer: 'Ja, Haustiere sind herzlich willkommen! Bitte teilen Sie uns im Voraus mit, dass Sie mit Ihrem vierbeinigen Begleiter anreisen, und stellen Sie sicher, dass die Möbel nicht beschädigt werden.'
        },
        {
          emoji: '🅿️',
          question: 'Gibt es Parkmöglichkeiten?',
          answer: 'Ja, es gibt eine private, geschlossene Garage, in der Sie Ihr Auto während Ihres Aufenthalts sicher abstellen können.'
        },
        {
          emoji: '🍳',
          question: 'Welche Küchenausstattung ist verfügbar?',
          answer: 'Die Küche ist komplett ausgestattet: Backofen, Herd, Kühlschrank, Mikrowelle, Kaffeemaschine, Wasserkocher, Toaster und alle notwendigen Kochutensilien.'
        },
        {
          emoji: '👥',
          question: 'Wie viele Personen können übernachten?',
          answer: 'Das Gästehaus bietet bequem Platz für 4-6 Personen. Es gibt ein französisches Bett und zusätzliche Schlafgelegenheiten.'
        },
        {
          emoji: '📶',
          question: 'Gibt es WiFi und TV?',
          answer: 'Ja, es gibt kostenloses WiFi und einen Smart TV mit Netflix, Disney+, HBO Max und anderen Streaming-Diensten.'
        },
        {
          emoji: '🥾',
          question: 'Welche Wandermöglichkeiten gibt es in der Nähe?',
          answer: 'Die Gegend ist voll von Waldwanderwegen und Radwegen. Wir stellen auch Elektrofahrräder zur Erkundung der Umgebung zur Verfügung.'
        }
      ]
    },
    footer: {
      name: 'Super Gästehaus',
      description: 'Entdecken Sie den perfekten Rückzugsort in der Umarmung der Natur, wo moderner Komfort auf rustikalen Charme trifft.',
      contactTitle: 'Kontakt',
      linksTitle: 'Nützliche Links',
      links: {
        booking: 'Buchung',
        faq: 'FAQ',
        gallery: 'Galerie',
        contact: 'Kontakt'
      },
      socialLabels: {
        facebook: 'Facebook',
        instagram: 'Instagram',
        youtube: 'YouTube',
        tripadvisor: 'TripAdvisor'
      },
      legal: {
        privacy: 'Datenschutz',
        terms: 'Nutzungsbedingungen',
        conditions: 'AGB'
      },
      copyright: '© 2024 Super Gästehaus. Alle Rechte vorbehalten.'
    }
  }
};

export default translations;