import { useEffect, useRef, useState } from "react";

export default function Calculator() {
  const words ="Jack quickly amazed five bright wizards vexing lazy dogs near the frozen quarryThe quirky fox jumped over six dazzling wizards before night froze six quick gnomes bright lanterns flickered quietly Jovial kings played quirky music before vexed zebras danced around the fire Twelve amazing foxes quickly jumped behind the frozen quartz hill Bright quartz gems flicker when joyful wizards mix their potions at dawn Lazy dogs were puzzled as five quirky zebras jumped over the frozen hedge Wizards quickly jump from blazing quartz hills to vex lazy foxes near dawn".split(' ');
  
  const [displayText , setDisplayText] = useState('');
  const [currentIndex , setCurrentIndex] =useState(0);
  const [typoCount,setTypoCount] = useState(0);
  const [mistakes, setMistakes] = useState(new Set());
  const [timeLeft, setTimeLeft]= useState(30);
  const [isGameActive, setIsGameActive] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [wpm, setWpm] = useState(null);
  const timerRef = useRef(null);
  const textRef = useRef(null);

  const wordsCount = words.length;
  
  
  function randomWord(){
    const randomIndex = Math.floor(Math.random() *wordsCount);
    return words[randomIndex];
  }
  // this function is used to restart the game to its initial stage
  function newGame(){
    let text = '';
    for (let i=0 ;i< 200 ;i++){
      text += randomWord() + " ";
    }
    setDisplayText(text.trim());
    setCurrentIndex(0);
    setTypoCount(0);
    setMistakes(new Set());
    setTimeLeft(30);
    setIsGameActive(false);
    setIsGameOver(false);
    setWpm(0);

    if(timerRef.current){
      clearInterval(timerRef.current);
    }

    if(textRef.current) {
      textRef.current.scrollTop = 0;
    }
  }

  useEffect(() => {
    newGame();
  }, []);

  useEffect(() => {
    if (isGameActive && timeLeft > 0){
      timerRef.current = setInterval(() => {
          setTimeLeft((prev) =>{
          const newTime = prev - 1;
          
          const timeElapsed = 30 - newTime;
          const minutes = timeElapsed / 60;
          
          const correctChars = displayText
            .split('')
            .slice(0, currentIndex)
            .filter((_,i) => !mistakes.has(i)).length;

          const correctWords = correctChars / 5;
          
          const calculateWpm = minutes > 0 ? Math.round(correctWords / minutes) : 0;
          setWpm(calculateWpm); 

          if(newTime <= 0 ){
            clearInterval(timerRef.current);
            setIsGameActive(false);
            setIsGameOver(true);
            return 0;
          } 
          return newTime;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current){
        clearInterval(timerRef.current);
      }
    };
  }, [isGameActive]);

  useEffect( () => {
    if(textRef.current){
      const container = textRef.current;
      const currentChar = container.children[currentIndex];

      if(currentChar) {
        const containerRect = container.getBoundingClientRect();
        const charRect = currentChar.getBoundingClientRect();

        const bottomThreshold = containerRect.bottom - (containerRect.height / 3);

        if (charRect.top > bottomThreshold){
          const scrollAmount = charRect.top - containerRect.top -(containerRect.height / 2);
          container.scrollBy({
            top: scrollAmount,
            behavior : 'smooth'
          });
        }
      }
    }
  }, [currentIndex] );

  useEffect(() => {
    function handlekeypress(e){
      if(e.key.length > 1 && e.key !== ' ') return;
      if(isGameOver) return;

      if (!isGameActive) {
        setIsGameActive(true);
      }

      const expectedChar = displayText[currentIndex];

      if(e.key === expectedChar){
        setCurrentIndex(prev => prev+1);
      }
      else{
        setMistakes(prev => new Set([...prev, currentIndex]));
        setTypoCount(prev =>prev +1);
        setCurrentIndex(prev =>prev +1);
      }
    }
    window.addEventListener('keypress',handlekeypress);
    return () => window.removeEventListener('keypress',handlekeypress);
  }, [currentIndex, displayText , isGameActive , isGameOver]);

  const renderText = () => {
    return displayText.split('').map((char,index) =>{
      let className = 'char'
      if(index < currentIndex){
        if(mistakes.has(index)){
          className += ' text-[#B62324]';
        }else{
          className += ' text-[#666666]';
        }
      }else if(index === currentIndex){
        className += ' bg-[#fff] text-black';
      }
      else{
        className +=' text-white';
      }
      return(
        <span key={index} className= {className}>
          {char}
        </span>
      )
    })
  }
  return (
    <>
      <div className="h-screen bg-[#000000] text-white p-4 m-0 flex justify-around flex-col items-center">
          <div className="calculator text-xl  border-[#F0F6FC]/20 p-8 shadow-xl shadow-[#181919] flex justify-between items-center  bg-[#F0F6FC]/10 backdrop-blur-md w-full h-15 rounded-lg border-1 ">
            <p className="typo text-white">Typo : {typoCount}</p>
            <p className=" text-white text-2xl font-bold">Time: {timeLeft}s</p>
            <button onClick={newGame} className="px-3.5 text-[#000] py-2 text-lg bg-white/50 hover:bg-white/80 font-[Roboto] rounded-lg cursor-pointer transition duration-280" >Restart</button>
          </div>
          {isGameOver ? (
            <div className="flex flex-col items-center justify-center gap-6">
              <h2 className="text-5xl font-bold text-white">Time's Up!</h2>
              <div className="bg-gray-900 bg-opacity-50 backdrop-blur-md p-10 rounded-lg border border-gray-700">
                <p className="text-6xl font-bold text-white mb-2">{wpm} WPM</p>
                <p className="text-xl text-gray-400">Words Per Minute</p>
                <p className="text-md text-gray-500 mt-4">Errors: {typoCount}</p>
              </div>
              <button onClick={newGame} className="px-6 py-3 text-xl bg-white bg-opacity-50 hover:bg-opacity-80 text-black rounded-lg cursor-pointer transition duration-300">
                  Try Again
              </button>
            </div>
          ) : (
            <div className="paragraph relative flex justify-center  p-10  w-full  rounded-lg  ">
              <p ref={textRef} className="txt relative z-0  p-10 font-[Electrolize] text-center text-2xl w-190 h-80 overflow-x-hidden overflow-y-auto ">
                {renderText()}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent z-10 pointer-events-none "></div>
            </div>
          )}
      </div>
    </>
    );
}