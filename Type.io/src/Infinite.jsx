
import { useEffect, useRef, useState } from "react";

export default function Infinite() {
  const words ="Jack quickly amazed five bright wizards vexing lazy dogs near the frozen quarryThe quirky fox jumped over six dazzling wizards before night froze six quick gnomes bright lanterns flickered quietly Jovial kings played quirky music before vexed zebras danced around the fire Twelve amazing foxes quickly jumped behind the frozen quartz hill Bright quartz gems flicker when joyful wizards mix their potions at dawn Lazy dogs were puzzled as five quirky zebras jumped over the frozen hedge Wizards quickly jump from blazing quartz hills to vex lazy foxes near dawn".split(' ');
  
  const [displayText , setDisplayText] = useState('');
  const [currentIndex , setCurrentIndex] =useState(0);
  const [typoCount,setTypoCount] = useState(0);
  const textRef = useRef(null);

  const wordsCount = words.length;
  
  
  function randomWord(){
    const randomIndex = Math.floor(Math.random() *wordsCount);
    return words[randomIndex];
  }
  function newGame(){
    let text = '';
    for (let i=0 ;i< 200 ;i++){
      text += randomWord() + " ";
    }
    setDisplayText(text.trim());
    setCurrentIndex(0);
    setTypoCount(0);
  }

  useEffect(() => {
    newGame();
  }, []);


  useEffect(() => {
    function handlekeypress(e){
      if(e.key.length > 1) return;

      const expectedChar = displayText[currentIndex];

      if(e.key === expectedChar){
        setCurrentIndex(prev => prev+1);
      }
      else if(e.key != expectedChar){
        setTypoCount(prev =>prev +1);
        setCurrentIndex(prev =>prev +1);
        className = ' text-red-400';
      }
      else{
        setCurrentIndex(prev =>prev +1);
      }
    }
    window.addEventListener('keydown',handlekeypress);
    return () => window.removeEventListener('keydown',handlekeypress);
  },[currentIndex,displayText]);

  const renderText = () => {
    return displayText.split('').map((char,index) =>{
      let className = 'char'
      if(index < currentIndex){
        className += ' text-green-400';
      }else if(index === currentIndex){
        className += ' bg-[#053aa5] text-white';
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
      <div className="h-screen bg-[#010409] text-white p-4 m-0 flex justify-around flex-col items-center">
          <div className="calculator text-xl  border-[#F0F6FC]/20 p-8 flex justify-between items-center  bg-[#F0F6FC]/10 backdrop-blur-md w-full h-15 rounded-lg border-1 ">
            <p className="typo text-white">Typo : {typoCount}</p>
          </div>
          <div className="paragraph flex shadow-lg justify-center box-border  p-10 bg-[#F0F6FC]/10 backdrop-blur-md w-full h-100 border-[#F0F6FC]/20 rounded-lg border-1 ">
            <p ref={textRef} className="txt p-10 font-[Electrolize] text-center text-2xl w-190 h-60 overflow-x-hidden overflow-y-hidden gap-0.5">
              {renderText()}
            </p>
          </div>
      </div>
    </>
    );
}
