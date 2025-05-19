const translations = {
  nl: {
    // Navigation
    nav: {
      home: "Home",
      studyTips: "Studietips",
      relaxation: "Ontspanning",
      pomodoro: "Pomodoro/Todo",
      contact: "Contact",
    },
    // Home page
    home: {
      welcome: "Welkom!",
      intro: "Studeren kan soms overweldigend zijn.",
      description:
        "Deadlines stapelen zich op, taken worden vergeten en pauzes schieten erbij in. StudyBuddy is hier om je te helpen!",
      features:
        "Op deze website vind je handige studietips, een eenvoudige takenlijst om je planning overzichtelijk te houden en ontspanningsoefeningen om gefocust en gemotiveerd te blijven.",
    },
    // Contact page
    contact: {
      title: "Stuur ons gerust een vraag of suggestie!",
      name: "Naam*",
      email: "E-mail*",
      message: "Bericht*",
      send: "Verstuur",
    },
    // Pomodoro
    pomodoro: {
      workTime: "Werk Tijd",
      restTime: "Rust Tijd",
      start: "Start",
      pause: "Pauze",
      resume: "Hervatten",
      reset: "Reset",
      todo: "📋 Taken Lijst",
      addTask: "Voeg taak toe...",
      add: "Toevoegen",
    },
    // Study Tips
    studyTips: {
      tip1: {
        title: "Test jezelf",
        content:
          "Vermijd passief lezen van teksten, maar ga op zoek naar actieve manieren om jezelf te testen, bijvoorbeeld laten ondervragen door iemand. Door jezelf regelmatig te overhoren of quizjes te maken over de leerstof, dwing je je brein om actief te herinneren wat je geleerd hebt. Dit heet <a href='https://www.learningscientists.org/retrieval-practice' target='_blank'><b>retrieval practice</b></a> en is veel effectiever dan herlezen. Gebruik bijvoorbeeld <a href='https://apps.ankiweb.net/' target='_blank'><b>flashcards</b></a> of apps zoals <a href='https://apps.ankiweb.net/' target='_blank'><b>Anki</b></a> om dit toe te passen.",
      },
      tip2: {
        title: "Herhaling werkt",
        content:
          "Probeer niet alle leerstof op één moment te studeren. Je haalt de beste resultaten door deze momenten te spreiden, bijvoorbeeld kortere sessies 1 keer per week. Deze aanpak heet <a href='https://www.learningscientists.org/spaced-practice' target='_blank'><b>gespreid leren</b></a> of <a href='https://www.gwern.net/Spaced-repetition' target='_blank'><b>spaced repetition</b></a>. Door regelmatig terug te keren naar leerstof, consolideer je de informatie beter in je <a href='https://www.simplypsychology.org/long-term-memory.html' target='_blank'><b>langetermijngeheugen</b></a>. Maak bijvoorbeeld een <a href='https://todoist.com/productivity-methods/spaced-repetition' target='_blank'><b>studieschema</b></a> waarin je leerstof op verschillende dagen opnieuw bekijkt.",
      },
      tip3: {
        title: "Focus op begrijpen, niet memoriseren",
        content:
          "Zorg ervoor dat je de <a href='https://www.learningscientists.org/blog/2016/7/7-1' target='_blank'><b>'waarom'</b></a> begrijpt, en niet zomaar kan opsommen wat er geschreven stond. Als je de onderliggende <a href='https://www.learningscientists.org/elaboration' target='_blank'><b>logica</b></a> of <a href='https://www.mindtools.com/ayg48t3/meaningful-learning' target='_blank'><b>samenhang</b></a> snapt, kun je de informatie beter toepassen op nieuwe situaties, zoals in examens of projecten. Probeer dus leerstof in <a href='https://en.wikipedia.org/wiki/Feynman_technique' target='_blank'><b>eigen woorden</b></a> uit te leggen aan iemand anders – dat is een goede test van begrip.",
      },
      tip4: {
        title: "Gebruik de Pomodoro techniek",
        content:
          "Werk in kortere <a href='https://pomofocus.io/' target='_blank'><b>intervallen</b></a> van 20 tot 50 minuten, en neem dan een vaste pauze van 5 tot 10 minuten. <br /><br />Hou hier niet te hard aan vast en voorzie langere pauzes op langere studeersessies. Deze <a href='https://francescocirillo.com/products/the-pomodoro-technique' target='_blank'><b>techniek</b></a> helpt je om gefocust te blijven en voorkomt <a href='https://www.headspace.com/articles/prevent-mental-fatigue' target='_blank'><b>mentale uitputting</b></a>. <br /><br />Gebruik bijvoorbeeld een <a href='https://pomofocus.io/' target='_blank'><b>timer</b></a> en combineer het met een <a href='https://todoist.com/' target='_blank'><b>to-dolijst</b></a> om je voortgang bij te houden. <br /><br />Na vier Pomodoro-sessies is een langere pauze van 15 tot 30 minuten aangeraden.",
      },
      tip5: {
        title: "Kies je omgeving zorgvuldig",
        content:
          "Zoek uit wat voor jou het beste werkt: <a href='https://www.noisli.com/' target='_blank'><b>stilte</b></a>, <a href='https://www.focusatwill.com/' target='_blank'><b>muziek</b></a>, of het achtergrondgeluid van een <a href='https://coffitivity.com/' target='_blank'><b>koffiebar</b></a>. <br /><br />Experimenteer met verschillende <a href='https://www.sciencedirect.com/science/article/pii/S0272494418305280' target='_blank'><b>omgevingen</b></a> en ontdek waar jij het productiefst bent. Soms helpt een aparte plek specifiek voor studeren om in de juiste <a href='https://www.verywellmind.com/what-is-a-mindset-2795025' target='_blank'><b>mindset</b></a> te komen. <br /><br />Vergeet ook niet je gsm of <a href='https://freedom.to/' target='_blank'><b>sociale media</b></a> uit te schakelen tijdens het studeren.",
      },
      tip6: {
        title: "Slaap, voeding en beweging doen wonderen",
        content:
          "Voldoende <a href='https://www.sleepfoundation.org/sleep-hygiene' target='_blank'><b>slapen</b></a>, <a href='https://www.health.harvard.edu/blog/nutritional-psychiatry-your-brain-on-food-201511168626' target='_blank'><b>gezond eten</b></a> en regelmatige <a href='https://www.cdc.gov/physicalactivity/basics/pa-health/index.htm' target='_blank'><b>beweging</b></a> zijn de basis voor jouw <a href='https://www.headspace.com/articles/how-to-improve-focus-and-concentration' target='_blank'><b>concentratievermogen</b></a>. <br /><br />Plan dus een <a href='https://www.health.harvard.edu/blog/regular-exercise-changes-brain-improve-memory-thinking-skills-201404097110' target='_blank'><b>wandeling</b></a> in op een drukke dag, en merk zelf het verschil! Je hersenen functioneren optimaal als je lichaam goed verzorgd is. <br /><br />Kies voor voedzame maaltijden, drink genoeg <a href='https://www.healthline.com/nutrition/7-health-benefits-of-water' target='_blank'><b>water</b></a> en vermijd overmatig <a href='https://www.healthline.com/nutrition/caffeine-side-effects' target='_blank'><b>cafeïnegebruik</b></a>. <br /><br />Ook een korte <a href='https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise/art-20048389' target='_blank'><b>workout</b></a> of <a href='https://www.healthline.com/health/benefits-of-stretching' target='_blank'><b>stretchmoment</b></a> kan je focus snel verbeteren.",
      },
    },
    // Relaxation
    relaxation: {
      activities: {
        title: "Activiteiten",
        button: "Geef me een activiteit!",
        defaultText: "Klik op de knop voor een idee.",
        motivationTitle: "Motivatie van de dag:",
        weather: "Weer",
      },
      meditation: {
        title: "Guided Meditation Videos",
        button: "Geef me een meditatie video!",
        description:
          "Klik op de knop om een willekeurige begeleide meditatie video te zien.",
      },
      stretch: {
        title: "Stretch Reminder",
        button: "Geef me een stretch oefening!",
        description: "Klik op de knop om een stretch oefening te zien.",
      },
    },
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      studyTips: "Study Tips",
      relaxation: "Relaxation",
      pomodoro: "Pomodoro/Todo",
      contact: "Contact",
    },
    // Home page
    home: {
      welcome: "Welcome!",
      intro: "Studying can be overwhelming sometimes.",
      description:
        "Deadlines pile up, tasks are forgotten, and breaks are skipped. StudentBuddy is here to help!",
      features:
        "On this website you'll find useful study tips, a simple task list to keep your planning organized, and relaxation exercises to stay focused and motivated.",
    },
    // Contact page
    contact: {
      title: "Feel free to send us a question or suggestion!",
      name: "Name*",
      email: "Email*",
      message: "Message*",
      send: "Send",
    },
    // Pomodoro
    pomodoro: {
      workTime: "Work Time",
      restTime: "Rest Time",
      start: "Start",
      pause: "Pause",
      resume: "Resume",
      reset: "Reset",
      todo: "📋 Todo List",
      addTask: "Add a task...",
      add: "Add",
    },
    // Study Tips
    studyTips: {
      tip1: {
        title: "Test Yourself",
        content:
          "Avoid passive reading of texts, and look for active ways to test yourself, such as having someone quiz you. By regularly testing yourself or making quizzes about the material, you force your brain to actively recall what you've learned. This is called 'retrieval practice' and is much more effective than re-reading. Use tools like flashcards or apps like Anki to apply this.",
      },
      tip2: {
        title: "Repetition Works",
        content:
          "Try not to study all the material at once. You'll get the best results by spreading these moments out, for example shorter sessions once a week. This approach is called spaced learning or 'spaced repetition'. By regularly returning to material, you consolidate the information better in your long-term memory. Create a study schedule where you review material on different days.",
      },
      tip3: {
        title: "Focus on Understanding, Not Memorizing",
        content:
          "Make sure you understand the 'why' and don't just recite what was written. When you grasp the underlying logic or connections, you can better apply the information to new situations, like in exams or projects. Try explaining the material in your own words to someone else – that's a good test of understanding.",
      },
      tip4: {
        title: "Use the Pomodoro Technique",
        content:
          "Work in shorter intervals of 20 to 50 minutes, then take a fixed break of 5 to 10 minutes. Don't stick to this too rigidly and provide longer breaks during longer study sessions. This technique helps you stay focused and prevents mental exhaustion. Use a timer and combine it with a to-do list to track your progress. After four Pomodoro sessions, a longer break of 15 to 30 minutes is recommended.",
      },
      tip5: {
        title: "Choose Your Environment Carefully",
        content:
          "Figure out what works best for you: silence, music, or the background noise of a coffee shop. Experiment with different environments and discover where you're most productive. Sometimes having a separate place specifically for studying helps get into the right mindset. Don't forget to turn off your phone or social media while studying.",
      },
      tip6: {
        title: "Sleep, Nutrition, and Exercise Work Wonders",
        content:
          "Sufficient sleep, healthy eating, and regular exercise are the foundation for your concentration ability. So plan a walk on a busy day, and notice the difference! Your brain functions optimally when your body is well cared for. Choose nutritious meals, drink enough water, and avoid excessive caffeine use. Even a short workout or stretch break can quickly improve your focus.",
      },
    },
    // Relaxation
    relaxation: {
      activities: {
        title: "Activities",
        button: "Give me an activity!",
        defaultText: "Click the button for an idea.",
        motivationTitle: "Motivation of the day:",
        weather: "Weather",
      },
      meditation: {
        title: "Guided Meditation Videos",
        button: "Give me a meditation video!",
        description:
          "Click the button to see a random guided meditation video.",
      },
      stretch: {
        title: "Stretch Reminder",
        button: "Give me a stretch exercise!",
        description: "Click the button to see a stretch exercise.",
      },
    },
  },
};
