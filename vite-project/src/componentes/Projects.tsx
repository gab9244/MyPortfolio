export const Projects = () => {
  return (
    <div id="Projects">
      <section>
        <a href="https://gab9244.github.io/ProjectBattleShip/" target="_blank">
        <img
          src="MyPortfolio/battleshipScreenShot.png"
          alt="A Battleship screenshot"
          
        />
        </a>
        <p>This project was one of the hardest I've ever done because I couldn't find a way to place the ship and didn't know how to make it so the ships wouldn't overlap each other, but after some time, I find a solution that was rather simple: I just used the length of the ships in the if statement, and after that, it was easy.</p>
      </section>

      <section >
      <a href="https://gab9244.github.io/MultiStepForm/"  target="_blank">
        <img
          src="MyPortfolio/MultiSF.png"
          alt="A MultiStepForm screenshot"
         
        />
      </a>
        <p>I don't have a lot to say about this one; it was just a little hard because it was the first "big" project I did using React, but to not say it didn't bring any challenges, I had a hard time using form validation on React, but I solved it using a library that validated the form easily.</p>
      </section>

      <section >
      <a href="https://gab9244.github.io/projectRockPaperScissors/" target="_blank">
        <img
          src="MyPortfolio/RockPS.png"
          alt="A Rock Paper and Scissors screenshot"
          
        />
       </a>
        <p>This was just a practice of my React skills; I just used some if statements.</p>
      </section>
      <a href="https://github.com/gab9244" target="_blank" id="More">More</a>
    </div>
  );
};
