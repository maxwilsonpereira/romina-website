import german from './german.json';

export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const path = (route: string) => `${base}${route}`;
export const image = (file: string) => `${base}/images/${file}`;

export type Lang = 'de' | 'en';
export type Page = {
  key: string;
  de: string;
  en: string;
  title: [string, string];
  image?: string;
  alt: [string, string];
  headings: string[];
  listFrom?: string[];
  enText: string;
};

export const pages: Page[] = [
  { key: 'home', de: '/', en: '/en/', title: ['Home', 'Home'], image: 'Praxis2-768x512.jpg', alt: ['Mag. Romina Lauzensky im Therapieraum', 'Mag. Romina Lauzensky in the therapy room'], headings: [], enText: `Welcome
Together we create space for growth, joy in life and inner stability. I offer individual, couples and family therapy.
Get in touch
Developing new perspectives
Life sometimes takes its own course and asks us to find a new direction. As painful and difficult as crises can be, they may also offer opportunities for personal growth and development. Working through them often brings valuable experiences and new insights into ourselves. I would be glad to accompany you on this path with my many years of experience and range of methods.` },
  { key: 'offer', de: '/methode-schwerpunkte/', en: '/en/therapeutic-offer/', title: ['Therapeutisches Angebot', 'Therapeutic offer'], image: '09_Romy_cut.jpeg', alt: ['Porträt von Mag. Romina Lauzensky', 'Portrait of Mag. Romina Lauzensky'], headings: ['Meine Themenschwerpunkte'], listFrom: ['Meine Themenschwerpunkte'], enText: `Therapeutic offer
As a person-centred psychotherapist, I place the therapeutic relationship and our shared experience at the heart of my work. I create a protected space where you can meet yourself, listen to your inner world and share with me what is moving you.
Depending on the situation, I accompany you with empathy, appreciation, gentleness, humour and, when helpful, clarity and directness.
My work is primarily based on conversation. When appropriate, I integrate creative methods, the systemic board, imagination and meditative elements into therapy.
In trauma psychotherapy, Brainspotting and eye focus may also be used to help process experiences.
Areas I work with
Anxiety
Burnout
Bipolar disorders
Depression
Eating disorders
Life crises
Couples therapy
Panic attacks
Post-traumatic stress disorders
Sleep disorders
End-of-life accompaniment
Suicidal thoughts
Self-experience for the psychotherapy preparatory programme
Finding meaning and spirituality
Grief and bereavement
Obsessive-compulsive difficulties` },
  { key: 'individual', de: '/einzeltherapie-moedling-wien/', en: '/en/individual-therapy/', title: ['Einzeltherapie', 'Individual therapy'], image: 'IMG_1576-1024x641.jpg', alt: ['Symbolbild zur Einzeltherapie', 'Image accompanying individual therapy'], headings: ['Meine Kompetenzbereiche'], listFrom: ['Meine Kompetenzbereiche'], enText: `Individual therapy
As a person-centred psychotherapist, I place the therapeutic relationship and our shared experience at the heart of my work. I create a protected space where you can meet yourself, listen to your inner world and share with me what is moving you.
Depending on the situation, I accompany you with empathy, appreciation, gentleness, humour and, when helpful, clarity and directness.
My work is primarily based on conversation. When appropriate, I integrate creative methods, the systemic board, imagination and meditative elements into therapy.
In trauma psychotherapy, Brainspotting and eye focus may also be used to help process experiences.
Areas of expertise
Anxiety
Burnout
Bipolar disorders
Depression
Eating disorders
Life crises
Couples therapy
Panic attacks
Post-traumatic stress disorders
Sleep disorders
End-of-life accompaniment
Suicidal thoughts
Self-experience for the psychotherapy preparatory programme
Finding meaning and spirituality
Grief and bereavement
Obsessive-compulsive difficulties` },
  { key: 'couples', de: '/paartherapie-moedling-wien/', en: '/en/couples-therapy/', title: ['Paartherapie', 'Couples therapy'], image: 'IMG_1568-1024x668.jpg', alt: ['Symbolbild zur Paartherapie', 'Image accompanying couples therapy'], headings: ['Beziehungsmuster verstehen und verändern', 'Raum für Veränderung'], listFrom: ['Paartherapie kann dabei unterstützen,'], enText: `Couples therapy
When a relationship becomes difficult, it does not necessarily mean the end.
Sometimes couples find themselves in recurring conflicts, no longer feel understood, or lose their connection. What once created closeness can suddenly lead to arguments, withdrawal or disappointment.
Couples therapy offers a way to understand these dynamics together and develop new ways of relating to one another.
Understanding and changing relationship patterns
Together we look at these patterns and try to understand what lies behind each person's reactions. The aim is to develop new ways of communicating and interacting, with more clarity, mutual understanding and room to act.
This is not about finding someone to blame. Both partners should be able to bring their perspective and needs into the conversation and take responsibility for their own part in shaping the relationship.
Space for change
Couples therapy can help you
begin talking to each other again,
understand conflicts better and work through them differently,
recognise recurring relationship patterns,
become more aware of your needs and boundaries,
rebuild trust and emotional closeness,
deal with change and crises,
or approach a separation consciously and respectfully.
Couples therapy does not mean staying together at any cost. It can also help a couple find clarity about the path they want to take.
If you feel you can no longer find a way forward together, a first joint appointment may be a good start.` },
  { key: 'family', de: '/familientherapie-moedling-wien/', en: '/en/family-therapy/', title: ['Familientherapie', 'Family therapy'], image: 'familientherapie.jpg', alt: ['Symbolbild zur Familientherapie', 'Image accompanying family therapy'], headings: ['Gemeinsam neue Wege finden', 'Raum für jede Stimme'], enText: `Family therapy
When something changes within a family, it usually affects everyone.
Families are living systems. Hurt, separation, blended family arrangements or loss can present significant challenges.
Family therapy is a place to make these dynamics visible together and develop new ways of relating to one another.
Finding new ways together
In therapy, the different perspectives and needs of family members have room. The aim is to encourage mutual understanding, recognise entrenched patterns and develop new ways of communicating and interacting.
Space for every voice
I want to create a protected, appreciative setting where each person can be seen and heard. When different needs meet, outside support can sometimes help people reconnect.
Change often begins when we stop fighting one another and start understanding one another better.` },
  { key: 'trauma', de: '/traumapsychotherapie-moedling-wien/', en: '/en/trauma-psychotherapy/', title: ['Traumapsychotherapie', 'Trauma psychotherapy'], image: 'traumatherapie-1024x679.jpg', alt: ['Symbolbild zur Traumapsychotherapie', 'Image accompanying trauma psychotherapy'], headings: ['Augenfokus / Brainspotting', 'Sicherheit und Selbstbestimmung'], enText: `Trauma psychotherapy
Some experiences continue to affect us long after they have passed.
Trauma refers to psychological overwhelm caused by an event or ongoing situation that exceeds a person's ability to cope. Examples include accidents, violence, loss, neglect and other distressing experiences.
Not every difficult event becomes a trauma. What matters is how a person processes the experience and what traces it leaves. These may later appear as anxiety, inner restlessness, sleep problems, distressing memories, physical responses or difficulties in relationships.
Trauma is therefore not only what happened, but also what continues to affect a person afterwards. It is not always caused by a single experience. Prolonged strain, repeated hurt and difficult relationship experiences can also leave a lasting mark.
The therapeutic process follows your individual situation and what feels possible and right for you at the time.
Eye focus / Brainspotting
This work begins by observing the direction of the gaze, which is used deliberately to access physical and emotional experiences. Working with distressing memories can be accompanied by carefully developed resource points to help ease their emotional intensity.
Safety and self-determination
For me, trauma therapy is not about working through as much as possible as quickly as possible. What matters is that you feel safe and sufficiently stable during therapy.
You set the pace. Together we pay attention to what is possible now and what kind of therapeutic work suits you. Stabilisation, resources and building a sense of safety can be just as important as processing the trauma itself.` },
  { key: 'creative', de: '/psychotherapie-mit-kuenstlerischen-und-erlebnisorientierten-elementen/', en: '/en/creative-psychotherapy/', title: ['Kreative Interventionen', 'Creative interventions'], image: 'IMG_1567-1024x675.jpg', alt: ['Künstlerisches Material', 'Art materials'], headings: ['Vom Denken zum Erleben', 'Imagination und innere Bilder', 'Meditation und Entspannung'], listFrom: ['Was spüre ich gerade?'], enText: `Creative interventions
Sometimes we cannot find words for what moves us.
That is why I combine conversation with creative, imaginative and body-oriented elements in my psychotherapy practice. These may include painting, making and modelling with clay, imagery, meditation and relaxation techniques.
These methods can open a path to inner experiences, feelings and needs that are not always easy to put into words.
From thinking to experiencing
Many people are used to thinking, analysing and functioning a great deal. Particularly in difficult times, it can help to step out of the cycle of thoughts for a moment and bring attention back to your own experience.
What am I sensing right now?
What am I feeling?
What do I need?
What happens in my body when I pause?
Therapy is about arriving consciously in the here and now and reconnecting with your own experience, moving beyond thinking alone toward feelings, the body and inner awareness.
Imagination and inner images
Imaginative approaches can also be an important part of therapy. These include elements of guided affective imagery, in which inner images become a way of exploring personal experience.
With traumatic experiences, imagery can help build inner safety and stability. One possibility is developing a personal “safe place”: an inner image of protection, calm and safety that can be revisited in therapy.
What matters throughout is what feels right for you and fits your present state.
Meditation and relaxation
My many years of experience with meditation and relaxation techniques can also inform mindfulness and body-oriented exercises in therapy.
They can help you pause, sharpen your awareness and return to the present moment.` },
  { key: 'alpacas', de: '/tiergestuetzte-psychotherapie-mit-alpakas/', en: '/en/alpaca-assisted-psychotherapy/', title: ['Tiergestützte Psychotherapie mit Alpakas', 'Alpaca-assisted psychotherapy'], image: 'IMG_1034.jpeg', alt: ['Alpaka im Freien', 'Alpaca outdoors'], headings: ['Beziehung erleben statt nur darüber sprechen'], enText: `Alpaca-assisted psychotherapy
Out of the head. Into experience.
Sometimes it helps to leave a familiar room and experience something quite different.
Be outside. Breathe. Slow down.
Observe an animal. Feel your own body again.
Allow closeness without forcing it.
Notice boundaries. Make contact. Simply be here and now for a moment.
In alpaca-assisted psychotherapy in Mödling, I combine psychotherapy with direct experience in nature. Contact with the animal can help you return to yourself.
Alpacas respond directly to their surroundings and to the behaviour of the person with them. Meeting them invites you to slow down, pay attention and become more aware of your body and feelings.
Experiencing relationships, not only talking about them
Particularly when working on relationship themes, an animal can open a special space for experience.
We can talk about trust, closeness and distance, boundaries, contact and communication, while also experiencing how these themes appear in direct contact with the animal.
This creates an opportunity to understand your relationship patterns and notice them in the here and now, making new experiences possible.` },
  { key: 'practical', de: '/therapeutischer-ablauf/', en: '/en/practical-information/', title: ['Rahmenbedingungen', 'Practical information'], image: 'Praxis2-768x512.jpg', alt: ['Therapieraum in der Praxis', 'Therapy room in the practice'], headings: ['Erstgespräch', 'Zielgruppe', 'Meine Schweigepflicht', 'Absageregelung', 'Kosten'], enText: `Practical information
First meeting
The first meeting gives us an opportunity to get to know one another and lets you decide whether you can imagine working with me in psychotherapy. It matters to me that you feel comfortable and well looked after, so that together we can turn to your concerns and goals.
Who I work with
My therapy is for adolescents, adults and older people, as well as couples and families.
Confidentiality
Psychotherapy is deeply personal. Under §15 of the Austrian Psychotherapy Act, I am bound by confidentiality. You can therefore bring your concerns to me in confidence.
Cancellation
Keeping agreed appointments is important to the therapeutic process and reflects mutual respect.
Please cancel appointments by SMS or email 48 hours (two working days) in advance.
Fees
I am happy to tell you about my fees personally. A reduced social rate may be possible in special circumstances. The original site lists contributions from health insurers; please ask me for the current amounts.` },
  { key: 'about', de: '/ueber-mich/', en: '/en/about/', title: ['Über mich', 'About me'], image: 'romina01-684x1024.jpg', alt: ['Porträt von Mag. Romina Lauzensky', 'Portrait of Mag. Romina Lauzensky'], headings: ['Ausbildungen', 'Arbeitserfahrungen', 'Meine Interessen'], listFrom: ['Ausbildungen', 'Arbeitserfahrungen', 'Meine Interessen'], enText: `About me
For a long time I have been interested in what gives people orientation in life: the meaning they find in it, what connects them to others, and the many different ways people shape their lives.
During my studies in cultural and social anthropology, I sought answers to these questions in different cultures and ways of life. Today I continue this interest through psychotherapy. I bring my curiosity about individual life stories together with a well-founded range of therapeutic methods to accompany people on their own paths.
Training
Trauma psychotherapy course, VÖPP Vienna
Brainspotting, Brainspotting Austria
Equine-assisted psychotherapy, VÖPP Vienna
Life, grief and end-of-life accompaniment, Kardinal König Haus
Specialist psychotherapy training, VRP – Verein Rogerianische Psychotherapie
Degree in cultural and social anthropology, specialising in intercultural communication and medical anthropology
Systemic counselling and coaching, The Greenfield Vienna
Certified NLP Practitioner, Mindtraining Institute for Personal Development
Systemic family and organisational constellations, WIFI Vienna
Professional experience
Independent practice since 2017
Franziskusspital Landstraße, palliative care ward
Verein zb – Centre for Counselling, Training and Development in Korneuburg
Promente Sonnenpark rehabilitation clinic, psychotherapeutic rehabilitation for people with mental illness
Independent psychotherapist in Vienna's 6th district and Mödling
Humanisierte Arbeitsstätte, vocational integration support for people with disabilities
My interests
Board member of KUKUSINN, an association promoting art, culture and personal development at Stift Säusenstein (www.kukusinn.at)
Artistic work in ceramics and oil painting` },
  { key: 'contact', de: '/kontakt/', en: '/en/contact/', title: ['Kontakt', 'Contact'], image: 'Romy13a.jpg', alt: ['Porträt von Mag. Romina Lauzensky', 'Portrait of Mag. Romina Lauzensky'], headings: [], enText: `Contact` },
  { key: 'imprint', de: '/impressum/', en: '/en/imprint/', title: ['Impressum', 'Imprint'], headings: [], alt: ['', ''], enText: `Imprint
The owner of the domain and the person responsible for the content of this website is:
Mag. Romina Lauzensky
Person-centred psychotherapist, listed in the Austrian Federal Ministry of Health's register of psychotherapists, registration no. 10211
Address: Mollardgasse 34/2/40-41, 1060 Vienna, Austria
Phone: +43 681 840 870 22
Website: www.psychotherapie-lauzensky.at
Email: praxis@psychotherapie-lauzensky.at
Professional association: ÖBVP, Austrian Federal Association for Psychotherapy` },
  { key: 'privacy', de: '/datenschutzerklaerung/', en: '/en/privacy/', title: ['Datenschutzerklärung', 'Privacy information'], headings: [], alt: ['', ''], enText: `Privacy information
The privacy policy on the previous website was unavailable when this new website was built. Please contact the practice directly if you have a question about how your information is handled.
The contact form on this website is currently a demonstration only. It does not send or store the information you enter.` }
];

