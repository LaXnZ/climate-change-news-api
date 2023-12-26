const PORT = process.env.PORT || 8080;
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();

const newpapers = [
  {
    name: "cityam",
    address: "https://www.cityam.com/topic/climate-change/",
    base: "",
  },
  {
    name: "bbc",
    address: "https://www.bbc.com/news/topics/cmj34zmwm1zt",
    base: "https://www.bbc.com",
  },
  {
    name: "newyorktimes",
    address: "https://www.nytimes.com/section/climate",
    base: "",
  },
  {
    name: "washingtonpost",
    address: "https://www.washingtonpost.com/climate-environment/",
    base: "",
  },
  {
    name: "wsj",
    address: "https://www.wsj.com/news/types/environment",
    base: "",
  },
  {
    name: "telegraph",
    address: "https://www.telegraph.co.uk/climate-change/",
    base: "https://www.telegraph.co.uk",
  },
  {
    name: "independent",
    address: "https://www.independent.co.uk/environment/climate-change",
    base: "https://www.independent.co.uk",
  },
  {
    name: "times",
    address: "https://www.thetimes.co.uk/environment/climate-change",
    base: "",
  },
  {
    name: "sun",
    address: "https://www.thesun.co.uk/topic/climate-change-environment/",
    base: "https://www.thesun.co.uk",
  },
  {
    name: "dailymail",
    address:
      "https://www.dailymail.co.uk/news/climate_change_global_warming/index.html",
    base: "",
  },
  {
    name: "express",
    address: "https://www.express.co.uk/latest/climate-change",
    base: "https://www.express.co.uk",
  },
  {
    name: "mirror",
    address: "https://www.mirror.co.uk/all-about/climate-change",
    base: "",
  },
  {
    name: "dailystar",
    address: "https://www.dailystar.co.uk/latest/climate-change",
    base: "",
  },
  {
    name: "metro",
    address: "https://metro.co.uk/tag/climate-change/",
    base: "",
  },
  {
    name: "economist",
    address: "https://www.economist.com/climate-change",
    base: "https://www.economist.com",
  },
  {
    name: "guardian",
    address: "https://www.theguardian.com/environment/climate-crisis",
    base: "",
  },
  {
    name: "atlantic",
    address: "https://www.theatlantic.com/category/climate/",
    base: "",
  },
  {
    name: "newyorker",
    address: "https://www.newyorker.com/tag/climate-change",
    base: "",
  },
  {
    name: "conversation",
    address: "https://theconversation.com/uk/environment",
    base: "https://theconversation.com",
  },
  {
    name: "national_geographic",
    address: "https://www.nationalgeographic.com/environment/",
    base: "",
  },
  {
    name: "scientific_american",
    address: "https://www.scientificamerican.com/climate/",
    base: "",
  },
  {
    name: "nature",
    address: "https://www.nature.com/nclimate/",
    base: "https://www.nature.com",
  },

  {
    name: "greenpeace_climate_change",
    address: "https://www.greenpeace.org/international/topic/climate-change/",
    base: "https://www.greenpeace.org",
  },
  {
    name: "climate_action_tracker",
    address: "https://climateactiontracker.org/",
    base: "https://climateactiontracker.org",
  },
];

const articles = [];

newpapers.forEach((newspaper) => {
  axios
    .get(newspaper.address)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);

      $('a:contains("climate")', html).each(function () {
        const title = $(this).text();
        const url = $(this).attr("href");

        articles.push({
          title,
          url: newspaper.base + url,
          source: newspaper.name,
        });
      });
    })
    .catch((err) => console.log(err));
});

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.get("/news", (req, res) => {
  res.json(articles);
});

app.get("/news/:newspaperId", (req, res) => {
  const newspaperId = req.params.newspaperId;

  const newspaperAddress = newpapers.filter(
    (newspaper) => newspaper.name == newspaperId
  )[0].address;

  const newspaperBase = newpapers.filter(
    (newspaper) => newspaper.name == newspaperId
  )[0].base;

  axios
    .get(newspaperAddress)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const specificArticles = [];

      $('a:contains("climate")', html).each(function () {
        const title = $(this).text();
        const url = $(this).attr("href");

        specificArticles.push({
          title,
          url: newspaperBase + url,
          source: newspaperId,
        });
      });
      res.json(specificArticles);
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
