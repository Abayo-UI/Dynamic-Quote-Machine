import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import './App.css';


const quoteArray = [
    { text: "The purpose of our lives is to be happy.", 
      author: "Dalai Lama" 
    },
    { text: "Life is what happens when you’re busy making other plans.",
      author: "John Lennon" 
    },
    { text: "Get busy living or get busy dying.",
      author: "Stephen King" 
    },
    { text: "You only live once, but if you do it right, once is enough.",
      author: "Mae West" 
    },
    { text: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
      author: "Thomas A. Edison" 
    },
    {
      text: "Without hard work, nothing grows but weed ",
      author: " Gordon B.Hinckley"
    },
    {
      text: "I do the very best i know how - the very best I can; and I mean to keep on doing so until the end ",
      author: " Abraham Lincoln "
    },
    {
      text: "Until you spread your wings, you have no idea of how far you can fly.",
      author: " Napoleon "
    },
    {
      text: "Religion is excellent stuff for keeping common people quiet.Religion is what keeps the poor from murdering the rich.",
      author: " Napoleon "
    },
    {
      text: "I am not afraid of an army of lion led by a sheep, I am afraid of an army of sheep led by a lion. ",
      author: " Alexander The Great "
    },
    {
      text: "Don't sleep too much. If you sleep 3 hours less each night for a year, you will have an extra month which is 13 in total to succeed while the rest will have 12 months.",
      author: " Aristotle Onassis"
    },
    {
      text: "Passion is the genesis of genius. ",
      author: " Albert Einstein"
    },
    {
      text: "Impossible is not a fact. It's an opinion. Impossible is not a declaration. It's a dare. Impossible is potential. Impossible is temporary. Impossible is nothing.",
      author: " Muhammad Ali"
    },
    {
      text: "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.",
      author: " Bruce Lee "
    },
    {
      text: "Everyday I ran my race. ",
      author: " Jack Douglous AKA Runtown "
    },
    {
      text: "There are no shortcuts to any place worth going. ",
      author: " Beverly Sills"
    },
    {
      text: "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.",
      author: " Stephen Hawking"
    },
    {
      text: "If you reveal your secrets to the wind, you should not blame the wind for revealling them to the tress. ",
      author: " Kahlil Gibran "
    },
    {
      text: "For us to be where we are currently, we built many systems, chat apps and many projects, but they failed and we didn't give up!",
      author: " Mark Zuckerberg"
    },
    {
      text: "A Gem cannot be polished without friction, nor a man perfected without trials.",
      author: " Nikola Tesla"
    },
    {
      text: "Life shrinks or expands in propotion to one's courage.",
      author: " Anais Nin"
    },
    {
      text: "Eighty percent of success of succes is showing up.",
      author: " Woody Allen "
    },
    {
      text: "The best way to predict your future is to create it.",
      author: " Abraham Lincoln "
    },
    {
      text: "If you reach the end of your rope, tie a knot to it and hang on it.",
      author: " Frankiln D.Roosevelt "
    },
    {
      text: "What happens to you has been waiting to happen since the beginning of time",
      author: " Marcus Aurelius "
    },
    {
      text: "Learning never exhausts the mind. ",
      author: " Leonardo da Vinci "
    },
    {
      text: "A lion chased me up a tree and I enjoyed the view from the top.",
      author: " Budha The Great "
    },
    {
      text: "Discomfort is a wise teacher ",
      author: " Caroline "
    },
    {
      text: "Don't let what you cannot do interfere with what you can do. ",
      author: " John Wooden "
    },
    {
      text: "Have no fear of perfection, you will never reach it. ",
      author: " Salvador Dali "
    },
    {
      text: "Once we accept our limits, we go beyond them. ",
      author: " Albert Einstein "
    },
    {
      text: "It is easier to resist at the beginning than at the end. ",
      author: " Leonardo da Vinci "
    },
    {
      text: "If opportunity doesn't knock, build a door",
      author: " Aurelius "
    },
    {
      text: "Our doubts are traitors and make us lose the good we oft might win by fearing to attempt. ",
      author: " William Shakespeare "
    },
    {
      text: "The greatest deception men suffer from, is their own opinions. ",
      author: " Leornado da Vinci "
    },
    {
      text: "I will prepare and someday my chance will come. ",
      author: " Abraham Lincoln "
    },
    {
      text: "Talent is luck, the important thing in life is courage. ",
      author: " Woody Allen "
    },
    {
      text: "Confine yourself to the present. ",
      author: " Marcus Aurelius "
    },
    {
      text: "Most people don't listen with the intent to understand, but they listen with the intent to reply. ",
      author: " Stephen Covey "
    },
    {
      text: "The man who asks a question is  a fool for a minute, the man who does not ask is a fool for life. ",
      author: " Budha The Great "
    },
    {
      text: "To be wronged is nothing, unless you continue to remember it. ",
      author: " Budha The Great "
    },
    {
      text: "The mind is not a vessel to be filled, but a fire to be kindled. ",
      author: " Plutarch "
    },
    {
      text: "Luck is what happens when preparation meets opportunity. ",
      author: " Seneca "
    },
    {
      text: "Kites rise the highest against the wind, not with it. ",
      author: " Winston S.Churchill "
    },
    {
      text: "Everything you can imagine is real. ",
      author: " Pablo Picasso "
    },
    {
      text: "Be alone, that is the secret of invention. Be alone, that is when ideas are born. ",
      author: " Nikola Tesla "
    },
    {
      text: "You can tell the greatness of a man by what makes him angry. ",
      author: " Abraham Lincoln "
    },
    {
      text: "You are never given more pain than you can handle. ",
      author: " Byron Katie "
    },
    {
      text: "Pay attention to your enemies, as they are the first to discover your mistakes. ",
      author: " Antisthenes "
    },
    {
      text: "He who angers you, conquers you ",
      author: " Elizabeth Kenny "
    },
    {
      text: "I’m like Robin Hood, I take from the rich and give to the poor. Plata O Plomo.",
      author: " Pablo Escobar "
    },
    {
      text: "The only thing am addicted to is wining. ",
      author: " Pablo Escobar "
    },
    {
      text: "My enemies are not my enemies, but my teachers. They teach me how to be stronger. ",
      author: " Pablo Escobar "
    },
];