export const pageByKey = Object.fromEntries(pages.map((page) => [page.key, page])) as Record<string, Page>;

export function sourceLines(page: Page, lang: Lang): string[] {
  if (lang === 'en') return page.enText.split('\n').map((line) => line.trim()).filter(Boolean);
  if (page.key === 'privacy') return [
    'Datenschutzerklärung',
    'Die Datenschutzerklärung der bisherigen Website war zum Zeitpunkt der Erstellung dieser neuen Website nicht verfügbar. Wenn Sie Fragen zum Umgang mit Ihren Daten haben, wenden Sie sich bitte direkt an die Praxis.',
    'Das Kontaktformular auf dieser Website ist derzeit nur eine Demonstration. Ihre Eingaben werden weder versendet noch gespeichert.'
  ];
  const source = german.find((entry) => new URL(entry.url).pathname === page.de);
  const lines = source?.text.split('\n').map((line) => line.trim()).filter(Boolean) ?? [];
  if (page.key === 'practical') return [
    lines[0], lines[1], lines.slice(2, 6).join(' '), lines[6], lines.slice(7, 9).join(' '),
    ...lines.slice(9, -1)
  ];
  return lines;
}

export const serviceKeys = ['individual', 'couples', 'family', 'trauma', 'creative', 'alpacas'];
