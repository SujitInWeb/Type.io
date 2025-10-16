import { useEffect, useState } from "react";

export default function Infinite() {
  const words ="Jack quickly amazed five bright wizards vexing lazy dogs near the frozen quarryThe quirky fox jumped over six dazzling wizards before night froze six quick gnomes bright lanterns flickered quietly Jovial kings played quirky music before vexed zebras danced around the fire Twelve amazing foxes quickly jumped behind the frozen quartz hill Bright quartz gems flicker when joyful wizards mix their potions at dawn Lazy dogs were puzzled as five quirky zebras jumped over the frozen hedge Wizards quickly jump from blazing quartz hills to vex lazy foxes near dawn".split(' ');
  
  const [displayText , setDisplayText] = useState('');
  const wordsCount = words.length;
  
  function randomWord(){
    const randomIndex = Math.floor(Math.random() *wordsCount);
    return words[randomIndex];
  }
  function newGame(){
    let text = '';
    for (let i=0 ;i< 200 ;i++){
      text += randomWord() + ' ';
    }
    setDisplayText(text.trim());
  }
  useEffect(() => {
    newGame();
  }, []);
  return (
    <>
      <div className="h-screen bg-[#010409] text-white p-4 m-0 flex justify-around flex-col items-center">
          <div className="calculator border-[#3D444D]  bg-[#eef5fc27] w-full h-15 rounded-lg border-1 ">

          </div>
          <div className="paragraph flex shadow-lg justify-center box-border  p-10 bg-[#F0F6FC]/10 backdrop-blur-md w-full h-100 border-[#F0F6FC]/20 rounded-lg border-1 ">
            <p className="txt p-10 text-center text-xl w-200 h-60 overflow-x-hidden overflow-y-hidden gap-0.5  ">
              {displayText}
            </p>
          </div>
      </div>
    </>
    );
}
