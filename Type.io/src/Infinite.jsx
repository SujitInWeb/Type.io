import { useEffect, useRef, useState } from "react";

export default function Infinite() {
  const words ="Jack quickly amazed five bright wizards vexing lazy dogs near the frozen quarryThe quirky fox jumped over six dazzling wizards before night froze six quick gnomes bright lanterns flickered quietly Jovial kings played quirky music before vexed zebras danced around the fire Twelve amazing foxes quickly jumped behind the frozen quartz hill Bright quartz gems flicker when joyful wizards mix their potions at dawn Lazy dogs were puzzled as five quirky zebras jumped over the frozen hedge Wizards quickly jump from blazing quartz hills to vex lazy foxes near dawn".split(' ');
  
  const [displayText , setDisplayText] = useState('');
  const [currentIndex , setCurrentIndex] =useState(0);
  const [typoCount,setTypoCount] = useState(0);
  const [mistakes, setMistakes] = useState(new Set());
  const textRef = useRef(null);

  const wordsCount = words.length;
  
  const element = document.querySelector('.txt');


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

    if(textRef.current) {
      textRef.current.scrollTop = 0;
    }
  }

  useEffect(() => {
    newGame();
  }, []);


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

      const expectedChar = displayText[currentIndex];

      if(e.key === expectedChar){
        setCurrentIndex(prev => prev+1);
      }
      else{
        setMistakes(prev => new Set([...prev,currentIndex]));
        setTypoCount(prev =>prev +1);
        setCurrentIndex(prev =>prev +1);
      }
    }
    window.addEventListener('keypress',handlekeypress);
    return () => window.removeEventListener('keypress',handlekeypress);
  },[currentIndex,displayText]);

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
      <div className="h-screen bg-[#000000] w-full text-white p-4 m-0 flex justify-around flex-col items-center">
          <div className="calculator  text-xl  mt-10 border-[#F0F6FC]/20 lg:p-8 p-7 shadow-xl shadow-[#181919] flex  justify-between items-center  bg-[#F0F6FC]/10 backdrop-blur-md w-full lg:h-15 h-9 rounded-lg border-1 ">
            <p className="typo lg:text-lg md:text-xl text-sm text-white">Typo : {typoCount}</p>
            <button onClick={newGame} className="lg:px-3.5 px-2.5 py-1.5 lg:text-lg md:text-xl text-sm text-[#000] lg:py-2  bg-white/50 hover:bg-white/80 font-[Roboto] rounded-lg cursor-pointer transition duration-280" >Restart</button>
          </div>
          <div className="paragraph relative flex justify-center flex-wrap  lg:p-10  w-full  rounded-lg  ">
            <p ref={textRef} className="txt lg:text-2xl md:text-xl text-lg w-full md:w-3/4 xl:w-3/4 p-5 relative z-0 md:p-10 lg:p-10 font-[Electrolize] text-center lg:w-full  h-80 overflow-x-hidden overflow-y-auto ">
              {renderText()}
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent z-10 pointer-events-none "></div>
          </div>
      </div>
    </>
    );
}
