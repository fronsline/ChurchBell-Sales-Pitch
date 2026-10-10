// Everything that changes per session lives here.
export const pilot = {
  // Mentimeter: one join slide; the questions themselves run in the Mentimeter presentation.
  menti: {
    url: 'menti.com',
    code: '7742 2279',
    qrImage: '/images/pilot/menti-qr.png',
    // true = the Q&A slide also invites questions on Mentimeter; false = spoken questions only.
    qanda: false,
  },

  support: {
    phone: '+91 87227 87228',
    whatsapp: '+91 87227 87228',
    email: 'support@churchbell.in',
    web: 'churchbell.in',
  },

  // Shown top to bottom on the agenda slide. No times on screen, on purpose.
  agenda: [
    { title: 'Session 1: The Whole Picture', items: ['Your challenges', 'Why ChurchBell', 'A quick look at the features', 'Try it on your own phone'] },
    { title: 'Tea Break', items: [], isBreak: true },
    { title: 'Session 2: Live Demo', items: ['ChurchBell in action', 'Keeping your data safe', 'How the pilot will work'] },
    { title: 'Questions & Next Steps', items: ['Your questions', 'Choosing your start date'] },
  ],
};