function MyComponent(){  
  const [quote, setQuote] = useState(quoteArray[8]);
  const [bgcolor, setBgColor] = useState("gray");

  function randomColorFunction(){
    const red = Math.floor(Math.random()*128);
    const blue = Math.floor(Math.random()*128);
    const green = Math.floor(Math.random()*128);

    return `rgb(${red}, ${blue}, ${green})`;
   }
  
  const changeQuote =() => {
    const randomNumber = Math.floor(Math.random()*quoteArray.length);
     setQuote(quoteArray[randomNumber]);
     setBgColor(randomColorFunction)
  }
  return(
    <div className="body" style={{backgroundColor: bgcolor}}>
      <div  style={{margin:" 5rem auto", height:"auto",backgroundColor:"lightgray"}} className="col-lg-4 col-10 p-4 rounded-3">
         <p style={{fontSize:"1.5rem", textAlign:"justify", color: bgcolor}}>  
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
           <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
           </svg>
           {quote.text}</p>

           <p style={{textAlign:"right", color: bgcolor}}>- {quote.author}</p>
         <div style={{height:"auto", display:"flex", flexDirection:"row", justifyContent:"space-between"}}> 
          <div>
          <button className="border border-none me-2" style={{backgroundColor: bgcolor, color: "white"}}>
           <a href="https://twitter.com/intent/tweet?text=%22Hello%2C%20world!%22" style={{color: "white"}}>
           <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
           <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
           </svg>
           </a>
           </button>

          <button className="border border-none" style={{backgroundColor: bgcolor, color: "white"}}>
          <a  target="_blank" rel="noreferrer" href="https://www.facebook.com/freecodecamp"  style={{color: "white"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
          </svg>
          </a>
          </button>
          </div>
        
      <button onClick={changeQuote} style={{backgroundColor: bgcolor, color: "white", border: "none"}}> New Quote </button>
    </div>
    </div>
    </div>
  )
}


ReactDOM.render(<MyComponent/>, document.querySelector('#root'))

export default MyComponent;
