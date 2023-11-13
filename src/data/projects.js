import portfolio from "/src/assets/screenshots/portfolio.png";
import podreel from "/src/assets/screenshots/podreel.png";
import weirddogegame from "/src/assets/screenshots/weird-dodge-game.png";
import connect4 from "/src/assets/screenshots/connect-4.png";
import tictactoe from "/src/assets/screenshots/tic-tac-toe.png";
import typinggame from "/src/assets/screenshots/typing-game.png";
import movebutnottoomuch from "/src/assets/screenshots/move-but-not-too-much.png";

const data = [
  {
    "name": "Portfolio Website",
    "img": portfolio,
    "description": "My portfolio website. I made this to showcase my projects and skills.",
    "link": "/",
    "technologies": ["HTML", "SCSS", "JavaScript", "React"]
  },
  {
    "name": "Website for Podreel",
    "img": podreel,
    "description": "This was my first real 'job'. I worked on it for my 2022-23 winter break and am really satisfied with the result",
    "link": "/podreel-website",
    "technologies": ["HTML", "CSS", "JavaScript"]
  },
  {
    "name":"Weird Dodge Game",
    "img": weirddogegame,
    "description":"I made this in one day becuase I was bored. It does not work on mobile, but it is super fun!",
    "link":"/weird-dodge-game",
    "technologies": ["HTML", "CSS", "JavaScript"]
  },
  {
    "name":"Connect-4",
    "img": connect4,
    "description":"A connect-4 ai. You can still win against it but it's a fun challenge. Have fun!",
    "link":"/connect-4",
    "technologies": ["HTML", "CSS", "JavaScript"]
  },
  {
    "name":"Tic Tac Toe",
    "img": tictactoe,
    "description":"A tic tac toe game with an ai. This took me a while to figure out, but now you can't win!",
    "link":"/tic-tac-toe",
    "technologies": ["HTML", "CSS", "JavaScript"]
  },
  {
    "name":"Typing Game",
    "img": typinggame,
    "description":"I created this game to improve my typing skills. How high of a score can you get?",
    "link":"/typing",
    "technologies": ["HTML", "CSS", "JavaScript"]
  },
  {
    "name":"Move, But Not Too Much",
    "img": movebutnottoomuch,
    "description":"My first game. Written in Python over my winter Vacation. See how much you can move.",
    "link":"https://replit.com/@Samgenk/Move-But-Not-Too-Much?v=1",
    "technologies": ["Python"]
  }
]

export default data