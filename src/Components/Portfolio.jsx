/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Telegram Bot",
    description:
      "Developed a Telegram bot using the Telegram REST API and Python programming language to provide users with detailed information about cars. The bot utilizes web scraping techniques with Beautiful Soup and Selenium to navigate through interlinked websites like a crawler, extracting hard-to-find geeky features such as BHP, torque, CC, gearbox, and engine details",
    url: "https://github.com/engorgedspirit/web_scraping",
  },
  {
    title: "Automatic Proxy Rotating Script",
    description:
      "Developed an automatic proxy rotating script written in Python. The script performs web scraping on different pre-entered sites or internal databases to collect thousands of proxy IP addresses. It then checks the functionality of these proxies by testing them on sites equipped with built-in proxy checkers or blockers. Only verified working proxies are provided as output. The script also includes an automatic IP rotation feature that changes the device's IP address every 5 minutes or as configured using proxy rotation techniques in Python.",
    url: "https://github.com/engorgedspirit/web_scraping",
  },
  {
    title: "Tune-Tidbitter",
    description:
      "A simplified UI for performing Spotify-like functionalities.  Users can request to perform typical actions available on Spotify through our site. Additionally, users can paste song links to scrape lyrics from the web and even process complete playlists. The project integrates technologies such as Python, Spotify API, Postman, and other relevant tools.",
    url: "https://github.com/engorgedspirit/tune-tidbitter",
  },
  {
    title: "CarLytics",
    description:
      "The web application allows users to enter different types or categories of cars as prompts, such as 'sports' or 'city,' and generates three creative and relevant suggestions for car names specific to that category.",
    url: "https://github.com/engorgedspirit/MS-openAI",
  },
  {
    title: "GitMatrix",
    description:
      "This fun project allows users to add random commits to their Git profile on different dates. Users can specify the number of commits they want to make, and the project generates random commit messages for each commit. Additionally, users can control the commit dates to create dot matrix-like patterns in their GitHub profile.",
    url: "https://github.com/engorgedspirit/git-bot",
  },
  {
    title: "Language Guesser",
    description:
      "The Language Guesser project is built using Node.js and incorporates various npm modules, including franc, langs, and express. Its purpose is to predict the language of a given sentence from a vast array of more than 6000 languages and their subtypes.",
    url: "https://github.com/engorgedspirit/language_guesser",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
