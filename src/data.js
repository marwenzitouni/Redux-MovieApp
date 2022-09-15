const data = [
  {
    Director: {
      Name: "J.J. Abrams",
      Bio: "Jeffrey Jacob Abrams is an American film director, producer, and screenwriter. He is known for his work in the genres of action, drama, and science fiction.",
      Birth: "1966",
    },
    Genre: {
      Name: "Science Fiction",
      Description:
        "Science fiction (or sci-fi) is a film genre that uses speculative, fictional science-based depictions of phenomena that are not fully accepted by mainstream science, such as extraterrestrial lifeforms, alien worlds, extrasensory perception and time travel, along with futuristic elements.",
    },
    _id: "60b7f6508671710327fe0061",
    Title: "Star Trek",
    Description:
      "Aboard the USS Enterprise, the most-sophisticated starship ever built, a novice crew embarks on its maiden voyage. Their path takes them on a collision course with Nero (Eric Bana), a Romulan commander whose mission of vengeance threatens all mankind. If humanity would survive, a rebellious young officer named James T. Kirk (Chris Pine) and a coolly logical Vulcan named Spock (Zachary Quinto) must move beyond their rivalry and find a way to defeat Nero before it is too late.",
    ImageURL:
      "https://i.pinimg.com/originals/82/8b/b3/828bb3783453b22bb9f8ff59a77658da.jpg",
    Featured: false,
    Release: "2009",
    Rating: 4,
  },
  {
    Director: {
      Name: "Joss Whedon",
      Bio: "Joseph Hill Whedon is an American film and television director, producer, screenwriter, and composer. He is the founder of Mutant Enemy Productions, co-founder of Bellwether Pictures, and is best known as the creator of several television series.",
      Birth: "1964",
    },
    Genre: {
      Name: "Adventure",
      Description:
        "Adventure films are a genre of film whose plots feature elements of travel. They typically involve protagonists who must leave their home or place of comfort and go to far away lands to fulfill a goal. Settings play an important role in adventure films, sometimes as big as the characters themselves.",
    },
    _id: "60b7f1ec8671710327fe005b",
    Title: "The Avengers",
    Description:
      "When Thor's evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury's dream team are Iron Man (Robert Downey Jr.), Captain America (Chris Evans), the Hulk (Mark Ruffalo), Thor (Chris Hemsworth), the Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner).",
    ImageURL:
      "https://i.pinimg.com/originals/0f/03/e6/0f03e6733b0cf567cc92e8e20290462f.jpg",
    Featured: true,
    Release: "2012",
    Rating: 3.5,
  },
  {
    Director: {
      Name: "Matthew Vaughn",
      Bio: "Matthew Allard Robert Vaughn is an English film producer, director, and screenwriter. He has produced films including Lock, Stock and Two Smoking Barrels (1998) and Snatch (2000), and directed Stardust (2007), X-Men: First Class (2011), Kingsman: The Secret Service (2014) and its sequel Kingsman: The Golden Circle (2017).",
      Birth: "1971",
    },
    Genre: {
      Name: "Fantasy",
      Description:
        "A fantasy story is about magic or supernatural forces, as opposed to technology as seen in science fiction.",
    },
    _id: "60b7f4788671710327fe005e",
    Title: "Stardust",
    Description:
      "To win the heart of his beloved (Sienna Miller), a young man named Tristan (Charlie Cox) ventures into the realm of fairies to retrieve a fallen star. What Tristan finds, however, is not a chunk of space rock, but a woman (Claire Danes) named Yvaine. Yvaine is in great danger, for the king's sons need her powers to secure the throne, and an evil witch (Michelle Pfeiffer) wants to use her to achieve eternal youth and beauty.",
    ImageURL:
      "https://images-na.ssl-images-amazon.com/images/I/5100B4U4ylL._AC_.jpg",
    Featured: true,
    Release: "2007",
    Rating: 1,
  },
  {
    Director: {
      Name: "Matthew Vaughn",
      Bio: "Matthew Allard Robert Vaughn is an English film producer, director, and screenwriter. He has produced films including Lock, Stock and Two Smoking Barrels (1998) and Snatch (2000), and directed Stardust (2007), X-Men: First Class (2011), Kingsman: The Secret Service (2014) and its sequel Kingsman: The Golden Circle (2017).",
      Birth: "1971",
    },
    Genre: {
      Name: "Adventure",
      Description:
        "Adventure films are a genre of film whose plots feature elements of travel. They typically involve protagonists who must leave their home or place of comfort and go to far away lands to fulfill a goal. Settings play an important role in adventure films, sometimes as big as the characters themselves.",
    },
    _id: "60b7f5c08671710327fe0060",
    Title: "X-Men: First Class",
    Description:
      "In the early 1960s, during the height of the Cold War, a mutant named Charles Xavier (James McAvoy) meets a fellow mutant named Erik Lehnsherr (Michael Fassbender). Despite their vastly different backgrounds -- Charles grew up with a wealthy family, while Erik lost his parents at Auschwitz -- the two become close friends. As the world teeters on the brink of a nuclear war, Charles and Erik with other mutants join forces to save humanity. However, a situation soon tears the friends apart.",
    ImageURL:
      "https://m.media-amazon.com/images/M/MV5BMTg5OTMxNzk4Nl5BMl5BanBnXkFtZTcwOTk1MjAwNQ@@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
    Featured: false,
    Release: "2011",
    Rating: 5,
  },
  {
    Director: {
      Name: "Jon Watts",
      Bio: "John Watts is an American film director, producer, and screenwriter. His credits include directing the Marvel Cinematic Universe (MCU) superhero films Spider-Man: Homecoming and Spider-Man: Far From Home, and the upcoming Spider-Man: No Way Home; he has also signed to direct the MCU's Fantastic Four.",
      Birth: "1981",
    },
    Genre: {
      Name: "Adventure",
      Description:
        "Adventure films are a genre of film whose plots feature elements of travel. They typically involve protagonists who must leave their home or place of comfort and go to far away lands to fulfill a goal. Settings play an important role in adventure films, sometimes as big as the characters themselves.",
    },
    _id: "60b7f84d8671710327fe0064",
    Title: "Spider-Man: Homecoming",
    Description:
      "Thrilled by his experience with the Avengers, young Peter Parker returns home to live with his Aunt May. Under the watchful eye of mentor Tony Stark, Parker starts to embrace his newfound identity as Spider-Man. He also tries to return to his normal daily routine -- distracted by thoughts of proving himself to be more than just a friendly neighborhood superhero. Peter must soon put his powers to the test when the evil Vulture emerges to threaten everything that he holds dear.",
    ImageURL:
      "https://media.vanityfair.com/photos/592592596736887ada186bcd/master/w_1600%2Cc_limit/spider-man-homecoming-SMH_DOM_Online_FNL_1SHT_3DRD3DIMX_AOJ_300dpi_01_rgb.jpg",
    Featured: false,
    Release: "2017",
    Rating: 4.5,
  },
  {
    Director: {
      Name: "Alfonso Cuarón",
      Bio: "Alfonso Cuarón is a Mexican film director, producer, screenwriter, cinematographer and editor. Cuaron is the first Mexico-born filmmaker to win the Academy Award for Best Director.[2] He has been nominated for Academy Awards in six different categories,[a] a record he shares with Walt Disney and George Clooney.",
      Birth: "1961",
    },
    Genre: {
      Name: "Fantasy",
      Description:
        "A fantasy story is about magic or supernatural forces, as opposed to technology as seen in science fiction.",
    },
    _id: "60b7f75a8671710327fe0063",
    Title: "Harry Potter and the Prisoner of Azkaban",
    Description:
      "Harry Potter's (Daniel Radcliffe) third year at Hogwarts starts off badly when he learns deranged killer Sirius Black (Gary Oldman) has escaped from Azkaban prison and is bent on murdering the teenage wizard. While Hermione's (Emma Watson) cat torments Ron's (Rupert Grint) sickly rat, causing a rift among the trio, a swarm of nasty Dementors is sent to protect the school from Black. A mysterious new teacher helps Harry learn to defend himself, but what is his secret tie to Sirius Black?",
    ImageURL:
      "https://static.wikia.nocookie.net/harrypotter/images/a/a8/Harry_Potter_and_the_Prisoner_of_Azkaban_2.jpg",
    Featured: false,
    Release: "2004",
    Rating: 5,
  },
  {
    Director: {
      Name: "Peter Jackson",
      Bio: "Sir Peter Robert Jackson is a New Zealand film director, producer, and screenwriter. He is best known as the director, writer, and producer of the Lord of the Rings trilogy (2001–03) and the Hobbit trilogy (2012–14), both of which are adapted from the novels of the same name by J. R. R. Tolkien. He is the third-highest-grossing film director of all time, his films having made over $6.5 billion worldwide.",
      Birth: "1961",
    },
    Genre: {
      Name: "Fantasy",
      Description:
        "A fantasy story is about magic or supernatural forces, as opposed to technology as seen in science fiction.",
    },
    _id: "60b7f3048671710327fe005c",
    Title: "The Lord of the Rings: Return of the King",
    Description:
      "The culmination of nearly 10 years of work and conclusion to Peter Jackson's epic trilogy, The Lord of the Rings: The Return of the King presents the final confrontation between the forces of good and evil fighting for control of the future of Middle-earth. Hobbits Frodo and Sam reach Mordor in their quest to destroy the one ring, while Aragorn leads the forces of good against Sauron's evil army at the stone city of Minas Tirith.",
    ImageURL:
      "http://www.limitedruns.com/media/cache/7e/6b/7e6b6743a7e45d096838abd67b2464e2.jpg",
    Featured: false,
    Release: "2003",
    Rating: 3.5,
  },
  {
    Director: {
      Name: "James Gunn",
      Bio: "James Francis Gunn Jr. is an American film director, actor, producer, and screenwriter. He began his career as a screenwriter in the mid-1990s. He then began working as a director, starting with the horror-comedy film Slither (2006), and eventually moving to the superhero genre with Guardians of the Galaxy (2014), its sequel Guardians of the Galaxy Vol. 2 (2017) and The Suicide Squad (2021).",
      Birth: "1966",
    },
    Genre: {
      Name: "Science Fiction",
      Description:
        "Science fiction (or sci-fi) is a film genre that uses speculative, fictional science-based depictions of phenomena that are not fully accepted by mainstream science, such as extraterrestrial lifeforms, alien worlds, extrasensory perception and time travel, along with futuristic elements.",
    },
    _id: "60b7f6b58671710327fe0062",
    Title: "Guardians of the Galaxy",
    Description:
      "Brash space adventurer Peter Quill (Chris Pratt) finds himself the quarry of relentless bounty hunters after he steals an orb coveted by Ronan, a powerful villain. To evade Ronan, Quill is forced into an uneasy truce with four disparate misfits: gun-toting Rocket Raccoon, treelike-humanoid Groot, enigmatic Gamora, and vengeance-driven Drax the Destroyer. But when he discovers the orb's true power and the cosmic threat it poses, Quill must rally his ragtag group to save the universe.",
    ImageURL:
      "https://images-na.ssl-images-amazon.com/images/I/71kvH7JJFlL._AC_SY679_.jpg",
    Featured: false,
    Release: "2014",
    Rating: 5,
  },
  {
    Director: {
      Name: "Jon Favreau",
      Bio: "Jonathan Kolia Favreau is an American actor and filmmaker. As a filmmaker, Favreau has been a presence in the Marvel Cinematic Universe (MCU), mainly with his collaboration with Robert Downey Jr. He directed, produced, and appeared as Happy Hogan in the films Iron Man (2008) and Iron Man 2 (2010).",
      Birth: "1966",
    },
    Genre: {
      Name: "Adventure",
      Description:
        "Adventure films are a genre of film whose plots feature elements of travel. They typically involve protagonists who must leave their home or place of comfort and go to far away lands to fulfill a goal. Settings play an important role in adventure films, sometimes as big as the characters themselves.",
    },
    _id: "60b7f51f8671710327fe005f",
    Title: "Iron Man",
    Description:
      "A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors. Returning to America, Stark refines the suit and uses it to combat crime and terrorism.",
    ImageURL:
      "https://www.themoviedb.org/t/p/original/aGsjgTNMSF0kswDx57YCVPqCivW.jpg",
    Featured: false,
    Release: "2008",
    Rating: 1.5,
  },
  {
    Director: {
      Name: "Steven Spielberg",
      Bio: "Steven Allan Spielberg is an American film director, producer, and screenwriter. He began his career in the New Hollywood era, and is one of the most commercially successful directors in history. Spielberg is the recipient of various accolades, including two Academy Awards for Best Director, a Kennedy Center honor, and a Cecil B. DeMille Award.",
      Birth: "1946",
    },
    Genre: {
      Name: "Adventure",
      Description:
        "Adventure films are a genre of film whose plots feature elements of travel. They typically involve protagonists who must leave their home or place of comfort and go to far away lands to fulfill a goal. Settings play an important role in adventure films, sometimes as big as the characters themselves.",
    },
    _id: "60b7f39b8671710327fe005d",
    Title: "Jurassic Park",
    Description:
      "Paleontologists Alan Grant (Sam Neill) and Ellie Sattler (Laura Dern) and mathematician Ian Malcolm (Jeff Goldblum) are among a select group chosen to tour an island theme park populated by dinosaurs created from prehistoric DNA. While the park's mastermind, billionaire John Hammond (Richard Attenborough), assures everyone that the facility is safe, they find out otherwise when various ferocious predators break free and go on the hunt.",
    ImageURL: "https://image.posterlounge.com/images/l/1894261.jpg",
    Featured: false,
    Release: "1993",
    Rating: 3,
  },
];

export default data;
