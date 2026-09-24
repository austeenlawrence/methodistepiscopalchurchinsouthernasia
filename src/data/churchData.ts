import { ChurchConfig } from '../types';

export const churchData: ChurchConfig = {
  churchName: "Methodist Episcopal Church in Southern Asia",
  shortName: "MECSA",
  tagline: "Rooted in Faith, Anchored in Heritage, Serving with Love in Southern Asia",
  
  location: {
    city: "Bulandshahr",
    state: "Uttar Pradesh",
    country: "India",
    addressLine: "[3/443, Rajjo Bhawan, Bulandshahr, UP]",
    landmark: "[Opp. Methodist Girls Hostel, Bulandshahr]",
    pinCode: "203001",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112316.7909307436!2d77.80153835623067!3d28.40693892745331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c9b0e271baab7%3A0x6fb87c88b9c1bc33!2sBulandshahr%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsDirectionsUrl: "https://maps.app.goo.gl/63PZ5LTycGdcp79J9",
    isPlaceholderAddress: true,
  },

  contact: {
    phone: "+91 9837829875",
    phoneFormatted: "[+91 9837829875 - Official Church Contact]",
    email: "[methodistepiscopalchurch1898@gmail.com - Official Email Placeholder]",
    emergencyPrayerLine: "[+91 9690977268 - Pastoral Care Line]",
    isPlaceholderContact: true,
  },

  social: {
    facebookUrl: "https://www.facebook.com/p/Khadim-M-Lawrence-100007636008586/",
    youtubeUrl: "https://youtu.be/5S5tz48E0Dg?si=jwsCya_91e4noIZp",
    isPlaceholderSocial: true,
  },

  donation: {
    upiId: "9358331574@kotakbank",
    upiPayeeName: "Austeen Lawrence",
    qrCodePlaceholderText: "Scan to support church worship & community ministries",
    isPlaceholderUpi: true,
  },

  serviceSchedules: [
    {
      id: "sunday-worship",
      name: "Sunday Worship Service",
      day: "Every Sunday",
      time: "09:00 AM – 11:00 AM",
      description: "Our primary congregation gathering featuring reverent liturgical prayer, traditional hymns, choral anthems, Scripture reading, and Gospel proclamation.",
      isPlaceholderTime: true,
    },
    {
      id: "choir-practice",
      name: "Choir Practice",
      day: "Every Monday / Wedneday / Saturday",
      time: "03:00 PM – 05:00 PM",
      description: "Vocal and instrumental preparation for Sunday worship, choral harmony rehearsals, and musical spiritual fellowship.",
      isPlaceholderTime: true,
    },
    {
      id: "prayer-meeting",
      name: "Mid-Week Prayer Meeting",
      day: "Every Wednesday",
      time: "06:30 PM – 07:30 PM",
      description: "A sacred hour dedicated to congregational intercession, personal thanksgiving, communal petitions, and devotional meditation.",
      isPlaceholderTime: true,
    }
  ],

  events: [
    {
      id: "event-1",
      title: "128th Centenary Celebration",
      date: "Tuesday, October 20, 2026",
      time: "04:00 PM – 7:30 PM",
      location: "M.E Church, Bulandshahr",
      shortDescription: "A special commemorative service giving thanks to God for over a century of Christian witness, heritage, and ongoing spiritual ministry.",
      fullDescription: "Join the MECSA Bulandshahr congregation for our Annual Heritage Thanksgiving Service. We reflect with humble gratitude on God's sustaining grace through generations since 1898, celebrating our shared fellowship and dedicating our church for continued ministry.",
      image: "/images/anniversary 1.jpeg",
      imageAlt: "Church sanctuary decorated for worship",
      isPlaceholderDate: true,
    },
    {
      id: "event-2",
      title: "Christmas Celebration",
      date: "Friday, December 25, 2026",
      time: "11:00 AM – 05:00 PM",
      location: "Bulandshahr Church Compound",
      shortDescription: "Extending Christ's compassion to local families through distribution of essential seasonal items, warm garments, and nutritional support.",
      fullDescription: "Organized by our Outreach and Women's Ministries, this annual initiative brings practical warmth and Christian love to underprivileged neighbors across Bulandshahr. Volunteers and church families gather to assemble and distribute relief packages.",
      image: "/images/christmas.png",
      imageAlt: "Community care and volunteer fellowship",
      isPlaceholderDate: true,
    },
    {
      id: "event-3",
      title: "New Year Service",
      date: "Friday, January 01, 2027",
      time: "11:00 AM - 01:30 PM",
      location: "MECSA , Bulandshahr",
      shortDescription: "Empowering the next generation with biblical grounding, spiritual leadership principles, and deep fellowship.",
      fullDescription: "A three-day conference bringing together young men and women for in-depth Bible study, workshops on servant leadership in modern society, vocal worship sessions, and mentoring from senior pastors.",
      image: "/images/new year.png",
      imageAlt: "Youth gathering in discussion and fellowship",
      isPlaceholderDate: true,
    },
    {
      id: "event-4",
      title: "Good Friday Service",
      date: "Friday, March 26, 2027",
      time: "12:00 PM – 03:00 PM",
      location: "Main Sanctuary, Bulandshahr",
      shortDescription: "A solemn evening of repentance, scriptural meditation on Christ's Passion, and united intercessory prayer.",
      fullDescription: "An evening set apart during the holy season of Lent for collective repentance, reflection upon the Cross of Christ, and intercession for regional peace, our nation, families, and those in distress.",
      image: "/images/good friday.png",
      imageAlt: "Candlelit prayer sanctuary",
      isPlaceholderDate: true,
    }
  ],

  ministries: [
    {
      id: "youth",
      name: "Youth Ministry",
      shortDescription: "Nurturing the spiritual growth, biblical literacy, and moral leadership of our young people through fellowship, study, and service.",
      iconName: "Sparkles",
      image: "/images/youth.jpeg",
      imageAlt: "Young people gathering together in positive fellowship"
    },
    {
      id: "womens",
      name: "Women's Ministry",
      shortDescription: "Uniting women in prayer, mutual encouragement, charitable family support, and community care rooted in Christian discipleship.",
      iconName: "HeartHandshake",
      image: "/images/womens.jpeg",
      imageAlt: "Christian women gathered in fellowship and service"
    },
    {
      id: "worship",
      name: "Worship Ministry",
      shortDescription: "Leading the congregation into reverent and joyful praise through faithful liturgy, traditional hymns, and orderly worship.",
      iconName: "Flame",
      image: "/images/worship.jpeg",
      imageAlt: "Sanctuary worship atmosphere with warm light"
    },
    {
      id: "outreach",
      name: "Outreach / Evangelism",
      shortDescription: "Sharing the Gospel of Jesus Christ and demonstrating His love through humanitarian care, visiting the sick, and aiding the needy.",
      iconName: "Globe",
      image: "/images/prayer.jpeg",
      imageAlt: "Community outreach and compassion in action"
    },
    {
      id: "prayer",
      name: "Prayer Ministry",
      shortDescription: "A dedicated team committed to standing in the gap, upholding our church family, leadership, and all prayer petitions daily.",
      iconName: "ShieldCheck",
      image: "/images/prayer 2.jpeg",
      imageAlt: "Hands folded in faithful Christian prayer"
    },
    {
      id: "choir",
      name: "Choir",
      shortDescription: "Enriching our divine services with inspiring sacred choral music, classic hymns of the faith, and uplifting vocal praise.",
      iconName: "Music",
      image: "/images/choir.jpeg",
      imageAlt: "Choir vocalists singing sacred choral music"
    }
  ],

  leadership: [
    {
      id: "bishop-khadim-lawrence",
      name: "Bishop Khadim M. Lawrence",
      title: "Bishop, Methodist Episcopal Church in Southern Asia",
      bio: "[Official Biography & Pastoral Profile Placeholder — Serving in episcopal leadership for MECSA, dedicated to spiritual oversight, biblical pastoral care, and upholding the heritage and ministry of the church across Southern Asia.]",
      image: "/images/papa 1.png",
      imageAlt: "Portrait of Bishop Khadim M. Lawrence (Placeholder photo)",
      isPlaceholderBio: true,
    },
    {
      id: "rev-kavita-lawrence",
      name: "Rev. Kavita Lawrence",
      title: "Reverend / Pastoral Ministry, MECSA",
      bio: "[Official Biography & Pastoral Profile Placeholder — Serving faithfully in ordained ministry, community engagement, family counseling, and spiritual nurture of the congregation.]",
      image: "/images/mummy 2.png",
      imageAlt: "Portrait of Rev. Kavita Lawrence (Placeholder photo)",
      isPlaceholderBio: true,
    },
    {
      id: "sanjeev-moses-davidson",
      name: "Br. Sanjeev Moses Davidson",
      title: "Chief Advisor",
      bio: "[Official Profile Placeholder — Providing counsel, administrative guidance, institutional stewardship, and strategic advisory support for MECSA governance and community endeavors.]",
      image: "/images/bde papa 1.png",
      imageAlt: "Portrait of Br. Sanjeev Moses Davidson, Chief Advisor (Placeholder photo)",
      isPlaceholderBio: true,
    }
  ],

  latestSermon: {
    id: "sermon-current",
    title: "The Warning of the Last Days : The Parable of the Ten Vigrins",
    speaker: "Bishop Khadim M. Lawrence",
    date: "April 07, 2026",
    passage: "Matthew 25:01-13",
    youtubeId: "https://youtu.be/5S5tz48E0Dg?si=EATUBm43aE1dJe2j", // Safe placeholder embed
    thumbnailUrl: "/images/thumbnail.jpeg",
    summary: "[Sermon summary placeholder: An inspiring exposition on persevering with steadfast conviction, anchoring our families in Christ, and walking in unconditional love and holy obedience.]",
    isPlaceholder: true,
  },

  about: {
    historyIntro: "The Methodist Episcopal Church in Southern Asia carries a profound legacy of Christian devotion, education, social upliftment, and evangelism across the Indian subcontinent. Established through the dedication of early Methodist missionaries and Indian church pioneers, the work expanded throughout North India, establishing vibrant congregations, schools, and charitable institutions.",
    
    bulandshahrHistory: "In Bulandshahr, Uttar Pradesh, church records and historical documentation mark an enduring Methodist Episcopal presence dating back to 1898. For well over a century, the Bulandshahr congregation has stood as a beacon of Gospel truth, prayer, and Christian charity, touching countless lives across generations.",
    
    mission: "[Official Mission Statement Placeholder — To glorify God through sincere worship, to proclaim the Gospel of Jesus Christ, to build up disciples in biblical truth, and to serve our community with Christ-like love and compassion.]",
    
    vision: "[Official Vision Statement Placeholder — To remain a steadfast, faithful, and welcoming Christian church in Bulandshahr and across Southern Asia, preserving our historic heritage while actively transforming lives through the power of the Holy Spirit.]",
    
    mecsaToday: "Today, the Methodist Episcopal Church in Southern Asia (MECSA) continues to identify and function as a living, active church body under its current episcopal leadership. Grounded in historic Methodist Episcopal traditions and governed with spiritual dedication, MECSA ministers through weekly worship, pastoral care, community outreach, and faithful witness to Jesus Christ.",
    
    bishopsMessage: {
      bishopName: "Bishop Khadim M. Lawrence",
      title: "Bishop, Methodist Episcopal Church in Southern Asia",
      greeting: "Grace, peace, and blessings to you in the name of our Lord and Savior Jesus Christ.",
      message: "'Dear brothers and sisters in Christ, it is with heartfelt joy that we welcome you to the Methodist Episcopal Church in Southern Asia. From our historic foundations in Bulandshahr established in 1898 to our present-day calling, our prayer is that every soul who enters our fellowship experiences the saving love of Christ, the comfort of the Holy Spirit, and the strength of a loving Christian family. May God richly bless you and your loved ones as we journey together in faith.']",
      photoUrl: "/images/papa 1.png",
      isPlaceholderMessage: true,
    }
  },

  beliefs: [
    {
      title: "The Holy Scriptures",
      description: "We believe the Holy Bible, containing the Old and New Testaments, is the inspired, authoritative, and infallible Word of God, serving as the sufficient rule for faith and practice.",
      scriptureReference: "2 Timothy 3:16-17"
    },
    {
      title: "The Triune God",
      description: "We believe in one eternal God, creator and sustainer of all things, eternally existing in three co-equal persons: Father, Son, and Holy Spirit.",
      scriptureReference: "Matthew 28:19"
    },
    {
      title: "Jesus Christ the Savior",
      description: "We believe in Jesus Christ, truly God and truly man, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered for our sins, died upon the Cross, arose bodily on the third day, and ascended into heaven.",
      scriptureReference: "John 14:6, 1 Corinthians 15:3-4"
    },
    {
      title: "Salvation by Grace through Faith",
      description: "We believe that salvation is the free gift of God received through personal repentance and faith in Jesus Christ, whose sacrificial atonement cleanses from all sin.",
      scriptureReference: "Ephesians 2:8-9"
    },
    {
      title: "The Holy Sacraments",
      description: "We observe the two dominical sacraments ordained by Christ: Holy Baptism as the sign of regeneration and entrance into the Covenant of Grace, and Holy Communion (the Lord's Supper) as the remembrance of Christ's redeeming sacrifice.",
      scriptureReference: "Luke 22:19-20, Matthew 28:19"
    },
    {
      title: "Christian Living & Sanctification",
      description: "We believe that genuine faith expresses itself through holy living, loving service, active prayer, integrity, and reaching out to the marginalized and needy.",
      scriptureReference: "James 2:17, Galatians 5:22-23"
    }
  ],

  timeline: [
    {
      year: "1856–1870s",
      title: "Establishment of Methodist Episcopal Mission in North India",
      description: "Early Methodist Episcopal missionaries and Indian evangelists initiated educational, medical, and gospel work across the United Provinces (modern Uttar Pradesh).",
      category: "historical",
      verifiedSource: "Methodist Episcopal Missionary Society Annals & Regional Conference Records"
    },
    {
      year: "1898",
      title: "Methodist Episcopal Presence in Bulandshahr",
      description: "Historical church records mark the formal establishment of Methodist Episcopal ministry and Christian congregation work in Bulandshahr district, laying foundations for local worship, literacy, and community care.",
      category: "milestone",
      verifiedSource: "Church Archival Records & North India Conference Historical Gazettes (1898)"
    },
    {
      year: "1920s–1950s",
      title: "Growth of Bulandshahr Congregation & Community Service",
      description: "Expansion of regular church worship services, choral development, pastoral visitations, and compassionate welfare assistance to rural and town families throughout Bulandshahr district.",
      category: "historical",
      verifiedSource: "District Parish Registers & Episcopal Conference Reports"
    },
    {
      year: "Late 20th Century",
      title: "Organizational Transitions in Southern Asia",
      description: "Period of evolving ecclesiastical structures and administrative discussions across the region. Note on Historical & Legal Context: While various organizational reorganizations occurred during the 1970s–1980s across Indian Protestantism, MECSA maintains its distinct continuing identity and historical ecclesiastical tradition.",
      category: "historical",
      isDisputedContext: true,
      verifiedSource: "Regional Ecclesiastical History & Official Church Documentation"
    },
    {
      year: "Present Day",
      title: "Continuing Ministry & Episcopal Leadership",
      description: "Methodist Episcopal Church in Southern Asia actively ministers as a living faith body under Bishop Khadim M. Lawrence, Rev. Kavita Lawrence, and church advisory leadership in Bulandshahr, keeping the historic heritage alive through worship, discipleship, and charity.",
      category: "continuing",
      verifiedSource: "Current MECSA Church Register & Administrative Records"
    }
  ],

  historicalDocuments: [
    {
      id: "doc-1898-foundation",
      title: "1898 Bulandshahr Missionary & Parish Entry Record",
      date: "Circa 1898",
      documentType: "Record",
      category: "Foundational Archives",
      description: "Archival registry recording early Methodist Episcopal worship assemblies, pastoral appointments, and mission activities in Bulandshahr.",
      previewExcerpt: "Records of the Methodist Episcopal Conference documenting the establishment and pastoral assignments in Bulandshahr District, North India...",
      filePlaceholderNotice: "[Historical document scan and PDF archive can be viewed or uploaded here once digital preservation is completed by church administrators.]"
    },
    {
      id: "doc-1914-conference",
      title: "North India Conference Historical Minutes & Statistical Register",
      date: "Early 20th Century",
      documentType: "Publication",
      category: "Conference Minutes",
      description: "Published conference journals outlining regional district superintendencies, church buildings, and educational initiatives in western UP.",
      previewExcerpt: "Statistical reporting on Sunday schools, congregation membership, and pastoral districts including Bulandshahr station...",
      filePlaceholderNotice: "[Historical conference journal excerpts available upon request from church archives.]"
    },
    {
      id: "doc-parish-commemoration",
      title: "Church Centenary & Heritage Commemorative Records",
      date: "Historical Archives",
      documentType: "Certificate",
      category: "Heritage Records",
      description: "Episcopal declarations, pastoral milestone certificates, and records affirming continuous Christian service in the Bulandshahr circuit.",
      previewExcerpt: "Affirmation of continuing spiritual duty, property stewardship, and Gospel witness under the Methodist Episcopal tradition in Southern Asia...",
      filePlaceholderNotice: "[Official commemorative certificate repository placeholder.]"
    },
    {
      id: "doc-present-administration",
      title: "MECSA Contemporary Episcopal & Pastoral Resolution",
      date: "Current Era",
      documentType: "Record",
      category: "Episcopal Governance",
      description: "Official documents and administrative resolutions detailing the present-day governance, leadership structure, and pastoral appointments of MECSA.",
      previewExcerpt: "Pastoral and administrative resolutions affirmed under the leadership of Bishop Khadim M. Lawrence and the advisory council of MECSA...",
      filePlaceholderNotice: "[Official administrative resolutions maintained by the MECSA Secretariat.]"
    }
  ],

  coreValues: [
    {
      title: "Faith",
      description: "Unwavering trust in the Lord Jesus Christ, anchored in the authority of God's Word and prayer.",
      iconName: "Shield"
    },
    {
      title: "Love",
      description: "Reflecting God's agape love by embracing all people with warmth, grace, respect, and hospitality.",
      iconName: "Heart"
    },
    {
      title: "Service",
      description: "Demonstrating servant leadership through practical community aid, relief, and uplifting those in need.",
      iconName: "HandHelping"
    },
    {
      title: "Compassion",
      description: "Walking alongside the hurting, visiting the sick, comforting the sorrowful, and caring for families.",
      iconName: "Users"
    },
    {
      title: "Unity",
      description: "Preserving the bond of peace across our congregation, families, and wider Christian fellowship.",
      iconName: "Layers"
    },
    {
      title: "Evangelism",
      description: "Faithfully sharing the Good News of salvation in Jesus Christ with humility, joy, and truth.",
      iconName: "Compass"
    }
  ],

  sourcesAndReferences: [
    {
      citation: "Methodist Episcopal Church Missionary Society Records & Annual Reports",
      details: "Historical publications documenting the expansion of Methodist Episcopal circuits, educational facilities, and stations across North India from the late 19th century onward."
    },
    {
      citation: "District Gazetteer of Bulandshahr & Regional Christian Missions Annals (1898)",
      details: "Historical records noting the presence and early community contributions of Christian missions and church congregations in the district of Bulandshahr, UP."
    },
    {
      citation: "MECSA Contemporary Church Secretariat & Episcopal Archive, Bulandshahr",
      details: "Current administrative registries, pastoral appointments, and congregational records maintained by the Methodist Episcopal Church in Southern Asia."
    }
  ],

  gallery: [
    {
      id: "gal-1",
      url: "/images/gal 1.jpeg",
      title: "Church Sanctuary at Dawn",
      caption: "A serene morning in the house of the Lord, prepared for worship and prayer.",
      alt: "Peaceful church sanctuary with natural light"
    },
    {
      id: "gal-2",
      url: "/images/gal 2.jpeg",
      title: "Altar & Holy Communion Table",
      caption: "The sacred altar set for the commemoration of the Lord's Supper.",
      alt: "Church altar table with cross and communion elements"
    },
    {
      id: "gal-3",
      url: "/images/gal 3.jpeg",
      title: "Congregation Gathering & Hymn Singing",
      caption: "Church members joining together in worship and praise.",
      alt: "Church congregation united in worship"
    },
    {
      id: "gal-4",
      url: "/images/choir.jpeg",
      title: "Sacred Choral Harmonies",
      caption: "The choir lifting voices in sacred anthems and traditional hymns.",
      alt: "Church choir singing during Sunday service"
    },
    {
      id: "gal-5",
      url: "/images/gal 5.jpeg",
      title: "Community Outreach & Care",
      caption: "Extending Christ's hands of service to vulnerable families in the community.",
      alt: "Church volunteers distributing community support"
    },
    {
      id: "gal-6",
      url: "/images/gal 6.jpeg",
      title: "Youth Fellowship & Bible Study",
      caption: "Young believers growing together in Scripture study and prayer.",
      alt: "Youth group members engaged in Bible discussion"
    }
  ]
};
