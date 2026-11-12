/* Sample campaign pieces for the /holiday page.
   Every business here is made up. Swap the offers before Black Friday 2027. */

export type HolidayExample = {
  id: string;
  label: string;
  name: string;
  email: { subject: string; preview: string; body: string; cta: string };
  sms: { when: string; text: string }[];
  gift: { headline: string; terms: string; sign: string; why: string };
  social: { tag: string; headline: string; caption: string }[];
  gbp: { title: string; body: string; button: string };
};

export const HOLIDAY_EXAMPLES: HolidayExample[] = [
  {
    id: "coffee",
    label: "Coffee shop",
    name: "Harbor Bean Coffee",
    email: {
      subject: "Your Black Friday treat is ready (plus a bonus for you)",
      preview: "Buy a $50 gift card, get a $10 one free. Through Monday only.",
      body: "Hi [First name],\n\nThe holidays are coming in fast, so we made gifting easy.\n\nThis weekend only, buy a $50 Harbor Bean gift card and we'll give you a $10 bonus card to keep for yourself. Black Friday through Cyber Monday, in store or online.\n\nSmall Business Saturday: free pastry with any drink, all day.\n\nThanks for making us part of your mornings this year.",
      cta: "Buy a gift card",
    },
    sms: [
      {
        when: "Teaser · Tue Nov 24",
        text: "Harbor Bean: Black Friday starts Friday. Buy a $50 gift card, get a $10 bonus card. Reply STOP to opt out.",
      },
      {
        when: "Launch · Fri Nov 27",
        text: "It's live! $50 gift card gets you a $10 bonus card. In store or [link]. Ends Monday. Reply STOP to opt out.",
      },
      {
        when: "Last call · Mon Nov 30",
        text: "Last call: the $10 bonus card ends tonight at close. [link] Reply STOP to opt out.",
      },
    ],
    gift: {
      headline: "Give $50, get $10",
      terms: "Bonus card valid Jan 1 to Feb 28",
      sign: "Buy a $50 gift card this weekend and the next coffee is on us. Ask at the register.",
      why: "The bonus card only works in January and February, so it brings regulars back during the slowest weeks of the year.",
    },
    social: [
      {
        tag: "Coming Friday",
        headline: "Black Friday is coming to the counter",
        caption: "Friday through Monday: buy a $50 gift card, get a $10 bonus card. The easiest gift on your list.",
      },
      {
        tag: "Black Friday",
        headline: "Give $50. Get $10.",
        caption: "It's on. Gift cards in store and online through Monday. Tag the person you're buying for.",
      },
      {
        tag: "Small Business Saturday",
        headline: "Shop small. Pastry on us.",
        caption: "Free pastry with any drink, all day Saturday. Thank you for keeping local coffee alive in our town.",
      },
    ],
    gbp: {
      title: "Black Friday gift card bonus",
      body: "Buy a $50 gift card Nov 27 through Nov 30 and get a $10 bonus card. Free pastry with any drink on Small Business Saturday.",
      button: "Order online",
    },
  },
  {
    id: "restaurant",
    label: "Restaurant",
    name: "Oak & Ember Kitchen",
    email: {
      subject: "The gift that gets you a free dinner too",
      preview: "$100 in gift cards gets you a $25 bonus card. Friday to Monday.",
      body: "Hi [First name],\n\nOur biggest gift card deal of the year starts Friday.\n\nBuy $100 in Oak & Ember gift cards and get a $25 bonus card for yourself. Black Friday through Cyber Monday, at the host stand or online.\n\nPlanning a holiday party? Our private room is booking up for December. Reply to this email and we'll hold a date for you.\n\nSee you at the table.",
      cta: "Buy gift cards",
    },
    sms: [
      {
        when: "Teaser · Tue Nov 24",
        text: "Oak & Ember: Friday we open our best gift card deal of the year. $100 in cards, $25 bonus for you. Reply STOP to opt out.",
      },
      {
        when: "Launch · Fri Nov 27",
        text: "It's live: $100 in gift cards gets you a $25 bonus card. Through Monday only. [link] Reply STOP to opt out.",
      },
      {
        when: "Last call · Mon Nov 30",
        text: "Ends tonight: $25 bonus card with $100 in gift cards. Booking December parties now too. [link] Reply STOP to opt out.",
      },
    ],
    gift: {
      headline: "Give $100, get $25",
      terms: "Bonus card valid Jan 2 to Mar 31",
      sign: "Holiday gift cards: buy $100, take home a $25 bonus card for yourself. Ask your server.",
      why: "Guests buy gifts now at full value, and the bonus card pulls them back in during the quiet weeks after New Year.",
    },
    social: [
      {
        tag: "Coming Friday",
        headline: "Our best gift card deal lands Friday",
        caption: "$100 in gift cards, $25 bonus card for you. Black Friday through Cyber Monday.",
      },
      {
        tag: "Black Friday",
        headline: "$100 in. $25 back.",
        caption: "Live now at the host stand and online. The easiest gift for the food lover in your life.",
      },
      {
        tag: "Small Business Saturday",
        headline: "Shop small. Eat local.",
        caption: "Grab a gift card, stay for dinner. Thanks for keeping our kitchen busy this year.",
      },
    ],
    gbp: {
      title: "Gift card bonus: $25 on $100",
      body: "Nov 27 to Nov 30, get a $25 bonus card with every $100 in gift cards. Now booking December holiday parties.",
      button: "Buy",
    },
  },
  {
    id: "gym",
    label: "Gym or studio",
    name: "Ironline Fitness",
    email: {
      subject: "Black Friday: 3 months for the price of 2",
      preview: "Our only membership sale of the year. Ends Monday.",
      body: "Hi [First name],\n\nIf you've been meaning to get back into a routine, this is the week.\n\nBlack Friday through Cyber Monday: 3 months of membership for the price of 2. Lock it in now and start any day before January 15.\n\nAlready a member? Gift a friend a 5-class pack and your next class is on us.",
      cta: "Claim the deal",
    },
    sms: [
      {
        when: "Teaser · Tue Nov 24",
        text: "Ironline: our only membership sale of the year starts Friday. 3 months for the price of 2. Reply STOP to opt out.",
      },
      {
        when: "Launch · Fri Nov 27",
        text: "It's live: 3 months for the price of 2. Start any day before Jan 15. [link] Reply STOP to opt out.",
      },
      {
        when: "Last call · Mon Nov 30",
        text: "Last day for 3 months at the price of 2. Ends at midnight. [link] Reply STOP to opt out.",
      },
    ],
    gift: {
      headline: "Gift a 5-class pack",
      terms: "Buyer gets a free class",
      sign: "Give the gift of a stronger new year. Buy a 5-class pack for a friend, your next class is free.",
      why: "Gift packs bring new people through the door, and members bring friends who already have a reason to come back.",
    },
    social: [
      {
        tag: "Coming Friday",
        headline: "One sale. Once a year.",
        caption: "Friday through Monday: 3 months for the price of 2. Start any day before January 15.",
      },
      {
        tag: "Black Friday",
        headline: "3 months. Pay for 2.",
        caption: "Live now. Your new year can start early. Link in bio.",
      },
      {
        tag: "Small Business Saturday",
        headline: "Shop small. Train local.",
        caption: "Gift a 5-class pack today and your next class is on us.",
      },
    ],
    gbp: {
      title: "Black Friday: 3 months for the price of 2",
      body: "Nov 27 to Nov 30 only. Start your membership any day before January 15. Class pack gift cards available.",
      button: "Sign up",
    },
  },
];
